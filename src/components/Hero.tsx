"use client";

import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PRODUCTS, PRODUCT_IMAGES, formatPrice } from "@/data/products";

const SLIDER_PRODUCTS = PRODUCTS.filter((p) => p.image).slice(0, 5);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDER_PRODUCTS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDER_PRODUCTS.length) % SLIDER_PRODUCTS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 3800);
    return () => clearInterval(id);
  }, [next]);

  const product = SLIDER_PRODUCTS[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-marigold/15" />
        <div className="absolute top-40 -right-32 h-64 w-64 rounded-full bg-teal/10" />
        <div className="absolute -top-10 right-40 h-24 w-24 rounded-full bg-teal/15 hidden lg:block" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8 pt-14 pb-10 sm:pt-20 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: copy */}
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

          {/* Right: product slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-sand shadow-2xl shadow-ink/10 aspect-[4/5] max-h-[520px]">
              {/* Slide image */}
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={product.slug}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={product.slug + "-label"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-mono text-[10px] uppercase tracking-widest text-stone/70 mb-1">
                      {product.category} · {product.ageRange}
                    </p>
                    <h2 className="font-display text-lg font-semibold text-stone leading-snug">
                      {product.name}
                    </h2>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1.5 text-xs text-teal/90">
                        <ShieldCheck size={12} strokeWidth={2} />
                        <span className="text-stone/70">{product.cert}</span>
                      </div>
                      <span className="font-mono text-base font-semibold text-marigold">
                        {formatPrice(product.price)}
                      </span>
                    </div>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="mt-4 w-full flex items-center justify-center gap-2 rounded-full bg-stone/90 hover:bg-stone text-ink text-xs font-semibold px-5 py-2.5 transition-all hover:shadow-lg"
                    >
                      View Product <ArrowRight size={14} />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={prev}
                aria-label="Previous product"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2 transition-all hover:scale-105 shadow-md"
              >
                <ChevronLeft size={16} className="text-ink" />
              </button>
              <button
                onClick={next}
                aria-label="Next product"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2 transition-all hover:scale-105 shadow-md"
              >
                <ChevronRight size={16} className="text-ink" />
              </button>

              {/* Dot indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                {SLIDER_PRODUCTS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    aria-label={`Go to slide ${i + 1}`}
                    className={`rounded-full transition-all ${
                      i === current
                        ? "bg-stone w-5 h-2"
                        : "bg-stone/40 w-2 h-2 hover:bg-stone/70"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative floating badge */}
            <div className="absolute -top-4 -left-4 bg-marigold rounded-2xl px-4 py-2 shadow-lg shadow-marigold/30 rotate-[-3deg]">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">
                Most Wanted
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-ink/10 bg-sand/60 text-ink/60 py-3">
        <div className="mx-auto max-w-content px-5 sm:px-8 flex items-center gap-8 overflow-x-auto">
          {["Free delivery over KSh 5,000", "Pay on Delivery", "30-Day Returns", "Safety Certified Products"].map((t) => (
            <span key={t} className="font-mono text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
