import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const ref = searchParams.get("ref");

    if (!ref) {
      return NextResponse.json({ error: "Missing order reference" }, { status: 400 });
    }

    const { data: order, error } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("reference", ref)
      .single();

    if (error || !order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    // Filter out private customer information for security
    const safeOrder = {
      reference: order.reference,
      payment_method: order.payment_method,
      payment_status: order.payment_status,
      order_status: order.order_status,
      subtotal: order.subtotal,
      delivery_fee: order.delivery_fee,
      total: order.total,
      items: order.items,
      created_at: order.created_at,
    };

    return NextResponse.json(safeOrder);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
