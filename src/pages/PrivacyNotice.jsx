import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Eye,
  SlidersHorizontal,
  Mail,
  Phone,
  Building,
  Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePrivacy } from "../context/PrivacyContext";

export default function PrivacyNotice() {
  const { openCookieModal } = usePrivacy();

  return (
    <div className="privacy-notice-page">
      <Navbar />

      {/* HERO */}
      <section className="notice-hero">
        <div className="notice-hero-content">
          <div className="notice-badge">
            <ShieldCheck size={18} />
            <span>DPDP ACT 2023 COMPLIANCE</span>
          </div>
          <h1>Privacy Notice & Data Protection Policy</h1>
          <p>
            Effective Date: 1st January 2026 | Last Updated: September 2026
          </p>
          <div className="notice-quick-actions">
            <Link to="/privacy-centre" className="notice-action-btn primary">
              <ShieldCheck size={16} />
              Visit Privacy Centre
            </Link>
            <button
              type="button"
              onClick={openCookieModal}
              className="notice-action-btn secondary"
            >
              <SlidersHorizontal size={16} />
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </section>

      {/* NOTICE CONTENT */}
      <section className="notice-body-section">
        <div className="notice-container">
          {/* SUMMARY CALLOUT */}
          <div className="notice-highlight-card">
            <div className="highlight-icon">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3>Our Commitment to Your Privacy</h3>
              <p>
                LAX360 Multi-Specialist Hospital ("we", "us", or "our") respects your privacy and is fully committed to safeguarding your personal and healthcare data under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India. This Notice explains what data we collect, why we process it, and how you can exercise your statutory rights as a Data Principal.
              </p>
            </div>
          </div>

          <div className="notice-sections-wrapper">
            {/* SECTION 1 */}
            <article className="notice-article">
              <h2>1. Identity and Contact Details of the Data Fiduciary</h2>
              <p>
                Under the DPDP Act 2023, <strong>LAX360 Multi-Specialist Hospital</strong> acts as the Data Fiduciary responsible for determining the purpose and means of processing your personal data:
              </p>
              <div className="notice-info-box">
                <p><strong>Entity Name:</strong> LAX360 Multi-Specialist Hospital Pvt. Ltd.</p>
                <p><strong>Registered Address:</strong> 123 Healthcare Avenue, Salem, Tamil Nadu - 636004, India</p>
                <p><strong>Contact Email:</strong> care@lax360hospital.com | privacy@lax360hospital.com</p>
                <p><strong>Grievance Redressal Officer:</strong> Data Protection & Grievance Officer, LAX360 Hospital</p>
              </div>
            </article>

            {/* SECTION 2 */}
            <article className="notice-article">
              <h2>2. Categories of Personal Data We Process</h2>
              <p>
                We only collect and process personal data that is necessary to deliver quality healthcare, facilitate online appointments, and operate our hospital portal:
              </p>
              <ul className="notice-list">
                <li>
                  <strong>Demographic and Contact Data:</strong> Full name, age/date of birth, gender, contact number, email address, residential address, and emergency contact details.
                </li>
                <li>
                  <strong>Consultation & Health Information:</strong> Reason for appointment, preferred speciality/doctor, previous medical history (voluntarily provided), prescription records, and consultation notes.
                </li>
                <li>
                  <strong>Technical & Usage Data:</strong> IP address, device type, browser information, pages visited, and interaction logs captured through essential and consented analytics cookies.
                </li>
                <li>
                  <strong>Billing & Transaction Records:</strong> Invoices, payment transaction identifiers (we do not store raw credit/debit card numbers or CVV).
                </li>
              </ul>
            </article>

            {/* SECTION 3 */}
            <article className="notice-article">
              <h2>3. Purpose and Legal Grounds for Processing</h2>
              <p>
                We process your personal data strictly in compliance with Section 6 (Consent) and Section 7 (Legitimate Uses) of the DPDP Act 2023:
              </p>
              <div className="notice-table-wrapper">
                <table className="notice-table">
                  <thead>
                    <tr>
                      <th>Processing Purpose</th>
                      <th>Legal Ground under DPDP Act 2023</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Booking consultations and scheduling doctor appointments</td>
                      <td>Explicit Consent of Data Principal (Sec 6)</td>
                    </tr>
                    <tr>
                      <td>Responding to patient enquiries, complaints, and requests</td>
                      <td>Explicit Consent of Data Principal (Sec 6)</td>
                    </tr>
                    <tr>
                      <td>Providing emergency healthcare, medical diagnosis, and critical treatment</td>
                      <td>Legitimate Use for Medical Emergencies & Healthcare (Sec 7(e))</td>
                    </tr>
                    <tr>
                      <td>Compliance with statutory medical record retention and NMC guidelines</td>
                      <td>Legitimate Use for Legal Obligation (Sec 7(c))</td>
                    </tr>
                    <tr>
                      <td>Website security, fraud prevention, and session integrity</td>
                      <td>Legitimate Operational Necessity</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </article>

            {/* SECTION 4 */}
            <article className="notice-article">
              <h2>4. Rights of the Data Principal</h2>
              <p>
                The DPDP Act 2023 confers distinct rights upon you regarding your personal data. You can easily exercise any of these rights anytime through our <Link to="/privacy-centre" className="dpdp-inline-link">Privacy Centre</Link>:
              </p>
              <div className="notice-rights-grid">
                <div className="notice-right-item">
                  <div className="notice-right-icon"><Eye size={20} /></div>
                  <div>
                    <h4>Right to Access & Information</h4>
                    <p>Request a summary of personal data being processed, processing activities, and identities of data fiduciaries/processors with whom data was shared.</p>
                  </div>
                </div>

                <div className="notice-right-item">
                  <div className="notice-right-icon"><FileText size={20} /></div>
                  <div>
                    <h4>Right to Correction & Updating</h4>
                    <p>Request correction of inaccurate or misleading data, completion of incomplete data, and updating of obsolete records.</p>
                  </div>
                </div>

                <div className="notice-right-item">
                  <div className="notice-right-icon"><Lock size={20} /></div>
                  <div>
                    <h4>Right to Erasure</h4>
                    <p>Request deletion of personal data where the purpose is served or consent is withdrawn, subject to statutory medical retention mandates.</p>
                  </div>
                </div>

                <div className="notice-right-item">
                  <div className="notice-right-icon"><UserCheck size={20} /></div>
                  <div>
                    <h4>Right to Grievance Redressal</h4>
                    <p>Lodge a grievance with our Data Protection Officer and receive resolution within statutory timeframes.</p>
                  </div>
                </div>

                <div className="notice-right-item">
                  <div className="notice-right-icon"><ShieldCheck size={20} /></div>
                  <div>
                    <h4>Right to Nominate</h4>
                    <p>Nominate another individual who shall exercise your data principal rights in the event of death or incapacity.</p>
                  </div>
                </div>
              </div>
            </article>

            {/* SECTION 5 */}
            <article className="notice-article">
              <h2>5. Cookie & Tracking Technologies</h2>
              <p>
                Our portal utilizes cookies to deliver secure functionality and measure engagement. You have full granular control over cookie categories:
              </p>
              <ul className="notice-list">
                <li><strong>Essential Cookies:</strong> Critical for navigation, appointment submission, and security. Always active.</li>
                <li><strong>Analytics Cookies:</strong> Collect aggregated metrics on site performance (can be toggled ON/OFF).</li>
                <li><strong>Marketing Cookies:</strong> Deliver relevant health checkup alerts and outreach (can be toggled ON/OFF).</li>
                <li><strong>Functional Cookies:</strong> Save your visual and department preferences (can be toggled ON/OFF).</li>
              </ul>
              <p>
                You can review or change your choices anytime using the{" "}
                <button
                  type="button"
                  onClick={openCookieModal}
                  className="dpdp-inline-btn"
                >
                  Cookie Preferences Modal
                </button>.
              </p>
            </article>

            {/* SECTION 6 */}
            <article className="notice-article">
              <h2>6. Data Security, Safeguards, and Retention</h2>
              <p>
                We implement robust technical and organizational measures to prevent personal data breaches:
              </p>
              <ul className="notice-list">
                <li>256-bit TLS/SSL encryption for all data in transit across our portal.</li>
                <li>Role-based access controls restricting patient data access to authorized clinical and administrative personnel only.</li>
                <li>Regular vulnerability assessments and automated audit logging of data access.</li>
                <li>
                  <strong>Retention Period:</strong> In accordance with National Medical Commission (NMC) regulations, clinical records are retained for the statutory medical period (minimum 3 years for outpatient records, longer for inpatient records). Web account records and marketing data are erased promptly upon request or consent withdrawal.
                </li>
              </ul>
            </article>

            {/* SECTION 7 */}
            <article className="notice-article">
              <h2>7. Data of Children and Persons with Disabilities</h2>
              <p>
                In compliance with Section 9 of the DPDP Act 2023, we do not undertake processing of personal data likely to cause detrimental effect on the well-being of a child. Personal data of minors (under 18 years) for paediatric consultations is collected only with the verifiable consent of a parent or lawful guardian.
              </p>
            </article>

            {/* SECTION 8 */}
            <article className="notice-article">
              <h2>8. Grievance Redressal and Regulatory Escalation</h2>
              <p>
                If you have questions, concerns, or complaints regarding the processing of your personal data, please contact our designated Grievance Redressal Officer:
              </p>
              <div className="notice-grievance-box">
                <div className="notice-grievance-header">
                  <Building size={22} />
                  <div>
                    <h4>Grievance Redressal Officer</h4>
                    <span>LAX360 Multi-Specialist Hospital</span>
                  </div>
                </div>
                <div className="notice-grievance-details">
                  <p><Mail size={16} /> <strong>Email:</strong> grievance@lax360hospital.com / privacy@lax360hospital.com</p>
                  <p><Phone size={16} /> <strong>Phone:</strong> +91 98765 43210</p>
                  <p><Building size={16} /> <strong>Address:</strong> 123 Healthcare Avenue, Salem, Tamil Nadu - 636004</p>
                  <p><Clock size={16} /> <strong>Resolution Turnaround:</strong> Acknowledged within 48 hours; resolved within 30 days.</p>
                </div>
              </div>
              <p className="notice-dpbi-note">
                <strong>Escalation to Data Protection Board of India (DPBI):</strong> If your grievance is not resolved to your satisfaction within 30 days, or if you are dissatisfied with the resolution, you have the statutory right under Section 32 of the DPDP Act 2023 to file a complaint before the Data Protection Board of India.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
