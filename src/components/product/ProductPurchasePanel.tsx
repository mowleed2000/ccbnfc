"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatGBP, isValidUrl } from "@/utils/format";
import { Plus, Minus, Check, AlertCircle, ShieldCheck, Truck, ArrowRight, Radio, QrCode } from "lucide-react";

interface ProductPurchasePanelProps {
  product: Product;
}

export default function ProductPurchasePanel({ product }: ProductPurchasePanelProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [personalisationValue, setPersonalisationValue] = useState("");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    if (product.personalisation?.required && !personalisationValue.trim()) {
      setErrorMsg(`Please enter your ${product.personalisation.label.toLowerCase()} before adding to basket.`);
      return;
    }

    if (
      product.personalisation?.type === "url" &&
      personalisationValue.trim() &&
      !isValidUrl(personalisationValue)
    ) {
      setErrorMsg("Please enter a valid web URL or destination link (e.g. https://g.page/...).");
      return;
    }

    setErrorMsg(null);
    addToCart(product, quantity, personalisationValue.trim());
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-[#626A75]">
        <Link href="/" className="hover:text-[#15171B]">Home</Link>
        <span>/</span>
        <Link href={`/collections/${product.category}`} className="hover:text-[#15171B] capitalize">
          {product.category.replace(/-/g, " ")}
        </Link>
        <span>/</span>
        <span className="text-[#15171B] font-medium truncate max-w-[200px]">{product.title}</span>
      </nav>

      {/* Title & Badges */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-2">
          {product.nfcEnabled && product.qrIncluded ? (
            <span className="inline-flex items-center gap-1 bg-[#15171B] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              <Radio className="w-3 h-3 text-blue-400" /> Contactless NFC & Scannable QR
            </span>
          ) : product.nfcEnabled ? (
            <span className="inline-flex items-center gap-1 bg-[#245CF5] text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              <Radio className="w-3 h-3" /> NFC Contactless Tap
            </span>
          ) : product.qrIncluded ? (
            <span className="inline-flex items-center gap-1 bg-gray-800 text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
              <QrCode className="w-3 h-3" /> Scannable QR Code
            </span>
          ) : null}

          <span className="text-[11px] font-medium text-[#218653] bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
            In Stock & Ready for Pre-Encoding
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#15171B] leading-tight">
          {product.title}
        </h1>
      </div>

      {/* Pricing */}
      <div className="flex items-baseline gap-3 pb-4 border-b border-[#E5E7EB]">
        <span className="text-3xl font-extrabold text-[#15171B]">
          {formatGBP(product.pricePence)}
        </span>
        {product.compareAtPricePence && product.compareAtPricePence > product.pricePence && (
          <span className="text-base text-[#626A75] line-through">
            {formatGBP(product.compareAtPricePence)}
          </span>
        )}
        <span className="text-xs text-[#626A75]">Inc. UK VAT & Pre-Programming</span>
      </div>

      {/* Short Summary */}
      <p className="text-sm text-[#626A75] leading-relaxed">
        {product.shortDescription}
      </p>

      {/* Personalisation / Destination URL Input */}
      {product.personalisation && (
        <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-2.5">
          <label className="block text-xs font-bold text-[#15171B] uppercase tracking-wider">
            {product.personalisation.label} {product.personalisation.required && <span className="text-[#C83C3C]">*</span>}
          </label>
          <input
            type="text"
            value={personalisationValue}
            onChange={(e) => {
              setPersonalisationValue(e.target.value);
              if (errorMsg) setErrorMsg(null);
            }}
            placeholder={product.personalisation.placeholder || "Enter destination link or handle"}
            className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
          />
          {product.personalisation.description && (
            <p className="text-[11px] text-[#626A75]">
              {product.personalisation.description}
            </p>
          )}
          {product.personalisation.sampleFormat && (
            <p className="text-[11px] text-gray-500 italic">
              Example format: {product.personalisation.sampleFormat}
            </p>
          )}
          {errorMsg && (
            <div className="flex items-center gap-1.5 text-xs font-semibold text-[#C83C3C] pt-1">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      )}

      {/* Quantity & Add to Cart Controls */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center border border-[#E5E7EB] rounded-lg bg-white h-12">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-3.5 h-full text-gray-600 hover:text-black hover:bg-gray-50 rounded-l-lg transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center text-sm font-bold text-[#15171B]">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-3.5 h-full text-gray-600 hover:text-black hover:bg-gray-50 rounded-r-lg transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex-1 h-12 px-6 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm ${
              isAdded
                ? "bg-[#218653] text-white"
                : "bg-[#245CF5] hover:bg-[#1748D8] text-white"
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-4 h-4" /> Added to Basket
              </>
            ) : (
              <>
                Add to Basket &bull; {formatGBP(product.pricePence * quantity)}
              </>
            )}
          </button>
        </div>

        {/* Secondary Enquiry Link */}
        <div className="text-center pt-1">
          <Link
            href="/custom-products"
            className="text-xs text-[#245CF5] hover:underline font-semibold inline-flex items-center gap-1"
          >
            Need a custom logo, multi-unit branding, or tailored specification? Request a quote <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Trust & Reassurance Mini-List */}
      <div className="pt-4 border-t border-[#E5E7EB] space-y-2.5 text-xs text-[#626A75]">
        <div className="flex items-center gap-2">
          <Truck className="w-4 h-4 text-[#245CF5] shrink-0" />
          <span>UK Tracked Delivery &bull; Dispatch within 1–2 business days</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#218653] shrink-0" />
          <span>Pre-tested contactless NFC chips & verified scannable vector QR codes</span>
        </div>
      </div>
    </div>
  );
}
