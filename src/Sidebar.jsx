import skills from './skills.json'

function Sidebar() {
  return (
    <div className="space-y-1 lg:space-y-5">
      <Profile />
      <Skills />
    </div>
  );
}

function Profile() {
  return (
    <div className="bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700 rounded-md shadow overflow-hidden h-max">
      <div className="h-32 bg-cover bg-[url('/images/cover-light.jpg')] dark:bg-[url('/images/cover-dark.jpg')]" />
      <div className="relative pt-14 p-5">
        <img className="dark:saturate-50 dark:brightness-90 w-20 h-20 border border-white dark:border-gray-600 rounded-md shadow absolute -top-10 left-5" src="images/profile.jpg" />
        <div className="text-xs font-medium border rounded-xl absolute top-4 right-4 px-3 py-1 text-gray-100 bg-sky-800
        dark:text-gray-200 dark:bg-sky-900 dark:border-gray-400">
          OPEN TO WORK
        </div>
        <div className="text-2xl font-semibold mb-1">David Asatrian</div>
        <div className="text-gray-500 dark:text-gray-400 mb-5">Web Developer</div>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-6">
          <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill="currentColor">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
          </svg>
          Phoenix, Arizona, USA
        </div>
        <div className="mb-6 flex gap-3">
          <a href="https://www.linkedin.com/in/davidasatrian/" target="_blank" className="hover:text-sky-700 dark:hover:text-sky-200">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>
          <a href="https://github.com/david-phx" target="_blank" className="hover:text-sky-700 dark:hover:text-sky-200">
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </div>
        <ResumeDownloadButton />
      </div>
    </div>
  )
}

function ResumeDownloadButton() {
  return (
    <a href="David-Asatrian-Web-Developer-Resume.pdf" className="border rounded-md font-medium text-sm text-center inline-flex items-center px-5 py-2.5 text-gray-600 border-gray-200 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500">
      <svg className="w-6 h-6 -ml-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
      </svg>
      Download Resume
    </a>
  )
}

function Skills() {
  return (
    <div className="p-5 rounded-md shadow overflow-hidden h-max bg-white border border-gray-100 dark:bg-gray-800 dark:border-gray-700">
      <h2 className="text-xl font-semibold">Skills</h2>
      <ul className="flex flex-wrap gap-1.5 lg:gap-2 mt-4">
        {skills.map(skill => (
          <li
            key={skill}
            className="w-max whitespace-nowrap shrink-0 text-sm font-normal rounded-md px-2 lg:px-3 py-1 text-sky-800 bg-sky-100 dark:text-sky-100 dark:bg-sky-900"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
