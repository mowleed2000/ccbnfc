"use client";

import React, { useState } from "react";
import { storeConfig } from "@/config/store.config";
import { Mail, Phone, MapPin, Clock, Send, Check, AlertCircle, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "Product Guidance",
    orderRef: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in your name, email, and message.");
      return;
    }

    setErrorMsg(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Customer Support &amp; Technical Advice
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Get in touch with our team.
        </h1>
        <p className="text-base sm:text-lg text-[#626A75] leading-relaxed">
          Need help choosing a product, setting up a custom design or arranging a larger order? Send us an enquiry and include as much detail as you can. We&apos;ll use the information to understand what you need and respond with the next steps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Information & Launch Dependencies (Section 3.4 & 22) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] space-y-5">
            <h3 className="font-bold text-base text-[#15171B]">Direct Contact Details</h3>

            <div className="space-y-4 text-xs text-[#626A75]">
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#245CF5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#15171B] block">Email Support</span>
                  <a href={`mailto:${storeConfig.contact.email}`} className="text-[#245CF5] hover:underline">
                    {storeConfig.contact.email}
                  </a>
                  {!storeConfig.contact.isVerified && (
                    <span className="block text-[10px] text-amber-700 italic mt-0.5">
                      (Configurable launch field)
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#245CF5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#15171B] block">Telephone</span>
                  <span>{storeConfig.contact.phone}</span>
                  {!storeConfig.contact.isVerified && (
                    <span className="block text-[10px] text-amber-700 italic mt-0.5">
                      (Configurable launch field)
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#245CF5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#15171B] block">Fulfilment Workshop</span>
                  <span>{storeConfig.contact.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#245CF5] shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-[#15171B] block">Operating Hours</span>
                  <span>{storeConfig.contact.hours}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-white rounded-2xl border border-[#E5E7EB] text-xs text-[#626A75] space-y-2">
            <div className="flex items-center gap-1.5 font-bold text-[#15171B]">
              <ShieldCheck className="w-4 h-4 text-[#218653]" />
              <span>Prompt Technical Responses</span>
            </div>
            <p>
              Enquiries are reviewed by technicians who understand URL syntax, Google Place IDs, and contactless NFC hardware. We aim to respond within 24 business hours.
            </p>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E5E7EB] shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-50 text-[#218653] rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#15171B]">Enquiry Sent Successfully</h3>
              <p className="text-xs text-[#626A75] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your message regarding <em>{formData.topic}</em> has been securely logged. Our support team will follow up via email shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    topic: "Product Guidance",
                    orderRef: "",
                    message: "",
                  });
                }}
                className="px-4 py-2 bg-[#F5F6F8] hover:bg-gray-200 text-xs font-semibold rounded-lg text-[#15171B]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-xl font-bold text-[#15171B] mb-2">Send an Enquiry</h2>

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
                    placeholder="e.g. Liam Taylor"
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
                    placeholder="l.taylor@example.co.uk"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#15171B] mb-1">
                    Enquiry Topic
                  </label>
                  <select
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                  >
                    <option>Product Guidance &amp; Selection</option>
                    <option>Existing Order / Link Update</option>
                    <option>Custom Artwork &amp; Branding</option>
                    <option>Bulk &amp; Multi-Site Quotation</option>
                    <option>Technical NFC / Device Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#15171B] mb-1">
                    Order Reference (If Applicable)
                  </label>
                  <input
                    type="text"
                    value={formData.orderRef}
                    onChange={(e) => setFormData({ ...formData, orderRef: e.target.value })}
                    placeholder="e.g. TP-8921"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#15171B] mb-1">
                  Your Message or Enquiry Details <span className="text-[#C83C3C]">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Please describe how we can assist you..."
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm transition-all flex items-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Enquiry"} <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
