import React from "react";
import personalData from "../data/data";

const SocialLinks = () => {
  const { socialLinks } = personalData;

  return (
    <section className="py-8 sm:py-12">
      <div className="flex justify-center space-x-4 sm:space-x-6">
        {socialLinks.linkedin && (
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
            aria-label="LinkedIn Profile"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <img
                src="/images/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              />
            </div>
          </a>
        )}
        {socialLinks.github && (
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-110 transition-transform duration-200"
            aria-label="GitHub Profile"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <img
                src="/images/github.svg"
                alt="GitHub"
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800 dark:text-white"
              />
            </div>
          </a>
        )}
        {socialLinks.email && (
          <a
            href={`mailto:${socialLinks.email}`}
            className="transform hover:scale-110 transition-transform duration-200"
            aria-label="Send Email"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
              <img
                src="/images/email.svg"
                alt="Email"
                className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              />
            </div>
          </a>
        )}
      </div>
    </section>
  );
};

export default SocialLinks;
