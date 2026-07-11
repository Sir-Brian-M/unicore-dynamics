import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import GrowthRuler from "@/components/GrowthRuler";

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-start">
          <div className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
              About
            </p>
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Kids equipment, not toy store clutter.
            </h1>
            <div className="mt-6 space-y-4 text-ink/75 leading-relaxed">
              <p>
                Unicore Dynamics started from a simple problem. Kenyan parents
                shopping for kids equipment were stuck choosing between
                imported guesswork and cluttered toy stores with no real
                information behind the products.
              </p>
              <p>
                We built something different: a single, considered range
                covering every stage from nursery to primary school age, with
                verified safety certifications on every product page, clear
                size and fit guidance, and a checkout built around how
                Kenyan families actually want to pay.
              </p>
              <p>
                The name reflects the idea directly. Uni for one unified
                range. Core for the essentials that actually matter. Dynamics
                for the fact that kids, and what they need, never stay still.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex justify-end text-ink/60">
            <GrowthRuler orientation="vertical" highlight={[0, 6, 12]} className="h-[360px] w-auto" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
