"use client";

import { Suspense, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Product, PRODUCT_IMAGES, PRODUCTS, formatPrice } from "@/data/products";
import { supabase } from "@/lib/supabase";
import { SlidersHorizontal, ChevronDown, Search, X, Grid, List } from "lucide-react";

const CATEGORIES = [
  "All",
  "Nursery & Infant",
  "Everyday Essentials",
  "Growing Years",
  "Play",
] as const;

const AGE_RANGES = ["All Ages", "0-1 yrs", "1-3 yrs", "3-6 yrs", "6-12 yrs"] as const;

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Name: A–Z", value: "name_asc" },
];

function matchesAgeRange(productAge: string, filter: string): boolean {
  if (filter === "All Ages") return true;
  const ageNum = parseInt(productAge);
  if (isNaN(ageNum)) return true;
  if (filter === "0-1 yrs") return ageNum < 2;
  if (filter === "1-3 yrs") return ageNum >= 1 && ageNum <= 3;
  if (filter === "3-6 yrs") return ageNum >= 3 && ageNum <= 6;
  if (filter === "6-12 yrs") return ageNum >= 6;
  return true;
}

function sortProducts(products: Product[], sort: string): Product[] {
  const copy = [...products];
  if (sort === "price_asc") return copy.sort((a, b) => a.price - b.price);
  if (sort === "price_desc") return copy.sort((a, b) => b.price - a.price);
  if (sort === "name_asc") return copy.sort((a, b) => a.name.localeCompare(b.name));
  return copy;
}

