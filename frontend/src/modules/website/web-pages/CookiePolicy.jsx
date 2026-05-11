import React from 'react';
import { Cookie, HelpCircle, Eye, Settings, ShieldCheck, RefreshCw } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const CookiePolicy = () => {
  const seoKeywords = [
    "Cookie policy for SaaS platform",
    "Website cookie policy India",
    "Multi-business commerce platform",
    "Vendor management platform cookies",
    "Online business platform privacy",
    "Website tracking policy",
    "Business platform analytics policy"
  ];

  const sections = [
    {
      id: "what-are-cookies",
      title: "What Are Cookies?",
      icon: <Cookie className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>
            Cookies are small text files stored on your device when you visit a website or use an application.
          </p>
          <p>
            They help websites and platforms remember user preferences, improve performance, and provide a better browsing experience.
          </p>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "How Mobrand Uses Cookies",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-2">
          <p>Mobrand may use cookies and similar technologies to:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm pl-2">
            <li className="flex items-center gap-2">🔹 Improve website functionality</li>
            <li className="flex items-center gap-2">🔹 Remember user preferences</li>
            <li className="flex items-center gap-2">🔹 Maintain secure login sessions</li>
            <li className="flex items-center gap-2">🔹 Analyze website traffic</li>
            <li className="flex items-center gap-2">🔹 Enhance user experience</li>
            <li className="flex items-center gap-2">🔹 Support marketing activities</li>
          </ul>
        </div>
      )
    },
    {
      id: "types-of-cookies",
      title: "Types of Cookies We May Use",
      icon: <Settings className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Essential Cookies</h4>
            <p className="text-xs text-slate-600">Necessary for platform functionality including login access, security verification, and session management.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Performance & Analytics Cookies</h4>
            <p className="text-xs text-slate-600">Help us understand website traffic, user interactions, popular pages, and platform performance.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Functional Cookies</h4>
            <p className="text-xs text-slate-600">Remember user preferences such as language settings, location preferences, and device settings.</p>
          </div>
          <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl">
            <h4 className="font-bold text-slate-800 text-sm mb-1">Marketing & Advertising Cookies</h4>
            <p className="text-xs text-slate-600">Used to show relevant advertisements, measure marketing effectiveness, and improve promotional campaigns.</p>
          </div>
        </div>
      )
    },
    {
      id: "third-party",
      title: "Third-Party Services",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <p>
          Mobrand may use third-party services including analytics providers, advertising platforms, payment gateways, and social media integrations. These third parties may place cookies or tracking technologies on your device.
        </p>
      )
    },
    {
      id: "managing-cookies",
      title: "Managing Cookies",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Users may disable cookies through browser settings, delete stored cookies, or limit tracking preferences. Please note that disabling certain cookies may affect website functionality.</p>
        </div>
      )
    },
    {
      id: "data-privacy",
      title: "Data & Privacy",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <p>
          Cookie-related data may be processed in accordance with the Mobrand Privacy Policy. Mobrand does not sell sensitive personal information collected through cookies.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Cookie Policy"
      subtitle="How Mobrand utilizes cookies and tracking technologies to improve your business experience"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default CookiePolicy;
