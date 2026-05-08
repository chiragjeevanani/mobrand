import React from 'react';
import { Shield, Lock, ShieldCheck, CreditCard, Scale, HelpCircle, Key, FileWarning } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const LegalSecurity = () => {
  const seoKeywords = [
    "Secure business platform",
    "Legal protection for SaaS platform",
    "Vendor management security",
    "Online business platform protection",
    "White-label platform security",
    "Multi-business commerce platform India",
    "Secure vendor onboarding system",
    "SaaS platform legal policies"
  ];

  const sections = [
    {
      id: "legal-protection",
      title: "Legal Protection Policies",
      icon: <Scale className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            By utilizing the Mobrand website, API endpoints, dashboards, or client applications, users explicitly agree to comply with all applicable local, state, national, and international laws and regulations.
          </p>
          <p>Mobrand reserves the absolute, final right to:</p>
          <ul className="space-y-1.5 list-disc list-inside text-sm text-slate-600 pl-1">
            <li>Suspend, restrict, or terminate any user or merchant accounts involved in suspicious, fraudulent, or abusive activities.</li>
            <li>Instantly remove product items, menus, digital content, or graphic materials violating copyrights or local laws.</li>
            <li>Take appropriate civil, administrative, or criminal legal actions against system misuse, hacking, or intellectual property thefts.</li>
          </ul>
        </div>
      )
    },
    {
      id: "data-security",
      title: "Account & Data Security",
      icon: <Lock className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>
            Mobrand employs robust modern technical safeguards, firewalls, and data protection policies to shield user profiles, merchant assets, and consumer transactions.
          </p>
          <p>Our infrastructure security measures include:</p>
          <ul className="space-y-1.5 text-sm list-none pl-1 grid grid-cols-1 md:grid-cols-2 gap-2">
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🔑 <strong>Secure Authentication:</strong> Password encryption algorithms and multi-factor verification options.</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🔒 <strong>Data Encryption:</strong> All transit data is encapsulated using modern secure SSL/TLS.</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🛡️ <strong>Access Controls:</strong> Role-based access policies preventing internal database leakage.</li>
            <li className="p-3 bg-slate-50 border border-slate-100 rounded-xl">🚨 <strong>Threat Monitoring:</strong> Scheduled background audit routines tracking anomalous actions.</li>
          </ul>
          <p className="text-slate-500 text-xs mt-2">Users are solely responsible for setting complex passwords and safeguarding their login credentials from third parties.</p>
        </div>
      )
    },
    {
      id: "security-guidelines",
      title: "Platform Security Guidelines",
      icon: <Key className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>To preserve system integrity and consumer trust, users, merchants, and customers are strictly prohibited from:</p>
          <ul className="space-y-2 list-disc list-inside text-sm text-slate-600 pl-2">
            <li>Attempting unauthorized port-scanning, vulnerability scouting, or load testing on our hosting servers.</li>
            <li>Injecting automated scraping scripts, payload databases, malware, SQL scripts, or brute-forcing mechanisms.</li>
            <li>Misusing customer contact indices, order profiles, or vendor statistics for private marketing or cold calls.</li>
            <li>Distributing duplicate assets or trying to impersonate other merchants.</li>
          </ul>
        </div>
      )
    },
    {
      id: "payment-protection",
      title: "Payment & Transaction Protection",
      icon: <CreditCard className="w-5 h-5" />,
      content: (
        <p>
          Mobrand routes all subscription, onboarding, and customer marketplace checkouts through leading PCI-DSS compliant third-party payment gateways. We do not store, log, or cache credit/debit card numbers, CVVs, or internet banking passwords directly on our servers. Discrepancies, payout failures, or card charge disputes are investigated collaboratively with our gateways under standard banking regulations.
        </p>
      )
    },
    {
      id: "liability-limitation",
      title: "Limitation of Liability",
      icon: <FileWarning className="w-5 h-5" />,
      content: (
        <p>
          While we maintain rigorous backups and a high-availability server SLA, Mobrand operates on an “as available” basis. Mobrand is not liable for indirect financial losses, business interruptions, third-party logistics delays, or natural event failures beyond reasonable control. In no event shall our collective liability exceed the subscription fee paid by the merchant over the preceding three-month period.
        </p>
      )
    },
    {
      id: "support-structure",
      title: "Support & Contact Structure",
      icon: <HelpCircle className="w-5 h-5" />,
      content: (
        <p>
          Mobrand provides professional, rapid helpdesks for technical errors, merchant inquiries, and security feedback. For reporting security vulnerabilities, please contact our team immediately at <a href="mailto:brand@mobrand.in" className="text-mobrand-teal font-semibold hover:underline">brand@mobrand.in</a>. All legitimate reports are verified, logged, and resolved with priority.
        </p>
      )
    },
    {
      id: "trust-factors",
      title: "Why Businesses Trust Mobrand",
      icon: <ShieldCheck className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              title: "PCI-DSS Gateway Routing",
              desc: "Encrypted transactions routed through major secure Indian bank gateways."
            },
            {
              title: "Encrypted Backups",
              desc: "Automated, redundant database snapshots protecting business files."
            },
            {
              title: "Robust Service SLA",
              desc: "Optimized server instances ensuring rapid catalog loads and checkouts."
            }
          ].map((trust, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl hover:shadow-sm transition-all text-center">
              <h4 className="text-sm font-bold text-slate-800 mb-1.5">{trust.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{trust.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="Legal & Security Protection"
      subtitle="The structural protocols, encryption strategies, and legal parameters guarding the Mobrand platform"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default LegalSecurity;
