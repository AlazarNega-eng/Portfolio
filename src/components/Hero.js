import React from "react";
import personalData from "../data/data";

const Hero = () => {
  return (
    <section id="hero" className="py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
        Hi, I'm {personalData.name}
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium mb-6 text-gray-700 dark:text-gray-300">
        {personalData.title}
      </h2>
      <a
        href="/Resume.pdf"
        download
        className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Hero;
