import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Handshake, Building, GraduationCap, Percent } from "lucide-react";

export const metadata = {
  title: "Partner with Us | Unicore Dynamics",
  description: "Learn about partnership opportunities with Daycares, Schools, and Retailers at Unicore Dynamics.",
};

export default function PartnerPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            B2B & Partnerships
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Partner with Unicore Dynamics
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            We collaborate with daycares, primary schools, developmental clinics, and wholesale distributors across Kenya to provide premium equipment at scale.
          </p>
        </div>

        {/* Partnership Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Building className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Retail & Distribution</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed font-body">
              Are you a baby shop or high-end retail storefront looking to stock certified safety seats, strollers or learning desks? We offer wholesale bulk pricing.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <GraduationCap className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Schools & Daycares</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed font-body">
              We supply safety-certified playground climbing frames, sturdy wooden study desks, and safety barriers on long-term credit schemes.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Percent className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Corporate Affiliates</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed font-body">
              Refer new clients or run corporate parenting workshops with our safety specialists. Earn attractive commissions for every sale routed through your portal.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center max-w-xl mx-auto rounded-2xl bg-sand p-8">
          <Handshake size={36} className="text-teal mx-auto mb-4" />
          <h2 className="font-display text-xl font-bold text-ink">Start the Conversation</h2>
          <p className="mt-2 text-sm text-ink/70 leading-relaxed">
            Reach out to our business development desk to discuss volume quotes, catalogs, or custom credit terms.
          </p>
          <a
            href="mailto:b2b@unicoredynamics.co.ke"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
          >
            Email partner desk &rarr;
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
