import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MapPin, Building2, Send, CheckCircle, HelpCircle } from 'lucide-react';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: 'Restaurant & Hotels',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        businessType: 'Restaurant & Hotels',
        message: ''
      });
    }, 1500);
  };

  const businessCategories = [
    "Hotels & Restaurants",
    "Fast Food & Bakery",
    "Grocery & Retail Stores",
    "Electronics & Mobile Shops",
    "Hardware & Electrical Stores",
    "Textile & Garment Businesses",
    "Furniture & Lifestyle Stores",
    "Wholesale Businesses",
    "Service Providers",
    "Other"
  ];

  const seoKeywords = [
    "Contact multi-business commerce platform",
    "Vendor management support India",
    "Online business setup support",
    "SaaS platform contact page",
    "White-label app support",
    "Business management software support",
    "E-commerce platform support India"
  ];

  return (
    <div className="bg-slate-50 min-h-screen font-body text-slate-800 antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-mobrand-primary via-mobrand-primary to-mobrand-teal/30 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-mobrand-teal/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-mobrand-accent/10 blur-3xl" />

        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white mb-4 tracking-tight"
          >
            Get in Touch with Mobrand
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            We're here to help businesses grow online. Reach out for platform support, custom white-label solutions, or pricing details.
          </motion.p>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-12 md:py-20 relative">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
            
            {/* Left Side: Contact Information & Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm space-y-6">
                <h2 className="text-xl md:text-2xl font-bold font-heading text-mobrand-primary">
                  Contact Information
                </h2>
                <p className="text-slate-600 text-sm md:text-base">
                  Whether you have questions about our platform, pricing, onboarding, or custom branding — our professional team is ready to assist.
                </p>

                <div className="space-y-4">
                  <a href="mailto:brand@mobrand.in" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-mobrand-teal/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5 text-mobrand-teal" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500">Email Support</h4>
                      <p className="text-base font-bold text-slate-800">brand@mobrand.in</p>
                      <p className="text-xs text-slate-400 mt-0.5">We typically reply within 2 hours</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-mobrand-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5 text-mobrand-accent" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500">Phone & WhatsApp</h4>
                      <p className="text-base font-bold text-slate-800">+91 [Available on Request]</p>
                      <p className="text-xs text-slate-400 mt-0.5">Quick support for registered vendors</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all group">
                    <div className="w-11 h-11 rounded-xl bg-indigo-500/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-indigo-500" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-500">Working Hours</h4>
                      <p className="text-base font-bold text-slate-800">Monday – Saturday</p>
                      <p className="text-sm text-slate-600">10:00 AM – 7:00 PM (IST)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vendor Registration Info */}
              <div className="bg-gradient-to-br from-mobrand-primary to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-lg relative overflow-hidden group">
                <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-mobrand-teal/10 blur-xl" />
                
                <h3 className="text-lg md:text-xl font-bold font-heading mb-4 text-white">
                  Want to join Mobrand?
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Our professional merchant success team will guide you through the initial onboarding phases, catalog setup, and store launch completely free of cost.
                </p>

                <div className="space-y-3.5">
                  {[
                    "Register your business online instantly",
                    "Set up your catalog, menus, and business services",
                    "Configure payment methods and delivery zones",
                    "Launch your mobile storefront to customers"
                  ].map((step, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-mobrand-teal/20 text-mobrand-teal flex items-center justify-center font-bold text-xs shrink-0">
                        {i + 1}
                      </div>
                      <span className="text-slate-200 text-sm">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-sm relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="text-2xl font-bold font-heading text-slate-800 mb-2">Send Us a Message</h3>
                      <p className="text-slate-500 text-sm">Fill out the secure form below, and we will get back to you with custom details.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="you@example.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                        <input 
                          type="tel" 
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Business Category</label>
                        <select 
                          value={formData.businessType}
                          onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-colors cursor-pointer"
                        >
                          {businessCategories.map((category, i) => (
                            <option key={i} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message / Inquiries</label>
                      <textarea 
                        required
                        rows="5"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your business, specific setup requirements, or integration doubts..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="w-full bg-mobrand-teal hover:bg-mobrand-teal/95 disabled:bg-slate-400 text-white font-semibold py-4 rounded-xl shadow-lg shadow-mobrand-teal/15 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Secure Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-16 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-500 flex items-center justify-center mx-auto mb-4 animate-bounce">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-slate-800">Thank you! Inquiry Sent.</h3>
                    <p className="text-slate-600 max-w-md mx-auto text-sm md:text-base leading-relaxed">
                      We have received your details safely. A Mobrand merchant coordinator will contact you by email or phone within the next 2 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-mobrand-teal hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

          {/* SEO tags area */}
          <div className="mt-16 bg-slate-100 rounded-2xl p-6 border border-slate-200/60">
            <div className="flex items-center gap-2 mb-4 text-slate-500 font-semibold text-sm">
              <HelpCircle className="w-4 h-4 text-mobrand-teal" />
              <span>Search Engine Optimization Matrix</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {seoKeywords.map((tag, i) => (
                <span key={i} className="bg-white border border-slate-200 text-slate-600 px-3 py-1.5 rounded-full text-xs font-semibold cursor-default hover:text-mobrand-teal hover:border-mobrand-teal transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactUs;
