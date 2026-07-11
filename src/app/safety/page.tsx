import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { ShieldCheck, ShieldAlert, Award, HelpingHand } from "lucide-react";

export const metadata = {
  title: "Safety Certifications & Standards",
  description: "Learn about product safety testing, material standards, and ECE / EN certifications at Unicore Dynamics.",
};

const CERTS = [
  {
    name: "ECE R129 (i-Size)",
    category: "Car Seats",
    desc: "The latest, most rigorous European safety standard for infant car seats. It requires side-impact testing, height-based categorization, and mandatory ISOFIX installation to minimize errors.",
  },
  {
    name: "EN 71 Parts 1, 2 & 3",
    category: "Toys & Play Equipment",
    desc: "European standard covering physical safety properties (e.g. sharp edges, choke hazards), flammability, and chemical migration limits for paints and raw wooden materials.",
  },
  {
    name: "ASTM F963 Tested",
    category: "Strollers & Furniture",
    desc: "American standard testing load capacity, harness strength, structural integrity, and stability under dynamic conditions to prevent tip-overs and frame collapse.",
  },
  {
    name: "OEKO-TEX Standard 100",
    category: "Apparel & Linens",
    desc: "Worldwide independent certification system confirming that fabrics and cotton sleepsuits are completely free of over 100 harmful substances and skin allergens.",
  },
];

export default function SafetyPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Our Core Commitment
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Safety Certifications
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            We do not sell items that have not been independently lab-tested. Every product page on our site lists verified global safety certificates, giving you peace of mind.
          </p>
        </div>

        {/* Big Warning box */}
        <div className="mt-12 rounded-2xl bg-teal/5 border border-teal/15 p-6 flex flex-col sm:flex-row gap-4 items-start max-w-4xl">
          <ShieldAlert className="text-teal shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-display font-semibold text-ink">Zero compromises on baby gear</h3>
            <p className="mt-1 text-sm text-ink/75 leading-relaxed">
              Many imported car seats and toys entering the Kenyan market bypass international safety screenings. At Unicore Dynamics, we import stock selectively from ISO-certified manufacturers and inspect batches at our Thika hub.
            </p>
          </div>
        </div>

        {/* Certifications list */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
            Global Standards We Enforce
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-2xl border border-ink/10 bg-white/60 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-teal">
                    <Award size={20} />
                    <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-ink text-lg">{cert.name}</h3>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
