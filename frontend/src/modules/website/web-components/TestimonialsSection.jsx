import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner, Kumar Grocers",
    image: "https://i.pravatar.cc/150?u=rajesh",
    text: "Since setting up our online storefront on Mobrand, our monthly sales have increased by 45%. The unified dashboard lets us track inventory and dispatch orders completely effortlessly.",
    rating: 5,
    city: "New Delhi"
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Founder, Chic Boutique",
    image: "https://i.pravatar.cc/150?u=sneha",
    text: "We launched our boutique on Mobrand's Shops vertical. Getting customer payments settled instantly and managing our deliveries has made scaling our business completely hassle-free.",
    rating: 5,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Anita Kapoor",
    role: "Owner, Spice Garden",
    image: "https://i.pravatar.cc/150?u=anita",
    text: "Listing our restaurant on Mobrand doubled our online orders in the first week. The unified dashboard makes managing our menu and tracking deliveries so much easier than other platforms.",
    rating: 5,
    city: "Bengaluru"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section className="py-24 lg:py-32 bg-mobrand-dark text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-mobrand-accent rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <div className="w-full lg:w-1/3 text-center lg:text-left">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-mobrand-accent font-medium uppercase tracking-wider mb-4"
             >
               Success Stories
             </motion.div>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-8"
             >
               Don't just take <br className="hidden md:block"/> our word for it.
             </motion.h2>

             <div className="flex items-center justify-center lg:justify-start gap-4">
               <button 
                 onClick={() => paginate(-1)}
                 className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
               >
                 <ChevronLeft className="w-6 h-6" />
               </button>
               <button 
                 onClick={() => paginate(1)}
                 className="w-12 h-12 rounded-full border border-mobrand-teal bg-mobrand-teal/20 text-mobrand-teal flex items-center justify-center hover:bg-mobrand-teal hover:text-white transition-all transform hover:scale-105"
               >
                 <ChevronRight className="w-6 h-6" />
               </button>
             </div>
          </div>

          <div className="w-full lg:w-2/3 h-[400px] relative">
             <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="absolute inset-0"
                >
                  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 backdrop-blur-md h-full flex flex-col justify-between">
                     <div>
                        <Quote className="w-12 h-12 text-mobrand-teal opacity-50 mb-6" />
                        <p className="text-xl lg:text-2xl font-body leading-relaxed text-slate-200 mb-8">
                          "{testimonials[currentIndex].text}"
                        </p>
                     </div>
                     
                     <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
                        <div className="flex items-center gap-4">
                           <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-mobrand-teal/50">
                             <img 
                               src={testimonials[currentIndex].image} 
                               alt={testimonials[currentIndex].name} 
                               className="w-full h-full object-cover"
                             />
                           </div>
                           <div>
                             <h4 className="font-bold font-heading text-lg">{testimonials[currentIndex].name}</h4>
                             <p className="text-sm text-slate-400">{testimonials[currentIndex].role} • {testimonials[currentIndex].city}</p>
                           </div>
                        </div>
                        
                        <div className="hidden sm:flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-5 h-5 ${i < testimonials[currentIndex].rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} 
                            />
                          ))}
                        </div>
                     </div>
                  </div>
                </motion.div>
             </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
