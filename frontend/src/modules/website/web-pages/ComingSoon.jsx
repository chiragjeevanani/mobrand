import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Mail, ArrowLeft, Bell, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1200);
  };

  return (
    <div className="bg-slate-50 min-h-screen font-body text-slate-800 antialiased overflow-x-hidden flex flex-col justify-between">
      <Navbar />

      {/* Main Showcase Section */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 flex-grow flex items-center justify-center overflow-hidden">
        {/* Colorful glowing backgrounds */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-mobrand-teal/10 via-indigo-500/5 to-mobrand-accent/10 blur-3xl" />
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-mobrand-teal/15 blur-3xl" />
        <div className="absolute -bottom-20 -left-40 w-96 h-96 rounded-full bg-mobrand-accent/10 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10 max-w-3xl text-center">
          {/* Sparkles Icon Bubble */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 12 }}
            className="w-16 h-16 rounded-3xl bg-gradient-to-br from-mobrand-teal to-indigo-600 flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-mobrand-teal/20 relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/15 animate-ping opacity-20" />
            <Sparkles className="w-7 h-7" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="bg-mobrand-teal/10 text-mobrand-teal text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block border border-mobrand-teal/10">
              Module Under Construction
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-mobrand-primary leading-tight tracking-tight">
              Something Beautiful <br className="hidden sm:inline" />
              is On the Way
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto leading-relaxed">
              We're currently building premium business resources, vertical workflows, and partner tools for this section. Sign up below to get early beta updates.
            </p>
          </motion.div>

          {/* Subscribe Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 max-w-md mx-auto bg-white p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form 
                  key="subscribe-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2 relative"
                >
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-150 rounded-2xl pl-11 pr-4 py-3.5 text-sm focus:bg-white focus:border-mobrand-teal focus:outline-none transition-all"
                    />
                  </div>
                  <button 
                    type="submit"
                    disabled={loading}
                    className="bg-mobrand-teal hover:bg-mobrand-teal/95 disabled:bg-slate-400 text-white font-semibold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-md active:scale-95 flex items-center justify-center gap-2 shrink-0 cursor-pointer"
                  >
                    {loading ? (
                      <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <Bell className="w-4 h-4" />
                        <span>Notify Me</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="subscribed-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-4 text-center space-y-2 flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 animate-pulse" />
                  </div>
                  <h4 className="text-base font-bold text-slate-800">Perfect! You're on the list.</h4>
                  <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                    We will notify you immediately once this section goes live with your client dashboard resources.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Quick Back Navigation link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-mobrand-teal transition-all group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Return to Landing Page</span>
            </Link>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ComingSoon;
