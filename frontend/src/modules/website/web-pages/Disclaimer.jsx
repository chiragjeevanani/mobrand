import React from 'react';
import { FileText, Building, Users, AlertCircle, Share2, ShieldAlert, CheckCircle } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const Disclaimer = () => {
  const seoKeywords = [
    "SaaS platform disclaimer",
    "Multi-business commerce platform",
    "Vendor management disclaimer",
    "White-label business platform terms",
    "Online ordering platform disclaimer",
    "Business software liability disclaimer",
    "Technology platform disclaimer India"
  ];

  const sections = [
    {
      id: "platform-nature",
      title: "1. Platform Nature",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand operates primarily as a technology platform that connects businesses, vendors, and customers.
          </p>
          <p>Mobrand provides vendor management tools, online ordering systems, business dashboards, and white-label solutions. Mobrand does not manufacture, own, or directly control vendor products or services unless explicitly stated.</p>
        </div>
      )
    },
    {
      id: "vendor-responsibility",
      title: "2. Vendor Responsibility",
      icon: <Building className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Vendors using Mobrand are solely responsible for:</p>
          <ul className="space-y-1.5 list-none pl-1 text-sm grid grid-cols-1 sm:grid-cols-2 gap-2">
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">✅ Product quality & pricing</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">✅ Inventory availability</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">✅ Delivery fulfillment</li>
            <li className="p-2.5 bg-slate-50 border border-slate-100 rounded-lg">✅ Legal compliance</li>
          </ul>
        </div>
      )
    },
    {
      id: "customer-responsibility",
      title: "3. Customer Responsibility",
      icon: <Users className="w-5 h-5" />,
      content: (
        <p>
          Customers are responsible for reviewing product details before placing orders and providing accurate delivery/contact info. Customers should directly contact vendors regarding order-related concerns.
        </p>
      )
    },
    {
      id: "no-guarantees",
      title: "4. No Guaranteed Results",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <p>
          While Mobrand aims to provide reliable services, we do not guarantee specific business growth, sales performance, 100% platform uptime, or error-free operation. Business performance may vary depending on external factors.
        </p>
      )
    },
    {
      id: "third-party",
      title: "5. Third-Party Services",
      icon: <Share2 className="w-5 h-5" />,
      content: (
        <p>
          Mobrand integrates third-party services like payment gateways, analytics, and delivery partners. Mobrand is not responsible for failures, delays, or issues caused solely by these providers.
        </p>
      )
    },
    {
      id: "whitelabel-saas",
      title: "6. White-Label & SaaS Services",
      icon: <Building className="w-5 h-5" />,
      content: (
        <p>
          Solutions are subject to technical feasibility, platform limitations, and third-party platform policies (e.g., Play Store approvals). Mobrand does not guarantee approval on third-party marketplaces.
        </p>
      )
    },
    {
      id: "limitation-liability",
      title: "7. Limitation of Liability",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <p>
          Mobrand shall not be liable for business losses, data loss caused by external factors, delivery-related disputes, or indirect damages. Users acknowledge that digital platforms may experience technical limitations or downtime.
        </p>
      )
    },
    {
      id: "info-accuracy",
      title: "8. Information Accuracy",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <p>
          Mobrand attempts to keep platform information accurate but does not guarantee completeness or reliability of all info published by vendors, users, or third parties.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Platform Disclaimer"
      subtitle="The formal limitations of liability and responsibility boundaries for the Mobrand ecosystem"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default Disclaimer;
