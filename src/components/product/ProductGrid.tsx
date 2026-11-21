import React from "react";
import { Product } from "@/types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  emptyMessage?: string;
}

export default function ProductGrid({
  products,
  emptyMessage = "No matching products found.",
}: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="py-16 text-center bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] p-8">
        <p className="text-sm text-[#626A75] font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
