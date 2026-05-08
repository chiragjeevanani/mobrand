import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './lib/ScrollToTop';
import WebHome from './modules/website/web-pages/WebHome';

// Import newly created legal and informational subpages
import AboutUs from './modules/website/web-pages/AboutUs';
import PrivacyPolicy from './modules/website/web-pages/PrivacyPolicy';
import TermsConditions from './modules/website/web-pages/TermsConditions';
import RefundPolicy from './modules/website/web-pages/RefundPolicy';
import VendorAgreement from './modules/website/web-pages/VendorAgreement';
import ShippingDeliveryPolicy from './modules/website/web-pages/ShippingDeliveryPolicy';
import ContactUs from './modules/website/web-pages/ContactUs';
import VendorCustomerPolicies from './modules/website/web-pages/VendorCustomerPolicies';
import WhiteLabelSaaS from './modules/website/web-pages/WhiteLabelSaaS';
import LegalSecurity from './modules/website/web-pages/LegalSecurity';
import BrandSeoInfo from './modules/website/web-pages/BrandSeoInfo';
import ComingSoon from './modules/website/web-pages/ComingSoon';

function App() {
  return (
    <BrowserRouter>
      {/* Scroll to top on every route change */}
      <ScrollToTop />
      
      <Routes>
        {/* Landing Home Route */}
        <Route path="/" element={<WebHome />} />

        {/* Informational & Resource Routes */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/vendor-agreement" element={<VendorAgreement />} />
        <Route path="/delivery-policy" element={<ShippingDeliveryPolicy />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/vendor-customer-policies" element={<VendorCustomerPolicies />} />
        <Route path="/whitelabel-saas-terms" element={<WhiteLabelSaaS />} />
        <Route path="/legal-security-protection" element={<LegalSecurity />} />
        <Route path="/brand-seo-info" element={<BrandSeoInfo />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Fallback route for all other undefined routes */}
        <Route path="*" element={<ComingSoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

