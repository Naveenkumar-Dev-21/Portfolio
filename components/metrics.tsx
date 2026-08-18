'use client'

import { heroStats } from '@/lib/data'
import { HeroStat } from '@/lib/types'

export function Metrics() {
  return (
    <section className="py-section border-y border-border bg-surface/30" aria-label="Key metrics">
      <div className="max-w-7xl mx-auto px-container">
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {heroStats.map((stat: HeroStat, index: number) => (
            <div key={index} className="text-center md:text-left">
              <dt className="font-sans text-hero md:text-[clamp(3rem,8vw,4.5rem)] font-medium text-text-primary">
                {stat.value}
              </dt>
              <dd className="mt-2 text-body-sm text-text-secondary tracking-wide">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}