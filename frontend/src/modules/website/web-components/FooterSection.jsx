import React from 'react';
import { Twitter, Instagram, Linkedin, Zap, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 mb-16">
          
          {/* Brand Col */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-mobrand-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mobrand-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                <Zap className="text-mobrand-accent w-6 h-6" />
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight text-mobrand-primary">
                Mobrand
              </span>
            </Link>
            <p className="text-slate-500 leading-relaxed mb-8 text-xs">
              India's leading multi-business commerce platform. Start, manage, and scale your storefront with powerful SaaS tools.
            </p>
            <div className="flex gap-3">
               {[
                 { icon: <Twitter className="w-4 h-4" />, label: 'Twitter', href: 'https://twitter.com/mobrand' },
                 { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', href: 'https://instagram.com/mobrand' },
                 { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', href: 'https://linkedin.com/company/mobrand' },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href} 
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={social.label}
                   className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-mobrand-primary hover:border-mobrand-teal transition-all duration-300"
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Company Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-[10px] uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About Us', to: '/about' },
                { name: 'Mobrand Blog', to: '/blog' },
                { name: 'Support Center', to: '/support' },
                { name: 'Common FAQs', to: '/faq' },
                { name: 'Brand & SEO', to: '/brand-seo-info' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-500 hover:text-mobrand-teal transition-colors text-xs font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-[10px] uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', to: '/privacy-policy' },
                { name: 'Terms of Service', to: '/terms' },
                { name: 'Refund Policy', to: '/refund-policy' },
                { name: 'Cookie Policy', to: '/cookie-policy' },
                { name: 'Disclaimer', to: '/disclaimer' },
                { name: 'Security Policy', to: '/legal-security-protection' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-500 hover:text-mobrand-teal transition-colors text-xs font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Apps Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-[10px] uppercase tracking-widest">Business</h4>
            <ul className="space-y-4">
              {[
                { name: 'App Policies', to: '/app-policies' },
                { name: 'Account Deletion', to: '/delete-account' },
                { name: 'Vendor Settlement', to: '/payment-settlement' },
                { name: 'Vendor Agreement', to: '/vendor-agreement' },
                { name: 'Delivery Partners', to: '/delivery-partners' },
                { name: 'Shipping Policy', to: '/delivery-policy' },
                { name: 'Vendor Policies', to: '/vendor-customer-policies' },
                { name: 'SaaS Terms', to: '/whitelabel-saas-terms' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-500 hover:text-mobrand-teal transition-colors text-xs font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-[10px] uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                 <Mail className="w-3.5 h-3.5 text-mobrand-teal shrink-0" />
                 <a href="mailto:brand@mobrand.in" className="text-slate-500 hover:text-mobrand-teal transition-colors text-xs font-medium">
                   brand@mobrand.in
                 </a>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-3.5 h-3.5 text-mobrand-teal shrink-0" />
                 <span className="text-slate-500 text-xs font-medium">
                   +91 [Request]
                 </span>
              </li>
              <li className="flex items-center gap-3">
                 <MapPin className="w-3.5 h-3.5 text-mobrand-teal shrink-0" />
                 <span className="text-slate-500 text-xs font-medium">
                   Bengaluru, IN
                 </span>
              </li>
            </ul>
            <div className="mt-8">
               <Link 
                 to="/contact-us" 
                 className="inline-flex items-center justify-center bg-slate-100 hover:bg-mobrand-teal hover:text-white text-slate-700 px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all"
               >
                 Contact Us
               </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-slate-400 text-[10px] font-medium text-center md:text-left">
             © {new Date().getFullYear()} Mobrand Technologies Pvt. Ltd. All rights reserved.
           </p>
           <p className="text-slate-400 text-[10px] font-medium text-center md:text-left flex items-center gap-1.5">
             <ShieldCheck className="w-3 h-3 text-mobrand-teal" />
             Secure Multi-Business SaaS Infrastructure
           </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
