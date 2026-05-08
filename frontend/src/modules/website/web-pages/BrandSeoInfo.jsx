import React from 'react';
import { Sparkles, Compass, Target, Smartphone, HeartHandshake, Eye, ShieldAlert, Award } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const BrandSeoInfo = () => {
  const seoKeywords = [
    "Multi-business commerce platform",
    "Vendor management software",
    "Online business management platform",
    "SaaS business platform India",
    "White-label business solutions",
    "Business automation platform",
    "E-commerce management system",
    "Online ordering platform",
    "Vendor onboarding system",
    "Scalable business software"
  ];

  const sections = [
    {
      id: "brand-story",
      title: "Our Brand Story",
      icon: <Sparkles className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-slate-800 leading-relaxed">
            Building the Future of Digital Business Management
          </p>
          <p>
            Mobrand was created with a clear vision: to simplify online business management for businesses of all sizes. Many merchants struggle with managing multiple, disconnected systems for order tracking, payment processing, customer retention, and brand customization.
          </p>
          <p>
            Mobrand brings everything together into a unified, scalable platform that is incredibly easy to use, highly affordable, and fundamentally business-focused. We empower local, regional, and national brands with technology that accelerates growth.
          </p>
        </div>
      )
    },
    {
      id: "brand-mission",
      title: "Our Mission",
      icon: <Target className="w-5 h-5" />,
      content: (
        <p>
          To provide highly scalable, exceptionally affordable, and user-friendly digital commerce software for modern businesses across India. We aim to help brick-and-mortar storefronts go online quickly, manage complex backends smoothly, reach wider regional audiences, and optimize sales margins through automation.
        </p>
      )
    },
    {
      id: "brand-vision",
      title: "Our Vision",
      icon: <Compass className="w-5 h-5" />,
      content: (
        <p>
          To become India's leading multi-business commerce SaaS framework. We believe every entrepreneur — whether running a small local tea bar, a busy city hotel, or a multi-district wholesale network — deserves instant, barrier-free access to world-class software without technical complexity or huge upfront costs.
        </p>
      )
    },
    {
      id: "business-platform",
      title: "Business-Focused Platform",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand coordinates multiple key operations into a single cohesive system:</p>
          <ul className="space-y-1.5 list-none pl-1 text-sm grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🎨 Customized visual templates showing your store beautifully</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">⚡ Fast-loading catalogs allowing instantaneous checkouts</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">📊 Interactive analytical graphs capturing peak ordering patterns</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🔐 Multi-tier dashboards separating staff permissions</li>
          </ul>
        </div>
      )
    },
    {
      id: "industries-supported",
      title: "Industries We Support",
      icon: <Award className="w-5 h-5" />,
      content: (
        <div className="flex flex-wrap gap-2.5">
          {[
            "Hotels & Restaurants",
            "Fast Food & Bakery Businesses",
            "Grocery & Retail Stores",
            "Electronics & Mobile Shops",
            "Fashion & Garment Businesses",
            "Furniture & Hardware Stores",
            "Wholesale Businesses",
            "Service Providers"
          ].map((ind, i) => (
            <span key={i} className="bg-slate-100 hover:bg-mobrand-teal/10 hover:text-mobrand-teal text-slate-700 px-4.5 py-2.5 rounded-xl text-xs md:text-sm font-semibold border border-slate-200 transition-colors cursor-default">
              {ind}
            </span>
          ))}
        </div>
      )
    },
    {
      id: "choose-mobrand",
      title: "Why Businesses Choose Mobrand",
      icon: <HeartHandshake className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Merchants choose Mobrand to launch and scale because of our focus on core values:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium">
            {[
              "Easy-to-use business interface",
              "Pocket-friendly plans starting free",
              "Full vendor management dashboards",
              "Dynamic white-label visual customizations",
              "Highly secure hosting servers",
              "Dedicated technical helper setup",
              "Multi-industry flexible backend"
            ].map((reason, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-mobrand-teal shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "seo-highlights",
      title: "SEO Structure Highlights",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Our platform incorporates search engine optimization principles directly into customer pages:</p>
          <ul className="space-y-2 list-disc list-inside text-sm text-slate-600 pl-2">
            <li>Search engine optimized heading structures (`H1` through `H6` nesting).</li>
            <li>Business-focused keyword targeting capturing local commerce queries.</li>
            <li>Industry-specific structured schemas enhancing Google rich snippet indexes.</li>
            <li>Optimized page sizes rendering lightning-fast and lifting Core Web Vitals score.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Brand, SEO & Business Information"
      subtitle="The brand values, architectural parameters, and search engine optimizations guiding Mobrand"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default BrandSeoInfo;
