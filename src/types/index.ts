export interface ProductVariant {
  id: string;
  name: string;
  sku: string;
  pricePence: number;
  compareAtPricePence?: number;
  stock: number;
  attributes: Record<string, string>;
  image?: string;
}

export interface ProductSpecification {
  label: string;
  value: string;
}

export interface ProductFAQ {
  question: string;
  answer: string;
}

export interface ProductPersonalisation {
  required: boolean;
  type: 'url' | 'social_handle' | 'wifi_config' | 'custom_branding';
  label: string;
  placeholder?: string;
  description?: string;
  sampleFormat?: string;
  validationRegex?: string;
  allowLogoUpload?: boolean;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: 'review-products' | 'social-media' | 'acrylic-displays' | 'menu-and-wifi' | 'keyrings-and-tags';
  format: 'stand' | 'sticker' | 'tag' | 'card' | 'display' | 'keyring' | 'bundle';
  platform?: 'google' | 'instagram' | 'tiktok' | 'whatsapp' | 'wifi' | 'menu' | 'multi';
  tags: string[];
  images: string[];
  primaryImage: string;
  pricePence: number;
  compareAtPricePence?: number;
  variants?: ProductVariant[];
  features: string[];
  specifications: ProductSpecification[];
  nfcEnabled: boolean;
  qrIncluded: boolean;
  personalisation?: ProductPersonalisation;
  stock: number;
  isMadeToOrder?: boolean;
  shippingProfileId: string;
  relatedProductIds: string[];
  faqs: ProductFAQ[];
  isFeatured?: boolean;
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  introCopy: string;
  description: string;
  coverImage: string;
}

export interface CartItem {
  id: string; // unique item id based on product + variant + personalisation
  productId: string;
  product: Product;
  variantId?: string;
  variantName?: string;
  quantity: number;
  unitPricePence: number;
  personalisationValue?: string;
  logoFileName?: string;
}

export interface CustomEnquiry {
  id: string;
  name: string;
  businessName: string;
  email: string;
  phone?: string;
  productType: string;
  approxQuantity: string;
  locationsCount?: string;
  destinations: string[];
  brandingPreferences?: string;
  deadline?: string;
  message: string;
  createdAt: string;
}
