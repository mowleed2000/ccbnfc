"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Search, SlidersHorizontal, RotateCcw, X, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchDesc = p.shortDescription.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCat && !matchTag) return false;
        }

        if (selectedCategory !== "all") {
          if (selectedCategory === "keyrings-and-tags") {
            if (p.category !== "keyrings-and-tags" && p.format !== "keyring" && p.format !== "tag") {
              return false;
            }
          } else if (p.category !== selectedCategory) {
            return false;
          }
        }

        if (selectedFormat !== "all" && p.format !== selectedFormat) {
          return false;
        }

        if (selectedTech === "nfc" && !p.nfcEnabled) return false;
        if (selectedTech === "qr" && !p.qrIncluded) return false;
        if (selectedTech === "both" && (!p.nfcEnabled || !p.qrIncluded)) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.pricePence - b.pricePence;
        if (sortBy === "price-desc") return b.pricePence - a.pricePence;
        if (sortBy === "newest") return b.id.localeCompare(a.id);
        return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedFormat, selectedTech, sortBy]);

  const resetFilters = () => {
    setSelectedCategory("all");
    setSelectedFormat("all");
    setSelectedTech("all");
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedFormat !== "all" ||
    selectedTech !== "all" ||
    searchQuery.trim() !== "";

  return (
    <div className="space-y-8 pb-16">
      {/* Sky Blue Atmospheric Atmospheric Header */}
      <div className="bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white border-b border-[#E5E7EB] pt-12 pb-14 text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-blue-200 rounded-full text-[11px] font-bold text-[#245CF5] shadow-xs">
            <Zap className="w-3.5 h-3.5 fill-[#245CF5]" /> UK&apos;s Specialist Interaction Hardware
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-[#15171B] tracking-tight">
            NFC &amp; QR Product Catalogue
          </h1>

          <p className="text-sm sm:text-base text-[#626A75] leading-relaxed max-w-2xl mx-auto">
            Explore 20 verified contactless stands, adhesive plaques, keyrings, and luxury acrylic multi-link displays. Pre-programmed and ready to place on your counters.
          </p>

          {/* Quick Collection Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              { id: "all", label: "All Products (20)" },
              { id: "review-products", label: "Google Reviews" },
              { id: "social-media", label: "Social Media (IG/TikTok)" },
              { id: "acrylic-displays", label: "Luxury Acrylic" },
              { id: "menu-and-wifi", label: "Menu & Wi-Fi" },
              { id: "keyrings-and-tags", label: "Keyrings & Tags" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === tab.id
                    ? "bg-[#245CF5] text-white shadow-sm"
                    : "bg-white text-[#15171B] border border-[#E5E7EB] hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Search & Filter Toolbar */}
        <div className="p-4 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 text-xs">
            {/* Search input */}
            <div className="relative w-48 sm:w-60">
              <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-8 pr-3 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg text-xs focus:outline-none focus:border-[#245CF5] text-[#15171B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Format Filter */}
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-3 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg font-bold text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="all">All Formats</option>
              <option value="stand">Countertop Stands</option>
              <option value="display">Acrylic Plaques</option>
              <option value="sticker">Stickers</option>
              <option value="card">Cards</option>
              <option value="keyring">Keyrings</option>
              <option value="tag">Tags &amp; Discs</option>
            </select>

            {/* Tech Filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-3 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg font-bold text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="all">All Tech</option>
              <option value="nfc">NFC Tap Only</option>
              <option value="qr">QR Scan Only</option>
              <option value="both">Dual Tap &amp; Scan</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 px-3 py-2 text-[#C83C3C] hover:bg-red-50 rounded-lg font-bold transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            )}
          </div>

          {/* Sort By & Count */}
          <div className="flex items-center gap-4 text-xs w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-[#626A75] font-semibold">
              Showing <strong className="text-[#15171B]">{filteredProducts.length}</strong> products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-[#F8FAFC] border border-[#E5E7EB] rounded-lg font-bold text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Sort: Newest</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-[#F8FAFC] rounded-3xl border border-[#E5E7EB] p-8 space-y-4">
            <p className="text-base font-bold text-[#15171B]">No matching products found.</p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-[#245CF5] text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs text-[#626A75]">Loading catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}
