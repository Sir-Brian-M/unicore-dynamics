"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

function SuccessContent() {
  const params = useSearchParams();
  const ref = params.get("ref");
  const method = params.get("method");

  return (
    <main className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24 text-center">
      <CheckCircle2 size={48} strokeWidth={1.5} className="text-teal mx-auto" />
      <h1 className="mt-6 font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
        Order placed.
      </h1>
      <p className="mt-3 text-ink/70 max-w-md mx-auto leading-relaxed">
        {method === "delivery"
          ? "We've got your order. Pay when it arrives, cash or M-Pesa."
          : "Your payment went through. A confirmation is on its way to your email."}
      </p>
      {ref && (
        <p className="mt-4 font-mono text-xs text-ink/50">Reference: {ref}</p>
      )}
      <Link
        href="/shop"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
      >
        Continue shopping
        <ArrowRight size={16} />
      </Link>
    </main>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Suspense fallback={null}>
        <SuccessContent />
      </Suspense>
      <Footer />
    </>
  );
}
