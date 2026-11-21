import React from "react";
import { storeConfig } from "@/config/store.config";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions of Sale",
  description: "Standard terms and conditions governing physical NFC and QR hardware purchases, pre-encoding, and custom orders.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Legal Framework
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Terms &amp; Conditions of Sale
        </h1>
        <p className="text-xs sm:text-sm text-[#626A75]">
          Governing law: {storeConfig.legal.governingLaw} &bull; Applicable to retail, commercial, and custom hardware orders.
        </p>
      </div>

      {!storeConfig.legal.isVerified && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Pre-Launch Legal Dependency:</strong>
            These commercial terms must be reviewed and formally executed by the business owner and legal advisor prior to public deployment.
          </div>
        </div>
      )}

      <div className="space-y-8 text-xs sm:text-sm text-[#626A75] leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">1. Basis of Sale</h2>
          <p>
            An order submitted through this website constitutes an offer to purchase goods. Acceptance occurs when we dispatch your goods and send an official dispatch confirmation email containing your tracking reference.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">2. Product Specifications &amp; URL Programming</h2>
          <p>
            Customers are responsible for providing correct, working destination URLs, Place IDs, and social handles during order placement. Our workshop validates basic URL syntax and tests each contactless chip and QR code prior to dispatch. We are not responsible for subsequent changes made by third-party platforms (e.g. Google algorithm updates, suspended social accounts, or altered URL structures).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">3. Pricing &amp; Payment</h2>
          <p>
            All prices are quoted in GBP (£) and include UK Value Added Tax (VAT) where applicable. Payment is collected securely via authorised payment gateways at the time of order placement.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">4. Custom &amp; Made-to-Order Displays</h2>
          <p>
            Bespoke acrylic displays featuring custom logos, printed names, or bespoke multi-platform layouts require proof approval where requested. Once custom manufacturing begins, orders cannot be cancelled or amended.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">5. Limitation of Liability</h2>
          <p>
            Our products provide physical access routes to online destinations. We make no representations or warranties regarding review volumes, social media follower growth, search ranking improvements, or business revenue resulting from the use of our displays.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-[#15171B]">6. Governing Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of {storeConfig.legal.governingLaw}.
          </p>
        </section>
      </div>
    </div>
  );
}
