"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { storeConfig } from "@/config/store.config";
import {
  ShoppingBag,
  Search,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Mail,
  HelpCircle,
  Sparkles,
  Flame,
  Star,
  CheckCircle2,
} from "lucide-react";
import { products } from "@/data/products";
import Image from "next/image";
import { formatGBP } from "@/utils/format";

export default function Header() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setShopDropdownOpen(false);
  }, [pathname]);

  const searchResults = searchQuery.trim()
    ? products
        .filter(
          (p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .slice(0, 5)
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E5E7EB]"
            : "bg-white border-b border-[#E5E7EB]"
        }`}
      >
        {/* Main Logo & Utility Icons Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 -ml-2 text-[#15171B] hover:text-[#245CF5]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-initial flex justify-center lg:justify-start">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-[#245CF5] flex items-center justify-center text-white font-extrabold text-lg shadow-sm group-hover:bg-[#1748D8] transition-colors">
                <span className="tracking-tighter">T</span>
                <span className="text-amber-300 text-xs font-black -ml-0.5">★</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#15171B] lowercase">
                  tappoint<span className="text-[#245CF5]">⭐</span>nfc
                </span>
              </div>
            </Link>
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/contact"
              className="hidden md:flex p-2 text-gray-500 hover:text-[#15171B] hover:bg-gray-100 rounded-full transition-colors"
              title="Customer Support"
            >
              <Mail className="w-5 h-5" />
            </Link>

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-[#15171B] hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Search catalogue"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/faq"
              className="hidden sm:flex p-2 text-gray-500 hover:text-[#15171B] hover:bg-gray-100 rounded-full transition-colors"
              title="Help & FAQs"
            >
              <HelpCircle className="w-5 h-5" />
            </Link>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#15171B] hover:bg-gray-100 rounded-full transition-colors flex items-center"
              aria-label={`Shopping basket with ${itemCount} items`}
            >
              <ShoppingBag className="w-6 h-6 text-[#15171B]" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#245CF5] text-white text-[11px] font-black rounded-full flex items-center justify-center shadow-md">
                {itemCount}
              </span>
            </button>
          </div>
        </div>

        {/* Primary Navigation Menu with Rich Badges */}
        <div className="hidden lg:block border-t border-[#E5E7EB] bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-center gap-7 py-2.5 text-xs font-bold text-[#15171B]">
              {/* Shop Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setShopDropdownOpen(true)}
                onMouseLeave={() => setShopDropdownOpen(false)}
              >
                <Link
                  href="/shop"
                  className={`flex items-center gap-1 py-1 hover:text-[#245CF5] transition-colors ${
                    pathname === "/shop" ? "text-[#245CF5]" : ""
                  }`}
                >
                  Shop All <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </Link>

                {shopDropdownOpen && (
                  <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#E5E7EB] p-3 space-y-1 z-50">
                    <Link
                      href="/collections/review-products"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F5F6F8] hover:text-[#245CF5]"
                    >
                      Google Review Displays
                    </Link>
                    <Link
                      href="/collections/social-media"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F5F6F8] hover:text-[#245CF5]"
                    >
                      Social Media Touchpoints (IG / TikTok / WA)
                    </Link>
                    <Link
                      href="/collections/acrylic-displays"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F5F6F8] hover:text-[#245CF5]"
                    >
                      Acrylic &amp; Multi-Platform Plaques
                    </Link>
                    <Link
                      href="/collections/menu-and-wifi"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F5F6F8] hover:text-[#245CF5]"
                    >
                      Digital Menu &amp; Guest Wi-Fi
                    </Link>
                    <Link
                      href="/collections/keyrings-and-tags"
                      className="block px-3 py-2 text-xs rounded-lg hover:bg-[#F5F6F8] hover:text-[#245CF5]"
                    >
                      Keyrings &amp; Mobile Service Tags
                    </Link>
                    <div className="border-t border-[#E5E7EB] pt-1">
                      <Link
                        href="/shop"
                        className="block px-3 py-2 text-xs font-bold text-[#245CF5] hover:bg-blue-50 rounded-lg"
                      >
                        Browse Full 20 Product Catalogue &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Direct Category Link */}
              <Link
                href="/collections/review-products"
                className="hover:text-[#245CF5] transition-colors"
              >
                Google Review
              </Link>

              {/* Custom Products with NEW badge */}
              <Link
                href="/custom-products"
                className="flex items-center gap-1.5 hover:text-[#245CF5] transition-colors group"
              >
                <span>Custom</span>
                <span className="bg-[#245CF5] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider group-hover:bg-[#1748D8]">
                  NEW!
                </span>
              </Link>

              {/* Multi-Link with NEW badge */}
              <Link
                href="/collections/acrylic-displays"
                className="flex items-center gap-1.5 hover:text-[#245CF5] transition-colors group"
              >
                <span>Multi-Link</span>
                <span className="bg-[#245CF5] text-white text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider group-hover:bg-[#1748D8]">
                  NEW!
                </span>
              </Link>

              {/* Bundle & Save with savings badge */}
              <Link
                href="/products/google-review-starter-bundle"
                className="flex items-center gap-1.5 hover:text-[#245CF5] transition-colors group text-[#218653]"
              >
                <span>Bundle &amp; Save</span>
                <span className="bg-emerald-100 text-[#218653] text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                  SAVE 25%
                </span>
              </Link>

              {/* Bulk Orders */}
              <Link
                href="/bulk-orders"
                className="hover:text-[#245CF5] transition-colors"
              >
                Bulk Orders
              </Link>

              {/* Guides */}
              <Link
                href="/guides"
                className="hover:text-[#245CF5] transition-colors"
              >
                Guides
              </Link>

              {/* Help / FAQ */}
              <Link
                href="/faq"
                className="hover:text-[#245CF5] transition-colors"
              >
                Help &amp; FAQ
              </Link>
            </nav>
          </div>
        </div>

        {/* Black Social Proof & Trust Ticker Strip (Identical to ReviewsCard benchmark) */}
        <div className="bg-[#15171B] text-white text-[11px] font-semibold py-2 px-4 overflow-hidden border-t border-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-center">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>UK&apos;s Specialist Selection of Cards, Stands &amp; Plaques</span>
            </span>
            <span className="text-gray-600 hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <span>🇬🇧 Made &amp; Pre-Programmed in the UK</span>
            </span>
            <span className="text-gray-600 hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              <span className="text-amber-400">★★★★★</span>
              <span>Rated 4.9 on Trustpilot</span>
            </span>
            <span className="text-gray-600 hidden lg:inline">•</span>
            <span className="hidden lg:inline text-gray-300">
              10,000+ Touchpoints Delivered Across the UK &amp; Beyond
            </span>
            <span className="text-gray-600 hidden lg:inline">•</span>
            <span className="hidden lg:inline text-emerald-400 font-bold">
              No Monthly Software Fees
            </span>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
            <div className="p-4 border-b border-[#E5E7EB] flex items-center gap-3">
              <Search className="w-5 h-5 text-[#626A75]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products by platform, format (stands, stickers, acrylic)..."
                className="w-full text-sm sm:text-base text-[#15171B] placeholder-[#626A75] focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4">
              {searchQuery.trim() === "" ? (
                <div className="text-xs text-[#626A75] space-y-2">
                  <p className="font-semibold text-[#15171B]">Suggested searches:</p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {["Google Review Stand", "Instagram Cards", "Wi-Fi Stand", "Menu Sticker", "Acrylic Plaque", "Keyring"].map(
                      (term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="px-2.5 py-1 bg-[#F5F6F8] hover:bg-gray-200 rounded-md text-xs text-[#15171B]"
                        >
                          {term}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-3">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.slug}`}
                      className="flex items-center gap-3 p-2 hover:bg-[#F5F6F8] rounded-lg transition-colors group"
                    >
                      <div className="w-12 h-12 relative bg-gray-50 rounded border border-[#E5E7EB] overflow-hidden shrink-0">
                        <Image
                          src={product.primaryImage}
                          alt={product.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-[#15171B] group-hover:text-[#245CF5] truncate">
                          {product.title}
                        </h4>
                        <p className="text-xs text-[#626A75] truncate">
                          {product.shortDescription}
                        </p>
                      </div>
                      <div className="text-sm font-semibold text-[#15171B]">
                        {formatGBP(product.pricePence)}
                      </div>
                    </Link>
                  ))}
                  <div className="pt-2 text-center">
                    <Link
                      href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                      className="text-xs font-semibold text-[#245CF5] hover:underline"
                    >
                      View all results for &quot;{searchQuery}&quot;
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="py-8 text-center text-sm text-[#626A75]">
                  No products found matching &quot;{searchQuery}&quot;. Try another search term.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-2xl flex flex-col z-50">
            <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <span className="font-extrabold text-[#15171B] text-lg lowercase">
                tappoint<span className="text-[#245CF5]">⭐</span>nfc
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              <nav className="space-y-1">
                <Link
                  href="/shop"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  Shop All Products
                </Link>
                <Link
                  href="/collections/review-products"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  Google Review Displays
                </Link>
                <Link
                  href="/custom-products"
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  <span>Custom Branding</span>
                  <span className="bg-[#245CF5] text-white text-[9px] font-black px-1.5 py-0.5 rounded">NEW</span>
                </Link>
                <Link
                  href="/collections/acrylic-displays"
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  <span>Multi-Link Acrylic Displays</span>
                  <span className="bg-[#245CF5] text-white text-[9px] font-black px-1.5 py-0.5 rounded">NEW</span>
                </Link>
                <Link
                  href="/products/google-review-starter-bundle"
                  className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#218653] hover:bg-[#F5F6F8] rounded-lg"
                >
                  <span>Bundle &amp; Save</span>
                  <span className="bg-emerald-100 text-[#218653] text-[9px] font-black px-1.5 py-0.5 rounded">SAVE 25%</span>
                </Link>
                <Link
                  href="/bulk-orders"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  Bulk Orders
                </Link>
                <Link
                  href="/guides"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  Setup Guides
                </Link>
                <Link
                  href="/about"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  About Our Workshop
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2.5 text-sm font-bold text-[#15171B] hover:bg-[#F5F6F8] rounded-lg"
                >
                  Contact Support
                </Link>
              </nav>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <p className="text-[11px] font-bold text-[#626A75] uppercase tracking-wider mb-2">
                  Browse by Collection
                </p>
                <div className="space-y-1 text-xs">
                  <Link
                    href="/collections/review-products"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Google Review Displays
                  </Link>
                  <Link
                    href="/collections/social-media"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Social Media Touchpoints
                  </Link>
                  <Link
                    href="/collections/acrylic-displays"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Acrylic Premium Displays
                  </Link>
                  <Link
                    href="/collections/menu-and-wifi"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Menu &amp; Wi-Fi Displays
                  </Link>
                  <Link
                    href="/collections/keyrings-and-tags"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Keyrings &amp; Mobile Service Tags
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#E5E7EB] bg-[#F5F6F8]">
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#245CF5] text-white text-xs font-bold rounded-lg shadow-sm"
              >
                Shop All 20 Products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
