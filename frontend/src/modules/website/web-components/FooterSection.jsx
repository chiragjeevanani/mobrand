import React from 'react';
import { Twitter, Instagram, Linkedin, Zap, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const FooterSection = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-mobrand-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mobrand-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                <Zap className="text-mobrand-accent w-6 h-6" />
              </div>
              <span className="text-3xl font-heading font-bold tracking-tight text-mobrand-primary">
                Mobrand
              </span>
            </Link>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-sm text-sm">
              India's leading multi-business commerce platform. Start, manage, and scale your online storefront, 
              receive instant orders, and automate your operations — all in one powerful SaaS platform.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: <Twitter className="w-5 h-5" />, label: 'Twitter', href: 'https://twitter.com/mobrand' },
                 { icon: <Instagram className="w-5 h-5" />, label: 'Instagram', href: 'https://instagram.com/mobrand' },
                 { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn', href: 'https://linkedin.com/company/mobrand' },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href={social.href} 
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label={social.label}
                   className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-mobrand-primary hover:border-mobrand-teal transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                 >
                   {social.icon}
                 </a>
               ))}
            </div>
          </div>

          {/* Links 1 */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Shops & Retail', to: '/coming-soon' },
                { name: 'Food & Beverages', to: '/coming-soon' },
                { name: 'Services & Booking', to: '/coming-soon' },
                { name: 'Business Analytics', to: '/coming-soon' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-500 hover:text-mobrand-teal transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-sm uppercase tracking-wider">Partners</h4>
            <ul className="space-y-4">
              {[
                { name: 'For Vendors', to: '/coming-soon' },
                { name: 'For Franchisees', to: '/coming-soon' },
                { name: 'Partner App', to: '/coming-soon' },
                { name: 'Pricing Plans', to: '/coming-soon' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-slate-500 hover:text-mobrand-teal transition-colors text-sm font-medium">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-mobrand-teal shrink-0" />
                 <a href="mailto:brand@mobrand.in" className="text-slate-600 hover:text-mobrand-teal transition-colors text-sm font-medium">
                   brand@mobrand.in
                 </a>
              </li>
              <li className="flex items-center gap-3">
                 <Phone className="w-4 h-4 text-mobrand-teal shrink-0" />
                 <span className="text-slate-600 text-sm font-medium">
                   +91 [On Request]
                 </span>
              </li>
              <li className="flex items-center gap-3">
                 <MapPin className="w-4 h-4 text-mobrand-teal shrink-0" />
                 <span className="text-slate-600 text-sm font-medium">
                   Bengaluru, India
                 </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Resources & Legal Quick-links Row */}
        <div className="border-t border-slate-200 pt-8 pb-6">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs justify-center font-medium text-slate-500 mb-6">
            <Link to="/about" className="hover:text-mobrand-teal transition-colors">About Us</Link>
            <span className="text-slate-350">•</span>
            <Link to="/privacy-policy" className="hover:text-mobrand-teal transition-colors">Privacy Policy</Link>
            <span className="text-slate-350">•</span>
            <Link to="/terms" className="hover:text-mobrand-teal transition-colors">Terms of Service</Link>
            <span className="text-slate-350">•</span>
            <Link to="/refund-policy" className="hover:text-mobrand-teal transition-colors">Refund & Cancellation</Link>
            <span className="text-slate-350">•</span>
            <Link to="/vendor-agreement" className="hover:text-mobrand-teal transition-colors">Vendor Agreement</Link>
            <span className="text-slate-350">•</span>
            <Link to="/delivery-policy" className="hover:text-mobrand-teal transition-colors">Shipping & Delivery</Link>
            <span className="text-slate-350">•</span>
            <Link to="/vendor-customer-policies" className="hover:text-mobrand-teal transition-colors">Vendor & Customer Policies</Link>
            <span className="text-slate-350">•</span>
            <Link to="/whitelabel-saas-terms" className="hover:text-mobrand-teal transition-colors">White-Label & SaaS Terms</Link>
            <span className="text-slate-350">•</span>
            <Link to="/legal-security-protection" className="hover:text-mobrand-teal transition-colors">Legal & Security</Link>
            <span className="text-slate-350">•</span>
            <Link to="/brand-seo-info" className="hover:text-mobrand-teal transition-colors">Brand & SEO Info</Link>
            <span className="text-slate-350">•</span>
            <Link to="/contact-us" className="hover:text-mobrand-teal transition-colors">Contact Us</Link>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-slate-400 text-xs text-center md:text-left">
             © {new Date().getFullYear()} Mobrand Technologies Pvt. Ltd. All rights reserved.
           </p>
           <p className="text-slate-400 text-xs text-center md:text-left flex items-center gap-1.5">
             Powered by secure SaaS infrastructure and automated business setups.
           </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
