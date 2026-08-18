'use client'

import { ctfPlatforms } from '@/lib/data'
import { CTFPlatform } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { ExternalLink, Terminal, Award, Bug } from 'lucide-react'

const platformIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'TryHackMe': Terminal,
  'Cylab Academy': Award,
  'OverTheWire': Bug,
}

export function Training() {
  return (
    <section id="research" className="py-section" aria-labelledby="training-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="05" title="Security Practice" subtitle="Continuous learning through hands-on platforms and challenges" />
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {ctfPlatforms.map((platform: CTFPlatform, index: number) => {
            const Icon = platformIcons[platform.name] || Terminal
            return (
              <article key={index} className="group bg-surface-elevated border border-border rounded-xl p-6 transition-all duration-normal hover:border-accent/30 hover:shadow-card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-sans text-heading-3 text-text-primary">{platform.name}</h3>
                    <p className="font-mono text-caption text-text-muted">{platform.handle}</p>
                  </div>
                </div>
                
                <a
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-body-sm font-medium text-text-secondary hover:text-accent transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-3 py-2 border border-border hover:border-accent/30"
                  aria-label={`View ${platform.name} profile`}
                >
                  Profile
                  <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
        
        <div className="mt-12 p-6 bg-surface-elevated border border-border rounded-xl">
          <h3 className="font-sans text-heading-3 text-text-primary mb-4">Note on Rankings</h3>
          <p className="text-body text-text-secondary">
            Live platform statistics (global rank, rooms completed, badges, streaks) are not displayed as they require authenticated API access. 
            The profiles above link directly to each platform where current progress can be verified.
          </p>
        </div>
      </div>
    </section>
  )
}