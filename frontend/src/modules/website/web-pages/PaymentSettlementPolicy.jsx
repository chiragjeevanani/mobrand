import React from 'react';
import { CreditCard, Landmark, QrCode, ShieldCheck, HelpCircle, ArrowRightLeft } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const PaymentSettlementPolicy = () => {
  const seoKeywords = [
    "Centralized payment system",
    "Vendor settlement platform",
    "QR payment infrastructure",
    "Multi-vendor payment management",
    "SaaS payment platform",
    "Vendor QR payment system",
    "Online business payment solution",
    "Business payment infrastructure India"
  ];

  const sections = [
    {
      id: "centralized-processing",
      title: "Centralized Payment Processing",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Payments made through Mobrand are processed via our centralized infrastructure before being settled to vendors. This enables secure transactions, centralized order processing, and efficient settlement management.</p>
        </div>
      )
    },
    {
      id: "vendor-settlement",
      title: "Vendor Settlement System",
      icon: <Landmark className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Settlements are processed daily or weekly based on vendor agreements. Timelines depend on gateway processing and banking systems. Mobrand reserves the right to hold settlements for security verification if needed.</p>
        </div>
      )
    },
    {
      id: "qr-payment",
      title: "QR Payment & Identification",
      icon: <QrCode className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand provides branded QR solutions and vendor-specific IDs. Transaction records may display identifiers like <strong>MOBRAND-STORE</strong> or <strong>MOBRAND-PAY</strong> depending on the payment provider.</p>
        </div>
      )
    },
    {
      id: "supported-methods",
      title: "Supported Payment Methods",
      icon: <ArrowRightLeft className="w-5 h-5" />,
      content: (
        <div className="flex flex-wrap gap-2 text-sm font-semibold">
          {["UPI Payments", "QR Code", "Debit/Credit Cards", "Wallet Payments", "Net Banking"].map((method, i) => (
            <span key={i} className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-xl text-slate-700">
              {method}
            </span>
          ))}
        </div>
      )
    },
    {
      id: "security-compliance",
      title: "Security & Compliance",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <p>Mobrand uses secure third-party providers. Sensitive banking data is not stored on our servers. Processing is subject to banking regulations and compliance procedures.</p>
      )
    },
    {
      id: "platform-role",
      title: "Platform Role & Responsibility",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <p>Mobrand facilitates commerce and payment support. Vendor-specific products and fulfillment remain the responsibility of the merchant unless specified otherwise.</p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Payment & Settlement Policy"
      subtitle="The structural framework for secure digital transactions and merchant settlements"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default PaymentSettlementPolicy;
