import { useRef, useState, type KeyboardEvent } from 'react'
import './Header.css'

const navItems = [
  { label: 'Ny besökare', href: '#ny-besokare' },
  { label: 'Gudstjänster', href: '#gudstjanster' },
  { label: 'Om oss', href: 'https://www.pionjarkyrkanhelsingborg.com/om-oss', external: true },
  { label: 'Kalender', href: 'https://www.pionjarkyrkanhelsingborg.com/kalender', external: true },
  { label: 'Givande', href: '#givande' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu()
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="pk-header" id="top" onKeyDown={handleKeyDown}>
      <a className="logo-link" href="#top" aria-label="Pionjärkyrkan Helsingborg, till startsidan">
        <img src="/images/logo/pk-logo.png" className="logo" alt="Pionjärkyrkan Helsingborg" />
      </a>
      <button
        ref={menuButtonRef}
        className="menu-toggle"
        type="button"
        aria-controls="primary-navigation"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        title={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span className="menu-toggle__icon" aria-hidden="true" />
      </button>
      <nav
        className={`header-menu${menuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Huvudnavigation"
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a className="header-cta" href="#kontakt" onClick={closeMenu}>
        Kontakt <span aria-hidden="true">↗</span>
      </a>
    </header>
  )
}

export default Header
