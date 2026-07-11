import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { RotateCcw, ShieldCheck, HeartCrack, ClipboardCheck } from "lucide-react";

export const metadata = {
  title: "Returns & Exchanges Policy",
  description: "Read about Unicore Dynamics returns, exchange policies, and how to file a claim within 14 days.",
};

export default function ReturnsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Customer Care
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Returns & Refund Policy
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            We stand behind the quality of our gear. If you are not completely satisfied with your purchase, we make returns straightforward.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <RotateCcw className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">14-Day Window</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Initiate a return request within 14 days of delivery for any eligible product.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <ShieldCheck className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Unused Condition</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Items must be in original packaging, uninstalled, and contain all parts and warranty documents.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <HeartCrack className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Damaged on Arrival</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              Contact us immediately (within 24 hours) if your equipment arrives with transit damage or parts missing.
            </p>
          </div>
        </div>

        {/* Return steps */}
        <div className="mt-16 max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
            How to make a return
          </h2>
          <ol className="relative border-l border-ink/10 space-y-8 ml-3">
            <li className="pl-6 relative">
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-mono font-medium text-stone">
                1
              </span>
              <h3 className="font-display font-semibold text-ink">Submit request</h3>
              <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                Contact our customer support team via phone or email (support@unicoredynamics.co.ke) with your Order Reference.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-mono font-medium text-stone">
                2
              </span>
              <h3 className="font-display font-semibold text-ink">Inspection</h3>
              <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                Our logistics rider will pick up the item (within Nairobi/Thika) or we will guide you on courier return drop-offs. The item will be inspected.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-teal text-[10px] font-mono font-medium text-stone">
                3
              </span>
              <h3 className="font-display font-semibold text-ink">Refund processing</h3>
              <p className="mt-1 text-sm text-ink/70 leading-relaxed">
                Upon approval, refunds are sent directly to your M-Pesa or bank account within 3 business days. Note: Delivery fees are non-refundable.
              </p>
            </li>
          </ol>
        </div>
      </main>
      <Footer />
    </>
  );
}
