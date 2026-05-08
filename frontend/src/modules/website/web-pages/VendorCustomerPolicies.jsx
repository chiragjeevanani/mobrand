import React from 'react';
import { ShieldAlert, BookOpen, Settings, UserPlus, LifeBuoy, Sparkles, Building, PhoneCall } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const VendorCustomerPolicies = () => {
  const seoKeywords = [
    "Multi-business commerce platform",
    "Vendor management software",
    "SaaS business platform",
    "Online business management",
    "Vendor onboarding system",
    "White-label business platform",
    "Business support platform India"
  ];

  const sections = [
    {
      id: "terms-intro",
      title: "Vendor & Customer Terms",
      icon: <BookOpen className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            At Mobrand, we are committed to providing a secure, reliable, and business-friendly platform for both vendors and customers. These policies help maintain trust, transparency, and smooth operations across the Mobrand ecosystem.
          </p>
          <p>
            By using Mobrand, both vendors and customers agree to follow the platform rules and policies. Users must:
          </p>
          <ul className="space-y-1.5 pl-4 list-disc text-sm">
            <li>Provide accurate, genuine, and verified registration details.</li>
            <li>Use the platform responsibly and avoid unauthorized automation.</li>
            <li>Follow all local, state, and central commerce regulations.</li>
            <li>Respect community guidelines, platform safety, and merchant-consumer ethics.</li>
          </ul>
          <p className="text-slate-500 text-xs italic mt-2">
            Mobrand reserves the final right to suspend accounts involved in fraud, abuse, spam, duplicate setups, or policy violations.
          </p>
        </div>
      )
    },
    {
      id: "usage-policies",
      title: "Platform Usage Policies",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand is designed to provide a secure and professional online business environment. Users may not:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Upload false or misleading store items, descriptions, or reviews.</li>
            <li>Use the platform for any illegal trades, transactions, or communications.</li>
            <li>Attempt unauthorized access to our APIs, source code, database, or client files.</li>
            <li>Distribute harmful viruses, malware, spam, or tracking cookies.</li>
            <li>Misuse or scrape vendor, client, or consumer personal databases.</li>
          </ul>
          <p>We encourage all users to maintain proper account security, two-factor authentication, and password confidentiality.</p>
        </div>
      )
    },
    {
      id: "vendor-responsibilities",
      title: "Vendor Responsibilities",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Vendors utilizing Mobrand to run their digital storefront are responsible for:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Maintaining accurate catalog items, menus, services, and live pricing.</li>
            <li>Fulfilling customer orders promptly, correctly, and hygienically.</li>
            <li>Updating active business timings, holiday lists, and delivery coordinates.</li>
            <li>Resolving customer grievances regarding order delays or product damages directly.</li>
            <li>Maintaining necessary commercial licenses, certifications, and local clearances.</li>
          </ul>
        </div>
      )
    },
    {
      id: "onboarding-registration",
      title: "Vendor Onboarding & Registration",
      icon: <UserPlus className="w-5 h-5" />,
      content: (
        <p>
          Mobrand provides a simple and fast digital onboarding process for businesses. Vendors can register online, select appropriate subscription plans, upload initial catalogues, configure payment parameters, and go live digitally under 24 hours. Our coordinator assistance is available to guide small merchants through this transition completely free.
        </p>
      )
    },
    {
      id: "support-services",
      title: "Business Support Services",
      icon: <LifeBuoy className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>We provide comprehensive operational and digital support services including:</p>
          <ul className="space-y-1.5 list-none pl-1 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">🛠️ Onboarding & custom store building</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">⚙️ Advanced technical troubleshooting</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">💳 Subscription configuration & payment payouts</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">📱 White-label app publishing guides</li>
          </ul>
        </div>
      )
    },
    {
      id: "choose-mobrand",
      title: "Why Businesses Choose Mobrand",
      icon: <Sparkles className="w-5 h-5" />,
      content: (
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Easy-to-use business dashboards",
            "Extremely affordable, modular subscription plans",
            "Multi-business category architecture",
            "Premium, secure, and scalable cloud system",
            "Custom white-label app branding configurations"
          ].map((item, i) => (
            <li key={i} className="bg-slate-50 p-3 rounded-xl border border-slate-100 flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-mobrand-teal rounded-full shrink-0" />
              <span className="text-sm font-semibold text-slate-700">{item}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: "supported-categories",
      title: "Supported Business Categories",
      icon: <Building className="w-5 h-5" />,
      content: (
        <div className="flex flex-wrap gap-2">
          {[
            "Hotels & Restaurants",
            "Grocery Stores",
            "Electronics Shops",
            "Fashion & Garment Stores",
            "Furniture Businesses",
            "Hardware & Electrical Stores",
            "Wholesale Businesses",
            "Service Providers"
          ].map((cat, i) => (
            <span key={i} className="bg-slate-50 border border-slate-150 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
              {cat}
            </span>
          ))}
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Vendor & Customer Policies"
      subtitle="The governance guidelines establishing fair trade, security, and onboarding rules"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default VendorCustomerPolicies;
