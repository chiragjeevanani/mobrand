import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Headphones, Zap, CheckCircle2, Award } from 'lucide-react';

const trustFactors = [
  {
    icon: <Lock className="w-8 h-8 text-mobrand-teal" />,
    title: '100% Secure Payments',
    description: 'Military-grade encryption for all your transactions. Pay via UPI, Cards, or Wallet with total peace of mind.',
    color: 'bg-teal-50'
  },
  {
    icon: <Award className="w-8 h-8 text-indigo-600" />,
    title: 'Verified Partners Only',
    description: 'Every restaurant and retailer on our platform undergoes a strict quality and hygiene audit.',
    color: 'bg-indigo-50'
  },
  {
    icon: <Headphones className="w-8 h-8 text-orange-600" />,
    title: '24/7 Priority Support',
    description: 'Have a question? Our dedicated support team is available around the clock to help you out.',
    color: 'bg-orange-50'
  },
  {
    icon: <Zap className="w-8 h-8 text-emerald-600" />,
    title: 'Lightning Fast Resolution',
    description: 'Issues with your order? Get instant resolutions and refunds within minutes via our AI assistant.',
    color: 'bg-emerald-50'
  }
];

const TrustSection = () => {
  return (
    <section id="trust" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mobrand-teal font-black uppercase tracking-[0.25em] text-[10px] mb-4"
          >
            Why India Trusts Us
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-heading text-mobrand-primary leading-[1.1] tracking-tighter mb-6"
          >
            Safe. Secure. <br />
            <span className="text-slate-400">And Always Dependable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-body leading-relaxed"
          >
            Join millions of users who rely on Mobrand every day for their essential needs. 
            We prioritize your safety and satisfaction above all else.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-mobrand-teal/20 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500"
            >
              <div className={`w-16 h-16 rounded-2xl ${factor.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {factor.icon}
              </div>
              <h3 className="text-xl font-black font-heading text-mobrand-primary tracking-tight mb-4">
                {factor.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">
                {factor.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-mobrand-teal opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Verified Secure</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-12 border-t border-slate-100 flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-700"
        >
          {/* Using text icons to represent certifications */}
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-bold text-sm tracking-tighter">PCI-DSS COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-5 h-5" />
            <span className="font-bold text-sm tracking-tighter">SSL SECURED</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-bold text-sm tracking-tighter">ISO 27001 CERTIFIED</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;
