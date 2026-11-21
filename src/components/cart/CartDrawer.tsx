"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatGBP } from "@/utils/format";

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotalPence,
    deliveryPence,
    discountPence,
    totalPence,
    discountCode,
    applyDiscountCode,
    clearNotification,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [codeError, setCodeError] = useState(false);

  if (!isCartOpen) return null;

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const success = applyDiscountCode(inputCode);
    if (!success) {
      setCodeError(true);
      setTimeout(() => setCodeError(false), 3000);
    } else {
      setInputCode("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => {
          setIsCartOpen(false);
          clearNotification();
        }}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#E5E7EB] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#245CF5]" />
              <h2 className="text-lg font-bold text-[#15171B]">Your Order Basket</h2>
              <span className="text-xs bg-[#F5F6F8] font-semibold text-[#626A75] px-2 py-0.5 rounded-full border border-[#E5E7EB]">
                {items.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={() => {
                setIsCartOpen(false);
                clearNotification();
              }}
              className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F5F6F8] rounded-full flex items-center justify-center mx-auto text-[#626A75]">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#15171B]">Your basket is empty</h3>
                  <p className="text-xs text-[#626A75] mt-1 max-w-xs mx-auto">
                    Explore our specialist NFC and QR displays to prompt reviews, social follows, or digital menus.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#245CF5] text-white text-xs font-semibold rounded-lg hover:bg-[#1748D8]"
                >
                  Browse Catalogue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB]"
                >
                  <div className="w-16 h-16 relative bg-white rounded-lg border border-[#E5E7EB] overflow-hidden shrink-0">
                    <Image
                      src={item.product.primaryImage}
                      alt={item.product.title}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          onClick={() => setIsCartOpen(false)}
                          className="text-xs font-semibold text-[#15171B] hover:text-[#245CF5] leading-snug line-clamp-2"
                        >
                          {item.product.title}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-[#C83C3C] p-1 -mr-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {item.personalisationValue && (
                        <div className="mt-1 text-[11px] text-[#626A75] bg-white px-2 py-0.5 rounded border border-[#E5E7EB] truncate">
                          <span className="font-medium text-[#15171B]">Link:</span> {item.personalisationValue}
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-2 mt-1">
                      <div className="flex items-center border border-[#E5E7EB] bg-white rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 rounded-l-md"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold text-[#15171B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 text-gray-600 rounded-r-md"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-[#15171B]">
                          {formatGBP(item.unitPricePence * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Totals */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#E5E7EB] bg-white space-y-4">
              {/* Promo code */}
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  placeholder="Voucher code (e.g. WELCOME10)"
                  className="flex-1 text-xs px-3 py-2 bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gray-100 text-xs font-semibold text-[#15171B] rounded-lg hover:bg-gray-200"
                >
                  Apply
                </button>
              </form>
              {codeError && (
                <p className="text-[11px] text-[#C83C3C]">Invalid coupon code. Try WELCOME10.</p>
              )}
              {discountCode && (
                <div className="flex justify-between text-xs text-[#218653] font-medium">
                  <span>Code {discountCode} (10% off)</span>
                  <span>-{formatGBP(discountPence)}</span>
                </div>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#626A75] pt-1 border-t border-[#E5E7EB]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#15171B]">{formatGBP(subtotalPence)}</span>
                </div>
                <div className="flex justify-between">
                  <span>UK Tracked Delivery</span>
                  <span className="font-medium text-[#15171B]">{formatGBP(deliveryPence)}</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#15171B] pt-2 border-t border-[#E5E7EB]">
                  <span>Total Payable (Inc. VAT)</span>
                  <span className="text-base text-[#245CF5]">{formatGBP(totalPence)}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm"
                >
                  Proceed to Secure Checkout <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#626A75]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#218653]" />
                  <span>Secure 256-bit encryption & UK workshop dispatch</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
