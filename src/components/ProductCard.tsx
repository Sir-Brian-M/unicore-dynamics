"use client";

import Link from "next/link";
import { ShieldCheck, ShoppingCart, Zap } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

const BADGE_STYLES: Record<string, string> = {
  Hot: "bg-brick text-white",
  New: "bg-teal text-white",
  Sale: "bg-marigold text-white",
  "Low Stock": "bg-ink/80 text-stone",
};

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  }

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group relative rounded-2xl border border-ink/10 overflow-hidden bg-white/60 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink/10 hover:border-ink/20 flex flex-col"
    >
      {/* Image */}
      <div className="aspect-square bg-sand relative overflow-hidden flex-shrink-0">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Zap size={40} className="text-ink/20" />
          </div>
        )}

        {/* Hover overlay with "Add to Cart" */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/20 transition-colors duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <button
            onClick={handleAddToCart}
            className="inline-flex items-center gap-2 rounded-full bg-stone/95 hover:bg-stone px-5 py-2.5 text-xs font-bold text-ink shadow-xl transition-all hover:scale-105 active:scale-95"
          >
            <ShoppingCart size={14} />
            Add to Cart
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${BADGE_STYLES[product.badge]}`}>
            {product.badge}
          </span>
        )}

        {/* Stock warning */}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="absolute top-3 right-3 rounded-full bg-brick/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Only {product.stock} left!
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-wide text-ink/45">
          {product.category} · {product.ageRange}
        </p>
        <h3 className="mt-1 font-display font-semibold text-ink leading-snug text-sm group-hover:text-teal transition-colors line-clamp-2">
          {product.name}
        </h3>
        <div className="mt-1.5 flex items-center gap-1 text-xs text-teal">
          <ShieldCheck size={12} strokeWidth={2} />
          <span className="text-ink/50 truncate">{product.cert}</span>
        </div>

        <div className="mt-auto pt-3 flex items-center justify-between">
          <p className="font-mono text-base font-semibold text-ink">{formatPrice(product.price)}</p>
          {product.stock === 0 ? (
            <span className="text-[10px] font-semibold text-brick/80 uppercase tracking-wider">Out of stock</span>
          ) : (
            <span className="text-[10px] text-teal/80 font-semibold uppercase tracking-wider">In stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
