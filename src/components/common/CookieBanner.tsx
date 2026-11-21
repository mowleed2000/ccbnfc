"use client";

import React, { useState } from "react";
import { useCookie } from "@/context/CookieContext";
import { ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function CookieBanner() {
  const { consentGiven, acceptAll, rejectNonEssential, savePreferences, showSettings, setShowSettings } = useCookie();
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  if (consentGiven && !showSettings) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-white border-t border-[#E5E7EB] shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        {!showSettings ? (
          <>
            <div className="flex items-start gap-3 max-w-3xl">
              <ShieldCheck className="w-6 h-6 text-[#245CF5] shrink-0 mt-0.5" />
              <div className="text-sm text-[#626A75] leading-relaxed">
                <span className="font-semibold text-[#15171B]">Your Privacy & Cookies:</span> We use essential cookies to manage your basket and secure checkout. We also offer optional analytics to improve site performance. You can choose your preferences below. See our{" "}
                <Link href="/privacy-policy" className="text-[#245CF5] underline hover:text-[#1748D8]">
                  Privacy & Cookie Policy
                </Link>.
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
              <button
                onClick={() => setShowSettings(true)}
                className="px-3.5 py-2 text-xs font-medium text-[#15171B] bg-[#F5F6F8] border border-[#E5E7EB] rounded-md hover:bg-gray-100"
              >
                Customise
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-3.5 py-2 text-xs font-medium text-[#15171B] bg-white border border-[#E5E7EB] rounded-md hover:bg-gray-50"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#245CF5] rounded-md hover:bg-[#1748D8]"
              >
                Accept All
              </button>
            </div>
          </>
        ) : (
          <div className="w-full">
            <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB]">
              <h3 className="text-sm font-semibold text-[#15171B]">Manage Cookie Preferences</h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 text-xs text-[#626A75]">
              <div className="p-3 bg-[#F5F6F8] rounded border border-[#E5E7EB]">
                <div className="flex items-center justify-between font-medium text-[#15171B] mb-1">
                  <span>Essential Cookies</span>
                  <span className="text-[10px] bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded">Always Active</span>
                </div>
                <p>Required for basic shopping basket functionality, security, and checkout.</p>
              </div>
              <div className="p-3 bg-[#F5F6F8] rounded border border-[#E5E7EB]">
                <div className="flex items-center justify-between font-medium text-[#15171B] mb-1">
                  <span>Performance & Analytics</span>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="rounded text-[#245CF5] focus:ring-[#245CF5]"
                  />
                </div>
                <p>Helps us understand how visitors interact with our catalogue to improve usability.</p>
              </div>
              <div className="p-3 bg-[#F5F6F8] rounded border border-[#E5E7EB]">
                <div className="flex items-center justify-between font-medium text-[#15171B] mb-1">
                  <span>Marketing & Relevance</span>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="rounded text-[#245CF5] focus:ring-[#245CF5]"
                  />
                </div>
                <p>Allows relevant display of specialist products across partner channels.</p>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => savePreferences({ essential: true, analytics, marketing })}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#245CF5] rounded-md hover:bg-[#1748D8]"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
