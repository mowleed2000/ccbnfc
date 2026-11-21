"use client";

import React, { useState } from "react";
import { Building2, Check, Send, Layers, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";
import Link from "next/link";

export default function BulkOrdersPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productTypes: "",
    totalUnits: "25–50 units",
    locationsCount: "2–5 locations",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.company.trim()) {
      setErrorMsg("Please fill in your name, company name, and email address.");
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-[#245CF5] uppercase tracking-wide">
          <Building2 className="w-3.5 h-3.5" /> Multi-Unit &amp; Franchise Deployments
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Coordinated interaction hardware across multiple locations.
        </h1>
        <p className="text-base sm:text-lg text-[#626A75] leading-relaxed">
          Whether you manage a regional franchise, multi-site dental group, hospitality chain, or marketing agency deploying client touchpoints, we provide coordinated NFC pre-encoding and custom batch production.
        </p>
      </div>

      {/* 5-Step Process */}
      <div className="bg-[#F5F6F8] rounded-3xl p-6 sm:p-10 border border-[#E5E7EB]">
        <h2 className="text-lg sm:text-xl font-bold text-[#15171B] mb-8 text-center sm:text-left">
          Our Multi-Site Bulk Fulfilment Workflow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#245CF5] bg-blue-50 px-2 py-1 rounded">Step 01</span>
            <h4 className="font-bold text-sm text-[#15171B]">Define Requirements</h4>
            <p className="text-xs text-[#626A75]">Select your product mix (stands, stickers, acrylic displays) and quantity.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#245CF5] bg-blue-50 px-2 py-1 rounded">Step 02</span>
            <h4 className="font-bold text-sm text-[#15171B]">Destination Mapping</h4>
            <p className="text-xs text-[#626A75]">Supply your spreadsheet of individual branch URLs, Place IDs, or Wi-Fi configurations.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#245CF5] bg-blue-50 px-2 py-1 rounded">Step 03</span>
            <h4 className="font-bold text-sm text-[#15171B]">Itemised Quotation</h4>
            <p className="text-xs text-[#626A75]">We issue a formal quote reflecting commercial volume rates and dispatch schedules.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#245CF5] bg-blue-50 px-2 py-1 rounded">Step 04</span>
            <h4 className="font-bold text-sm text-[#15171B]">Batch Encoding</h4>
            <p className="text-xs text-[#626A75]">Hardware is individually programmed, QR-verified, and labelled by site name.</p>
          </div>
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#245CF5] bg-blue-50 px-2 py-1 rounded">Step 05</span>
            <h4 className="font-bold text-sm text-[#15171B]">Tracked Rollout</h4>
            <p className="text-xs text-[#626A75]">Dispatched to your central hub or split-shipped directly to each branch location.</p>
          </div>
        </div>
      </div>

      {/* Bulk Consultation Form */}
      <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-12 shadow-sm max-w-4xl mx-auto">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-[#218653] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#15171B]">Bulk Consultation Request Logged</h3>
            <p className="text-sm text-[#626A75] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. A dedicated commercial account specialist will review your multi-location requirement for <strong>{formData.company}</strong> and contact you with volume pricing.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#15171B]">Request a Bulk Volume Consultation</h3>
              <p className="text-xs text-[#626A75] mt-1">
                Tell us about your organization and project scope. We do not invent arbitrary minimum order thresholds.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 text-[#C83C3C] text-xs font-semibold rounded-lg flex items-center gap-2 border border-red-200">
                <AlertCircle className="w-4 h-4" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Your Name <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. David Clarke"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Organisation / Company Name <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Apex Dental Group"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Work Email <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="d.clarke@apexdental.co.uk"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Telephone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="0800 123 4567"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Estimated Total Units Needed
                </label>
                <select
                  value={formData.totalUnits}
                  onChange={(e) => setFormData({ ...formData, totalUnits: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                >
                  <option>10–24 units</option>
                  <option>25–50 units</option>
                  <option>51–100 units</option>
                  <option>100+ units</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Number of Branch Locations
                </label>
                <select
                  value={formData.locationsCount}
                  onChange={(e) => setFormData({ ...formData, locationsCount: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                >
                  <option>Single location (large rollout)</option>
                  <option>2–5 locations</option>
                  <option>6–20 locations</option>
                  <option>20+ locations</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#15171B] mb-1">
                Project Scope &amp; Products of Interest
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Mention product models, individual URL programming needs, or deployment timeline..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center gap-2"
              >
                {isSubmitting ? "Submitting..." : "Submit Bulk Enquiry"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
