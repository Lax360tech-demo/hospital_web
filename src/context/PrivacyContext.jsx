import { createContext, useContext, useState, useEffect } from "react";

const PrivacyContext = createContext();

const STORAGE_KEY = "lax360_dpdp_cookie_preferences";

const DEFAULT_PREFERENCES = {
  essential: true, // Always true and cannot be disabled
  analytics: false,
  marketing: false,
  functional: true,
  hasResponded: false,
  timestamp: null,
};

export function PrivacyProvider({ children }) {
  const [preferences, setPreferences] = useState(DEFAULT_PREFERENCES);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setPreferences({
          ...DEFAULT_PREFERENCES,
          ...parsed,
          essential: true, // Ensure essential is always true
        });
      }
    } catch (err) {
      console.error("Failed to read cookie preferences from localStorage:", err);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const savePreferences = (newPrefs) => {
    const updated = {
      ...preferences,
      ...newPrefs,
      essential: true,
      hasResponded: true,
      timestamp: new Date().toISOString(),
    };
    setPreferences(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (err) {
      console.error("Failed to save cookie preferences to localStorage:", err);
    }
    setIsCookieModalOpen(false);
  };

  const acceptAllCookies = () => {
    savePreferences({
      analytics: true,
      marketing: true,
      functional: true,
    });
  };

  const rejectNonEssentialCookies = () => {
    savePreferences({
      analytics: false,
      marketing: false,
      functional: false,
    });
  };

  const openCookieModal = () => setIsCookieModalOpen(true);
  const closeCookieModal = () => setIsCookieModalOpen(false);

  return (
    <PrivacyContext.Provider
      value={{
        preferences,
        isLoaded,
        hasResponded: preferences.hasResponded,
        isCookieModalOpen,
        openCookieModal,
        closeCookieModal,
        savePreferences,
        acceptAllCookies,
        rejectNonEssentialCookies,
      }}
    >
      {children}
    </PrivacyContext.Provider>
  );
}

export function usePrivacy() {
  const context = useContext(PrivacyContext);
  if (!context) {
    throw new Error("usePrivacy must be used within a PrivacyProvider");
  }
  return context;
}
