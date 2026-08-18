'use client'

import Link from 'next/link'
import { personalInfo, socialLinks, youtube } from '@/lib/data'
import { SocialLink } from '@/lib/types'
import { Github, Linkedin, Mail, FileText, PenTool, Terminal, Award, Youtube, ExternalLink } from 'lucide-react'

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  file: FileText,
  pen: PenTool,
  terminal: Terminal,
  award: Award,
  youtube: Youtube,
}

export function Footer() {
  const primaryLinks = socialLinks.filter((link: SocialLink) => link.primary)
  const secondaryLinks = socialLinks.filter((link: SocialLink) => !link.primary)
  
  return (
    <footer id="contact" className="bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-container py-section">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <p className="font-sans text-heading-2 text-text-primary mb-2">{personalInfo.name}</p>
            <p className="text-body text-text-secondary">{personalInfo.role}</p>
            <p className="text-body-sm text-text-muted mt-4 max-w-sm">
              Penetration tester and security researcher focused on offensive security, vulnerability research, and building practical software.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-body font-medium text-text-primary mb-4">Connect</h4>
            <ul className="space-y-3">
              {primaryLinks.map((link: SocialLink) => {
                const Icon = socialIcons[link.icon] || ExternalLink
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-body text-text-secondary hover:text-text-primary transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
              {secondaryLinks.map((link: SocialLink) => {
                const Icon = socialIcons[link.icon] || ExternalLink
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-3 text-body text-text-secondary hover:text-text-primary transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" aria-hidden="true" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-sans text-body font-medium text-text-primary mb-4">
                <Youtube className="w-5 h-5 inline-block align-middle mr-2 text-red-500" aria-hidden="true" />
                YouTube
              </h4>
              <a
                href={youtube.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1"
              >
                <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                  <Youtube className="w-6 h-6 text-red-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-sans text-body font-medium text-text-primary">{youtube.name}</p>
                  <p className="text-body-sm text-text-muted">{youtube.tagline}</p>
                </div>
                <ExternalLink className="w-5 h-5 text-text-muted ml-auto" aria-hidden="true" />
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-body-sm text-text-muted">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-body-sm text-text-muted">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}