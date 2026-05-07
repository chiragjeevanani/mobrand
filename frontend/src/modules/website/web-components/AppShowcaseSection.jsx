import React from 'react';
import { motion } from 'framer-motion';
import { Store, Utensils, Calendar, ChevronRight } from 'lucide-react';
import showcaseImage from '../../../assets/images/app_showcase_b2b.png';

const verticals = [
  {
    id: 'shops',
    name: 'Shops & Retail',
    icon: <Store className="w-6 h-6" />,
    tagline: 'Your products, globally visible.',
    description: 'Easily set up catalogs, manage inventory, process fast orders, and offer physical deliveries with a single, smart storefront.',
    accent: 'from-blue-500 to-indigo-600',
    stats: ['Unlimited Inventory', 'Zero Complex Setup']
  },
  {
    id: 'food',
    name: 'Food & Beverages',
    icon: <Utensils className="w-6 h-6" />,
    tagline: 'Manage orders, increase revenue.',
    description: 'Take instant orders, control menus, set prices, offer dynamic discounts, and schedule seamless kitchen-to-door deliveries.',
    accent: 'from-orange-500 to-red-600',
    stats: ['Real-time Dispatch', 'Menu Control Panel']
  },
  {
    id: 'services',
    name: 'Services & Booking',
    icon: <Calendar className="w-6 h-6" />,
    tagline: 'Perfect booking scheduler.',
    description: 'Configure available time-slots, let customers book your specialized services, and monitor your entire calendar at a glance.',
    accent: 'from-emerald-500 to-teal-600',
    stats: ['Calendar Sync', 'Automatic Alerts']
  }
];

const AppShowcaseSection = () => {
  return (
    <section id="app-showcase" className="py-24 lg:py-32 bg-mobrand-dark text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-mobrand-teal/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mobrand-accent font-medium uppercase tracking-[0.2em] text-xs mb-4"
          >
            The Merchant Advantage
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black font-heading leading-[1.1] tracking-tighter"
          >
            Control & Scale From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-teal to-blue-400">Your Unified Dashboard</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Vertical Selection Side */}
          <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${vertical.accent} flex items-center justify-center text-white shadow-lg`}>
                    {vertical.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black font-heading tracking-tight mb-1 group-hover:text-mobrand-accent transition-colors">
                      {vertical.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{vertical.tagline}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5">
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {vertical.description}
                  </p>
                  <div className="flex gap-4">
                    {vertical.stats.map((stat, i) => (
                      <span key={i} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-white/5 rounded-full text-slate-300">
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Showcase Side */}
          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative z-10"
            >
              {/* Dynamic light scanline */}
              <motion.div 
                animate={{ top: ['0%', '100%', '0%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-mobrand-teal/30 to-transparent z-20 pointer-events-none"
              />
              
              <img 
                src={showcaseImage} 
                alt="Mobrand Business Software Interface" 
                className="w-full h-auto object-contain drop-shadow-[0_40px_100px_rgba(0,0,0,0.6)]" 
              />
              
              {/* Floating detail tag */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] -right-4 lg:-right-8 bg-mobrand-accent text-mobrand-primary text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-2xl shadow-2xl rotate-6 z-30"
              >
                100% Unified System
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcaseSection;
