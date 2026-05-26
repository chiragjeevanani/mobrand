import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../../lib/utils';
import mobrandLogo from '../../../assets/images/Mobrand_logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Business Verticals', href: '#app-showcase' },
    { name: 'Why Us', href: '#trust' },
  ];

  const getLinkUrl = (hash) => {
    return location.pathname === '/' ? hash : `/${hash}`;
  };

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 pointer-events-auto',
        scrolled || location.pathname !== '/'
          ? 'bg-mobrand-bg/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="w-full max-w-none px-6 md:px-12 lg:px-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center group">
          <img 
            src={mobrandLogo} 
            alt="Mobrand Logo" 
            className="h-[100px] md:h-[180px] -my-[30px] md:-my-[70px] -ml-6 md:-ml-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={getLinkUrl(link.href)}
              className="text-sm font-medium text-slate-600 hover:text-mobrand-teal transition-colors"
            >
              {link.name}
            </a>
          ))}
          {/* Add quick links to subpages */}
          <Link 
            to="/delivery-partners" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/delivery-partners' ? 'text-mobrand-teal font-semibold' : 'text-slate-600 hover:text-mobrand-teal'}`}
          >
            Delivery Partners
          </Link>
          <Link 
            to="/pricing-plans" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/pricing-plans' ? 'text-mobrand-teal font-semibold' : 'text-slate-600 hover:text-mobrand-teal'}`}
          >
            Plans
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-mobrand-teal font-semibold' : 'text-slate-600 hover:text-mobrand-teal'}`}
          >
            About
          </Link>
          <Link 
            to="/contact-us" 
            className={`text-sm font-medium transition-colors ${location.pathname === '/contact-us' ? 'text-mobrand-teal font-semibold' : 'text-slate-600 hover:text-mobrand-teal'}`}
          >
            Contact
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/partner-login"
            className="text-sm font-medium text-slate-700 hover:text-mobrand-primary transition-colors cursor-pointer"
          >
            Partner Login
          </Link>
          <Link 
            to="/contact-us"
            className="bg-mobrand-primary hover:bg-mobrand-teal text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-mobrand-teal/20 active:scale-95 cursor-pointer"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-mobrand-primary cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 py-4 px-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={getLinkUrl(link.href)}
                className="text-lg font-medium text-slate-700 hover:text-mobrand-teal transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Link 
              to="/delivery-partners"
              className="text-lg font-medium text-slate-700 hover:text-mobrand-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Delivery Partners
            </Link>
            <Link 
              to="/pricing-plans"
              className="text-lg font-medium text-slate-700 hover:text-mobrand-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Plans
            </Link>
            <Link 
              to="/about"
              className="text-lg font-medium text-slate-700 hover:text-mobrand-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/contact-us"
              className="text-lg font-medium text-slate-700 hover:text-mobrand-teal transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            
            <div className="h-px bg-slate-100 my-2" />
            <div className="flex flex-col gap-3">
              <Link 
                to="/partner-login"
                className="w-full text-center py-3 text-slate-700 font-medium border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partner Login
              </Link>
              <Link 
                to="/contact-us"
                className="w-full text-center py-3 bg-mobrand-primary text-white font-medium rounded-xl shadow-md hover:bg-mobrand-teal transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
