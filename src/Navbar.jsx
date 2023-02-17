import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const navbarLinks = [
  {
    title: "Portfolio",
    link: ""
  },
  {
    title: "Resume",
    link: "resume"
  },
  {
    title: "Contact",
    link: "contact"
  }
];

const navbarLinkClass = {
  common: "pb-4"
}
navbarLinkClass.active = `${navbarLinkClass.common} text-sky-700 border-b-4 border-b-sky-700 dark:text-sky-200 dark:border-b-sky-200`;
navbarLinkClass.inactive = `${navbarLinkClass.common} hover:text-sky-700 hover:border-b-4 hover:border-b-sky-700 dark:hover:text-sky-200 dark:hover:border-b-sky-200`;

const navbarLinksList = navbarLinks.map(item => (
  <li key={item.link}>
    <NavLink
      to={item.link}
      className={({ isActive }) => isActive ? navbarLinkClass.active : navbarLinkClass.inactive}
    >
      {item.title}
    </NavLink>
  </li>
));

function Navbar() {

  const [darkMode, setDarkMode] = useState(localStorage.getItem('color-theme') === 'dark'
    || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

  function toggleDarkMode() {
    if (darkMode) {
      localStorage.removeItem('color-theme');
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      localStorage.setItem('color-theme', 'dark');
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    }
  }

  return (
    <nav className="flex items-center justify-between bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md shadow px-7 py-4">
      <ul className="flex space-x-7 font-medium">
        {navbarLinksList}
      </ul>

      <button onClick={toggleDarkMode} type="button" className="text-gray-700 dark:text-gray-300">
        <svg
          className={`w-7 h-7 ${darkMode ? "hidden" : ""}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <svg
          className={`w-7 h-7 ${darkMode ? "" : "hidden"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd" />
        </svg>
      </button>
    </nav>
  );
}

export default Navbar
