import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star, Play, Pause } from 'lucide-react';

import rajeshImg from '../../../assets/images/testimonial_rajesh.png';
import snehaImg from '../../../assets/images/testimonial_sneha.png';
import anitaImg from '../../../assets/images/testimonial_anita.png';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Owner, Kumar Grocers",
    image: rajeshImg,
    text: "Since setting up our online storefront on Mobrand, our monthly sales have increased by 45%. The unified dashboard lets us track inventory and dispatch orders completely effortlessly.",
    rating: 5,
    city: "New Delhi"
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Founder, Chic Boutique",
    image: snehaImg,
    text: "We launched our boutique on Mobrand's Shops vertical. Getting customer payments settled instantly and managing our deliveries has made scaling our business completely hassle-free.",
    rating: 5,
    city: "Mumbai"
  },
  {
    id: 3,
    name: "Anita Kapoor",
    role: "Owner, Spice Garden",
    image: anitaImg,
    text: "Listing our restaurant on Mobrand doubled our online orders in the first week. The unified dashboard makes managing our menu and tracking deliveries so much easier than other platforms.",
    rating: 5,
    city: "Bengaluru"
  }
];

const AUTO_PLAY_INTERVAL = 6000; // 6 seconds

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  // Auto-play scrolling logic
  useEffect(() => {
    if (isPlaying && !isHovered) {
      timerRef.current = setInterval(() => {
        paginate(1);
      }, AUTO_PLAY_INTERVAL);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, isHovered]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 150 : -150,
      opacity: 0,
      rotate: direction > 0 ? 5 : -5,
      scale: 0.95
    }),
    center: {
      zIndex: 10,
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 150 : -150,
      opacity: 0,
      rotate: direction < 0 ? 5 : -5,
      scale: 0.95
    }),
  };

  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section className="py-24 lg:py-32 bg-mobrand-dark text-white relative overflow-hidden">
      {/* Background Grid & Blur blobs */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-mobrand-teal/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Controls */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/10 bg-white/5 mb-6 text-mobrand-accent text-xs font-black uppercase tracking-widest rounded-none">
                <span>Success Stories</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black font-heading tracking-tighter leading-[1.05] text-white">
                Loved By <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-teal to-mobrand-accent">Local Store Owners.</span>
              </h2>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Discover how retail stores, restaurants, and wholesale distributors are scaling their operations and revenue using the Mobrand platform.
            </p>

            {/* Custom Pagination & Playback Panel */}
            <div className="pt-6 border-t border-white/10 flex items-center gap-8">
              
              {/* Slide Index Progress */}
              <div className="flex flex-col gap-1 shrink-0">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Slide
                </span>
                <span className="text-2xl font-black font-mono tracking-wider">
                  0{currentIndex + 1} <span className="text-slate-600 text-lg">/ 0{testimonials.length}</span>
                </span>
              </div>

              {/* Progress Line */}
              <div className="flex-1 h-0.5 bg-slate-800 relative overflow-hidden">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-mobrand-teal"
                  initial={{ width: "33.3%" }}
                  animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Controls Group */}
              <div className="flex gap-2 shrink-0">
                
                {/* Play/Pause Toggle */}
                <button 
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause Auto-scroll" : "Play Auto-scroll"}
                  className="w-12 h-12 border border-white/10 hover:border-white text-white bg-transparent transition-all flex items-center justify-center rounded-none active:scale-95 cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-mobrand-accent" />}
                </button>

                {/* Prev Button */}
                <button 
                  onClick={() => paginate(-1)}
                  aria-label="Previous Testimonial"
                  className="w-12 h-12 border border-white/10 hover:border-white text-white bg-transparent transition-all flex items-center justify-center rounded-none active:scale-95 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Next Button */}
                <button 
                  onClick={() => paginate(1)}
                  aria-label="Next Testimonial"
                  className="w-12 h-12 border border-slate-900 bg-mobrand-accent text-mobrand-primary hover:bg-white hover:text-mobrand-primary transition-all flex items-center justify-center rounded-none active:scale-95 cursor-pointer"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Stacked Cards Deck */}
          <div 
            className="lg:col-span-7 relative h-[440px] md:h-[380px] flex items-center justify-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            
            {/* Card 3: Deepest Stack (Visual only) */}
            <div className="absolute inset-0 border border-white/5 bg-slate-950 scale-90 translate-x-8 translate-y-8 opacity-20 pointer-events-none rounded-none" />

            {/* Card 2: Underneath Stack (Visual only) */}
            <div className="absolute inset-0 border border-white/10 bg-slate-900 scale-95 translate-x-4 translate-y-4 opacity-60 pointer-events-none rounded-none" />

            {/* Active Card Container */}
            <div className="relative w-full h-full border border-white/20 bg-mobrand-primary p-8 md:p-10 flex flex-col justify-between rounded-none overflow-hidden">
              
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 220, damping: 24 },
                    opacity: { duration: 0.25 }
                  }}
                  className="w-full h-full flex flex-col justify-between"
                >
                  {/* Quote & Text */}
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <Quote className="w-12 h-12 text-mobrand-teal shrink-0 opacity-40" />
                      
                      <div className="flex items-center gap-2">
                        {/* Status micro-badge */}
                        {isHovered && isPlaying && (
                          <span className="text-[8px] tracking-widest text-mobrand-accent font-bold uppercase border border-mobrand-accent/20 px-2 py-0.5 bg-mobrand-accent/5 rounded-none animate-pulse">
                            PAUSED
                          </span>
                        )}
                        
                        {/* Rating */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < testimonials[currentIndex].rating ? 'text-mobrand-accent fill-mobrand-accent' : 'text-slate-700'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-lg md:text-xl font-heading leading-relaxed text-slate-100 font-medium tracking-wide">
                      "{testimonials[currentIndex].text}"
                    </p>
                  </div>
                  
                  {/* Profile Section */}
                  <div className="border-t border-white/10 pt-6 mt-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Profile Image with Sharp Frame */}
                      <div className="w-14 h-14 border border-white/20 bg-slate-950 shrink-0">
                        <img 
                          src={testimonials[currentIndex].image} 
                          alt={testimonials[currentIndex].name} 
                          className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-heading font-black text-sm uppercase tracking-wider text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-0.5">
                          {testimonials[currentIndex].role} — {testimonials[currentIndex].city}
                        </p>
                      </div>
                    </div>
                    
                    <span className="hidden sm:inline-block text-[8px] px-2 py-0.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-bold tracking-widest uppercase">
                      ● VERIFIED STORE OWNER
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Animated Progress Timer Bar at Card Base */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-900/50">
                  <motion.div 
                    key={currentIndex + (isHovered ? "-paused" : "-active")}
                    className="h-full bg-mobrand-accent"
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "0%" : "100%" }}
                    transition={{ 
                      duration: isHovered ? 0 : AUTO_PLAY_INTERVAL / 1000, 
                      ease: "linear" 
                    }}
                  />
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
