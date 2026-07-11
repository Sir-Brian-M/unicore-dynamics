import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

function isAdmin(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  return authHeader === "Bearer unicore_admin_session_active";
}

export async function GET(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { data: products, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .order("name", { ascending: true });

    if (error) {
      return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }

    return NextResponse.json(products);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  if (!isAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { slug, stock, price } = await request.json();

    if (!slug) {
      return NextResponse.json({ error: "Missing product slug" }, { status: 400 });
    }

    const updates: Record<string, number> = {};
    if (typeof stock === "number") updates.stock = stock;
    if (typeof price === "number") updates.price = price;

    const { data, error } = await supabaseAdmin
      .from("products")
      .update(updates)
      .eq("slug", slug)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: "Failed to update product" }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
