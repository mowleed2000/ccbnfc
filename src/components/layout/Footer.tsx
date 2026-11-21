"use client";

import React from "react";
import Link from "next/link";
import { storeConfig } from "@/config/store.config";
import { useCookie } from "@/context/CookieContext";
import { ShieldCheck, Truck, HelpCircle, Layers } from "lucide-react";

export default function Footer() {
  const { setShowSettings } = useCookie();

  return (
    <footer className="bg-[#15171B] text-white border-t border-gray-800">
      {/* Trust & Reassurance Bar */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <Layers className="w-5 h-5 text-[#245CF5] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Genuine NFC & QR Hardware</h4>
              <p className="text-gray-400 text-xs mt-1">Pre-tested 13.56 MHz chips and verified vector scannable codes.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#245CF5] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">UK Tracked Fulfilment</h4>
              <p className="text-gray-400 text-xs mt-1">Direct from our UK workshop with full dispatch tracking.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-[#245CF5] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Direct URL Pre-Encoding</h4>
              <p className="text-gray-400 text-xs mt-1">Configured to your business destination before shipping.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#245CF5] shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-white">Dedicated UK Support</h4>
              <p className="text-gray-400 text-xs mt-1">Setup assistance for Google Profile links, menus, and Wi-Fi.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#245CF5] text-white flex items-center justify-center font-bold text-sm">
                T
              </div>
              <span className="text-xl font-bold tracking-tight text-white">{storeConfig.tradingName}</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Specialist supplier of contactless NFC cards, QR countertop stands, multi-platform acrylic displays, and digital interaction touchpoints for UK businesses.
            </p>
            <div className="pt-2 text-xs text-gray-400 space-y-1">
              <p>Email: <a href={`mailto:${storeConfig.contact.email}`} className="text-gray-300 hover:text-white underline">{storeConfig.contact.email}</a></p>
              <p>Trading: {storeConfig.contact.address}</p>
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">Collections</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/collections/review-products" className="hover:text-white transition-colors">Google Review Displays</Link></li>
              <li><Link href="/collections/social-media" className="hover:text-white transition-colors">Social Media Touchpoints</Link></li>
              <li><Link href="/collections/acrylic-displays" className="hover:text-white transition-colors">Acrylic Display Plaques</Link></li>
              <li><Link href="/collections/menu-and-wifi" className="hover:text-white transition-colors">Menu & Wi-Fi Displays</Link></li>
              <li><Link href="/collections/keyrings-and-tags" className="hover:text-white transition-colors">Portable Keyrings & Tags</Link></li>
              <li><Link href="/shop" className="text-[#245CF5] hover:underline font-medium">Browse All 20 Products</Link></li>
            </ul>
          </div>

          {/* Solutions & Resources */}
          <div>
            <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">Solutions</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/custom-products" className="hover:text-white transition-colors">Custom Logo & Branding</Link></li>
              <li><Link href="/bulk-orders" className="hover:text-white transition-colors">Bulk & Multi-Location</Link></li>
              <li><Link href="/guides" className="hover:text-white transition-colors">Technical Setup Guides</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Workshop</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h4 className="text-xs font-semibold text-gray-200 uppercase tracking-wider mb-4">Legal & Policies</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/delivery-returns" className="hover:text-white transition-colors">Delivery & Returns</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li>
                <button
                  onClick={() => setShowSettings(true)}
                  className="hover:text-white transition-colors text-left"
                >
                  Cookie Settings
                </button>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
                  Owner Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Notice */}
        <div className="pt-10 mt-10 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            &copy; 2026 {storeConfig.tradingName}. All rights reserved. Registered in {storeConfig.legal.governingLaw}.
          </p>
          <p className="text-gray-400 text-center md:text-right">
            Google, Instagram, TikTok, and WhatsApp are trademarks of their respective owners. Products provide direct user access and are not officially endorsed.
          </p>
        </div>
      </div>
    </footer>
  );
}
