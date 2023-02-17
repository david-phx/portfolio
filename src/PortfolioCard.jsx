function PortfolioCard({ children }) {
  return (
    <div className="border rounded-md shadowbg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  )
}

function Screenshot({ screenshot }) {
  return (
    <img className="rounded-t-md dark:saturate-50 dark:brightness-95" src={screenshot} alt="" />
  )
}

function Contents({ children }) {
  return (
    <div className="p-5">
      {children}
    </div>
  )
}

function Title({ children }) {
  return (
    <h5 className="mb-2 text-lg font-semibold tracking-tight">
      {children}
    </h5>
  )
}

function Description({ children }) {
  return (
    <p className="mb-5 font-normal text-gray-600 dark:text-gray-400">
      {children}
    </p>
  )
}

function TechBadge({ tech }) {
  return (
    <li
      key={tech}
      className="text-xs font-normal rounded-md px-3 py-1 text-sky-800 bg-sky-100 dark:text-sky-100 dark:bg-sky-900"
    >
      {tech}
    </li>
  )
}

function LinkButton({ title, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="border rounded-md font-medium text-sm text-center inline-flex items-center px-3 py-1 mr-2 text-gray-600 border-gray-200 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500"
    >
      {title}
      <svg className="w-3 h-3 ml-2 -mr-1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
        <path d="M352 0c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L370.7 96 201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L416 141.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V32c0-17.7-14.3-32-32-32H352zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
      </svg>
    </a>
  )
}

PortfolioCard.Screenshot = Screenshot;
PortfolioCard.Contents = Contents;
PortfolioCard.Title = Title;
PortfolioCard.Description = Description;
PortfolioCard.TechBadge = TechBadge;
PortfolioCard.LinkButton = LinkButton;

export default PortfolioCard
