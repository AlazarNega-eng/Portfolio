import React from "react";
import personalData from "../data/data";

const Skills = () => {
  const { skills } = personalData;

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const getLevelColor = (level) => {
    switch (level.toLowerCase()) {
      case "advanced":
        return "bg-green-500";
      case "intermediate":
        return "bg-blue-500";
      case "beginner":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Object.entries(skillsByCategory).map(
            ([category, categorySkills]) => (
              <div
                key={category}
                className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 shadow-xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-200"
              >
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {category}
                </h3>
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm sm:text-base">
                        {skill.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${getLevelColor(
                            skill.level
                          )}`}
                        ></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
