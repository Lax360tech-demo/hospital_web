import { HelpCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I book an appointment with a specialist?",
      a: "You can book directly via our online appointment portal by choosing your preferred department, doctor, and consultation slot, or by calling our helpdesk at +91 98765 43210.",
    },
    {
      q: "How is my personal and medical data protected?",
      a: "LAX360 Multi-Specialist Hospital strictly adheres to India's Digital Personal Data Protection (DPDP) Act, 2023. Your data is encrypted and accessible only by authorized healthcare personnel. You can manage your rights at our Privacy Centre.",
    },
    {
      q: "How can I request a copy of my health records or correct inaccurate data?",
      a: "You can submit an access or correction request online anytime through our Privacy Centre (/privacy-centre) or visit our Medical Records Department with a valid ID.",
    },
    {
      q: "Are emergency services open 24 hours?",
      a: "Yes, our emergency and trauma care department is fully operational 24/7 with round-the-clock emergency physicians, ICU, ambulance services, and diagnostic facilities.",
    },
    {
      q: "What health checkup packages are offered?",
      a: "We offer comprehensive preventive screening packages including Master Health Checkup, Executive Health Checkup, Cardiac Wellness, Senior Citizen Packages, and Women's Health Screenings.",
    },
    {
      q: "How can I withdraw consent for promotional health updates?",
      a: "You can withdraw marketing or communication consent at any time in our Privacy Centre under 'Withdraw Consent' or by adjusting your Cookie Preferences.",
    },
  ];

  return (
    <div className="faq-page">
      <Navbar />

      <section className="notice-hero">
        <div className="notice-hero-content">
          <div className="notice-badge">
            <HelpCircle size={18} />
            <span>PATIENT HELP & SUPPORT</span>
          </div>
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about hospital services, appointments, and privacy.</p>
        </div>
      </section>

      <section className="notice-body-section">
        <div className="notice-container">
          <div className="notice-sections-wrapper">
            <div className="faq-accordion-list">
              {faqs.map((faq, index) => (
                <details key={index} className="faq-item" style={{ marginBottom: "16px" }}>
                  <summary style={{ fontSize: "16px", fontWeight: "700", cursor: "pointer", padding: "12px 0" }}>
                    {faq.q}
                  </summary>
                  <p style={{ color: "#4b5563", fontSize: "14.5px", lineHeight: "1.6", marginTop: "8px" }}>
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="notice-info-box" style={{ marginTop: "24px" }}>
              <h4>Have more questions?</h4>
              <p>Contact our patient support desk at <strong>care@lax360hospital.com</strong> or call <strong>+91 98765 43210</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
