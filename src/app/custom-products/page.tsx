"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, UploadCloud, Send, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";

export default function CustomProductsPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    displayStyle: "Frosted Acrylic with Brushed Gold Base",
    approxQuantity: "1-5 displays",
    locationsCount: "Single location",
    platforms: [] as string[],
    deadline: "",
    message: "",
  });

  const [logoFile, setLogoFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const togglePlatform = (platform: string) => {
    setFormData((prev) => ({
      ...prev,
      platforms: prev.platforms.includes(platform)
        ? prev.platforms.filter((p) => p !== platform)
        : [...prev.platforms, platform],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.businessName.trim()) {
      setFormError("Please fill in your name, business name, and email address.");
      return;
    }

    setFormError(null);
    setIsSubmitting(true);

    // Simulate secure lead handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Hero Header */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 rounded-full text-xs font-bold text-[#245CF5] uppercase tracking-wide">
          <Sparkles className="w-3.5 h-3.5" /> Bespoke Countertop Displays
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          A display that feels like your business.
        </h1>
        <p className="text-base sm:text-lg text-[#626A75] leading-relaxed">
          Tell us what you want customers to access and how you want the display to look. We&apos;ll review the requirements and confirm the available options.
        </p>
      </div>

      {/* Finishes Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-5 space-y-3">
          <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden border border-[#E5E7EB]">
            <Image
              src="/assets/products/frosted-acrylic-dual-social-display-gold.png"
              alt="Frosted Acrylic Dual Social Display"
              fill
              className="object-contain p-2"
            />
          </div>
          <h4 className="font-bold text-[#15171B] text-sm">Frosted Acrylic &amp; Gold Base</h4>
          <p className="text-xs text-[#626A75]">
            Subtle frosted finish with brushed gold metal foundation and 3D mirror emblems.
          </p>
        </div>

        <div className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-5 space-y-3">
          <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden border border-[#E5E7EB]">
            <Image
              src="/assets/products/rose-gold-triple-social-website-display.png"
              alt="Rose Gold Triple Display"
              fill
              className="object-contain p-2"
            />
          </div>
          <h4 className="font-bold text-[#15171B] text-sm">Rose Gold Multi-Tier</h4>
          <p className="text-xs text-[#626A75]">
            Crystal optical acrylic with reflective rose gold mirror framing and triple destination tiers.
          </p>
        </div>

        <div className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-5 space-y-3">
          <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden border border-[#E5E7EB]">
            <Image
              src="/assets/products/masterpiece-salon-black-gold-arch-plaque.png"
              alt="Black and Gold Arch Display"
              fill
              className="object-contain p-2"
            />
          </div>
          <h4 className="font-bold text-[#15171B] text-sm">Piano Black Arch &amp; Gold</h4>
          <p className="text-xs text-[#626A75]">
            Curved architectural arch silhouette with gold mirror icons and custom business name branding.
          </p>
        </div>

        <div className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-5 space-y-3">
          <div className="relative aspect-square w-full bg-white rounded-xl overflow-hidden border border-[#E5E7EB]">
            <Image
              src="/assets/products/frosted-acrylic-qr-sign-clear.png"
              alt="Minimal Clear Frosted Stand"
              fill
              className="object-contain p-2"
            />
          </div>
          <h4 className="font-bold text-[#15171B] text-sm">Minimalist Clear Stand</h4>
          <p className="text-xs text-[#626A75]">
            Uncluttered single destination QR plaque with clear solid block base.
          </p>
        </div>
      </div>

      {/* Custom Specification & Lead Enquiry Form */}
      <div className="bg-white rounded-3xl border border-[#E5E7EB] p-6 sm:p-12 shadow-sm max-w-4xl mx-auto">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-[#218653] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-[#15171B]">Enquiry Received</h3>
            <p className="text-sm text-[#626A75] max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Our workshop team has received your custom display requirements for <strong>{formData.businessName}</strong>. We will review your specification and respond with a formal proposal within 1 business day.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: "",
                  businessName: "",
                  email: "",
                  phone: "",
                  displayStyle: "Frosted Acrylic with Brushed Gold Base",
                  approxQuantity: "1-5 displays",
                  locationsCount: "Single location",
                  platforms: [],
                  deadline: "",
                  message: "",
                });
                setLogoFile(null);
              }}
              className="mt-4 px-6 py-2.5 bg-[#F5F6F8] hover:bg-gray-200 text-[#15171B] text-xs font-semibold rounded-lg"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-[#15171B]">
                Custom Branding Specification Form
              </h2>
              <p className="text-xs sm:text-sm text-[#626A75]">
                Please complete as much detail as you have available. Required fields are marked with an asterisk (*).
              </p>
            </div>

            {formError && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-xs text-[#C83C3C] font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{formError}</span>
              </div>
            )}

            {/* Contact Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Your Full Name <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Business / Trading Name <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder="e.g. Jenkins Aesthetics & Spa"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Email Address <span className="text-[#C83C3C]">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="s.jenkins@example.co.uk"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Contact Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="07000 000000"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>
            </div>

            {/* Display & Volume Specification */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#E5E7EB]">
              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Preferred Display Style
                </label>
                <select
                  value={formData.displayStyle}
                  onChange={(e) => setFormData({ ...formData, displayStyle: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
                >
                  <option>Frosted Acrylic with Brushed Gold Base</option>
                  <option>Rose Gold Multi-Tier Optical Acrylic</option>
                  <option>Piano Black Arch Silhouette</option>
                  <option>Minimal Frosted QR Block</option>
                  <option>Custom Dimension / Bespoke Finish</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Estimated Quantity
                </label>
                <select
                  value={formData.approxQuantity}
                  onChange={(e) => setFormData({ ...formData, approxQuantity: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
                >
                  <option>1–3 units (Single site)</option>
                  <option>4–10 units (Multiple stations)</option>
                  <option>11–25 units (Small group)</option>
                  <option>26+ units (Regional rollout)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Required By Date (If any)
                </label>
                <input
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
                />
              </div>
            </div>

            {/* Platforms to Feature */}
            <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
              <label className="block text-xs font-bold text-[#15171B]">
                Destinations to Include on the Display:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                {[
                  "Google Reviews",
                  "Instagram Profile",
                  "Facebook Page",
                  "Official Website / Booking",
                  "Digital Menu",
                  "Guest Wi-Fi",
                  "TikTok Channel",
                  "WhatsApp Direct",
                ].map((plat) => {
                  const isSelected = formData.platforms.includes(plat);
                  return (
                    <button
                      key={plat}
                      type="button"
                      onClick={() => togglePlatform(plat)}
                      className={`p-2.5 text-xs rounded-lg border text-left font-medium transition-colors ${
                        isSelected
                          ? "bg-blue-50 border-[#245CF5] text-[#245CF5]"
                          : "bg-[#F5F6F8] border-[#E5E7EB] text-[#626A75] hover:bg-gray-100"
                      }`}
                    >
                      {plat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Logo / Artwork Upload */}
            <div className="pt-4 border-t border-[#E5E7EB] space-y-2">
              <label className="block text-xs font-bold text-[#15171B]">
                Logo or Artwork File (Vector PDF, EPS, SVG or High-Res PNG)
              </label>
              <div className="p-6 border-2 border-dashed border-[#E5E7EB] rounded-2xl text-center space-y-2 hover:border-[#245CF5] transition-colors">
                <UploadCloud className="w-8 h-8 text-[#626A75] mx-auto" />
                <div className="text-xs text-[#626A75]">
                  <label className="font-semibold text-[#245CF5] cursor-pointer hover:underline">
                    Click to select artwork
                    <input
                      type="file"
                      accept=".pdf,.png,.svg,.eps,.ai"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files?.[0]) setLogoFile(e.target.files[0]);
                      }}
                    />
                  </label>{" "}
                  or drag and drop here (Max 15MB)
                </div>
                {logoFile && (
                  <p className="text-xs font-semibold text-[#218653] pt-1">
                    Selected file: {logoFile.name} ({(logoFile.size / 1024 / 1024).toFixed(2)} MB)
                  </p>
                )}
              </div>
            </div>

            {/* Additional Project Message */}
            <div className="space-y-1">
              <label className="block text-xs font-bold text-[#15171B]">
                Additional Requirements or Specific Instructions
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention specific dimensions, required text, or details about your counters..."
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5] text-[#15171B]"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#626A75]">
                <ShieldCheck className="w-4 h-4 text-[#218653] shrink-0" />
                <span>Your information is handled securely and never sold to third parties.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending Enquiry..."
                ) : (
                  <>
                    Submit Specification <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
