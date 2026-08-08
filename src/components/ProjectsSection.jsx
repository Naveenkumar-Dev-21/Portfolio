import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { projects } from '../data/content.js'

export default function ProjectsSection() {
  return (
    <section className="section fade-up fade-up-5" id="projects">
      <SectionHeader icon={icons.code} title="Projects" />
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.href}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">
                {project.name}
                <span className="project-id">{project.id}</span>
              </span>
              <span className="project-arrow">{icons.arrow}</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
