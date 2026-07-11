"use client";

import { FormEvent, useState } from "react";
import { Search, Package, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import GrowthRuler from "@/components/GrowthRuler";
import { formatPrice } from "@/data/products";

type TrackedOrder = {
  reference: string;
  payment_method: "paystack" | "delivery";
  payment_status: "pending" | "paid" | "failed";
  order_status: "placed" | "processing" | "shipped" | "delivered" | "cancelled";
  subtotal: number;
  delivery_fee: number;
  total: number;
  items: { slug: string; name: string; price: number; quantity: number }[];
  created_at: string;
};

export default function TrackOrderPage() {
  const [ref, setRef] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [order, setOrder] = useState<TrackedOrder | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!ref.trim()) return;

    setLoading(true);
    setError(null);
    setOrder(null);

    try {
      const res = await fetch(`/api/orders/track?ref=${encodeURIComponent(ref.trim())}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Order not found. Please verify the reference number.");
      } else {
        setOrder(data);
      }
    } catch {
      setError("Unable to retrieve order details. Please check your connection.");
    } finally {
      setLoading(false);
    }
  }

  function getRulerHighlight(status: string): number[] {
    switch (status) {
      case "placed":
        return [0];
      case "processing":
        return [0, 1, 2, 3, 4];
      case "shipped":
        return [0, 1, 2, 3, 4, 5, 6, 7, 8];
      case "delivered":
        return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      default:
        return [];
    }
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Track order
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Where is my order?
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Enter the reference number from your confirmation email or SMS.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
            <label htmlFor="order-ref" className="sr-only">
              Order reference
            </label>
            <input
              id="order-ref"
              required
              value={ref}
              onChange={(e) => setRef(e.target.value)}
              placeholder="e.g. unicore_1782..."
              className="w-full rounded-full px-5 py-3.5 text-sm border border-ink/15 focus:outline-none focus:ring-2 focus:ring-teal font-mono text-ink"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors whitespace-nowrap disabled:opacity-60"
            >
              <Search size={16} />
              {loading ? "Searching..." : "Track"}
            </button>
          </form>

          {error && (
            <p className="mt-6 text-sm text-brick bg-brick/10 px-4 py-3 rounded-xl font-medium">
              {error}
            </p>
          )}

          {order && (
            <div className="mt-10 space-y-8 animate-fadeIn">
              {/* Progress Ruler Card */}
              <div className="rounded-2xl bg-sand p-6 sm:p-8">
                <h2 className="font-display font-semibold text-ink text-lg mb-6 flex items-center gap-2">
                  <Package size={20} className="text-teal" />
                  Order Status: <span className="capitalize text-teal">{order.order_status}</span>
                </h2>

                {order.order_status === "cancelled" ? (
                  <div className="bg-brick/10 border border-brick/20 rounded-xl p-4 text-brick text-sm font-medium">
                    This order was cancelled. Please contact customer support for details.
                  </div>
                ) : (
                  <div>
                    {/* Horizontal signature Growth Ruler */}
                    <div className="text-teal/80 bg-stone/20 p-4 rounded-xl border border-ink/5">
                      <GrowthRuler
                        orientation="horizontal"
                        highlight={getRulerHighlight(order.order_status)}
                        className="w-full h-16 text-ink"
                      />
                    </div>
                    {/* Ruler Labels */}
                    <div className="grid grid-cols-4 text-center mt-3 font-mono text-[10px] sm:text-xs text-ink/60">
                      <span className={order.order_status === "placed" ? "text-teal font-semibold" : ""}>
                        Placed
                      </span>
                      <span className={order.order_status === "processing" ? "text-teal font-semibold" : ""}>
                        Processing
                      </span>
                      <span className={order.order_status === "shipped" ? "text-teal font-semibold" : ""}>
                        Shipped
                      </span>
                      <span className={order.order_status === "delivered" ? "text-teal font-semibold" : ""}>
                        Delivered
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Order Details Card */}
              <div className="rounded-2xl border border-ink/10 p-6 sm:p-8 space-y-6 bg-white/40">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-ink/10 pb-6">
                  <div>
                    <p className="text-xs text-ink/50 font-mono">ORDER REFERENCE</p>
                    <p className="font-mono text-sm font-semibold text-ink">{order.reference}</p>
                  </div>
                  <div>
                    <p className="text-xs text-ink/50 font-mono">PLACED ON</p>
                    <p className="text-sm font-semibold text-ink">
                      {new Date(order.created_at).toLocaleDateString("en-KE", {
                        dateStyle: "medium",
                      })}
                    </p>
                  </div>
                </div>

                {/* Items list */}
                <div>
                  <h3 className="font-display font-semibold text-ink mb-4">Items Ordered</h3>
                  <ul className="divide-y divide-ink/10">
                    {order.items.map((item) => (
                      <li key={item.slug} className="py-3 flex justify-between items-center text-sm">
                        <div>
                          <p className="font-medium text-ink">{item.name}</p>
                          <p className="text-xs text-ink/50">Qty: {item.quantity}</p>
                        </div>
                        <span className="font-mono text-ink/80">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Totals & Payment Info */}
                <div className="border-t border-ink/10 pt-6 space-y-3 text-sm">
                  <div className="flex justify-between text-ink/70">
                    <span>Subtotal</span>
                    <span className="font-mono">{formatPrice(order.subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-ink/70">
                    <span>Delivery fee</span>
                    <span className="font-mono">{formatPrice(order.delivery_fee)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-ink pt-3 border-t border-ink/5 text-base">
                    <span>Total</span>
                    <span className="font-mono">{formatPrice(order.total)}</span>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4 pt-4 border-t border-ink/10 text-xs text-ink/60">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck size={14} className="text-teal" />
                      <span>
                        Payment Method:{" "}
                        <span className="capitalize font-semibold">{order.payment_method}</span>
                      </span>
                    </div>
                    <div>
                      <span>
                        Payment Status:{" "}
                        <span
                          className={`capitalize font-semibold ${
                            order.payment_status === "paid" ? "text-teal" : "text-brick"
                          }`}
                        >
                          {order.payment_status}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
