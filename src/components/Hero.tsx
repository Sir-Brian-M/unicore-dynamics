"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import GrowthRuler from "./GrowthRuler";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative layered shapes, flat colors only, no gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-marigold/15" />
        <div className="absolute top-40 -right-32 h-64 w-64 rounded-full bg-teal/10" />
        <div className="absolute -top-10 right-40 h-24 w-24 rounded-full bg-teal/15 hidden lg:block" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8 pt-14 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-5">
              Nursery to primary school, age 0 to 12
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-semibold text-ink tracking-tight">
              Gear built for real family life.
            </h1>
            <p className="mt-6 text-lg text-ink/75 leading-relaxed">
              From the crib to the classroom, Unicore Dynamics is where Kenyan
              parents find equipment that actually holds up, backed by verified
              safety certifications and a checkout built around how you
              actually want to pay.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-all hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5"
              >
                Shop by age and stage
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink hover:bg-sand transition-all hover:-translate-y-0.5"
              >
                Browse all products
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "1,200+", label: "products listed" },
                { value: "4", label: "payment options" },
                { value: "0 to 12", label: "years covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <dt className="font-mono text-2xl font-medium text-ink">{stat.value}</dt>
                  <dd className="text-xs text-ink/60 mt-1">{stat.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-end text-ink/70 relative"
          >
            <div className="absolute -inset-6 rounded-[2rem] bg-sand/80 -z-10" />
            <GrowthRuler orientation="vertical" highlight={[0, 3, 6, 9, 12]} className="h-[420px] w-auto" />
          </motion.div>
        </div>
      </div>

      <div className="border-y border-ink/10 bg-sand/60 text-ink/60 py-3">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <GrowthRuler orientation="horizontal" highlight={[0, 3, 6, 9, 12]} className="w-full h-10" />
        </div>
      </div>
    </section>
  );
}
