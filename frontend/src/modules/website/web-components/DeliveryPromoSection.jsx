import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, ShieldAlert, Award, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import riderImage from '../../../assets/images/indian_rider_bike.png';

const DeliveryPromoSection = () => {
  const bulletPoints = [
    {
      icon: <Clock className="w-5 h-5 text-mobrand-accent" />,
      title: "15-Min Hyper-Local Delivery",
      description: "Auto-assign orders to the closest available riders near your retail store."
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-mobrand-accent" />,
      title: "100% Insured Shipments",
      description: "Every order dispatched is covered. Complete peace of mind for fragile goods."
    },
    {
      icon: <Award className="w-5 h-5 text-mobrand-accent" />,
      title: "Pre-Verified Professional Fleet",
      description: "Trained riders who ensure high-quality, professional delivery experiences."
    }
  ];

  return (
    <section className="py-24 bg-mobrand-primary text-white relative overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:30px_30px]" />
      <div className="absolute -bottom-48 -left-48 w-[400px] h-[400px] bg-mobrand-teal/10 rounded-full blur-[100px] pointer-events-none" />

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
                    className="absolute bottom-6 left-6 border border-white/20 bg-mobrand-dark/90 p-4 backdrop-blur-md max-w-[200px]"
                  >
                    <p className="text-[10px] font-black text-mobrand-accent uppercase tracking-widest mb-1">Rider Network</p>
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
                  <div className="w-10 h-10 bg-mobrand-accent flex items-center justify-center shrink-0">
                    <Truck className="w-5 h-5 text-mobrand-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-white">Order Dispatch #9802</span>
                      <span className="text-[9px] px-2 py-0.5 bg-mobrand-teal text-white font-bold tracking-wider">ACTIVE</span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">Rider Sanjay Kumar accepted order. ETA 9 mins.</p>
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
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/20 bg-white/5 mb-6 text-mobrand-accent text-xs font-black uppercase tracking-widest">
                <Truck className="w-3.5 h-3.5" />
                <span>Integrated Logistics Support</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight tracking-tighter mb-6">
                Your Business Now Comes With <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-accent to-mobrand-teal">A Delivery Fleet.</span>
              </h2>
              
              <p className="text-slate-300 leading-relaxed font-body mb-8 text-sm md:text-base">
                Stop worrying about courier partner contracts or high shipping cuts. Mobrand gives your business access to our robust network of delivery partners. Seamlessly fulfill local orders straight from your merchant dashboard.
              </p>

              {/* Bullet Points */}
              <div className="space-y-6 mb-10">
                {bulletPoints.map((point, index) => (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-9 h-9 border border-white/10 bg-white/5 flex items-center justify-center shrink-0">
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

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link 
                  to="/delivery-partners"
                  className="w-full sm:w-auto px-8 py-4 bg-mobrand-accent text-mobrand-primary hover:bg-white transition-all font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2"
                >
                  More Info
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DeliveryPromoSection;
