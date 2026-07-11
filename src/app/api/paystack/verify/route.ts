import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { sendOrderConfirmationEmail, sendOrderConfirmationSMS } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const { reference } = await request.json();

    if (!reference) {
      return NextResponse.json({ error: "Missing reference" }, { status: 400 });
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "PAYSTACK_SECRET_KEY is not configured on the server" },
        { status: 500 }
      );
    }

    // Call Paystack verify endpoint
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
        cache: "no-store",
      }
    );

    const paystackData = await res.json();

    if (!res.ok || paystackData?.data?.status !== "success") {
      return NextResponse.json(
        { verified: false, error: "Payment verification failed with Paystack" },
        { status: 200 }
      );
    }

    // Lookup order in Supabase
    const { data: order, error: orderError } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("reference", reference)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { verified: false, error: "Matching order not found in database" },
        { status: 200 }
      );
    }

    // Confirm amount matches (Paystack amount is in cents, database total is in KSh)
    const expectedCents = Math.round(order.total * 100);
    const actualCents = paystackData.data.amount;

    if (actualCents !== expectedCents) {
      return NextResponse.json(
        { verified: false, error: "Payment amount mismatch" },
        { status: 200 }
      );
    }

    // Only update order and deduct stock if order is not already marked paid
    if (order.payment_status !== "paid") {
      // Update order payment status
      const { error: updateError } = await supabaseAdmin
        .from("orders")
        .update({
          payment_status: "paid",
          order_status: "placed",
          updated_at: new Date().toISOString(),
        })
        .eq("reference", reference);

      if (updateError) {
        return NextResponse.json(
          { verified: false, error: "Failed to update order status in database" },
          { status: 500 }
        );
      }

      // Deduct stock for each item in the order
      for (const item of order.items) {
        const { data: product } = await supabaseAdmin
          .from("products")
          .select("stock")
          .eq("slug", item.slug)
          .single();

        if (product) {
          const newStock = Math.max(0, product.stock - item.quantity);
          await supabaseAdmin
            .from("products")
            .update({ stock: newStock })
            .eq("slug", item.slug);
        }
      }

      // Trigger notifications in the background since order is now verified as paid
      const updatedOrderData = {
        ...order,
        payment_status: "paid" as const,
        order_status: "placed" as const,
      };
      void sendOrderConfirmationEmail(updatedOrderData);
      void sendOrderConfirmationSMS(updatedOrderData);
    }

    return NextResponse.json({ verified: true, data: paystackData.data });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
