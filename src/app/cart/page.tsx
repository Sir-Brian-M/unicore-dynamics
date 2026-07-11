"use client";

import Link from "next/link";
import { Minus, Plus, X, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

const DELIVERY_FEE = 350;

export default function CartPage() {
  const { lines, updateQuantity, removeItem, subtotal } = useCart();
  const total = lines.length > 0 ? subtotal + DELIVERY_FEE : 0;

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-10 sm:py-14">
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-10">
          Your cart
        </h1>

        {lines.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-ink/60">
              Nothing here yet. Let&rsquo;s find what your little one actually needs.
            </p>
            <Link
              href="/shop"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
            >
              Browse the shop
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {lines.map((line) => (
                <div key={line.slug} className="flex items-center gap-4 py-5">
                  <div className="h-20 w-20 rounded-xl bg-sand shrink-0" aria-hidden="true" />
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/shop/${line.slug}`}
                      className="font-display font-semibold text-ink hover:underline underline-offset-2"
                    >
                      {line.name}
                    </Link>
                    <p className="mt-1 font-mono text-sm text-ink/60">
                      {formatPrice(line.price)}
                    </p>
                  </div>

                  <div className="flex items-center rounded-full border border-ink/20">
                    <button
                      aria-label="Decrease quantity"
                      onClick={() => updateQuantity(line.slug, line.quantity - 1)}
                      className="h-9 w-9 flex items-center justify-center hover:bg-sand rounded-full transition-colors"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-7 text-center font-mono text-sm">{line.quantity}</span>
                    <button
                      aria-label="Increase quantity"
                      onClick={() => updateQuantity(line.slug, line.quantity + 1)}
                      className="h-9 w-9 flex items-center justify-center hover:bg-sand rounded-full transition-colors"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <p className="hidden sm:block w-24 text-right font-mono text-sm text-ink">
                    {formatPrice(line.price * line.quantity)}
                  </p>

                  <button
                    aria-label={`Remove ${line.name}`}
                    onClick={() => removeItem(line.slug)}
                    className="h-9 w-9 flex items-center justify-center text-ink/40 hover:text-brick transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-sand p-6 h-fit">
              <h2 className="font-display font-semibold text-ink mb-4">Order summary</h2>
              <div className="space-y-2.5 text-sm">
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
              <Link
                href="/checkout"
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
              >
                Checkout
                <ArrowRight size={16} />
              </Link>
              <p className="mt-3 text-xs text-ink/50 text-center">
                Delivery fee is an estimate for Nairobi and Thika. Other zones calculated at checkout.
              </p>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
