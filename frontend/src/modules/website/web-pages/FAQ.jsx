import React from 'react';
import { HelpCircle, Info, Briefcase, Smartphone, CreditCard, RefreshCcw } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const FAQ = () => {
  const seoKeywords = [
    "Multi-business commerce platform FAQ",
    "Vendor management software questions",
    "SaaS business platform India",
    "White-label app services FAQ",
    "Online business management support",
    "Vendor onboarding platform",
    "Business subscription platform FAQ"
  ];

  const sections = [
    {
      id: "general-questions",
      title: "General Questions",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">What is Mobrand?</h4>
            <p className="text-sm text-slate-600">Mobrand is a multi-business SaaS platform that helps businesses like restaurants, grocery stores, and retail shops manage their digital operations through websites and mobile apps.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Who can use Mobrand?</h4>
            <p className="text-sm text-slate-600">Supports Restaurants, Grocery Stores, Retail Shops, Electronics, Fashion, Wholesale, and Service Providers.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Do I need technical knowledge?</h4>
            <p className="text-sm text-slate-600">No. Mobrand is designed to be simple and user-friendly for all business owners.</p>
          </div>
        </div>
      )
    },
    {
      id: "vendor-subscription",
      title: "Vendor & Subscription Questions",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">How can I register my business?</h4>
            <p className="text-sm text-slate-600">Register through our website by selecting a suitable plan and submitting business details.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">What happens if I miss a subscription payment?</h4>
            <p className="text-sm text-slate-600">Failure to pay on time may result in temporary account suspension until payment is completed.</p>
          </div>
        </div>
      )
    },
    {
      id: "whitelabel-custom-app",
      title: "White-Label & Custom App Questions",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Does Mobrand provide custom branded apps?</h4>
            <p className="text-sm text-slate-600">Yes. Premium vendors may request white-label mobile app solutions with custom branding.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Will my app be published on the Play Store?</h4>
            <p className="text-sm text-slate-600">Mobrand provides assistance for eligible premium clients. Approval depends on third-party policies.</p>
          </div>
        </div>
      )
    },
    {
      id: "orders-payments-delivery",
      title: "Orders, Payments & Delivery",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">How are payments processed?</h4>
            <p className="text-sm text-slate-600">Processed through secure third-party payment gateways.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Who handles deliveries?</h4>
            <p className="text-sm text-slate-600">Depends on the vendor, business type, or specific delivery arrangements.</p>
          </div>
        </div>
      )
    },
    {
      id: "refund-account",
      title: "Refund & Account Questions",
      icon: <RefreshCcw className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Are setup fees refundable?</h4>
            <p className="text-sm text-slate-600">Generally, setup and customization charges are non-refundable once work begins.</p>
          </div>
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Frequently Asked Questions"
      subtitle="Find quick answers to common questions about Mobrand's features, pricing, and support"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default FAQ;
