import React from 'react';
import { motion } from 'framer-motion';
import indiaMap from '../../../assets/images/india_map_bg.png';

const activeCities = [
  { name: 'Bengaluru', top: '74%', left: '36%' },
  { name: 'New Delhi', top: '30%', left: '33%' },
  { name: 'Mumbai', top: '60%', left: '22%' },
  { name: 'Hyderabad', top: '58%', left: '42%' },
  { name: 'Pune', top: '65%', left: '26%' },
  { name: 'Chennai', top: '82%', left: '35%' },
  { name: 'Ahmedabad', top: '45%', left: '25%' },
];

const MapSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Content: Left side unchanged */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-mobrand-teal font-black uppercase tracking-[0.25em] text-[10px] mb-6"
            >
              Our Coverage
            </motion.div>
            <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-heading text-mobrand-primary leading-tight mb-6"
          >
            Powering Businesses <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-teal to-blue-500">Across Indian Cities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 leading-relaxed mb-12"
          >
            From Mumbai to Chennai, Bengaluru to Delhi — Mobrand is helping storefronts digitize, manage stock, and grow their businesses easily with a modern, high-speed ecosystem.
          </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-12"
            >
              <div className="border-l-4 border-mobrand-teal pl-6">
                <div className="text-4xl font-black font-heading text-mobrand-primary mb-1 tracking-tight">100+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Businesses Onboarded</div>
              </div>
              <div className="border-l-4 border-slate-100 pl-6">
                <div className="text-4xl font-black font-heading text-mobrand-primary mb-1 tracking-tight">5,000+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Daily Orders Processed</div>
              </div>
            </motion.div>
          </div>

          {/* Map Visualization: Right side with Image */}
          <div className="relative w-full aspect-[4/5] md:aspect-square bg-slate-50/50 rounded-[3.5rem] border border-slate-100 flex items-center justify-center p-4 md:p-12 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.02)]">

            {/* India Map Image Background */}
            <div className="relative w-full h-full flex items-center justify-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                src={indiaMap}
                alt="India Map Coverage"
                className="w-full h-full object-contain opacity-80 mix-blend-multiply transition-all duration-700 hover:scale-[1.02]"
              />

              {/* City Markers overlay */}
              <div className="absolute inset-0 z-10 pointer-events-none">
                {activeCities.map((city, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + (index * 0.1),
                      type: "spring",
                      stiffness: 100
                    }}
                    className="absolute flex items-center justify-center group cursor-pointer pointer-events-auto"
                    style={{ top: city.top, left: city.left }}
                  >
                    <div className="relative">
                      <div className="absolute inset-[-12px] rounded-full bg-mobrand-teal/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute inset-0 rounded-full bg-mobrand-teal animate-ping opacity-30" />
                      <div className="relative w-3.5 h-3.5 bg-mobrand-teal border-2 border-white rounded-full z-10 shadow-lg group-hover:scale-150 group-hover:bg-mobrand-primary transition-all duration-500" />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 whitespace-nowrap bg-mobrand-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-2xl pointer-events-none z-20">
                      {city.name}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[6px] border-transparent border-t-mobrand-primary" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 right-10 flex items-center gap-3 bg-white border border-slate-100 px-5 py-2.5 rounded-2xl shadow-xl shadow-slate-200/20 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-mobrand-teal animate-pulse" />
              <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest px-1">Active Expansion</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
