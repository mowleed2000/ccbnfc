"use client";

import React from "react";
import Link from "next/link";
import { Flame, ShieldCheck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="w-full">
      {/* Top Urgent Promotion Marquee Strip */}
      <div className="bg-[#15171B] text-white text-[11px] font-bold py-1.5 px-4 overflow-hidden border-b border-gray-800 tracking-wider">
        <div className="flex items-center justify-center gap-6 animate-pulse text-center">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span className="text-white">SPECIALIST NFC SALE</span>
            <span className="text-amber-400">| EXTRA 15% OFF WITH CODE:</span>
            <span className="bg-amber-400 text-black px-1.5 py-0.2 rounded font-extrabold text-[10px]">SAVE15</span>
          </div>
          <span className="hidden md:inline text-gray-500">•</span>
          <div className="hidden md:flex items-center gap-1.5 text-gray-300">
            <span>Free UK Tracked Delivery on Orders Over £40</span>
          </div>
          <span className="hidden lg:inline text-gray-500">•</span>
          <div className="hidden lg:flex items-center gap-1 text-emerald-400">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Pre-Programmed &amp; Ready to Use Out of the Box</span>
          </div>
        </div>
      </div>

      {/* Secondary Utility Sub-Bar */}
      <div className="bg-[#F8FAFC] border-b border-[#E5E7EB] text-[11px] text-[#626A75] py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left utility links */}
          <div className="flex items-center gap-4">
            <Link href="/about" className="hover:text-[#15171B] transition-colors">
              About Workshop
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/guides" className="hover:text-[#15171B] transition-colors">
              Setup Guides
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="hover:text-[#15171B] transition-colors">
              Contact &amp; Support
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/bulk-orders" className="hover:text-[#15171B] transition-colors text-[#245CF5] font-semibold">
              Bulk &amp; Multi-Site Quotes
            </Link>
          </div>

          {/* Right badges & currency */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="text-[10px] uppercase font-bold text-gray-400">Workshop Direct:</span>
              <span className="font-semibold text-[#15171B]">London, UK</span>
            </div>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5 font-medium text-[#15171B]">
              <span className="text-sm">🇬🇧</span>
              <span>United Kingdom (GBP £)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
