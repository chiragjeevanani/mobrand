import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Zap, Star, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Link } from 'react-router-dom';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';

const PricingPlans = () => {
  const plans = [
    {
      name: "Starter Plan",
      badge: "Local",
      target: "Perfect for Small Shops & Local Businesses",
      color: "bg-emerald-500",
      borderColor: "border-emerald-500/30",
      setupCost: "₹399",
      monthlyCost: "₹199",
      features: [
        "Online Business Listing",
        "Vendor Dashboard Access",
        "Product Management",
        "Basic Order Management",
        "QR Payment Support",
        "Customer App Visibility",
        "Mobile-Friendly Dashboard",
        "Basic Analytics",
        "WhatsApp Support"
      ],
      bestFor: ["Grocery Stores", "Small Retail Shops", "Local Food Businesses", "Small Service Providers"]
    },
    {
      name: "Growth Plan",
      badge: "Most Popular",
      target: "Best for Growing Businesses",
      color: "bg-mobrand-accent",
      borderColor: "border-mobrand-accent",
      setupCost: "₹999",
      monthlyCost: "₹249",
      features: [
        "Everything in Starter Plan",
        "Advanced Dashboard",
        "Business Analytics & Reports",
        "Delivery Management Support",
        "Promotional Banner Support",
        "Better Product Management",
        "Priority Technical Support",
        "Customer Insights",
        "Business Growth Tools"
      ],
      bestFor: ["Medium Restaurants", "Grocery Marts", "Fashion Stores", "Electronics Shops", "Growing Local Brands"],
      highlight: true
    },
    {
      name: "Business Plan",
      badge: "Premium",
      target: "Built for Serious & Expanding Businesses",
      color: "bg-mobrand-teal",
      borderColor: "border-mobrand-teal/30",
      setupCost: "₹2999",
      monthlyCost: "₹299",
      features: [
        "Everything in Growth Plan",
        "Play Store Listing Facility",
        "Custom Branding Support",
        "Vendor QR Branding",
        "Premium Dashboard",
        "Advanced Reports",
        "Enhanced Business Management",
        "Priority Support",
        "Business Expansion Features",
        "Premium Technical Assistance"
      ],
      bestFor: ["Large Restaurants", "Multi-Product Businesses", "Expanding Brands", "Franchise-Type Businesses", "Businesses Wanting App Presence"]
    }
  ];

  return (
    <ReactLenis root>
      <div className="bg-mobrand-bg min-h-screen font-body text-slate-800 antialiased overflow-x-hidden selection:bg-mobrand-primary selection:text-white flex flex-col">
        <Navbar />

        <main className="flex-grow pt-32 pb-20">
          {/* Typographic Hero Section - Breaking the Standard Split */}
          <section className="container mx-auto px-6 md:px-12 mb-20 relative">
            <div className="absolute top-0 left-10 w-64 h-64 bg-mobrand-teal/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-mobrand-accent/10 blur-[120px] rounded-full pointer-events-none" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-5xl mx-auto text-center"
            >
              <h1 className="text-5xl md:text-7xl font-heading font-black text-mobrand-primary leading-[1.1] tracking-tight mb-8">
                SIMPLE. <br className="md:hidden" /> SCALABLE. <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-primary to-mobrand-accent">UNBEATABLE.</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
                Mobrand provides powerful digital business solutions for shops, restaurants, grocery stores, and retail businesses through one modern multi-business platform.
              </p>
            </motion.div>
          </section>

          {/* Pricing Grid - Experimental Center-Staggered Topology */}
          <section className="container mx-auto px-6 md:px-12 mb-32">
            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
              {plans.map((plan, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full max-w-md lg:w-1/3 flex flex-col bg-white border ${plan.borderColor} ${
                    plan.highlight ? 'lg:-translate-y-8 shadow-2xl shadow-mobrand-accent/10 relative z-10' : 'shadow-xl shadow-slate-200/50 mt-0 lg:mt-8'
                  } transition-all duration-500`}
                  style={{
                    borderRadius: '2px', // Sharp premium edges
                  }}
                >
                  {/* Plan Header */}
                  <div className={`p-8 border-b border-slate-100 ${plan.highlight ? 'bg-mobrand-primary text-white' : ''}`}>
                    <div className="flex justify-between items-start mb-6">
                      <h3 className={`text-2xl font-heading font-bold ${plan.highlight ? 'text-white' : 'text-mobrand-primary'}`}>
                        {plan.name}
                      </h3>
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${
                        plan.highlight ? 'bg-mobrand-accent text-white' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                    
                    <p className={`text-sm mb-8 min-h-[40px] ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>
                      {plan.target}
                    </p>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-end gap-1">
                        <span className="text-4xl font-black">{plan.monthlyCost}</span>
                        <span className={`text-sm pb-1 font-medium ${plan.highlight ? 'text-slate-300' : 'text-slate-500'}`}>/ Month</span>
                      </div>
                      <div className={`text-sm font-medium ${plan.highlight ? 'text-mobrand-accent' : 'text-mobrand-primary'}`}>
                        + {plan.setupCost} One-Time Setup
                      </div>
                    </div>
                  </div>

                  {/* Plan Features */}
                  <div className="p-8 flex-grow flex flex-col">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          <div className={`mt-1 rounded-full p-0.5 ${plan.highlight ? 'bg-mobrand-accent/20 text-mobrand-accent' : 'bg-emerald-100 text-emerald-600'}`}>
                            <Check className="w-3.5 h-3.5" strokeWidth={3} />
                          </div>
                          <span className="text-slate-700 text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Best For Section */}
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Best For:</p>
                      <div className="flex flex-wrap gap-2">
                        {plan.bestFor.map((item, bIdx) => (
                          <span key={bIdx} className="text-xs font-medium text-slate-600 bg-slate-100 px-2.5 py-1">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to="/contact-us"
                      className={`mt-8 w-full py-4 text-center text-sm font-bold tracking-wide uppercase transition-all duration-300 ${
                        plan.highlight 
                          ? 'bg-mobrand-accent text-white hover:bg-orange-600' 
                          : 'bg-slate-100 text-mobrand-primary hover:bg-slate-200'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Additional Notes */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-16 max-w-3xl mx-auto flex flex-col md:flex-row flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium"
            >
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-mobrand-teal" /> All plans include onboarding support</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-mobrand-teal" /> Monthly subscription must remain active</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-mobrand-teal" /> Play Store approval depends on 3rd-party policies</div>
              <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-mobrand-teal" /> Additional customizations may involve extra charges</div>
            </motion.div>
          </section>

          {/* Free Trial Banner - Asymmetric Tension Layout */}
          <section className="container mx-auto px-6 md:px-12 mb-32">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-mobrand-primary relative overflow-hidden"
              style={{ borderRadius: '2px' }}
            >
              <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-mobrand-teal/40 to-transparent pointer-events-none" />
              
              <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-10">
                <div className="max-w-xl text-center md:text-left">
                  <h2 className="text-4xl md:text-5xl font-heading font-black text-white mb-4">Start Free for 7 Days</h2>
                  <p className="text-lg text-slate-300 font-medium">Experience the full power of Mobrand before committing to a plan.</p>
                </div>
                <Link 
                  to="/contact-us"
                  className="bg-white text-mobrand-primary px-8 py-4 font-bold uppercase tracking-wider text-sm hover:bg-mobrand-accent hover:text-white transition-all duration-300 whitespace-nowrap flex items-center gap-2 group"
                >
                  Start Your Trial <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </section>

          {/* Why Choose Us & Contact - Brutalist Split Grid */}
          <section className="container mx-auto px-6 md:px-12 mb-20">
            <div className="grid md:grid-cols-2 gap-0 border border-slate-200">
              
              {/* Why Choose */}
              <div className="p-10 md:p-16 bg-white border-b md:border-b-0 md:border-r border-slate-200">
                <h2 className="text-3xl font-heading font-bold text-mobrand-primary mb-10">Why Choose Mobrand?</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    "Affordable Pricing",
                    "Vendor Management Platform",
                    "QR Payment Support",
                    "Online Business Management",
                    "Multi-Business Commerce Platform",
                    "Scalable SaaS Infrastructure",
                    "Business Growth Support"
                  ].map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-mobrand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium text-sm">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Us */}
              <div className="p-10 md:p-16 bg-slate-50 flex flex-col justify-center">
                <h2 className="text-3xl font-heading font-bold text-mobrand-primary mb-10">Get in Touch</h2>
                <div className="space-y-6">
                  <a href="https://mobrand.in" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-mobrand-primary group-hover:border-mobrand-teal group-hover:text-mobrand-teal transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Website</p>
                      <p className="text-lg font-medium text-slate-800 group-hover:text-mobrand-teal transition-colors">mobrand.in</p>
                    </div>
                  </a>
                  
                  <a href="mailto:brand@mobrand.in" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-mobrand-primary group-hover:border-mobrand-teal group-hover:text-mobrand-teal transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Email</p>
                      <p className="text-lg font-medium text-slate-800 group-hover:text-mobrand-teal transition-colors">brand@mobrand.in</p>
                    </div>
                  </a>

                  <a href="tel:+91XXXXXXXXXX" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center text-mobrand-primary group-hover:border-mobrand-teal group-hover:text-mobrand-teal transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-lg font-medium text-slate-800 group-hover:text-mobrand-teal transition-colors">+91 XXXXXXXXXX</p>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </section>

        </main>

        <FooterSection />
      </div>
    </ReactLenis>
  );
};

export default PricingPlans;
