import { notFound } from "next/navigation";
import Link from "next/link";
import { ShieldCheck, Truck, RotateCcw } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import { Product, formatPrice } from "@/data/products";
import { supabaseAdmin } from "@/lib/supabase";

export const revalidate = 0;

async function fetchProduct(slug: string): Promise<Product | null> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !data) return null;

  return {
    slug: data.slug,
    name: data.name,
    category: data.category as Product["category"],
    ageRange: data.age_range,
    price: data.price,
    cert: data.cert,
    description: data.description,
    specs: data.specs,
    stock: data.stock,
  };
}

async function fetchAllProducts(): Promise<Product[]> {
  const { data, error } = await supabaseAdmin
    .from("products")
    .select("*")
    .order("name", { ascending: true });

  if (error || !data) return [];

  return data.map(
    (p: {
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
    })
  );
}

export async function generateStaticParams() {
  const products = await fetchAllProducts();
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = await fetchProduct(params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await fetchProduct(params.slug);
  if (!product) notFound();

  const products = await fetchAllProducts();
  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="mx-auto max-w-content px-5 sm:px-8 py-10 sm:py-14">
        <nav className="text-xs text-ink/50 mb-8 flex items-center gap-2 font-mono">
          <Link href="/shop" className="hover:text-ink">
            Shop
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${encodeURIComponent(product.category)}`}
            className="hover:text-ink"
          >
            {product.category}
          </Link>
        </nav>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="aspect-square bg-sand rounded-2xl" aria-hidden="true" />

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-ink/50">
              {product.category} &middot; {product.ageRange}
            </p>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl font-semibold text-ink tracking-tight">
              {product.name}
            </h1>

            <div className="mt-4 flex items-center gap-1.5 text-sm text-teal">
              <ShieldCheck size={16} strokeWidth={1.75} />
              {product.cert}
            </div>

            <p className="mt-6 font-mono text-3xl text-ink">{formatPrice(product.price)}</p>

            <p className="mt-6 text-ink/75 leading-relaxed">{product.description}</p>

            <div className="mt-8">
              <AddToCartButton product={product} />
            </div>

            <p className="mt-4 text-xs text-ink/50">
              {product.stock > 5
                ? "In stock, ready to ship"
                : product.stock > 0
                ? `Only ${product.stock} left in stock`
                : "Out of stock"}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 text-sm text-ink/70">
              <div className="flex items-start gap-2.5">
                <Truck size={18} strokeWidth={1.75} className="text-teal shrink-0 mt-0.5" />
                Same day delivery in Nairobi and Thika, other regions in 2 to 4 days.
              </div>
              <div className="flex items-start gap-2.5">
                <RotateCcw size={18} strokeWidth={1.75} className="text-teal shrink-0 mt-0.5" />
                14 day returns on unopened items.
              </div>
            </div>

            <div className="mt-10 border-t border-ink/10 pt-6">
              <h2 className="font-display font-semibold text-ink mb-4">Specifications</h2>
              <dl className="space-y-3">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex justify-between text-sm">
                    <dt className="text-ink/55">{spec.label}</dt>
                    <dd className="font-mono text-ink/85">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-semibold text-ink tracking-tight mb-8">
              More from {product.category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
