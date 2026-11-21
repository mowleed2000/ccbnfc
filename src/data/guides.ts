export interface Guide {
  slug: string;
  title: string;
  summary: string;
  readTime: string;
  steps: {
    heading: string;
    content: string;
  }[];
}

export const guides: Guide[] = [
  {
    slug: "how-nfc-works-for-businesses",
    title: "How NFC Technology Works at the Counter",
    summary: "Understand the fundamentals of Near Field Communication, device compatibility, and how your customers interact with contactless touchpoints.",
    readTime: "3 min read",
    steps: [
      {
        heading: "1. The Contactless Chip",
        content: "Inside every NFC display, card, or sticker sits a passive micro-transponder (commonly an NTAG213 or NTAG216 chip). Because it is passive, it requires no battery or external power source."
      },
      {
        heading: "2. The Phone Interaction",
        content: "When a customer holds a compatible phone within 1 to 4 centimetres, the phone's native NFC antenna generates a tiny radio frequency field that powers the tag and reads the configured web link."
      },
      {
        heading: "3. Direct Action Without Apps",
        content: "The smartphone immediately displays a notification banner. When tapped, it opens the web browser directly to your configured destination—whether that is your Google review form, Instagram account, or online food menu."
      }
    ]
  },
  {
    slug: "how-to-find-google-review-link",
    title: "How to Find Your Official Google Review Link",
    summary: "A step-by-step guide to generating your direct short review URL from your Google Business Profile.",
    readTime: "2 min read",
    steps: [
      {
        heading: "1. Access Your Google Business Profile",
        content: "Sign into the Google Account used to manage your business and search for your business name on Google Search or Maps."
      },
      {
        heading: "2. Click 'Ask for reviews'",
        content: "On your Business Profile dashboard, select the 'Ask for reviews' icon or 'Get more reviews' card."
      },
      {
        heading: "3. Copy the Clean Short Link",
        content: "Google provides a short link formatted like 'https://g.page/r/.../review'. Copy this link and paste it into the personalisation field when placing your order."
      }
    ]
  },
  {
    slug: "preparing-social-profile-urls",
    title: "How to Prepare Your Instagram, TikTok & WhatsApp Links",
    summary: "Ensure your social media links open cleanly inside mobile apps rather than stalling on web login screens.",
    readTime: "3 min read",
    steps: [
      {
        heading: "1. Instagram Profile Formatting",
        content: "Use your full canonical URL: https://www.instagram.com/yourhandle/. Avoid using temporary story links or tracking redirects that expire."
      },
      {
        heading: "2. TikTok Channel Link",
        content: "Open TikTok, go to your profile, tap Share Profile, and copy the link. Format should be https://www.tiktok.com/@yourusername."
      },
      {
        heading: "3. WhatsApp Click-to-Chat",
        content: "Provide your international phone number without leading zeros or symbols (e.g., +44 7123 456789 becomes wa.me/447123456789). We generate the official WhatsApp direct-message link."
      }
    ]
  },
  {
    slug: "countertop-display-placement-guide",
    title: "Countertop Placement Guide for Maximum Engagement",
    summary: "Practical placement techniques to ensure customers notice and interact with your displays without feeling pressured.",
    readTime: "4 min read",
    steps: [
      {
        heading: "1. Position at the Point of Dwell",
        content: "Place displays where customers naturally pause: directly next to the card payment terminal, at the reception check-in desk, or at dining tables while waiting for the bill."
      },
      {
        heading: "2. Clear Eye-Level Angle",
        content: "Our L-stand and angled acrylic profiles are tilted between 70° and 80° to provide natural readability from standard standing eye levels without desk reflections."
      },
      {
        heading: "3. Avoid Direct Contact with Raw Metal",
        content: "If your counter has an uninsulated steel surface, use our acrylic stands or a non-metallic riser rather than placing thin adhesive stickers directly onto bare metal."
      }
    ]
  }
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find(g => g.slug === slug);
}
