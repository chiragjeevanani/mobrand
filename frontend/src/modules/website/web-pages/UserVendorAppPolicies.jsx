import React from 'react';
import { Smartphone, ShieldCheck, Truck, UserX, Briefcase, Lock, CreditCard, Layers } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const UserVendorAppPolicies = () => {
  const seoKeywords = [
    "User app privacy policy",
    "Vendor app terms and conditions",
    "Multi-business commerce platform",
    "Vendor management software",
    "SaaS business platform",
    "White-label app policies",
    "Online ordering platform India",
    "Vendor onboarding system"
  ];

  const sections = [
    {
      id: "user-app-terms",
      title: "User App Terms & Conditions",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>By using the Mobrand User App, users agree to:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Provide accurate account information</li>
            <li>Use the app responsibly</li>
            <li>Follow applicable laws and regulations</li>
            <li>Respect vendor and platform policies</li>
          </ul>
          <p className="font-semibold text-slate-800">Users may not:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2 text-red-600/80">
            <li>Use fake information</li>
            <li>Misuse offers or payments</li>
            <li>Attempt unauthorized access</li>
            <li>Engage in fraudulent activities</li>
          </ul>
          <p className="text-xs text-slate-500 italic">Mobrand reserves the right to suspend accounts involved in policy violations.</p>
        </div>
      )
    },
    {
      id: "user-privacy",
      title: "User Privacy Policy",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand may collect: Name, Mobile number, Email address, Delivery address, Order history, and Device/app usage data.</p>
          <p className="font-semibold text-slate-800">This information is used to:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Process orders</li>
            <li>Improve app performance</li>
            <li>Provide customer support</li>
            <li>Send updates and notifications</li>
          </ul>
          <p className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-sm text-blue-800">
            <strong>Security Note:</strong> Mobrand does not sell sensitive user data.
          </p>
        </div>
      )
    },
    {
      id: "user-refund-delivery",
      title: "User Refund & Delivery Policy",
      icon: <Truck className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Refunds may depend on vendor policies, order status, delivery issues, and payment verification.</p>
          <p>Delivery times may vary depending on vendor availability and operational conditions. Mobrand acts as a technology platform connecting customers and vendors.</p>
        </div>
      )
    },
    {
      id: "user-account-deletion",
      title: "Account Deletion Policy",
      icon: <UserX className="w-5 h-5" />,
      content: (
        <p>
          Users may request account deletion by contacting: <a href="mailto:brand@mobrand.in" className="text-mobrand-teal font-semibold">brand@mobrand.in</a>. Mobrand may retain certain information where required by law or operational purposes.
        </p>
      )
    },
    {
      id: "vendor-app-terms",
      title: "Vendor App Terms & Conditions",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>By using the Mobrand Vendor App, vendors agree to:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Maintain accurate business information</li>
            <li>Manage orders properly</li>
            <li>Follow legal business requirements</li>
            <li>Provide quality products/services</li>
          </ul>
          <p className="font-semibold text-slate-800">Vendors are responsible for:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Pricing and product details</li>
            <li>Customer communication</li>
            <li>Order fulfillment</li>
            <li>Delivery management</li>
          </ul>
        </div>
      )
    },
    {
      id: "vendor-privacy",
      title: "Vendor Privacy Policy",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand collects business names, owner details, contact info, product/pricing data, and transaction records for onboarding and business management.</p>
        </div>
      )
    },
    {
      id: "subscription-terms",
      title: "Subscription & Payment Terms",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Vendor services may include setup charges, monthly subscription fees, and white-label service charges. Subscription fees must be paid on time; failure to pay may result in account suspension.</p>
        </div>
      )
    },
    {
      id: "whitelabel-terms",
      title: "White-Label & SaaS Terms",
      icon: <Layers className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Premium vendors may request custom branded apps, Play Store publishing support, and custom themes. Custom setup and development charges are generally non-refundable once work begins.</p>
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="User & Vendor App Policies"
      subtitle="Comprehensive terms and privacy guidelines for both Mobrand User and Vendor applications"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default UserVendorAppPolicies;
