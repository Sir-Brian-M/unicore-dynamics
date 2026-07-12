import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Heart, Smile, Sparkles, TrendingUp, DollarSign, Coffee, GraduationCap, MapPin, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Careers at Unicore Dynamics",
  description: "Explore job opportunities and career paths at Unicore Dynamics. Join our team in Thika and Nairobi.",
};

const STATS = [
  { value: "6+", label: "Years Operating" },
  { value: "4,800+", label: "Families Served" },
  { value: "3", label: "Office Locations" },
  { value: "40+", label: "Team Members" },
];

const PERKS = [
  {
    icon: Heart,
    title: "Family First",
    desc: "We offer generous parenting leave, comprehensive medical covers, and flexible working setups for all parents on our team.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "We cover professional training courses, certifications, and support transitions between customer care and operations.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    desc: "We pay highly competitive salaries with clear, merit-based monthly bonuses based on fulfillment and support speed.",
  },
  {
    icon: Coffee,
    title: "Relaxed Culture",
    desc: "No corporate stiff suits. We believe in an open-office environment, cooperative team meetings, and regular team lunches.",
  },
  {
    icon: GraduationCap,
    title: "Learning Budget",
    desc: "Every team member gets an annual KSh 30,000 learning budget to spend on books, courses, or events.",
  },
  {
    icon: MapPin,
    title: "Office Locations",
    desc: "Work out of our central Thika headquarters, our Nairobi Westlands showroom, or our main Thika fulfillment hub.",
  },
];

const JOBS = [
  {
    title: "Customer Support Associate",
    type: "Full-Time",
    location: "Thika Office",
    desc: "Help parents select the right equipment, resolve order queries, and coordinate delivery logistics. Requires excellent communication skills.",
    reqs: [
      "1+ years experience in customer-facing support roles",
      "Fluency in English and Kiswahili (written and verbal)",
      "Familiarity with e-commerce ticket managers (Zendesk/Freshdesk)",
    ],
  },
  {
    title: "Logistics Fulfillment Specialist",
    type: "Full-Time",
    location: "Thika Hub",
    desc: "Oversee inventory, package incoming orders securely, and manage local delivery rider coordinates across Nairobi and Kiambu.",
    reqs: [
      "Experience working in retail or e-commerce warehouse environments",
      "High attention to detail (zero-error packing records)",
      "Ability to handle heavy boxes and operate warehouse software",
    ],
  },
  {
    title: "Fargo & Courier Operations Lead",
    type: "Full-Time",
    location: "Thika Office",
    desc: "Coordinate our upcountry shipping channels. Experience managing logistics partnerships (Fargo Courier, G4S, Sendy) required.",
    reqs: [
      "2+ years experience in logistics or freight operations in Kenya",
      "Established contacts with primary national courier providers",
      "Strong Excel tracking and route-optimization skills",
    ],
  },
  {
    title: "E-Commerce & Social Media Manager",
    type: "Full-Time",
    location: "Westlands Office",
    desc: "Drive digital marketing, manage content across Instagram/TikTok, and run ad campaigns targeting parenting groups in Kenya.",
    reqs: [
      "Proven track record growing brand accounts on IG/TikTok",
      "Experience with Meta Ads Manager and copy writing",
      "Basic graphic design and short-form video editing skills",
    ],
  },
  {
    title: "Warehouse & Inventory Analyst",
    type: "Contract",
    location: "Thika Hub",
    desc: "Conduct audits, track inventory turns, and optimize re-order points for our international supplier shipments.",
    reqs: [
      "Strong background in supply chain management or statistics",
      "Expert level efficiency in SQL and database reporting",
      "Experience with ERP systems or Shopify inventory backends",
    ],
  },
];

export default function CareersPage() {
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
              Join the Family
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Careers at Unicore
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              We are building the future of kids' retail and logistics in East Africa. If you love solving operations, customer support, or supply chain challenges, we'd love to meet you.
            </p>
          </div>
        </section>

        {/* Stats ribbon */}
        <section className="border-y border-ink/10 bg-white/50 py-10">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {STATS.map((s, i) => (
                <div key={i} className="text-center">
                  <dt className="font-mono text-3xl font-bold text-ink">{s.value}</dt>
                  <dd className="mt-1 text-xs text-ink/50">{s.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits Grid */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
            Perks & Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PERKS.map((perk, i) => (
              <div
                key={i}
                className="group rounded-3xl border border-ink/8 bg-white p-8 hover:shadow-xl hover:border-ink/15 transition-all duration-300"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10 text-teal mb-6 group-hover:scale-110 transition-transform">
                  <perk.icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-ink text-base mb-3">{perk.title}</h3>
                <p className="text-sm text-ink/65 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Roles list */}
        <section className="bg-stone/50 border-t border-ink/10 py-16 sm:py-24">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              {JOBS.map((job) => (
                <div
                  key={job.title}
                  className="rounded-3xl border border-ink/8 bg-white p-6 sm:p-8 flex flex-col justify-between gap-6 hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display font-semibold text-ink text-lg">{job.title}</h3>
                      <span className="rounded-full bg-teal/10 px-3 py-1 font-mono text-[9px] text-teal font-bold uppercase tracking-wider">
                        {job.type}
                      </span>
                    </div>
                    <p className="mt-1.5 font-mono text-xs text-marigold uppercase tracking-wider font-semibold">
                      {job.location}
                    </p>
                    <p className="mt-4 text-sm text-ink/75 leading-relaxed">{job.desc}</p>

                    {/* Requirements list */}
                    <div className="mt-6">
                      <h4 className="font-display font-bold text-xs text-ink/70 uppercase tracking-wider mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.reqs.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-ink/65 leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-teal/60 mt-1.5 shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-ink/5 pt-6 flex justify-end">
                    <a
                      href={`mailto:careers@unicoredynamics.co.ke?subject=Application for ${job.title}`}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone hover:bg-ink/90 transition-colors shadow-md"
                    >
                      Apply Now
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Strip */}
        <section className="bg-ink text-stone">
          <div className="mx-auto max-w-content px-5 sm:px-8 py-16 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold">
              Don't see a role that fits?
            </h2>
            <p className="mt-2 text-sm text-stone/60 max-w-md mx-auto">
              We are always looking for smart, ambitious minds in operations, finance, and engineering. Send us an open application.
            </p>
            <div className="mt-8">
              <a
                href="mailto:careers@unicoredynamics.co.ke?subject=Open Application"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-marigold hover:bg-marigold-dark px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white transition-all shadow-lg"
              >
                Send your CV
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
