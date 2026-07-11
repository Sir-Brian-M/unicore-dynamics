"use client";

import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Heart,
  Zap,
  Users,
  Star,
  MapPin,
  ArrowRight,
  Leaf,
  BadgeCheck,
  Clock,
  TrendingUp,
  Award,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "1,200+", label: "Products Listed", icon: Star },
  { value: "4,800+", label: "Families Served", icon: Users },
  { value: "100%", label: "Safety-Certified Items", icon: ShieldCheck },
  { value: "6+", label: "Years Operating", icon: Clock },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Safety First, Always",
    desc: "Every product on our shelves carries a verified international safety certification. We don't list items we wouldn't use ourselves.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: BadgeCheck,
    title: "Honest Pricing",
    desc: "No artificial markups, no hidden fees. Kenyan families deserve transparent prices and multiple payment options including pay-on-delivery.",
    color: "bg-marigold/10 text-marigold-dark",
  },
  {
    icon: Leaf,
    title: "Sustainable Materials",
    desc: "We prioritise FSC-certified wood, OEKO-TEX fabrics, and BPA-free plastics. Good for kids, good for the planet.",
    color: "bg-teal/10 text-teal",
  },
  {
    icon: Heart,
    title: "Built for Real Life",
    desc: "Our team tests products against Kenyan conditions — rough roads, varying temperatures, daily heavy use — not just lab standards.",
    color: "bg-brick/10 text-brick",
  },
  {
    icon: Zap,
    title: "Fast, Reliable Delivery",
    desc: "Same-day delivery in Nairobi, next-day across major towns. We know you can't wait three weeks for a crib to arrive.",
    color: "bg-marigold/10 text-marigold-dark",
  },
  {
    icon: TrendingUp,
    title: "Products That Grow With Them",
    desc: "We curate gear that transitions across ages and stages, so you're not replacing everything every six months.",
    color: "bg-teal/10 text-teal",
  },
];

const STORY_STEPS = [
  {
    year: "2018",
    title: "The Problem",
    desc: "Founders Janet and David Kamau struggled to find quality, safety-certified children's equipment in Kenya. Most imports lacked documentation; local shops were cluttered and unhelpful.",
  },
  {
    year: "2020",
    title: "The Build",
    desc: "After two years of supplier research and safety standard study, Unicore Dynamics launched online-first — a curated catalogue with every certification documented, every product tested.",
  },
  {
    year: "2024",
    title: "The Scale",
    desc: "1,200+ products. 4,800 families served. Partnerships with certified manufacturers across Kenya, Europe, and East Asia. A new Thika showroom for families who want to see before they buy.",
  },
];

const TEAM = [
  {
    name: "Janet Kamau",
    role: "Co-founder & CEO",
    bio: "Former early childhood educator turned entrepreneur. Obsessed with product safety standards and Kenyan family needs.",
    initials: "JK",
    color: "bg-teal",
  },
  {
    name: "David Kamau",
    role: "Co-founder & Head of Sourcing",
    bio: "Supply chain specialist with 12 years in consumer goods. Personally vets every supplier before listing.",
    initials: "DK",
    color: "bg-ink",
  },
  {
    name: "Amina Odhiambo",
    role: "Head of Customer Experience",
    bio: "Handles all post-purchase support and has reduced return rates to under 2% through proactive communication.",
    initials: "AO",
    color: "bg-marigold",
  },
];


function fadeUpProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.55, delay, ease: "easeOut" as const },
  };
}

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>

        {/* ── Hero Banner ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-ink text-stone">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-12 h-96 w-96 rounded-full bg-teal/15" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-marigold/10" />
          </div>
          <div className="mx-auto max-w-content px-5 sm:px-8 py-20 sm:py-28 relative">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold mb-5">
                Our Story
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.08] font-semibold tracking-tight">
                Kids equipment, not toy store clutter.
              </h1>
              <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-xl">
                Unicore Dynamics was built from one simple frustration: Kenyan parents
                deserved better information and better gear. We fixed that.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="group inline-flex items-center gap-2 rounded-full bg-marigold hover:bg-marigold-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-xl hover:shadow-marigold/30 hover:-translate-y-0.5"
                >
                  Shop our collection
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-stone/25 px-7 py-3.5 text-sm font-semibold text-stone hover:bg-stone/10 transition-all hover:-translate-y-0.5"
                >
                  Get in touch
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats Ribbon ─────────────────────────────────────────────── */}
        <section className="border-y border-ink/10 bg-sand/60">
          <div className="mx-auto max-w-content px-5 sm:px-8 py-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  {...fadeUpProps(i * 0.09)}
                  className="text-center"
                >
                  <s.icon size={24} className="mx-auto mb-3 text-teal opacity-70" />
                  <dt className="font-mono text-3xl font-bold text-ink">{s.value}</dt>
                  <dd className="mt-1 text-sm text-ink/60">{s.label}</dd>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Story ────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <motion.div
              {...fadeUpProps(0)}
              className="max-w-lg mb-12"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
                How We Got Here
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                A timeline of real decisions.
              </h2>
            </motion.div>

            <div className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-ink/10" />

              <div className="grid lg:grid-cols-3 gap-8">
                {STORY_STEPS.map((step, i) => (
                  <motion.div
                    key={step.year}
                    {...fadeUpProps((i + 1) * 0.1)}
                    className="relative"
                  >
                    {/* Year bubble */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-stone text-[10px] font-mono font-bold shadow-md flex-shrink-0">
                        {i + 1}
                      </div>
                      <span className="font-mono text-sm font-bold text-teal">{step.year}</span>
                    </div>
                    <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <h3 className="font-display text-lg font-semibold text-ink mb-3">{step.title}</h3>
                      <p className="text-sm text-ink/70 leading-relaxed">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Values ───────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b border-ink/10 bg-stone/50">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <motion.div
              {...fadeUpProps(0)}
              className="max-w-lg mb-12"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
                What We Stand For
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                Six things we refuse to compromise on.
              </h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <motion.div
                  key={v.title}
                  {...fadeUpProps((i + 1) * 0.09)}
                  className="group rounded-2xl border border-ink/10 bg-white/70 p-6 hover:shadow-xl hover:shadow-ink/8 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${v.color} mb-5 group-hover:scale-110 transition-transform`}>
                    <v.icon size={22} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display font-semibold text-ink text-base mb-2">{v.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission Statement ─────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b border-ink/10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <motion.div
              {...fadeUpProps(0)}
              className="max-w-4xl mx-auto text-center"
            >
              <Award size={32} className="mx-auto mb-6 text-marigold" />
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-ink leading-snug tracking-tight">
                "Uni for one unified range. Core for the essentials that actually matter.
                Dynamics for the fact that kids — and what they need — never stay still."
              </blockquote>
              <p className="mt-6 text-sm text-ink/50 font-mono uppercase tracking-wider">
                — Janet & David Kamau, Co-founders
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24 border-b border-ink/10 bg-stone/50">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <motion.div
              {...fadeUpProps(0)}
              className="max-w-lg mb-12"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
                The People
              </p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
                A small team with very high standards.
              </h2>
              <p className="mt-4 text-ink/65 leading-relaxed">
                We're a core team of eight, based in Thika with remote members in Mombasa and Kisumu.
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  {...fadeUpProps((i + 1) * 0.1)}
                  className="group rounded-2xl border border-ink/10 bg-white/70 p-6 hover:shadow-xl hover:shadow-ink/8 hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 rounded-full ${member.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <span className="font-display font-bold text-white text-lg">{member.initials}</span>
                  </div>
                  <h3 className="font-display font-semibold text-ink">{member.name}</h3>
                  <p className="font-mono text-xs text-teal uppercase tracking-wider mt-1">{member.role}</p>
                  <p className="mt-3 text-sm text-ink/65 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Location / CTA ────────────────────────────────────────────── */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <div className="rounded-3xl bg-ink text-stone px-8 sm:px-12 py-12 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal/15" />
              <div className="absolute bottom-0 left-1/2 w-48 h-48 rounded-full bg-marigold/10" />
              <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-marigold mb-4">Visit Us</p>
                  <h2 className="font-display text-3xl font-semibold leading-tight">
                    Come see the products in person.
                  </h2>
                  <div className="mt-6 flex items-start gap-3 text-stone/70">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5 text-teal/80" />
                    <div className="text-sm leading-relaxed">
                      <p className="font-semibold text-stone">Unicore Center, Section 9</p>
                      <p>Thika Town, Kiambu County, Kenya</p>
                      <p className="mt-1 text-stone/50 text-xs font-mono">Mon – Sat · 8:00 AM – 6:00 PM</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 lg:justify-end">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-marigold hover:bg-marigold-dark px-7 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    Contact us <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="/shop"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone/25 px-7 py-3.5 text-sm font-semibold text-stone hover:bg-stone/10 transition-all hover:-translate-y-0.5"
                  >
                    Shop online
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
