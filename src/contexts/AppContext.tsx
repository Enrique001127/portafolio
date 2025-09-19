import React, { createContext, useContext, useState, useEffect } from 'react';

interface Language {
  code: 'es' | 'en';
  name: string;
}

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  t: (key: string) => string;
}

const translations: Translations = {
  // Header
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.about': { es: 'Sobre mí', en: 'About' },
  'nav.skills': { es: 'Habilidades', en: 'Skills' },
  'nav.projects': { es: 'Proyectos', en: 'Projects' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  
  // Hero
  'hero.greeting': { es: 'Hola, soy', en: 'Hi, I\'m a' },
  'hero.role': { es: 'Desarrollador', en: 'Developer' },
  'hero.description': { es: 'Especializado en JavaScript, React y desarrollo web moderno. Creando experiencias digitales excepcionales con código limpio y diseño intuitivo.', en: 'Specialized in JavaScript, React and modern web development. Creating exceptional digital experiences with clean code and intuitive design.' },
  'hero.downloadCV': { es: 'Descargar CV', en: 'Download CV' },
  'hero.contact': { es: 'Contactar', en: 'Contact' },
  
  // About
  'about.title': { es: 'Sobre Mí', en: 'About Me' },
  'about.subtitle': { es: 'Apasionado por la tecnología y el desarrollo web, con experiencia en crear soluciones digitales innovadoras', en: 'Passionate about technology and web development, with experience creating innovative digital solutions' },
  'about.description1': { es: 'Soy un desarrollador frontend graduado de la Universidad de las Ciencias Informáticas con poca experiencia en el desarrollo de aplicaciones web modernas, pero con ganas de emprender y en constante crecimiento. Me especializo en JavaScript, React y las últimas tecnologías web, siempre buscando crear experiencias de usuario excepcionales.', en: 'I\'m a frontend developer graduated from the University of Computer Sciences with little experience in modern web application development, but with entrepreneurial spirit and constantly growing. I specialize in JavaScript, React and the latest web technologies, always looking to create exceptional user experiences.' },
  'about.description2': { es: 'Mi enfoque se centra en escribir código limpio, mantenible y escalable. Disfruto trabajando en equipo y estoy siempre dispuesto a aprender nuevas tecnologías y enfrentar desafíos interesantes.', en: 'My approach focuses on writing clean, maintainable and scalable code. I enjoy working in teams and am always willing to learn new technologies and face interesting challenges.' },
  'about.frontend': { es: 'Desarrollo Frontend', en: 'Frontend Development' },
  'about.frontendDesc': { es: 'Creación de interfaces de usuario modernas y responsive con React, JavaScript y CSS', en: 'Creating modern and responsive user interfaces with React, JavaScript and CSS' },
  'about.design': { es: 'UI/UX Design', en: 'UI/UX Design' },
  'about.designDesc': { es: 'Diseño de experiencias de usuario intuitivas y atractivas con herramientas modernas', en: 'Designing intuitive and attractive user experiences with modern tools' },
  'about.optimization': { es: 'Optimización', en: 'Optimization' },
  'about.optimizationDesc': { es: 'Mejora del rendimiento y SEO para aplicaciones web de alta calidad', en: 'Performance and SEO improvement for high-quality web applications' },
  
  // Skills
  'skills.title': { es: 'Habilidades Técnicas', en: 'Technical Skills' },
  'skills.subtitle': { es: 'Tecnologías y herramientas que domino para crear soluciones web modernas', en: 'Technologies and tools I master to create modern web solutions' },
  
  // Projects
  'projects.title': { es: 'Proyectos Destacados', en: 'Featured Projects' },
  'projects.subtitle': { es: 'Una selección de proyectos que demuestran mis habilidades técnicas y creatividad', en: 'A selection of projects that demonstrate my technical skills and creativity' },
  'projects.viewProject': { es: 'Ver proyecto', en: 'View project' },
  'projects.code': { es: 'Código', en: 'Code' },
  'projects.ecommerce.title': { es: 'E-commerce Platform', en: 'E-commerce Platform' },
  'projects.ecommerce.desc': { es: 'Plataforma de comercio electrónico completa con carrito de compras, pagos y gestión de inventario.', en: 'Complete e-commerce platform with shopping cart, payments and inventory management.' },
  'projects.taskapp.title': { es: 'Task Management App', en: 'Task Management App' },
  'projects.taskapp.desc': { es: 'Aplicación de gestión de tareas con autenticación de usuarios, tableros Kanban y colaboración en tiempo real.', en: 'Task management application with user authentication, Kanban boards and real-time collaboration.' },
  'projects.weather.title': { es: 'Weather Dashboard', en: 'Weather Dashboard' },
  'projects.weather.desc': { es: 'Dashboard del clima con pronósticos, mapas interactivos y alertas personalizadas.', en: 'Weather dashboard with forecasts, interactive maps and personalized alerts.' },
  'projects.portfolio.title': { es: 'Portfolio Website', en: 'Portfolio Website' },
  'projects.portfolio.desc': { es: 'Sitio web de portafolio personal con diseño responsivo y animaciones suaves.', en: 'Personal portfolio website with responsive design and smooth animations.' },
  
  // Contact
  'contact.title': { es: 'Contacto', en: 'Contact' },
  'contact.subtitle': { es: '¿Tienes un proyecto en mente? ¡Hablemos y hagamos realidad tus ideas!', en: 'Do you have a project in mind? Let\'s talk and make your ideas come true!' },
  'contact.email': { es: 'Email', en: 'Email' },
  'contact.phone': { es: 'Teléfono', en: 'Phone' },
  'contact.location': { es: 'Ubicación', en: 'Location' },
  'contact.name': { es: 'Nombre', en: 'Name' },
  'contact.message': { es: 'Mensaje', en: 'Message' },
  'contact.send': { es: 'Enviar mensaje', en: 'Send message' },
  'contact.success': { es: '¡Gracias por tu mensaje! Te contactaré pronto.', en: 'Thank you for your message! I will contact you soon.' },
  
  // Footer
  'footer.description': { es: 'Desarrollador apasionado por crear experiencias web excepcionales con las últimas tecnologías.', en: 'Developer passionate about creating exceptional web experiences with the latest technologies.' },
  'footer.links': { es: 'Enlaces', en: 'Links' },
  'footer.rights': { es: 'Todos los derechos reservados.', en: 'All rights reserved.' }
};

const languages: Language[] = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' }
];

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(languages[0]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load saved preferences from localStorage
    const savedLanguage = localStorage.getItem('language');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedLanguage) {
      const lang = languages.find(l => l.code === savedLanguage);
      if (lang) setLanguage(lang);
    }
    
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang.code);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const t = (key: string): string => {
    return translations[key]?.[language.code] || key;
  };

  return (
    <AppContext.Provider value={{
      language,
      setLanguage: handleSetLanguage,
      isDarkMode,
      toggleDarkMode,
      t
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};