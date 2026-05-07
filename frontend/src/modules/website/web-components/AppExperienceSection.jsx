import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Sparkles, Receipt, Database, CheckCircle } from 'lucide-react';

import appUiImg from '../../../assets/images/app_ui_b2b.png';

const features = [
  {
    icon: <Bell className="w-5 h-5 text-mobrand-teal" />,
    title: 'Instant Order Alerts',
    description: 'Never miss an order. Get real-time push notifications on web and mobile devices instantly.'
  },
  {
    icon: <Sparkles className="w-5 h-5 text-orange-500" />,
    title: 'AI Stock Predictions',
    description: 'Our engine tracks sales velocity to alert you before your top items run out of stock.'
  },
  {
    icon: <Receipt className="w-5 h-5 text-indigo-500" />,
    title: 'Auto-Invoicing & Receipts',
    description: 'Generate, send, and manage digital PDF bills and receipts to your customers instantly.'
  }
];

const AppExperienceSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background abstract shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mobrand-teal/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-mobrand-accent/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Features */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-mobrand-teal font-black uppercase tracking-[0.25em] text-[10px] mb-4"
              >
                Complete Operational Control
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl font-black font-heading text-mobrand-primary leading-[1.1] tracking-tighter mb-6"
              >
                Smart Solutions for <br />
                <span className="text-slate-400">Smart Businesses.</span>
              </motion.h2>
            </div>

            <div className="space-y-8">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-black font-heading text-mobrand-primary tracking-tight mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Center: Large Phone Mockup */}
          <div className="lg:col-span-4 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 50 }}
              className="relative z-10 w-full max-w-[320px]"
            >
              {/* Phone shadow */}
              <div className="absolute inset-x-4 bottom-[-40px] h-20 bg-black/10 blur-[40px] rounded-[100%]" />
              
              <img 
                src={appUiImg} 
                alt="Mobrand Smart App" 
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.12)]"
              />
              
              {/* Floating notification element */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -right-12 md:-right-20 bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 z-20 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-slate-400">Payout status</p>
                    <p className="text-xs font-bold text-mobrand-primary">Settled instantly</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side: Additional Context */}
          <div className="lg:col-span-4 space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-mobrand-primary rounded-[2.5rem] p-10 text-white relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-mobrand-accent/20 rounded-full blur-[40px]" />
              
              <Database className="w-10 h-10 text-mobrand-accent mb-6" />
              <h4 className="text-2xl font-black font-heading tracking-tight mb-4">
                Unified Catalog Manager
              </h4>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                One database for everything. Control your products across food delivery, retail listings, or service menus from a single visual panel.
              </p>
              <div className="flex items-center gap-2 text-mobrand-accent">
                <span className="text-[10px] font-black uppercase tracking-widest underline decoration-2 underline-offset-4">Learn More</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="p-10 bg-white border border-slate-100 rounded-[2.5rem] shadow-sm"
            >
               <h4 className="text-xl font-black font-heading text-mobrand-primary tracking-tight mb-4">
                 Safe & Instant Payouts
               </h4>
               <p className="text-slate-500 text-sm leading-relaxed">
                 Experience the fastest settlements. Receive customer payments securely and transfer earnings directly to your bank account with a single tap.
               </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppExperienceSection;
