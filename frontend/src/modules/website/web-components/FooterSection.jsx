import React from 'react';
import { Twitter, Instagram, Linkedin, Zap, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-mobrand-primary flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-mobrand-accent opacity-0 group-hover:opacity-20 transition-opacity" />
                <Zap className="text-mobrand-accent w-6 h-6" />
              </div>
              <span className="text-3xl font-heading font-bold tracking-tight text-mobrand-primary">
                Mobrand
              </span>
            </a>
            <p className="text-slate-600 leading-relaxed mb-8 max-w-sm">
              India's leading business and vendor platform. Start, manage, and scale your online storefront, 
              receive instant orders, and grow your brand — all in one powerful platform.
            </p>
            <div className="flex gap-4">
               {[
                 { icon: <Twitter className="w-5 h-5" />, label: 'Twitter' },
                 { icon: <Instagram className="w-5 h-5" />, label: 'Instagram' },
                 { icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
               ].map((social, i) => (
                 <a 
                   key={i} 
                   href="#" 
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
            <h4 className="text-mobrand-primary font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              {[
                { name: 'Shops & Retail', href: '#lifestyle' },
                { name: 'Food & Beverages', href: '#lifestyle' },
                { name: 'Services & Booking', href: '#lifestyle' },
                { name: 'Business Analytics', href: '#features' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-mobrand-teal transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6">Partners</h4>
            <ul className="space-y-4">
              {[
                { name: 'For Vendors', href: '#how-it-works' },
                { name: 'For Franchisees', href: '#how-it-works' },
                { name: 'Partner App', href: '#app-showcase' },
                { name: 'Pricing Plans', href: '#cta' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-500 hover:text-mobrand-teal transition-colors text-sm font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1">
            <h4 className="text-mobrand-primary font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-mobrand-teal shrink-0" />
                 <span className="text-slate-600 text-sm font-medium">
                   hello@mobrand.in
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

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
           <p className="text-slate-500 text-sm">
             © {new Date().getFullYear()} Mobrand Technologies Pvt. Ltd. All rights reserved.
           </p>
           <div className="flex gap-6 text-sm">
             <a href="#" className="text-slate-500 hover:text-mobrand-primary transition-colors">Privacy Policy</a>
             <a href="#" className="text-slate-500 hover:text-mobrand-primary transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
