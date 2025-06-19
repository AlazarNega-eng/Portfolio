import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50 py-4 px-4 md:py-6 md:px-8 border-b border-gray-200 dark:border-gray-700">
      {/* Mobile: ThemeToggle & Hamburger */}
      <div className="flex items-center justify-between md:hidden">
        <ThemeToggle />
        <button
          className="p-2 ml-2 rounded bg-gray-200 dark:bg-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile: Title centered below */}
      <div className="flex justify-center md:hidden mt-2">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent">
          Portfolio
        </h1>
      </div>
      {/* Desktop: Centered nav bar */}
      <div className="hidden md:flex flex-col items-center justify-center">
        <div className="flex-shrink-0 mb-2">
          <ThemeToggle />
        </div>
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent mb-2">
          Portfolio
        </h1>
        <nav>
          <ul className="flex space-x-6 text-sm sm:text-base justify-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:underline">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 md:hidden">
          <ul className="flex flex-col py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-6 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
