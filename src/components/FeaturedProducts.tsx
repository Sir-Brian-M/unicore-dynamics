import Link from "next/link";
import { PRODUCTS, PRODUCT_IMAGES, Product } from "@/data/products";
import { supabaseAdmin } from "@/lib/supabase";
import ProductCard from "./ProductCard";
import FadeIn from "./FadeIn";

async function fetchFeaturedProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabaseAdmin
      .from("products")
      .select("*")
      .order("name", { ascending: true })
      .limit(4);

    if (error || !data) return [];

    return data.map((p: {
      slug: string;
      name: string;
      category: string;
      age_range: string;
      price: number;
      cert: string;
      description: string;
      specs: Product["specs"];
      stock: number;
    }) => ({
      slug: p.slug,
      name: p.name,
      category: p.category as Product["category"],
      ageRange: p.age_range,
      price: p.price,
      cert: p.cert,
      description: p.description,
      specs: p.specs,
      stock: p.stock,
      image: PRODUCT_IMAGES[p.slug],
    }));
  } catch {
    return [];
  }
}

export default async function FeaturedProducts() {
  const dbProducts = await fetchFeaturedProducts();
  const featured = dbProducts.length > 0 ? dbProducts : PRODUCTS.slice(0, 4);

  return (
    <section className="py-14 sm:py-20 border-b border-ink/10">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <FadeIn className="flex items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal mb-3">
              Popular right now
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              Considered picks, not a catalogue dump.
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden sm:block text-sm font-medium text-ink border-b border-ink/30 hover:border-ink pb-0.5 whitespace-nowrap"
          >
            View all products
          </Link>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <FadeIn key={product.slug} delay={i * 0.06}>
              <ProductCard product={product} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
