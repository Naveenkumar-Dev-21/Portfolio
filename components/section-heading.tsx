'use client'

import { SectionHeadingProps } from '@/lib/types'

export function SectionHeading({ number, title, subtitle }: SectionHeadingProps) {
  return (
    <header className="mb-12 md:mb-16">
      {number && (
        <span className="inline-block mb-3 text-caption font-medium text-accent tracking-widest uppercase">
          {number}
        </span>
      )}
      <h2 className="font-sans text-heading-1 text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-body text-text-secondary max-w-2xl">
          {subtitle}
        </p>
      )}
    </header>
  )
}