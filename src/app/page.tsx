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
  Smartphone,
  Sparkles,
  Building2,
  Coffee,
  Scissors,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

export default function HomePage() {
  const featured = getFeaturedProducts().slice(0, 8);

  const useCases = [
    {
      title: "Independent Shops & Retailers",
      subtitle: "Checkout & Counter",
      description: "Place review and social touchpoints right at the point of payment. Clean presentation, transparent pricing, and simple setup.",
      icon: Building2,
      linkText: "Shop Review Displays",
      href: "/collections/review-products",
      image: "/assets/products/google-review-qr-stand.png",
    },
    {
      title: "Restaurants, Cafés & Pubs",
      subtitle: "Tables & Ordering Points",
      description: "Provide frictionless digital menu browsing, guest Wi-Fi access, and feedback collection without physical menu reprints.",
      icon: Coffee,
      linkText: "Explore Hospitality Products",
      href: "/collections/menu-and-wifi",
      image: "/assets/products/wifi-nfc-stand-yellow-base.png",
    },
    {
      title: "Salons, Barbers & Aesthetics",
      subtitle: "Styling Stations & Reception",
      description: "Drive Instagram follows, portfolio views, and Google reviews with premium frosted and rose-gold acrylic displays.",
      icon: Scissors,
      linkText: "View Acrylic Displays",
      href: "/collections/acrylic-displays",
      image: "/assets/products/frosted-acrylic-dual-social-display-gold.png",
    },
    {
      title: "Field Trades & Service Providers",
      subtitle: "On-the-Go Client Interactions",
      description: "Equip mobile staff and technicians with compact keyrings and tags to capture 5-star reviews on site immediately upon job completion.",
      icon: Briefcase,
      linkText: "Browse Keyrings & Tags",
      href: "/collections/keyrings-and-tags",
      image: "/assets/products/google-review-nfc-keyring.png",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 5.3 Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F6F8] to-white border-b border-[#E5E7EB] pt-12 sm:pt-16 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Copy Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-[11px] font-bold text-[#245CF5] tracking-wide uppercase">
                <Radio className="w-3.5 h-3.5" /> SMART NFC &amp; QR PRODUCTS FOR BUSINESSES
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#15171B] tracking-tight leading-[1.1]">
                Make every customer interaction count.
              </h1>

              <p className="text-base sm:text-lg text-[#626A75] leading-relaxed max-w-2xl">
                Give customers a simple way to leave a review, find your menu, connect to Wi-Fi or follow your business. Explore practical NFC and QR products designed for shops, hospitality and service businesses.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white text-sm font-semibold rounded-lg shadow-sm transition-all"
                >
                  Shop All Products <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/custom-products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-gray-50 text-[#15171B] border border-[#E5E7EB] text-sm font-semibold rounded-lg transition-colors"
                >
                  Explore Custom Products
                </Link>
              </div>

              {/* Verified Reassurance Mini Strip */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#626A75] border-t border-[#E5E7EB]/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653]" />
                  <span>Free URL Pre-Programming</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653]" />
                  <span>No Apps or Subscriptions Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#218653]" />
                  <span>Tracked UK Dispatch</span>
                </div>
              </div>
            </div>

            {/* Visual Hero Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-square w-full max-w-lg mx-auto bg-white rounded-3xl border border-[#E5E7EB] shadow-xl p-6 sm:p-8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/products/google-review-qr-stand.png"
                  alt="Black Google Review NFC and QR Countertop Stand"
                  fill
                  priority
                  className="object-contain p-6"
                />

                {/* Floating Showcase Badges */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E5E7EB] shadow-md flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-[#15171B]">Black Google Review Stand</p>
                    <p className="text-[11px] text-[#626A75]">Dual Contactless NFC &amp; QR Scan</p>
                  </div>
                  <span className="font-extrabold text-[#245CF5]">£24.99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4 Category Discovery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5] mb-1">
              Explore By Range
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
              Purpose-built interaction displays
            </h3>
          </div>
          <Link
            href="/shop"
            className="text-xs font-semibold text-[#245CF5] hover:text-[#1748D8] inline-flex items-center gap-1"
          >
            View all 20 products <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              href={`/collections/${col.slug}`}
              className="group flex flex-col bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] overflow-hidden hover:border-[#245CF5] hover:shadow-md transition-all duration-200"
            >
              <div className="relative aspect-4/3 w-full bg-white p-4 flex items-center justify-center overflow-hidden border-b border-[#E5E7EB]">
                <Image
                  src={col.coverImage}
                  alt={col.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
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
                <div className="pt-4 flex items-center text-xs font-semibold text-[#245CF5] group-hover:translate-x-1 transition-transform">
                  Browse collection <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}

          {/* Custom & Bulk Orders Tile */}
          <Link
            href="/custom-products"
            className="group flex flex-col bg-gradient-to-br from-[#15171B] to-gray-900 text-white rounded-2xl border border-gray-800 overflow-hidden hover:shadow-lg transition-all duration-200 p-6 justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#245CF5] flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <h4 className="font-bold text-lg text-white">Custom &amp; Bulk Orders</h4>
              <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                Need your company logo, bespoke acrylic finishes, or multi-unit rollout across branches? We build to your exact specification.
              </p>
            </div>
            <div className="pt-6 flex items-center text-xs font-semibold text-blue-400 group-hover:translate-x-1 transition-transform">
              Explore made-to-order options <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </Link>
        </div>
      </section>

      {/* 5.5 Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5] mb-1">
              Selected Displays
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
              Featured products
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

      {/* 5.6 How It Works */}
      <section className="bg-[#F5F6F8] py-16 sm:py-20 border-y border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
              Frictionless Interaction
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
              How it works for your customers
            </h3>
            <p className="text-sm text-[#626A75]">
              No confusing manual searches, spelling mistakes, or complex apps. Three simple steps from counter to digital action.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-bold text-sm">
                1
              </div>
              <h4 className="font-bold text-[#15171B] text-base">You choose the destination</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                When ordering, provide your Google review link, social profile handle, digital menu URL, or Wi-Fi configuration. We pre-encode the hardware before dispatch.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-bold text-sm">
                2
              </div>
              <h4 className="font-bold text-[#15171B] text-base">Customers tap or scan</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                The customer holds any compatible smartphone against the display. On items with a printed QR code, they can also point their phone camera to scan.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#E5E7EB] shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center font-bold text-sm">
                3
              </div>
              <h4 className="font-bold text-[#15171B] text-base">Phone opens direct link</h4>
              <p className="text-xs text-[#626A75] leading-relaxed">
                The smartphone instantly opens the official destination in their default browser or app. No manual searching, typing, or friction required.
              </p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-white/60 border border-[#E5E7EB] rounded-xl text-center text-xs text-[#626A75] max-w-xl mx-auto">
            <span className="font-semibold text-[#15171B]">Technical Note:</span> Contactless NFC tap compatibility varies by device model and operating system settings. The printed QR code serves as an instant alternative where included.
          </div>
        </div>
      </section>

      {/* 5.7 Use-Case Panels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
            Business Applications
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
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
                className="bg-white rounded-2xl border border-[#E5E7EB] p-6 flex flex-col sm:flex-row gap-6 items-center hover:border-gray-300 transition-colors"
              >
                <div className="w-24 h-24 relative bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] shrink-0 p-2 overflow-hidden">
                  <Image src={uc.image} alt={uc.title} fill className="object-contain p-1" />
                </div>
                <div className="flex-1 space-y-2 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#245CF5] uppercase tracking-wider">
                    <Icon className="w-3.5 h-3.5" /> {uc.subtitle}
                  </div>
                  <h4 className="font-bold text-[#15171B] text-base">{uc.title}</h4>
                  <p className="text-xs text-[#626A75] leading-relaxed">{uc.description}</p>
                  <div className="pt-1">
                    <Link
                      href={uc.href}
                      className="text-xs font-semibold text-[#245CF5] hover:text-[#1748D8] inline-flex items-center gap-1"
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

      {/* 5.8 Custom Branding & 5.9 Bulk Orders Split Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Custom Branding */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F5F6F8] border border-[#E5E7EB] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#245CF5] uppercase tracking-wider">
                Tailored Aesthetics
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15171B] tracking-tight">
                Make it yours.
              </h3>
              <p className="text-sm text-[#626A75] leading-relaxed">
                Bring your logo, colours and online destinations together in a display that feels part of your business. Choose from frosted acrylic, brushed gold, rose gold mirror, or piano black arch silhouettes.
              </p>
            </div>
            <div>
              <Link
                href="/custom-products"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#15171B] hover:bg-black text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors"
              >
                Explore custom products <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Bulk Orders */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-white border border-blue-200 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold text-[#245CF5] uppercase tracking-wider">
                Multi-Site Operations
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#15171B] tracking-tight">
                Ordering for more than one location?
              </h3>
              <p className="text-sm text-[#626A75] leading-relaxed">
                Tell us what you need, how many locations you&apos;re supplying and which destinations your products should link to. We&apos;ll help you coordinate multi-unit encoding, bulk volume pricing, and reliable deployment.
              </p>
            </div>
            <div>
              <Link
                href="/bulk-orders"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-colors"
              >
                Discuss a bulk order <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5.10 Founder Section (Section 3.3 & Section 13) */}
      <section className="bg-white border-y border-[#E5E7EB] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Founder Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 w-full max-w-md mx-auto rounded-3xl overflow-hidden border border-[#E5E7EB] shadow-lg bg-[#F5F6F8]">
                <Image
                  src={storeConfig.founder.imagePath}
                  alt="Founder portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#245CF5]">
                <ShieldCheck className="w-4 h-4" /> Our Workshop Philosophy
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#15171B] tracking-tight leading-tight">
                A more connected way to do business.
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#626A75] leading-relaxed">
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
                  className="text-xs sm:text-sm font-semibold text-[#245CF5] hover:underline inline-flex items-center gap-1.5"
                >
                  Read our full supplier story &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.11 FAQs & Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
            Quick Answers
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
            Frequently asked questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          <div className="p-5 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
            <h4 className="font-bold text-sm text-[#15171B]">What is an NFC product?</h4>
            <p className="text-xs text-[#626A75] mt-1.5 leading-relaxed">
              NFC is a short-range wireless technology. A compatible phone can tap an NFC-enabled product to open its configured destination link automatically.
            </p>
          </div>
          <div className="p-5 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
            <h4 className="font-bold text-sm text-[#15171B]">Do customers need to download an app?</h4>
            <p className="text-xs text-[#626A75] mt-1.5 leading-relaxed">
              For standard NFC link use, a dedicated app is generally not required. Device behavior and native settings handle standard web links automatically.
            </p>
          </div>
          <div className="p-5 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
            <h4 className="font-bold text-sm text-[#15171B]">What if a customer&apos;s phone has no NFC?</h4>
            <p className="text-xs text-[#626A75] mt-1.5 leading-relaxed">
              Where the product includes a printed QR code, the customer can simply open their default camera app and scan the code instead.
            </p>
          </div>
          <div className="p-5 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
            <h4 className="font-bold text-sm text-[#15171B]">Will this guarantee more reviews or followers?</h4>
            <p className="text-xs text-[#626A75] mt-1.5 leading-relaxed">
              No product can guarantee a customer will leave a review or follow a profile. It removes friction by placing the destination directly in front of them at the point of interaction.
            </p>
          </div>

          <div className="text-center pt-4">
            <Link
              href="/faq"
              className="text-xs font-semibold text-[#245CF5] hover:underline"
            >
              Browse all technical &amp; pre-purchase FAQs &rarr;
            </Link>
          </div>
        </div>

        {/* Final Conversion CTA Box */}
        <div className="mt-16 p-8 sm:p-12 bg-[#15171B] text-white rounded-3xl text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Ready to upgrade your counter touchpoints?
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Explore our full catalogue of pre-configured Google review stands, social media cards, and luxury acrylic plaques.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/shop"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all"
            >
              Browse All Products
            </Link>
            <Link
              href="/custom-products"
              className="w-full sm:w-auto px-6 py-3.5 bg-gray-800 hover:bg-gray-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-colors border border-gray-700"
            >
              Request Custom Branding
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
