import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { generateReference } from "@/lib/paystack";
import { sendOrderConfirmationEmail, sendOrderConfirmationSMS } from "@/lib/notifications";

export async function POST(request: NextRequest) {
  try {
    const { email, name, phone, address, paymentMethod, items } = await request.json();

    if (
      !email ||
      !name ||
      !phone ||
      !address ||
      !paymentMethod ||
      !items ||
      !Array.isArray(items) ||
      items.length === 0
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fetch products from Supabase to check stock and prices
    const slugs = items.map((item: { slug: string }) => item.slug);
    const { data: dbProducts, error: dbError } = await supabaseAdmin
      .from("products")
      .select("*")
      .in("slug", slugs);

    if (dbError || !dbProducts) {
      return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }

    // Map DB products by slug for fast lookup
    const productsMap = new Map(dbProducts.map((p) => [p.slug, p]));

    // Validate stock and calculate totals
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = productsMap.get(item.slug);
      if (!product) {
        return NextResponse.json({ error: `Product not found: ${item.slug}` }, { status: 400 });
      }

      if (product.stock < item.quantity) {
        return NextResponse.json(
          {
            error: `Insufficient stock for ${product.name}. Available: ${product.stock}, requested: ${item.quantity}`,
          },
          { status: 400 }
        );
      }

      subtotal += product.price * item.quantity;
      orderItems.push({
        slug: product.slug,
        name: product.name,
        price: product.price,
        quantity: item.quantity,
      });
    }

    const deliveryFee = 350;
    const total = subtotal + deliveryFee;
    const reference = generateReference();

    // Insert order into the database
    const { error: insertError } = await supabaseAdmin.from("orders").insert({
      reference,
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      delivery_address: address,
      payment_method: paymentMethod,
      payment_status: "pending",
      order_status: "placed",
      subtotal,
      delivery_fee: deliveryFee,
      total,
      items: orderItems,
    });

    if (insertError) {
      return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
    }

    // If payment method is pay on delivery, deduct stock immediately
    if (paymentMethod === "delivery") {
      for (const item of orderItems) {
        const product = productsMap.get(item.slug)!;
        const newStock = product.stock - item.quantity;
        await supabaseAdmin
          .from("products")
          .update({ stock: newStock })
          .eq("slug", item.slug);
      }

      // Trigger email and SMS notifications in the background
      const fullOrder = {
        reference,
        customer_name: name,
        customer_email: email,
        customer_phone: phone,
        delivery_address: address,
        payment_method: paymentMethod,
        payment_status: "pending",
        subtotal,
        delivery_fee: deliveryFee,
        total,
        items: orderItems,
      };

      // Await both notifications using Promise.allSettled so that failures in one do not block the other
      await Promise.allSettled([
        sendOrderConfirmationEmail(fullOrder),
        sendOrderConfirmationSMS(fullOrder),
      ]);
    }

    return NextResponse.json({ success: true, reference, total });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
