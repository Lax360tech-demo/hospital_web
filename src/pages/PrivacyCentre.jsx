import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Eye,
  FileEdit,
  Trash2,
  UserX,
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  X,
  Clock,
  Mail,
  Phone,
  Building,
  Lock,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { usePrivacy } from "../context/PrivacyContext";

export default function PrivacyCentre() {
  const { openCookieModal } = usePrivacy();
  const [activeModal, setActiveModal] = useState(null); // 'view' | 'correct' | 'erasure' | 'withdraw' | 'grievance'
  const [submissionResult, setSubmissionResult] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    patientId: "",
    dataCategory: "all",
    details: "",
    reason: "",
    currentValue: "",
    correctedValue: "",
    selectedConsents: {
      marketing: true,
      reminders: false,
      newsletter: true,
      surveys: true,
    },
    grievanceType: "unauthorized_access",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleConsentToggle = (key) => {
    setFormData((prev) => ({
      ...prev,
      selectedConsents: {
        ...prev.selectedConsents,
        [key]: !prev.selectedConsents[key],
      },
    }));
  };

  const openModal = (type) => {
    setActiveModal(type);
    setSubmissionResult(null);
  };

  const closeModal = () => {
    setActiveModal(null);
    setSubmissionResult(null);
  };

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    const referencePrefix = {
      view: "DPDP-ACC",
      correct: "DPDP-COR",
      erasure: "DPDP-ERA",
      withdraw: "DPDP-WDR",
      grievance: "DPDP-GRV",
    }[activeModal] || "DPDP-REQ";

    const randomNum = Math.floor(100000 + Math.random() * 900000);
    const trackingId = `${referencePrefix}-${new Date().getFullYear()}-${randomNum}`;

    setSubmissionResult({
      trackingId,
      type: activeModal,
      submittedAt: new Date().toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      email: formData.email,
    });
  };

  return (
    <div className="privacy-centre-page">
      <Navbar />

      {/* HERO SECTION */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-badge">
            <ShieldCheck size={18} />
            <span>DPDP ACT 2023 COMPLIANCE PORTAL</span>
          </div>
          <h1>Privacy Centre</h1>
          <p className="privacy-hero-subtitle">
            Manage your personal data, privacy preferences, and exercise your statutory rights as a Data Principal with LAX360 Multi-Specialist Hospital.
          </p>
          <div className="privacy-hero-links">
            <Link to="/privacy-notice" className="privacy-hero-link">
              Read Full Privacy Notice <ArrowRight size={15} />
            </Link>
            <button
              type="button"
              onClick={openCookieModal}
              className="privacy-hero-btn"
            >
              <SlidersHorizontal size={15} />
              Manage Cookie Preferences
            </button>
          </div>
        </div>
      </section>

      {/* MAIN RIGHTS CARDS SECTION */}
      <section className="privacy-cards-section">
        <div className="privacy-container">
          <div className="privacy-section-header">
            <span className="privacy-section-tag">DATA PRINCIPAL RIGHTS</span>
            <h2>Your Statutory Privacy Rights</h2>
            <p>
              Under India's Digital Personal Data Protection (DPDP) Act, you have comprehensive rights to access, correct, delete, or withdraw consent regarding your personal health and demographic information.
            </p>
          </div>

          <div className="privacy-grid">
            {/* 1. VIEW MY DATA */}
            <div className="dpdp-card">
              <div className="dpdp-card-icon-wrap">
                <Eye size={24} className="dpdp-card-icon" />
              </div>
              <div className="dpdp-card-content">
                <span className="dpdp-card-tag">Right to Access</span>
                <h3>View My Data</h3>
                <p>
                  Request a complete summary of the personal, demographic, and consultation data processed by LAX360 Hospital.
                </p>
              </div>
              <button
                type="button"
                className="dpdp-action-btn"
                onClick={() => openModal("view")}
              >
                <span>Request</span>
                <ChevronRight size={17} />
              </button>
            </div>

            {/* 2. CORRECT MY DATA */}
            <div className="dpdp-card">
              <div className="dpdp-card-icon-wrap">
                <FileEdit size={24} className="dpdp-card-icon" />
              </div>
              <div className="dpdp-card-content">
                <span className="dpdp-card-tag">Right to Correction</span>
                <h3>Correct My Data</h3>
                <p>
                  Request correction, completion, or updating of inaccurate, outdated, or incomplete personal data records.
                </p>
              </div>
              <button
                type="button"
                className="dpdp-action-btn"
                onClick={() => openModal("correct")}
              >
                <span>Request</span>
                <ChevronRight size={17} />
              </button>
            </div>

            {/* 3. REQUEST ERASURE */}
            <div className="dpdp-card">
              <div className="dpdp-card-icon-wrap">
                <Trash2 size={24} className="dpdp-card-icon" />
              </div>
              <div className="dpdp-card-content">
                <span className="dpdp-card-tag">Right to Erasure</span>
                <h3>Request Erasure</h3>
                <p>
                  Request deletion of your non-mandated personal data where retention is no longer necessary for hospital services.
                </p>
              </div>
              <button
                type="button"
                className="dpdp-action-btn"
                onClick={() => openModal("erasure")}
              >
                <span>Request</span>
                <ChevronRight size={17} />
              </button>
            </div>

            {/* 4. WITHDRAW CONSENT */}
            <div className="dpdp-card">
              <div className="dpdp-card-icon-wrap">
                <UserX size={24} className="dpdp-card-icon" />
              </div>
              <div className="dpdp-card-content">
                <span className="dpdp-card-tag">Consent Management</span>
                <h3>Withdraw Consent</h3>
                <p>
                  Withdraw or modify consent previously granted for communication, marketing, newsletters, or health surveys.
                </p>
              </div>
              <button
                type="button"
                className="dpdp-action-btn"
                onClick={() => openModal("withdraw")}
              >
                <span>Manage</span>
                <ChevronRight size={17} />
              </button>
            </div>

            {/* 5. PRIVACY GRIEVANCE */}
            <div className="dpdp-card dpdp-card-grievance">
              <div className="dpdp-card-icon-wrap grievance-icon">
                <AlertCircle size={24} className="dpdp-card-icon" />
              </div>
              <div className="dpdp-card-content">
                <span className="dpdp-card-tag grievance-tag">Grievance Redressal</span>
                <h3>Privacy Grievance</h3>
                <p>
                  Lodge a formal privacy complaint or concern directly to the Hospital's designated Data Protection Officer.
                </p>
              </div>
              <button
                type="button"
                className="dpdp-action-btn grievance-btn"
                onClick={() => openModal("grievance")}
              >
                <span>Submit Request</span>
                <ChevronRight size={17} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DPO & ESCALATION SECTION */}
      <section className="privacy-dpo-section">
        <div className="privacy-container">
          <div className="privacy-dpo-grid">
            {/* DPO CARD */}
            <div className="privacy-dpo-card">
              <div className="privacy-dpo-header">
                <Building size={24} className="dpo-header-icon" />
                <div>
                  <h3>Data Protection Officer (DPO)</h3>
                  <span>LAX360 Multi-Specialist Hospital</span>
                </div>
              </div>
              <p>
                In accordance with the DPDP Act 2023, our dedicated Data Protection Officer is responsible for overseeing privacy compliance, responding to data principal requests, and resolving grievances.
              </p>
              <div className="privacy-dpo-details">
                <div className="dpo-detail-item">
                  <Mail size={16} />
                  <span>privacy@lax360hospital.com / grievance@lax360hospital.com</span>
                </div>
                <div className="dpo-detail-item">
                  <Phone size={16} />
                  <span>+91 98765 43210 (Mon - Sat, 9:00 AM - 5:00 PM)</span>
                </div>
                <div className="dpo-detail-item">
                  <Clock size={16} />
                  <span>SLA: Acknowledgement within 48 hrs, Resolution within 30 days</span>
                </div>
              </div>
            </div>

            {/* LEGAL ESCALATION CARD */}
            <div className="privacy-escalation-card">
              <div className="privacy-dpo-header">
                <Lock size={24} className="dpo-header-icon" />
                <div>
                  <h3>Data Protection Board of India (DPBI)</h3>
                  <span>Statutory Regulatory Authority</span>
                </div>
              </div>
              <p>
                If your grievance is not resolved to your satisfaction by our Grievance Redressal Officer within the statutory timeline, you have the right under Section 32 of the DPDP Act 2023 to escalate your complaint to the Data Protection Board of India.
              </p>
              <Link to="/privacy-notice" className="dpo-notice-link">
                Learn more in our Privacy Notice <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          INTERACTIVE REQUEST MODAL
      ========================================= */}
      {activeModal && (
        <div className="dpdp-modal-overlay" role="dialog" aria-modal="true">
          <div className="dpdp-modal-card dpdp-request-modal">
            {/* MODAL HEADER */}
            <div className="dpdp-modal-header">
              <div className="dpdp-modal-title-group">
                <div className="dpdp-modal-icon">
                  {activeModal === "view" && <Eye size={22} />}
                  {activeModal === "correct" && <FileEdit size={22} />}
                  {activeModal === "erasure" && <Trash2 size={22} />}
                  {activeModal === "withdraw" && <UserX size={22} />}
                  {activeModal === "grievance" && <AlertCircle size={22} />}
                </div>
                <div>
                  <h2>
                    {activeModal === "view" && "Request Information / View My Data"}
                    {activeModal === "correct" && "Request Correction of Inaccurate Data"}
                    {activeModal === "erasure" && "Request Data Erasure / Deletion"}
                    {activeModal === "withdraw" && "Manage & Withdraw Consent"}
                    {activeModal === "grievance" && "Submit a Privacy Grievance"}
                  </h2>
                  <p>DPDP Act 2023 • Data Principal Request Portal</p>
                </div>
              </div>
              <button
                type="button"
                className="dpdp-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="dpdp-modal-body">
              {submissionResult ? (
                /* SUCCESS CONFIRMATION STATE */
                <div className="dpdp-success-state">
                  <div className="dpdp-success-icon-wrap">
                    <CheckCircle2 size={48} className="dpdp-success-icon" />
                  </div>
                  <h3>Request Successfully Submitted!</h3>
                  <p className="dpdp-success-text">
                    Your request has been securely logged with our Data Protection Office in accordance with the DPDP Act 2023.
                  </p>

                  <div className="dpdp-ticket-box">
                    <div className="dpdp-ticket-row">
                      <span>Tracking Reference ID:</span>
                      <strong>{submissionResult.trackingId}</strong>
                    </div>
                    <div className="dpdp-ticket-row">
                      <span>Submitted On:</span>
                      <span>{submissionResult.submittedAt}</span>
                    </div>
                    <div className="dpdp-ticket-row">
                      <span>Notification Sent To:</span>
                      <span>{submissionResult.email}</span>
                    </div>
                    <div className="dpdp-ticket-row">
                      <span>Turnaround Time:</span>
                      <span>Acknowledgement in 48 hrs • Resolution within 30 days</span>
                    </div>
                  </div>

                  <p className="dpdp-success-note">
                    Please retain this Tracking Reference ID for any future correspondence regarding this request.
                  </p>

                  <div className="dpdp-modal-footer-single">
                    <button
                      type="button"
                      className="dpdp-btn dpdp-btn-primary"
                      onClick={closeModal}
                    >
                      Done & Close
                    </button>
                  </div>
                </div>
              ) : (
                /* FORM INPUTS */
                <form onSubmit={handleSubmitRequest} className="dpdp-form">
                  <div className="dpdp-form-row">
                    <div className="dpdp-form-group">
                      <label>
                        Full Name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g. Partha Sarathi"
                        required
                      />
                    </div>

                    <div className="dpdp-form-group">
                      <label>
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. name@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="dpdp-form-row">
                    <div className="dpdp-form-group">
                      <label>
                        Phone Number <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>

                    <div className="dpdp-form-group">
                      <label>
                        Patient ID / UHID (Optional)
                      </label>
                      <input
                        type="text"
                        name="patientId"
                        value={formData.patientId}
                        onChange={handleInputChange}
                        placeholder="e.g. LAX-2026-XXXX"
                      />
                    </div>
                  </div>

                  {/* SPECIFIC FIELDS FOR "VIEW MY DATA" */}
                  {activeModal === "view" && (
                    <div className="dpdp-form-group">
                      <label>Scope of Information Requested</label>
                      <select
                        name="dataCategory"
                        value={formData.dataCategory}
                        onChange={handleInputChange}
                      >
                        <option value="all">All Personal & Consultation Records</option>
                        <option value="profile">Demographic & Contact Information</option>
                        <option value="appointments">Appointment & Consultation History</option>
                        <option value="consents">Consent Logs & Communication Preferences</option>
                        <option value="billing">Invoices & Billing Data</option>
                      </select>
                      <small className="dpdp-field-hint">
                        Note: Official medical and diagnostic records are also available directly through our Medical Records Department.
                      </small>
                    </div>
                  )}

                  {/* SPECIFIC FIELDS FOR "CORRECT MY DATA" */}
                  {activeModal === "correct" && (
                    <>
                      <div className="dpdp-form-group">
                        <label>
                          Current Inaccurate Information <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="currentValue"
                          value={formData.currentValue}
                          onChange={handleInputChange}
                          placeholder="Describe the inaccurate detail (e.g. old phone number, spelling in name)"
                          required
                        />
                      </div>

                      <div className="dpdp-form-group">
                        <label>
                          Correct / Updated Information <span className="required">*</span>
                        </label>
                        <input
                          type="text"
                          name="correctedValue"
                          value={formData.correctedValue}
                          onChange={handleInputChange}
                          placeholder="Provide the accurate information"
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* SPECIFIC FIELDS FOR "REQUEST ERASURE" */}
                  {activeModal === "erasure" && (
                    <div className="dpdp-form-group">
                      <div className="dpdp-notice-banner warning">
                        <AlertCircle size={17} />
                        <div>
                          <strong>Statutory Medical Record Notice:</strong>
                          <p>
                            Under National Medical Commission (NMC) regulations and applicable laws, clinical treatment records must be retained for statutory periods and cannot be erased prematurely. Non-mandatory personal data (marketing preferences, web accounts) will be erased promptly.
                          </p>
                        </div>
                      </div>
                      <label>
                        Reason / Scope of Erasure Request <span className="required">*</span>
                      </label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Please specify which non-clinical personal data or account you wish to have erased..."
                        required
                      />
                    </div>
                  )}

                  {/* SPECIFIC FIELDS FOR "WITHDRAW CONSENT" */}
                  {activeModal === "withdraw" && (
                    <div className="dpdp-form-group">
                      <label>Select communications & processing you wish to withdraw consent for:</label>
                      <div className="dpdp-consent-toggles-list">
                        <label className="dpdp-checkbox-row">
                          <input
                            type="checkbox"
                            checked={formData.selectedConsents.marketing}
                            onChange={() => handleConsentToggle("marketing")}
                          />
                          <span>
                            <strong>Promotional Updates & Health Checkup Offers</strong>
                            <small>Withdraw consent for hospital health package offers and marketing emails.</small>
                          </span>
                        </label>

                        <label className="dpdp-checkbox-row">
                          <input
                            type="checkbox"
                            checked={formData.selectedConsents.newsletter}
                            onChange={() => handleConsentToggle("newsletter")}
                          />
                          <span>
                            <strong>Health Insights & Doctor Articles Newsletter</strong>
                            <small>Withdraw consent from receiving monthly medical advice and blog articles.</small>
                          </span>
                        </label>

                        <label className="dpdp-checkbox-row">
                          <input
                            type="checkbox"
                            checked={formData.selectedConsents.surveys}
                            onChange={() => handleConsentToggle("surveys")}
                          />
                          <span>
                            <strong>Patient Experience Surveys & Feedback</strong>
                            <small>Withdraw consent from feedback follow-up messages.</small>
                          </span>
                        </label>
                      </div>
                    </div>
                  )}

                  {/* SPECIFIC FIELDS FOR "PRIVACY GRIEVANCE" */}
                  {activeModal === "grievance" && (
                    <>
                      <div className="dpdp-form-group">
                        <label>
                          Grievance Category <span className="required">*</span>
                        </label>
                        <select
                          name="grievanceType"
                          value={formData.grievanceType}
                          onChange={handleInputChange}
                        >
                          <option value="unauthorized_access">Alleged Unauthorized Access or Disclosure</option>
                          <option value="consent_violation">Processing After Consent Withdrawal</option>
                          <option value="delay_request">Delay in Fulfilling Data Principal Request</option>
                          <option value="cookie_tracking">Unsolicited Tracking / Cookie Concern</option>
                          <option value="other">Other Privacy Concern</option>
                        </select>
                      </div>

                      <div className="dpdp-form-group">
                        <label>
                          Grievance Details <span className="required">*</span>
                        </label>
                        <textarea
                          name="details"
                          value={formData.details}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Please describe your privacy complaint in detail so our Grievance Redressal Officer can investigate..."
                          required
                        />
                      </div>
                    </>
                  )}

                  {/* ADDITIONAL DETAILS FOR ALL EXCEPT ERASURE & GRIEVANCE */}
                  {activeModal !== "erasure" && activeModal !== "grievance" && (
                    <div className="dpdp-form-group">
                      <label>Additional Notes / Specific Instructions (Optional)</label>
                      <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleInputChange}
                        rows={2}
                        placeholder="Any additional details to assist our Data Protection Office..."
                      />
                    </div>
                  )}

                  {/* CONSENT CONFIRMATION */}
                  <div className="dpdp-form-checkbox-mandatory">
                    <label>
                      <input type="checkbox" required />
                      <span>
                        I declare that I am the Data Principal (or authorized legal representative) and request LAX360 Hospital to process this request in accordance with the DPDP Act 2023.
                      </span>
                    </label>
                  </div>

                  {/* FORM ACTIONS */}
                  <div className="dpdp-modal-footer">
                    <button
                      type="button"
                      className="dpdp-btn dpdp-btn-outline"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="dpdp-btn dpdp-btn-primary"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
