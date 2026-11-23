import React from "react";
import Link from "next/link";
import Image from "next/image";
import { products, getFeaturedProducts } from "@/data/products";
import { collections } from "@/data/collections";
import ProductCard from "@/components/product/ProductCard";
import { storeConfig } from "@/config/store.config";
import {
  ArrowRight,
  Radio,
  QrCode,
  Sparkles,
  Building2,
  Coffee,
  Scissors,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Star,
  Zap,
  Truck,
  RotateCcw,
  Flame,
} from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);

  const useCases = [
    {
      title: "Independent Shops & Retailers",
      subtitle: "Checkout & Counter",
      description: "Place review and social touchpoints right beside your payment terminal. Instant contactless tap and scan.",
      icon: Building2,
      linkText: "Shop Review Displays",
      href: "/collections/review-products",
      image: "/assets/products/google-review-qr-stand.png",
    },
    {
      title: "Restaurants, Cafés & Gastropubs",
      subtitle: "Tables & Ordering Points",
      description: "Provide frictionless digital menu browsing, guest Wi-Fi access, and feedback collection without paper menu reprints.",
      icon: Coffee,
      linkText: "Explore Hospitality Displays",
      href: "/collections/menu-and-wifi",
      image: "/assets/products/wifi-nfc-stand-yellow-base.png",
    },
    {
      title: "Salons, Spas & Aesthetic Clinics",
      subtitle: "Styling Stations & Reception",
      description: "Drive Instagram follows, portfolio views, and Google reviews with luxury frosted, black arch and rose-gold acrylic displays.",
      icon: Scissors,
      linkText: "View Acrylic Displays",
      href: "/collections/acrylic-displays",
      image: "/assets/products/frosted-acrylic-dual-social-display-gold.png",
    },
    {
      title: "Field Trades & Mobile Services",
      subtitle: "On-the-Go Client Interactions",
      description: "Equip mobile technicians and drivers with compact keyrings to capture 5-star Google reviews on site immediately upon job completion.",
      icon: Briefcase,
      linkText: "Browse Keyrings & Tags",
      href: "/collections/keyrings-and-tags",
      image: "/assets/products/google-review-nfc-keyring.png",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Hero Section (Matching ReviewsCard sky-blue atmospheric benchmark) */}
      <section className="bg-gradient-to-b from-[#EFF6FF] via-[#F8FAFC] to-white border-b border-[#E5E7EB] pt-12 sm:pt-16 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trustpilot-Style Social Proof Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-blue-200 rounded-full text-xs shadow-xs">
                <div className="flex text-amber-400 text-xs">★★★★★</div>
                <span className="font-extrabold text-[#15171B]">4.9 / 5</span>
                <span className="text-[#626A75]">&bull; 1,200+ UK Businesses Upgraded</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#15171B] tracking-tight leading-[1.08]">
                Make every customer interaction count.
              </h1>

              <p className="text-base sm:text-lg text-[#626A75] leading-relaxed max-w-2xl font-normal">
                Stop leaving reviews and followers to chance. Put a direct contactless review prompt, social card or digital menu right where your customers dwell. One tap or camera scan takes them straight to your destination.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#245CF5] hover:bg-[#1748D8] text-white text-sm font-bold rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5"
                >
                  Shop All 20 Displays <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/custom-products"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-gray-50 text-[#15171B] border border-[#E5E7EB] text-sm font-bold rounded-xl shadow-xs transition-colors"
                >
                  <Sparkles className="w-4 h-4 text-[#245CF5]" /> Custom Logo Displays
                </Link>
              </div>

              {/* 3 Reassurance Badges */}
              <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-[#15171B] font-semibold border-t border-[#E5E7EB]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653] shrink-0" />
                  <span>Pre-Programmed URL</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653] shrink-0" />
                  <span>No Apps or Monthly Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653] shrink-0" />
                  <span>Tracked UK Dispatch</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-lg mx-auto bg-white rounded-3xl border border-[#E5E7EB] shadow-2xl p-6 sm:p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/products/google-review-qr-stand.png"
                  alt="Black Google Review NFC and QR Countertop Stand"
                  fill
                  priority
                  className="object-contain p-6"
                />

                {/* Floating Showcase Badges */}
                <div className="absolute top-4 left-4 bg-[#245CF5] text-white text-[11px] font-black px-3 py-1 rounded-lg shadow-md uppercase tracking-wider">
                  Save 25% Off Today
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5E7EB] shadow-lg flex items-center justify-between text-xs">
                  <div>
                    <div className="flex text-amber-400 text-[10px] mb-0.5">★★★★★</div>
                    <p className="font-bold text-[#15171B]">Black Google Review NFC Stand</p>
                    <p className="text-[11px] text-[#626A75]">Dual Tap &amp; Camera QR Scan</p>
                  </div>
                  <div className="text-right">
                    <span className="text-base font-black text-[#245CF5]">£24.99</span>
                    <span className="block text-[10px] text-gray-400 line-through">£34.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Pillar Commercial Reassurance Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#15171B] text-sm">Ready Out of the Box</h4>
              <p className="text-xs text-[#626A75] mt-1 leading-relaxed">
                We pre-encode your Google URL or social link before shipping. No setup or IT skills required.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#218653] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#15171B] text-sm">No Monthly Subscriptions</h4>
              <p className="text-xs text-[#626A75] mt-1 leading-relaxed">
                One-time purchase with lifetime access. Unlike software platforms charging £30/month, you own it outright.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <Radio className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#15171B] text-sm">Universal Phone Support</h4>
              <p className="text-xs text-[#626A75] mt-1 leading-relaxed">
                Works with all modern iPhones and Android smartphones via contactless NFC tap or camera QR scan.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-[#15171B] text-sm">Fast Tracked UK Dispatch</h4>
              <p className="text-xs text-[#626A75] mt-1 leading-relaxed">
                Dispatched directly from our UK workshop via tracked Royal Mail with delivery in 2–4 working days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Discovery Tiles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5] mb-1">
              Browse By Specialist Category
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-[#15171B] tracking-tight">
              Purpose-built interaction displays
            </h3>
          </div>
          <Link
            href="/shop"
            className="text-xs font-bold text-[#245CF5] hover:text-[#1748D8] inline-flex items-center gap-1"
          >
            View all 20 products <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/collections/${col.slug}`}
              className="group flex flex-col bg-[#F8FAFC] rounded-2xl border border-[#E5E7EB] overflow-hidden hover:border-[#245CF5] hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-4/3 w-full bg-white p-4 flex items-center justify-center overflow-hidden border-b border-[#E5E7EB]">
                <Image
                  src={col.coverImage}
                  alt={col.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-[#245CF5] text-white text-[9px] font-black px-2 py-0.5 rounded shadow-xs uppercase">
                  Explore
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[#15171B] text-base group-hover:text-[#245CF5] transition-colors">
                    {col.shortTitle}
                  </h4>
                  <p className="text-xs text-[#626A75] mt-1.5 leading-relaxed line-clamp-2">
                    {col.introCopy}
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-[#245CF5] group-hover:translate-x-1 transition-transform">
                  Browse collection <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}

          {/* Custom & Bulk Tile */}
          <Link
            href="/custom-products"
            className="group flex flex-col bg-gradient-to-br from-[#15171B] via-gray-900 to-[#245CF5] text-white rounded-2xl border border-gray-800 overflow-hidden hover:shadow-xl transition-all duration-300 p-6 justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                <Sparkles className="w-5 h-5 text-amber-300" />
              </div>
              <h4 className="font-black text-xl text-white">Custom Logo &amp; Bulk Orders</h4>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Add your business logo, custom metallic foils, and multi-location branch encoding. Tailored for salons, franchises, and regional operators.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-bold text-amber-300 group-hover:translate-x-1 transition-transform">
              Request bespoke quotation <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#245CF5] mb-1">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" /> Top Performing Touchpoints
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-[#15171B] tracking-tight">
              Featured Best Sellers
            </h3>
          </div>
          <p className="text-xs text-[#626A75] max-w-md sm:text-right">
            Pre-programmed with your business links. Sturdy acrylic, high-frequency contactless chips, and vector scannable codes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Bundle & Save Spotlight (Complete Multi-Touchpoint Suite) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900 via-[#15171B] to-black rounded-3xl p-8 sm:p-12 text-white border border-gray-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="bg-emerald-500 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                Exclusive Bundle &bull; Save £15.00
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
                Google Review Multi-Touchpoint Suite
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-xl">
                Equip your entire premises with our coordinated 6-piece suite: 1 Countertop Stand, 1 Countertop Plate, 2 Portable Staff Keyrings, and 2 Table Stickers. All pre-encoded to your single Google review URL.
              </p>
              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-3xl font-black text-white">£49.99</span>
                <span className="text-lg text-gray-400 line-through">£64.99</span>
                <span className="text-xs text-emerald-400 font-bold">Includes Free UK Tracked Postage</span>
              </div>
              <div className="pt-2">
                <Link
                  href="/products/google-review-starter-bundle"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all"
                >
                  Configure Complete Suite <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 w-full bg-white/5 rounded-2xl border border-white/10 p-4 overflow-hidden">
                <Image
                  src="/assets/products/google-review-starter-bundle.webp"
                  alt="Google Review Multi-Touchpoint Suite"
                  fill
                  className="object-contain p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
              Frictionless Customer Engagement
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-[#15171B] tracking-tight">
              How it works for your customers
            </h3>
            <p className="text-sm text-[#626A75]">
              No confusing manual searches, spelling errors, or complex apps. Three simple steps from counter to digital action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-black text-base">
                1
              </div>
              <h4 className="font-bold text-[#15171B] text-base">You choose the destination</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                When ordering, provide your Google review link, social profile handle, digital menu URL, or Wi-Fi configuration. We pre-encode the hardware before dispatch.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-black text-base">
                2
              </div>
              <h4 className="font-bold text-[#15171B] text-base">Customers tap or scan</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                The customer holds any compatible smartphone against the display. On items with a printed QR code, they can also point their phone camera to scan.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-black text-base">
                3
              </div>
              <h4 className="font-bold text-[#15171B] text-base">Phone opens direct link</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                The smartphone instantly opens the official destination in their default browser or app. No manual searching, typing, or friction required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
            Business Applications
          </h2>
          <h3 className="text-2xl sm:text-3xl font-black text-[#15171B] tracking-tight">
            Designed for how businesses actually operate
          </h3>
          <p className="text-sm text-[#626A75]">
            Practical placement scenarios tailored to retail counters, dining tables, beauty reception desks, and field services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col sm:flex-row gap-6 items-center hover:border-[#245CF5]/50 hover:shadow-md transition-all"
              >
                <div className="w-24 h-24 relative bg-[#F8FAFC] rounded-xl border border-[#E5E7EB] shrink-0 p-2 overflow-hidden">
                  <Image src={uc.image} alt={uc.title} fill className="object-contain p-1" />
                </div>
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#245CF5] uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" /> {uc.subtitle}
                  </div>
                  <h4 className="font-bold text-[#15171B] text-base">{uc.title}</h4>
                  <p className="text-xs text-[#626A75] leading-relaxed">{uc.description}</p>
                  <div className="pt-1">
                    <Link
                      href={uc.href}
                      className="text-xs font-bold text-[#245CF5] hover:text-[#1748D8] inline-flex items-center gap-1"
                    >
                      {uc.linkText} <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Founder Editorial Section */}
      <section className="bg-white border-y border-[#E5E7EB] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-xl bg-[#F8FAFC]">
                <Image
                  src={storeConfig.founder.imagePath}
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#245CF5]">
                <ShieldCheck className="w-4 h-4" /> Specialist Hardware Standards
              </div>

              <h3 className="text-2xl sm:text-4xl font-black text-[#15171B] tracking-tight leading-tight">
                A more connected way to do business.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#626A75] leading-relaxed font-normal">
                <p>
                  We make it easier for businesses to connect everyday customer interactions with their online presence. From review displays and social-media touchpoints to digital-menu and Wi-Fi products, our range is designed to make useful online destinations easier to access in person.
                </p>
                <p>
                  We focus on practical products, clear information and a straightforward buying experience. Whether you need a single display for a counter or a coordinated set of products for a wider rollout, we aim to make the process simple.
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB]">
                <Link
                  href="/about"
                  className="text-xs sm:text-sm font-bold text-[#245CF5] hover:underline inline-flex items-center gap-1.5"
                >
                  Read our full supplier story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-14 bg-gradient-to-r from-[#15171B] to-gray-900 text-white rounded-3xl text-center space-y-6 border border-gray-800 shadow-xl">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
              Upgrade Your In-Store Experience
            </span>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tight">
              Ready to turn customer dwell time into 5-star reviews?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300">
              Order today and receive pre-programmed NFC &amp; QR displays delivered directly from our UK workshop.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-8 py-4 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all hover:scale-105"
            >
              Shop All Products
            </Link>
            <Link
              href="/custom-products"
              className="w-full sm:w-auto px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors border border-gray-700"
            >
              Request Custom Branding
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
