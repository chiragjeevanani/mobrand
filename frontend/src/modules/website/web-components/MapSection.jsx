import React from 'react';
import { motion } from 'framer-motion';
import { Landmark } from 'lucide-react';
import indiaMap from '../../../assets/images/india_map_bg.png';

const activeCities = [
  { 
    name: 'New Delhi', 
    region: 'NORTH INDIA', 
    top: '28%', left: '35%', 
    cardClasses: 'bottom-[calc(100%+1.5rem)] left-[calc(100%+1.5rem)]',
    lineClasses: 'w-8 sm:w-16 -rotate-45 origin-left top-1/2 left-0' 
  },
  { 
    name: 'Mumbai', 
    region: 'WEST INDIA', 
    top: '55%', left: '22%', 
    cardClasses: 'top-1/2 -translate-y-1/2 right-[calc(100%+1.5rem)]',
    lineClasses: 'w-8 sm:w-16 rotate-180 origin-left top-1/2 left-0' 
  },
  { 
    name: 'Kolkata', 
    region: 'EAST INDIA', 
    top: '50%', left: '60%', 
    cardClasses: 'top-[calc(100%+1.5rem)] left-[calc(100%+1.5rem)]',
    lineClasses: 'w-8 sm:w-16 rotate-45 origin-left top-1/2 left-0' 
  },
  { 
    name: 'Bengaluru', 
    region: 'SOUTH INDIA', 
    top: '75%', left: '33%', 
    cardClasses: 'top-1/2 -translate-y-1/2 right-[calc(100%+1.5rem)]',
    lineClasses: 'w-8 sm:w-16 rotate-180 origin-left top-1/2 left-0' 
  },
  { 
    name: 'Chennai', 
    region: 'SOUTH INDIA', 
    top: '80%', left: '38%', 
    cardClasses: 'top-1/2 -translate-y-1/2 left-[calc(100%+1.5rem)]',
    lineClasses: 'w-6 sm:w-12 rotate-0 origin-left top-1/2 left-0' 
  }
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
                    className="absolute pointer-events-auto flex items-center justify-center"
                    style={{ top: city.top, left: city.left }}
                  >
                    {/* Dashed Line */}
                    <motion.div 
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                      className={`absolute border-t-2 border-dashed border-mobrand-teal/40 z-0 ${city.lineClasses}`} 
                    />

                    {/* The Dot */}
                    <motion.div 
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + (index * 0.2) }}
                      className="relative z-10"
                    >
                      <div className="absolute inset-[-8px] rounded-full bg-mobrand-teal/10 blur-sm" />
                      <div className="absolute inset-0 rounded-full bg-mobrand-teal animate-ping opacity-30" />
                      <div className="relative w-4 h-4 bg-mobrand-primary border-2 border-white rounded-full shadow-[0_0_10px_rgba(0,0,0,0.2)]" />
                    </motion.div>

                    {/* The Card */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.7 + (index * 0.2), type: "spring", stiffness: 100 }}
                      className={`absolute bg-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2 sm:gap-3 whitespace-nowrap z-20 ${city.cardClasses}`}
                    >
                      <div className="bg-mobrand-teal/10 p-1 sm:p-1.5 rounded-lg">
                         <Landmark className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-mobrand-primary" />
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm font-bold text-slate-800 leading-none mb-0.5 sm:mb-1">{city.name}</div>
                        <div className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">{city.region}</div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 flex items-center gap-2 sm:gap-3 bg-white border border-slate-100 px-4 py-2 sm:px-5 sm:py-3 rounded-full shadow-xl shadow-slate-200/20 z-20"
            >
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-mobrand-teal animate-pulse" />
              <span className="text-[9px] sm:text-[10px] font-black text-slate-600 uppercase tracking-widest px-1">Active Expansion</span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapSection;
