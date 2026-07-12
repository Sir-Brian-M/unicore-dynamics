"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle2, ChevronDown, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const FAQS = [
  {
    q: "Do you offer bulk or school orders?",
    a: "Yes, we partner with nurseries, primary schools, and playgroups across East Africa. We offer volume pricing and custom sourcing for larger quantities of desks, play tents, and safety gear. Contact us via email or WhatsApp.",
  },
  {
    q: "How long does delivery take to Mombasa?",
    a: "Deliveries to major towns like Mombasa, Kisumu, Nakuru, and Eldoret take 2-3 business days. All items are fully tracked with G4S/Fargo and packaged securely.",
  },
  {
    q: "Can I pay on delivery for all products?",
    a: "Yes! Pay on delivery is supported for all orders within Nairobi, Thika, and Kiambu counties. For upcountry orders, we offer secure checkout with payment authorization on delivery.",
  },
  {
    q: "Do products come with warranty?",
    a: "Yes, all our high-value gear (car seats, strollers, balance bikes, study desks) comes with a standard 1 to 2-year manufacturer warranty covering structural components.",
  },
  {
    q: "How do I track my order?",
    a: "You will receive real-time SMS updates once your order leaves our Thika hub. This includes the contact number of our rider or partner courier agent.",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

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
              Get in Touch
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              We're Here for You
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              Questions about sizing, bulk orders, safety certifications, or payment options? Drop us a line. Our team responds in under 2 hours.
            </p>
          </div>
        </section>

        {/* Contact Info Strip */}
        <section className="border-y border-ink/10 bg-white/50 py-10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* WhatsApp/Call */}
              <div className="flex gap-4">
                <div className="rounded-2xl bg-teal/10 p-4 text-teal h-14 w-14 flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Call or WhatsApp</h3>
                  <p className="mt-1 text-sm text-ink/70">+254 792 719 510</p>
                  <p className="text-xs text-ink/40 mt-1">Mon - Sat · 8:00 AM - 6:00 PM</p>
                  <a
                    href="https://wa.me/254792719510"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal mt-2 hover:underline"
                  >
                    WhatsApp Chat &rarr;
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="rounded-2xl bg-teal/10 p-4 text-teal h-14 w-14 flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Email Support</h3>
                  <p className="mt-1 text-sm text-ink/70">support@unicoredynamics.co.ke</p>
                  <p className="text-xs text-ink/40 mt-1">Response time: under 2 hours</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4">
                <div className="rounded-2xl bg-teal/10 p-4 text-teal h-14 w-14 flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Headquarters</h3>
                  <p className="mt-1 text-sm text-ink/70">Unicore Center, Section 9</p>
                  <p className="text-xs text-ink/40 mt-1">Thika Town, Kiambu County, Kenya</p>
                  <Link
                    href="/about#location"
                    className="inline-flex items-center gap-1 text-xs font-bold text-teal mt-2 hover:underline"
                  >
                    Get Directions &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form and FAQ Section */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid lg:grid-cols-[1fr_480px] gap-12 sm:gap-20">
            {/* Form Column */}
            <div>
              {submitted ? (
                <div className="rounded-3xl border border-teal/10 bg-white p-8 sm:p-12 text-center shadow-xl shadow-ink/5">
                  <CheckCircle2 size={56} className="text-teal mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-ink">Message Sent!</h3>
                  <p className="mt-4 text-sm text-ink/65 leading-relaxed max-w-sm mx-auto">
                    Thank you for reaching out. We have logged your request and a specialist will respond via WhatsApp or email shortly.
                  </p>
                </div>
              ) : (
                <div className="rounded-3xl border border-ink/8 bg-white p-8 sm:p-10 shadow-xl shadow-ink/5">
                  <h2 className="font-display text-xl font-bold text-ink mb-6">Send us a message</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold text-ink/60 uppercase tracking-wider">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="mt-2 w-full rounded-xl border border-ink/15 bg-stone/10 focus:bg-white px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-ink/60 uppercase tracking-wider">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="mt-2 w-full rounded-xl border border-ink/15 bg-stone/10 focus:bg-white px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-ink/60 uppercase tracking-wider">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          placeholder="e.g. 0712345678"
                          className="mt-2 w-full rounded-xl border border-ink/15 bg-stone/10 focus:bg-white px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-xs font-bold text-ink/60 uppercase tracking-wider">
                          Inquiry Type
                        </label>
                        <select
                          id="subject"
                          className="mt-2 w-full rounded-xl border border-ink/15 bg-stone/10 focus:bg-white px-4 py-3.5 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all cursor-pointer appearance-none"
                        >
                          <option>Order Inquiry</option>
                          <option>Product Sizing/Details</option>
                          <option>School or Bulk Order</option>
                          <option>Returns & Refunds</option>
                          <option>Other Question</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-ink/60 uppercase tracking-wider">
                        Message details
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Please include product names or order references where applicable..."
                        className="mt-2 w-full rounded-xl border border-ink/15 bg-stone/10 focus:bg-white px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-full bg-ink px-6 py-4 text-xs font-bold uppercase tracking-wider text-stone hover:bg-ink/90 transition-colors disabled:opacity-65 shadow-md"
                    >
                      {loading ? "Sending Message..." : "Send Message"}
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* FAQ Accordion Column */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
                Quick Answers
              </h2>
              <div className="space-y-4">
                {FAQS.map((faq, i) => (
                  <div key={i} className="rounded-2xl border border-ink/8 bg-white overflow-hidden transition-all duration-300">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-stone/10 transition-colors"
                    >
                      <span className="font-display font-semibold text-ink text-sm">{faq.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-ink/40 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-teal" : ""}`}
                      />
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out overflow-hidden ${
                        openFaq === i ? "max-h-40 border-t border-ink/5" : "max-h-0"
                      }`}
                    >
                      <p className="p-5 text-xs sm:text-sm text-ink/70 leading-relaxed bg-stone/5">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Direct WhatsApp strip */}
        <section className="bg-sand/40 border-t border-ink/10 py-16">
          <div className="mx-auto max-w-content px-5 sm:px-8 text-center">
            <MessageSquare size={36} className="mx-auto text-teal mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Prefer direct chat?
            </h2>
            <p className="mt-2 text-sm text-ink/65 max-w-md mx-auto">
              Our customer success team is available on WhatsApp for quick, direct chats during business hours.
            </p>
            <div className="mt-8">
              <a
                href="https://wa.me/254792719510"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-teal hover:bg-teal-light px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg"
              >
                Chat via WhatsApp
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
