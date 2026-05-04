import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Utensils, Zap, ArrowRight } from 'lucide-react';

import shopImg from '../../../assets/images/mobshop_lifestyle.png';
import foodImg from '../../../assets/images/mobfood_lifestyle.png';
import nowImg from '../../../assets/images/mobnow_lifestyle.png';

const sections = [
  {
    title: 'MobShop',
    subtitle: 'Everything you desire, delivered same-day.',
    description: 'Browse millions of products across fashion, electronics, and home decor. With Mobrand, luxury and convenience are just a tap away.',
    image: shopImg,
    icon: <ShoppingBag className="w-6 h-6" />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    reverse: false
  },
  {
    title: 'MobFood',
    subtitle: 'Gourmet delights at your doorstep.',
    description: 'From local hidden gems to global culinary giants, order your favorite meals and track them live until they arrive hot and fresh.',
    image: foodImg,
    icon: <Utensils className="w-6 h-6" />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    reverse: true
  },
  {
    title: 'MobNow',
    subtitle: 'Essentials in the blink of an eye.',
    description: 'Ran out of milk? Need medicine fast? MobNow delivers daily essentials, groceries, and more in under 10 minutes.',
    image: nowImg,
    icon: <Zap className="w-6 h-6" />,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    reverse: false
  }
];

const LifestyleSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mobrand-teal font-black uppercase tracking-[0.25em] text-[10px] mb-4"
          >
            The Mobrand Experience
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-heading text-mobrand-primary leading-[1.1] tracking-tighter"
          >
            Everything you love, <br />
            <span className="text-slate-400">all in one place.</span>
          </motion.h2>
        </div>

        <div className="space-y-32 lg:space-y-48">
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
            >
              {/* Text Side */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="max-w-xl"
                >
                  <div className={`w-14 h-14 rounded-2xl ${section.bg} ${section.color} flex items-center justify-center mb-8 shadow-sm`}>
                    {section.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black font-heading text-mobrand-primary tracking-tight mb-4">
                    {section.title}
                  </h3>
                  <p className={`text-xl font-bold ${section.color} mb-6`}>
                    {section.subtitle}
                  </p>
                  <p className="text-lg text-slate-500 leading-relaxed font-body mb-10">
                    {section.description}
                  </p>
                  
                  <button className="flex items-center gap-3 text-mobrand-primary font-black uppercase tracking-widest text-xs group">
                    Start Exploring 
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    <div className="h-px flex-1 bg-slate-100 min-w-[60px]" />
                  </button>
                </motion.div>
              </div>

              {/* Image Side */}
              <div className="flex-1 w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Decorative background element */}
                  <div className={`absolute -inset-4 rounded-[3rem] ${section.bg} opacity-50 blur-2xl group-hover:opacity-80 transition-opacity duration-700`} />
                  
                  <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                    <img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Glass overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                       <p className="text-white font-bold text-sm tracking-wide">Premium Quality. Guaranteed Delivery.</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
