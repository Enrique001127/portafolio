import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">DevPortfolio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Desarrollador apasionado por crear experiencias web excepcionales con las últimas tecnologías.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Sobre mí</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Proyectos</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>tuemailprofesional@gmail.com</li>
              <li>+1 (555) 123-4567</li>
              <li>Ciudad, País</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DevPortfolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;