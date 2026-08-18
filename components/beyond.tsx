'use client'

import { aboutMe } from '@/lib/data'
import { SectionHeading } from './section-heading'
import { PenTool, BookOpen, Zap } from 'lucide-react'

export function Beyond() {
  return (
    <section id="beyond" className="py-section" aria-labelledby="beyond-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="09" title="Beyond the Terminal" subtitle="Life outside of security research" />
        
        <div className="max-w-3xl mt-12">
          <div className="bg-surface-elevated border border-border rounded-xl p-8 md:p-12">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <PenTool className="w-7 h-7 text-accent" aria-hidden="true" />
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-body-lg text-text-secondary leading-relaxed mb-6">
                  {aboutMe}
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-1.5 font-mono text-caption text-text-muted bg-surface border border-border/50 px-3 py-1.5 rounded">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    Creative Writing
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-caption text-text-muted bg-surface border border-border/50 px-3 py-1.5 rounded">
                    <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
                    Mythology
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-caption text-text-muted bg-surface border border-border/50 px-3 py-1.5 rounded">
                    <Zap className="w-3.5 h-3.5" aria-hidden="true" />
                    Twin Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}