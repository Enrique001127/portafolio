import { useEffect, useState } from 'react';
import { Menu, X, Code2, Moon, Sun, Globe } from 'lucide-react';
import { LANGUAGES, NAVIGATION_ITEMS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, selectLanguage, isDarkMode, toggleDarkMode, translate, scrollToSection } = useApp();
  const mobileMenuId = 'mobile-navigation-menu';
  const languageMenuId = 'language-menu';

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const handleNavigationClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label={translate('aria.primaryNavigation')}>
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-blue-600" aria-hidden="true" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">DevPortfolio</span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {NAVIGATION_ITEMS.map((item) => (
              <button
                type="button"
                key={item.id}
                onClick={() => handleNavigationClick(item.id)}
                aria-current={activeSection === item.id ? 'location' : undefined}
                className={`rounded-md px-2 py-2 text-sm font-medium transition-colors hover:text-blue-600 ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {translate(item.labelKey)}
              </button>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                aria-controls={languageMenuId}
                aria-expanded={isLanguageOpen}
                aria-haspopup="true"
                aria-label={translate('aria.languageSelector')}
                className="flex min-h-11 items-center space-x-1 rounded-md px-2 py-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span className="text-sm font-medium">{language.code.toUpperCase()}</span>
              </button>

              {isLanguageOpen && (
                <div id={languageMenuId} className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-md shadow-lg border dark:border-gray-700">
                  {LANGUAGES.map((lang) => (
                    <button
                      type="button"
                      key={lang.code}
                      onClick={() => {
                        selectLanguage(lang);
                        setIsLanguageOpen(false);
                      }}
                      aria-pressed={language.code === lang.code}
                      className={`block min-h-11 w-full px-4 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                        language.code === lang.code
                          ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleDarkMode}
              aria-label={translate(isDarkMode ? 'aria.disableDarkMode' : 'aria.enableDarkMode')}
              className="min-h-11 min-w-11 rounded-md p-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-controls={mobileMenuId}
              aria-expanded={isMenuOpen}
              aria-label={translate(isMenuOpen ? 'aria.closeMobileMenu' : 'aria.openMobileMenu')}
              className="-mr-2 min-h-11 min-w-11 rounded-md p-2 text-gray-700 hover:text-blue-600 dark:text-gray-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id={mobileMenuId} className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {NAVIGATION_ITEMS.map((item) => (
                <button
                  type="button"
                  key={item.id}
                  onClick={() => handleNavigationClick(item.id)}
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  className={`block min-h-11 w-full px-3 py-3 text-left text-base font-medium transition-colors hover:bg-blue-50 hover:text-blue-600 ${
                    activeSection === item.id
                      ? 'text-blue-600 bg-blue-50 dark:bg-blue-900/20'
                      : 'text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {translate(item.labelKey)}
                </button>
              ))}

              <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-700 mt-2 pt-4">
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-gray-600 dark:text-gray-400" aria-hidden="true" />
                  <select
                    value={language.code}
                    aria-label={translate('aria.languageSelector')}
                    onChange={(e) => {
                      const selectedLanguage = LANGUAGES.find(({ code }) => code === e.target.value);
                      if (selectedLanguage) selectLanguage(selectedLanguage);
                    }}
                    className="min-h-11 bg-transparent text-sm text-gray-700 dark:text-gray-300 border-none"
                  >
                    {LANGUAGES.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={toggleDarkMode}
                  aria-label={translate(isDarkMode ? 'aria.disableDarkMode' : 'aria.enableDarkMode')}
                  className="min-h-11 min-w-11 rounded-md p-2 text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300"
                >
                  {isDarkMode ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
