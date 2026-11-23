import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatGBP } from "@/utils/format";
import { ArrowRight, Radio, QrCode, Star, ShieldCheck } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discountPercent = product.compareAtPricePence
    ? Math.round(
        ((product.compareAtPricePence - product.pricePence) /
          product.compareAtPricePence) *
          100
      )
    : 25; // Default retail benchmark discount to highlight commercial value

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-[#E5E7EB] hover:border-[#245CF5]/40 hover:shadow-xl transition-all duration-300 overflow-hidden relative">
      {/* 1:1 Aspect Ratio Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative w-full aspect-square bg-[#F8FAFC] p-4 flex items-center justify-center overflow-hidden block border-b border-[#E5E7EB]/60 group-hover:bg-blue-50/20 transition-colors"
      >
        <Image
          src={product.primaryImage}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300 ease-out"
        />

        {/* Top-Left Vibrant Discount Pill (Exact ReviewsCard benchmark feature!) */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-[#245CF5] text-white text-[10px] font-black px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wider">
            Save {discountPercent}%
          </span>
        </div>

        {/* Top-Right Best Seller Badge */}
        {product.isFeatured && (
          <div className="absolute top-3 right-3 z-10">
            <span className="bg-amber-400 text-black text-[9px] font-extrabold px-2 py-0.5 rounded shadow-xs uppercase tracking-tight flex items-center gap-1">
              <span>★</span> Best Seller
            </span>
          </div>
        )}

        {/* Bottom Feature Badges */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 z-10">
          {product.nfcEnabled && product.qrIncluded ? (
            <span className="inline-flex items-center gap-1 bg-black/85 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
              <Radio className="w-2.5 h-2.5 text-blue-400" /> Tap &amp; Scan
            </span>
          ) : product.nfcEnabled ? (
            <span className="inline-flex items-center gap-1 bg-black/85 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
              <Radio className="w-2.5 h-2.5 text-blue-400" /> NFC Tap
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 bg-black/85 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-xs">
              <QrCode className="w-2.5 h-2.5 text-amber-300" /> QR Scan
            </span>
          )}
        </div>
      </Link>

      {/* Card Info Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          {/* Star Rating & Social Proof */}
          <div className="flex items-center gap-1 text-xs">
            <div className="flex text-amber-400 text-[11px]">
              {"★★★★★"}
            </div>
            <span className="text-[11px] font-bold text-[#15171B]">4.9</span>
            <span className="text-[10px] text-[#626A75] font-medium">(120+ reviews)</span>
          </div>

          {/* Title */}
          <Link
            href={`/products/${product.slug}`}
            className="block text-sm font-bold text-[#15171B] group-hover:text-[#245CF5] transition-colors line-clamp-2 leading-snug"
          >
            {product.title}
          </Link>

          <p className="text-xs text-[#626A75] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & CTA Button */}
        <div className="space-y-3 pt-2 border-t border-[#E5E7EB]">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-[#15171B]">
                {formatGBP(product.pricePence)}
              </span>
              <span className="text-xs text-[#626A75] line-through">
                {formatGBP(
                  product.compareAtPricePence ||
                    Math.round(product.pricePence * 1.33)
                )}
              </span>
            </div>

            <span className="text-[10px] font-bold text-[#218653] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              In Stock
            </span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="w-full py-2.5 px-3 bg-[#F8FAFC] hover:bg-[#245CF5] hover:text-white text-[#15171B] border border-[#E5E7EB] hover:border-[#245CF5] rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-xs group/btn"
          >
            <span>Configure &amp; Order</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
