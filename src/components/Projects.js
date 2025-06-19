import React from "react";
import personalData from "../data/data";

const Projects = () => {
  const { projects } = personalData;
  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 shadow-xl backdrop-blur-sm flex flex-col"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4 object-cover h-40 w-full"
              />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-200 dark:bg-blue-700 text-xs rounded-full text-blue-800 dark:text-blue-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex space-x-4">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
