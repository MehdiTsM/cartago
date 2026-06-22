import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const STORAGE_KEY = "cartago-language";
const SUPPORTED_LANGUAGES = ["fr", "en", "ar"];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const { i18n } = useTranslation();
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") return "fr";

    const storedLanguage = localStorage.getItem(STORAGE_KEY);
    return SUPPORTED_LANGUAGES.includes(storedLanguage)
      ? storedLanguage
      : i18n.resolvedLanguage || i18n.language || "fr";
  });

  useEffect(() => {
    const nextLanguage = SUPPORTED_LANGUAGES.includes(language) ? language : "fr";

    document.documentElement.lang = nextLanguage;
    document.documentElement.dir = nextLanguage === "ar" ? "rtl" : "ltr";
    localStorage.setItem(STORAGE_KEY, nextLanguage);

    if (i18n.language !== nextLanguage) {
      void i18n.changeLanguage(nextLanguage);
    }
  }, [i18n, language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        if (SUPPORTED_LANGUAGES.includes(nextLanguage)) {
          setLanguageState(nextLanguage);
        }
      },
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
