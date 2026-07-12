"use client";

import Link from "next/link";
import { ShieldCheck, ShoppingCart, Heart, Star } from "lucide-react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

const BADGE_STYLES: Record<string, string> = {
  Hot: "bg-brick text-white",
  New: "bg-teal text-white",
  Sale: "bg-marigold text-white",
  "Low Stock": "bg-ink/80 text-stone",
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={10}
          className={
            i <= full
              ? "fill-marigold text-marigold"
              : half && i === full + 1
              ? "fill-marigold/50 text-marigold"
              : "fill-ink/10 text-ink/20"
          }
        />
      ))}
      <span className="ml-1 font-mono text-[9px] text-ink/40">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  function handleWishlist(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setWished((w) => !w);
  }

  const hasDiscount = product.comparePrice && product.comparePrice > product.price;
  const discountPct = hasDiscount
    ? Math.round(((product.comparePrice! - product.price) / product.comparePrice!) * 100)
    : 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group relative rounded-2xl border border-ink/8 overflow-hidden bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-ink/12 hover:border-ink/20 flex flex-col"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-sand relative overflow-hidden flex-shrink-0">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ShoppingCart size={40} className="text-ink/20" />
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Add to Cart — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3">
          <button
            onClick={handleAddToCart}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold shadow-xl transition-all duration-200 ${
              added
                ? "bg-teal text-white scale-95"
                : "bg-white/95 hover:bg-white text-ink hover:scale-105"
            }`}
          >
            <ShoppingCart size={13} />
            {added ? "Added ✓" : "Add to Cart"}
          </button>
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-sm ${BADGE_STYLES[product.badge]}`}
          >
            {product.badge}
          </span>
        )}

        {/* Discount percent */}
        {hasDiscount && (
          <span className="absolute top-3 left-3 rounded-full bg-brick text-white px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider shadow-sm">
            -{discountPct}%
          </span>
        )}

        {/* Wishlist */}
        <button
          onClick={handleWishlist}
          aria-label="Toggle wishlist"
          className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 shadow-md transition-all hover:scale-110 active:scale-95"
        >
          <Heart
            size={13}
            className={wished ? "fill-brick text-brick" : "text-ink/40"}
          />
        </button>

        {/* Low stock */}
        {product.stock <= 5 && product.stock > 0 && (
          <span className="absolute bottom-14 left-3 group-hover:bottom-16 transition-all rounded-full bg-brick/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
            Only {product.stock} left!
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col gap-1.5 flex-1">
        <p className="font-mono text-[9px] uppercase tracking-widest text-ink/40">
          {product.category} · {product.ageRange}
        </p>

        <h3 className="font-display font-semibold text-ink leading-snug text-sm group-hover:text-teal transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Stars */}
        {product.rating && <StarRating rating={product.rating} />}

        <div className="flex items-center gap-1.5 mt-0.5">
          <ShieldCheck size={11} strokeWidth={2} className="text-teal shrink-0" />
          <span className="text-[10px] text-ink/45 truncate">{product.cert}</span>
        </div>

        <div className="mt-auto pt-3 flex items-center justify-between border-t border-ink/5">
          <div>
            <p className="font-mono text-sm font-bold text-ink">{formatPrice(product.price)}</p>
            {hasDiscount && (
              <p className="font-mono text-[10px] text-ink/35 line-through">
                {formatPrice(product.comparePrice!)}
              </p>
            )}
          </div>
          {product.stock === 0 ? (
            <span className="text-[9px] font-bold text-brick/70 uppercase tracking-wider">Out of stock</span>
          ) : (
            <span className="text-[9px] text-teal font-bold uppercase tracking-wider">In stock</span>
          )}
        </div>
      </div>
    </Link>
  );
}
