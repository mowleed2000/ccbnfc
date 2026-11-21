"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

interface CookieContextType {
  consentGiven: boolean;
  preferences: CookiePreferences;
  acceptAll: () => void;
  rejectNonEssential: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

export function CookieProvider({ children }: { children: React.ReactNode }) {
  const [consentGiven, setConsentGiven] = useState(true); // Default true until mounted to avoid flicker
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem("ccbnfc_cookie_consent");
      if (stored) {
        setPreferences(JSON.parse(stored));
        setConsentGiven(true);
      } else {
        setConsentGiven(false);
      }
    } catch {
      setConsentGiven(true);
    }
  }, []);

  const acceptAll = () => {
    const updated: CookiePreferences = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(updated);
    setConsentGiven(true);
    try {
      localStorage.setItem("ccbnfc_cookie_consent", JSON.stringify(updated));
    } catch {}
  };

  const rejectNonEssential = () => {
    const updated: CookiePreferences = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(updated);
    setConsentGiven(true);
    try {
      localStorage.setItem("ccbnfc_cookie_consent", JSON.stringify(updated));
    } catch {}
  };

  const savePreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    setConsentGiven(true);
    setShowSettings(false);
    try {
      localStorage.setItem("ccbnfc_cookie_consent", JSON.stringify(prefs));
    } catch {}
  };

  return (
    <CookieContext.Provider
      value={{
        consentGiven,
        preferences,
        acceptAll,
        rejectNonEssential,
        savePreferences,
        showSettings,
        setShowSettings,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookie() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error("useCookie must be used within a CookieProvider");
  }
  return context;
}