function ShopContent() {
  const params = useSearchParams();
  const initialCategory = params.get("category") ?? "All";
  const [activeCategory, setActiveCategory] = useState<string>(
    CATEGORIES.includes(initialCategory as (typeof CATEGORIES)[number])
      ? initialCategory
      : "All"
  );
  const [activeAge, setActiveAge] = useState<string>("All Ages");
  const [sort, setSort] = useState("featured");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState<number>(50000);
  const [onlySale, setOnlySale] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

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
            badge?: Product["badge"];
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
            badge: p.badge,
            image: PRODUCT_IMAGES[p.slug],
          })
        );

        setProducts(mappedProducts.length > 0 ? mappedProducts : PRODUCTS);
      } catch {
        setProducts(PRODUCTS);
        setError(null);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  if (loading) {
    return (
      <main className="mx-auto max-w-content px-5 sm:px-8 py-20 bg-stone/20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-ink/10 overflow-hidden animate-pulse bg-sand/50">
              <div className="aspect-square bg-sand" />
              <div className="p-4 space-y-2">
                <div className="h-3 bg-ink/10 rounded w-1/3" />
                <div className="h-4 bg-ink/10 rounded w-3/4" />
                <div className="h-4 bg-ink/10 rounded w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }

  // Filter + sort
  let filtered = products;
  if (activeCategory !== "All") filtered = filtered.filter((p) => p.category === activeCategory);
  if (activeAge !== "All Ages") filtered = filtered.filter((p) => matchesAgeRange(p.ageRange, activeAge));
  if (search.trim()) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }
  // Price range filter
  filtered = filtered.filter((p) => p.price <= maxPrice);
  // Sale filter
  if (onlySale) {
    filtered = filtered.filter((p) => p.badge === "Sale" || (p.comparePrice && p.comparePrice > p.price));
  }
  filtered = sortProducts(filtered, sort);

  // Helper count for categories
  const getCategoryCount = (category: string) => {
    let list = products;
    if (category !== "All") list = list.filter((p) => p.category === category);
    if (activeAge !== "All Ages") list = list.filter((p) => matchesAgeRange(p.ageRange, activeAge));
    return list.length;
  };

  return (
    <main className="mx-auto max-w-content px-5 sm:px-8 py-10 sm:py-14 bg-stone/20 min-h-screen">
      {/* Shop Header Banner */}
      <div className="rounded-3xl bg-ink text-stone px-8 py-12 mb-10 relative overflow-hidden">
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-teal/20" />
        <div className="absolute -bottom-8 right-32 w-32 h-32 rounded-full bg-marigold/20" />
        
        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-marigold mb-3">Shop All</p>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            Every stage, one shop.
          </h1>
          <p className="mt-3 text-stone/65 max-w-lg text-sm">
            Shop more, save more — Free delivery over KSh 5,000 for Nairobi & Thika. Pay on delivery.
          </p>

          {/* Category quick-links */}
          <div className="flex flex-wrap gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-marigold text-white shadow-lg shadow-marigold/30"
                    : "bg-stone/10 text-stone/85 hover:bg-stone/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-8 items-start">
        {/* ── Sidebar ── */}
        <aside
          className={`
            lg:block w-64 flex-shrink-0 space-y-8 bg-white p-6 rounded-3xl border border-ink/5 shadow-sm
            ${mobileSidebarOpen
              ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto lg:relative lg:inset-auto lg:z-auto lg:bg-white lg:p-6"
              : "hidden lg:block"
            }
          `}
        >
          {/* Mobile close */}
          <div className="flex items-center justify-between lg:hidden mb-4">
            <span className="font-display font-semibold text-ink">Filters</span>
            <button onClick={() => setMobileSidebarOpen(false)}>
              <X size={20} className="text-ink/60" />
            </button>
          </div>

          {/* Search */}
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-2 font-bold">
              Search
            </label>
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-xl border border-ink/15 bg-stone/5 pl-8 pr-3 py-2.5 text-xs text-ink placeholder:text-ink/35 focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-2 top-1/2 -translate-y-1/2 text-ink/40 hover:text-ink">
                  <X size={12} />
                </button>
              )}
            </div>
          </div>

          {/* Category filter */}
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-3 font-bold">
              Category
            </label>
            <ul className="space-y-1">
              {CATEGORIES.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex justify-between items-center rounded-xl px-3 py-2.5 text-sm transition-all ${
                      activeCategory === cat
                        ? "bg-ink text-stone font-semibold"
                        : "text-ink/75 hover:bg-stone/10 hover:text-ink"
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${activeCategory === cat ? "bg-stone/20 text-stone" : "bg-ink/5 text-ink/40"}`}>
                      {getCategoryCount(cat)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Price Range Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block font-bold">
                Max Price
              </label>
              <span className="font-mono text-xs font-bold text-teal">{formatPrice(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="50000"
              step="500"
              value={maxPrice}
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="w-full accent-teal cursor-pointer h-1 bg-ink/10 rounded-lg appearance-none"
            />
            <div className="flex justify-between text-[10px] text-ink/40 font-mono mt-1">
              <span>KSh 1,000</span>
              <span>KSh 50,000</span>
            </div>
          </div>

          {/* Sale items toggle */}
          <div className="flex items-center justify-between border-t border-ink/5 pt-4">
            <label htmlFor="sale-toggle" className="text-xs font-bold text-ink/75 uppercase tracking-wider cursor-pointer">
              On Sale Only
            </label>
            <input
              type="checkbox"
              id="sale-toggle"
              checked={onlySale}
              onChange={(e) => setOnlySale(e.target.checked)}
              className="h-4 w-4 rounded border-ink/15 text-teal focus:ring-teal cursor-pointer"
            />
          </div>

          {/* Age range filter */}
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-ink/50 block mb-3 font-bold">
              Age Range
            </label>
            <ul className="space-y-1">
              {AGE_RANGES.map((age) => (
                <li key={age}>
                  <button
                    onClick={() => setActiveAge(age)}
                    className={`w-full text-left rounded-xl px-3 py-2.5 text-sm transition-all ${
                      activeAge === age
                        ? "bg-teal/10 text-teal font-semibold border border-teal/20"
                        : "text-ink/70 hover:bg-stone/10 hover:text-ink"
                    }`}
                  >
                    {age}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Clear filters */}
          {(activeCategory !== "All" || activeAge !== "All Ages" || search || maxPrice < 50000 || onlySale) && (
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveAge("All Ages");
                setSearch("");
                setMaxPrice(50000);
                setOnlySale(false);
              }}
              className="w-full text-center text-xs text-brick/95 hover:text-brick font-semibold py-2.5 border border-brick/20 rounded-xl hover:bg-brick/5 transition-colors"
            >
              Clear all filters
            </button>
          )}
        </aside>

        {/* Mobile sidebar overlay */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 bg-ink/30 z-40 lg:hidden" onClick={() => setMobileSidebarOpen(false)} />
        )}

        {/* ── Product grid ── */}
        <div className="flex-1 min-w-0">
          {/* Sort & count bar */}
          <div className="flex items-center justify-between mb-6 gap-4 flex-wrap bg-white px-6 py-4 rounded-2xl border border-ink/5">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 rounded-xl border border-ink/15 px-3 py-2 text-xs font-semibold text-ink hover:bg-stone/10 transition-colors"
              >
                <SlidersHorizontal size={14} />
                Filters
              </button>
              <p className="text-xs sm:text-sm text-ink/60 font-mono">
                Showing <span className="font-semibold text-ink">{filtered.length}</span> product{filtered.length !== 1 ? "s" : ""}
              </p>
            </div>

            <div className="flex items-center gap-4">
              {/* Grid / List toggle */}
              <div className="hidden sm:flex border border-ink/15 rounded-xl overflow-hidden p-0.5 bg-stone/10">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === "grid" ? "bg-white text-ink shadow-sm" : "text-ink/40 hover:text-ink"}`}
                >
                  <Grid size={14} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-1.5 rounded-lg transition-colors ${viewMode === "list" ? "bg-white text-ink shadow-sm" : "text-ink/40 hover:text-ink"}`}
                >
                  <List size={14} />
                </button>
              </div>

              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="appearance-none rounded-xl border border-ink/15 bg-white pl-4 pr-9 py-2.5 text-xs font-semibold text-ink focus:border-teal focus:ring-1 focus:ring-teal outline-none transition-all cursor-pointer"
                >
                  {SORT_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                  ))}
                </select>
                <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-ink/40 pointer-events-none" />
              </div>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-3xl border border-ink/5">
              <p className="font-display text-xl text-ink/50 mb-2">No products found</p>
              <p className="text-sm text-ink/35">Try adjusting your filters or search.</p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setActiveAge("All Ages");
                  setSearch("");
                  setMaxPrice(50000);
                  setOnlySale(false);
                }}
                className="mt-5 rounded-full bg-ink text-stone px-6 py-2.5 text-sm font-semibold hover:bg-ink/90 transition-colors"
              >
                Clear filters
              </button>
            </div>
          ) : viewMode === "grid" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((product) => (
                <div
                  key={product.slug}
                  className="flex flex-col sm:flex-row rounded-3xl border border-ink/8 bg-white overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-full sm:w-48 h-48 bg-sand shrink-0 relative">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-1">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-widest text-ink/40">
                        {product.category} · {product.ageRange}
                      </p>
                      <h3 className="font-display font-semibold text-ink text-base mt-1 hover:text-teal transition-colors">
                        <Suspense fallback={product.name}>
                          <a href={`/shop/${product.slug}`}>{product.name}</a>
                        </Suspense>
                      </h3>
                      <p className="text-xs text-ink/60 mt-2 line-clamp-2">{product.description}</p>
                    </div>
                    <div className="flex items-center justify-between border-t border-ink/5 pt-4 mt-4">
                      <span className="font-mono text-base font-bold text-ink">{formatPrice(product.price)}</span>
                      <Suspense fallback={null}>
                        <a
                          href={`/shop/${product.slug}`}
                          className="rounded-full bg-stone hover:bg-stone/80 text-ink text-xs font-semibold px-4 py-2 transition-all"
                        >
                          View Details
                        </a>
                      </Suspense>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <p className="mt-6 text-center text-xs text-brick/70 font-mono">{error}</p>
          )}
        </div>
      </div>
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
