"use client";

import React, { useState } from "react";
import { generalFaqs } from "@/data/faqs";
import { Search, ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState("all");
  const [openFaq, setOpenFaq] = useState<string>("faq-1");

  const filteredFaqs = generalFaqs.filter((faq) => {
    const matchCat = selectedCat === "all" || faq.category === selectedCat;
    const matchQuery =
      search.trim() === "" ||
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Knowledge Base
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#626A75] max-w-xl mx-auto">
          Clear, factual answers regarding NFC smartphone compatibility, destination URL programming, delivery, and customisation.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-[#626A75] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs by topic (e.g. apps, Google link, iPhone compatibility)..."
            className="w-full pl-10 pr-4 py-3 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#245CF5] text-[#15171B]"
          />
        </div>

        <div className="flex flex-wrap gap-2 text-xs">
          {[
            { id: "all", label: "All Questions" },
            { id: "general", label: "General NFC & QR" },
            { id: "compatibility", label: "Device Compatibility" },
            { id: "setup", label: "Link Setup & Logo" },
            { id: "orders", label: "Orders & Delivery" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-3 py-1.5 rounded-lg border font-medium transition-colors ${
                selectedCat === cat.id
                  ? "bg-[#245CF5] text-white border-[#245CF5]"
                  : "bg-white text-[#626A75] border-[#E5E7EB] hover:bg-gray-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordion FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openFaq === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? "" : faq.id)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left font-semibold text-sm text-[#15171B] hover:bg-[#F5F6F8] transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-[#245CF5] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#626A75] transition-transform shrink-0 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#626A75] leading-relaxed border-t border-[#E5E7EB]/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center text-xs text-[#626A75] bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]">
            No matching questions found for &quot;{search}&quot;. Try another query or contact support.
          </div>
        )}
      </div>

      {/* Still need help */}
      <div className="p-6 sm:p-8 bg-blue-50 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-sm text-[#15171B]">Have a specific query not listed here?</h3>
          <p className="text-xs text-[#626A75] mt-0.5">
            Our technical support team is ready to advise on specific device setups or bespoke display requests.
          </p>
        </div>
        <Link
          href="/contact"
          className="px-4 py-2.5 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs font-semibold rounded-lg shadow-sm shrink-0 flex items-center gap-1.5"
        >
          Contact Support <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
