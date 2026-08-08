import { icons } from './Icons.jsx'
import { socialLinks } from '../data/content.js'

/* mailto: and same-origin files (resume.pdf) shouldn't open a new tab
   with noopener — only external http(s) links do. */
const isExternal = (href) => /^https?:\/\//.test(href)

export default function LinksRow() {
  return (
    <div className="links-row fade-up fade-up-3" id="links">
      {socialLinks.map((link) => {
        const external = isExternal(link.href)
        return (
          <a
            key={link.label}
            href={link.href}
            className="link-chip"
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
          >
            {icons[link.icon]}
            {link.label}
          </a>
        )
      })}
    </div>
  )
}
