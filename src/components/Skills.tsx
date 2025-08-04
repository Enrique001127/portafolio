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
    if (level >= 90) return 'from-green-400 to-green-600';
    if (level >= 80) return 'from-blue-400 to-blue-600';
    if (level >= 70) return 'from-yellow-400 to-yellow-600';
    return 'from-gray-400 to-gray-600';
  };

  const getSkillRing = (level: number) => {
    if (level >= 90) return 'ring-green-200 dark:ring-green-800';
    if (level >= 80) return 'ring-blue-200 dark:ring-blue-800';
    if (level >= 70) return 'ring-yellow-200 dark:ring-yellow-800';
    return 'ring-gray-200 dark:ring-gray-800';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className={`group relative bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ring-4 ${getSkillRing(skill.level)}`}
            >
              {/* Skill Icon and Name */}
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Circular Progress */}
              <div className="relative flex items-center justify-center mb-4">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200 dark:text-gray-700"
                  />
                  {/* Progress circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="url(#gradient-${index})"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" className={`stop-color-${getSkillColor(skill.level).split(' ')[0].replace('from-', '')}`} />
                      <stop offset="100%" className={`stop-color-${getSkillColor(skill.level).split(' ')[1].replace('to-', '')}`} />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Percentage in center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Skill Level Badge */}
              <div className="text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getSkillColor(skill.level)} text-white shadow-lg`}>
                  {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
                </span>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
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

      <style jsx>{`
        .stop-color-green-400 { stop-color: #4ade80; }
        .stop-color-green-600 { stop-color: #16a34a; }
        .stop-color-blue-400 { stop-color: #60a5fa; }
        .stop-color-blue-600 { stop-color: #2563eb; }
        .stop-color-yellow-400 { stop-color: #facc15; }
        .stop-color-yellow-600 { stop-color: #ca8a04; }
        .stop-color-gray-400 { stop-color: #9ca3af; }
        .stop-color-gray-600 { stop-color: #4b5563; }
      `}</style>
    </section>
  );
};

export default Skills;