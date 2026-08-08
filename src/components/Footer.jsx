import { personalInfo } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="footer fade-up fade-up-8" id="footer">
      <p className="footer-line">
        © {new Date().getFullYear()} <span className="footer-accent">{personalInfo.name}</span> · All systems secured
      </p>
      <p>Built with React &amp; Vite</p>
    </footer>
  )
}
