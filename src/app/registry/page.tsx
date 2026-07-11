import { Gift, Link as LinkIcon, Users } from "lucide-react";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";

const STEPS = [
  {
    icon: Gift,
    title: "Build your list",
    body: "Add anything across nursery, everyday essentials, growing years, or play. Update it any time as your needs change.",
  },
  {
    icon: LinkIcon,
    title: "Share one link",
    body: "Send it to family and friends over WhatsApp, email, or however you'd normally reach them.",
  },
  {
    icon: Users,
    title: "They pay, you receive",
    body: "Guests pay for items directly through the registry. No cash handling, no double gifts.",
  },
];

export default function RegistryPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Registry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            Build a registry, let people actually help.
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Something the toy stores never bothered to build. Add what you
            need across every stage, from the nursery to the school run, and
            share one link.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-3 gap-8 sm:gap-10">
          {STEPS.map(({ icon: Icon, title, body }, i) => (
            <div key={title}>
              <div className="flex items-center gap-3">
                <Icon size={22} strokeWidth={1.75} className="text-teal" />
                <span className="font-mono text-xs text-ink/40">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-display font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-marigold/15 border border-marigold/30 p-8 sm:p-10 max-w-2xl">
          <h2 className="font-display text-xl font-semibold text-ink">
            Registry accounts are being wired in now.
          </h2>
          <p className="mt-2 text-sm text-ink/70 leading-relaxed">
            Leave your email and we&rsquo;ll let you know the moment you can
            create one. Everything above reflects exactly how it&rsquo;ll work.
          </p>
          <form className="mt-5 flex flex-col sm:flex-row gap-3">
            <label htmlFor="registry-email" className="sr-only">
              Email address
            </label>
            <input
              id="registry-email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full sm:w-72 rounded-full px-5 py-3 text-sm text-ink placeholder:text-ink/40 border border-ink/15 focus:outline-none focus:ring-2 focus:ring-teal"
            />
            <button
              type="submit"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-stone hover:bg-ink/90 transition-colors whitespace-nowrap"
            >
              Notify me
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
