import React from "react";
import personalData from "../data/data";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-6 sm:p-8 shadow-xl backdrop-blur-sm">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            I possess a strong passion for the field of user interface
            development, with a particular focus on crafting interfaces that are
            both aesthetically pleasing and highly functional for the end-user.
            My academic pursuits are centered at AASTU, where I am currently
            studying within the Department of Computer Engineering. Alongside my
            studies, I actively engage in various projects that allow me to
            apply and expand my knowledge in practical settings. These projects
            provide valuable opportunities to hone my skills in building and
            refining user interfaces, ensuring they meet the demands of
            real-world applications. My dedication to this area stems from a
            desire to create positive and intuitive experiences for users
            interacting with technology. I believe that well-designed interfaces
            play a crucial role in bridging the gap between complex systems and
            the people who use them, and I am committed to contributing to this
            field through my studies and project work at AASTU.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
