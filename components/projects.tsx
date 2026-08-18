'use client'

import { projects } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { ProjectCard } from './project-card'
import { Project } from '@/lib/types'

export function Projects() {
  return (
    <section id="projects" className="py-section" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="03" title="Selected Projects" subtitle="Production applications, security labs, and ongoing research" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project as Project} />
          ))}
        </div>
      </div>
    </section>
  )
}