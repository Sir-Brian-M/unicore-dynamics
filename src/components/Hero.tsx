"use client";

import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Clock } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { PRODUCTS, formatPrice } from "@/data/products";
import GrowthRuler from "./GrowthRuler";


// Diverse, high-impact kids' equipment products for the hero slider (no duplicates)
const getSliderProducts = () => {
  const selected = [
    PRODUCTS.find((p) => p.slug.toLowerCase().includes("trampoline")),
    PRODUCTS.find((p) => p.slug.toLowerCase().includes("slide-with-swing")),
    PRODUCTS.find((p) => p.slug.toLowerCase().includes("electric-on-car") || p.slug.toLowerCase().includes("ride-on-car")),
    PRODUCTS.find((p) => p.slug.toLowerCase().includes("off-road-hoverboard")),
    PRODUCTS.find((p) => p.slug.toLowerCase().includes("swimming-pool") || p.slug.toLowerCase().includes("prism-frame") || p.slug.toLowerCase().includes("rectangular-frame")),
  ].filter((p): p is typeof PRODUCTS[0] => !!p && !!p.image);

  // Fallback to first available unique products if we didn't get enough
  if (selected.length < 5) {
    const seen = new Set(selected.map((p) => p.name));
    for (const p of PRODUCTS) {
      if (p.image && !seen.has(p.name)) {
        selected.push(p);
        seen.add(p.name);
        if (selected.length >= 5) break;
      }
    }
  }
  return selected;
};

const SLIDER_PRODUCTS = getSliderProducts();


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
    <section className="relative overflow-hidden bg-stone/10 border-b border-ink/5">
      {/* Decorative background shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-marigold/10" />
        <div className="absolute top-40 -left-32 h-64 w-64 rounded-full bg-teal/5" />
      </div>

      <div className="grid lg:grid-cols-12 items-stretch min-h-[500px] lg:h-[600px] w-full">
        {/* Left: copy */}
        <div className="lg:col-span-5 flex items-center px-6 sm:px-12 py-16 lg:py-0 lg:pl-16 xl:pl-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-5 font-bold">
              Safe Active Play, Ages 0 to 12
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.05] font-semibold text-ink tracking-tight">
              Premium Kids' Gear & Active Play Equipment.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-ink/75 leading-relaxed">
              From heavy-duty trampolines and bouncing castles to electric ride-on cars, hoverboards, and family frame swimming pools. We bring safety-certified active play equipment straight to Kenyan families, backed by cash on delivery.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-stone hover:bg-ink/90 transition-all hover:shadow-lg hover:shadow-ink/20 hover:-translate-y-0.5"
              >
                Explore Active Play Gear
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
                { value: "88+", label: "crawled products" },
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
        </div>

        {/* Right: product slider & Deal of the Day */}
        <div className="lg:col-span-7 relative h-[480px] lg:h-full w-full overflow-hidden bg-sand lg:[clip-path:polygon(12%_0,_100%_0,_100%_100%,_0_100%)]">
          {/* Deal of the Day Floating Timer Card */}
          <div className="absolute top-6 left-6 lg:left-24 bg-ink/95 backdrop-blur text-stone rounded-2xl p-4 shadow-xl border border-stone/10 z-20 flex flex-col gap-1 items-start min-w-[130px]">
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

          <div className="w-full h-full relative">
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
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            {/* Product info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 lg:pl-28 z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={product.slug + "-label"}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-stone/70 mb-1.5">
                    {product.category} · {product.ageRange}
                  </p>
                  <h2 className="font-display text-xl sm:text-2xl font-semibold text-stone leading-tight max-w-xl">
                    {product.name}
                  </h2>
                  <div className="flex items-center justify-between mt-4 max-w-xl">
                    <div className="flex items-center gap-1.5 text-xs text-teal/90">
                      <ShieldCheck size={12} strokeWidth={2} />
                      <span className="text-stone/70">{product.cert}</span>
                    </div>
                    <span className="font-mono text-lg font-semibold text-marigold">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <div className="mt-5 max-w-xl">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-stone hover:bg-stone/95 text-ink text-xs font-bold px-7 py-3 transition-all hover:shadow-lg"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous product"
              className="absolute left-6 lg:left-24 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2.5 transition-all hover:scale-105 shadow-md z-20"
            >
              <ChevronLeft size={18} className="text-ink" />
            </button>
            <button
              onClick={next}
              aria-label="Next product"
              className="absolute right-6 top-1/2 -translate-y-1/2 rounded-full bg-stone/80 hover:bg-stone p-2.5 transition-all hover:scale-105 shadow-md z-20"
            >
              <ChevronRight size={18} className="text-ink" />
            </button>

            {/* Dot indicators */}
            <div className="absolute top-6 right-6 flex gap-1.5 z-20">
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
          <div className="absolute top-24 right-6 bg-marigold rounded-2xl px-4 py-2 shadow-lg shadow-marigold/30 rotate-[3deg] z-20">
            <p className="font-mono text-[10px] uppercase tracking-widest text-white font-bold">
              Most Wanted
            </p>
          </div>
        </div>
      </div>

      {/* Infinite moving marquee text */}
      <div className="border-t border-ink/10 bg-sand/60 text-ink/70 py-4.5 overflow-hidden relative">
        <div className="animate-marquee-custom flex gap-12 items-center whitespace-nowrap">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="flex gap-12 items-center">
              {["Free delivery over KSh 5,000", "Pay on Delivery", "30-Day Returns", "Safety Certified Products"].map((t) => (
                <span key={t} className="font-mono text-[10px] sm:text-xs uppercase tracking-wider flex items-center gap-3 font-bold">
                  <span className="inline-block w-2 h-2 rounded-full bg-teal/70 animate-pulse" />
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee {
            0% { transform: translate3d(0, 0, 0); }
            100% { transform: translate3d(-50%, 0, 0); }
          }
          .animate-marquee-custom {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee-custom:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>

      {/* Brand growth ruler divider */}
      <div className="border-t border-ink/10 bg-sand/30 py-3">
        <div className="mx-auto max-w-content px-5 sm:px-8">
          <GrowthRuler orientation="horizontal" highlight={[0, 3, 6, 9, 12]} className="w-full h-8 text-ink/30" />
        </div>
      </div>
    </section>
  );
}
