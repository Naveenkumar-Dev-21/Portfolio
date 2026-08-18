'use client'

import { Project } from '@/lib/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project
}

const statusStyles: Record<Project['status'], string> = {
  live: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  lab: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  wip: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

const statusLabels: Record<Project['status'], string> = {
  live: 'LIVE',
  lab: 'LAB',
  wip: 'IN DEVELOPMENT',
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-surface-elevated border border-border rounded-xl p-6 transition-all duration-normal hover:border-accent/30 hover:shadow-card-hover">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <span className={`font-mono text-caption font-medium px-2.5 py-1 rounded border ${statusStyles[project.status]}`}>
          {statusLabels[project.status]}
        </span>
        <span className="font-mono text-caption text-text-muted">{project.id}</span>
        <span className="text-caption text-text-muted tracking-wide uppercase">{project.kind}</span>
      </div>
      
      <h3 className="font-sans text-heading-3 text-text-primary mb-2 group-hover:text-accent transition-colors duration-fast">
        {project.name}
      </h3>
      
      <p className="text-body text-text-secondary mb-4 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag, index) => (
          <span key={index} className="font-mono text-caption text-text-muted bg-surface border border-border/50 px-2.5 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <span className="font-mono text-caption text-text-muted">{project.metric}</span>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-body-sm font-medium text-text-secondary hover:text-accent transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
          aria-label={`View ${project.name} project`}
        >
          <Github className="w-4 h-4" aria-hidden="true" />
          <span>Code</span>
          <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}