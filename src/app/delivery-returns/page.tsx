import React from "react";
import { storeConfig } from "@/config/store.config";
import { Truck, RotateCcw, ShieldCheck, AlertCircle } from "lucide-react";
import Link from "next/link";
import { formatGBP } from "@/utils/format";

export const metadata = {
  title: "Delivery & Returns Policy",
  description: "Verified fulfilment timeframes, tracked UK postage rates, and consumer returns terms.",
};

export default function DeliveryReturnsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Fulfilment &amp; Customer Care
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Delivery &amp; Returns Information
        </h1>
        <p className="text-sm sm:text-base text-[#626A75]">
          Clear and verified guidance on our UK workshop packaging, tracked dispatch options, and product return policies.
        </p>
      </div>

      {/* Owner Review Notice if not verified */}
      {!storeConfig.delivery.isVerified && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Pre-Launch Configuration Note:</strong>
            These delivery charges and fulfillment estimates represent baseline UK courier averages. The store owner can update exact rates and postal partners in <code className="bg-amber-100 px-1 py-0.5 rounded text-[11px]">store.config.ts</code> prior to commercial launch.
          </div>
        </div>
      )}

      {/* Delivery Rates & Timelines */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
          <Truck className="w-5 h-5 text-[#245CF5]" />
          <h2 className="text-xl font-bold text-[#15171B]">UK Delivery Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 bg-white rounded-xl border border-[#E5E7EB] space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm text-[#15171B]">Standard Tracked Delivery</h3>
              <span className="font-extrabold text-[#245CF5] text-base">
                {formatGBP(storeConfig.delivery.standardRatePence)}
              </span>
            </div>
            <p className="text-xs text-[#626A75] leading-relaxed">
              Delivered within {storeConfig.delivery.standardEstimate} via Royal Mail or courier. Includes full online door-to-door tracking.
            </p>
          </div>

          <div className="p-5 bg-white rounded-xl border border-[#E5E7EB] space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold text-sm text-[#15171B]">Express Tracked Dispatch</h3>
              <span className="font-extrabold text-[#245CF5] text-base">
                {formatGBP(storeConfig.delivery.expressRatePence)}
              </span>
            </div>
            <p className="text-xs text-[#626A75] leading-relaxed">
              Delivered within {storeConfig.delivery.expressEstimate} following our 24-hour pre-programming and quality check window.
            </p>
          </div>
        </div>

        <div className="p-4 bg-[#F5F6F8] rounded-xl text-xs text-[#626A75] space-y-1">
          <span className="font-bold text-[#15171B]">Dispatch Quality Gate:</span> Every item is individually programmed with your destination URL and scanned with a test reader before packing. Hardware orders are dispatched within 1–2 business days from link approval.
        </div>
      </div>

      {/* Returns Terms */}
      <div className="space-y-6 pt-6 border-t border-[#E5E7EB]">
        <div className="flex items-center gap-2 border-b border-[#E5E7EB] pb-3">
          <RotateCcw className="w-5 h-5 text-[#245CF5]" />
          <h2 className="text-xl font-bold text-[#15171B]">Returns &amp; Cancellation Terms</h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#626A75] leading-relaxed">
          <p>
            Under UK Consumer Contracts Regulations, you have the right to cancel your purchase within <strong>14 days of delivery</strong> for standard, uncustomised products.
          </p>

          <div className="p-4 bg-gray-50 border border-[#E5E7EB] rounded-xl space-y-2">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#15171B]">
              Custom &amp; Pre-Programmed Goods Exception
            </h4>
            <p className="text-xs">
              Under UK law, goods made to the consumer&apos;s specifications or clearly personalised (including custom logo plaques and items permanently printed or programmed to your specific business URL) are exempt from statutory cooling-off cancellation rights, unless they arrive damaged or defective.
            </p>
          </div>

          <h3 className="font-bold text-sm text-[#15171B] pt-2">Damaged or Defective Goods</h3>
          <p>
            If any item arrives damaged in transit or fails to scan upon arrival, please contact our support desk at{" "}
            <a href={`mailto:${storeConfig.contact.email}`} className="text-[#245CF5] underline">
              {storeConfig.contact.email}
            </a>{" "}
            within 48 hours of delivery with your order reference and a photograph. We will test a replacement and dispatch it immediately at no additional cost.
          </p>
        </div>
      </div>

      {/* Contact box */}
      <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h4 className="font-bold text-sm text-[#15171B]">Have a question about an existing order?</h4>
          <p className="text-xs text-[#626A75] mt-0.5">Please have your order confirmation reference ready.</p>
        </div>
        <Link
          href="/contact"
          className="px-4 py-2 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs font-semibold rounded-lg"
        >
          Contact Dispatch Team
        </Link>
      </div>
    </div>
  );
}
