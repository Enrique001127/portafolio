import React from 'react';
import { useApp } from '../contexts/AppContext';

const Skills = () => {
  const { t } = useApp();

  const skills = [
    { 
      name: 'JavaScript', 
      level: 90, 
      icon: '🟨',
      description: 'ES6+, Async/Await, DOM Manipulation'
    },
    { 
      name: 'React', 
      level: 85, 
      icon: '⚛️',
      description: 'Hooks, Context API, Component Architecture'
    },
    { 
      name: 'TypeScript', 
      level: 80, 
      icon: '🔷',
      description: 'Type Safety, Interfaces, Generics'
    },
    { 
      name: 'Node.js', 
      level: 75, 
      icon: '🟢',
      description: 'Express, APIs, Server-side Development'
    },
    { 
      name: 'HTML/CSS', 
      level: 95, 
      icon: '🎨',
      description: 'Semantic HTML, Flexbox, Grid, Animations'
    },
    { 
      name: 'Tailwind CSS', 
      level: 85, 
      icon: '💨',
      description: 'Utility-first, Responsive Design, Custom Components'
    },
    { 
      name: 'Git', 
      level: 80, 
      icon: '📚',
      description: 'Version Control, Branching, Collaboration'
    },
  ];

  const getSkillColor = (level: number) => {
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

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">
                    {skill.icon}
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
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white ml-4 ${getSkillColor(skill.level)}`}>
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Avanzado' : skill.level >= 70 ? 'Intermedio' : 'Principiante'}
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                <div 
                  className={`h-3 rounded-full transition-all duration-1000 ease-out ${getSkillColor(skill.level)}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Otras Tecnologías
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