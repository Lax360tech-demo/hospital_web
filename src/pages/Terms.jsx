import { Link } from "react-router-dom";
import { FileText, AlertTriangle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Terms() {
  return (
    <div className="terms-page">
      <Navbar />

      {/* HERO */}
      <section className="notice-hero">
        <div className="notice-hero-content">
          <div className="notice-badge">
            <FileText size={18} />
            <span>LEGAL AGREEMENT</span>
          </div>
          <h1>Terms & Conditions</h1>
          <p>Last Updated: September 2026 | LAX360 Multi-Specialist Hospital</p>
        </div>
      </section>

      {/* BODY */}
      <section className="notice-body-section">
        <div className="notice-container">
          <div className="notice-highlight-card warning-style">
            <div className="highlight-icon">
              <AlertTriangle size={28} />
            </div>
            <div>
              <h3>Medical Emergency Notice</h3>
              <p>
                This website and online appointment portal are designed for routine consultations and healthcare inquiries. If you are experiencing a life-threatening medical emergency, please call our 24/7 Emergency helpline <strong>(+91 99999 99999)</strong> or dial 108 immediately.
              </p>
            </div>
          </div>

          <div className="notice-sections-wrapper">
            <article className="notice-article">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, patient portal, or booking appointments through LAX360 Multi-Specialist Hospital, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions, along with our{" "}
                <Link to="/privacy-notice" className="dpdp-inline-link">
                  Privacy Notice
                </Link>{" "}
                governed by the Digital Personal Data Protection (DPDP) Act, 2023.
              </p>
            </article>

            <article className="notice-article">
              <h2>2. Appointment Booking and Consultations</h2>
              <ul className="notice-list">
                <li>Appointment requests submitted online are subject to doctor availability and confirmation by our patient care desk.</li>
                <li>Patients are requested to arrive 15 minutes prior to the scheduled consultation time.</li>
                <li>Cancellations or rescheduling should ideally be requested at least 4 hours in advance.</li>
              </ul>
            </article>

            <article className="notice-article">
              <h2>3. Data Protection and Patient Consent</h2>
              <p>
                We handle all patient data in strict accordance with the DPDP Act 2023. When you submit personal data through our website forms, you consent to the processing of such data for clinical and administrative healthcare purposes as detailed in our Privacy Notice. You retain all Data Principal rights, which can be exercised via our{" "}
                <Link to="/privacy-centre" className="dpdp-inline-link">
                  Privacy Centre
                </Link>.
              </p>
            </article>

            <article className="notice-article">
              <h2>4. Intellectual Property</h2>
              <p>
                All trademarks, logos, content, design elements, and medical articles published on this website are the intellectual property of LAX360 Multi-Specialist Hospital and protected under applicable copyright and intellectual property laws.
              </p>
            </article>

            <article className="notice-article">
              <h2>5. Governing Law and Jurisdiction</h2>
              <p>
                These terms are governed by the laws of India. Any disputes arising in connection with the website shall be subject to the exclusive jurisdiction of the competent courts in Salem, Tamil Nadu.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
