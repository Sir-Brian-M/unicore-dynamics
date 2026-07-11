"use client";

import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="flex items-center rounded-full border border-ink/20 w-fit">
        <button
          aria-label="Decrease quantity"
          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          className="h-11 w-11 flex items-center justify-center hover:bg-sand rounded-full transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="w-8 text-center font-mono text-sm">{quantity}</span>
        <button
          aria-label="Increase quantity"
          onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
          className="h-11 w-11 flex items-center justify-center hover:bg-sand rounded-full transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>

      <button
        onClick={handleAdd}
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-stone hover:bg-ink/90 transition-colors"
      >
        {added ? (
          <>
            <Check size={16} /> Added to cart
          </>
        ) : (
          "Add to cart"
        )}
      </button>
    </div>
  );
}
