'use client'

import { experience, leadership } from '@/lib/data'
import { ExperienceItem, LeadershipItem } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { Shield, Award } from 'lucide-react'

export function Experience() {
  return (
    <section id="experience" className="py-section" aria-labelledby="experience-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="02" title="Experience" />
        
        <div className="space-y-12">
          {experience.map((exp: ExperienceItem) => (
            <article key={exp.id} className="bg-surface-elevated border border-border rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-sans text-heading-2 text-text-primary">{exp.title}</h3>
                  <p className="mt-1 text-body text-text-secondary">{exp.organization}</p>
                  <p className="text-body-sm text-text-muted">{exp.location}</p>
                </div>
                <div className="flex flex-col items-end gap-1 text-right">
                  <span className="font-mono text-caption font-medium text-accent border border-accent/30 px-3 py-1 rounded-md">
                    {exp.period}
                  </span>
                  <span className="font-mono text-caption font-medium text-text-muted border border-border px-3 py-1 rounded-md">
                    AUTHORIZED INTERNAL TESTING
                  </span>
                </div>
              </div>
              
              {exp.authorization && (
                <p className="text-body-sm text-text-muted mb-6 italic">{exp.authorization}</p>
              )}
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-surface/50 rounded-lg border border-border/50">
                {exp.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="font-sans text-heading-1 font-medium text-text-primary">{metric.value}</div>
                    <div className="text-caption text-text-muted tracking-wide uppercase">{metric.label}</div>
                  </div>
                ))}
              </div>
              
              <ul className="space-y-3">
                {exp.highlights.map((highlight, index) => (
                  <li key={index} className="flex gap-3 text-body text-text-secondary">
                    <Shield className="w-5 h-5 text-accent/60 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          
          <div className="pt-8 border-t border-border">
            <SectionHeading number="02" title="Leadership" subtitle="Student chapter leadership at Kongu Engineering College" />
            
            <div className="space-y-6 mt-8">
              {leadership.map((role: LeadershipItem, index: number) => (
                <div key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 bg-surface-elevated border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-sans text-body font-medium text-text-primary">{role.role}</h4>
                      <p className="text-body-sm text-text-secondary">{role.organization}</p>
                    </div>
                  </div>
                  <time className="font-mono text-caption text-text-muted whitespace-nowrap">{role.period}</time>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}