"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { storeConfig } from "@/config/store.config";
import { ShoppingBag, Search, Menu, X, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import Image from "next/image";
import { formatGBP } from "@/utils/format";

export default function Header() {
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Custom Products", href: "/custom-products" },
    { name: "Bulk Orders", href: "/bulk-orders" },
    { name: "Guides", href: "/guides" },
    { name: "About", href: "/about" },
  ];

  const searchResults = searchQuery.trim()
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 5)
    : [];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E5E7EB]"
            : "bg-white border-b border-[#E5E7EB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo / Brand Name */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 text-[#15171B] hover:text-[#245CF5]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-[#245CF5] flex items-center justify-center text-white font-bold text-lg shadow-sm">
                T
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#15171B] leading-none group-hover:text-[#245CF5] transition-colors">
                  {storeConfig.tradingName}
                </span>
                <span className="text-[10px] uppercase font-semibold text-[#626A75] tracking-widest mt-1">
                  NFC & QR Specialists
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[#245CF5] ${
                    isActive ? "text-[#245CF5] font-semibold" : "text-[#15171B]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[#626A75] hover:text-[#15171B] hover:bg-[#F5F6F8] rounded-full transition-colors"
              aria-label="Search catalogue"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-[#15171B] hover:bg-[#F5F6F8] rounded-full transition-colors flex items-center gap-2"
              aria-label={`Shopping cart with ${itemCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-[#15171B]" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#245CF5] text-white text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Search Modal Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden border border-[#E5E7EB]">
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
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-full max-w-xs bg-white shadow-xl flex flex-col z-50">
            <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between">
              <span className="font-bold text-[#15171B] text-lg">{storeConfig.tradingName}</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-4">
              <nav className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-3 py-3 text-base font-medium text-[#15171B] hover:bg-[#F5F6F8] rounded-md"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <p className="text-xs font-semibold text-[#626A75] uppercase tracking-wider mb-2">
                  Browse Collections
                </p>
                <div className="space-y-1 text-sm">
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
                    Menu & Wi-Fi Tap Points
                  </Link>
                  <Link
                    href="/collections/keyrings-and-tags"
                    className="block px-3 py-2 text-[#15171B] hover:text-[#245CF5]"
                  >
                    Portable Keyrings & Tags
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#E5E7EB] bg-[#F5F6F8]">
              <Link
                href="/shop"
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#245CF5] text-white text-sm font-semibold rounded-md shadow-sm"
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
