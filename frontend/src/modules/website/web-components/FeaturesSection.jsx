import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Package, Users, BarChart3, Layers, Headphones } from 'lucide-react';

const features = [
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'Order Management',
    description: 'Manage all incoming orders in real-time. Accept, process, and track fulfillment seamlessly.',
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: 'Product & Inventory',
    description: 'Add, update, and organize your catalog. Keep track of stock levels to ensure you never miss a sale.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Customer Management',
    description: 'Access customer profiles, order histories, and preferences to build long-term relationships.',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Sales & Analytics',
    description: 'Monitor daily, weekly, and monthly performance with detailed graphs and reports on your growth.',
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: 'Multi-Business Support',
    description: 'Perfect for any business type — retail stores, restaurants, service bookings, and more.',
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: 'Dedicated 24/7 Support',
    description: 'Our professional merchant care team is ready to support you at every stage of your business journey.',
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
            Powerful features for <br />
            <span className="text-slate-400">your business growth</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 font-body leading-relaxed max-w-2xl"
          >
            Mobrand is a comprehensive business-to-business platform designed to help you digitize, manage, and scale your storefront with absolute confidence.
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
