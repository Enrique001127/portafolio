import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Certificates = () => {
  const { t } = useApp();

  const certificates = [
    {
      title: 'Inteligencia Artificial',
      institution: 'Certificado de IA',
      date: '2024',
      description: 'Certificado de formación en Inteligencia Artificial',
      pdfUrl: 'https://drive.google.com/file/d/1vhTfGTQV1Wky3hArI_OoyC1WrPwW_9kW/view?usp=sharing',
      previewUrl: 'https://drive.google.com/file/d/1vhTfGTQV1Wky3hArI_OoyC1WrPwW_9kW/preview'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('certificates.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('certificates.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-64 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                <iframe
                  src={cert.previewUrl}
                  className="w-full h-full"
                  title={cert.title}
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <Award className="h-8 w-8 text-blue-600 flex-shrink-0" />
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
                  <span>{t('certificates.view')}</span>
                  <ExternalLink className="h-4 w-4" />
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
