export interface FAQItem {
  id: string;
  category: 'general' | 'compatibility' | 'setup' | 'orders';
  question: string;
  answer: string;
}

export const generalFaqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "What is an NFC product?",
    answer: "NFC (Near Field Communication) is a short-range wireless technology. When a customer taps a compatible smartphone within a few centimetres of the product, the phone automatically detects the signal and prompts to open the configured destination link."
  },
  {
    id: "faq-2",
    category: "compatibility",
    question: "Do customers need to download an app to tap or scan?",
    answer: "No. For standard link navigation, modern smartphones have native NFC and camera QR readers built in. Customers do not need to install any dedicated third-party app to open your destination."
  },
  {
    id: "faq-3",
    category: "compatibility",
    question: "What if a customer's phone does not support NFC?",
    answer: "Where a product includes a printed QR code (such as our dual-function stands and cards), customers can simply open their standard camera app and scan the QR code as an alternative."
  },
  {
    id: "faq-4",
    category: "general",
    question: "Do all products include both NFC and QR?",
    answer: "No. Capabilities vary strictly by item. For instance, our acrylic multi-platform displays use high-precision scannable QR codes, while our compact stickers and keyrings use embedded contactless NFC chips. The product specifications on each page clearly declare which technologies are included."
  },
  {
    id: "faq-5",
    category: "setup",
    question: "Can the product link directly to my own business page?",
    answer: "Yes. During checkout (or via our post-order setup), you supply your direct Google review link, social profile URL, digital menu URL, or Wi-Fi credentials. We program the contactless NFC chip and generate the corresponding QR code before dispatch."
  },
  {
    id: "faq-6",
    category: "setup",
    question: "Can I add my business logo and branding?",
    answer: "Products marked as customisable (including our acrylic countertop plaques and custom print runs) accept your custom logo artwork and business name. Non-custom items feature the official platform design shown in the product photography."
  },
  {
    id: "faq-7",
    category: "general",
    question: "Will this guarantee more reviews or followers?",
    answer: "No physical product can guarantee a customer will write a review or follow a profile. These products remove friction by placing your exact destination within effortless tap-and-scan reach right at the moment of positive customer interaction."
  },
  {
    id: "faq-8",
    category: "compatibility",
    question: "Does every smartphone work with contactless NFC?",
    answer: "Most smartphones manufactured since 2018 (including iPhone XS and newer, plus modern Android devices) feature native NFC enabled by default. On some Android devices, NFC may need to be toggled on in Quick Settings."
  },
  {
    id: "faq-9",
    category: "orders",
    question: "Can I order in bulk for multiple locations or branches?",
    answer: "Yes. We support multi-unit and multi-location orders with individual branch URL encoding. Please visit our Bulk Orders page or submit an enquiry with your branch requirements."
  },
  {
    id: "faq-10",
    category: "orders",
    question: "How long does delivery take?",
    answer: "Standard UK orders are dispatched via tracked courier within 1–2 business days following link verification. Full delivery timeframes and options are detailed on our Delivery & Returns page."
  }
];
