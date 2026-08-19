
import { Link } from "react-router-dom";
import { Phone, CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },

    {
      name: "About",
      path: "/about",
      dropdown: [
        { name: "About Us", path: "/about" },
        { name: "Why Choose Us", path: "/about#why-choose-us" },
        { name: "Our Infrastructure", path: "/facilities" },
      ],
    },

    {
      name: "Specialities",
      path: "/specialities",
      dropdown: [
        { name: "Cardiology", path: "/specialities" },
        { name: "Neurology", path: "/specialities" },
        { name: "Orthopaedics", path: "/specialities" },
        { name: "Paediatrics", path: "/specialities" },
        { name: "Dermatology", path: "/specialities" },
      ],
    },

    {
      name: "Doctors",
      path: "/doctors",
      dropdown: [
        { name: "Our Doctors", path: "/doctors" },
        { name: "Find a Doctor", path: "/doctors" },
      ],
    },

    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Emergency Care", path: "/services" },
        { name: "Diagnostic Services", path: "/services" },
        { name: "Pharmacy", path: "/services" },
        { name: "Ambulance Services", path: "/services" },
      ],
    },

    {
      name: "Facilities",
      path: "/facilities",
      dropdown: [
        { name: "Hospital Infrastructure", path: "/facilities" },
        { name: "ICU & Critical Care", path: "/facilities" },
        { name: "Operation Theatres", path: "/facilities" },
        { name: "Advanced Diagnostics", path: "/facilities" },
      ],
    },

    {
      name: "Health Packages",
      path: "/health-packages",
      dropdown: [
        { name: "Health Checkups", path: "/health-packages" },
        { name: "Executive Packages", path: "/health-packages" },
        { name: "Women Wellness", path: "/health-packages" },
        { name: "Senior Citizen Packages", path: "/health-packages" },
      ],
    },

    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="logo">
          <div className="logo-icon">
            <img
              src="/hospital-logo.png"
              alt="Hospital Logo"
            />
          </div>

          <div className="logo-text">
            <span>LAX360</span>
            <small>MULTI-SPECIALIST HOSPITAL</small>
          </div>
        </Link>


        {/* NAVIGATION */}
        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>

          {navItems.map((item) => (

            <div
              key={item.name}
              className={
                item.dropdown
                  ? "nav-item-dropdown"
                  : "nav-item-normal"
              }
            >

              {/* MAIN NAV LINK */}
              <Link
                to={item.path}
                className="nav-main-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>


              {/* DROPDOWN */}
              {item.dropdown && (

                <div className="nav-dropdown-menu">

                  {item.dropdown.map((subItem) => (

                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="nav-dropdown-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{subItem.name}</span>
                    </Link>

                  ))}

                </div>

              )}

            </div>

          ))}

        </nav>


        {/* RIGHT SIDE */}
        <div className="navbar-actions">

          <a
            href="tel:+919999999999"
            className="emergency"
          >
            <Phone size={17} />

            <div>
              <span>24/7 Emergency</span>
              <strong>+91 99999 99999</strong>
            </div>
          </a>


          <Link
            to="/appointment"
            className="appointment-btn"
          >
            <CalendarDays size={17} />
            Book Appointment
          </Link>


          {/* MOBILE MENU */}
          <button
            className="menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen
              ? <X size={25} />
              : <Menu size={25} />
            }
          </button>

        </div>

      </div>
    </header>
  );
}

export default Navbar;

