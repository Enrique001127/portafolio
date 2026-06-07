export const STORAGE_KEYS = {
  language: 'language',
  darkMode: 'darkMode',
};

export const ACTIVE_SECTION_SCROLL_OFFSET = 100;
export const COPY_FEEDBACK_TIMEOUT_MS = 2000;
export const DEFAULT_TOAST_DURATION_MS = 5000;
export const EMAILJS_PLACEHOLDER_TOKEN = 'xxxxxxx';
export const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)';

export const LANGUAGES = [
  { code: 'es', name: 'Español' },
  { code: 'en', name: 'English' },
];

export const DEFAULT_LANGUAGE = LANGUAGES[0];

export const NAVIGATION_ITEMS = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'skills', labelKey: 'nav.skills' },
  { id: 'projects', labelKey: 'nav.projects' },
  { id: 'certificates', labelKey: 'nav.certificates' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export const SECTION_IDS = NAVIGATION_ITEMS.map(({ id }) => id);

export const CONTACT_DETAILS = {
  email: 'enrique001127@gmail.com',
  phone: '+5356261130',
  location: 'La Habana, Cuba',
  phoneUrl: 'tel:+5356261130',
  whatsappUrl: 'https://wa.me/5356261130',
};

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/Enrique001127/portafolio',
    isFeatured: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/enrique-martín-martínez-434441363',
    isFeatured: true,
  },
  {
    id: 'email',
    label: 'Email',
    url: `mailto:${CONTACT_DETAILS.email}`,
    isFeatured: false,
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    url: CONTACT_DETAILS.whatsappUrl,
    isFeatured: false,
  },
];

export const CV_FILES = {
  es: {
    url: 'https://drive.google.com/file/d/1tgACsvtuloK7k8e2P0wgisSQJCVZDapW/view?usp=drive_link',
    filename: 'CV_Enrique_Martin_Martinez_ES.pdf',
  },
  en: {
    url: 'https://drive.google.com/file/d/1tgACsvtuloK7k8e2P0wgisSQJCVZDapW/view?usp=drive_link',
    filename: 'CV_Enrique_Martin_Martinez_EN.pdf',
  },
};

export const ABOUT_TECHNOLOGIES = [
  { id: 'javascript', name: 'JavaScript', className: 'bg-blue-100 text-blue-800' },
  { id: 'react', name: 'React', className: 'bg-green-100 text-green-800' },
  { id: 'nodejs', name: 'Node.js', className: 'bg-purple-100 text-purple-800' },
];

export const SKILL_LEVELS = [
  { minimumLevel: 90, labelKey: 'skills.expert', colorClassName: 'bg-green-700' },
  { minimumLevel: 80, labelKey: 'skills.advanced', colorClassName: 'bg-blue-700' },
  { minimumLevel: 70, labelKey: 'skills.intermediate', colorClassName: 'bg-yellow-700' },
  { minimumLevel: 0, labelKey: 'skills.beginner', colorClassName: 'bg-gray-700' },
];

export const SKILLS = [
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 90,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    description: 'ES6+, Async/Await, DOM Manipulation',
  },
  {
    id: 'react',
    name: 'React',
    level: 85,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    description: 'Hooks, Context API, Component Architecture',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 75,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    description: 'Express, APIs, Server-side Development',
  },
  {
    id: 'html-css',
    name: 'HTML/CSS',
    level: 95,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    description: 'Semantic HTML, Flexbox, Grid, Animations',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 85,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    description: 'Utility-first, Responsive Design, Custom Components',
  },
  {
    id: 'git',
    name: 'Git',
    level: 80,
    iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    description: 'Version Control, Branching, Collaboration',
  },
];

export const OTHER_TECHNOLOGIES = [
  'Vite',
  'Webpack',
  'REST APIs',
  'JSON',
  'NPM',
  'Responsive Design',
  'SEO',
  'Performance Optimization',
];

export const COMING_SOON_PROJECTS = [
  {
    id: 'commerce-ui-lab',
    name: 'Commerce UI Lab',
    description: {
      es: 'Interfaz e-commerce responsive enfocada en catálogo, filtros, carrito y checkout optimizado.',
      en: 'Responsive e-commerce interface focused on catalog, filters, cart and optimized checkout.',
    },
    stack: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    id: 'analytics-dashboard',
    name: 'Analytics Dashboard',
    description: {
      es: 'Panel de métricas con tarjetas de datos, estados vacíos, tablas y visualización preparada para APIs.',
      en: 'Metrics dashboard with data cards, empty states, tables and API-ready visualization.',
    },
    stack: ['React', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'taskflow-client',
    name: 'TaskFlow Client',
    description: {
      es: 'Aplicación de productividad para gestionar tareas, prioridades y estados con una experiencia clara.',
      en: 'Productivity app to manage tasks, priorities and statuses with a clear user experience.',
    },
    stack: ['Vue', 'Pinia', 'Tailwind CSS'],
  },
];

export const CERTIFICATES = [
  {
    id: 'artificial-intelligence',
    title: 'Inteligencia Artificial',
    institution: 'Certificado de IA',
    date: '2024',
    description: 'Certificado de formación en Inteligencia Artificial',
    pdfUrl: 'https://drive.google.com/file/d/1vhTfGTQV1Wky3hArI_OoyC1WrPwW_9kW/view?usp=sharing',
    thumbnailUrl: 'https://lh3.googleusercontent.com/d/1vhTfGTQV1Wky3hArI_OoyC1WrPwW_9kW=w400',
  },
];

export const CONTACT_FORM_INITIAL_VALUES = {
  name: '',
  email: '',
  message: '',
};

export const EMAILJS_CONFIG = {
  serviceId: 'service_bolqnfg',
  templateId: 'template_j82nd7e',
  publicKey: 'df2K3M-4pDZ7fQY3R',
  recipientEmail: CONTACT_DETAILS.email,
};
