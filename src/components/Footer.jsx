import { personalInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span className="footer-accent">{personalInfo.name}</span>
        <span className="footer-sep">·</span>
        <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
      </p>
      <p className="footer-sub">Built with React &amp; Vite</p>
    </footer>
  )
}
