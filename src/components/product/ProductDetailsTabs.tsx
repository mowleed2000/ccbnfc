"use client";

import React, { useState } from "react";
import { Product } from "@/types";
import { ChevronDown, Check, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import Link from "next/link";

interface ProductDetailsTabsProps {
  product: Product;
}

export default function ProductDetailsTabs({ product }: ProductDetailsTabsProps) {
  const [openSection, setOpenSection] = useState<string>("overview");

  const toggleSection = (id: string) => {
    setOpenSection((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="pt-12 border-t border-[#E5E7EB] space-y-4">
      {/* Overview Section */}
      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => toggleSection("overview")}
          className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[#15171B] hover:bg-[#F5F6F8]"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#245CF5]" /> Detailed Product Description
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#626A75] transition-transform ${
              openSection === "overview" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSection === "overview" && (
          <div className="px-6 pb-6 pt-2 text-sm text-[#626A75] leading-relaxed space-y-4 border-t border-[#E5E7EB]/60">
            <p>{product.description}</p>
            <div>
              <h4 className="font-bold text-[#15171B] text-xs uppercase tracking-wider mb-2">Confirmed Product Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#218653] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* How It Works & Compatibility */}
      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => toggleSection("how-it-works")}
          className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[#15171B] hover:bg-[#F5F6F8]"
        >
          <span className="flex items-center gap-2">
            <RadioIcon className="w-4 h-4 text-[#245CF5]" /> How It Works & Smartphone Compatibility
          </span>
          <ChevronDown
            className={`w-4 h-4 text-[#626A75] transition-transform ${
              openSection === "how-it-works" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSection === "how-it-works" && (
          <div className="px-6 pb-6 pt-2 text-sm text-[#626A75] leading-relaxed space-y-4 border-t border-[#E5E7EB]/60">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-[#F5F6F8] rounded-lg">
                <h5 className="font-bold text-[#15171B] mb-1">
                  {product.nfcEnabled ? "1. Contactless NFC Tap" : "1. Scannable QR Code"}
                </h5>
                <p>
                  {product.nfcEnabled
                    ? "Customers hold their smartphone near the target icon (within 1–4cm). An instant notification appears on their screen opening your destination directly."
                    : "Customers point their smartphone camera at the printed high-contrast QR code to open the link directly."}
                </p>
              </div>
              <div className="p-4 bg-[#F5F6F8] rounded-lg">
                <h5 className="font-bold text-[#15171B] mb-1">2. No Apps Required</h5>
                <p>
                  Neither NFC tap nor QR scanning requires downloading a proprietary app. Modern iOS and Android operating systems handle standard web destinations natively.
                </p>
              </div>
            </div>
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2.5 text-xs text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>
                <strong>Device Compatibility Note:</strong> NFC support requires an NFC-enabled smartphone (iPhone 7 and newer, and modern Android models). Where a QR code is included, it provides a universal scan alternative for all devices.
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Specifications & Materials */}
      <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
        <button
          onClick={() => toggleSection("specs")}
          className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[#15171B] hover:bg-[#F5F6F8]"
        >
          <span>Verified Specifications & Dimensions</span>
          <ChevronDown
            className={`w-4 h-4 text-[#626A75] transition-transform ${
              openSection === "specs" ? "rotate-180" : ""
            }`}
          />
        </button>
        {openSection === "specs" && (
          <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB]/60">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
              {product.specifications.map((spec, i) => (
                <div key={i} className="flex justify-between py-1.5 border-b border-[#E5E7EB]">
                  <dt className="text-[#626A75] font-medium">{spec.label}</dt>
                  <dd className="text-[#15171B] font-semibold text-right">{spec.value}</dd>
                </div>
              ))}
              <div className="flex justify-between py-1.5 border-b border-[#E5E7EB]">
                <dt className="text-[#626A75] font-medium">NFC Technology</dt>
                <dd className="text-[#15171B] font-semibold text-right">{product.nfcEnabled ? "Included (13.56 MHz)" : "Not Included"}</dd>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E7EB]">
                <dt className="text-[#626A75] font-medium">QR Code</dt>
                <dd className="text-[#15171B] font-semibold text-right">{product.qrIncluded ? "Printed Scannable Vector QR" : "NFC Tap Dedicated"}</dd>
              </div>
            </dl>
          </div>
        )}
      </div>

      {/* Product-Specific FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white">
          <button
            onClick={() => toggleSection("faqs")}
            className="w-full px-6 py-4 flex items-center justify-between text-left font-semibold text-sm sm:text-base text-[#15171B] hover:bg-[#F5F6F8]"
          >
            <span className="flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#245CF5]" /> Product Questions & Setup FAQs
            </span>
            <ChevronDown
              className={`w-4 h-4 text-[#626A75] transition-transform ${
                openSection === "faqs" ? "rotate-180" : ""
              }`}
            />
          </button>
          {openSection === "faqs" && (
            <div className="px-6 pb-6 pt-2 border-t border-[#E5E7EB]/60 space-y-4">
              {product.faqs.map((faq, i) => (
                <div key={i} className="space-y-1 text-xs">
                  <h5 className="font-bold text-[#15171B]">{faq.question}</h5>
                  <p className="text-[#626A75] leading-relaxed">{faq.answer}</p>
                </div>
              ))}
              <div className="pt-2 text-xs">
                <Link href="/faq" className="text-[#245CF5] hover:underline font-semibold">
                  View complete knowledge base & general FAQs &rarr;
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RadioIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
    >
      <circle cx="12" cy="12" r="2" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
    </svg>
  );
}
