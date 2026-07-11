import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Ruler, ShieldAlert, BadgeCheck } from "lucide-react";

export const metadata = {
  title: "Size & Fit Guides",
  description: "Detailed size charts and equipment fit guides for baby car seats, strollers, and kids bikes at Unicore Dynamics.",
};

export default function SizeGuidePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Parenting Tools
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Size & Fit Guides
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            Buying baby gear online can feel like guesswork. We have created clear, weight-and-age charts so you get the perfect fit the first time.
          </p>
        </div>

        {/* Categories of Guides */}
        <div className="mt-16 space-y-12">
          {/* Car Seats */}
          <section className="rounded-2xl border border-ink/10 bg-white/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              <Ruler className="text-teal" size={20} />
              Baby Car Seats (ECE Standards)
            </h2>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Car seat requirements are determined by the child's height and weight, not just age.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-ink/10 text-ink/65 font-mono text-xs uppercase">
                    <th className="pb-3">Seat Type / Stage</th>
                    <th className="pb-3">Weight Range</th>
                    <th className="pb-3">Approx. Age Range</th>
                    <th className="pb-3">Direction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  <tr>
                    <td className="py-3 font-semibold">Infant Capsule</td>
                    <td className="py-3">0 to 13 kg</td>
                    <td className="py-3">Birth to 12 months</td>
                    <td className="py-3 text-teal font-medium">Rear-facing only</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">Convertible (Stage 2)</td>
                    <td className="py-3">9 to 18 kg</td>
                    <td className="py-3">9 months to 4 years</td>
                    <td className="py-3 text-teal font-medium">Rear or Forward-facing</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">High-back Booster</td>
                    <td className="py-3">15 to 36 kg</td>
                    <td className="py-3">4 to 12 years</td>
                    <td className="py-3 text-teal font-medium">Forward-facing only</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Kids Bikes */}
          <section className="rounded-2xl border border-ink/10 bg-white/60 p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink flex items-center gap-2">
              <Ruler className="text-teal" size={20} />
              Kids Bikes Wheel Size Chart
            </h2>
            <p className="mt-2 text-sm text-ink/70 leading-relaxed">
              Choosing a bike that is too large or small makes learning harder and less safe.
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="border-b border-ink/10 text-ink/65 font-mono text-xs uppercase">
                    <th className="pb-3">Wheel Diameter</th>
                    <th className="pb-3">Child Height Range</th>
                    <th className="pb-3">Inseam Length</th>
                    <th className="pb-3">Approx. Age Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink/5">
                  <tr>
                    <td className="py-3 font-semibold">12-inch Wheels</td>
                    <td className="py-3">85 to 100 cm</td>
                    <td className="py-3">35 to 42 cm</td>
                    <td className="py-3 text-teal font-medium">2 to 4 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">16-inch Wheels</td>
                    <td className="py-3">95 to 115 cm</td>
                    <td className="py-3">45 to 55 cm</td>
                    <td className="py-3 text-teal font-medium">4 to 7 years</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold">20-inch Wheels</td>
                    <td className="py-3">115 to 135 cm</td>
                    <td className="py-3">55 to 63 cm</td>
                    <td className="py-3 text-teal font-medium">6 to 9 years</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
