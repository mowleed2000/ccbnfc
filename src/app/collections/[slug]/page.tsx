import React from "react";
import { notFound } from "next/navigation";
import { collections, getCollectionBySlug } from "@/data/collections";
import { getProductsByCategory } from "@/data/products";
import ProductGrid from "@/components/product/ProductGrid";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
    title: collection.title,
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-[#626A75]">
        <Link href="/" className="hover:text-[#15171B]">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <Link href="/shop" className="hover:text-[#15171B]">Collections</Link>
        <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
        <span className="text-[#15171B] font-semibold">{collection.shortTitle}</span>
      </nav>

      {/* Collection Header */}
      <div className="max-w-3xl space-y-3 pb-4 border-b border-[#E5E7EB]">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Curated Product Range
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#15171B] tracking-tight">
          {collection.title}
        </h1>
        <p className="text-sm sm:text-base text-[#626A75] leading-relaxed">
          {collection.introCopy}
        </p>
      </div>

      {/* Grid */}
      <div className="space-y-4">
        <div className="text-xs font-semibold text-[#626A75]">
          Showing {collectionProducts.length} verified products in this collection
        </div>
        <ProductGrid products={collectionProducts} />
      </div>

      {/* Bottom Cross-Collection Nav */}
      <div className="pt-12 border-t border-[#E5E7EB]">
        <h3 className="text-sm font-bold text-[#15171B] mb-3">Other Specialist Ranges:</h3>
        <div className="flex flex-wrap gap-2 text-xs">
          {collections
            .filter((c) => c.slug !== slug)
            .map((c) => (
              <Link
                key={c.id}
                href={`/collections/${c.slug}`}
                className="px-3.5 py-2 bg-[#F5F6F8] hover:bg-gray-200 text-[#15171B] font-medium rounded-lg border border-[#E5E7EB] transition-colors"
              >
                {c.shortTitle} &rarr;
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
