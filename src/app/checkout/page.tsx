"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, Wallet, Truck } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";
import { openPaystackCheckout } from "@/lib/paystack";

const DELIVERY_FEE = 350;

type PaymentMethod = "paystack" | "delivery";

export default function CheckoutPage() {
  const { lines, subtotal, clear } = useCart();
  const router = useRouter();
  const [method, setMethod] = useState<PaymentMethod>("paystack");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const total = subtotal + DELIVERY_FEE;

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const name = String(form.get("name") ?? "");
    const phone = String(form.get("phone") ?? "");
    const address = String(form.get("address") ?? "");

    if (lines.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setSubmitting(true);

    // Create pending order record in database first
    let orderResult;
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name,
          phone,
          address,
          paymentMethod: method,
          items: lines.map((l) => ({ slug: l.slug, quantity: l.quantity })),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to create order");
      }
      orderResult = data;
    } catch (err) {
      setSubmitting(false);
      setError(err instanceof Error ? err.message : "Failed to place order. Please try again.");
      return;
    }

    const { reference } = orderResult;

    if (method === "delivery") {
      // Pay on delivery: order is successfully recorded
      clear();
      router.push(`/checkout/success?ref=${reference}&method=delivery`);
      return;
    }

    // Paystack online payment
    try {
      await openPaystackCheckout({
        email,
        amountKes: total,
        reference,
        metadata: { name, phone, address },
        onSuccess: async (ref) => {
          try {
            const verifyRes = await fetch("/api/paystack/verify", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ reference: ref }),
            });
            const verifyData = await verifyRes.json();
            if (verifyRes.ok && verifyData.verified) {
              clear();
              router.push(`/checkout/success?ref=${ref}&method=paystack`);
            } else {
              setError(
                verifyData.error ||
                  "Payment verification failed. If you were debited, please contact support."
              );
              setSubmitting(false);
            }
          } catch {
            setError(
              "Error verifying payment server side. If you were debited, please contact support with reference " +
                ref
            );
            setSubmitting(false);
          }
        },
        onClose: () => {
          setSubmitting(false);
        },
      });
    } catch (err) {
      setSubmitting(false);
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong starting the payment. Please try again."
      );
    }
  }

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-10 sm:py-14">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-10">
          Checkout
        </h1>

        {lines.length === 0 ? (
          <p className="text-ink/60">
            Your cart is empty. Add something from the shop before checking out.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div className="space-y-8">
              <div>
                <h2 className="font-display font-semibold text-ink mb-4">Delivery details</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    required
                    placeholder="Full name"
                    className="rounded-xl border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal sm:col-span-2"
                  />
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    className="rounded-xl border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="rounded-xl border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal"
                  />
                  <textarea
                    name="address"
                    required
                    placeholder="Delivery address (estate, building, area)"
                    rows={3}
                    className="rounded-xl border border-ink/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal sm:col-span-2"
                  />
                </div>
              </div>

              <div>
                <h2 className="font-display font-semibold text-ink mb-4">Payment method</h2>
                <div className="space-y-3">
                  <label
                    className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                      method === "paystack" ? "border-teal bg-teal/5" : "border-ink/15"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="paystack"
                      checked={method === "paystack"}
                      onChange={() => setMethod("paystack")}
                      className="mt-1"
                    />
                    <div>
                      <p className="flex items-center gap-2 font-medium text-ink text-sm">
                        <Wallet size={16} className="text-teal" />
                        Card or M-Pesa, via Paystack
                      </p>
                      <p className="mt-1 text-xs text-ink/60">
                        Pay securely now. Supports Visa, Mastercard, and M-Pesa mobile money.
                      </p>
                    </div>
                  </label>

                  <label
                    className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-colors ${
                      method === "delivery" ? "border-teal bg-teal/5" : "border-ink/15"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="delivery"
                      checked={method === "delivery"}
                      onChange={() => setMethod("delivery")}
                      className="mt-1"
                    />
                    <div>
                      <p className="flex items-center gap-2 font-medium text-ink text-sm">
                        <Truck size={16} className="text-teal" />
                        Pay on delivery
                      </p>
                      <p className="mt-1 text-xs text-ink/60">
                        Pay cash or M-Pesa when your order arrives. Nairobi and Thika only.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {error && (
                <p className="text-sm text-brick">{error}</p>
              )}
            </div>

            <div className="rounded-2xl bg-sand p-6 h-fit">
              <h2 className="font-display font-semibold text-ink mb-4">Order summary</h2>
              <ul className="space-y-2 mb-4">
                {lines.map((l) => (
                  <li key={l.slug} className="flex justify-between text-sm text-ink/70">
                    <span className="truncate pr-2">
                      {l.name} &times; {l.quantity}
                    </span>
                    <span className="font-mono shrink-0">{formatPrice(l.price * l.quantity)}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2.5 text-sm border-t border-ink/10 pt-4">
                <div className="flex justify-between text-ink/70">
                  <span>Subtotal</span>
                  <span className="font-mono">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-ink/70">
                  <span>Delivery</span>
                  <span className="font-mono">{formatPrice(DELIVERY_FEE)}</span>
                </div>
                <div className="flex justify-between font-semibold text-ink pt-2.5 border-t border-ink/10">
                  <span>Total</span>
                  <span className="font-mono">{formatPrice(total)}</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-6 w-full flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors disabled:opacity-60"
              >
                {submitting
                  ? "Processing..."
                  : method === "paystack"
                  ? `Pay ${formatPrice(total)}`
                  : "Place order"}
              </button>

              <p className="mt-4 flex items-center gap-1.5 text-xs text-ink/50">
                <ShieldCheck size={14} />
                Payments are handled by Paystack, we never see your card details.
              </p>
            </div>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}
