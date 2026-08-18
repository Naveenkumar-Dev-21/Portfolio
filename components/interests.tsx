'use client'

import { interests } from '@/lib/data'
import { Interest } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { Lock, Search, Eye, Shield } from 'lucide-react'

const interestIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Penetration Testing': Lock,
  'Threat Intelligence': Search,
  'Digital Forensics': Eye,
  'Incident Response': Shield,
}

export function Interests() {
  return (
    <section id="interests" className="py-section bg-surface/30" aria-labelledby="interests-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="06" title="Research Interests" subtitle="Areas of focus for ongoing study and specialization" />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {interests.map((interest: Interest, index: number) => {
            const Icon = interestIcons[interest.title] || Lock
            return (
              <article key={index} className="group bg-surface-elevated border border-border rounded-xl p-6 transition-all duration-normal hover:border-accent/30">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono text-heading-1 font-medium text-text-muted group-hover:text-accent transition-colors duration-fast">
                    {interest.number}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-fast">
                  <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-sans text-body font-medium text-text-primary mb-1">{interest.title}</h3>
                <p className="text-body-sm text-text-muted">{interest.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}