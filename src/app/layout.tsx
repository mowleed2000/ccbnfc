import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import CartDrawer from "@/components/cart/CartDrawer";
import CookieBanner from "@/components/common/CookieBanner";
import { CartProvider } from "@/context/CartContext";
import { CookieProvider } from "@/context/CookieContext";
import { storeConfig } from "@/config/store.config";

export const metadata: Metadata = {
  title: {
    template: `%s | ${storeConfig.tradingName}`,
    default: `${storeConfig.tradingName} | ${storeConfig.tagline}`,
  },
  description:
    "Specialist supplier of contactless NFC cards, Google review stands, multi-platform acrylic displays, QR plaques, and digital menu touchpoints for UK businesses.",
  metadataBase: new URL(storeConfig.domain),
  openGraph: {
    title: `${storeConfig.tradingName} | NFC & QR Business Displays`,
    description:
      "Physical touchpoints that connect everyday customer interactions to your online reviews, social profiles, menus, and Wi-Fi.",
    siteName: storeConfig.tradingName,
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="min-h-screen flex flex-col overflow-x-hidden text-[#15171B] bg-white antialiased">
        <CookieProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CartDrawer />
            <CookieBanner />
          </CartProvider>
        </CookieProvider>
      </body>
    </html>
  );
}
