"use client";

import React, { useState } from "react";
import Image from "next/image";
import { products as initialProducts } from "@/data/products";
import { storeConfig as initialStoreConfig } from "@/config/store.config";
import { formatGBP } from "@/utils/format";
import {
  Package,
  Settings,
  Star,
  CheckCircle2,
  AlertCircle,
  Edit,
  Save,
  ShoppingBag,
  Mail,
  ShieldAlert,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [tab, setTab] = useState<"products" | "config" | "orders">("products");
  const [productsList, setProductsList] = useState(initialProducts);
  const [config, setConfig] = useState(initialStoreConfig);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState<number>(0);
  const [editStock, setEditStock] = useState<number>(0);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  const toggleFeatured = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, isFeatured: !p.isFeatured } : p))
    );
    setSaveFeedback("Featured state updated.");
    setTimeout(() => setSaveFeedback(null), 2500);
  };

  const startEdit = (product: typeof initialProducts[0]) => {
    setEditingId(product.id);
    setEditPrice(product.pricePence);
    setEditStock(product.stock);
  };

  const saveProductEdit = (id: string) => {
    setProductsList((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, pricePence: editPrice, stock: editStock } : p
      )
    );
    setEditingId(null);
    setSaveFeedback("Product price and inventory successfully updated.");
    setTimeout(() => setSaveFeedback(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-8">
      {/* Admin Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E7EB]">
        <div>
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#245CF5]">
            <Settings className="w-3.5 h-3.5" /> Store Management
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#15171B] tracking-tight">
            Owner Catalogue &amp; Operations Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-[#626A75]">
            Manage prices, stock levels, featured displays, and review pre-launch configuration dependencies.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 bg-[#F5F6F8] p-1 rounded-xl border border-[#E5E7EB] text-xs font-semibold">
          <button
            onClick={() => setTab("products")}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              tab === "products" ? "bg-white text-[#15171B] shadow-xs" : "text-[#626A75] hover:text-[#15171B]"
            }`}
          >
            <Package className="w-3.5 h-3.5" /> Products ({productsList.length})
          </button>
          <button
            onClick={() => setTab("config")}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
              tab === "config" ? "bg-white text-[#15171B] shadow-xs" : "text-[#626A75] hover:text-[#15171B]"
            }`}
          >
            <ShieldAlert className="w-3.5 h-3.5" /> Launch Dependencies
          </button>
        </div>
      </div>

      {saveFeedback && (
        <div className="p-3 bg-emerald-50 text-[#218653] text-xs font-semibold rounded-xl border border-emerald-200 flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{saveFeedback}</span>
        </div>
      )}

      {/* Products Table Tab */}
      {tab === "products" && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F5F6F8] border-b border-[#E5E7EB] text-[#15171B] uppercase tracking-wider font-bold">
                  <tr>
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Tech</th>
                    <th className="py-3 px-4">Price (GBP)</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Featured</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB] text-[#626A75]">
                  {productsList.map((product) => {
                    const isEditing = editingId === product.id;
                    return (
                      <tr key={product.id} className="hover:bg-gray-50/50">
                        <td className="py-3 px-4 font-medium text-[#15171B]">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 relative bg-[#F5F6F8] rounded-lg border border-[#E5E7EB] shrink-0 overflow-hidden">
                              <Image
                                src={product.primaryImage}
                                alt={product.title}
                                fill
                                className="object-contain p-1"
                              />
                            </div>
                            <div>
                              <span className="font-semibold block truncate max-w-xs">{product.title}</span>
                              <span className="text-[10px] text-gray-500 font-mono">{product.slug}</span>
                            </div>
                          </div>
                        </td>

                        <td className="py-3 px-4 capitalize whitespace-nowrap">
                          {product.category.replace(/-/g, " ")}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          {product.nfcEnabled && product.qrIncluded ? (
                            <span className="bg-gray-100 text-[#15171B] px-2 py-0.5 rounded text-[10px] font-bold">
                              NFC + QR
                            </span>
                          ) : product.nfcEnabled ? (
                            <span className="bg-blue-50 text-[#245CF5] px-2 py-0.5 rounded text-[10px] font-bold">
                              NFC Only
                            </span>
                          ) : (
                            <span className="bg-amber-50 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">
                              QR Only
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-4 font-bold text-[#15171B] whitespace-nowrap">
                          {isEditing ? (
                            <div className="flex items-center gap-1">
                              <span>£</span>
                              <input
                                type="number"
                                step="0.01"
                                value={(editPrice / 100).toFixed(2)}
                                onChange={(e) =>
                                  setEditPrice(Math.round(parseFloat(e.target.value || "0") * 100))
                                }
                                className="w-16 px-1.5 py-1 bg-white border border-[#245CF5] rounded text-xs text-[#15171B]"
                              />
                            </div>
                          ) : (
                            formatGBP(product.pricePence)
                          )}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          {isEditing ? (
                            <input
                              type="number"
                              value={editStock}
                              onChange={(e) => setEditStock(parseInt(e.target.value || "0", 10))}
                              className="w-16 px-1.5 py-1 bg-white border border-[#245CF5] rounded text-xs text-[#15171B]"
                            />
                          ) : (
                            <span
                              className={`px-2 py-0.5 rounded font-semibold ${
                                product.stock > 10
                                  ? "bg-emerald-50 text-[#218653]"
                                  : "bg-red-50 text-[#C83C3C]"
                              }`}
                            >
                              {product.stock} in stock
                            </span>
                          )}
                        </td>

                        <td className="py-3 px-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleFeatured(product.id)}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              product.isFeatured
                                ? "bg-amber-50 border-amber-300 text-amber-600"
                                : "bg-white border-[#E5E7EB] text-gray-400 hover:text-gray-700"
                            }`}
                            aria-label="Toggle featured"
                          >
                            <Star className={`w-3.5 h-3.5 ${product.isFeatured ? "fill-amber-500" : ""}`} />
                          </button>
                        </td>

                        <td className="py-3 px-4 text-right whitespace-nowrap">
                          {isEditing ? (
                            <button
                              onClick={() => saveProductEdit(product.id)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#218653] text-white rounded font-semibold text-[11px]"
                            >
                              <Save className="w-3 h-3" /> Save
                            </button>
                          ) : (
                            <button
                              onClick={() => startEdit(product)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 bg-[#F5F6F8] hover:bg-gray-200 text-[#15171B] border border-[#E5E7EB] rounded font-semibold text-[11px]"
                            >
                              <Edit className="w-3 h-3" /> Edit
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Launch Dependencies Tab (Section 22) */}
      {tab === "config" && (
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-2xl border border-[#E5E7EB] space-y-4">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-[#15171B]">
                Owner-Supplied Launch Dependencies (Section 22 Checklist)
              </h2>
            </div>
            <p className="text-xs text-[#626A75] leading-relaxed">
              In accordance with Section 22 of the specification, the following values are currently configured as baseline defaults and flagged for owner verification before launching to public traffic:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Trading Name</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Verify</span>
                </div>
                <p className="text-[#626A75]">Current: <code>{config.tradingName}</code></p>
              </div>

              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Domain &amp; Canonical URL</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Verify</span>
                </div>
                <p className="text-[#626A75]">Current: <code>{config.domain}</code></p>
              </div>

              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Support Email Address</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Action Required</span>
                </div>
                <p className="text-[#626A75]">Current: <code>{config.contact.email}</code></p>
              </div>

              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Legal Entity &amp; Company Number</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Action Required</span>
                </div>
                <p className="text-[#626A75]">Current: <code>{config.legal.companyName}</code></p>
              </div>

              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Standard Tracked Delivery Rate</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">Configured</span>
                </div>
                <p className="text-[#626A75]">Rate: {formatGBP(config.delivery.standardRatePence)} ({config.delivery.standardEstimate})</p>
              </div>

              <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1.5">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-[#15171B]">Payment Gateway Credentials</span>
                  <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">Stripe / Provider</span>
                </div>
                <p className="text-[#626A75]">Current: Simulator / Test Mode Active</p>
              </div>
            </div>

            <div className="pt-4 text-xs text-[#626A75]">
              To update these values, edit <code className="bg-gray-100 px-1 py-0.5 rounded">src/config/store.config.ts</code> in the project codebase.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
