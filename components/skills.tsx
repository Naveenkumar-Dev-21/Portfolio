'use client'

import { skillGroups } from '@/lib/data'
import { SkillGroup } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { SkillIcon } from './skill-icon'

export function Skills() {
  return (
    <section id="skills" className="py-section bg-surface/30" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="04" title="Technical Stack" subtitle="Core competencies across security, development, and infrastructure" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group: SkillGroup, groupIndex: number) => (
            <div key={groupIndex} className="bg-surface-elevated border border-border rounded-xl p-6">
              <h3 className="font-sans text-heading-3 text-text-primary mb-4 flex items-center gap-2">
                <span className="font-mono text-caption text-accent tracking-widest uppercase">{groupIndex + 1}</span>
                {group.label}
              </h3>
              <ul className="space-y-1.5">
                {group.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-body text-text-secondary">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-surface border border-border/60 flex-shrink-0">
                      <SkillIcon name={item} className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}