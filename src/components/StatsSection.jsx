import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { ctfStats, ctfPlatforms } from '../data/stats.js'

export default function StatsSection() {
  return (
    <section className="section fade-up fade-up-5" id="stats">
      <SectionHeader icon={icons.flag} title="CTF & Training" />
      <div className="stats-grid">
        {ctfStats.map((stat) => (
          <div key={stat.label} className={`stat-card ${stat.accent}`}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-note">{stat.note}</span>
          </div>
        ))}
      </div>
      <div className="platform-row">
        {ctfPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.href}
            className="platform-chip"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="platform-name">{platform.name}</span>
            <span className="platform-handle">{platform.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
