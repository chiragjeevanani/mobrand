import React from 'react';
import { Info, Users, Layers, Compass, TrendingUp, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const AboutUs = () => {
  const seoKeywords = [
    "Multi-business commerce platform",
    "Vendor management software",
    "Online business management platform",
    "SaaS platform for businesses",
    "Restaurant and grocery management system",
    "White-label business app solutions",
    "E-commerce platform India",
    "Business automation platform"
  ];

  const sections = [
    {
      id: "about-mobrand",
      title: "About Mobrand",
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-lg font-medium text-slate-800 leading-relaxed">
            Mobrand is an all-in-one multi-business commerce platform designed to help businesses manage, grow, and scale their operations online.
          </p>
          <p>
            We provide powerful digital solutions for restaurants, grocery stores, retail shops, wholesalers, service providers, and many other business categories through a single unified platform.
          </p>
          <p>
            Our goal is simple — make online business management easy, affordable, and accessible for every business owner.
          </p>
        </div>
      )
    },
    {
      id: "who-we-are",
      title: "Who We Are",
      icon: <Users className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand is built for modern businesses that want to simplify operations and reach more customers digitally. We combine technology, automation, and user-friendly tools to create a complete business ecosystem that supports:
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
            {[
              "Online ordering",
              "Vendor management",
              "Customer engagement",
              "Payment integration",
              "Product and inventory management",
              "Business analytics"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2 bg-slate-50 border border-slate-100 p-3 rounded-xl hover:bg-mobrand-teal/5 hover:border-mobrand-teal/10 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-mobrand-teal shrink-0" />
                <span className="text-slate-700 text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            Whether you run a restaurant, grocery store, retail shop, or wholesale business, Mobrand helps you manage everything from one place.
          </p>
        </div>
      )
    },
    {
      id: "what-we-offer",
      title: "What We Offer",
      icon: <Layers className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Multi-Business Commerce Platform",
              desc: "Mobrand supports multiple industries and business categories under one scalable platform."
            },
            {
              title: "Vendor Dashboard",
              desc: "Business owners can easily manage products, services, orders, customers, and payments."
            },
            {
              title: "Customer Mobile Experience",
              desc: "Customers can browse businesses, place orders, and interact with vendors through a smooth digital experience."
            },
            {
              title: "Subscription-Based Services",
              desc: "Affordable monthly plans make it easy for businesses of all sizes to get started."
            },
            {
              title: "White-Label Solutions",
              desc: "We also provide premium custom-branded app solutions for businesses that want their own identity and branding."
            }
          ].map((offer, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-5 rounded-2xl hover:shadow-sm transition-all">
              <h4 className="text-base font-bold text-slate-800 mb-2">{offer.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{offer.desc}</p>
            </div>
          ))}
        </div>
      )
    },
    {
      id: "our-vision",
      title: "Our Vision",
      icon: <Compass className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 text-base">
            To become one of India’s leading digital commerce platforms helping businesses grow faster through technology.
          </p>
          <p className="text-slate-600">
            We believe every business — small or large — deserves access to modern digital tools without complexity.
          </p>
        </div>
      )
    },
    {
      id: "our-mission",
      title: "Our Mission",
      icon: <Sparkles className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-700 text-base">
            To simplify online business management and help businesses build a stronger digital presence.
          </p>
          <p className="text-slate-600">
            We are focused on creating technology solutions that are practical, scalable, and growth-oriented.
          </p>
        </div>
      )
    },
    {
      id: "why-businesses-choose-us",
      title: "Why Businesses Choose Mobrand",
      icon: <TrendingUp className="w-5 h-5" />,
      content: (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            "Easy-to-use platform",
            "Affordable pricing plans",
            "Fast onboarding process",
            "Business-focused features",
            "Dedicated support",
            "Scalable technology",
            "Multi-category support"
          ].map((reason, i) => (
            <li key={i} className="bg-slate-50 hover:bg-indigo-50/50 border border-slate-100 p-3.5 rounded-xl flex items-center gap-3 transition-colors">
              <div className="w-2 h-2 rounded-full bg-mobrand-accent shrink-0" />
              <span className="text-slate-700 text-sm font-semibold">{reason}</span>
            </li>
          ))}
        </ul>
      )
    },
    {
      id: "industries-supported",
      title: "Industries We Support",
      icon: <Building2 className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            Mobrand supports a wide range of business categories including:
          </p>
          <div className="flex flex-wrap gap-2.5">
            {[
              "Hotels & Restaurants",
              "Fast Food & Bakery",
              "Grocery & Retail Stores",
              "Electronics & Mobile Shops",
              "Hardware & Electrical Stores",
              "Textile & Garment Businesses",
              "Furniture & Lifestyle Stores",
              "Wholesale Businesses",
              "Service Providers"
            ].map((industry, i) => (
              <span key={i} className="bg-slate-100 hover:bg-mobrand-teal/10 hover:text-mobrand-teal text-slate-700 font-medium text-xs md:text-sm px-4 py-2 rounded-xl border border-slate-200/60 transition-colors cursor-default">
                {industry}
              </span>
            ))}
          </div>
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="About Us"
      subtitle="Empowering Businesses to Go Digital"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default AboutUs;
