import { personalInfo, socialLinks, youtube, heroStats } from '../data/content'
import Icon from './Icons'

/* Sticky identity rail. Collapses above the content on narrow screens. */
export default function Sidebar() {
  const primary = socialLinks.filter((l) => l.primary)
  const secondary = socialLinks.filter((l) => !l.primary)

  return (
    <aside className="rail">
      <div className="rail-card">
        <div className="rail-avatar">
          <img src={personalInfo.avatar} alt={personalInfo.name} width="112" height="112" />
          <span className="rail-pulse" aria-hidden="true" />
        </div>

        <h1 className="rail-name">{personalInfo.name}</h1>
        <p className="rail-role">{personalInfo.role}</p>

        <div className="rail-status">
          <span className="rail-status-dot" aria-hidden="true" />
          Available for internships
        </div>

        <dl className="rail-meta">
          <div>
            <dt>Location</dt>
            <dd>{personalInfo.location}</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Offensive Security</dd>
          </div>
        </dl>

        <div className="rail-stats">
          {heroStats.map((s) => (
            <div className="rail-stat" key={s.label}>
              <span className="rail-stat-value">{s.value}</span>
              <span className="rail-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="rail-links">
          {primary.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rail-link"
              {...(link.href.startsWith('mailto:')
                ? {}
                : { target: '_blank', rel: 'noreferrer noopener' })}
            >
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>

        <div className="rail-links rail-links--sub">
          {secondary.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="rail-link rail-link--ghost"
              target="_blank"
              rel="noreferrer noopener"
            >
              <Icon name={link.icon} />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* YouTube kept deliberately separate from the link row above. */}
      <a
        className="yt-card"
        href={youtube.href}
        target="_blank"
        rel="noreferrer noopener"
      >
        <span className="yt-badge">
          <Icon name="youtube" />
        </span>
        <span className="yt-body">
          <span className="yt-kicker">YouTube Channel</span>
          <span className="yt-name">{youtube.name}</span>
          <span className="yt-tagline">{youtube.tagline}</span>
        </span>
        <span className="yt-go" aria-hidden="true">
          <Icon name="arrow" />
        </span>
      </a>
    </aside>
  )
}
