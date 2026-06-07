import { OTHER_TECHNOLOGIES, SKILL_LEVELS, SKILLS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const getSkillLevelMetadata = (level) => {
  return SKILL_LEVELS.find(({ minimumLevel }) => level >= minimumLevel) || SKILL_LEVELS[SKILL_LEVELS.length - 1];
};

const Skills = () => {
  const { translate } = useApp();

  return (
    <section id="skills" aria-labelledby="skills-title" className="scroll-mt-20 py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 id="skills-title" className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {translate('skills.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {translate('skills.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((skill) => {
            const skillLevel = getSkillLevelMetadata(skill.level);

            return (
              <div
                key={skill.id}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:scale-105 dark:bg-gray-900"
              >
                <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <img
                        src={skill.iconUrl}
                        alt={`Logo de ${skill.name}`}
                        width="40"
                        height="40"
                        loading="lazy"
                        decoding="async"
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
                  <div className="shrink-0 text-left sm:text-right">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {skill.level}%
                    </span>
                    <div className={`block mt-1 px-3 py-1 rounded-full text-xs font-medium text-white ${skillLevel.colorClassName}`}>
                      {translate(skillLevel.labelKey)}
                    </div>
                  </div>
                </div>

                <div
                  className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3"
                  role="progressbar"
                  aria-label={`${skill.name}: ${skill.level}%`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={skill.level}
                  aria-valuetext={`${skill.level}% - ${translate(skillLevel.labelKey)}`}
                >
                  <div
                    className={`h-3 rounded-full transition-[width] duration-1000 ease-out ${skillLevel.colorClassName}`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            {translate('skills.otherTech')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {OTHER_TECHNOLOGIES.map((tech) => (
              <span
                key={tech}
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
