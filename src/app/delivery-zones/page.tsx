"use client";

import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Zap, Shield, MapPin, RefreshCw, ChevronDown, Check, Award, Truck } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const ZONES = [
  {
    name: "Nairobi & Thika Core",
    price: "KSh 350",
    time: "Same Day (Order before 2 PM)",
    desc: "Direct rider delivery to your doorstep. Includes CBD, Westlands, Kilimani, Thika Town, Kilimani, Karen, and immediate environs.",
    highlight: true,
  },
  {
    name: "Kiambu & Outer Nairobi",
    price: "KSh 450",
    time: "Next Day Delivery",
    desc: "Direct rider or courier delivery to areas including Ruiru, Kiambu Town, Kikuyu, Ngong, Athi River, Syokimau, and Kitengela.",
    highlight: false,
  },
  {
    name: "Major Towns (Upcountry)",
    price: "KSh 600",
    time: "2 - 3 Business Days",
    desc: "Fast tracked courier delivery. Includes Mombasa, Kisumu, Nakuru, Eldoret, Nyeri, Meru, Kakamega, Kisii, Kericho, and other major urban centers.",
    highlight: false,
  },
  {
    name: "Rest of Kenya",
    price: "KSh 750",
    time: "3 - 5 Business Days",
    desc: "Remote locations and areas requiring specialized transit or local courier connection.",
    highlight: false,
  },
];

const PARTNERS = [
  { name: "Fargo Courier", desc: "Our primary upcountry shipping partner offering fully tracked door-to-door deliveries." },
  { name: "G4S Logistics", desc: "Used for high-value shipping and secure handling of larger furniture items." },
  { name: "Own Rider Network", desc: "Our private fleet of professional riders servicing Nairobi, Kiambu and Thika core zones." },
  { name: "Speedaf Express", desc: "Specialist regional carrier enabling quick delivery to remote areas." },
];

const FAQS = [
  {
    q: "How do I track my delivery?",
    a: "As soon as your order is dispatched, you will receive an SMS containing a tracking link and your rider/courier contact number.",
  },
  {
    q: "Do you offer pay on delivery upcountry?",
    a: "Yes! Pay on delivery is available for all core zones and major towns. For extreme remote zones, we may request delivery fee commitment.",
  },
  {
    q: "Can you deliver heavy furniture upcountry?",
    a: "Absolutely. We ship cot beds, playground frames, and study desks nationwide using G4S and Fargo heavy freight. Double-boxed for protection.",
  },
  {
    q: "What happens if I'm not home when the rider arrives?",
    a: "Our rider will call you to coordinate. We can re-attempt delivery the next day for free, or leave it with a guard/neighbour if authorized.",
  },
];

export default function DeliveryZonesPage() {
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
              Shipping & Logistics
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Delivery Zones & Rates
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              We deliver heavy baby gear, furniture, and essentials safely and quickly right to your doorstep across Kenya.
            </p>

            {/* Quick Stats Banner Row */}
            <div className="flex flex-wrap gap-4 mt-8">
              {["Same Day Nairobi", "3 Days Upcountry", "Free Over KSh 5,000", "SMS Tracking"].map((item, i) => (
                <span key={i} className="font-mono text-xs uppercase tracking-wider bg-stone/10 text-stone/85 px-4 py-2 rounded-full border border-stone/5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Same Day Delivery", desc: "Order before 2 PM for same-day arrival in core zones." },
              { icon: Shield, title: "Safe Packaging", desc: "Heavy baby gear is double-boxed and padded." },
              { icon: MapPin, title: "Live SMS Tracking", desc: "Real-time updates and rider contact info." },
              { icon: RefreshCw, title: "Easy Returns", desc: "14-day hassle-free return collection." },
            ].map((feat, i) => (
              <div key={i} className="rounded-3xl border border-ink/5 bg-white p-6 shadow-sm text-center md:text-left">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10 text-teal mb-4 mx-auto md:mx-0">
                  <feat.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-ink text-sm mb-2">{feat.title}</h3>
                <p className="text-xs text-ink/65 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Delivery Zones Cards */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            Shipping Rates by Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {ZONES.map((zone) => (
              <div
                key={zone.name}
                className={`rounded-3xl border p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300 ${
                  zone.highlight
                    ? "bg-ink text-stone border-ink shadow-lg shadow-ink/10"
                    : "bg-white border-ink/8 text-ink"
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display font-semibold text-lg">{zone.name}</h3>
                    <span className={`font-mono text-xl font-bold ${zone.highlight ? "text-marigold" : "text-teal"}`}>
                      {zone.price}
                    </span>
                  </div>
                  <p className={`font-mono text-xs uppercase tracking-wider mt-1 ${zone.highlight ? "text-teal-light" : "text-marigold"}`}>
                    {zone.time}
                  </p>
                  <p className={`mt-4 text-sm leading-relaxed ${zone.highlight ? "text-stone/70" : "text-ink/75"}`}>
                    {zone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Delivery Strip Banner */}
        <section className="bg-sand/40 border-y border-ink/10 py-12">
          <div className="mx-auto max-w-content px-5 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-ink">
                Free shipping to Nairobi & Thika.
              </h2>
              <p className="mt-1 text-sm text-ink/65">
                Automatically applies at checkout for all orders over KSh 5,000.
              </p>
            </div>
            <Link
              href="/shop"
              className="rounded-full bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-stone hover:bg-ink/90 transition-colors shadow-md shrink-0"
            >
              Shop Now
            </Link>
          </div>
        </section>

        {/* Delivery Partners */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            Our Logistics Network
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PARTNERS.map((partner, i) => (
              <div key={i} className="rounded-3xl border border-ink/8 bg-white p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 text-teal mb-4">
                  <Truck size={18} />
                  <h3 className="font-display font-bold text-ink text-sm">{partner.name}</h3>
                </div>
                <p className="text-xs text-ink/65 leading-relaxed">{partner.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-stone/50 border-t border-ink/10 py-16 sm:py-24">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
              Delivery FAQs
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
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
