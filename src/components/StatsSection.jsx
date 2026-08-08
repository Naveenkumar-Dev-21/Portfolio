import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { ctfStats, ctfPlatforms } from '../data/stats'

export default function StatsSection({ index }) {
  return (
    <section className="section" id="training">
      <SectionHeader index={index} icon={<Icon name="flag" />} title="CTF & Training" />
      <div className="stats-grid">
        {ctfStats.map((stat) => (
          <div className={`stat-card ${stat.accent}`} key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-note">{stat.note}</span>
          </div>
        ))}
      </div>
      <div className="platform-row">
        {ctfPlatforms.map((p) => (
          <a
            className="platform-chip"
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="platform-name">{p.name}</span>
            <span className="platform-handle">{p.handle}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
