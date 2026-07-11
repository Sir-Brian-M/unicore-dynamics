import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Privacy Policy | Unicore Dynamics",
  description: "Read the Privacy Policy for Unicore Dynamics. Learn how we handle your personal data and payment safety.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="mt-2 text-xs text-ink/50 font-mono">Last updated: July 11, 2026</p>

          <div className="mt-8 space-y-6 text-ink/80 text-sm leading-relaxed">
            <p>
              At Unicore Dynamics, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website, place orders, or contact our support team.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              1. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Contact details (name, email address, phone number, physical address).</li>
              <li>Order details and transaction history.</li>
              <li>Customer support correspondence.</li>
            </ul>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              2. How We Use Your Data
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To process and deliver your orders (including forwarding details to our delivery riders or courier partners).</li>
              <li>To send you SMS tracking alerts and order receipts.</li>
              <li>To improve our website shopping experience and support quality.</li>
            </ul>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              3. Payment Security & Processing
            </h2>
            <p>
              Online payments (cards and M-Pesa STK push) are processed securely through **Paystack** (a PCI-DSS certified payment gateway). We do not store, view, or process your credit card numbers or raw PINs on our servers.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              4. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your personal data rights, please email us at **privacy@unicoredynamics.co.ke**.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
