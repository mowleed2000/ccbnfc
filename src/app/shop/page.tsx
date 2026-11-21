"use client";

import React, { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Search, SlidersHorizontal, RotateCcw, X } from "lucide-react";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const initialSearch = searchParams.get("search") || "";

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedFormat, setSelectedFormat] = useState("all");
  const [selectedTech, setSelectedTech] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Search query
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchTitle = p.title.toLowerCase().includes(q);
          const matchDesc = p.shortDescription.toLowerCase().includes(q);
          const matchCat = p.category.toLowerCase().includes(q);
          const matchTag = p.tags.some((t) => t.toLowerCase().includes(q));
          if (!matchTitle && !matchDesc && !matchCat && !matchTag) return false;
        }

        // Category
        if (selectedCategory !== "all") {
          if (selectedCategory === "keyrings-and-tags") {
            if (p.category !== "keyrings-and-tags" && p.format !== "keyring" && p.format !== "tag") {
              return false;
            }
          } else if (p.category !== selectedCategory) {
            return false;
          }
        }

        // Format
        if (selectedFormat !== "all" && p.format !== selectedFormat) {
          return false;
        }

        // Technology
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* Header & Search */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#15171B] tracking-tight">
              Specialist Product Catalogue
            </h1>
            <p className="text-sm text-[#626A75] mt-1">
              Explore all 20 canonical NFC, QR, social media, review, and acrylic display solutions.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#626A75] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by keyword..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Bar Controls */}
        <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="all">All Categories</option>
              <option value="review-products">Google Reviews</option>
              <option value="social-media">Social Media (IG / TikTok / WA)</option>
              <option value="acrylic-displays">Acrylic Displays</option>
              <option value="menu-and-wifi">Menu &amp; Wi-Fi</option>
              <option value="keyrings-and-tags">Keyrings &amp; Tags</option>
            </select>

            {/* Format Filter */}
            <select
              value={selectedFormat}
              onChange={(e) => setSelectedFormat(e.target.value)}
              className="px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="all">All Formats</option>
              <option value="stand">Countertop Stands</option>
              <option value="display">Acrylic Plaques</option>
              <option value="sticker">Adhesive Stickers</option>
              <option value="card">Cards</option>
              <option value="keyring">Keyrings</option>
              <option value="tag">Tags &amp; Discs</option>
            </select>

            {/* Tech Filter */}
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="all">All Technologies</option>
              <option value="nfc">NFC Contactless Only</option>
              <option value="qr">Scannable QR Only</option>
              <option value="both">Dual Tap &amp; Scan</option>
            </select>

            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1 px-3 py-2 text-[#C83C3C] hover:bg-red-50 rounded-lg font-medium transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset Filters
              </button>
            )}
          </div>

          {/* Sort By & Count */}
          <div className="flex items-center gap-3 text-xs w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-[#626A75] font-medium">
              Showing <strong>{filteredProducts.length}</strong> of 20 products
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-white border border-[#E5E7EB] rounded-lg font-medium text-[#15171B] focus:outline-none focus:border-[#245CF5]"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Sort: Newest</option>
            </select>
          </div>
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
        <div className="py-20 text-center bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-8 space-y-4">
          <p className="text-base font-semibold text-[#15171B]">
            No matching products found.
          </p>
          <p className="text-xs text-[#626A75] max-w-sm mx-auto">
            Try adjusting your search criteria or resetting the category and technology filters.
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-[#245CF5] text-white text-xs font-semibold rounded-lg hover:bg-[#1748D8]"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-16 text-center text-sm text-[#626A75]">Loading catalogue...</div>}>
      <ShopContent />
    </Suspense>
  );
}
