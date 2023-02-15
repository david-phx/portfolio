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

const navbarLinksList = navbarLinks.map(item => (
  <li>
    <NavLink
      to={item.link}
      className={({ isActive }) => isActive ? undefined : undefined}
    >
      {item.title}
    </NavLink>
  </li>
));

function Navbar() {
  return (
    <nav>
      <ul>
        {navbarLinksList}
      </ul>
    </nav>
  );
}

export default Navbar
