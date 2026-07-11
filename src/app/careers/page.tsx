import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Briefcase, Heart, Smile, Sparkles } from "lucide-react";

export const metadata = {
  title: "Careers at Unicore Dynamics",
  description: "Explore job opportunities and career paths at Unicore Dynamics. Join our team in Thika and Nairobi.",
};

const JOBS = [
  {
    title: "Customer Support Associate",
    type: "Full-Time",
    location: "Thika Office",
    desc: "Help parents select the right equipment, resolve order queries, and coordinate delivery logistics. Requires excellent communication skills.",
  },
  {
    title: "Logistics Fulfillment Specialist",
    type: "Full-Time",
    location: "Thika Hub",
    desc: "Oversee inventory, package incoming orders securely, and manage local delivery rider coordinates across Nairobi and Kiambu.",
  },
  {
    title: "Fargo & Courier Operations Lead",
    type: "Full-Time",
    location: "Thika Office",
    desc: "Coordinate our upcountry shipping channels. Experience managing logistics partnerships (Fargo Courier, G4S, Sendy) required.",
  },
];

export default function CareersPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Join the Family
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Careers at Unicore Dynamics
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            We are building the future of kids' retail and logistics in East Africa. If you love solving operations, customer support, or supply chain challenges, we'd love to meet you.
          </p>
        </div>

        {/* Culture Grid */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Heart className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Family First</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              We offer generous parenting leave, medical covers, and flexible working environments for our employees.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Smile className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Growth Focused</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              We cover courses, workshop certifications, and support transitions between customer care and operations.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 bg-white/40 p-6">
            <Sparkles className="text-teal" size={24} />
            <h3 className="mt-4 font-display font-semibold text-ink">Fair Pay</h3>
            <p className="mt-2 text-sm text-ink/75 leading-relaxed">
              We pay highly competitive salaries with clear, merit-based bonuses for fulfillment and support speed.
            </p>
          </div>
        </div>

        {/* Open Roles */}
        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
            Open Positions
          </h2>
          <div className="space-y-4">
            {JOBS.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-ink/10 bg-white/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold text-ink text-lg">{job.title}</h3>
                    <span className="rounded-full bg-teal/10 px-2.5 py-0.5 font-mono text-[10px] text-teal font-medium uppercase">
                      {job.type}
                    </span>
                  </div>
                  <p className="mt-1 font-mono text-xs text-marigold uppercase tracking-wider">
                    {job.location}
                  </p>
                  <p className="mt-3 text-sm text-ink/75 leading-relaxed max-w-xl">{job.desc}</p>
                </div>
                <a
                  href="mailto:careers@unicoredynamics.co.ke"
                  className="rounded-full bg-ink px-5 py-2.5 font-mono text-xs font-semibold text-stone hover:bg-ink/90 transition-colors shrink-0 text-center"
                >
                  Apply Now &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
