"use client";

import { useState, FormEvent } from "react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_450px] gap-12 sm:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
              Support Channels
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-lg">
              Have questions about sizing, bulk orders, delivery timelines, or product safety? Drop us a message and our team will get back to you within 2 hours.
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal/10 p-3 text-teal">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Call or WhatsApp</h3>
                  <p className="mt-1 text-sm text-ink/75">+254 792 719 510</p>
                  <p className="text-xs text-ink/50">Mon - Sat, 8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal/10 p-3 text-teal">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Email Support</h3>
                  <p className="mt-1 text-sm text-ink/75">support@unicoredynamics.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-teal/10 p-3 text-teal">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-ink">Headquarters</h3>
                  <p className="mt-1 text-sm text-ink/75">
                    Unicore Center, Section 9, Thika Town, Kiambu County, Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 sm:p-8 shadow-xl shadow-ink/5">
            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 size={48} className="text-teal mx-auto mb-4" />
                <h3 className="font-display text-xl font-bold text-ink">Message Sent!</h3>
                <p className="mt-2 text-sm text-ink/60">
                  Thank you for reaching out. We will respond shortly via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="font-display text-lg font-bold text-ink">Send a message</h2>
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-ink/70 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white/50 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-ink/70 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white/50 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-ink/70 uppercase">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white/50 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-ink/70 uppercase">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-1.5 w-full rounded-xl border border-ink/15 bg-white/50 px-4 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-ink px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-stone hover:bg-ink/90 transition-colors disabled:opacity-65 mt-2"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
