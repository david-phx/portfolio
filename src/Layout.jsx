import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

function Layout() {
  return (
    <>
      <Sidebar />
      <hr />
      <Navbar />
      <hr />
      <Outlet />
    </>
  );
}

export default Layout
