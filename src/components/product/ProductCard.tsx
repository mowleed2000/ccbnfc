import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatGBP } from "@/utils/format";
import { ArrowUpRight, Radio, QrCode } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-white rounded-xl border border-[#E5E7EB] hover:border-gray-300 hover:shadow-md transition-all duration-200 overflow-hidden">
      {/* 1:1 Aspect Ratio Image Container */}
      <Link
        href={`/products/${product.slug}`}
        className="relative w-full aspect-square bg-[#F5F6F8] p-4 flex items-center justify-center overflow-hidden block"
      >
        <Image
          src={product.primaryImage}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
        />

        {/* Feature Pill Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {product.nfcEnabled && product.qrIncluded ? (
            <span className="inline-flex items-center gap-1 bg-[#15171B]/90 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs">
              <Radio className="w-2.5 h-2.5" /> Tap & Scan
            </span>
          ) : product.nfcEnabled ? (
            <span className="inline-flex items-center gap-1 bg-[#245CF5] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <Radio className="w-2.5 h-2.5" /> NFC Tap
            </span>
          ) : product.qrIncluded ? (
            <span className="inline-flex items-center gap-1 bg-gray-800 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
              <QrCode className="w-2.5 h-2.5" /> QR Code
            </span>
          ) : null}

          {product.compareAtPricePence && product.compareAtPricePence > product.pricePence && (
            <span className="bg-[#218653] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
              Save {formatGBP(product.compareAtPricePence - product.pricePence)}
            </span>
          )}
        </div>
      </Link>

      {/* Card Info Section */}
      <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <div className="text-[11px] font-semibold tracking-wider uppercase text-[#626A75]">
            {product.category.replace(/-/g, " ")}
          </div>
          <Link
            href={`/products/${product.slug}`}
            className="block text-sm font-semibold text-[#15171B] group-hover:text-[#245CF5] transition-colors line-clamp-2 leading-snug"
          >
            {product.title}
          </Link>
          <p className="text-xs text-[#626A75] line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action */}
        <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-bold text-[#15171B]">
              {formatGBP(product.pricePence)}
            </span>
            {product.compareAtPricePence && (
              <span className="text-xs text-[#626A75] line-through">
                {formatGBP(product.compareAtPricePence)}
              </span>
            )}
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#245CF5] hover:text-[#1748D8] group/link py-1 px-2.5 rounded-md hover:bg-blue-50 transition-colors"
          >
            Configure
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
