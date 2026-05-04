import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, Zap, Bike, MapPin, Network } from 'lucide-react';

const features = [
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'One App, Everything',
    description: 'Browse e-commerce, food & groceries from a single unified cart and home screen.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: '10-Minute Quick Commerce',
    description: 'Our dark store network ensures instant delivery of your daily essentials.',
  },
  {
    icon: <Bike className="w-6 h-6" />,
    title: '30-Minute Food Delivery',
    description: '5,000+ restaurant partners with real-time tracking from kitchen to doorstep.',
  },
  {
    icon: <Wallet className="w-6 h-6" />,
    title: 'Unified Smart Wallet',
    description: 'Pay across all verticals effortlessly and earn massive cashback on every order.',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: 'Live Order Tracking',
    description: 'Precision GPS tracking so you know exactly where your delivery is at all times.',
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Daily Deals & Offers',
    description: 'Personalized discounts across shopping, food, and essentials tailored for you.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-[#F9FAFB] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header Section */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-mobrand-teal font-bold uppercase tracking-[0.2em] text-xs mb-4"
          >
            Why Choose Mobrand
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-heading text-mobrand-primary leading-[1.15] mb-6 tracking-tight"
          >
            The ecosystem built for <br />
            <span className="text-slate-400">convenience & speed</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-body leading-relaxed max-w-2xl"
          >
            Mobrand is more than an app — it's a unified platform designed to save you time and money on every transaction.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-start group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-6 text-mobrand-teal group-hover:border-mobrand-teal/30 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-800 mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-slate-500 leading-relaxed font-body">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
