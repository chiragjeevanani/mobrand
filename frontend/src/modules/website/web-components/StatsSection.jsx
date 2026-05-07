import React, { useRef, useEffect } from 'react';
import { useCountUp } from 'react-countup';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Businesses Onboarded', value: 100, suffix: '+' },
  { id: 2, name: 'Orders Processed Daily', value: 5000, suffix: '+' },
  { id: 3, name: 'Business Categories', value: 20, suffix: '+' },
  { id: 4, name: 'Platform Uptime', value: 99.9, suffix: '%' },
];

const StatCounter = ({ end, suffix }) => {
  const countUpRef = useRef(null);
  const isFloat = end % 1 !== 0;
  
  const { start, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: end,
    duration: 3,
    separator: ',',
    decimals: isFloat ? 1 : 0,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div className="text-5xl lg:text-6xl font-bold font-heading mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
      <span ref={countUpRef} />
      <span className="text-mobrand-accent ml-1">{suffix}</span>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="bg-mobrand-dark py-20 lg:py-28 text-white relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mobrand-teal/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mobrand-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:divide-x lg:divide-white/10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="px-4"
            >
              <StatCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-lg lg:text-xl font-medium text-slate-300">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
