import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <div className="max-w-screen-lg mx-auto grid gap-1 lg:gap-4 lg:grid-cols-3 p-1 lg:py-5">
      <div className="grid gap-1 lg:gap-4">
        <Sidebar />
      </div>
      <div className="lg:col-span-2 space-y-1 lg:space-y-4">
        <Navbar />
        <div className="block bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-md shadow px-7 py-7">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout
