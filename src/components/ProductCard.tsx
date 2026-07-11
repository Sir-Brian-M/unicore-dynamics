import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group rounded-2xl border border-ink/10 overflow-hidden bg-white/40 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10 hover:border-ink/20 block"
    >
      <div className="aspect-square bg-sand relative overflow-hidden">
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
        <div className="absolute inset-0 bg-teal/0 group-hover:bg-teal/5 transition-colors" />
      </div>
      <div className="p-5">
        <p className="font-mono text-[11px] uppercase tracking-wide text-ink/50">
          {product.category} &middot; {product.ageRange}
        </p>
        <h3 className="mt-2 font-display font-semibold text-ink leading-snug group-hover:underline underline-offset-2">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center gap-1.5 text-xs text-teal">
          <ShieldCheck size={14} strokeWidth={1.75} />
          {product.cert}
        </div>
        <p className="mt-4 font-mono text-lg text-ink">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
