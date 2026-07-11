import { ArrowRight, Gift } from "lucide-react";
import Link from "next/link";

export default function RegistryBanner() {
  return (
    <section id="registry" className="py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="rounded-3xl bg-marigold/15 border border-marigold/30 p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-xl">
            <Gift size={26} strokeWidth={1.5} className="text-marigold-dark" />
            <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold text-ink tracking-tight">
              Build a registry, let family and friends actually help.
            </h2>
            <p className="mt-3 text-ink/70 leading-relaxed">
              Add what you need across every stage, from the nursery to the
              school run, and share one link. Something the toy stores never
              bothered to build.
            </p>
          </div>
          <Link
            href="/registry"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors whitespace-nowrap"
          >
            Start your registry
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
