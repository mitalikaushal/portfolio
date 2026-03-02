import { NavLink } from 'react-router-dom'

function NavItem({ to, label, show, closeMenu }) {
  return (
    <li className={`nav-item${show ? ' show' : ''}`}>
      <NavLink
        to={to}
        end={to === '/'}
        className={({ isActive }) => isActive ? 'nav-link current' : 'nav-link'}
        onClick={closeMenu}
      >
        {label}
      </NavLink>
    </li>
  )
}

export default NavItem
