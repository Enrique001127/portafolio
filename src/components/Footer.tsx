import React from 'react';
import { Code2, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

const Footer = () => {
  const { t } = useApp();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/Enrique001127/portafolio" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/enrique-martín-martínez-434441363" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:enrique001127@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="https://wa.me/5356261130" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">{t('nav.skills')}</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">{t('nav.projects')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>enrique001127@gmail.com</li>
              <li>+5356261130</li>
              <li>La Habana, Cuba</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DevPortfolio. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;