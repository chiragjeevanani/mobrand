import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  ArrowRight, 
  MapPin, 
  Navigation, 
  DollarSign, 
  Clock, 
  Shield, 
  FileText, 
  Check, 
  Smartphone, 
  Info, 
  Plus, 
  Minus,
  CheckCircle2,
  Calendar,
  Briefcase
} from 'lucide-react';
import Navbar from '../web-components/Navbar';
import FooterSection from '../web-components/FooterSection';
import riderPersona from '../../../assets/images/delivery_page_image.png';

const DeliveryPartners = () => {
  // Timeline steps state
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // Multi-step form state
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    vehicleType: 'bike',
    licenseNumber: '',
    aadhaarNumber: '',
    experience: 'no',
    terms: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const timelineSteps = [
    {
      title: "Order Placed & Routed",
      time: "0:00 mins",
      description: "Merchant receives a customer order. The Mobrand engine instantly calculates the optimal package assignment and routes it to the dispatcher.",
      stats: { primary: "100ms", label: "Routing Latency" }
    },
    {
      title: "Rider Match & Acceptance",
      time: "0:45 mins",
      description: "Our dispatcher matches the order with the closest available rider. The rider receives a push notification on their Mobrand Partner app and accepts.",
      stats: { primary: "98.2%", label: "Acceptance Rate" }
    },
    {
      title: "Store Pickup & Verification",
      time: "3:00 mins",
      description: "Rider arrives at the merchant's physical location. They scan the QR code on the package to verify correct items and pick up the parcel.",
      stats: { primary: "Zero Error", label: "Pickup Accuracy" }
    },
    {
      title: "Route Optimization",
      time: "3:30 mins",
      description: "Our system optimizes the delivery path based on real-time traffic data, weather conditions, and active delivery zones, presenting the route on the rider map.",
      stats: { primary: "15% Faster", label: "Route Shortening" }
    },
    {
      title: "Safe Dropoff & Confirmation",
      time: "12:00 mins",
      description: "Rider delivers the package to the customer's doorstep, takes a photo proof of delivery, collects OTP authentication, and completes the cycle.",
      stats: { primary: "< 15 Mins", label: "Average Delivery Time" }
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-mobrand-accent" />,
      title: "Industry-Best Earnings",
      description: "Earn competitive rates per order completed. Get monthly fuel allowances and additional bonuses on weekend peak shifts."
    },
    {
      icon: <Clock className="w-6 h-6 text-mobrand-accent" />,
      title: "Absolute Time Flexibility",
      description: "Log in and start delivery whenever you want. Choose your own hours and balance work with your personal life."
    },
    {
      icon: <Shield className="w-6 h-6 text-mobrand-accent" />,
      title: "Comprehensive Insurance",
      description: "All active partners are covered under our Group Personal Accident policy, offering medical expense coverage and emergency support."
    },
    {
      icon: <Zap className="w-6 h-6 text-mobrand-accent" />,
      title: "Instant Digital Payouts",
      description: "Track your earnings daily. Get payments settled straight to your bank account every Tuesday and Friday without delays."
    }
  ];

  const faqs = [
    {
      question: "What are the basic eligibility requirements to join?",
      answer: "You must be at least 18 years old, own a smartphone (Android or iOS), have a valid driver's license (for motor vehicles), and own a roadworthy vehicle (bicycle, scooter, motorcycle, or commercial light truck)."
    },
    {
      question: "What documents do I need to submit during onboarding?",
      answer: "You will need to upload your Aadhaar Card, PAN Card, active Driving License, Bank Account details (cancelled cheque or passbook photo), and the RC/Insurance copy of your vehicle."
    },
    {
      question: "How do payouts and bonuses work?",
      answer: "Payouts consist of a base order fee, distance charges, and waiting times. Additionally, we run weekend incentives, weather bonuses, and referral programs. Payouts are directly credited to your registered bank account twice a week."
    },
    {
      question: "Can I deliver if I do not own a motor vehicle?",
      answer: "Yes, you can register as a bicycle courier for local delivery zones up to 2-3km from merchant clusters. Select 'Bicycle' during your onboarding application."
    },
    {
      question: "Who do I contact if I face issues on the road?",
      answer: "Our partner support team is active 24/7. You can access chat or click-to-call rider support directly within the Mobrand Partner mobile app during any active order."
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    setFormError('');

    if (formStep === 1) {
      if (!formData.name.trim() || !formData.phone.trim() || !formData.city.trim()) {
        setFormError('Please fill in all basic information fields.');
        return;
      }
      if (!/^\d{10}$/.test(formData.phone)) {
        setFormError('Please enter a valid 10-digit mobile number.');
        return;
      }
      setFormStep(2);
    } else if (formStep === 2) {
      if (formData.vehicleType !== 'bicycle' && !formData.licenseNumber.trim()) {
        setFormError('Driving License Number is required for motorized vehicles.');
        return;
      }
      if (!formData.aadhaarNumber.trim() || !/^\d{12}$/.test(formData.aadhaarNumber)) {
        setFormError('Please enter a valid 12-digit Aadhaar Card number.');
        return;
      }
      setFormStep(3);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    if (!formData.terms) {
      setFormError('You must agree to the Terms of Service & Privacy Policy to continue.');
      return;
    }
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      city: '',
      vehicleType: 'bike',
      licenseNumber: '',
      aadhaarNumber: '',
      experience: 'no',
      terms: false
    });
    setFormStep(1);
    setFormSubmitted(false);
    setFormError('');
  };

  return (
    <div className="bg-mobrand-bg min-h-screen text-slate-800 antialiased selection:bg-mobrand-teal selection:text-white font-body">
      <Navbar />

      <main className="pt-24 overflow-x-hidden">
        
        {/* HERO SECTION: Swiss Brutalist Typographic Hero */}
        <section className="relative py-20 lg:py-28 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Asymmetric Title */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-slate-200 bg-slate-50 mb-6 text-mobrand-teal text-xs font-black uppercase tracking-widest rounded-[2px]">
                  <Zap className="w-3.5 h-3.5" />
                  <span>On-Demand Logistics Careers</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black font-heading tracking-tighter text-mobrand-primary leading-[1.05] mb-8">
                  Empower Merchants. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-mobrand-teal to-mobrand-accent">Deliver Local Business.</span>
                </h1>
                
                <p className="text-slate-600 leading-relaxed font-body max-w-2xl text-base md:text-lg mb-10">
                  Join the elite logistics network powering India's fastest growing retail stores. Deliver food, groceries, retail parcels, and documents locally. Secure payouts, absolute flexibility, and dedicated team support.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <a 
                    href="#how-it-works"
                    className="w-full sm:w-auto px-8 py-4 bg-mobrand-teal hover:bg-mobrand-primary text-white transition-all font-bold uppercase tracking-wider text-xs text-center rounded-[2px]"
                  >
                    View Delivery Flow
                  </a>
                </div>
              </div>

              {/* Right Side Visual overlapping card */}
              <div className="lg:col-span-5 relative">
                <div className="relative max-w-[400px] mx-auto lg:ml-auto">
                  {/* Outer brutalist border container */}
                  <div className="absolute inset-0 border-2 border-slate-900 translate-x-3 translate-y-3 bg-slate-50 pointer-events-none rounded-[2px]" />
                  
                  <div className="relative border-2 border-slate-900 bg-white p-6 rounded-[2px]">
                    <img 
                      src={riderPersona} 
                      alt="Mobrand Logistics Partner" 
                      className="w-full h-[320px] object-cover object-top border border-slate-200 mb-6"
                    />
                    
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-heading font-bold text-lg text-mobrand-primary">Kiran V.</h4>
                        <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Bengaluru Hub Partner</p>
                      </div>
                      <div className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold rounded-[2px]">
                        ★ 4.9 Rating
                      </div>
                    </div>
                    
                    <p className="mt-4 text-xs text-slate-600 leading-relaxed italic">
                      "With Mobrand, I pick my shifts and get paid twice a week directly. Delivering for local grocery stores has never been simpler."
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DRIVER BENEFITS: Flat asymmetric grid list */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter text-mobrand-primary mb-4">
                Why Deliver With Mobrand?
              </h2>
              <p className="text-slate-600">
                We value our logistics partners. We support your growth with competitive fees, secure benefits, and continuous support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white border border-slate-200 p-8 rounded-[2px] transition-all hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center mb-6 rounded-[2px]">
                      {benefit.icon}
                    </div>
                    <h3 className="font-heading font-black text-lg text-mobrand-primary mb-3 uppercase tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE TIMELINE: Option A */}
        <section id="how-it-works" className="py-20 lg:py-28 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 md:px-12">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-mobrand-teal text-xs font-black uppercase tracking-widest border border-slate-200 px-3 py-1.5 bg-slate-50 rounded-[2px]">
                Logistics Dispatch Cycle
              </span>
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter text-mobrand-primary mt-6 mb-4">
                How Delivery Routing Works
              </h2>
              <p className="text-slate-600 text-sm">
                Get a clear view of our seamless order fulfillment pipeline. Toggle steps to see technology and logistics benchmarks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Steps Selection Column */}
              <div className="lg:col-span-5 space-y-4">
                {timelineSteps.map((step, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveTimelineStep(idx)}
                    className={`p-5 border cursor-pointer transition-all duration-300 flex items-center gap-4 rounded-[2px] ${
                      activeTimelineStep === idx 
                        ? 'border-mobrand-teal bg-slate-50 shadow-sm' 
                        : 'border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      activeTimelineStep === idx 
                        ? 'bg-mobrand-teal text-white' 
                        : 'bg-slate-100 text-slate-600'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="font-heading font-black text-sm text-mobrand-primary truncate uppercase tracking-tight">
                          {step.title}
                        </h4>
                        <span className="text-[10px] text-slate-500 font-bold tracking-wide uppercase shrink-0">{step.time}</span>
                      </div>
                      <p className="text-xs text-slate-500 truncate">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Step Display Card */}
              <div className="lg:col-span-7">
                <div className="border border-slate-200 bg-slate-50 p-8 relative rounded-[2px]">
                  
                  {/* Decorative background grids */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#6c3ce1_1px,transparent_1px)] bg-[size:10px_10px] opacity-20 pointer-events-none" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTimelineStep}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="flex items-center gap-3 text-mobrand-teal mb-4 text-xs font-black uppercase tracking-wider">
                        <Clock className="w-4 h-4" />
                        <span>Timeline Checkpoint — Step {activeTimelineStep + 1}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-heading font-black text-mobrand-primary tracking-tight mb-6">
                        {timelineSteps[activeTimelineStep].title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed font-body text-sm mb-8">
                        {timelineSteps[activeTimelineStep].description}
                      </p>

                      {/* Performance Metric Block */}
                      <div className="border-t border-slate-200 pt-6 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">Key Objective</p>
                          <p className="text-xs font-semibold text-slate-700">Fulfillment optimization & routing accuracy.</p>
                        </div>
                        <div>
                          <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mb-1">{timelineSteps[activeTimelineStep].stats.label}</p>
                          <p className="text-xl font-heading font-bold text-mobrand-accent">{timelineSteps[activeTimelineStep].stats.primary}</p>
                        </div>
                      </div>

                    </motion.div>
                  </AnimatePresence>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* DASHBOARD PREVIEW MOCKUP: Option C */}
        <section className="py-20 bg-mobrand-dark text-white border-b border-slate-900 relative overflow-hidden">
          {/* Subtle light blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-mobrand-teal/5 rounded-full blur-[100px]" />

          <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Mock Dashboard Component */}
              <div className="lg:col-span-6 relative">
                <div className="relative max-w-[500px] mx-auto lg:mx-0">
                  <div className="absolute inset-0 border border-white/10 bg-slate-950 translate-x-4 translate-y-4 pointer-events-none rounded-[2px]" />
                  
                  {/* Dashboard frame in raw React styling */}
                  <div className="relative border border-white/20 bg-slate-900 p-6 rounded-[2px]">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-3.5 h-3.5 bg-mobrand-accent rounded-[2px] flex items-center justify-center">
                          <Zap className="w-2 h-2 text-mobrand-primary" />
                        </div>
                        <span className="text-xs font-black uppercase tracking-wider text-white">Logistics Dispatch Center</span>
                      </div>
                      <span className="text-[9px] px-2 py-0.5 border border-emerald-500/30 text-emerald-400 bg-emerald-500/10 font-bold uppercase tracking-wider rounded-[2px]">
                        ● SYSTEM LIVE
                      </span>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="border border-white/10 p-3 bg-slate-950 rounded-[2px]">
                        <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Active Deliveries</p>
                        <p className="text-base font-black text-white">412</p>
                      </div>
                      <div className="border border-white/10 p-3 bg-slate-950 rounded-[2px]">
                        <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Available Fleet</p>
                        <p className="text-base font-black text-white">1,248</p>
                      </div>
                      <div className="border border-white/10 p-3 bg-slate-950 rounded-[2px]">
                        <p className="text-[8px] text-slate-500 uppercase font-black tracking-widest mb-1">Avg Rating</p>
                        <p className="text-base font-black text-emerald-400">4.88 ★</p>
                      </div>
                    </div>

                    {/* Active Dispatch Feed */}
                    <div className="space-y-3">
                      <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">Active Dispatch Log</p>
                      
                      {[
                        { id: "#DSP-7602", location: "Indiranagar Hub", status: "Matching", color: "text-mobrand-accent" },
                        { id: "#DSP-7599", location: "Koramangala Hub", status: "Picked Up", color: "text-mobrand-teal" },
                        { id: "#DSP-7590", location: "Jayanagar Hub", status: "Delivered", color: "text-emerald-400" }
                      ].map((log, i) => (
                        <div key={i} className="flex justify-between items-center p-2.5 border border-white/5 bg-slate-950/50 rounded-[2px]">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-white font-mono">{log.id}</span>
                            <span className="text-[10px] text-slate-400">{log.location}</span>
                          </div>
                          <span className={`text-[9px] font-black uppercase tracking-wider ${log.color}`}>{log.status}</span>
                        </div>
                      ))}
                    </div>

                    {/* Graphic detail of rider map route */}
                    <div className="mt-6 border border-white/15 h-36 bg-slate-950 flex items-center justify-center relative overflow-hidden rounded-[2px]">
                      <div className="absolute inset-0 opacity-40 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:15px_15px]" />
                      <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-mobrand-accent rounded-full animate-ping" />
                      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-mobrand-accent rounded-full" />
                      
                      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-mobrand-teal rounded-full" />
                      <div className="absolute border-t-2 border-dashed border-mobrand-teal/60 w-1/3 top-[40%] left-[38%] rotate-12" />
                      
                      <span className="relative z-10 text-[9px] font-mono tracking-widest uppercase text-slate-500 font-bold">Rider Map Routing Interface</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Right Side: Copy */}
              <div className="lg:col-span-6">
                <span className="text-mobrand-accent text-xs font-black uppercase tracking-widest border border-white/20 px-3 py-1.5 bg-white/5 inline-block mb-6 rounded-[2px]">
                  Real-time Dashboard Technology
                </span>
                
                <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tighter mb-6 leading-tight">
                  Track Your Earnings & Dispatches In One Place.
                </h2>
                
                <p className="text-slate-400 leading-relaxed font-body mb-8 text-sm md:text-base">
                  Both merchants and delivery partners utilize our state-of-the-art dispatch application. View active deliveries, check optimized routes, audit monthly payout balances, and contact dedicated support with zero friction.
                </p>

                <div className="grid grid-cols-2 gap-6 pb-4">
                  <div className="flex gap-3">
                    <Smartphone className="w-5 h-5 text-mobrand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-1">Partner App</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Integrated navigation, dynamic routing suggestions, and order status checklists.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Navigation className="w-5 h-5 text-mobrand-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-1">Live Tracking</h4>
                      <p className="text-xs text-slate-400 leading-relaxed">Real-time status updates and OTP verification sent to customers on delivery.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ONBOARDING FORM: Multi-step interactive flow */}
        <section id="apply-form" className="py-20 lg:py-28 bg-white border-b border-slate-200">
          <div className="container mx-auto px-6 max-w-xl">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black font-heading tracking-tighter text-mobrand-primary mb-3">
                Start Your Onboarding
              </h2>
              <p className="text-slate-600 text-xs">
                Fill out the application below in 3 quick steps to join our partner fleet.
              </p>
            </div>

            {/* Form Container */}
            <div className="border border-slate-200 bg-slate-50 p-8 rounded-[2px] shadow-sm">
              
              {/* Progress Steps Header */}
              <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-200">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center gap-2">
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                      formStep === step 
                        ? 'bg-mobrand-teal text-white' 
                        : formStep > step 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-slate-200 text-slate-600'
                    }`}>
                      {formStep > step ? <Check className="w-4 h-4" /> : step}
                    </div>
                    <span className={`text-[10px] uppercase font-bold tracking-wider hidden sm:inline ${
                      formStep === step ? 'text-mobrand-teal font-black' : 'text-slate-500'
                    }`}>
                      {step === 1 ? 'Personal' : step === 2 ? 'Documents' : 'Preferences'}
                    </span>
                  </div>
                ))}
              </div>

              {formError && (
                <div className="mb-6 p-4 border border-rose-200 bg-rose-50 text-rose-700 text-xs rounded-[2px]">
                  {formError}
                </div>
              )}

              {/* Form Content */}
              {!formSubmitted ? (
                <form onSubmit={formStep === 3 ? handleSubmit : handleNextStep} className="space-y-6">
                  
                  {/* STEP 1: Personal Details */}
                  {formStep === 1 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Full Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          required
                          value={formData.name} 
                          onChange={handleInputChange}
                          placeholder="Enter your full name" 
                          className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Mobile Phone Number (WhatsApp)</label>
                        <input 
                          type="tel" 
                          name="phone" 
                          required
                          value={formData.phone} 
                          onChange={handleInputChange}
                          placeholder="10-digit mobile number" 
                          className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Operating City</label>
                        <input 
                          type="text" 
                          name="city" 
                          required
                          value={formData.city} 
                          onChange={handleInputChange}
                          placeholder="e.g. Bengaluru, Mumbai, Chennai" 
                          className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Vehicle & Document Identification */}
                  {formStep === 2 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Vehicle Type</label>
                        <select 
                          name="vehicleType" 
                          value={formData.vehicleType}
                          onChange={handleInputChange}
                          className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                        >
                          <option value="bike">Motorcycle / Scooter</option>
                          <option value="bicycle">Bicycle (Non-Motorized)</option>
                          <option value="auto">Three-Wheeler (Auto/Cargo)</option>
                          <option value="truck">Light Commercial Truck</option>
                        </select>
                      </div>

                      {formData.vehicleType !== 'bicycle' && (
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Driving License Number</label>
                          <input 
                            type="text" 
                            name="licenseNumber" 
                            value={formData.licenseNumber} 
                            onChange={handleInputChange}
                            placeholder="DL-XXXXXXXXXXXXX" 
                            className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                          />
                        </div>
                      )}

                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Aadhaar Card Number (12 Digits)</label>
                        <input 
                          type="text" 
                          name="aadhaarNumber" 
                          required
                          maxLength={12}
                          value={formData.aadhaarNumber} 
                          onChange={handleInputChange}
                          placeholder="Enter your 12-digit Aadhaar" 
                          className="w-full border border-slate-200 bg-white p-3.5 text-sm focus:outline-none focus:border-mobrand-teal rounded-[2px]"
                        />
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Shift Preference & Agreements */}
                  {formStep === 3 && (
                    <div className="space-y-5">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-500 mb-2">Do you have past courier delivery experience?</label>
                        <div className="flex gap-4">
                          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                            <input 
                              type="radio" 
                              name="experience" 
                              value="yes"
                              checked={formData.experience === 'yes'}
                              onChange={handleInputChange}
                              className="accent-mobrand-teal"
                            />
                            Yes
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium">
                            <input 
                              type="radio" 
                              name="experience" 
                              value="no"
                              checked={formData.experience === 'no'}
                              onChange={handleInputChange}
                              className="accent-mobrand-teal"
                            />
                            No / First Time
                          </label>
                        </div>
                      </div>

                      <div className="p-4 border border-slate-200 bg-white text-xs text-slate-500 leading-relaxed space-y-3">
                        <p className="font-bold text-slate-700 flex items-center gap-1.5">
                          <Info className="w-3.5 h-3.5 text-mobrand-teal" />
                          Next Onboarding Steps:
                        </p>
                        <p>After clicking submit, our regional partner manager will contact you via WhatsApp/Call within 24 hours to schedule document verification and partner app activation.</p>
                      </div>

                      <label className="flex items-start gap-3 cursor-pointer select-none">
                        <input 
                          type="checkbox" 
                          name="terms"
                          checked={formData.terms}
                          onChange={handleInputChange}
                          className="mt-1 accent-mobrand-teal shrink-0" 
                        />
                        <span className="text-[11px] text-slate-500 leading-normal">
                          I agree to Mobrand's Delivery Partner Terms of Service and consent to background checks for verification purposes.
                        </span>
                      </label>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4 border-t border-slate-200">
                    {formStep > 1 && (
                      <button 
                        type="button"
                        onClick={() => setFormStep(prev => prev - 1)}
                        className="px-6 py-3 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all font-bold uppercase tracking-wider text-xs rounded-[2px]"
                      >
                        Back
                      </button>
                    )}
                    <button 
                      type="submit"
                      className="flex-1 px-6 py-3 bg-mobrand-teal hover:bg-mobrand-primary text-white transition-all font-bold uppercase tracking-wider text-xs text-center rounded-[2px]"
                    >
                      {formStep === 3 ? 'Submit Application' : 'Next Step'}
                    </button>
                  </div>

                </form>
              ) : (
                // SUCCESS STATE
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-6"
                >
                  <div className="w-16 h-16 bg-emerald-50 border border-emerald-200 text-emerald-500 flex items-center justify-center mx-auto rounded-full">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black font-heading text-mobrand-primary tracking-tight mb-2">
                      Application Submitted!
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Thank you for applying, <span className="font-bold text-slate-800">{formData.name}</span>. Our logistics manager for <span className="font-bold text-slate-800">{formData.city}</span> will contact you within 24 hours at <span className="font-bold text-slate-800">{formData.phone}</span>.
                    </p>
                  </div>
                  
                  <div className="border border-slate-200 bg-white p-4 text-left space-y-3 max-w-xs mx-auto rounded-[2px]">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-slate-400 border-b pb-2">Application Reference</p>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Vehicle Type:</span>
                      <span className="font-bold text-slate-700 capitalize">{formData.vehicleType}</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500">
                      <span>Operating City:</span>
                      <span className="font-bold text-slate-700">{formData.city}</span>
                    </div>
                  </div>

                  <button 
                    onClick={resetForm}
                    className="px-6 py-2.5 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-all font-bold uppercase tracking-wider text-xs rounded-[2px]"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              )}

            </div>

          </div>
        </section>

        {/* FAQ ACCORDION: Specific questions for riders */}
        <section className="py-20 lg:py-28 bg-slate-50">
          <div className="container mx-auto px-6 max-w-4xl">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black font-heading tracking-tighter text-mobrand-primary mb-4">
                Partner Hub FAQ
              </h2>
              <p className="text-slate-600 text-sm">
                Everything you need to know about starting your logistics journey with Mobrand.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div 
                    key={index}
                    className="border border-slate-200 bg-white rounded-[2px] overflow-hidden transition-all duration-300"
                  >
                    <button 
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center p-6 text-left hover:bg-slate-50/50 transition-colors"
                    >
                      <span className="font-heading font-black text-sm uppercase tracking-tight text-mobrand-primary">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-mobrand-teal shrink-0 ml-4" />
                      ) : (
                        <Plus className="w-4 h-4 text-mobrand-teal shrink-0 ml-4" />
                      )}
                    </button>
                    
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="border-t border-slate-100"
                        >
                          <div className="p-6 text-xs leading-relaxed text-slate-600 bg-slate-50/40">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      <FooterSection />
    </div>
  );
};

export default DeliveryPartners;
