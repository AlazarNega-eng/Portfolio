import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-200">
      <ThemeToggle />
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <main className="pt-0">
          <Hero />
          <SocialLinks />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Achievements />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
