import React from "react";
import Image from "next/image";
import Link from "next/link";
import { storeConfig } from "@/config/store.config";
import { ShieldCheck, Layers, Radio, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Our Workshop & Philosophy",
  description: "Specialist supplier of practical NFC, QR-code, and acrylic interaction displays for UK businesses.",
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Who We Are &amp; What We Do
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight leading-tight">
          A more connected way to do business.
        </h1>
        <p className="text-base sm:text-lg text-[#626A75] leading-relaxed">
          We make it easier for businesses to connect everyday customer interactions with their online presence. From review displays and social-media touchpoints to digital-menu and Wi-Fi products, our range is designed to make useful online destinations easier to access in person.
        </p>
      </div>

      {/* Editorial Founder Section (Section 3.3 & Section 13) */}
      <div className="bg-[#F5F6F8] rounded-3xl border border-[#E5E7EB] p-8 sm:p-14 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Founder Portrait (Canonically supplied Mo founder shot.jpg) */}
          <div className="lg:col-span-5">
            <div className="relative aspect-4/5 w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-md bg-white">
              <Image
                src={storeConfig.founder.imagePath}
                alt="Founder & Product Specialist"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>

          {/* Editorial Commentary */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#245CF5] uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4" /> Specialist Hardware Standards
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#15171B] tracking-tight">
              Practical products, clear information, and no marketing fluff.
            </h2>

            <div className="space-y-4 text-sm text-[#626A75] leading-relaxed">
              <p>
                We focus on practical products, clear information and a straightforward buying experience. Whether you need a single display for a counter or a coordinated set of products for a wider rollout, we aim to make the process simple.
              </p>
              <p>
                Every display leaving our UK workshop is pre-programmed to your verified URL, fitted with commercial-grade contactless chips, and accompanied by transparent compatibility advice. We do not make false guarantees about algorithm ranks or review volumes—we supply precision physical tools that remove friction when customers want to interact.
              </p>
            </div>

            <div className="pt-2 text-xs text-[#626A75]">
              <span className="font-semibold text-[#15171B]">Founder &amp; Workshop Team</span> &bull; {storeConfig.tradingName}
            </div>
          </div>
        </div>
      </div>

      {/* Core Operational Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center">
            <Radio className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#15171B]">Verified Contactless Hardware</h3>
          <p className="text-xs text-[#626A75] leading-relaxed">
            We use genuine high-frequency 13.56 MHz NTAG213 and NTAG216 micro-transponders tested against standard Apple iOS and Android contactless readers.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#15171B]">Precision Acrylic Finishing</h3>
          <p className="text-xs text-[#626A75] leading-relaxed">
            Our multi-platform displays are crafted from cast frosted, high-gloss piano black, and optical crystal acrylic, supported by weighted metallic alloy bases.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#245CF5] flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-base text-[#15171B]">Direct UK Fulfilment</h3>
          <p className="text-xs text-[#626A75] leading-relaxed">
            All encoding, QR validation, and packaging take place in our UK workshop with tracked domestic postal delivery on every order.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="p-8 sm:p-10 bg-[#F5F6F8] rounded-3xl border border-[#E5E7EB] text-center space-y-4">
        <h3 className="text-xl sm:text-2xl font-bold text-[#15171B]">
          Explore the specialist product catalogue
        </h3>
        <p className="text-xs sm:text-sm text-[#626A75] max-w-lg mx-auto">
          From freestanding review L-stands to multi-tier salon plaques, discover interaction displays tailored for your space.
        </p>
        <div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm"
          >
            Shop All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
