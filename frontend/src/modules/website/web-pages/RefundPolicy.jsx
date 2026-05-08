import React from 'react';
import { RefreshCw, Ban, CheckCircle, CreditCard, AlertTriangle, LifeBuoy, FileText } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const RefundPolicy = () => {
  const seoKeywords = [
    "Refund policy for SaaS platform",
    "Vendor subscription cancellation",
    "Business software refund policy",
    "E-commerce platform cancellation policy",
    "Multi-business commerce platform policy",
    "White-label app refund terms",
    "Subscription management services India"
  ];

  const sections = [
    {
      id: "policy-intro",
      title: "Introduction",
      icon: <RefreshCw className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Thank you for choosing Mobrand. We are dedicated to providing excellent SaaS commerce and business management services.
          </p>
          <p>
            This Refund & Cancellation Policy explains how refunds, cancellations, and subscription-related requests are handled for Mobrand services.
          </p>
        </div>
      )
    },
    {
      id: "subscription-services",
      title: "Subscription Services",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Mobrand offers subscription-based services for businesses including:</p>
          <ul className="space-y-2 list-disc list-inside pl-2">
            <li>Vendor dashboard access</li>
            <li>Online business management tools</li>
            <li>Mobile application services</li>
            <li>E-commerce platform features</li>
            <li>White-label business solutions</li>
          </ul>
          <p>Subscription plans may include one-time setup fees and recurring billing charges.</p>
        </div>
      )
    },
    {
      id: "setup-fees",
      title: "Setup Fees",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>
            Setup fees paid for account creation, onboarding, custom configuration, branding, or app setup are generally <strong>non-refundable</strong>.
          </p>
          <p>This includes charges for:</p>
          <ul className="space-y-1.5 pl-4 list-disc text-sm">
            <li>Business onboarding and technical setup</li>
            <li>White-label application initialization</li>
            <li>Google Play Store/App Store publishing assistance</li>
            <li>Custom logos, brand tailoring, and design configuration</li>
            <li>Dedicated developer assistance and consulting hours</li>
          </ul>
        </div>
      )
    },
    {
      id: "monthly-cancellation",
      title: "Monthly Subscription Cancellation",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Users may cancel their recurring subscription plan at any time through their dashboard or by contacting support.</p>
          <p>Upon cancellation:</p>
          <ul className="space-y-1.5 pl-4 list-disc text-sm">
            <li>Future recurring billing charges will be stopped instantly.</li>
            <li>Existing subscription benefits and services will remain active until the end of the current billing cycle.</li>
            <li>No partial refunds or credits will be provided for unused subscription days or periods.</li>
          </ul>
        </div>
      )
    },
    {
      id: "refund-eligibility",
      title: "Refund Eligibility",
      icon: <CheckCircle className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Refunds are only considered under specific, verified conditions:</p>
          <ul className="space-y-2 pl-4 list-disc text-sm">
            <li><strong>Duplicate Payments:</strong> When a transaction error leads to multiple charges for the same billing cycle.</li>
            <li><strong>Technical Breaches:</strong> A verified, direct technical failure on Mobrand's side that prevents access to core services for over 5 business days.</li>
            <li><strong>Unauthorized Transactions:</strong> Charge verified as fraudulent following investigation.</li>
          </ul>
          <p className="text-slate-500 text-sm">
            Once approved, refunds are processed within 5–10 business days depending on standard bank/payment gateway timelines.
          </p>
        </div>
      )
    },
    {
      id: "non-refundable",
      title: "Non-Refundable Services",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>The following services are strictly non-refundable:</p>
          <ul className="space-y-1.5 list-none pl-2 text-sm">
            <li>❌ Setup and onboarding fees</li>
            <li>❌ Custom development and white-label customization fees</li>
            <li>❌ Direct promotional, marketing, or advertising fees</li>
            <li>❌ Third-party charges, licensing costs, or domain names purchased for the client</li>
            <li>❌ Application store publishing fees</li>
          </ul>
        </div>
      )
    },
    {
      id: "whitelabel-custom",
      title: "White-Label & Custom Development",
      icon: <FileText className="w-5 h-5" />,
      content: (
        <p>
          For premium custom apps and white-label development: Payments made for wireframing, designs, asset creation, and app building are non-refundable once work has officially commenced. Milestones and delivery times vary by specific client agreement.
        </p>
      )
    },
    {
      id: "payment-disputes",
      title: "Payment Disputes",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <p>
          We encourage vendors and customers to contact Mobrand support directly before initiating chargebacks or disputes. Unverified or malicious payment disputes may result in immediate suspension of vendor accounts and platform privileges.
        </p>
      )
    },
    {
      id: "account-termination",
      title: "Account Termination",
      icon: <Ban className="w-5 h-5" />,
      content: (
        <p>
          No refunds are issued for accounts terminated due to policy breaches, fraudulent transactions, platform abuse, or illegal business operations.
        </p>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Refund & Cancellation Policy"
      subtitle="How refunds, billing issues, and cancellations are managed at Mobrand"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default RefundPolicy;
