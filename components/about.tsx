'use client'

import { personalInfo } from '@/lib/data'
import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" className="py-section" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeading number="01" title="Profile" />
            
            <div className="prose prose-invert max-w-none mt-8">
              <p className="font-sans text-heading-2 text-text-primary mb-6 leading-tight">
                I build, break, and secure software.
              </p>
              
              <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
                {personalInfo.name} is an Information Technology student and penetration tester who helped establish the IT Penetration Testing Team at Kongu Engineering College.
              </p>
              
              <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
                He has reported 9+ critical vulnerabilities, including findings rated up to CVSS 9.8, communicated findings to responsible teams, assisted with remediation, and validated fixes.
              </p>
              
              <p className="text-body-lg text-text-secondary leading-relaxed">
                He also builds production software and maintains self-hosted security infrastructure including a Wazuh blue-team lab.
              </p>
            </div>
          </div>
          
          <div className="bg-surface-elevated border border-border rounded-xl p-6 md:p-8 sticky top-24 self-start">
            <h3 className="font-sans text-heading-3 text-text-primary mb-4">Currently Focused On</h3>
            <ul className="space-y-3">
              {['Offensive Security', 'Vulnerability Research', 'Security Engineering', 'Threat Intelligence', 'Blue Team Operations'].map((focus, index) => (
                <li key={index} className="flex items-center gap-3 text-body text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-accent/50 flex-shrink-0 mt-2" aria-hidden="true" />
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}