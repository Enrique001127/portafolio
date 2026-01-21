import { useApp } from '../contexts/AppContext';

const Skills = () => {
  const { t } = useApp();

  const skills = [
    {
      name: 'JavaScript',
      level: 90,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      description: 'ES6+, Async/Await, DOM Manipulation'
    },
    {
      name: 'React',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Hooks, Context API, Component Architecture'
    },
    {
      name: 'Node.js',
      level: 75,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      description: 'Express, APIs, Server-side Development'
    },
    {
      name: 'HTML/CSS',
      level: 95,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      description: 'Semantic HTML, Flexbox, Grid, Animations'
    },
    {
      name: 'Tailwind CSS',
      level: 85,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
      description: 'Utility-first, Responsive Design, Custom Components'
    },
    {
      name: 'Git',
      level: 80,
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      description: 'Version Control, Branching, Collaboration'
    },
  ];

  const getSkillColor = (level) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-gray-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={`${skill.name} icon`}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {skill.description}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                  <div className={`block mt-1 px-3 py-1 rounded-full text-xs font-medium text-white ${getSkillColor(skill.level)}`}>
                    {skill.level >= 90 ? t('skills.expert') : skill.level >= 80 ? t('skills.advanced') : skill.level >= 70 ? t('skills.intermediate') : t('skills.beginner')}
                  </div>
                </div>
              </div>

              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {t('skills.otherTech')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Vite', 'Webpack', 'REST APIs', 'JSON', 'NPM', 'Responsive Design', 'SEO', 'Performance Optimization'].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
