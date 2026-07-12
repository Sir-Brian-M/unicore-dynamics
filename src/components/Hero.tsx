"use client";

import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PRODUCTS, PRODUCT_IMAGES, formatPrice } from "@/data/products";

const SLIDER_PRODUCTS = PRODUCTS.filter((p) => p.image).slice(0, 5);

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [timeLeft, setTimeLeft] = useState({ hrs: 12, mins: 34, secs: 56 });

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % SLIDER_PRODUCTS.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + SLIDER_PRODUCTS.length) % SLIDER_PRODUCTS.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay.getTime() - now.getTime();

      const hrs = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
      const mins = Math.max(0, Math.floor((diff / 1000 / 60) % 60));
      const secs = Math.max(0, Math.floor((diff / 1000) % 60));

      setTimeLeft({ hrs, mins, secs });
    };
    updateTimer();
    const timerId = setInterval(updateTimer, 1000);
    return () => clearInterval(timerId);
  }, []);

  const product = SLIDER_PRODUCTS[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.97 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.97 }),
  };

  return (
    <section className="relative overflow-hidden bg-stone/10">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-marigold/10" />
        <div className="absolute top-40 -right-32 h-64 w-64 rounded-full bg-teal/5" />
        <div className="absolute -top-10 right-40 h-24 w-24 rounded-full bg-teal/10 hidden lg:block" />
      </div>

      <div className="mx-auto max-w-content px-5 sm:px-8 pt-14 pb-14 sm:pt-20 sm:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-5 font-bold">
              Nursery to primary school, age 0 to 12
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] leading-[1.05] font-semibold text-ink tracking-tight">
              Gear built for real family life.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed">
              From safety-tested car seats to durable off-road hoverboards and trampolines. Unicore Dynamics is where Kenyan parents find equipment that actually holds up, backed by verified safety standards.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-stone hover:bg-ink/90 transition-all hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5"
              >
                Shop by age and stage
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-semibold text-ink hover:bg-sand transition-all hover:-translate-y-0.5"
              >
                Browse all products
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "1,200+", label: "products listed" },
                { value: "Pay on Del", label: "available" },
                { value: "0 to 12", label: "years covered" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                >
                  <dt className="font-mono text-xl sm:text-2xl font-bold text-ink">{stat.value}</dt>
                  <dd className="text-[10px] sm:text-xs text-ink/50 mt-1 uppercase font-semibold tracking-wider">{stat.label}</dd>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Right: product slider & Deal of the Day */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Deal of the Day Floating Timer Card */}
            <div className="absolute top-4 left-4 bg-ink/95 backdrop-blur text-stone rounded-2xl p-4 shadow-xl border border-stone/10 z-20 flex flex-col gap-1 items-start min-w-[130px]">
              <span className="font-mono text-[9px] uppercase tracking-widest text-marigold font-bold flex items-center gap-1.5">
                <Clock size={10} className="animate-pulse" />
                Deal Ends
              </span>
              <div className="flex items-center gap-1 font-mono text-xs font-extrabold mt-1">
                <span>{String(timeLeft.hrs).padStart(2, "0")}h</span>
                <span>:</span>
                <span>{String(timeLeft.mins).padStart(2, "0")}m</span>
                <span>:</span>
                <span>{String(timeLeft.secs).padStart(2, "0")}s</span>
              </div>
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-sand shadow-2xl shadow-ink/10 aspect-[4/5] max-h-[500px]">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Product info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
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
                    <h2 className="font-display text-base sm:text-lg font-semibold text-stone leading-snug">
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
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2 transition-all hover:scale-105 shadow-md z-20"
              >
                <ChevronLeft size={16} className="text-ink" />
              </button>
              <button
                onClick={next}
                aria-label="Next product"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2 transition-all hover:scale-105 shadow-md z-20"
              >
                <ChevronRight size={16} className="text-ink" />
              </button>

              {/* Dot indicators */}
              <div className="absolute top-4 right-4 flex gap-1.5 z-20">
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
            <div className="absolute -top-4 -right-4 bg-marigold rounded-2xl px-4 py-2 shadow-lg shadow-marigold/30 rotate-[3deg] z-20">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">
                Most Wanted
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="border-y border-ink/10 bg-sand/60 text-ink/60 py-3.5">
        <div className="mx-auto max-w-content px-5 sm:px-8 flex items-center gap-8 overflow-x-auto">
          {["Free delivery over KSh 5,000", "Pay on Delivery", "30-Day Returns", "Safety Certified Products"].map((t) => (
            <span key={t} className="font-mono text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap flex items-center gap-2 font-semibold">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-teal/60 animate-pulse" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
