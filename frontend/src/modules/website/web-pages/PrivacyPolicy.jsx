import React from 'react';
import { ShieldAlert, Database, HelpCircle, Lock, Info, BarChart, Eye, AlertCircle, FileText } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const PrivacyPolicy = () => {
  const seoKeywords = [
    "Multi-business commerce platform",
    "Vendor management software",
    "Online ordering platform",
    "Business management app",
    "E-commerce platform for businesses",
    "Restaurant and grocery management system",
    "SaaS platform for vendors",
    "Online business management software"
  ];

  const sections = [
    {
      id: "about-policy",
      title: "About This Policy",
      icon: <Info className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Welcome to Mobrand. Your privacy is important to us. This Privacy Policy explains how Mobrand collects, uses, stores, and protects your information when you use our website, mobile applications, vendor platform, and related services.
          </p>
          <p>
            Mobrand is an all-in-one multi-business commerce platform that helps restaurants, grocery stores, retail shops, wholesalers, and other businesses manage and grow their business online.
          </p>
          <p>
            By using Mobrand, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>
      )
    },
    {
      id: "information-we-collect",
      title: "Information We Collect",
      icon: <Database className="w-5 h-5" />,
      content: (
        <div className="space-y-6">
          <p>We may collect the following types of information to provide and improve our services:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
              <h4 className="text-base font-bold text-slate-800 mb-3 text-mobrand-teal">Personal Information</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Name</li>
                <li>• Mobile number</li>
                <li>• Email address</li>
                <li>• Business name</li>
                <li>• Business address</li>
                <li>• Payment details</li>
                <li>• GST or business verification details</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
              <h4 className="text-base font-bold text-slate-800 mb-3 text-mobrand-accent">Business Information</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• Store details</li>
                <li>• Product or menu information</li>
                <li>• Order details</li>
                <li>• Vendor account information</li>
              </ul>
            </div>

            <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl">
              <h4 className="text-base font-bold text-slate-800 mb-3 text-indigo-500">Technical Information</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>• IP address</li>
                <li>• Device information</li>
                <li>• Browser type</li>
                <li>• App usage data</li>
                <li>• Cookies and analytics data</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "how-we-use-information",
      title: "How We Use Your Information",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Mobrand uses the collected information for various essential business and security purposes:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Create and manage user accounts",
              "Provide vendor and customer services",
              "Process orders and payments",
              "Improve platform performance",
              "Provide customer support",
              "Send notifications and updates",
              "Prevent fraud and misuse",
              "Improve security and user experience"
            ].map((purpose, i) => (
              <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                <div className="w-1.5 h-1.5 rounded-full bg-mobrand-teal shrink-0" />
                <span className="text-sm font-semibold text-slate-700">{purpose}</span>
              </li>
            ))}
          </ul>
        </div>
      )
    },
    {
      id: "payment-security",
      title: "Payment & Transaction Security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand uses secure third-party payment gateways for processing payments. 
          </p>
          <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-2xl text-slate-700 text-sm">
            <strong>Security Notice:</strong> We do not store sensitive credit/debit card or banking details directly on our servers. All transactions are processed securely using industry-standard security and encryption practices.
          </div>
        </div>
      )
    },
    {
      id: "vendor-data",
      title: "Vendor & Business Data",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Business owners using Mobrand may upload product information, menus, store images, pricing details, and business contact details.
          </p>
          <p className="text-slate-500 text-sm italic">
            Please note: This information is uploaded for business operations and may be publicly visible to customers using the Mobrand platform.
          </p>
        </div>
      )
    },
    {
      id: "cookies-analytics",
      title: "Cookies & Analytics",
      icon: <BarChart className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Mobrand may use cookies and analytics tools to:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Improve website performance and speed</li>
            <li>Understand user behavior and navigation paths</li>
            <li>Enhance user experience and personalize features</li>
            <li>Measure traffic and engagement metrics</li>
          </ul>
          <p>Users can manage or disable cookies through their individual browser settings at any time.</p>
        </div>
      )
    },
    {
      id: "data-protection",
      title: "Data Protection",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            We implement reasonable technical and organizational security measures to protect user information from unauthorized access, data misuse, loss, or security breaches.
          </p>
          <p className="text-slate-500 text-sm">
            However, please note that no transmission of data over the internet or online platform can be guaranteed to be 100% secure.
          </p>
        </div>
      )
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      icon: <Eye className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Mobrand may integrate third-party services including payment gateways, analytics providers, cloud hosting services, and messaging or notification tools.</p>
          <p>
            These third-party providers operate independently and may have their own privacy policies. We encourage users to review them.
          </p>
        </div>
      )
    },
    {
      id: "user-rights",
      title: "User Rights",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Users have complete control over their personal data. You may:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Request access to the personal data we store about you</li>
            <li>Request correction or modification of inaccurate information</li>
            <li>Request deletion of your account and related data</li>
            <li>Contact us regarding any privacy or security concerns</li>
          </ul>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      title: "Children's Privacy",
      icon: <AlertCircle className="w-5 h-5" />,
      content: (
        <p>
          Mobrand services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we discover such data has been collected, we will take immediate steps to delete it.
        </p>
      )
    },
    {
      id: "policy-changes",
      title: "Changes to This Policy",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <p>
          Mobrand may update this Privacy Policy at any time. Updated versions will be posted on this page with the revised effective date. Your continued use of Mobrand services constitutes agreement to the updated policies.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Privacy Policy"
      subtitle="How we collect, protect, and handle your information"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default PrivacyPolicy;
