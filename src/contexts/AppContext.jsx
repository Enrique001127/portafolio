import { useEffect, useState } from 'react';
import { AppContext } from './AppContextCore';
import { DEFAULT_LANGUAGE, LANGUAGES, REDUCED_MOTION_QUERY, STORAGE_KEYS } from '../data/portfolio';
import { translations } from '../data/translations';

export const AppProvider = ({ children }) => {
  const [language, setSelectedLanguage] = useState(DEFAULT_LANGUAGE);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.lang = language.code;
  }, [language.code]);

  useEffect(() => {
    const savedLanguageCode = localStorage.getItem(STORAGE_KEYS.language);
    const savedDarkMode = localStorage.getItem(STORAGE_KEYS.darkMode);
    const savedLanguage = LANGUAGES.find(({ code }) => code === savedLanguageCode);

    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }

    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const selectLanguage = (nextLanguage) => {
    setSelectedLanguage(nextLanguage);
    localStorage.setItem(STORAGE_KEYS.language, nextLanguage.code);
  };

  const toggleDarkMode = () => {
    const nextDarkMode = !isDarkMode;

    setIsDarkMode(nextDarkMode);
    localStorage.setItem(STORAGE_KEYS.darkMode, nextDarkMode.toString());

    if (nextDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const translate = (translationKey) => {
    return translations[translationKey]?.[language.code] || translationKey;
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      const prefersReducedMotion = window.matchMedia(REDUCED_MOTION_QUERY).matches;

      section.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  return (
    <AppContext.Provider
      value={{
        language,
        selectLanguage,
        isDarkMode,
        toggleDarkMode,
        translate,
        scrollToSection,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
