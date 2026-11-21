import { Collection } from "@/types";

export const collections: Collection[] = [
  {
    id: "col-review",
    slug: "review-products",
    title: "Google & Review Products",
    shortTitle: "Review Products",
    introCopy: "Give customers a simple way to reach your review page. Explore NFC and QR products designed for counters, reception desks and customer-facing spaces.",
    description: "Make it easier for customers to find your review destination. Place a tap-and-scan display where customers are most likely to notice it at checkout or point of service.",
    coverImage: "/assets/products/google-review-qr-stand.png"
  },
  {
    id: "col-social",
    slug: "social-media",
    title: "Social Media Touchpoints",
    shortTitle: "Social Media",
    introCopy: "Make it easier for customers to find your social profiles. Choose a format that suits your counter, reception area or service space.",
    description: "Bring your Instagram, TikTok, and WhatsApp channels closer to the point of sale, reception desk, or service counter with dedicated tap and scan displays.",
    coverImage: "/assets/products/instagram-nfc-standees-pink.png"
  },
  {
    id: "col-acrylic",
    slug: "acrylic-displays",
    title: "Acrylic & Multi-Platform Displays",
    shortTitle: "Acrylic Displays",
    introCopy: "Bring key online destinations together in a display designed to sit neatly within your business environment.",
    description: "Premium frosted, black, and rose-gold acrylic countertop pieces engineered for beauty salons, aesthetic clinics, and professional client spaces.",
    coverImage: "/assets/products/frosted-acrylic-dual-social-display-gold.png"
  },
  {
    id: "col-menu-wifi",
    slug: "menu-and-wifi",
    title: "Menu & Wi-Fi Products",
    shortTitle: "Menu & Wi-Fi",
    introCopy: "Make your digital menu or guest Wi-Fi easier to access. Place a compatible NFC touchpoint where customers can find it.",
    description: "Contactless table stickers and countertop displays that direct visitors instantly to your digital food/drinks menu or guest Wi-Fi network.",
    coverImage: "/assets/products/wifi-nfc-stand-yellow-base.png"
  },
  {
    id: "col-keyrings-tags",
    slug: "keyrings-and-tags",
    title: "Keyrings & Compact Tags",
    shortTitle: "Keyrings & Tags",
    introCopy: "Compact NFC products for simple, portable access to a configured online destination.",
    description: "Designed for mobile service providers, tradespeople, and on-the-go interactions. Collect reviews or share contacts on site immediately upon job completion.",
    coverImage: "/assets/products/google-review-nfc-keyring.png"
  }
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find(c => c.slug === slug);
}
