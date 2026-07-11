"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Baby, Shirt, Bike, Puzzle, ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

const CATEGORIES = [
  {
    icon: Baby,
    age: "0 to 2",
    title: "Nursery & Infant",
    body: "Cribs, car seats, strollers, and feeding gear, all with size and fit guides.",
  },
  {
    icon: Shirt,
    age: "0 to 6",
    title: "Everyday Essentials",
    body: "Clothing, diapers, and health and safety items you're reordering monthly.",
  },
  {
    icon: Bike,
    age: "4 to 12",
    title: "Growing Years",
    body: "Bikes, scooters, school desks, and bags built for kids on the move.",
  },
  {
    icon: Puzzle,
    age: "1 to 10",
    title: "Play",
    body: "Toys and indoor or outdoor play equipment, sorted by age and skill.",
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <FadeIn className="max-w-lg mb-10 sm:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Shop by stage
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Every stage of childhood, sorted.
          </h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {CATEGORIES.map(({ icon: Icon, age, title, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/shop?category=${encodeURIComponent(title)}`}
                className="group relative flex flex-col justify-between rounded-2xl bg-sand p-7 sm:p-8 min-h-[220px] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10"
              >
                <div className="flex items-start justify-between">
                  <Icon size={28} strokeWidth={1.5} className="text-ink transition-transform group-hover:scale-110" />
                  <span className="font-mono text-xs text-teal border border-teal/30 rounded-full px-2.5 py-1">
                    {age} yrs
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-ink flex items-center gap-1.5">
                    {title}
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{body}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
