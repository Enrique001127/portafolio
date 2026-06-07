import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ACTIVE_SECTION_SCROLL_OFFSET, SECTION_IDS } from './data/portfolio';
import Header from './components/Header';
import Hero from './components/Hero';
import { useApp } from './hooks/useApp';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  const { translate } = useApp();
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + ACTIVE_SECTION_SCROLL_OFFSET;

      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection((currentSection) => (
              currentSection === sectionId ? currentSection : sectionId
            ));
            break;
          }
        }
      }
    };

    const handleScroll = () => {
      if (animationFrameId.current !== null) return;

      animationFrameId.current = window.requestAnimationFrame(() => {
        updateActiveSection();
        animationFrameId.current = null;
      });
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (animationFrameId.current !== null) {
        window.cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-3 focus:text-white focus:shadow-lg"
      >
        {translate('skip.mainContent')}
      </a>
      <Header activeSection={activeSection} />
      <main id="main-content" tabIndex="-1">
        <Hero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
