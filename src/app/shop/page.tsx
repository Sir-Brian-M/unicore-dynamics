"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";
import { supabase } from "@/lib/supabase";

const CATEGORIES = [
  "All",
  "Nursery & Infant",
  "Everyday Essentials",
  "Growing Years",
  "Play",
] as const;

function ShopContent() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "All";
  const [active, setActive] = useState<string>(
    CATEGORIES.includes(initialCategory as (typeof CATEGORIES)[number])
      ? initialCategory
      : "All"
  );

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const { data, error } = await supabase
          .from("products")
          .select("*")
          .order("name", { ascending: true });

        if (error) throw error;

        // Map DB columns (age_range) to Product TS interface (ageRange)
        const mappedProducts: Product[] = (data || []).map(
          (p: {
            slug: string;
            name: string;
            category: Product["category"];
            age_range: string;
            price: number;
            cert: string;
            description: string;
            specs: Product["specs"];
            stock: number;
          }) => ({
            slug: p.slug,
            name: p.name,
            category: p.category,
            ageRange: p.age_range,
            price: p.price,
            cert: p.cert,
            description: p.description,
            specs: p.specs,
            stock: p.stock,
          })
        );

        setProducts(mappedProducts);
      } catch {
        setError("Failed to load products from database.");
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-content px-5 sm:px-8 py-20 text-center">
        <p className="text-ink/60 font-mono text-sm">Loading equipment...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="mx-auto max-w-content px-5 sm:px-8 py-20 text-center">
        <p className="text-brick font-medium">{error}</p>
      </main>
    );
  }

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <main className="mx-auto max-w-content px-5 sm:px-8 py-10 sm:py-14">
      <div className="max-w-lg mb-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
          Shop
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
          Every stage, one shop.
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              active === cat
                ? "bg-ink text-stone"
                : "bg-sand text-ink/70 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-ink/60">Nothing here yet. Try a different category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function ShopPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Suspense fallback={null}>
        <ShopContent />
      </Suspense>
      <Footer />
    </>
  );
}
