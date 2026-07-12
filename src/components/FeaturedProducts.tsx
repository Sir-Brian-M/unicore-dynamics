"use client";

import Link from "next/link";
import { PRODUCTS, Product } from "@/data/products";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { ArrowRight, Flame, Sparkles, Tags, LayoutGrid } from "lucide-react";

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState<"all" | "new" | "hot" | "sale">("all");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("name", { ascending: true });

        if (error || !data || data.length === 0) {
          setProducts(PRODUCTS);
          return;
        }

        const mapped: Product[] = data.map((p) => ({
          slug: p.slug,
          name: p.name,
          category: p.category as Product["category"],
          ageRange: p.age_range,
          price: p.price,
          cert: p.cert,
          description: p.description,
          specs: p.specs,
          stock: p.stock,
          badge: p.badge,
          image: p.image || PRODUCTS.find((lp) => lp.slug === p.slug)?.image,
        }));
        setProducts(mapped);
      } catch {
        setProducts(PRODUCTS);
      }
    }
    fetchFeatured();
  }, []);

  const getFilteredProducts = () => {
    const list = products.length > 0 ? products : PRODUCTS;
    if (activeTab === "new") return list.filter((p) => p.badge === "New").slice(0, 8);
    if (activeTab === "hot") return list.filter((p) => p.badge === "Hot" || p.stock <= 5).slice(0, 8);
    if (activeTab === "sale") return list.filter((p) => p.badge === "Sale" || (p.comparePrice && p.comparePrice > p.price)).slice(0, 8);
    return list.slice(0, 8);
  };

  const filtered = getFilteredProducts();

  const TABS = [
    { id: "all", label: "Featured Picks", icon: LayoutGrid },
    { id: "new", label: "New Arrivals", icon: Sparkles },
    { id: "hot", label: "Best Sellers", icon: Flame },
    { id: "sale", label: "Special Offers", icon: Tags },
  ] as const;

  return (
    <section className="py-16 sm:py-24 border-b border-ink/10 bg-stone/5">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3 font-bold">
              Popular right now
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Considered picks, not a catalogue dump.
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-ink border-b border-ink/35 hover:border-teal hover:text-teal transition-colors pb-0.5 whitespace-nowrap self-start md:self-auto"
          >
            View all products
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Client-Side Tabs */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-ink/5 pb-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-ink text-stone shadow-md"
                  : "bg-white text-ink/75 hover:bg-stone/20 border border-ink/5"
              }`}
            >
              <tab.icon size={13} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.05}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
