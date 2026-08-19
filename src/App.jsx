
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
    <BrowserRouter>

      <ScrollToTop />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* APPOINTMENT */}
        <Route
          path="/appointment"
          element={<Appointment />}
        />

        {/* DOCTORS */}
        <Route
          path="/doctors"
          element={<Doctors />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* SERVICES */}
        <Route
          path="/services"
          element={<Services />}
        />

        {/* FACILITIES */}
        <Route
          path="/facilities"
          element={<Facilities />}
        />

        {/* SPECIALITIES */}
        <Route
          path="/specialities"
          element={<Specialities />}
        />

        {/* HEALTH PACKAGES */}
        <Route
          path="/health-packages"
          element={<HealthPackages />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;

