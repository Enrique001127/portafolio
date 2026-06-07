import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const Certificates = () => {
  const { translate } = useApp();

  return (
    <section id="certificates" aria-labelledby="certificates-title" className="scroll-mt-20 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="certificates-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('certificates.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate('certificates.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              className="overflow-hidden rounded-lg bg-gray-50 shadow-lg transition-shadow duration-300 hover:shadow-xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105 dark:bg-gray-800"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                <img
                  src={cert.thumbnailUrl}
                  alt={`Vista previa del certificado ${cert.title}`}
                  width="400"
                  height="256"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Award className="h-8 w-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {cert.institution}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  {cert.description}
                </p>

                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <span>{translate('certificates.view')}</span>
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
