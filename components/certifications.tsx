'use client'

import { certifications } from '@/lib/data'
import { Certification } from '@/lib/types'
import { SectionHeading } from './section-heading'
import { Award, ExternalLink, CheckCircle } from 'lucide-react'

export function Certifications() {
  return (
    <section id="certifications" className="py-section" aria-labelledby="certifications-heading">
      <div className="max-w-7xl mx-auto px-container">
        <SectionHeading number="07" title="Certifications" subtitle="Verified credentials in cloud, development, and security" />
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {certifications.map((cert: Certification, index: number) => (
            <article key={index} className="group bg-surface-elevated border border-border rounded-xl p-6 flex items-start gap-4 transition-all duration-normal hover:border-accent/30">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-accent" aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-body font-medium text-text-primary group-hover:text-accent transition-colors duration-fast">
                  {cert.name}
                </h3>
                <p className="text-body-sm text-text-secondary mt-1">{cert.issuer}</p>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-caption font-medium text-accent">
                    <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
                    Verified Credential
                  </span>
                </div>
              </div>
              <a
                href="#"
                className="text-text-muted hover:text-accent transition-colors duration-fast p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
                aria-label={`Verify ${cert.name} certification`}
              >
                <ExternalLink className="w-5 h-5" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}