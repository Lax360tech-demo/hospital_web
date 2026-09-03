import { useState, useEffect } from "react";
import { X, ShieldCheck, Lock, BarChart3, Megaphone, Sparkles, Check } from "lucide-react";
import { usePrivacy } from "../context/PrivacyContext";
import { Link } from "react-router-dom";

export default function CookieModal() {
  const {
    isCookieModalOpen,
    closeCookieModal,
    preferences,
    savePreferences,
    acceptAllCookies,
  } = usePrivacy();

  const [localPrefs, setLocalPrefs] = useState({
    analytics: false,
    marketing: false,
    functional: true,
  });

  useEffect(() => {
    if (isCookieModalOpen) {
      setLocalPrefs({
        analytics: preferences.analytics || false,
        marketing: preferences.marketing || false,
        functional: preferences.functional !== undefined ? preferences.functional : true,
      });
    }
  }, [isCookieModalOpen, preferences]);

  if (!isCookieModalOpen) return null;

  const handleToggle = (key) => {
    setLocalPrefs((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSave = () => {
    savePreferences(localPrefs);
  };

  return (
    <div className="dpdp-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="dpdp-cookie-title">
      <div className="dpdp-modal-card">
        {/* MODAL HEADER */}
        <div className="dpdp-modal-header">
          <div className="dpdp-modal-title-group">
            <div className="dpdp-modal-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <h2 id="dpdp-cookie-title">Cookie & Tracking Preferences</h2>
              <p>Under the DPDP Act 2023, you have the right to manage your consent.</p>
            </div>
          </div>
          <button
            type="button"
            className="dpdp-modal-close"
            onClick={closeCookieModal}
            aria-label="Close preferences modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* MODAL BODY */}
        <div className="dpdp-modal-body">
          <p className="dpdp-modal-intro">
            We use cookies and similar technologies to ensure seamless hospital operations, protect patient privacy, and deliver optimal healthcare services. You can adjust your preferences below at any time. For more information, please read our{" "}
            <Link to="/privacy-notice" onClick={closeCookieModal} className="dpdp-inline-link">
              Privacy Notice
            </Link>.
          </p>

          <div className="dpdp-cookie-categories">
            {/* 1. ESSENTIAL COOKIES */}
            <div className="dpdp-category-card">
              <div className="dpdp-category-header">
                <div className="dpdp-category-info">
                  <div className="dpdp-category-badge-icon essential">
                    <Lock size={16} />
                  </div>
                  <div>
                    <div className="dpdp-category-title-row">
                      <h4>Essential Cookies</h4>
                      <span className="dpdp-status-badge always-active">Always Active</span>
                    </div>
                    <p>
                      Required for core security, patient session management, appointment request integrity, and load balancing. These cannot be disabled.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. ANALYTICS COOKIES */}
            <div className="dpdp-category-card">
              <div className="dpdp-category-header">
                <div className="dpdp-category-info">
                  <div className="dpdp-category-badge-icon analytics">
                    <BarChart3 size={16} />
                  </div>
                  <div>
                    <div className="dpdp-category-title-row">
                      <h4>Analytics & Performance Cookies</h4>
                      <span className={`dpdp-status-badge ${localPrefs.analytics ? "active" : "inactive"}`}>
                        {localPrefs.analytics ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p>
                      Collect aggregated and pseudonymized metrics to help us understand patient portal navigation, optimize page loading, and improve service delivery.
                    </p>
                  </div>
                </div>
                <div className="dpdp-toggle-wrapper">
                  <label className="dpdp-switch">
                    <input
                      type="checkbox"
                      checked={localPrefs.analytics}
                      onChange={() => handleToggle("analytics")}
                      aria-label="Toggle Analytics Cookies"
                    />
                    <span className="dpdp-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* 3. MARKETING COOKIES */}
            <div className="dpdp-category-card">
              <div className="dpdp-category-header">
                <div className="dpdp-category-info">
                  <div className="dpdp-category-badge-icon marketing">
                    <Megaphone size={16} />
                  </div>
                  <div>
                    <div className="dpdp-category-title-row">
                      <h4>Marketing & Communication Cookies</h4>
                      <span className={`dpdp-status-badge ${localPrefs.marketing ? "active" : "inactive"}`}>
                        {localPrefs.marketing ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p>
                      Used to deliver relevant public health awareness campaigns, vaccination alerts, and preventative healthcare updates across digital platforms.
                    </p>
                  </div>
                </div>
                <div className="dpdp-toggle-wrapper">
                  <label className="dpdp-switch">
                    <input
                      type="checkbox"
                      checked={localPrefs.marketing}
                      onChange={() => handleToggle("marketing")}
                      aria-label="Toggle Marketing Cookies"
                    />
                    <span className="dpdp-slider"></span>
                  </label>
                </div>
              </div>
            </div>

            {/* 4. FUNCTIONAL COOKIES */}
            <div className="dpdp-category-card">
              <div className="dpdp-category-header">
                <div className="dpdp-category-info">
                  <div className="dpdp-category-badge-icon functional">
                    <Sparkles size={16} />
                  </div>
                  <div>
                    <div className="dpdp-category-title-row">
                      <h4>Functional & Personalisation Cookies</h4>
                      <span className={`dpdp-status-badge ${localPrefs.functional ? "active" : "inactive"}`}>
                        {localPrefs.functional ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p>
                      Remember your department preferences, doctor filter settings, font accessibility choices, and preferred hospital location for convenience.
                    </p>
                  </div>
                </div>
                <div className="dpdp-toggle-wrapper">
                  <label className="dpdp-switch">
                    <input
                      type="checkbox"
                      checked={localPrefs.functional}
                      onChange={() => handleToggle("functional")}
                      aria-label="Toggle Functional Cookies"
                    />
                    <span className="dpdp-slider"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MODAL FOOTER */}
        <div className="dpdp-modal-footer">
          <button
            type="button"
            className="dpdp-btn dpdp-btn-outline"
            onClick={closeCookieModal}
          >
            Cancel
          </button>
          <button
            type="button"
            className="dpdp-btn dpdp-btn-secondary"
            onClick={acceptAllCookies}
          >
            <Check size={16} />
            Accept All
          </button>
          <button
            type="button"
            className="dpdp-btn dpdp-btn-primary"
            onClick={handleSave}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  );
}
