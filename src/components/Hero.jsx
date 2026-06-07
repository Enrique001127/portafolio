import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { CV_FILES, SOCIAL_LINKS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const SOCIAL_ICONS = {
  github: Github,
  linkedin: Linkedin,
};

const Hero = () => {
  const { language, translate } = useApp();
  const cvFile = CV_FILES[language.code] || CV_FILES.es;
  const featuredSocialLinks = SOCIAL_LINKS.filter(({ isFeatured }) => isFeatured);

  return (
    <section id="home" aria-labelledby="home-title" className="min-h-screen scroll-mt-20 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 id="home-title" className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              {translate('hero.greeting')}{' '}
              <span className="text-blue-600">{translate('hero.role')}</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {translate('hero.description')}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={cvFile.url}
              download={cvFile.filename}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full max-w-xs items-center justify-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700 sm:w-auto"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              <span>{translate('hero.downloadCV')}</span>
            </a>
            <a
              href="#contact"
              className="inline-flex w-full max-w-xs items-center justify-center space-x-2 rounded-lg border-2 border-blue-600 px-6 py-3 text-blue-600 transition-colors hover:bg-blue-600 hover:text-white sm:w-auto"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              <span>{translate('hero.contact')}</span>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            {featuredSocialLinks.map(({ id, label, url }) => {
              const SocialIcon = SOCIAL_ICONS[id];

              return (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex min-h-11 min-w-11 items-center justify-center text-gray-600 transition-colors hover:text-blue-600 dark:text-gray-400"
                >
                  <SocialIcon className="h-8 w-8" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
