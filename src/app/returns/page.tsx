"use client";

import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { RotateCcw, Truck, Banknote, ShieldCheck, HeartCrack, ChevronDown, Check, X, Phone, Mail } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const FAQS = [
  {
    q: "Can I return an item I've used?",
    a: "Unfortunately, no. To protect all families, items must be completely unused, uninstalled, in their original packaging, and with all protective wrapping and seals intact.",
  },
  {
    q: "What if the product was damaged during delivery?",
    a: "Please inspect your order immediately on delivery. If you notice any transit damage or missing parts, contact our team within 24 hours. We will arrange a free exchange/collection.",
  },
  {
    q: "How long does the return collection take?",
    a: "For Nairobi and Thika Core zones, our rider will collect the item within 1-2 business days. For upcountry returns, we will email you a prepaid courier drop-off label.",
  },
  {
    q: "Are delivery fees refunded?",
    a: "Original delivery charges are non-refundable. If we collect the return via our rider or partner courier, a flat fee of KSh 350 will be deducted from your refund.",
  },
  {
    q: "Can I exchange instead of refund?",
    a: "Yes! If you ordered the wrong size or model, we can facilitate a quick swap. If the replacement item is in stock, we can swap it at the time of collection.",
  },
];

export default function ReturnsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="min-h-screen bg-stone/20">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-ink text-stone">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-12 h-96 w-96 rounded-full bg-teal/15" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-marigold/10" />
          </div>
          <div className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24 relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold mb-4">
              Customer Care
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Returns & Refunds
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              We stand behind the quality of our gear. If you are not completely satisfied with your purchase, we make returns straightforward.
            </p>
          </div>
        </section>

        {/* Stats Ribbon */}
        <section className="border-y border-ink/10 bg-white/50 py-10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "14 Days", label: "Return Window", desc: "No questions asked return period" },
                { value: "3 Days", label: "Refund Processing", desc: "Direct to M-Pesa or bank account" },
                { value: "100% Free", label: "Pickup Service", desc: "Available for Nairobi & Thika Core" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left border-b md:border-b-0 md:border-r border-ink/5 last:border-0 pb-6 md:pb-0 md:pr-8 last:pr-0">
                  <span className="font-mono text-3xl font-bold text-ink">{stat.value}</span>
                  <h3 className="font-display font-semibold text-ink mt-1">{stat.label}</h3>
                  <p className="text-xs text-ink/50 mt-1">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Step Cards */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            How to make a return
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: RotateCcw,
                title: "Submit Request",
                desc: "Contact support via phone, email or WhatsApp with your order reference and reason for return.",
              },
              {
                step: "02",
                icon: Truck,
                title: "Quick Collection",
                desc: "Our delivery rider will pick up the item from your location (Nairobi/Thika), or we will supply a shipping label.",
              },
              {
                step: "03",
                icon: Banknote,
                title: "Get Refunded",
                desc: "After product inspection at our Thika center, we issue your refund directly to M-Pesa or bank within 3 days.",
              },
            ].map((step, i) => (
              <div key={i} className="rounded-3xl border border-ink/8 bg-white p-8 relative flex flex-col justify-between hover:shadow-xl hover:border-ink/15 transition-all duration-300">
                <span className="font-mono text-5xl font-extrabold text-marigold/15 absolute top-6 right-6 select-none">{step.step}</span>
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal mb-6">
                    <step.icon size={22} />
                  </div>
                  <h3 className="font-display font-semibold text-ink text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Can Be Returned Grid */}
        <section className="border-t border-ink/10 bg-stone/50 py-16 sm:py-24">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
              Eligibility Guidelines
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Eligible */}
              <div className="rounded-3xl border border-teal/15 bg-white p-8">
                <div className="flex items-center gap-3 text-teal mb-6">
                  <ShieldCheck size={24} />
                  <h3 className="font-display font-bold text-ink">Eligible for Return</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Products in completely brand-new, unused condition",
                    "Items in original, undamaged retail packaging",
                    "Products containing all manuals, accessories, and tags",
                    "Safety gear (car seats) that has never been installed in a vehicle",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/75 leading-relaxed">
                      <Check size={16} className="text-teal mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Eligible */}
              <div className="rounded-3xl border border-brick/15 bg-white p-8">
                <div className="flex items-center gap-3 text-brick mb-6">
                  <HeartCrack size={24} />
                  <h3 className="font-display font-bold text-ink">Not Eligible</h3>
                </div>
                <ul className="space-y-4">
                  {[
                    "Products showing any signs of physical wear, dirt or usage",
                    "Car seats or strollers that have been assembled/installed",
                    "Items without original boxes, tags or missing components",
                    "Personal use items (e.g. breast pumps, feeding pacifiers) for hygiene reasons",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/75 leading-relaxed">
                      <X size={16} className="text-brick mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Collapsible FAQ Accordion */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            Return FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-ink/8 bg-white overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-stone/10 transition-colors"
                >
                  <span className="font-display font-semibold text-ink text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-ink/40 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-teal" : ""}`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openFaq === i ? "max-h-40 border-t border-ink/5" : "max-h-0"
                  }`}
                >
                  <p className="p-6 text-sm text-ink/70 leading-relaxed bg-stone/5">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Strip */}
        <section className="bg-ink text-stone">
          <div className="mx-auto max-w-content px-5 sm:px-8 py-16 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Need help with a return?
            </h2>
            <p className="mt-2 text-sm text-stone/60 max-w-md mx-auto">
              Our customer care specialists are standing by to guide you through the process.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/254792719510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-teal hover:bg-teal-light px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg"
              >
                <Phone size={14} />
                WhatsApp Support
              </a>
              <a
                href="mailto:support@unicoredynamics.co.ke"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-stone/25 hover:bg-stone/10 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-stone transition-all"
              >
                <Mail size={14} />
                Email Support
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
