import React from 'react';
import { Code, Palette, Rocket } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const About = () => {
  const { t } = useApp();

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.description2')}
            </p>
            <div className="flex space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                JavaScript
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                React
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                Node.js
              </span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Code className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('about.frontend')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.frontendDesc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Palette className="h-8 w-8 text-green-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('about.design')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.designDesc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Rocket className="h-8 w-8 text-purple-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{t('about.optimization')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {t('about.optimizationDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;