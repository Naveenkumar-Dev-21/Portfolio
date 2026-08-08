import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { projects } from '../data/content'

const STATUS = {
  live: 'Live',
  lab: 'Lab',
  wip: 'In development',
}

export default function ProjectsSection({ index }) {
  return (
    <section className="section" id="projects">
      <SectionHeader
        index={index}
        icon={<Icon name="code" />}
        title="Projects"
        meta={`${projects.length} entries`}
      />

      <div className="projects">
        {projects.map((p) => (
          <a
            key={p.id}
            className={`proj proj--${p.status}`}
            href={p.href}
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="proj-rail" aria-hidden="true" />

            <div className="proj-main">
              <div className="proj-top">
                <span className="proj-id">{p.id}</span>
                <span className={`proj-status proj-status--${p.status}`}>
                  <span className="proj-status-dot" aria-hidden="true" />
                  {STATUS[p.status]}
                </span>
              </div>

              <h3 className="proj-name">
                {p.name}
                <Icon name="arrow" />
              </h3>
              <p className="proj-kind">{p.kind}</p>
              <p className="proj-desc">{p.desc}</p>

              <div className="proj-tags">
                {p.tags.map((t) => (
                  <span className="proj-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
