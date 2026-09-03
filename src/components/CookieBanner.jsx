import { ShieldCheck, SlidersHorizontal, Check } from "lucide-react";
import { usePrivacy } from "../context/PrivacyContext";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const { isLoaded, hasResponded, acceptAllCookies, openCookieModal, rejectNonEssentialCookies } = usePrivacy();

  if (!isLoaded || hasResponded) {
    return null;
  }

  return (
    <aside aria-label="Cookie Consent Banner" className="dpdp-cookie-banner">
      <div className="dpdp-cookie-container">
        <div className="dpdp-cookie-content">
          <div className="dpdp-cookie-header">
            <div className="dpdp-cookie-icon-wrapper">
              <ShieldCheck className="dpdp-cookie-icon" size={17} />
            </div>
            <h4 className="dpdp-cookie-title">Your Privacy & Cookie Choices</h4>
            <span className="dpdp-cookie-badge">DPDP Act 2023 Compliant</span>
          </div>
          <p className="dpdp-cookie-desc">
            We use cookies and similar technologies to ensure secure hospital services, enhance your browsing experience, and analyze site traffic in compliance with India's DPDP Act. Read our{" "}
            <Link to="/privacy-notice" className="dpdp-link">
              Privacy Notice
            </Link>.
          </p>
        </div>

        <div className="dpdp-cookie-actions">
          <button
            type="button"
            onClick={openCookieModal}
            className="dpdp-btn dpdp-btn-secondary"
          >
            <SlidersHorizontal size={14} />
            <span>Manage Preferences</span>
          </button>
          <button
            type="button"
            onClick={rejectNonEssentialCookies}
            className="dpdp-btn dpdp-btn-outline"
          >
            <span>Reject Non-Essential</span>
          </button>
          <button
            type="button"
            onClick={acceptAllCookies}
            className="dpdp-btn dpdp-btn-primary"
          >
            <Check size={15} />
            <span>Accept All</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
