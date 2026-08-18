'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ExternalLink } from 'lucide-react'
import { navItems, socialLinks, personalInfo } from '@/lib/data'
import { NavItem, SocialLink } from '@/lib/types'
import { ThemeToggle } from './theme-toggle'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const primaryLinks = socialLinks.filter((link: SocialLink) => link.primary)

  if (!isMounted) {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 h-16" aria-label="Main navigation" />
    )
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-normal ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-container h-full flex items-center justify-between">
        <Link
          href="#"
          className="font-sans text-heading-3 font-medium text-text-primary hover:text-accent transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`${personalInfo.name} - Home`}
        >
          NV
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-2 py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {primaryLinks.map((link: SocialLink) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-body-sm font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-2 py-1"
              aria-label={link.label}
            >
              {link.label}
              {link.href.startsWith('http') && (
                <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
              )}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="#contact"
            className="text-body-sm font-medium text-text-primary hover:text-accent transition-colors duration-fast px-4 py-2 border border-accent/30 rounded-md hover:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Let's Connect
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-primary hover:text-accent transition-colors duration-fast focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-normal ease-in-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="px-container pb-6 space-y-4 border-t border-border">
          {navItems.map((item: NavItem) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-body font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border space-y-3">
            {primaryLinks.map((link: SocialLink) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block text-body font-medium text-text-secondary hover:text-text-primary transition-colors duration-fast flex items-center gap-2"
              >
                {link.label}
              </a>
            ))}
            <div className="flex justify-center pt-2">
              <ThemeToggle />
            </div>
            <a
              href="#contact"
              className="block text-body font-medium text-text-primary hover:text-accent transition-colors duration-fast px-4 py-2 border border-accent/30 rounded-md hover:border-accent/50 text-center mt-2"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}