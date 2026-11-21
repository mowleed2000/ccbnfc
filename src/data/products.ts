import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-001",
    slug: "black-google-review-qr-stand",
    title: "Black Google Review NFC & QR Countertop Stand",
    shortDescription: "A freestanding black display that gives customers a direct tap or scan route to your Google review page.",
    description: "Make your Google review destination visible right at the till, reception desk, or service counter. This freestanding black acrylic L-stand features a clear 'Review Us On Google' prompt with 5 rating stars, an integrated high-frequency NFC chip, and a prominent scannable QR code. Customers with compatible phones can simply tap the card or scan the QR code with their phone camera to open your direct review page in seconds.",
    category: "review-products",
    format: "stand",
    platform: "google",
    tags: ["google", "reviews", "stand", "countertop", "nfc", "qr"],
    images: ["/assets/products/google-review-qr-stand.png"],
    primaryImage: "/assets/products/google-review-qr-stand.png",
    pricePence: 2499,
    compareAtPricePence: 2999,
    features: [
      "Dual tap-and-scan functionality: integrated NFC chip and scannable QR code",
      "Sturdy freestanding angled L-profile designed for countertops and desks",
      "Pre-programmed to your official Google review destination URL",
      "Matte black scratch-resistant acrylic construction",
      "No batteries, power supply, or app installation required"
    ],
    specifications: [
      { label: "Material", value: "Cast Acrylic (Black Gloss Front / Satin Base)" },
      { label: "Dimensions", value: "Approx. 150mm (H) x 100mm (W) x 50mm (Base Depth)" },
      { label: "NFC Frequency", value: "13.56 MHz (ISO 14443A standard)" },
      { label: "Compatibility", value: "Compatible with NFC-enabled smartphones (iPhone 7+ & modern Android devices)" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "url",
      label: "Your Google Review Destination Link",
      placeholder: "https://g.page/r/.../review or search query",
      description: "Enter your official Google Review short URL or Place ID. We program the NFC chip and print the matching QR code before dispatch.",
      sampleFormat: "https://g.page/r/your-place-id/review"
    },
    stock: 45,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-003", "prod-006", "prod-004"],
    faqs: [
      {
        question: "Does this stand support both tap and scan?",
        answer: "Yes. Customers with NFC-enabled phones can tap their device against the stand, while customers with other devices can scan the printed QR code using their default camera app."
      },
      {
        question: "How do I find my official Google review link?",
        answer: "Log into your Google Business Profile, click 'Ask for reviews', and copy the short link provided (usually starts with g.page/r/...). Paste that link when ordering."
      },
      {
        question: "Can I update the link in the future?",
        answer: "The QR code is printed permanently onto the stand. The NFC chip can be reprogrammed using standard free NFC tools if you retain physical access."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-002",
    slug: "white-google-nfc-review-stand-pack",
    title: "White Google Review NFC Countertop Stand (2-Pack)",
    shortDescription: "A crisp white countertop display pack designed to prompt reviews at multiple checkout points.",
    description: "Equip multiple customer touchpoints with clean white Google review displays. Featuring an angled freestanding base and high-contrast Google review artwork, these stands direct customers straight to your feedback destination via contactless tap. Ideal for reception counters, till points, and waiting areas.",
    category: "review-products",
    format: "stand",
    platform: "google",
    tags: ["google", "reviews", "stand", "white", "multipack", "nfc"],
    images: ["/assets/products/google-review-nfc-stands-white.png"],
    primaryImage: "/assets/products/google-review-nfc-stands-white.png",
    pricePence: 3499,
    features: [
      "Supplied as a matched pair (2 stands included)",
      "High-contrast Google four-colour ring and five-star rating artwork",
      "Embedded contactless NFC chip programmed to your review destination",
      "Angled L-stand profile ensures optimal viewing angle for standing customers",
      "Durable wipe-clean acrylic surface"
    ],
    specifications: [
      { label: "Pack Quantity", value: "2 x Countertop Stands" },
      { label: "Material", value: "Solid White Acrylic" },
      { label: "Dimensions", value: "Approx. 140mm (H) x 95mm (W) each" },
      { label: "Connectivity", value: "NFC Contactless Tap (13.56 MHz)" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review Link",
      placeholder: "https://g.page/r/.../review",
      description: "Both stands in this pack will be programmed to your specified review destination."
    },
    stock: 28,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-004", "prod-006"],
    faqs: [
      {
        question: "How many stands are included in this SKU?",
        answer: "This package includes exactly two (2) freestanding white Google review stands."
      },
      {
        question: "Does this white model include a QR code?",
        answer: "This specific model is contactless NFC-focused without a printed QR code. For dual tap-and-scan capabilities, see our Black Google Review NFC & QR Stand."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-003",
    slug: "black-round-google-nfc-review-disc",
    title: "Black Round Google Review NFC Disc",
    shortDescription: "A compact circular disc engineered for flush counter placement or tabletop review prompts.",
    description: "A circular black Google review touchpoint designed for minimal footprint and maximum visual clarity. Featuring the Google logo, five stars, and a clear 'Tap Here to Leave a Review' instruction, this disc is engineered for placement on sales counters, coffee tables, or salon styling stations.",
    category: "review-products",
    format: "tag",
    platform: "google",
    tags: ["google", "reviews", "disc", "tag", "nfc", "compact"],
    images: ["/assets/products/google-review-nfc-tag-marble.png"],
    primaryImage: "/assets/products/google-review-nfc-tag-marble.png",
    pricePence: 1499,
    features: [
      "Compact circular profile for unobtrusive counter or table placement",
      "Full-colour Google brand accents and 5-star review prompt",
      "Fast contactless NFC chip embedded inside the disc",
      "Smooth bevelled rim with durable protective surface",
      "Suitable for flat indoor counter and tabletop surfaces"
    ],
    specifications: [
      { label: "Format", value: "Circular Rigid Countertop Disc" },
      { label: "Diameter", value: "Approx. 80mm Diameter" },
      { label: "Finish", value: "Matte Black Face with Colour Ring Border" },
      { label: "NFC Type", value: "NTAG213 High Capacity Contactless Chip" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review Destination URL",
      placeholder: "https://g.page/r/.../review"
    },
    stock: 60,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-006", "prod-005"],
    faqs: [
      {
        question: "Is this disc waterproof?",
        answer: "The disc is water-resistant against everyday counter splashes and easy to wipe clean, but should not be submerged."
      },
      {
        question: "Does it have adhesive backing?",
        answer: "The disc includes optional high-tack adhesive foam pads for secure counter mounting, or can be left free to move."
      }
    ]
  },
  {
    id: "prod-004",
    slug: "white-round-google-review-nfc-sticker",
    title: "White Round Google Review NFC Sticker",
    shortDescription: "A clean circular adhesive sticker with an embedded NFC chip for counters, glass, and menus.",
    description: "Put your Google review link within easy tapping range on any clean, flat surface. This white circular sticker features a vivid Google G icon, 'Leave Us a Review' headline, 5 gold stars, and the phone tap graphic. An internal contactless NFC chip directs customers instantly to your review page when tapped.",
    category: "review-products",
    format: "sticker",
    platform: "google",
    tags: ["google", "reviews", "sticker", "adhesive", "round", "nfc"],
    images: ["/assets/products/google-review-nfc-sticker-white.png"],
    primaryImage: "/assets/products/google-review-nfc-sticker-white.png",
    pricePence: 999,
    features: [
      "Commercial-grade self-adhesive backing adheres to glass, wood, and plastic",
      "Embedded micro-thin contactless NFC tag",
      "High-contrast white background with five-star prompt",
      "Protective wipe-clean laminate top layer",
      "Easy peel-and-stick application"
    ],
    specifications: [
      { label: "Diameter", value: "Approx. 85mm Diameter" },
      { label: "Thickness", value: "Approx. 0.8mm" },
      { label: "Adhesive Type", value: "Non-marking pressure-sensitive acrylic adhesive" },
      { label: "Frequency", value: "13.56 MHz NFC" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review URL",
      placeholder: "https://g.page/r/.../review"
    },
    stock: 120,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-003", "prod-005"],
    faqs: [
      {
        question: "Can I stick this onto a metal counter?",
        answer: "Standard NFC tags can experience signal attenuation on bare metal. If mounting to raw metal surfaces, we recommend our freestanding acrylic stands."
      }
    ]
  },
  {
    id: "prod-005",
    slug: "blue-google-review-nfc-square-sticker",
    title: "Blue Google Review NFC Square Adhesive Plaque",
    shortDescription: "A durable square rounded sticker plaque with bold blue header and dual phone-tap guide.",
    description: "Designed for eye-level and point-of-sale visibility, this square adhesive plaque combines a vibrant blue header section with a clean white lower instruction panel. Features the Google G mark, 5 rating stars, and explicit phone tap icons indicating where customers should hold their device.",
    category: "review-products",
    format: "sticker",
    platform: "google",
    tags: ["google", "reviews", "blue", "square", "sticker", "nfc"],
    images: ["/assets/products/google-review-nfc-square-sticker-blue.png"],
    primaryImage: "/assets/products/google-review-nfc-square-sticker-blue.png",
    pricePence: 1199,
    features: [
      "High-visibility two-tone design with Google branding",
      "Clear phone-tap positioning graphic to guide first-time users",
      "Strong self-adhesive backing for counters, partitions, or display doors",
      "Pre-encoded with your Google Business review link",
      "Resistant to daily cleaning sprays and fingerprints"
    ],
    specifications: [
      { label: "Format", value: "Square Rounded Adhesive Plaque" },
      { label: "Dimensions", value: "Approx. 90mm x 90mm" },
      { label: "Material", value: "Rigid Polycarbonate with Adhesive Backing" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review Link",
      placeholder: "https://g.page/r/.../review"
    },
    stock: 75,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-004", "prod-003"],
    faqs: [
      {
        question: "Is this reusable if I need to move it?",
        answer: "The adhesive is high-tack for permanent counter placement. While it can be removed cleanly with care, it is intended as a single-position fixture."
      }
    ]
  },
  {
    id: "prod-006",
    slug: "white-google-review-nfc-keyring",
    title: "White Google Review NFC Keyring",
    shortDescription: "Keep your review prompt portable for on-site services, trade visits, and mobile staff.",
    description: "Perfect for mobile tradespeople, consultants, drivers, and field service teams. This white circular keyring features a durable metal split ring and chain, paired with a resilient white medallion bearing the Google review prompt. Hand it to a satisfied customer at the completion of a job for an instant on-the-spot review tap.",
    category: "keyrings-and-tags",
    format: "keyring",
    platform: "google",
    tags: ["google", "keyring", "portable", "trades", "reviews", "nfc"],
    images: ["/assets/products/google-review-nfc-keyring.png"],
    primaryImage: "/assets/products/google-review-nfc-keyring.png",
    pricePence: 1299,
    compareAtPricePence: 1599,
    features: [
      "Pocket-sized portable review prompt with heavy-duty metal hardware",
      "Allows field and service staff to collect reviews immediately upon job completion",
      "Sealed waterproof medallion protects the internal contactless chip",
      "Pre-programmed to your review link before dispatch",
      "No batteries or charging needed"
    ],
    specifications: [
      { label: "Medallion Diameter", value: "Approx. 40mm" },
      { label: "Hardware", value: "Stainless Steel Split Ring & Chain" },
      { label: "Waterproofing", value: "Sealed Solid ABS Medallion" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review Link",
      placeholder: "https://g.page/r/.../review"
    },
    stock: 90,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-003", "prod-012"],
    faqs: [
      {
        question: "Can tradespeople keep this on their van keys?",
        answer: "Yes, the ABS casing and stainless steel chain are built to withstand daily pocket, key ring, and tool bag carry."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-007",
    slug: "google-review-starter-bundle",
    title: "Google Review Multi-Touchpoint Suite",
    shortDescription: "A comprehensive review collection kit combining cards, stands, plates, and keyrings.",
    description: "Cover every customer interaction in your business with our coordinated review collection suite. This multi-product bundle equips your main counter with an L-stand, secondary till with an acrylic plate, field staff with portable keyrings, and entrance doors or windows with tap stickers—all synchronised to your single Google review page.",
    category: "review-products",
    format: "bundle",
    platform: "google",
    tags: ["google", "bundle", "complete-pack", "reviews", "multi-pack", "nfc"],
    images: ["/assets/products/google-review-starter-bundle.webp"],
    primaryImage: "/assets/products/google-review-starter-bundle.webp",
    pricePence: 4999,
    compareAtPricePence: 6499,
    features: [
      "Complete multi-touchpoint deployment for your business",
      "Includes 1 x Countertop Stand, 1 x Countertop Plate, 2 x Portable Keyrings, and 2 x Tap Stickers",
      "All items pre-encoded to your verified Google review destination",
      "Consistent professional branding across your entire premises",
      "Significant bundle savings over individual product prices"
    ],
    specifications: [
      { label: "Included Items", value: "1 Stand, 1 Plate, 2 Keyrings, 2 Stickers" },
      { label: "Programming", value: "Pre-configured to single Google Review URL" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "url",
      label: "Google Review Destination URL",
      placeholder: "https://g.page/r/.../review"
    },
    stock: 20,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-001", "prod-006", "prod-003"],
    faqs: [
      {
        question: "Can different items in the bundle link to different locations?",
        answer: "By default, all items in this pack are programmed to your single primary review link. If you operate multiple branches, please use our Custom Products enquiry."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-008",
    slug: "pink-instagram-nfc-qr-cards",
    title: "Pink Instagram NFC & QR Business Cards (Pack)",
    shortDescription: "Vibrant pink glossy cards allowing clients to tap or scan straight to your Instagram profile.",
    description: "Drive immediate Instagram follows and profile engagement directly from your checkout, salon station, or client packages. These credit-card sized cards showcase an iconic Instagram gradient header, 5 stars, and clear tap and scan instructions. Hand them out with orders or display them on counters.",
    category: "social-media",
    format: "card",
    platform: "instagram",
    tags: ["instagram", "cards", "social", "pink", "nfc", "qr"],
    images: ["/assets/products/instagram-nfc-qr-cards.png"],
    primaryImage: "/assets/products/instagram-nfc-qr-cards.png",
    pricePence: 1899,
    features: [
      "Glossy credit-card format fits neatly in wallets or display stands",
      "Dual NFC tap and QR scan options for maximum smartphone compatibility",
      "Vivid Instagram signature sunset gradient styling",
      "Supplied in packs of 2 identical cards",
      "Encodes directly to your official Instagram username / profile link"
    ],
    specifications: [
      { label: "Pack Quantity", value: "2 Cards" },
      { label: "Dimensions", value: "85.6mm x 53.98mm (Standard CR80 Credit Card Size)" },
      { label: "Material", value: "Premium PVC with High-Gloss Protective Overlam" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "social_handle",
      label: "Instagram Profile URL or @Handle",
      placeholder: "https://instagram.com/yourbusiness or @yourhandle"
    },
    stock: 55,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-009", "prod-010", "prod-013"],
    faqs: [
      {
        question: "Does the tap open the Instagram app directly?",
        answer: "On most modern mobile devices with the Instagram app installed, tapping the NFC card prompts the phone to open your profile directly within the Instagram app."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-009",
    slug: "pink-instagram-nfc-standees",
    title: "Pink Instagram NFC & QR Countertop Stand",
    shortDescription: "An eye-catching upright magenta gradient display for reception desks and beauty counters.",
    description: "Attract customer attention where they pay or wait. This freestanding upright display features a bold magenta-to-orange gradient, large Instagram camera logo, scannable QR code, and base NFC tap sensor. Designed specifically for salons, boutiques, and lifestyle retailers looking to grow their social following.",
    category: "social-media",
    format: "stand",
    platform: "instagram",
    tags: ["instagram", "stand", "countertop", "pink", "beauty", "salon", "nfc", "qr"],
    images: ["/assets/products/instagram-nfc-standees-pink.png"],
    primaryImage: "/assets/products/instagram-nfc-standees-pink.png",
    pricePence: 2699,
    features: [
      "Freestanding rigid upright acrylic stand with integrated base",
      "Dual NFC tap zone and scannable QR code",
      "Eye-catching Instagram gradient colourway",
      "Direct link programming to your verified social profile",
      "High gloss, wipe-clean finish"
    ],
    specifications: [
      { label: "Dimensions", value: "Approx. 160mm (H) x 95mm (W)" },
      { label: "Material", value: "4mm High-Grade Acrylic" },
      { label: "NFC Frequency", value: "13.56 MHz" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "social_handle",
      label: "Instagram Profile URL or @Handle",
      placeholder: "https://instagram.com/yourbusiness"
    },
    stock: 35,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-008", "prod-013", "prod-014"],
    faqs: [
      {
        question: "Is this sold as a single stand or a pair?",
        answer: "This SKU is for one (1) premium countertop stand (as shown in reference pairs for viewing)."
      }
    ]
  },
  {
    id: "prod-010",
    slug: "glossy-tiktok-nfc-qr-cards",
    title: "Glossy TikTok NFC & QR Business Cards (Pack)",
    shortDescription: "Sleek black glossy cards designed to convert in-store footfall into TikTok followers.",
    description: "Capture the fastest-growing social audience. These credit-card sized TikTok NFC & QR cards feature the iconic cyan and red TikTok logo on sleek black gloss, accompanied by 5 stars and distinct tap and scan zones. Keep them beside your register or package them with in-store purchases.",
    category: "social-media",
    format: "card",
    platform: "tiktok",
    tags: ["tiktok", "cards", "social", "black", "nfc", "qr"],
    images: ["/assets/products/tiktok-nfc-qr-cards.png"],
    primaryImage: "/assets/products/tiktok-nfc-qr-cards.png",
    pricePence: 1899,
    features: [
      "Credit-card profile with glossy protective coat",
      "Both NFC tap and QR scan included",
      "High-contrast black, white, and cyan/red TikTok branding",
      "Pack includes 2 identical cards",
      "Pre-programmed to your TikTok channel link"
    ],
    specifications: [
      { label: "Pack Quantity", value: "2 Cards" },
      { label: "Card Size", value: "CR80 (85.6mm x 54mm)" },
      { label: "Material", value: "Solid PVC Plastic" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "social_handle",
      label: "TikTok Profile URL or @Username",
      placeholder: "https://www.tiktok.com/@yourbusiness"
    },
    stock: 40,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-011", "prod-008", "prod-013"],
    faqs: [
      {
        question: "Will it open TikTok directly?",
        answer: "Yes, when tapped by a phone with the TikTok app installed, it directs the user immediately to your account profile."
      }
    ]
  },
  {
    id: "prod-011",
    slug: "black-tiktok-nfc-stand",
    title: "Black TikTok NFC & QR Countertop Stand",
    shortDescription: "A modern freestanding black display with bold TikTok branding and dual interaction.",
    description: "Make your TikTok presence impossible to miss. This freestanding angled acrylic display presents the TikTok logo in full colour against a matte black surface, complete with 'Follow Us On TikTok', a large centre QR code, and bottom tap/scan guidance.",
    category: "social-media",
    format: "stand",
    platform: "tiktok",
    tags: ["tiktok", "stand", "countertop", "black", "social", "nfc", "qr"],
    images: ["/assets/products/tiktok-nfc-stand-black.png"],
    primaryImage: "/assets/products/tiktok-nfc-stand-black.png",
    pricePence: 2499,
    features: [
      "Sturdy angled countertop L-stand with non-slip base",
      "Dual NFC tap sensor and crisp scannable QR code",
      "Official TikTok colour accents on black acrylic",
      "Encoded to your exact TikTok profile URL before dispatch",
      "Requires no software or hardware setup on your end"
    ],
    specifications: [
      { label: "Height", value: "150mm" },
      { label: "Width", value: "100mm" },
      { label: "Material", value: "3mm Acrylic Sheet" }
    ],
    nfcEnabled: true,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "social_handle",
      label: "TikTok Profile Link",
      placeholder: "https://www.tiktok.com/@yourbusiness"
    },
    stock: 30,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-010", "prod-001", "prod-009"],
    faqs: [
      {
        question: "Can I use this for special promotional videos or links?",
        answer: "Yes. You can link either to your main TikTok account or to a specific campaign URL."
      }
    ]
  },
  {
    id: "prod-012",
    slug: "green-whatsapp-nfc-keyring",
    title: "Green WhatsApp NFC Contact Keyring",
    shortDescription: "An instant WhatsApp chat prompt for delivery staff, fleet drivers, and direct client contact.",
    description: "Start a WhatsApp conversation with a single tap. This vibrant green circular keyring features the white WhatsApp speech-bubble emblem on a rugged ABS tag, fitted with a stainless steel split ring. Ideal for customer service representatives, mobile technicians, and delivery drivers who need to connect with customers quickly.",
    category: "keyrings-and-tags",
    format: "keyring",
    platform: "whatsapp",
    tags: ["whatsapp", "keyring", "messaging", "contact", "support", "nfc"],
    images: ["/assets/products/whatsapp-green-nfc-keychain.png"],
    primaryImage: "/assets/products/whatsapp-green-nfc-keychain.png",
    pricePence: 1299,
    compareAtPricePence: 1599,
    features: [
      "Opens a direct WhatsApp chat window to your verified business phone number",
      "Rugged waterproof casing withstands heavy daily pocket use",
      "Stainless steel split ring and multi-link chain included",
      "Pre-programmed using standard wa.me direct messaging link",
      "No charging or battery needed"
    ],
    specifications: [
      { label: "Diameter", value: "40mm" },
      { label: "Material", value: "Heavy-Duty ABS Plastic + Stainless Steel" },
      { label: "Technology", value: "Contactless NFC 13.56 MHz" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "WhatsApp Business Phone Number",
      placeholder: "+44 7000 000000",
      description: "Enter your full international WhatsApp number. We configure the direct chat tap link."
    },
    stock: 80,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-006", "prod-015", "prod-018"],
    faqs: [
      {
        question: "What happens when a customer taps this keyring?",
        answer: "The phone detects the NFC signal and immediately opens a WhatsApp conversation addressed to your business number."
      }
    ]
  },
  {
    id: "prod-013",
    slug: "frosted-acrylic-dual-social-display-gold",
    title: "Frosted Acrylic Dual Social Display with Brushed Gold Base",
    shortDescription: "A luxurious frosted acrylic plaque presenting two social destinations with metallic 3D accents.",
    description: "Elevate your reception desk or boutique counter with this frosted acrylic display. Featuring the elegant script 'let's get social...', brushed gold 3D social emblems (Instagram and Facebook), custom printed handles, and matching framed QR codes, supported by a solid brushed gold base.",
    category: "acrylic-displays",
    format: "display",
    platform: "multi",
    tags: ["acrylic", "display", "gold", "frosted", "luxury", "salon", "boutique", "qr"],
    images: ["/assets/products/frosted-acrylic-dual-social-display-gold.png"],
    primaryImage: "/assets/products/frosted-acrylic-dual-social-display-gold.png",
    pricePence: 4499,
    features: [
      "Premium frosted cast acrylic panel with smooth radius corners",
      "Solid brushed gold metal base provides weight and stability",
      "Dual destination layout for Instagram and Facebook (or custom platforms)",
      "Raised 3D metallic mirror emblem frames",
      "Precision-generated QR codes linking to your specific business profiles"
    ],
    specifications: [
      { label: "Panel Material", value: "5mm Frosted Matte Cast Acrylic" },
      { label: "Base", value: "Heavyweight Anodised Brushed Gold Metal Base" },
      { label: "Dimensions", value: "Approx. 180mm (H) x 150mm (W)" },
      { label: "Interaction", value: "High-Resolution Scannable QR Codes" }
    ],
    nfcEnabled: false,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "custom_branding",
      label: "Your 2 Social Handles & Destination URLs",
      placeholder: "Platform 1: Instagram (@handle & link)\nPlatform 2: Facebook (Page name & link)",
      description: "Provide the handles and URLs to be printed and encoded onto your custom display.",
      allowLogoUpload: true
    },
    stock: 25,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-014", "prod-015", "prod-017"],
    faqs: [
      {
        question: "Can I swap Facebook for TikTok or Google?",
        answer: "Yes. When submitting your personalisation details, you can request any two supported platforms."
      },
      {
        question: "Does this display include NFC tap?",
        answer: "This luxury model is QR-code focused to ensure scannability through frosted acrylic and metallic accents."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-014",
    slug: "rose-gold-triple-social-website-display",
    title: "Rose Gold Triple Social & Website Display Stand",
    shortDescription: "A tall clear acrylic display with 3 rose-gold destination zones for Instagram, Facebook, and Web.",
    description: "Give your clients three clear ways to interact in a single, refined countertop piece. Crafted from crystal-clear acrylic with metallic rose gold accents, this display features dedicated rows for Instagram, Facebook, and your official website, each with a raised metallic icon, printed handle/address, and high-precision scannable QR code.",
    category: "acrylic-displays",
    format: "display",
    platform: "multi",
    tags: ["acrylic", "display", "rose-gold", "aesthetic", "salon", "triple", "qr"],
    images: ["/assets/products/rose-gold-triple-social-website-display.png"],
    primaryImage: "/assets/products/rose-gold-triple-social-website-display.png",
    pricePence: 4999,
    features: [
      "Three distinct interaction tiers (e.g., Instagram, Facebook, Website)",
      "Polished rose gold metallic accents and solid matching metal stand base",
      "Crystal-clear optical acrylic backboard",
      "Precision-generated QR codes tested for fast scanning in all lighting",
      "Personalised with your business name and specific handle text"
    ],
    specifications: [
      { label: "Dimensions", value: "Approx. 210mm (H) x 140mm (W) x 60mm (Base)" },
      { label: "Material", value: "Premium Optical Acrylic with Rose Gold Mirror Trim" },
      { label: "Base Type", value: "Dual-bracket Rose Gold Weighted Stand" }
    ],
    nfcEnabled: false,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "custom_branding",
      label: "Business Name & 3 Destination URLs",
      placeholder: "Header: Your Salon Name\n1. Instagram: @handle & URL\n2. Facebook: Name & URL\n3. Website: www.yourdomain.com",
      allowLogoUpload: true
    },
    stock: 20,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-013", "prod-015", "prod-017"],
    faqs: [
      {
        question: "Can I include an online booking link instead of a general website?",
        answer: "Yes, you can configure the third row to open a direct booking page, consultation form, or menu."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-015",
    slug: "rose-gold-multi-platform-connect-display",
    title: "Rose Gold Multi-Platform Payment & Connect Display",
    shortDescription: "A dusty rose-gold acrylic panel featuring payment and social contact QR destinations.",
    description: "Bring payments, social follows, and instant customer messaging into one cohesive presentation. Set on an opulent polished gold platform base, this display combines a rich dusty-rose face with scripted 'Connect With Us' typography and 3 tiered QR zones (e.g. contactless payment, Instagram, and WhatsApp direct messaging).",
    category: "acrylic-displays",
    format: "display",
    platform: "multi",
    tags: ["acrylic", "display", "rose-gold", "payment", "instagram", "whatsapp", "qr"],
    images: ["/assets/products/rose-gold-multi-platform-connect-display.png"],
    primaryImage: "/assets/products/rose-gold-multi-platform-connect-display.png",
    pricePence: 5299,
    features: [
      "Designed for reception desks, spas, aesthetic clinics, and boutique counters",
      "Accommodates payment links, social accounts, and direct messaging QR codes",
      "Warm dusty rose acrylic panel with 3D metallic mirror border framing",
      "Solid heavy polished gold foundation base",
      "Fully customised with your verified URLs and account identifiers"
    ],
    specifications: [
      { label: "Panel Dimensions", value: "Approx. 200mm (H) x 135mm (W)" },
      { label: "Base Material", value: "Weighted Solid Mirror Gold Alloy" },
      { label: "Destinations", value: "3 QR Code Zones with Labelled Icons" }
    ],
    nfcEnabled: false,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "custom_branding",
      label: "3 Platform URLs and Labels",
      placeholder: "1. Payment / Bank Transfer / Booking URL\n2. Instagram URL & Handle\n3. WhatsApp Contact Number & Link",
      allowLogoUpload: true
    },
    stock: 18,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-014", "prod-013", "prod-017"],
    faqs: [
      {
        question: "Can I display UK payment schemes like PayPal or Monzo?",
        answer: "Yes, any UK banking payment link, PayPal.me, or payment gateway URL can be generated into the payment QR zone."
      }
    ]
  },
  {
    id: "prod-016",
    slug: "frosted-acrylic-qr-sign-clear",
    title: "Minimal Frosted Acrylic QR Display Stand",
    shortDescription: "An understated frosted sign featuring a prominent single destination QR code and clear base.",
    description: "Subtle, professional, and uncluttered. This minimalist countertop plaque features elegant cursive 'Scan Me with your phone' script, a precision-cut silver mirror QR frame, and your printed domain URL, supported by a transparent solid acrylic base. Ideal for menus, appointments, or single website destinations.",
    category: "acrylic-displays",
    format: "display",
    platform: "multi",
    tags: ["acrylic", "frosted", "minimal", "qr", "countertop", "website", "menu"],
    images: ["/assets/products/frosted-acrylic-qr-sign-clear.png"],
    primaryImage: "/assets/products/frosted-acrylic-qr-sign-clear.png",
    pricePence: 3299,
    features: [
      "Clean minimalist presentation with frosted optical backboard",
      "Solid crystal-clear acrylic slotted base",
      "High-contrast QR code for reliable scanning from up to 1.5 metres",
      "Silver mirror framed QR border adds depth and premium shine",
      "Directly links to your chosen website, menu, or booking page"
    ],
    specifications: [
      { label: "Height", value: "150mm" },
      { label: "Width", value: "130mm" },
      { label: "Base", value: "Solid Clear Acrylic Block" }
    ],
    nfcEnabled: false,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "url",
      label: "Destination URL to Encode",
      placeholder: "https://www.yourdomain.com",
      description: "We generate a crisp vector QR code linking to this address."
    },
    stock: 35,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-013", "prod-017", "prod-018"],
    faqs: [
      {
        question: "Is this suitable for a restaurant table?",
        answer: "Yes. The frosted acrylic and compact footprint make it ideal for table numbers, digital menus, or ordering links."
      }
    ]
  },
  {
    id: "prod-017",
    slug: "masterpiece-salon-black-gold-arch-plaque",
    title: "Black & Gold Arch Multi-Platform Display Plaque",
    shortDescription: "A statement black acrylic arched plaque with 3 gold icons and QR codes on a polished base.",
    description: "Make a bold architectural statement on your counter. Featuring a contemporary curved arch silhouette in high-gloss piano black acrylic, crowned with your business branding, and paired with three vertical gold mirror social/web icons and matching QR codes on a heavy gold base.",
    category: "acrylic-displays",
    format: "display",
    platform: "multi",
    tags: ["acrylic", "arch", "black", "gold", "salon", "plaque", "luxury", "qr"],
    images: ["/assets/products/masterpiece-salon-black-gold-arch-plaque.png"],
    primaryImage: "/assets/products/masterpiece-salon-black-gold-arch-plaque.png",
    pricePence: 5699,
    features: [
      "Modern curved arch geometry finished in deep gloss black",
      "Heavyweight polished gold metallic presentation base",
      "Three high-precision QR zones with raised gold mirror frames",
      "Custom branded top section with your salon or business name",
      "Engineered for luxury reception desks and styling stations"
    ],
    specifications: [
      { label: "Profile", value: "Curved Arch Acrylic Plaque" },
      { label: "Height", value: "220mm" },
      { label: "Width", value: "150mm" },
      { label: "Base", value: "Polished Mirror Gold Weighted Alloy" }
    ],
    nfcEnabled: false,
    qrIncluded: true,
    personalisation: {
      required: true,
      type: "custom_branding",
      label: "Business Name & 3 Destination URLs",
      placeholder: "Header Brand Name: Your Business Name\n1. Facebook Link\n2. Instagram Link\n3. Website / Booking Link",
      allowLogoUpload: true
    },
    stock: 15,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-014", "prod-013", "prod-015"],
    faqs: [
      {
        question: "Can I replace one of the icons with a Google review or TikTok QR?",
        answer: "Yes, our production team can substitute any standard platform icon upon receiving your order."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-018",
    slug: "wifi-nfc-stand-yellow-base",
    title: "Black Wi-Fi NFC Countertop Stand with Contrast Base",
    shortDescription: "A high-visibility black Wi-Fi sign with contrast base for instant wireless connection.",
    description: "Eliminate repetitive customer questions about Wi-Fi access. This freestanding countertop display features a high-gloss black face with a prominent Wi-Fi emblem, clear 'TAP FOR FREE Wi-Fi' instructions, and a weighted yellow contrast base. Customers tap their phone to instantly connect or load your access portal.",
    category: "menu-and-wifi",
    format: "stand",
    platform: "wifi",
    tags: ["wifi", "stand", "hospitality", "hotel", "cafe", "countertop", "nfc"],
    images: ["/assets/products/wifi-nfc-stand-yellow-base.png"],
    primaryImage: "/assets/products/wifi-nfc-stand-yellow-base.png",
    pricePence: 2499,
    features: [
      "Contactless tap connects compatible devices to your Wi-Fi landing page or credentials",
      "High-contrast black panel with vibrant yellow weighted base",
      "Reduces staff interruptions in busy cafés, bars, and hotel lobbies",
      "No paper slips or hard-to-read chalkboard passwords required",
      "Commercial-grade wipe-clean acrylic"
    ],
    specifications: [
      { label: "Dimensions", value: "Approx. 130mm (H) x 120mm (W) x 40mm (Base Depth)" },
      { label: "Base", value: "High-Density Acrylic in Contrast Yellow" },
      { label: "NFC Chip", value: "NTAG216 High Memory (Supports long Wi-Fi credentials or landing URLs)" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "wifi_config",
      label: "Wi-Fi Network Name (SSID) or Access Portal URL",
      placeholder: "Network SSID & Password or Guest Portal Web URL",
      description: "Enter your guest Wi-Fi connection details or captive portal link. We encode the contactless chip accordingly."
    },
    stock: 40,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-019", "prod-020", "prod-001"],
    faqs: [
      {
        question: "Does this automatically connect every phone without a password prompt?",
        answer: "Device behavior depends on operating system policies: on Android, NFC Wi-Fi records typically trigger an instant connection confirmation; on iOS, it displays a notification opening your configured Wi-Fi information or captive portal page."
      }
    ],
    isFeatured: true
  },
  {
    id: "prod-019",
    slug: "menu-nfc-sticker-white",
    title: "White Round NFC Digital Menu Sticker",
    shortDescription: "A circular white table sticker with cloche illustration for contactless digital menu access.",
    description: "Make ordering and menu browsing effortless at restaurant and café tables. This white circular adhesive sticker features a clean cloche dining illustration, bold 'View Our MENU' header, and a phone tap prompt. Customers tap their phone on the sticker to view your digital menu instantly.",
    category: "menu-and-wifi",
    format: "sticker",
    platform: "menu",
    tags: ["menu", "sticker", "restaurant", "cafe", "food", "table", "nfc"],
    images: ["/assets/products/menu-nfc-sticker-white.png"],
    primaryImage: "/assets/products/menu-nfc-sticker-white.png",
    pricePence: 999,
    features: [
      "Contactless NFC tap opens your PDF or web digital menu in seconds",
      "Durable matte finish resists food grease, water spills, and commercial sanitiser",
      "Strong self-adhesive backing stays firmly bonded to wooden, laminate, and glass tables",
      "Reduces physical menu printing costs and reprint delays",
      "Pre-programmed to your online menu URL"
    ],
    specifications: [
      { label: "Diameter", value: "85mm" },
      { label: "Material", value: "Heavy-Duty Vinyl with Protective Overlaminate" },
      { label: "NFC Frequency", value: "13.56 MHz" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Digital Menu URL",
      placeholder: "https://yourrestaurant.com/menu"
    },
    stock: 150,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-020", "prod-018", "prod-004"],
    faqs: [
      {
        question: "Will the sticker hold up to daily restaurant table wiping?",
        answer: "Yes, it is protected by an industrial matte laminate designed specifically for hospitality wipe-downs."
      }
    ]
  },
  {
    id: "prod-020",
    slug: "menu-nfc-sticker-black",
    title: "Black Round NFC Digital Menu Sticker",
    shortDescription: "A bold black circular table sticker with cutlery icon for seamless tap-to-menu browsing.",
    description: "A striking dark-mode aesthetic for modern bars, gastropubs, and restaurants. This black circular sticker features a circular cutlery icon, high-contrast white 'TAP TO VIEW OUR MENU' typography, and an NFC tap graphic. Embedded with a contactless chip that directs guests straight to your digital menu or ordering system.",
    category: "menu-and-wifi",
    format: "sticker",
    platform: "menu",
    tags: ["menu", "sticker", "black", "restaurant", "bar", "pub", "nfc"],
    images: ["/assets/products/menu-nfc-sticker-black.png"],
    primaryImage: "/assets/products/menu-nfc-sticker-black.png",
    pricePence: 999,
    features: [
      "Bold black-and-white dining touchpoint for stylish hospitality venues",
      "Instant tap-to-menu contactless operation",
      "Grease-proof, water-resistant, and sanitiser-safe surface",
      "Pre-encoded with your menu URL before shipping",
      "Peel-and-stick application to all clean indoor dining surfaces"
    ],
    specifications: [
      { label: "Diameter", value: "85mm" },
      { label: "Material", value: "Tear-Resistant Vinyl with Heavy Laminate" }
    ],
    nfcEnabled: true,
    qrIncluded: false,
    personalisation: {
      required: true,
      type: "url",
      label: "Digital Menu URL",
      placeholder: "https://yourrestaurant.com/menu"
    },
    stock: 140,
    shippingProfileId: "standard-uk",
    relatedProductIds: ["prod-019", "prod-018", "prod-003"],
    faqs: [
      {
        question: "Can I order 50 of these for all our restaurant tables?",
        answer: "Yes, select your desired quantity or use our Bulk Orders page for larger venue rollouts."
      }
    ]
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "keyrings-and-tags") {
    return products.filter(p => p.category === "keyrings-and-tags" || p.format === "keyring" || p.format === "tag");
  }
  return products.filter(p => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.isFeatured);
}
