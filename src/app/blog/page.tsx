import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import { BookOpen, Calendar, User } from "lucide-react";

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
    desc: "While both methods are safe when installed correctly, research shows over 70% of seatbelt installations have errors. ISOFIX reduces error rates to just 4%. Here's what you need to know.",
  },
  {
    title: "How to Choose Your Kid's First Bike (Wheel Sizes Explained)",
    date: "June 28, 2026",
    author: "Brian Murutu",
    category: "Growing Years",
    desc: "Buying a bike that your child will 'grow into' is a common hazard. We break down the ideal sizing metrics based on height, inseam length, and developmental steering coordinates.",
  },
  {
    title: "Weaning Essentials: Simplifying Your Baby's Feeding Transition",
    date: "May 15, 2026",
    author: "Faith Mwangi (Nutritionist)",
    category: "Everyday Essentials",
    desc: "Moving to solid foods is messy. This checklist covers the necessary BPA-free spoons, suction bowls, and ergonomic feeding sets that make weaning easier for parents.",
  },
];

export default function BlogPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-14 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
            Parenting Journal
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
            The Unicore Journal
          </h1>
          <p className="mt-4 text-ink/70 leading-relaxed max-w-xl">
            Practical advice, gear safety deep dives, and expert guidelines to help you navigate raising kids in Kenya.
          </p>
        </div>

        {/* Articles List */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <div
              key={post.title}
              className="rounded-2xl border border-ink/10 bg-white/60 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider font-semibold text-teal bg-teal/10 px-2 py-1 rounded">
                  {post.category}
                </span>
                <h3 className="mt-4 font-display font-semibold text-ink text-lg leading-snug hover:underline cursor-pointer">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-ink/75 leading-relaxed">{post.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/5 flex items-center gap-4 text-xs text-ink/55 font-mono">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User size={12} />
                  {post.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
