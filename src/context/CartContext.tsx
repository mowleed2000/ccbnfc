"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/types";
import { storeConfig } from "@/config/store.config";

interface CartContextType {
  items: CartItem[];
  addToCart: (
    product: Product,
    quantity?: number,
    personalisationValue?: string,
    variantId?: string,
    logoFileName?: string
  ) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  itemCount: number;
  subtotalPence: number;
  deliveryPence: number;
  discountPence: number;
  totalPence: number;
  discountCode: string;
  applyDiscountCode: (code: string) => boolean;
  notificationMessage: string | null;
  clearNotification: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [discountCode, setDiscountCode] = useState("");
  const [discountPence, setDiscountPence] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage safely on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ccbnfc_cart");
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch {
      // LocalStorage unavailable
    }
    setIsLoaded(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem("ccbnfc_cart", JSON.stringify(items));
      } catch {
        // Ignored
      }
    }
  }, [items, isLoaded]);

  const addToCart = (
    product: Product,
    quantity = 1,
    personalisationValue?: string,
    variantId?: string,
    logoFileName?: string
  ) => {
    const unitPricePence = product.pricePence;
    const cleanPersonalisation = personalisationValue?.trim() || "";
    const uniqueId = `${product.id}_${variantId || "base"}_${encodeURIComponent(cleanPersonalisation)}`;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.id === uniqueId);
      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex].quantity += quantity;
        return updated;
      }
      return [
        ...prevItems,
        {
          id: uniqueId,
          productId: product.id,
          product,
          variantId,
          quantity,
          unitPricePence,
          personalisationValue: cleanPersonalisation,
          logoFileName,
        },
      ];
    });

    setNotificationMessage(`Added "${product.title}" to your order.`);
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId: string) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, quantity } : item))
    );
  };

  const clearCart = () => {
    setItems([]);
    setDiscountCode("");
    setDiscountPence(0);
  };

  const applyDiscountCode = (code: string): boolean => {
    const clean = code.trim().toUpperCase();
    if (clean === "WELCOME10") {
      setDiscountCode(clean);
      setDiscountPence(Math.round(subtotalPence * 0.1));
      return true;
    }
    return false;
  };

  const clearNotification = () => setNotificationMessage(null);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const subtotalPence = items.reduce((acc, item) => acc + item.unitPricePence * item.quantity, 0);
  const deliveryPence = items.length > 0 ? storeConfig.delivery.standardRatePence : 0;
  const totalPence = Math.max(0, subtotalPence - discountPence + deliveryPence);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        itemCount,
        subtotalPence,
        deliveryPence,
        discountPence,
        totalPence,
        discountCode,
        applyDiscountCode,
        notificationMessage,
        clearNotification,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
