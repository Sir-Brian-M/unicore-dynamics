import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Cookies Policy | Unicore Dynamics",
  description: "Read the Cookies Policy for Unicore Dynamics. Learn how we use cookies to save your cart items and improve browsing.",
};

export default function CookiesPage() {
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
            Cookies Policy
          </h1>
          <p className="mt-2 text-xs text-ink/50 font-mono">Last updated: July 11, 2026</p>

          <div className="mt-8 space-y-6 text-ink/80 text-sm leading-relaxed">
            <p>
              This Cookies Policy explains how Unicore Dynamics uses cookies and similar tracking technologies to improve your shopping experience.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              1. What are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your computer or mobile device by your web browser when you visit websites. They help the website recognize your device and remember your preferences.
            </p>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              2. How We Use Cookies
            </h2>
            <p>
              We use cookies for several vital functions:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>**Essential Shopping Cart Cookies**: We use local storage and cookies to remember which baby gear items you have added to your cart as you browse from page to page.</li>
              <li>**Security**: Cookies help authenticate users, prevent fraudulent use of credentials, and secure payment checkout flows.</li>
              <li>**Analytics**: We use anonymized analytics cookies to understand how visitors interact with our storefront, identifying slow-loading pages and improving general navigation.</li>
            </ul>

            <h2 className="font-display font-semibold text-lg text-ink pt-4 border-t border-ink/5">
              3. Managing Your Preferences
            </h2>
            <p>
              Most web browsers allow you to control cookies through their settings menu. You can choose to block all cookies, but doing so will prevent you from adding items to your shopping cart or completing checkouts.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
