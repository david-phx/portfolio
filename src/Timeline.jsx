function Timeline({ children }) {
  return (
    <ol className="relative border-l border-gray-300 dark:border-gray-600">
      {children}
    </ol>
  )
}

function Item({ children }) {
  return (
    <li className="mb-5 ml-5">
      {children}
    </li>
  )
}

function Point() {
  return (
    <div className="absolute w-3 h-3 mt-1.5 -left-1.5 border rounded-full bg-gray-300 border-white dark:bg-gray-600 dark:border-gray-800" />
  )
}

function Time({ children }) {
  return (
    <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
      {children}
    </time>
  )
}

function Contents({ children }) {
  return (
    <div className="py-2">
      {children}
    </div>
  )
}

Timeline.Item = Item;
Timeline.Point = Point;
Timeline.Time = Time;
Timeline.Contents = Contents;

export default Timeline
