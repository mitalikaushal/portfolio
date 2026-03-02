import { useState } from 'react'
import NavItem from './NavItem'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/work', label: 'My Work' },
  { to: '/contact', label: 'How To Reach Me' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header>
      <div
        className={`menu-btn${menuOpen ? ' close' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="btn-line"></div>
        <div className="btn-line"></div>
        <div className="btn-line"></div>
      </div>

      <nav className={`menu${menuOpen ? ' show' : ''}`}>
        <div className={`menu-branding${menuOpen ? ' show' : ''}`}>
          <div className="portrait"></div>
        </div>
        <ul className={`menu-nav${menuOpen ? ' show' : ''}`}>
          {navLinks.map((link) => (
            <NavItem
              key={link.to}
              to={link.to}
              label={link.label}
              show={menuOpen}
              closeMenu={closeMenu}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
