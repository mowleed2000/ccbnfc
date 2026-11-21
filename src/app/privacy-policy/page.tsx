import React from "react";
import { storeConfig } from "@/config/store.config";
import { ShieldCheck, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Privacy & Cookie Policy",
  description: "UK GDPR and Data Protection compliance framework for customer data, link programming, and cookies.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-10">
      <div className="space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-[#245CF5]">
          Compliance &amp; Data Protection
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#15171B] tracking-tight">
          Privacy &amp; Cookie Policy
        </h1>
        <p className="text-xs sm:text-sm text-[#626A75]">
          Last updated: November 2026 &bull; Compliant with UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
        </p>
      </div>

      {!storeConfig.legal.isVerified && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-900">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong className="block font-semibold">Pre-Launch Legal Audit Dependency:</strong>
            The data controller legal entity and registered address placeholders below must be verified by the owner prior to public commercial launch.
          </div>
        </div>
      )}

      <div className="space-y-8 text-xs sm:text-sm text-[#626A75] leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#15171B]">1. Data Controller Information</h2>
          <p>
            The data controller responsible for personal information collected through this website is:
          </p>
          <div className="p-4 bg-[#F5F6F8] rounded-xl border border-[#E5E7EB] space-y-1 font-mono text-xs text-[#15171B]">
            <p>Entity: {storeConfig.legal.companyName}</p>
            <p>Company Registration: {storeConfig.legal.companyNumber}</p>
            <p>Registered Office: {storeConfig.legal.registeredOffice}</p>
            <p>Contact Email: {storeConfig.contact.email}</p>
          </div>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#15171B]">2. Information We Collect</h2>
          <p>We collect and process the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Customer Contact Details:</strong> Name, business name, billing address, delivery address, email, and telephone number.</li>
            <li><strong>Personalisation &amp; Programming Data:</strong> Destination links, Google Review URLs, social media handles, and digital menu URLs submitted for hardware configuration.</li>
            <li><strong>Transaction Records:</strong> Order references, payment provider confirmation tokens, and item quantities. We do not store raw card numbers.</li>
            <li><strong>Technical &amp; Analytics Data:</strong> IP addresses, browser types, and anonymised site usage data where consent has been provided.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#15171B]">3. Lawful Basis for Processing</h2>
          <p>
            Under UK GDPR Article 6, we process your information under:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contractual Necessity:</strong> To process and deliver your order, program your hardware, and communicate dispatch updates.</li>
            <li><strong>Legal Obligation:</strong> To maintain commercial accounting records and comply with UK VAT obligations.</li>
            <li><strong>Legitimate Interests:</strong> To protect our website against malicious transactions, spam, and fraud.</li>
            <li><strong>Consent:</strong> For non-essential analytics and marketing cookies, which can be modified or withdrawn at any time.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#15171B]">4. Cookies &amp; Tracking Technologies</h2>
          <p>
            Our website uses strictly necessary cookies to maintain your shopping basket state and session security. Non-essential analytical cookies are only loaded after explicit opt-in via our Cookie Settings banner.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-[#15171B]">5. Your Data Protection Rights</h2>
          <p>
            You have the right to request access, rectification, erasure, or restriction of your personal data, and to lodge a complaint with the Information Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noreferrer" className="text-[#245CF5] underline">ico.org.uk</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
