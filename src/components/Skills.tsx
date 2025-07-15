import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'JavaScript', level: 90, color: 'bg-yellow-500' },
    { name: 'React', level: 85, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 80, color: 'bg-blue-600' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' },
    { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 85, color: 'bg-cyan-500' },
    { name: 'Git', level: 80, color: 'bg-red-500' },
    { name: 'MongoDB', level: 70, color: 'bg-green-600' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones web modernas
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                <span className="text-sm text-gray-600">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;