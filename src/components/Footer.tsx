"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import DeveloperModal from "@/components/DeveloperModal";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Nursery & Infant", href: "/shop?category=Nursery+%26+Infant" },
      { label: "Everyday Essentials", href: "/shop?category=Everyday+Essentials" },
      { label: "Growing Years", href: "/shop?category=Growing+Years" },
      { label: "Play", href: "/shop?category=Play" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track your order", href: "/track-order" },
      { label: "Delivery zones", href: "/delivery-zones" },
      { label: "Returns policy", href: "/returns" },
      { label: "Size & fit guides", href: "/size-guide" },
      { label: "Contact us", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Unicore Dynamics", href: "/about" },
      { label: "Safety certifications", href: "/safety" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Partner with us", href: "/partner" },
    ],
  },
];

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <footer className="bg-ink text-stone">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 font-display font-semibold">
              <span className="text-xl">unicore</span>
              <span className="text-xs text-marigold uppercase tracking-[0.2em]">dynamics</span>
            </Link>
            <p className="mt-4 text-sm text-stone/60 max-w-xs leading-relaxed">
              Kids equipment for every stage, from nursery to primary school
              age. Based in Thika, delivering across Kenya.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-stone/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone/80 hover:text-stone transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-stone/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs text-stone/50">
            <p>&copy; {new Date().getFullYear()} Unicore Dynamics. All rights reserved.</p>
            <div className="hidden sm:flex items-center gap-2">
              <span>&middot;</span>
              <Link href="/privacy" className="hover:text-stone transition-colors">Privacy</Link>
              <span>&middot;</span>
              <Link href="/terms" className="hover:text-stone transition-colors">Terms</Link>
              <span>&middot;</span>
              <Link href="/cookies" className="hover:text-stone transition-colors">Cookies</Link>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <p className="font-mono text-xs text-stone/50">
              M-Pesa &middot; Paystack &middot; Pay on delivery
            </p>
            <button
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center gap-2 overflow-hidden rounded-full border border-marigold bg-ink px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-wider text-stone transition-all duration-300 hover:bg-marigold hover:text-ink hover:shadow-[0_0_20px_rgba(221,162,58,0.45)]"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-marigold"></span>
              </span>
              <span>TALK TO THE DEVELOPER</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-marigold group-hover:text-ink">↗</span>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <DeveloperModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
      </AnimatePresence>
    </footer>
  );
}
