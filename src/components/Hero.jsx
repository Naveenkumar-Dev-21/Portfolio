import { icons } from './Icons.jsx'
import { personalInfo } from '../data/content.js'

export default function Hero() {
  return (
    <section className="hero fade-up fade-up-2" id="hero">
      <div className="hero-avatar-wrapper">
        <img
          className="hero-avatar"
          src={personalInfo.avatar}
          alt={`${personalInfo.name}'s photo`}
          width="130"
          height="130"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <span className="hero-badge">🛡️</span>
      </div>
      <div className="hero-info">
        <h1 className="hero-name">{personalInfo.name}</h1>
        <p className="hero-role">
          <span className="hero-role-icon">{icons.shield}</span>
          {personalInfo.role}
        </p>
        <div className="hero-meta">
          <span className="hero-meta-item">{icons.mapPin} {personalInfo.location}</span>
        </div>
      </div>
    </section>
  )
}
