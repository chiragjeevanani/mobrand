import React from 'react';
import { Smartphone, Layers, FileSignature, Cloud, Tag, ShieldCheck, HeartHandshake, Briefcase } from 'lucide-react';
import PolicyPageLayout from '../web-components/PolicyPageLayout';

const WhiteLabelSaaS = () => {
  const seoKeywords = [
    "White-label business platform",
    "SaaS business platform",
    "Vendor management software",
    "Multi-business commerce platform",
    "White-label mobile app services",
    "Online business management platform",
    "Subscription-based business software",
    "Business SaaS solutions India"
  ];

  const sections = [
    {
      id: "whitelabel-overview",
      title: "White-Label Services",
      icon: <Smartphone className="w-5 h-5" />,
      content: (
        <div className="space-y-4">
          <p>
            Mobrand provides high-quality, fully-branded digital identities through our premium White-Label services. We design, package, and launch dedicated apps allowing businesses to present their own standalone brand.
          </p>
          <p>Our premium white-label options include:</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            {[
              "Custom mobile applications (iOS & Android)",
              "Complete visual branding and business logo integration",
              "Standalone business app store listing",
              "Custom color themes and brand-tailored layouts",
              "Google Play & App Store publishing assistance",
              "Dedicated launch and onboarding support"
            ].map((feature, i) => (
              <li key={i} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-mobrand-teal shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
          <p className="text-slate-500 text-xs">White-label packages are available on select premium custom corporate subscription plans.</p>
        </div>
      )
    },
    {
      id: "saas-services",
      title: "SaaS Platform Services",
      icon: <Layers className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>
            Mobrand operates as an enterprise-grade Software as a Service (SaaS) platform, letting merchants run complex operations completely in the cloud.
          </p>
          <p>Our software ecosystem enables businesses to:</p>
          <ul className="space-y-2 list-disc list-inside text-sm pl-2">
            <li>Catalogue, adjust, and showcase diverse products or services.</li>
            <li>Receive, coordinate, route, and fulfill instant client orders.</li>
            <li>Coordinate staff, delivery agents, and regional franchise networks.</li>
            <li>Integrate major secure payment gateways for automated payouts.</li>
            <li>Analyze real-time order history, visual analytics, and consumer databases.</li>
          </ul>
        </div>
      )
    },
    {
      id: "app-terms",
      title: "White-Label & Custom App Terms",
      icon: <FileSignature className="w-5 h-5" />,
      content: (
        <div className="space-y-3">
          <p>Merchants selecting our White-Label services explicitly agree to the following terms:</p>
          <ul className="space-y-2 list-disc list-inside text-sm text-slate-600 pl-2">
            <li>Custom deployment, visual branding, and asset customization charges apply as separate setup fees.</li>
            <li>Branding assets, graphics, and text must be delivered by the client in recommended specifications.</li>
            <li>Estimated publishing schedules are subject to technical feasibility and third-party store approvals.</li>
            <li>Setup, initialization, and developer hours spent are non-refundable once design and programming begin.</li>
          </ul>
        </div>
      )
    },
    {
      id: "usage-access",
      title: "Platform Usage & Access",
      icon: <Cloud className="w-5 h-5" />,
      content: (
        <p>
          SaaS and White-Label accounts are granted specific, revocable access to Mobrand APIs and hosting resources. Users are strictly prohibited from trying to copy, lease, distribute, reverse-engineer, or crack underlying platform components. Failure to adhere to usage boundaries will result in immediate route suspensions and potential civil legal remedies.
        </p>
      )
    },
    {
      id: "subscription-charges",
      title: "Subscription & Service Charges",
      icon: <Tag className="w-5 h-5" />,
      content: (
        <p>
          Services are billed on a recurring monthly or annual subscription cycle. Rates are published transparently on our registration dashboards. One-time customization charges, server upgrade allowances, or additional merchant accounts may carry individual itemized fees.
        </p>
      )
    },
    {
      id: "support-maintenance",
      title: "Technical Support & Maintenance",
      icon: <HeartHandshake className="w-5 h-5" />,
      content: (
        <p>
          Mobrand provides reliable core software maintenance, security patching, database optimization, and backup schedules in the background. Direct developer hotlines, ticketing boards, and onboarding walkthrough workshops are available to premium plan subscribers during specified business hours.
        </p>
      )
    },
    {
      id: "why-saas",
      title: "Why Businesses Choose Mobrand SaaS",
      icon: <Briefcase className="w-5 h-5" />,
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Enterprise Scalability",
              desc: "Grow from a single local retail cart to an state-wide chain network with ease on our scalable servers."
            },
            {
              title: "Centralized Vendor Control",
              desc: "Oversee orders, dispatch routes, catalog details, client profiles, and billing summaries from one master board."
            },
            {
              title: "Sleek User Journeys",
              desc: "Wow your shoppers with lightning-fast catalogs, custom branding layouts, and instant checkouts."
            },
            {
              title: "Cost-Effective Entry",
              desc: "Avoid spending lakhs on custom development. Rent our enterprise-grade SaaS technology at pocket-friendly rates."
            }
          ].map((why, i) => (
            <div key={i} className="bg-slate-50 border border-slate-100 p-4.5 rounded-2xl hover:shadow-sm transition-all">
              <h4 className="text-sm font-bold text-slate-800 mb-1.5">{why.title}</h4>
              <p className="text-slate-600 text-xs leading-relaxed">{why.desc}</p>
            </div>
          ))}
        </div>
      )
    }
  ];

  return (
    <PolicyPageLayout
      title="White-Label & SaaS Service Terms"
      subtitle="The specialized terms, parameters, and details for premium white-labeled and custom enterprise solutions"
      effectiveDate="May 8, 2026"
      sections={sections}
      seoKeywords={seoKeywords}
    />
  );
};

export default WhiteLabelSaaS;
