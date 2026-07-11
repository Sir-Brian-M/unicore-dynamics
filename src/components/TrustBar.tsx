import { ShieldCheck, Truck, Wallet, Star } from "lucide-react";
import FadeIn from "./FadeIn";

const ITEMS = [
  {
    icon: ShieldCheck,
    title: "Verified safety certs",
    body: "Every product page shows the certifications behind it, not buried in a PDF.",
  },
  {
    icon: Wallet,
    title: "Pay your way",
    body: "M-Pesa, Paystack card, or pay on delivery. Compared clearly at checkout.",
  },
  {
    icon: Truck,
    title: "Same day in Nairobi & Thika",
    body: "Order before 1pm and it's at your door the same day, in these zones.",
  },
  {
    icon: Star,
    title: "Real parent reviews",
    body: "Photo reviews from families who've actually used the gear, not just star ratings.",
  },
];

export default function TrustBar() {
  return (
    <section className="py-14 sm:py-20 border-b border-ink/10">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {ITEMS.map(({ icon: Icon, title, body }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <Icon size={22} strokeWidth={1.75} className="text-teal" />
              <h3 className="mt-4 font-display font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{body}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
