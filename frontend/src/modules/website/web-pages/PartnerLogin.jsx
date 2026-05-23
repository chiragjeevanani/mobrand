import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2, User, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';

const PartnerLogin = () => {
  const [partnerType, setPartnerType] = useState('merchant'); // 'merchant' | 'delivery'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    // Simulate login success
    setSuccess(true);
  };

  return (
    <div className="bg-mobrand-bg min-h-screen text-slate-800 antialiased selection:bg-mobrand-teal selection:text-white font-body flex flex-col justify-between">
      <Navbar />

      <main className="pt-28 pb-20 flex-grow flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Side: Branding Column */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-white text-mobrand-teal text-xs font-black uppercase tracking-widest rounded-[2px]">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>Unified Partner Gateway</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-black font-heading tracking-tighter text-mobrand-primary leading-[1.1]">
                Access Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-teal to-mobrand-accent">Partner Dashboard.</span>
              </h1>
              
              <p className="text-slate-600 leading-relaxed text-sm max-w-md mx-auto lg:mx-0">
                Log in to manage your online storefront, track dispatches, analyze payouts, and coordinate logistics operations seamlessly.
              </p>

              <div className="pt-6 border-t border-slate-200 space-y-4 max-w-sm mx-auto lg:mx-0">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-mobrand-teal shrink-0 mt-0.5" />
                  <div className="text-left">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Encrypted Sessions</h4>
                    <p className="text-[10px] text-slate-500">Every portal access is secured with industry-standard TLS encryption protocols.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Login Form Box */}
            <div className="lg:col-span-7 relative">
              <div className="relative max-w-[480px] mx-auto lg:mr-0">
                
                {/* Asymmetric brutalist border box */}
                <div className="absolute inset-0 border-2 border-slate-900 translate-x-3 translate-y-3 bg-white pointer-events-none rounded-[2px]" />
                
                <div className="relative border-2 border-slate-900 bg-slate-50 p-8 rounded-[2px]">
                  
                  {/* Partner Type Toggles */}
                  <div className="grid grid-cols-2 border border-slate-200 p-1 bg-white mb-8 rounded-[2px]">
                    <button 
                      type="button"
                      onClick={() => { setPartnerType('merchant'); setError(''); setSuccess(false); }}
                      className={`py-2.5 text-center text-[10px] font-black uppercase tracking-wider transition-all rounded-[2px] cursor-pointer ${
                        partnerType === 'merchant' 
                          ? 'bg-mobrand-primary text-white' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Merchant Portal
                    </button>
                    <button 
                      type="button"
                      onClick={() => { setPartnerType('delivery'); setError(''); setSuccess(false); }}
                      className={`py-2.5 text-center text-[10px] font-black uppercase tracking-wider transition-all rounded-[2px] cursor-pointer ${
                        partnerType === 'delivery' 
                          ? 'bg-mobrand-primary text-white' 
                          : 'text-slate-500 hover:text-slate-700'
                      }`}
                    >
                      Delivery Rider
                    </button>
                  </div>

                  {error && (
                    <div className="mb-6 p-4 border border-rose-200 bg-rose-50 text-rose-700 text-xs rounded-[2px]">
                      {error}
                    </div>
                  )}

                  {!success ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Email Field */}
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Registered Email Address</label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input 
                            type="email" 
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder={partnerType === 'merchant' ? 'merchant@business.com' : 'rider@mobrand.in'} 
                            className="w-full border border-slate-200 bg-white py-3.5 pl-10 pr-4 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                          />
                        </div>
                      </div>

                      {/* Password Field */}
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500">Security Password</label>
                          <a href="#forgot" className="text-[10px] text-mobrand-teal hover:underline font-bold uppercase tracking-wider">Forgot?</a>
                        </div>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                            <Lock className="w-4 h-4" />
                          </span>
                          <input 
                            type={showPassword ? 'text' : 'password'} 
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••" 
                            className="w-full border border-slate-200 bg-white py-3.5 pl-10 pr-10 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                          />
                          <button 
                            type="button" 
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Remember & Options */}
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer select-none">
                          <input 
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="accent-mobrand-teal shrink-0" 
                          />
                          <span className="text-[11px] text-slate-500 font-bold uppercase tracking-wider">Remember Session</span>
                        </label>
                      </div>

                      {/* Submit */}
                      <button 
                        type="submit"
                        className="w-full py-4 bg-mobrand-teal hover:bg-mobrand-primary text-white font-bold uppercase tracking-wider text-xs transition-all flex items-center justify-center gap-2 rounded-[2px] cursor-pointer"
                      >
                        Secure Login
                        <ArrowRight className="w-4 h-4" />
                      </button>

                    </form>
                  ) : (
                    // Success View
                    <div className="text-center py-6 space-y-6">
                      <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto rounded-full">
                        <CheckCircle2 className="w-10 h-10 animate-bounce" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-black font-heading text-mobrand-primary tracking-tight mb-2">
                          Authentication Success!
                        </h3>
                        <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                          Successfully authenticated session for <span className="font-bold text-slate-800">{email}</span>. Redirecting to the partner dashboard console...
                        </p>
                      </div>
                      <div className="p-4 border border-emerald-100 bg-emerald-50/50 text-[10px] text-emerald-800 rounded-[2px] max-w-xs mx-auto font-medium">
                        Redirecting to {partnerType === 'merchant' ? 'Merchant Store Manager' : 'Rider Operations Portal'}...
                      </div>
                    </div>
                  )}

                  {/* Portal Sign-up redirect */}
                  <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                    <p className="text-[11px] text-slate-500">
                      Not registered as a partner?{' '}
                      {partnerType === 'merchant' ? (
                        <Link to="/contact-us" className="text-mobrand-teal hover:underline font-bold uppercase tracking-wider">Apply Now</Link>
                      ) : (
                        <Link to="/delivery-partners" className="text-mobrand-teal hover:underline font-bold uppercase tracking-wider">Apply Now</Link>
                      )}
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default PartnerLogin;
