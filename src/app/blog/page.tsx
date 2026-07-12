import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { Calendar, User, BookOpen, ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "The Unicore Journal | Kids Equipment Blog",
  description: "Read safety advice, gear reviews, installation guides, and child developmental milestones on our parenting blog.",
};

const POSTS = [
  {
    title: "ISOFIX vs Seatbelt: Which is Safer for Car Seats?",
    date: "July 08, 2026",
    author: "Dr. Catherine Wambua",
    category: "Safety Guides",
    gradient: "from-teal/20 to-teal/5",
    desc: "While both methods are safe when installed correctly, research shows over 70% of seatbelt installations have errors. ISOFIX reduces error rates to just 4%. Here's what you need to know.",
  },
  {
    title: "How to Choose Your Kid's First Bike (Wheel Sizes Explained)",
    date: "June 28, 2026",
    author: "Brian Murutu",
    category: "Growing Years",
    gradient: "from-marigold/20 to-marigold/5",
    desc: "Buying a bike that your child will 'grow into' is a common hazard. We break down the ideal sizing metrics based on height, inseam length, and developmental steering coordinates.",
  },
  {
    title: "Weaning Essentials: Simplifying Your Baby's Feeding Transition",
    date: "May 15, 2026",
    author: "Faith Mwangi (Nutritionist)",
    category: "Everyday Essentials",
    gradient: "from-brick/20 to-brick/5",
    desc: "Moving to solid foods is messy. This checklist covers the necessary BPA-free spoons, suction bowls, and ergonomic feeding sets that make weaning easier for parents.",
  },
  {
    title: "Hoverboard Safety: Crucial Rules for Parents",
    date: "July 12, 2026",
    author: "David Kamau",
    category: "Safety Guides",
    gradient: "from-teal/20 to-teal/5",
    desc: "Hoverboards are highly popular, but they require proper safety gear and supervision. Learn about UL 2272 electrical certifications, protective gear, and safe riding surfaces.",
  },
  {
    title: "Trampoline Safety: Fun Play Without the Emergency Room",
    date: "July 02, 2026",
    author: "Dr. Catherine Wambua",
    category: "Play & Outdoor",
    gradient: "from-marigold/20 to-marigold/5",
    desc: "A trampoline with safety nets is just the start. Discover the golden rules of safe bouncing, weight limits, placement guidelines, and regular checkups to avoid common accidents.",
  },
  {
    title: "Baby-Proofing Your Kenyan Home: Room-by-Room Guide",
    date: "June 10, 2026",
    author: "Janet Kamau",
    category: "Everyday Essentials",
    gradient: "from-brick/20 to-brick/5",
    desc: "From Thika apartments to Nairobi suburban homes, baby-proofing requires specific focus. We cover stair gates, socket covers, cabinet locks, and securing heavy furniture.",
  },
];

const CATEGORIES = ["All", "Safety Guides", "Everyday Essentials", "Growing Years", "Play & Outdoor"];

export default function BlogPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="min-h-screen bg-stone/20">
        {/* Dark Ink Hero Banner */}
        <section className="relative overflow-hidden bg-ink text-stone">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 -right-12 h-96 w-96 rounded-full bg-teal/15" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-marigold/10" />
          </div>
          <div className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24 relative z-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold mb-4">
              Parenting Journal
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              The Unicore Journal
            </h1>
            <p className="mt-6 text-lg text-stone/70 leading-relaxed max-w-2xl">
              Practical advice, gear safety deep dives, and expert guidelines to help you navigate raising kids in Kenya.
            </p>

            {/* Category Quick-Links */}
            <div className="flex flex-wrap gap-2 mt-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  className="rounded-full px-5 py-2.5 text-xs font-semibold bg-stone/10 text-stone/85 hover:bg-stone/20 transition-all"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 3-Column Card Grid */}
        <section className="mx-auto max-w-content px-5 sm:px-8 py-16 sm:py-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post) => (
              <div
                key={post.title}
                className="group rounded-3xl border border-ink/8 bg-white overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:shadow-ink/5 hover:border-ink/15 transition-all duration-300"
              >
                <div>
                  {/* Decorative Gradient Header */}
                  <div className={`h-24 bg-gradient-to-br ${post.gradient} relative p-6 flex items-end`}>
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-teal bg-white/90 backdrop-blur px-2.5 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-semibold text-ink text-lg leading-snug group-hover:text-teal transition-colors">
                      {post.title}
                    </h3>
                    <p className="mt-4 text-sm text-ink/70 leading-relaxed line-clamp-4">
                      {post.desc}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-4 text-[11px] text-ink/45 font-mono border-t border-ink/5 pt-4 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={12} />
                      {post.author}
                    </span>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-xs font-bold text-ink group-hover:text-teal transition-colors"
                  >
                    Read Article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup Strip */}
        <section className="bg-sand/40 border-t border-ink/10">
          <div className="mx-auto max-w-content px-5 sm:px-8 py-16 text-center">
            <Mail size={32} className="mx-auto text-teal mb-4" />
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-ink">
              Get parenting & gear safety tips.
            </h2>
            <p className="mt-2 text-sm text-ink/65 max-w-md mx-auto">
              Join our newsletter to receive bi-weekly guides written by Kenyan paediatricians and safety experts.
            </p>
            <div className="mt-6 max-w-md mx-auto flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border border-ink/15 bg-white px-5 py-3 text-sm focus:border-teal focus:ring-1 focus:ring-teal outline-none"
              />
              <button className="rounded-full bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-stone hover:bg-ink/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
