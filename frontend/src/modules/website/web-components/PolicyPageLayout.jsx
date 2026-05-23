import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Calendar, Mail, Phone, Globe, Shield, Tag } from 'lucide-react';
import Navbar from './Navbar';
import FooterSection from './FooterSection';

const PolicyPageLayout = ({
  title,
  subtitle,
  effectiveDate,
  sections = [],
  // eslint-disable-next-line no-unused-vars
  seoKeywords = [],
  ctaTitle = "Start Your Journey with Mobrand",
  ctaButtons = true,
}) => {
  const [activeSection, setActiveSection] = useState(sections[0]?.id || '');

  // Intersection Observer to update active section on scroll
  useEffect(() => {
    const observers = [];
    const elements = sections.map(s => document.getElementById(s.id));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-10% 0px -70% 0px' }
    );

    elements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      elements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, [sections]);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // offset for the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-body text-slate-800 antialiased overflow-x-hidden">
      <Navbar />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-mobrand-primary via-mobrand-primary to-mobrand-teal/30 overflow-hidden">
        {/* Neon decorative background blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-mobrand-teal/20 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-mobrand-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-slate-300 text-xs md:text-sm mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-slate-400">Legal & Resources</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-60" />
            <span className="text-white font-semibold truncate max-w-[200px] md:max-w-none">{title}</span>
          </div>

          {/* Heading */}
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-4 tracking-tight"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-6"
              >
                {subtitle}
              </motion.p>
            )}

            {effectiveDate && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold backdrop-blur-sm"
              >
                <Calendar className="w-3.5 h-3.5 text-mobrand-accent" />
                <span>Effective Date: {effectiveDate}</span>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12 items-start">
            
            {/* Left Sidebar Menu (Sticky) */}
            <div className="lg:col-span-1 lg:sticky lg:top-28 space-y-6">
              {/* Table of Contents for Desktop */}
              <div className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hidden lg:block">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">
                  On This Page
                </h3>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToElement(section.id)}
                      className={`w-full text-left py-2 px-3 rounded-xl text-sm font-medium transition-all duration-200 flex items-center justify-between ${
                        activeSection === section.id
                          ? 'bg-mobrand-teal/5 text-mobrand-teal font-semibold border-l-2 border-mobrand-teal pl-4'
                          : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50 pl-3'
                      }`}
                    >
                      <span className="truncate">{section.title}</span>
                      {activeSection === section.id && (
                        <div className="w-1.5 h-1.5 rounded-full bg-mobrand-teal shrink-0 ml-2 animate-pulse" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Side Assistance Widget */}
              <div className="bg-gradient-to-br from-mobrand-primary to-slate-900 rounded-2xl p-6 text-white shadow-md relative overflow-hidden group">
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-mobrand-teal/20 blur-xl group-hover:bg-mobrand-teal/30 transition-all duration-300" />
                <Shield className="w-8 h-8 text-mobrand-accent mb-4 relative z-10" />
                <h4 className="text-lg font-bold font-heading mb-2 relative z-10">Need Assistance?</h4>
                <p className="text-slate-300 text-sm leading-relaxed mb-4 relative z-10">
                  Have questions about our terms, onboarding procedures, or legal protections? Our dedicated support team is available.
                </p>
                <div className="space-y-3 text-xs relative z-10">
                  <a href="mailto:brand@mobrand.in" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-mobrand-teal" />
                    <span>brand@mobrand.in</span>
                  </a>
                  <a href="https://mobrand.in" className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <Globe className="w-3.5 h-3.5 text-mobrand-teal" />
                    <span>https://mobrand.in</span>
                  </a>
                </div>
                <Link 
                  to="/contact-us"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium text-xs py-2.5 px-4 rounded-xl transition-all duration-300"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Right Main Content */}
            <div className="lg:col-span-3 space-y-8 md:space-y-12">
              {/* Back to Home Mobile-only button */}
              <div className="flex lg:hidden mb-6">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-mobrand-teal transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
              </div>

              {/* Mobile Quick Horizontal Navigation */}
              <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm lg:hidden block overflow-x-auto scrollbar-none whitespace-nowrap">
                <div className="flex gap-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToElement(section.id)}
                      className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all shrink-0 ${
                        activeSection === section.id
                          ? 'bg-mobrand-teal text-white shadow-sm'
                          : 'bg-slate-50 text-slate-500 hover:text-slate-800'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actual Sections Render */}
              <div className="space-y-6 md:space-y-10">
                {sections.map((section, index) => (
                  <motion.div
                    key={section.id}
                    id={section.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
                    className="bg-white rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group scroll-mt-28"
                  >
                    {/* Decorative hover corner glow */}
                    <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-mobrand-teal/30 transition-all duration-300" />
                    
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-mobrand-primary mb-4 flex items-center gap-3">
                      {section.icon && <span className="text-mobrand-teal">{section.icon}</span>}
                      <span>{section.title}</span>
                    </h2>
                    
                    <div className="text-slate-600 leading-relaxed text-sm md:text-base space-y-4">
                      {section.content}
                    </div>
                  </motion.div>
                ))}
              </div>



              {/* Trial/Registration CTA */}
              {ctaButtons && (
                <div className="bg-gradient-to-br from-mobrand-teal to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-xl text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.03] pointer-events-none" />
                  <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-white/5 blur-2xl" />
                  <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-white/5 blur-2xl" />

                  <h3 className="text-2xl md:text-3xl font-heading font-black mb-4 relative z-10">
                    {ctaTitle}
                  </h3>
                  <p className="text-slate-200 text-sm md:text-base max-w-lg mx-auto mb-8 relative z-10">
                    Join thousands of merchants, restaurants, and wholesalers using Mobrand to manage, expand, and scale their online business smoothly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10">
                    <button className="w-full sm:w-auto bg-mobrand-accent hover:bg-mobrand-accent/90 text-white font-semibold px-8 py-4 rounded-full shadow-lg shadow-mobrand-accent/20 active:scale-95 transition-all">
                      Start Free Trial
                    </button>
                    <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-8 py-4 rounded-full active:scale-95 transition-all">
                      Register Your Business
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default PolicyPageLayout;
