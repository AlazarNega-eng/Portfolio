import React from "react";
import personalData from "../data/data";

const Experience = () => {
  const { experience } = personalData;
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Experience
        </h2>
        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 shadow-xl backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {exp.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-1">
                {exp.company} | {exp.years}
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                {exp.description}
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
