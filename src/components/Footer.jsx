import { Link } from "react-router-dom";
import { ShieldCheck, SlidersHorizontal, FileText, Phone, Mail, MapPin, HeartPulse } from "lucide-react";
import { usePrivacy } from "../context/PrivacyContext";

export default function Footer() {
  const { openCookieModal } = usePrivacy();

  return (
    <footer className="hospital-footer">
      <div className="footer-container">
        {/* BRAND COLUMN */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">
              <HeartPulse size={26} color="#ffffff" />
            </div>
            <div className="footer-brand-text">
              <strong>LAX360</strong>
              <span>MULTI-SPECIALIST HOSPITAL</span>
            </div>
          </Link>
          <p className="footer-tagline">
            Delivering trusted, compassionate, and patient-first healthcare with advanced medical technology and multi-speciality clinical excellence.
          </p>
          <div className="footer-dpdp-compliance-pill">
            <ShieldCheck size={15} />
            <span>DPDP Act 2023 Compliant Portal</span>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/doctors">Our Doctors</Link>
          <Link to="/specialities">Specialities</Link>
          <Link to="/facilities">Facilities</Link>
          <Link to="/services">Hospital Services</Link>
        </div>

        {/* PATIENT CARE */}
        <div className="footer-column">
          <h3>Patient Care</h3>
          <Link to="/appointment">Book Appointment</Link>
          <Link to="/health-packages">Health Packages</Link>
          <Link to="/contact">Emergency Support</Link>
          <Link to="/contact">Patient Helpdesk</Link>
          <Link to="/privacy-centre">Privacy Centre</Link>
        </div>

        {/* GET IN TOUCH */}
        <div className="footer-column">
          <h3>Get In Touch</h3>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>123 Healthcare Avenue, Salem, Tamil Nadu - 636004</span>
          </div>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+91 98765 43210 / 24x7 Help: 108</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <span>care@lax360hospital.com</span>
          </div>
          <div className="footer-contact-item">
            <ShieldCheck size={16} />
            <span>DPO: privacy@lax360hospital.com</span>
          </div>
        </div>
      </div>

      {/* PRIVACY & LEGAL BAR (DPDP Reference Requirement) */}
      <div className="footer-privacy-bar">
        <div className="footer-privacy-container">
          <div className="footer-privacy-heading">
            <span>Privacy & Legal</span>
          </div>
          <nav className="footer-privacy-links" aria-label="Privacy & Legal Links">
            <Link to="/privacy-notice" className="footer-legal-link">
              <FileText size={14} />
              Privacy Notice
            </Link>
            <span className="footer-legal-bullet">•</span>
            <button
              type="button"
              onClick={openCookieModal}
              className="footer-legal-btn"
              aria-label="Manage Cookie Preferences"
            >
              <SlidersHorizontal size={14} />
              Cookie Preferences
            </button>
            <span className="footer-legal-bullet">•</span>
            <Link to="/privacy-centre" className="footer-legal-link highlight-link">
              <ShieldCheck size={14} />
              Privacy Centre
            </Link>
            <span className="footer-legal-bullet">•</span>
            <Link to="/terms" className="footer-legal-link">
              Terms & Conditions
            </Link>
          </nav>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <span>
            © 2026 LAX360 Multi-Specialist Hospital. All rights reserved.
          </span>
          <span className="footer-subtext">
            Protected under Digital Personal Data Protection Act, 2023 (India).
          </span>
        </div>
      </div>
    </footer>
  );
}
