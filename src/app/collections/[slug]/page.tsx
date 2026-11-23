import React from "react";
import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import type { Metadata } from "next";

interface CollectionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) return { title: "Collection Not Found" };

  return {
    title: `${collection.title} | TapPoint NFC & QR`,
    description: collection.introCopy,
  };
}

export default async function CollectionPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);

  if (!collection) {
    notFound();
  }

  const collectionProducts = getProductsByCategory(slug);

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Collection Banner (Matching ReviewsCard Sky Blue Atmospheric Benchmark) */}
      <div className="bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white border-b border-[#E5E7EB] pt-12 pb-14 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-[11px] font-bold text-[#245CF5] shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-[#245CF5]" /> Official Interaction Touchpoints
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#15171B] tracking-tight">
            {collection.shortTitle}
          </h1>

          <p className="text-sm sm:text-base text-[#626A75] leading-relaxed max-w-2xl mx-auto">
            {collection.description}
          </p>

          {/* 4 Mini Trust Badges under header */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-[#15171B] font-semibold">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#218653]" /> Pre-Programmed Before Dispatch
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#218653]" /> Instant Tap &amp; Camera Scan
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#218653]" /> Heavy-Duty Cast Acrylic
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#218653]" /> Tracked UK Fulfilment
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Breadcrumb & Filter Sort Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#E5E7EB]">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-xs text-[#626A75]">
            <Link href="/" className="hover:text-[#15171B]">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/shop" className="hover:text-[#15171B]">Shop</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#15171B] font-bold">{collection.shortTitle}</span>
          </nav>

          {/* Filter count & sort state */}
          <div className="flex items-center justify-between sm:justify-end gap-6 text-xs">
            <div className="flex items-center gap-2 text-[#15171B] font-semibold">
              <SlidersHorizontal className="w-4 h-4 text-gray-500" />
              <span>Filter and sort</span>
            </div>
            <div className="text-[#626A75]">
              Featured &bull; <strong className="text-[#15171B]">{collectionProducts.length} products</strong>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {collectionProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Cross-Collection Links */}
        <div className="pt-16 border-t border-[#E5E7EB]">
          <h3 className="text-sm font-bold text-[#15171B] mb-3">Explore Other Collections:</h3>
          <div className="flex flex-wrap gap-2 text-xs">
            {collections
              .filter((c) => c.slug !== slug)
              .map((c) => (
                <Link
                  key={c.id}
                  href={`/collections/${c.slug}`}
                  className="px-4 py-2 bg-[#F8FAFC] hover:bg-blue-50 hover:text-[#245CF5] hover:border-[#245CF5] text-[#15171B] font-semibold rounded-xl border border-[#E5E7EB] transition-colors"
                >
                  {c.shortTitle} &rarr;
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
