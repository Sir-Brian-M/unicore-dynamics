import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { ShieldCheck, Award, Leaf, Zap, ShieldAlert, BookOpen, Layers, CheckSquare } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Safety Certifications & Standards",
  description: "Learn about product safety testing, material standards, and ECE / EN certifications at Unicore Dynamics.",
};

const CERTS = [
  {
    name: "ECE R129 (i-Size)",
    category: "Car Seats",
    icon: ShieldCheck,
    desc: "The latest, most rigorous European safety standard for infant car seats. It requires side-impact testing, height-based categorization, and mandatory ISOFIX installation to minimize errors.",
  },
  {
    name: "EN 71 Parts 1, 2 & 3",
    category: "Toys & Play Equipment",
    icon: Award,
    desc: "European standard covering physical safety properties (e.g. sharp edges, choke hazards), flammability, and chemical migration limits for paints and raw wooden materials.",
  },
  {
    name: "ASTM F963 Tested",
    category: "Strollers & Furniture",
    icon: Layers,
    desc: "American standard testing load capacity, harness strength, structural integrity, and stability under dynamic conditions to prevent tip-overs and frame collapse.",
  },
  {
    name: "OEKO-TEX Standard 100",
    category: "Apparel & Linens",
    icon: Leaf,
    desc: "Worldwide independent certification system confirming that fabrics and cotton sleepsuits are completely free of over 100 harmful substances and skin allergens.",
  },
  {
    name: "CE Marking",
    category: "Electronics & Ride-ons",
    icon: Zap,
    desc: "Confirms compliance with European health, safety, and environmental protection standards for all battery-powered and electric vehicles.",
  },
  {
    name: "FSC Certified Wood",
    category: "Furniture & Wooden Toys",
    icon: BookOpen,
    desc: "Verifies that the wood used in our desks and toys is harvested from responsibly managed forests that provide environmental, social, and economic benefits.",
  },
];

export default function SafetyPage() {
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
              Our Core Commitment
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Safety Certifications
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              We do not sell items that have not been independently lab-tested. Every product page on our site lists verified global safety certificates, giving you peace of mind.
            </p>
          </div>
        </section>

        {/* Promise Stats */}
        <section className="border-y border-ink/10 bg-white/50 py-10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "100%", label: "Lab-Tested Products" },
                { value: "6+", label: "Global Standards" },
                { value: "Zero", label: "Compromises Made" },
                { value: "5+ Years", label: "Sourcing Experience" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <span className="font-mono text-3xl font-bold text-ink">{stat.value}</span>
                  <p className="text-xs text-ink/50 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big Warning box */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-12">
          <div className="rounded-3xl bg-teal/5 border border-teal/15 p-8 flex flex-col sm:flex-row gap-6 items-start">
            <ShieldAlert className="text-teal shrink-0 mt-1" size={28} />
            <div>
              <h3 className="font-display font-bold text-ink text-lg">Zero compromises on baby gear</h3>
              <p className="mt-2 text-sm text-ink/75 leading-relaxed">
                Many imported car seats and toys entering the Kenyan market bypass international safety screenings. At Unicore Dynamics, we import stock selectively from ISO-certified manufacturers and inspect batches at our Thika hub.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications List */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-12 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            Global Standards We Enforce
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTS.map((cert) => (
              <div
                key={cert.name}
                className="rounded-3xl border border-ink/8 bg-white p-8 flex flex-col justify-between hover:shadow-xl hover:border-ink/15 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-2.5 text-teal mb-4">
                    <cert.icon size={20} />
                    <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
                      {cert.category}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-ink text-lg">{cert.name}</h3>
                  <p className="mt-4 text-sm text-ink/70 leading-relaxed">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Verify Process */}
        <section className="bg-stone/50 border-t border-ink/10 py-16 sm:py-24">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
              Our Verification Process
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Manufacturer Vetting",
                  desc: "We only partner with factories that maintain ISO 9001 quality certificates and undergo independent safety audits.",
                },
                {
                  title: "Batch Inspection",
                  desc: "Every shipment arriving at our Thika fulfillment hub is unboxed and tested for component integrity and build quality.",
                },
                {
                  title: "Certificate Validation",
                  desc: "Our regulatory lead manually verifies safety certificates directly with European and American testing databases.",
                },
                {
                  title: "Recall Monitoring",
                  desc: "We monitor global consumer safety databases daily and instantly pull any matching batches from our shelves.",
                },
              ].map((step, i) => (
                <div key={i} className="rounded-3xl border border-ink/5 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal/10 text-teal text-xs font-mono font-bold">
                      {i + 1}
                    </span>
                    <h3 className="font-display font-bold text-ink text-sm">{step.title}</h3>
                  </div>
                  <p className="text-xs text-ink/65 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Zero Compromise CTA */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <div className="rounded-3xl bg-ink text-stone px-8 sm:px-12 py-12 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-teal/15" />
            <div className="absolute bottom-0 left-1/2 w-48 h-48 rounded-full bg-marigold/10" />
            <div className="relative text-center max-w-2xl mx-auto">
              <ShieldCheck size={40} className="mx-auto text-marigold mb-6" />
              <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                Shop safety-first kids gear today.
              </h2>
              <p className="mt-4 text-sm text-stone/70 leading-relaxed">
                Choose from our thoroughly inspected, internationally certified car seats, strollers, ride-ons, and developmental play toys.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="/shop"
                  className="rounded-full bg-marigold hover:bg-marigold-dark px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg"
                >
                  Browse Store
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
