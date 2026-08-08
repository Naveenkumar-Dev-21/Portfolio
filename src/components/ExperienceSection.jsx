import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { experience } from '../data/content'

/* The first entry is the security role — it gets the full
   finding-report treatment. The rest render as compact cards. */
export default function ExperienceSection({ index }) {
  const [lead, ...rest] = experience

  return (
    <section className="section" id="experience">
      <SectionHeader index={index} icon={<Icon name="crosshair" />} title="Experience" />

      <article className="finding">
        <header className="finding-head">
          <div className="finding-titles">
            <h3 className="finding-role">{lead.subtitle}</h3>
            <p className="finding-org">{lead.title}</p>
          </div>
          <span className="finding-scope">
            <Icon name="lock" />
            {lead.date}
          </span>
        </header>

        {/* Severity strip — the headline result of the engagement. */}
        <div className="sev-strip">
          <div className="sev-cell sev-crit">
            <span className="sev-value">9.8</span>
            <span className="sev-label">Peak CVSS</span>
            <span className="sev-tag">Critical</span>
          </div>
          <div className="sev-cell">
            <span className="sev-value">9+</span>
            <span className="sev-label">Vulns reported</span>
            <span className="sev-tag">Confirmed</span>
          </div>
          <div className="sev-cell">
            <span className="sev-value">100%</span>
            <span className="sev-label">Disclosed &amp; retested</span>
            <span className="sev-tag">Remediated</span>
          </div>
        </div>

        <ul className="finding-list">
          {lead.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <footer className="finding-foot">
          <Icon name="shield" />
          All testing performed under written authorization from the institution.
        </footer>
      </article>

      <div className="role-grid">
        {rest.map((role) => (
          <div className="role-card" key={role.title + role.subtitle}>
            <div className="role-top">
              <span className="role-title">{role.subtitle}</span>
              <span className="role-date">{role.date}</span>
            </div>
            <p className="role-org">{role.title}</p>
            <p className="role-desc">{role.highlights[0]}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
