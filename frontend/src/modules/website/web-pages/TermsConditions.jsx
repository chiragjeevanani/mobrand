import React from 'react';
import { ShieldCheck, UserCheck, CreditCard, ShoppingBag, Ban, Shield, Scale, HelpCircle } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const TermsConditions = () => {
  const seoKeywords = [
    "Multi-business commerce platform",
    "Vendor management system",
    "Online ordering platform",
    "Business management software",
    "E-commerce platform terms",
    "SaaS platform for businesses",
    "Vendor subscription services",
    "Online business platform India"
  ];

  const sections = [
    {
      id: "about-terms",
      title: "About These Terms",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Mobrand. These Terms & Conditions govern your access to and use of the Mobrand website, mobile applications, vendor dashboard, customer applications, and related services.
          </p>
          <p>
            By accessing or using Mobrand, you agree to comply with and be bound by these Terms & Conditions.
          </p>
          <p>
            Mobrand is an all-in-one multi-business commerce platform that enables businesses such as restaurants, grocery stores, retail shops, wholesalers, and service providers to manage and grow their business online.
          </p>
        </div>
      )
    },
    {
      id: "user-eligibility",
      title: "User Eligibility",
      icon: <UserCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>By registering or using Mobrand, you confirm and warrant that:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>You are at least 18 years old and possess legal capacity.</li>
            <li>You have full legal authority to operate a business or use this platform.</li>
            <li>The business and registration information provided by you is accurate and complete.</li>
          </ul>
        </div>
      )
    },
    {
      id: "vendor-accounts",
      title: "Vendor Accounts",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Business owners may create vendor accounts to access Mobrand services. Vendors are solely responsible for:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Maintaining account confidentiality and login credentials.</li>
            <li>Managing products, services, pricing, stock, and business information.</li>
            <li>Ensuring full compliance with local, state, and national laws.</li>
            <li>Providing accurate order, delivery, and invoice details to customers.</li>
          </ul>
          <p className="text-slate-500 text-sm">
            Mobrand reserves the right to suspend or terminate accounts involved in fraud, abuse, policy violations, or non-compliance.
          </p>
        </div>
      )
    },
    {
      id: "subscription-pricing",
      title: "Subscription & Pricing",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand may offer different subscription plans including Basic, Pro, and Premium services. Subscription charges may include setup fees, recurring monthly charges, and premium service fees.
          </p>
          <p>
            Prices and plan details may be updated at any time with prior notice. Continued use of the platform after updates indicates acceptance of new rates.
          </p>
        </div>
      )
    },
    {
      id: "payments",
      title: "Payments",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Payments made through Mobrand are processed via secure third-party payment gateways. Users agree to:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Provide valid, current, and authorized payment information.</li>
            <li>Authorize applicable charges, fees, and subscription taxes.</li>
            <li>Pay all subscription and premium service fees on time.</li>
          </ul>
          <p className="text-slate-500 text-sm italic">
            Mobrand is not responsible for payment gateway failures, transaction declines, or third-party banking issues.
          </p>
        </div>
      )
    },
    {
      id: "orders-transactions",
      title: "Orders & Transactions",
      icon: <ShoppingBag className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Customers placing orders through Mobrand are responsible for reviewing product, description, and pricing details before confirmation.</p>
          <p>Vendors are solely responsible for:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Product availability and stock accuracy.</li>
            <li>Accurate item pricing, descriptions, and taxes.</li>
            <li>Timely order preparation, packaging, and fulfillment.</li>
            <li>Quality, safety, and merchantability of products/services.</li>
          </ul>
          <p>
            Mobrand acts as a technology facilitator and is not directly responsible for vendor-specific product or service quality.
          </p>
        </div>
      )
    },
    {
      id: "prohibited-activities",
      title: "Prohibited Activities",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Users, vendors, and customers are strictly prohibited from:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Using the platform for illegal transactions or activities.</li>
            <li>Uploading false, fraudulent, or misleading business/product information.</li>
            <li>Attempting unauthorized access, reverse-engineering, or hacking of the system.</li>
            <li>Distributing spam, malware, or harmful automated software.</li>
            <li>Violating third-party or Mobrand intellectual property rights.</li>
          </ul>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: <Shield className="w-5 h-5" />,
      content: (
        <p>
          All Mobrand branding, software, source code, dashboards, logos, content, and platform technology are protected by intellectual property laws and belong solely to Mobrand. Users may not copy, reproduce, modify, or distribute Mobrand content without explicit written permission.
        </p>
      )
    },
    {
      id: "limitation-liability",
      title: "Limitation of Liability",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>
            Mobrand provides services on an “as is” and “as available” basis. We do not guarantee uninterrupted service availability, error-free performance, or specific business results or earnings.
          </p>
          <p>
            Mobrand shall not be liable for indirect, incidental, or consequential damages arising from platform usage, banking errors, or transaction failures.
          </p>
        </div>
      )
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <p>
          These Terms & Conditions and any related agreements shall be governed by the laws of India. Any disputes or claims arising out of platform usage shall be subject to the exclusive jurisdiction of applicable courts in India.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Terms & Conditions"
      subtitle="The rules, terms, and agreements governing platform usage"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default TermsConditions;
