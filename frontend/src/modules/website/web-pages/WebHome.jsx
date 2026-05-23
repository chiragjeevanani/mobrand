import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';

// Import all sections
import Navbar from '../web-components/Navbar';
import HeroSection from '../web-components/HeroSection';
import StatsSection from '../web-components/StatsSection';
import HowItWorksSection from '../web-components/HowItWorksSection';
import FeaturesSection from '../web-components/FeaturesSection';
import TrustSection from '../web-components/TrustSection';
import LifestyleSection from '../web-components/LifestyleSection';
import AppShowcaseSection from '../web-components/AppShowcaseSection';
import AppExperienceSection from '../web-components/AppExperienceSection';
import MapSection from '../web-components/MapSection';
import DeliveryPromoSection from '../web-components/DeliveryPromoSection';
import TestimonialsSection from '../web-components/TestimonialsSection';
import CtaSection from '../web-components/CtaSection';
import FooterSection from '../web-components/FooterSection';

const WebHome = () => {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-body text-slate-800 antialiased selection:bg-mobrand-teal selection:text-white overflow-x-hidden">
        <Navbar />
        
        <main>
          <HeroSection />
          <StatsSection />
          <HowItWorksSection />
          <FeaturesSection />
          <LifestyleSection />
          <TrustSection />
          <AppShowcaseSection />
          <AppExperienceSection />
          <MapSection />
          <DeliveryPromoSection />
          <TestimonialsSection />
          <CtaSection />
        </main>

        <FooterSection />
      </div>
    </ReactLenis>
  );
};

export default WebHome;
