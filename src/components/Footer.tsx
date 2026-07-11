import Link from "next/link";

const COLUMNS = [
  {
    title: "Shop",
    links: [
      { label: "Nursery & Infant", href: "/shop?category=Nursery+%26+Infant" },
      { label: "Everyday Essentials", href: "/shop?category=Everyday+Essentials" },
      { label: "Growing Years", href: "/shop?category=Growing+Years" },
      { label: "Play", href: "/shop?category=Play" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Track your order", href: "/track-order" },
      { label: "Delivery zones", href: "#" },
      { label: "Returns policy", href: "#" },
      { label: "Size & fit guides", href: "#" },
      { label: "Contact us", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Unicore Dynamics", href: "/about" },
      { label: "Safety certifications", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <div className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-baseline gap-1 font-display font-semibold">
              <span className="text-xl">unicore</span>
              <span className="text-xs text-marigold uppercase tracking-[0.2em]">dynamics</span>
            </Link>
            <p className="mt-4 text-sm text-stone/60 max-w-xs leading-relaxed">
              Kids equipment for every stage, from nursery to primary school
              age. Based in Thika, delivering across Kenya.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-stone/50">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-stone/80 hover:text-stone transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-stone/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-stone/50">
            &copy; {new Date().getFullYear()} Unicore Dynamics. All rights reserved.
          </p>
          <p className="font-mono text-xs text-stone/50">
            M-Pesa &middot; Paystack &middot; Pay on delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
