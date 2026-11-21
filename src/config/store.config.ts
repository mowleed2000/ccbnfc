export interface StoreConfig {
  storeName: string;
  tradingName: string;
  tagline: string;
  domain: string;
  currency: {
    code: string;
    symbol: string;
    vatIncluded: boolean;
    vatRatePercent: number;
  };
  contact: {
    email: string;
    phone: string;
    address: string;
    hours: string;
    isVerified: boolean;
  };
  delivery: {
    standardRatePence: number;
    standardEstimate: string;
    expressRatePence: number;
    expressEstimate: string;
    freeShippingThresholdPence?: number;
    isVerified: boolean;
  };
  returns: {
    windowDays: number;
    customItemsReturnable: boolean;
    policyUrl: string;
    isVerified: boolean;
  };
  legal: {
    companyName: string;
    companyNumber: string;
    vatNumber: string;
    registeredOffice: string;
    governingLaw: string;
    isVerified: boolean;
  };
  announcement: {
    enabled: boolean;
    message: string;
    linkUrl?: string;
  };
  founder: {
    name: string;
    title: string;
    bioEditorial: string;
    imagePath: string;
    isVerified: boolean;
  };
}

export const storeConfig: StoreConfig = {
  storeName: "NFC Commerce Specialist",
  tradingName: "TapPoint UK", // Replaceable typographic identity
  tagline: "Specialist NFC, QR & Countertop Business Displays",
  domain: "https://www.ccbnfc.co.uk",
  currency: {
    code: "GBP",
    symbol: "£",
    vatIncluded: true,
    vatRatePercent: 20,
  },
  contact: {
    email: "enquiries@tappoint.example.co.uk", // Flagged as launch dependency
    phone: "0800 000 0000", // Flagged as launch dependency
    address: "Fulfilment & Workshop, United Kingdom",
    hours: "Monday to Friday: 9:00am – 5:30pm",
    isVerified: false, // Flagged for owner verification
  },
  delivery: {
    standardRatePence: 395, // £3.95
    standardEstimate: "2–4 working days (Tracked UK Royal Mail)",
    expressRatePence: 695, // £6.95
    expressEstimate: "1–2 working days",
    isVerified: false, // Flagged for owner review
  },
  returns: {
    windowDays: 14,
    customItemsReturnable: false,
    policyUrl: "/delivery-returns",
    isVerified: false, // Flagged for owner review
  },
  legal: {
    companyName: "[Owner Legal Entity Name Required]",
    companyNumber: "[Company Registration Number Required]",
    vatNumber: "[VAT Number Required If Registered]",
    registeredOffice: "[Registered UK Address Required]",
    governingLaw: "England & Wales",
    isVerified: false,
  },
  announcement: {
    enabled: true,
    message: "Specialist NFC & QR Display Solutions for UK Businesses",
    linkUrl: "/shop",
  },
  founder: {
    name: "Founder & Product Specialist", // Section 13: Neutral title until approved details supplied
    title: "Founder",
    bioEditorial: "We make it easier for businesses to connect everyday customer interactions with their online presence. From review displays and social-media touchpoints to digital-menu and Wi-Fi products, our range is designed to make practical digital destinations effortless to access in person.",
    imagePath: "/assets/founder/founder-mo.jpg",
    isVerified: true,
  },
};
