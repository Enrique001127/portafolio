import { ExternalLink, Github, Hammer } from 'lucide-react';
import { COMING_SOON_PROJECTS } from '../data/portfolio';
import { useApp } from '../hooks/useApp';

const Projects = () => {
  const { language, translate } = useApp();

  return (
    <section id="projects" aria-labelledby="projects-title" className="scroll-mt-20 bg-white py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          <span className="mb-4 inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            {translate('projects.status')}
          </span>
          <h2 id="projects-title" className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            {translate('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
            {translate('projects.subtitle')}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {COMING_SOON_PROJECTS.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl motion-safe:transition-transform motion-safe:duration-300 motion-safe:hover:-translate-y-1 dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-blue-200/50 dark:bg-blue-600/20" aria-hidden="true" />
              <div className="relative flex h-full flex-col">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
                    <Hammer className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <span className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-700 dark:border-blue-800 dark:bg-gray-900 dark:text-blue-300">
                    {translate('projects.status')}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {project.name}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {project.description[language.code] || project.description.es}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm ring-1 ring-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:ring-gray-700"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <span className="group/tooltip relative" title={translate('projects.tooltip')}>
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500"
                    >
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      {translate('projects.demo')}
                    </button>
                    <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover/tooltip:opacity-100">
                      {translate('projects.tooltip')}
                    </span>
                  </span>
                  <span className="group/tooltip relative" title={translate('projects.tooltip')}>
                    <button
                      type="button"
                      disabled
                      className="inline-flex min-h-11 w-full cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-500"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                      {translate('projects.github')}
                    </button>
                    <span className="pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover/tooltip:opacity-100">
                      {translate('projects.tooltip')}
                    </span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
          {translate('projects.note')}
        </p>
      </div>
    </section>
  );
};

export default Projects;
