'use client'

import { education } from '@/lib/data'
import { EducationItem } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { GraduationCap, MapPin, Calendar } from 'lucide-react'

export function Education() {
  return (
    <section id="education" className="py-section bg-surface/30" aria-labelledby="education-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="08" title="Education" subtitle="Academic background in Information Technology" />
        
        <div className="max-w-2xl mt-12">
          <ol className="relative">
            <li className="relative pl-8 pb-12 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-0.5 before:bg-border last:before:hidden">
              {education.map((edu: EducationItem, index: number) => (
                <article key={index} className="relative bg-surface-elevated border border-border rounded-xl p-6">
                  <div className="absolute -left-8 top-6 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center border border-border z-10">
                    <GraduationCap className="w-5 h-5 text-accent" aria-hidden="true" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="font-sans text-heading-3 text-text-primary">{edu.institution}</h3>
                    <p className="text-body text-text-secondary">{edu.degree}</p>
                    
                    <div className="flex flex-wrap items-center gap-4 text-body-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" aria-hidden="true" />
                        {edu.period}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" aria-hidden="true" />
                          {edu.location}
                        </span>
                      )}
                      <span className="font-mono font-medium text-text-primary">{edu.detail}</span>
                    </div>
                  </div>
                </article>
              ))}
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}