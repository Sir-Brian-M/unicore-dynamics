import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms of Service | Unicore Dynamics",
  description: "Read the Terms of Service for Unicore Dynamics. Learn about ordering, payment methods, and delivery terms in Kenya.",
};

export default function TermsPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Legal Policies
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-xs text-ink/50 font-mono">Last updated: July 11, 2026</p>

          <div className="mt-8 space-y-6 text-ink/80 text-sm leading-relaxed">
            <p>
              Welcome to Unicore Dynamics. By using our website and purchasing our products, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              1. Ordering & Contract
            </h2>
            <p>
              When you place an order, you are making an offer to purchase. We reserve the right to cancel or refuse any order due to stock unavailability, pricing errors, or delivery zone logistics.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              2. Payments & Pricing
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>All prices are in Kenya Shillings (KSh) and include applicable taxes unless stated otherwise.</li>
              <li>We accept M-Pesa, card payments (processed by Paystack), and Cash on Delivery (only within Nairobi and Thika).</li>
              <li>For Cash on Delivery, payment must be completed immediately upon physical delivery of the items to the rider.</li>
            </ul>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              3. Delivery Terms
            </h2>
            <p>
              We strive to meet advertised timelines. However, delivery speeds are subject to weather, traffic, and courier schedules. We are not liable for delayed deliveries caused by third-party logistics partners.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              4. Warranties & Claims
            </h2>
            <p>
              Products carry varying manufacturing warranties as detailed on individual product specs sheets. Physical abuse, incorrect installation, or self-repair voids all warranties.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
