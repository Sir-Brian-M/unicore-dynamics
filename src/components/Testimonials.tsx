import FadeIn from "./FadeIn";

const TESTIMONIALS = [
  {
    quote:
      "The car seat guide actually told me which one fit our Vitz. First site that's bothered to check that.",
    name: "Wanjiru M.",
    context: "Nairobi, mother of one",
  },
  {
    quote:
      "Ordered a bike for my son at 10am, it was at our gate in Thika by 4pm. No drama, no chasing riders.",
    name: "Otieno K.",
    context: "Thika, father of two",
  },
  {
    quote:
      "Traded up the crib for a toddler bed through their upgrade program. Half the cost of buying new.",
    name: "Achieng W.",
    context: "Nairobi, mother of two",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 sm:py-20 border-b border-ink/10">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-10 sm:mb-14">
            From families using it
          </p>
        </FadeIn>
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <figure>
                <blockquote className="font-display text-lg text-ink leading-snug">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm text-ink/60">
                  {t.name} &middot; {t.context}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
