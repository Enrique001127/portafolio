import { Code, Palette, Rocket } from 'lucide-react';
import { ABOUT_TECHNOLOGIES } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const About = () => {
  const { translate } = useApp();

  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-20 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('about.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {translate('about.description1')}
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {translate('about.description2')}
            </p>
            <div className="flex flex-wrap gap-3">
              {ABOUT_TECHNOLOGIES.map((technology) => (
                <span
                  key={technology.id}
                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${technology.className}`}
                >
                  {technology.name}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Code className="h-8 w-8 text-blue-600 mb-3" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{translate('about.frontend')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {translate('about.frontendDesc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Palette className="h-8 w-8 text-green-600 mb-3" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{translate('about.design')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {translate('about.designDesc')}
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <Rocket className="h-8 w-8 text-purple-600 mb-3" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{translate('about.optimization')}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {translate('about.optimizationDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
