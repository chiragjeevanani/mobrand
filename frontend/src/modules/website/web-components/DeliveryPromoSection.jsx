import React from 'react';
import { motion } from 'framer-motion';
import { Truck, ShieldCheck, Package, Bike, BarChart, Store, MapPin, CreditCard, Headphones, CalendarDays } from 'lucide-react';
import riderImage from '../../../assets/images/delivery_image.png';

const DeliveryPromoSection = () => {
  const bulletPoints = [
    {
      icon: <Package className="w-5 h-5 text-orange-500" />,
      title: "Exclusive for Mobrand Vendors",
      description: "Only Mobrand vendors can create delivery requests."
    },
    {
      icon: <Bike className="w-5 h-5 text-orange-500" />,
      title: "Fast & Reliable Deliveries",
      description: "Real-time tracking and quick order deliveries."
    },
    {
      icon: <BarChart className="w-5 h-5 text-orange-500" />,
      title: "Smart Delivery Management",
      description: "Manage orders, riders, and deliveries all in one place."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-orange-500" />,
      title: "Secure & Trusted",
      description: "Safe deliveries, secure payments, complete trust."
    }
  ];

  return (
    <section className="py-24 bg-mobrand-primary text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side: Asymmetric Overlap Graphic */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative max-w-[500px] mx-auto lg:mx-0">
              
              {/* Backing structural card */}
              <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 bg-mobrand-dark pointer-events-none" />
              
              {/* Main Visual Container */}
              <div className="relative border border-white/20 bg-mobrand-primary p-6 md:p-8">
                
                {/* Rider Image Wrapper */}
                <div className="relative w-full h-[320px] md:h-[400px] overflow-hidden border border-white/10 bg-slate-950 flex items-center justify-center">
                  <img 
                    src={riderImage} 
                    alt="Mobrand Delivery Rider" 
                    className="w-full h-full object-cover object-center contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mobrand-primary via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-6 left-6 border border-orange-500/30 bg-mobrand-dark/90 p-4 backdrop-blur-md max-w-[200px]"
                  >
                    <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest mb-1">MOPAK Rider Network</p>
                    <p className="text-2xl font-black font-heading tracking-tight text-white">5,000+</p>
                    <p className="text-[9px] text-slate-400 font-medium">On-demand riders active across tier 1-2 cities.</p>
                  </motion.div>
                </div>

                {/* Sub-card: Interactive mock dispatch notification */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 border border-white/20 bg-mobrand-dark p-4 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-white">Order Dispatch #9802</span>
                      <span className="text-[9px] px-2 py-0.5 bg-orange-500 text-white font-bold tracking-wider rounded-sm">ACTIVE</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Mopak Rider accepted order. ETA 9 mins.</p>
                  </div>
                </motion.div>

              </div>
            </div>
          </div>

          {/* Text/Content Side */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-orange-500/20 bg-orange-500/10 mb-6 text-orange-500 text-xs font-black uppercase tracking-widest rounded-full">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                <span>MOPAK By Mobrand Vendor Network</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight tracking-tighter mb-6">
                DELIVERY MADE FOR <br className="hidden md:block"/>
                <span className="text-orange-500">MOBRAND VENDORS</span>
              </h2>
              
              <p className="text-slate-300 leading-relaxed font-body mb-8 text-sm md:text-base">
                MOPAK is the official delivery platform exclusively for Mobrand vendors. Deliver faster. Manage smarter. Grow bigger.
              </p>

              {/* Bullet Points */}
              <div className="space-y-6">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 border border-orange-500/20 bg-orange-500/10 rounded-full flex items-center justify-center shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-black uppercase tracking-wider text-white mb-1">
                        {point.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

        {/* Divider Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 w-full bg-gradient-to-r from-orange-600 to-orange-500 p-4 text-center border-y border-orange-400"
        >
          <span className="text-white font-black uppercase tracking-[0.2em] text-sm md:text-base">
            ONE PLATFORM. ONE NETWORK. ENDLESS POSSIBILITIES.
          </span>
        </motion.div>

        {/* Feature Icons Strip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 border-b border-white/10 pb-12"
        >
          <div className="flex flex-col items-center text-center gap-3">
            <Store className="w-8 h-8 text-slate-400" />
            <span className="text-xs font-bold text-slate-300">For Mobrand<br/>Vendors Only</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Package className="w-8 h-8 text-slate-400" />
            <span className="text-xs font-bold text-slate-300">Easy Order<br/>Management</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <MapPin className="w-8 h-8 text-slate-400" />
            <span className="text-xs font-bold text-slate-300">Real-time<br/>Tracking</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <CreditCard className="w-8 h-8 text-slate-400" />
            <span className="text-xs font-bold text-slate-300">Secure<br/>Payments</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3">
            <Headphones className="w-8 h-8 text-slate-400" />
            <span className="text-xs font-bold text-slate-300">24/7 Support<br/>for Vendors</span>
          </div>
        </motion.div>

        {/* Bottom CTA Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 border border-white/10 p-6 rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center shrink-0">
              <CalendarDays className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-black text-white uppercase tracking-wider">STAY TUNED!</p>
              <p className="text-lg font-black text-orange-500 uppercase tracking-wider">LAUNCHING SOON</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-slate-300">Built for Mobrand Vendors.</p>
            <p className="text-lg font-bold text-white">Built for <span className="text-orange-500">Growth.</span></p>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-white/10"></div>
          
          <div className="flex flex-col items-center md:items-end text-center md:text-right">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">GET READY FOR A</p>
            <p className="text-sm font-bold text-white uppercase tracking-wider">SMARTER DELIVERY</p>
            <p className="text-xl font-black text-orange-500 uppercase tracking-widest">EXPERIENCE!</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DeliveryPromoSection;
