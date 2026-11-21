import React from "react";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";
import ProductDetailsTabs from "@/components/product/ProductDetailsTabs";
import ProductCard from "@/components/product/ProductCard";
import type { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      images: [product.primaryImage],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Get related products
  const related = products
    .filter((p) => product.relatedProductIds.includes(p.id) || (p.category === product.category && p.id !== product.id))
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Top 2-Column Product Layout (Section 8.1) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Gallery (54% on desktop) */}
        <div className="lg:col-span-7">
          <ProductGallery images={product.images} title={product.title} />
        </div>

        {/* Right Purchase Panel (46% on desktop) */}
        <div className="lg:col-span-5 sticky top-24">
          <ProductPurchasePanel product={product} />
        </div>
      </div>

      {/* Below the Fold Details, Specs, Compatibility & FAQs (Section 8.6) */}
      <div className="max-w-4xl mx-auto">
        <ProductDetailsTabs product={product} />
      </div>

      {/* Related Complementary Products (Section 8.7) */}
      {related.length > 0 && (
        <div className="pt-12 border-t border-[#E5E7EB] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
                Complementary Touchpoints
              </h2>
              <h3 className="text-xl sm:text-2xl font-bold text-[#15171B] tracking-tight">
                Recommended to pair with this product
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((relProduct) => (
              <ProductCard key={relProduct.id} product={relProduct} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
