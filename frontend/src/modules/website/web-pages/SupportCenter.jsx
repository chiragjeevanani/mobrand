import React from 'react';
import { LifeBuoy, Users, Briefcase, Smartphone, Mail, Phone, Globe, Clock } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const SupportCenter = () => {
  const seoKeywords = [
    "Business support platform India",
    "Vendor support center",
    "SaaS platform help page",
    "Online business management support",
    "White-label app support",
    "Vendor onboarding assistance",
    "Multi-business commerce platform support",
    "Technical support for business software"
  ];

  const sections = [
    {
      id: "support-services",
      title: "Support Services",
      icon: <LifeBuoy className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Mobrand provides support for vendor onboarding, account setup, subscription billing, technical troubleshooting, and white-label app assistance.</p>
        </div>
      )
    },
    {
      id: "vendor-support",
      title: "Vendor Support",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Business owners can get help with business registration, product setup, order management, and dashboard usage.</p>
        </div>
      )
    },
    {
      id: "customer-support",
      title: "Customer Support",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Customers can contact us regarding order issues, delivery concerns, payment problems, or account assistance.</p>
        </div>
      )
    },
    {
      id: "whitelabel-support",
      title: "White-Label & SaaS Support",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <p>Premium businesses receive support for custom app setup, branding integration, and Play Store publishing assistance.</p>
      )
    },
    {
      id: "contact-info",
      title: "Contact Mobrand Support",
      icon: <Phone className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <Mail className="w-5 h-5 text-mobrand-teal" />
            <div className="text-sm">
              <p className="font-bold">Email Support</p>
              <a href="mailto:brand@mobrand.in" className="text-slate-600">brand@mobrand.in</a>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <Globe className="w-5 h-5 text-mobrand-teal" />
            <div className="text-sm">
              <p className="font-bold">Website</p>
              <a href="https://mobrand.in" className="text-slate-600">mobrand.in</a>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex items-center gap-3">
            <Clock className="w-5 h-5 text-mobrand-teal" />
            <div className="text-sm">
              <p className="font-bold">Working Hours</p>
              <p className="text-slate-600">Mon – Sat | 10 AM – 7 PM</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Support Center"
      subtitle="Resources and help channels for Mobrand vendors, customers, and partners"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default SupportCenter;
