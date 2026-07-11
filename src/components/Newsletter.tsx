import FadeIn from "./FadeIn";

export default function Newsletter() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <FadeIn className="rounded-3xl bg-teal text-stone p-8 sm:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="max-w-md">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
              Get restock alerts and new arrivals.
            </h2>
            <p className="mt-3 text-stone/80 leading-relaxed">
              One email a week, mostly about diaper restocks and new gear for
              growing kids. Unsubscribe any time.
            </p>
          </div>
          <form className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full sm:w-72 rounded-full px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-marigold"
            />
            <button
              type="submit"
              className="rounded-full bg-marigold px-7 py-3.5 text-sm font-medium text-ink hover:bg-marigold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
