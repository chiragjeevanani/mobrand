import React from 'react';
import { UserX, AlertTriangle, Clock, Mail, ShieldAlert } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const DeleteAccountRequest = () => {
  const seoKeywords = [
    "Delete account request",
    "Account deletion policy",
    "User account removal",
    "Vendor account deletion",
    "SaaS platform account deletion",
    "Multi-business commerce platform",
    "User privacy and data deletion"
  ];

  const sections = [
    {
      id: "request-deletion",
      title: "Request Permanent Account Deletion",
      icon: <UserX className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand respects your privacy and provides users and vendors the option to request permanent deletion of their account and associated data.
          </p>
          <p>
            If you would like to delete your Mobrand account, please contact our support team.
          </p>
        </div>
      )
    },
    {
      id: "what-happens",
      title: "What Happens After Account Deletion?",
      icon: <AlertTriangle className="w-5 h-5" />,
      content: (
        <ul className="space-y-3 list-none pl-1">
          <li className="flex items-start gap-3 p-3 bg-red-50 border border-red-100 rounded-xl text-sm text-red-800">
            <span className="shrink-0">•</span>
            <span>Your account access will be permanently removed</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm">
            <span className="shrink-0">•</span>
            <span>Profile information may be deleted from active systems</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl text-sm">
            <span className="shrink-0">•</span>
            <span>Orders, subscriptions, and business access may become unavailable</span>
          </li>
          <li className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-100 rounded-xl text-sm text-blue-800">
            <span className="shrink-0">•</span>
            <span>Some transaction or legal records may be retained where required by law, security, fraud prevention, or operational purposes</span>
          </li>
        </ul>
      )
    },
    {
      id: "processing-time",
      title: "Processing Time",
      icon: <Clock className="w-5 h-5" />,
      content: (
        <p>
          Account deletion requests are typically processed within <strong>7–15 business days</strong> after verification.
        </p>
      )
    },
    {
      id: "how-to-request",
      title: "How to Request Deletion",
      icon: <Mail className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>Please send your account deletion request to: <a href="mailto:brand@mobrand.in" className="text-mobrand-teal font-semibold">brand@mobrand.in</a></p>
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <p className="text-sm font-bold text-slate-800 mb-2">Include the following details:</p>
            <ul className="space-y-1.5 text-sm list-disc list-inside text-slate-600">
              <li>Registered mobile number or email</li>
              <li>Business name (for vendors)</li>
              <li>Reason for deletion (optional)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: "applicable-platforms",
      title: "Applicable Platforms",
      icon: <ShieldAlert className="w-5 h-5" />,
      content: (
        <div className="flex flex-wrap gap-2">
          {["Mobrand User App", "Mobrand Vendor App", "Mobrand Website Services"].map((platform, i) => (
            <span key={i} className="bg-white border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700">
              {platform}
            </span>
          ))}
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Request Account Deletion"
      subtitle="Information and procedures for permanently removing your Mobrand account and data"
      effectiveDate="May 11, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default DeleteAccountRequest;
