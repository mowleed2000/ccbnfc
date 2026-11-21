"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatGBP } from "@/utils/format";
import { storeConfig } from "@/config/store.config";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Truck,
  AlertCircle,
} from "lucide-react";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    clearCart,
    subtotalPence,
    deliveryPence,
    discountPence,
    totalPence,
    discountCode,
    applyDiscountCode,
  } = useCart();

  const [inputCode, setInputCode] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "details" | "confirmation">("cart");

  // Customer details state
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    addressLine1: "",
    city: "",
    postcode: "",
    specialInstructions: "",
  });

  const [orderReference, setOrderReference] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const ok = applyDiscountCode(inputCode);
    if (!ok) {
      setCodeError(true);
      setTimeout(() => setCodeError(false), 3000);
    } else {
      setInputCode("");
    }
  };

  const handleProceedToDetails = () => {
    if (items.length === 0) return;
    setCheckoutStep("details");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customer.name.trim() || !customer.email.trim() || !customer.addressLine1.trim() || !customer.postcode.trim()) {
      setValidationError("Please fill in your name, email, delivery address, and UK postcode.");
      return;
    }

    setValidationError(null);
    setIsProcessing(true);

    // Simulate verified order creation and tokenized payment boundary
    setTimeout(() => {
      const generatedRef = `TP-${Math.floor(100000 + Math.random() * 900000)}`;
      setOrderReference(generatedRef);
      setIsProcessing(false);
      setCheckoutStep("confirmation");
      clearCart();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200);
  };

  if (checkoutStep === "confirmation") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 text-center">
        <div className="w-20 h-20 bg-emerald-50 text-[#218653] rounded-full flex items-center justify-center mx-auto border-2 border-emerald-200">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#218653]">
            Order Confirmed &bull; Sent to Workshop
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#15171B] tracking-tight">
            Thank you for your order!
          </h1>
          <p className="text-sm text-[#626A75]">
            Your order reference is <strong className="text-[#15171B] font-mono text-base">{orderReference}</strong>.
          </p>
        </div>

        <div className="bg-[#F5F6F8] rounded-2xl border border-[#E5E7EB] p-6 text-left space-y-4 max-w-lg mx-auto text-xs text-[#626A75]">
          <h3 className="font-bold text-sm text-[#15171B] border-b border-[#E5E7EB] pb-2">
            What happens next:
          </h3>
          <div className="space-y-2">
            <p>1. <strong>Link &amp; QR Verification:</strong> Our workshop technicians review the destination URLs you submitted to verify they point to active Google/social endpoints.</p>
            <p>2. <strong>Hardware Pre-Encoding:</strong> Contactless NFC chips and vector QR plates are produced and individually scan-tested.</p>
            <p>3. <strong>Tracked Dispatch:</strong> Once packed, you will receive an automated tracking link sent to <strong>{customer.email}</strong>.</p>
          </div>
        </div>

        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 max-w-lg mx-auto text-left flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <span>
            <strong>Staging / Payment Integration Notice:</strong> In this testing mode, order #{orderReference} has been processed through the commerce order creation boundary. Connect your live Stripe or payment gateway credentials prior to public launch.
          </span>
        </div>

        <div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm"
          >
            Continue Browsing Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#15171B] tracking-tight">
          {checkoutStep === "cart" ? "Shopping Basket & Configuration" : "Secure Checkout Details"}
        </h1>
        <p className="text-sm text-[#626A75] mt-1">
          {checkoutStep === "cart"
            ? "Review your chosen products, destination links, and order quantities."
            : "Enter your UK delivery address and business billing details."}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="py-20 text-center bg-[#F5F6F8] rounded-3xl border border-[#E5E7EB] space-y-4 max-w-2xl mx-auto p-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto text-gray-400 border border-[#E5E7EB]">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-[#15171B]">Your basket is currently empty</h2>
          <p className="text-xs sm:text-sm text-[#626A75]">
            Discover our specialist NFC countertop stands, Google review discs, and luxury acrylic plaques.
          </p>
          <div className="pt-2">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#245CF5] hover:bg-[#1748D8] text-white text-xs sm:text-sm font-semibold rounded-lg shadow-sm"
            >
              Explore Catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Left Column */}
          <div className="lg:col-span-7 space-y-6">
            {checkoutStep === "cart" ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 sm:p-5 bg-white rounded-2xl border border-[#E5E7EB] flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 relative bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] p-2 shrink-0 overflow-hidden">
                        <Image
                          src={item.product.primaryImage}
                          alt={item.product.title}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/products/${item.product.slug}`}
                          className="text-sm font-bold text-[#15171B] hover:text-[#245CF5]"
                        >
                          {item.product.title}
                        </Link>
                        <div className="text-xs text-[#626A75]">
                          Unit Price: {formatGBP(item.unitPricePence)}
                        </div>
                        {item.personalisationValue && (
                          <div className="text-xs text-blue-800 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 mt-1 max-w-sm break-all">
                            <span className="font-semibold">Target URL:</span> {item.personalisationValue}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6 pt-2 sm:pt-0 border-t sm:border-0 border-[#E5E7EB]">
                      <div className="flex items-center border border-[#E5E7EB] rounded-lg bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1.5 hover:bg-gray-100 text-gray-600 rounded-l-lg"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold text-[#15171B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1.5 hover:bg-gray-100 text-gray-600 rounded-r-lg"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-bold text-[#15171B]">
                        {formatGBP(item.unitPricePence * item.quantity)}
                      </span>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-[#C83C3C] p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Checkout Details Form */
              <form onSubmit={handleConfirmOrder} className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E5E7EB] space-y-6">
                <div className="flex items-center justify-between border-b border-[#E5E7EB] pb-3">
                  <h3 className="font-bold text-base text-[#15171B]">Delivery &amp; Customer Information</h3>
                  <button
                    type="button"
                    onClick={() => setCheckoutStep("cart")}
                    className="text-xs text-[#245CF5] hover:underline font-semibold"
                  >
                    &larr; Back to Basket Review
                  </button>
                </div>

                {validationError && (
                  <div className="p-3 bg-red-50 text-[#C83C3C] text-xs font-semibold rounded-lg flex items-center gap-2 border border-red-200">
                    <AlertCircle className="w-4 h-4" />
                    <span>{validationError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#15171B] mb-1">
                      Full Name <span className="text-[#C83C3C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.name}
                      onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                      placeholder="e.g. Rachel Green"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#15171B] mb-1">
                      Email Address (for dispatch tracking) <span className="text-[#C83C3C]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={customer.email}
                      onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                      placeholder="r.green@example.co.uk"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#15171B] mb-1">
                      Business / Trading Name (Optional)
                    </label>
                    <input
                      type="text"
                      value={customer.businessName}
                      onChange={(e) => setCustomer({ ...customer, businessName: e.target.value })}
                      placeholder="e.g. Central Perk Cafe"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#15171B] mb-1">
                      Mobile Telephone
                    </label>
                    <input
                      type="tel"
                      value={customer.phone}
                      onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                      placeholder="07000 000000"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-[#15171B] mb-1">
                      Delivery Address Line 1 <span className="text-[#C83C3C]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={customer.addressLine1}
                      onChange={(e) => setCustomer({ ...customer, addressLine1: e.target.value })}
                      placeholder="Street address, building number..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#15171B] mb-1">
                        Town / City <span className="text-[#C83C3C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customer.city}
                        onChange={(e) => setCustomer({ ...customer, city: e.target.value })}
                        placeholder="e.g. Manchester"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#15171B] mb-1">
                        UK Postcode <span className="text-[#C83C3C]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={customer.postcode}
                        onChange={(e) => setCustomer({ ...customer, postcode: e.target.value })}
                        placeholder="e.g. M1 4BT"
                        className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#15171B] mb-1">
                    Special Packaging or Delivery Notes
                  </label>
                  <textarea
                    rows={2}
                    value={customer.specialInstructions}
                    onChange={(e) => setCustomer({ ...customer, specialInstructions: e.target.value })}
                    placeholder="Safe place or delivery access instructions..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-[#F5F6F8] border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
                  />
                </div>

                <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#218653] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold">Pre-Encoding Assurance:</strong>
                    Your links will be permanently written to the hardware tags and scan-verified prior to dispatch.
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 bg-[#245CF5] hover:bg-[#1748D8] text-white font-bold text-sm rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    "Processing Verified Order..."
                  ) : (
                    <>
                      <Lock className="w-4 h-4" /> Place Verified Order &bull; {formatGBP(totalPence)}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Summary Column */}
          <div className="lg:col-span-5 bg-[#F5F6F8] rounded-3xl border border-[#E5E7EB] p-6 sm:p-8 space-y-6 sticky top-24">
            <h2 className="text-lg font-bold text-[#15171B] border-b border-[#E5E7EB] pb-3">
              Order Financial Summary
            </h2>

            {/* Voucher input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Discount code (e.g. WELCOME10)"
                className="flex-1 px-3 py-2 text-xs bg-white border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#245CF5]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-xs font-semibold text-[#15171B] border border-[#E5E7EB] rounded-lg hover:bg-gray-100"
              >
                Apply
              </button>
            </form>
            {codeError && <p className="text-[11px] text-[#C83C3C]">Code invalid. Use WELCOME10.</p>}

            {/* Totals Breakdown */}
            <div className="space-y-3 text-xs sm:text-sm text-[#626A75] border-t border-[#E5E7EB] pt-4">
              <div className="flex justify-between">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span className="font-semibold text-[#15171B]">{formatGBP(subtotalPence)}</span>
              </div>

              {discountCode && (
                <div className="flex justify-between text-[#218653] font-medium">
                  <span>Voucher Code ({discountCode})</span>
                  <span>-{formatGBP(discountPence)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#245CF5]" /> UK Tracked Delivery
                </span>
                <span className="font-semibold text-[#15171B]">{formatGBP(deliveryPence)}</span>
              </div>

              <div className="flex justify-between">
                <span>Included UK VAT (20%)</span>
                <span>{formatGBP(Math.round(totalPence - totalPence / 1.2))}</span>
              </div>

              <div className="pt-3 border-t border-[#E5E7EB] flex justify-between items-baseline text-base sm:text-lg font-extrabold text-[#15171B]">
                <span>Total Payable</span>
                <span className="text-xl sm:text-2xl text-[#245CF5]">{formatGBP(totalPence)}</span>
              </div>
            </div>

            {checkoutStep === "cart" && (
              <button
                onClick={handleProceedToDetails}
                className="w-full py-3.5 bg-[#245CF5] hover:bg-[#1748D8] text-white font-bold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2"
              >
                Proceed to Checkout Details <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <div className="pt-4 border-t border-[#E5E7EB] space-y-2 text-[11px] text-[#626A75]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#218653]" />
                <span>Pre-tested contactless NFC transponders</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#245CF5]" />
                <span>256-bit encrypted transaction checkout boundary</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
