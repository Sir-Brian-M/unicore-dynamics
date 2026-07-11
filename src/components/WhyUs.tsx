import { Check, X } from "lucide-react";
import FadeIn from "./FadeIn";

const ROWS = [
  { feature: "Product finder by age and stage", us: true, them: false },
  { feature: "Verified safety certifications shown per product", us: true, them: false },
  { feature: "Photo reviews from real parents", us: true, them: true },
  { feature: "M-Pesa, card, and pay on delivery", us: true, them: true },
  { feature: "Size and fit guides for car seats, bikes, cribs", us: true, them: false },
  { feature: "Subscribe and save on diapers and wipes", us: true, them: false },
  { feature: "Trade-in path as your child grows", us: true, them: false },
];

export default function WhyUs() {
  return (
    <section className="py-14 sm:py-20 bg-ink text-stone">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <FadeIn className="max-w-lg mb-10 sm:mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold mb-3">
            Why Unicore Dynamics
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight">
            A one stop shop, not a toy shop with a baby aisle.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} className="overflow-x-auto -mx-5 sm:mx-0 px-5 sm:px-0">
          <table className="w-full min-w-[540px] border-collapse">
            <thead>
              <tr className="text-left text-sm text-stone/60">
                <th className="pb-4 font-normal w-1/2">Feature</th>
                <th className="pb-4 font-normal text-center">Unicore Dynamics</th>
                <th className="pb-4 font-normal text-center">Typical toy store</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className="border-t border-stone/10">
                  <td className="py-4 pr-4 text-sm sm:text-base text-stone/90">{row.feature}</td>
                  <td className="py-4 text-center">
                    {row.us ? (
                      <Check size={18} className="inline text-marigold" />
                    ) : (
                      <X size={18} className="inline text-stone/30" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    {row.them ? (
                      <Check size={18} className="inline text-stone/60" />
                    ) : (
                      <X size={18} className="inline text-stone/30" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeIn>
      </div>
    </section>
  );
}
