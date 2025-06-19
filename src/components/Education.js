import React from "react";
import personalData from "../data/data";

const Education = () => {
  const { education } = personalData;

  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Education
        </h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-8 shadow-xl backdrop-blur-sm transform hover:scale-105 transition-transform duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {item.degree}
                  </h3>
                  <h4 className="text-blue-600 dark:text-blue-400 font-medium mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.years}
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-blue-600 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
