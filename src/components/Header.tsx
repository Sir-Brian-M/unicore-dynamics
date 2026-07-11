"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Nursery & Infant", href: "/shop?category=Nursery+%26+Infant" },
  { label: "Everyday Essentials", href: "/shop?category=Everyday+Essentials" },
  { label: "Growing Years", href: "/shop?category=Growing+Years" },
  { label: "Play", href: "/shop?category=Play" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-stone/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-1 font-display font-semibold tracking-tight">
            <span className="text-xl text-ink">unicore</span>
            <span className="text-xs text-teal uppercase tracking-[0.2em]">dynamics</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-ink/80 hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/shop"
              aria-label="Search products"
              className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full hover:bg-sand transition-colors"
            >
              <Search size={18} strokeWidth={1.75} />
            </Link>
            <Link
              href="/track-order"
              className="hidden sm:block text-sm text-ink/80 hover:text-ink transition-colors"
            >
              Track order
            </Link>
            <Link
              href="/cart"
              aria-label="Cart"
              className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-sand transition-colors"
            >
              <ShoppingBag size={18} strokeWidth={1.75} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-marigold text-[10px] font-mono font-medium text-ink">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex lg:hidden h-9 w-9 items-center justify-center rounded-full hover:bg-sand transition-colors"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-ink/10 bg-stone">
          <div className="mx-auto max-w-content px-5 sm:px-8 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-base text-ink/85 border-b border-ink/5 last:border-none"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/track-order"
              onClick={() => setOpen(false)}
              className="py-2.5 text-base text-ink/85"
            >
              Track order
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
