import { useEffect, useState } from 'react'
import { navSections } from '../data/content'
import { icons } from './icons'

export default function CyberNav({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`cyber-nav${scrolled ? ' cyber-nav--scrolled' : ''}`}>
        <button
          type="button"
          className="nav-toggle"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? icons.close : icons.menu}
        </button>

        <div className="nav-brand" onClick={() => scrollTo('hero')} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollTo('hero')}>
          <span className="nav-brand-icon">{icons.shield}</span>
          <span className="nav-brand-text">NV<span className="nav-brand-accent">.SEC</span></span>
        </div>

        <ul className="nav-links">
          {navSections.map(({ id, label }, i) => (
            <li key={id}>
              <button
                type="button"
                className={`nav-link${activeSection === id ? ' nav-link--active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                <span className="nav-link-index">{String(i + 1).padStart(2, '0')}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className={`nav-overlay${menuOpen ? ' nav-overlay--open' : ''}`} onClick={() => setMenuOpen(false)} aria-hidden="true" />

      <aside className={`nav-mobile${menuOpen ? ' nav-mobile--open' : ''}`}>
        <ul className="nav-mobile-links">
          {navSections.map(({ id, label }, i) => (
            <li key={id} style={{ animationDelay: `${i * 0.06}s` }}>
              <button type="button" className="nav-mobile-link" onClick={() => scrollTo(id)}>
                <span>{String(i + 1).padStart(2, '0')}</span>
                {label}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}
