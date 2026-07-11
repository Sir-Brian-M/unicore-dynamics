"use client";

import { motion } from "framer-motion";
import { X, MessageSquare, ExternalLink, Mail, Code } from "lucide-react";

type DeveloperModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function DeveloperModal({ isOpen, onClose }: DeveloperModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-ink/80 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: "-48%", x: "-50%" }}
        animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
        exit={{ opacity: 0, scale: 0.95, y: "-48%", x: "-50%" }}
        transition={{ type: "spring", duration: 0.4 }}
        className="fixed left-[50%] top-[50%] z-[101] w-[90%] max-w-[420px] rounded-3xl border border-stone/10 bg-ink p-6 text-stone shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-stone/10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-marigold opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-marigold"></span>
            </span>
            <h2 className="font-mono text-xs uppercase tracking-wider font-bold text-stone/90">
              TALK TO THE DEVELOPER
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1 text-stone/50 hover:text-stone hover:bg-stone/5 transition-all"
            aria-label="Close modal"
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="mt-5">
          <h3 className="font-display text-xl font-bold text-stone">Brian Murutu</h3>
          <p className="font-mono text-[10px] text-marigold uppercase tracking-wider mt-1">
            Full-Stack Software Engineer
          </p>

          <p className="mt-4 text-xs text-stone/70 leading-relaxed">
            Engineered the complete shopping experience, custom cart systems, and live M-Pesa STK push checkouts. Ready to craft your next high-converting digital storefront or bespoke SaaS product.
          </p>

          {/* Tech Tag Badges */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            <span className="flex items-center gap-1 rounded-full bg-stone/5 px-2.5 py-1 font-mono text-[10px] text-stone/85 border border-stone/5">
              <Code size={10} className="text-marigold" /> Next.js & TS
            </span>
            <span className="flex items-center gap-1 rounded-full bg-stone/5 px-2.5 py-1 font-mono text-[10px] text-stone/85 border border-stone/5">
              <Code size={10} className="text-marigold" /> Tailwind & Motion
            </span>
            <span className="flex items-center gap-1 rounded-full bg-stone/5 px-2.5 py-1 font-mono text-[10px] text-stone/85 border border-stone/5">
              <Code size={10} className="text-marigold" /> Supabase & M-Pesa
            </span>
          </div>

          {/* Action Links */}
          <div className="mt-6 space-y-2.5">
            <a
              href="https://wa.me/25479271951?text=Hi%20Brian%2C%20I%20visited%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project%21"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl bg-stone text-ink px-4 py-3.5 text-xs font-semibold hover:bg-stone/90 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] group"
            >
              <span className="flex items-center gap-2">
                <MessageSquare size={15} strokeWidth={2.25} className="text-teal" />
                Chat on WhatsApp
              </span>
              <span className="text-[10px] font-mono text-ink/50 group-hover:text-ink transition-colors font-bold">
                +254 792 719 51 &rarr;
              </span>
            </a>

            <a
              href="https://sirbrian.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-2xl border border-stone/15 bg-transparent text-stone hover:bg-stone/5 px-4 py-3.5 text-xs font-semibold transition-all group"
            >
              <span className="flex items-center gap-2">
                <ExternalLink size={15} strokeWidth={2.25} className="text-marigold" />
                Developer Portfolio
              </span>
              <span className="text-[10px] font-mono text-stone/40 group-hover:text-stone transition-colors font-bold">
                sirbrian.vercel.app &rarr;
              </span>
            </a>

            <a
              href="mailto:murutubrian@gmail.com?subject=Project%20Inquiry%20from%20Unicore%20Dynamics%20Visitor"
              className="flex items-center justify-between rounded-2xl border border-stone/15 bg-transparent text-stone hover:bg-stone/5 px-4 py-3.5 text-xs font-semibold transition-all group"
            >
              <span className="flex items-center gap-2">
                <Mail size={15} strokeWidth={2.25} className="text-marigold" />
                Email Inquiry
              </span>
              <span className="text-[10px] font-mono text-stone/40 group-hover:text-stone transition-colors font-bold">
                murutubrian@gmail.com &rarr;
              </span>
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
}
