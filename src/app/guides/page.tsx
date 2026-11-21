import React from "react";
import { guides } from "@/data/guides";
import { BookOpen, Clock, ArrowRight, Radio, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Setup & Placement Guides",
  description: "Practical technical guidance on finding Google review links, device NFC compatibility, and counter display placement.",
};

export default function GuidesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Technical &amp; Practical Resources
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Setup, Compatibility &amp; Placement Guides
        </h1>
        <p className="text-base sm:text-lg text-[#626A75] leading-relaxed">
          Clear, concise instructions to help you extract the right Google links, prepare social handles, and position your physical displays for effortless customer interactions.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {guides.map((guide) => (
          <div
            key={guide.slug}
            className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-[#626A75]">
                <span className="inline-flex items-center gap-1.5 font-semibold text-[#245CF5]">
                  <BookOpen className="w-3.5 h-3.5" /> Practical Guide
                </span>
                <span className="flex items-center gap-1 text-gray-500">
                  <Clock className="w-3 h-3" /> {guide.readTime}
                </span>
              </div>

              <h2 className="text-xl font-bold text-[#15171B] leading-snug">
                {guide.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#626A75] leading-relaxed">
                {guide.summary}
              </p>

              <div className="pt-4 border-t border-[#E5E7EB] space-y-4">
                {guide.steps.map((step, idx) => (
                  <div key={idx} className="space-y-1">
                    <h4 className="text-xs font-bold text-[#15171B]">{step.heading}</h4>
                    <p className="text-xs text-[#626A75] leading-relaxed">{step.content}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#245CF5] hover:text-[#1748D8]"
              >
                Find products for this setup <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Support Reassurance */}
      <div className="p-8 bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-bold text-sm sm:text-base text-[#15171B]">
            Need help generating or verifying your review URL?
          </h3>
          <p className="text-xs text-[#626A75]">
            Our support technicians check every link submitted during ordering to ensure it opens correctly.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-5 py-2.5 bg-white border border-[#E5E7EB] hover:bg-gray-100 text-xs font-semibold rounded-lg text-[#15171B] shrink-0"
        >
          Ask a Technician
        </Link>
      </div>
    </div>
  );
}
