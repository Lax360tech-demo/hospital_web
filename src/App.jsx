import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import Services from "./pages/Services";
import Facilities from "./pages/Facilities";
import Specialities from "./pages/Specialities";
import HealthPackages from "./pages/HealthPackages";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Blogs from "./pages/Blogs";

// DPDP Compliance Pages
import PrivacyCentre from "./pages/PrivacyCentre";
import PrivacyNotice from "./pages/PrivacyNotice";
import Terms from "./pages/Terms";

// DPDP Components & Context
import { PrivacyProvider } from "./context/PrivacyContext";
import CookieBanner from "./components/CookieBanner";
import CookieModal from "./components/CookieModal";

/* =========================================
   SCROLL TO TOP ON PAGE CHANGE
========================================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* =========================================
   APP
========================================= */

function App() {
  return (
    <PrivacyProvider>
      <BrowserRouter>
        <ScrollToTop />

        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* APPOINTMENT */}
          <Route path="/appointment" element={<Appointment />} />

          {/* DOCTORS */}
          <Route path="/doctors" element={<Doctors />} />

          {/* ABOUT */}
          <Route path="/about" element={<About />} />

          {/* SERVICES */}
          <Route path="/services" element={<Services />} />

          {/* FACILITIES */}
          <Route path="/facilities" element={<Facilities />} />

          {/* SPECIALITIES */}
          <Route path="/specialities" element={<Specialities />} />

          {/* HEALTH PACKAGES */}
          <Route path="/health-packages" element={<HealthPackages />} />

          {/* CONTACT */}
          <Route path="/contact" element={<Contact />} />

          {/* FAQ & BLOGS */}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blogs" element={<Blogs />} />

          {/* DPDP PRIVACY ROUTES */}
          <Route path="/privacy-centre" element={<PrivacyCentre />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/privacy-policy" element={<PrivacyNotice />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>

        {/* DPDP COOKIE BANNER & PREFERENCES MODAL */}
        <CookieBanner />
        <CookieModal />
      </BrowserRouter>
    </PrivacyProvider>
  );
}

export default App;
