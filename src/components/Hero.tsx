import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Hero = () => {
  const { t } = useApp();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {t('hero.greeting')}{' '}
              <span className="text-blue-600">{t('hero.role')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('hero.description')}
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href={t('cv.link')}
              download={t('cv.filename')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>{t('hero.downloadCV')}</span>
            </a>
            <a
              href="#contact"
              className="flex items-center space-x-2 border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>{t('hero.contact')}</span>
            </a>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Enrique001127/portafolio" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/enrique-martín-martínez-434441363" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;