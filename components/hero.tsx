import { personalInfo, securityProfile, securityMetrics } from '@/lib/data'
import { SecurityProfileItem, SecurityMetric } from '@/lib/types'
import { Lock, Search, Radar, Activity, Circle } from 'lucide-react'
import Image from 'next/image'
import { Typewriter } from '@/components/typewriter'

const securityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  lock: Lock,
  search: Search,
  radar: Radar,
  activity: Activity,
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(var(--accent),0.08),transparent_35%)]" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-container py-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="pt-8 lg:pt-16">
          <div className="flex items-center gap-2 text-caption font-medium text-accent tracking-widest uppercase mb-6">
            <Circle className="w-2 h-2 text-accent" aria-hidden="true" />
            <span>{personalInfo.availability}</span>
          </div>
          
          <h1 className="font-sans text-hero text-text-primary leading-[1.05]">
            {personalInfo.name.split(' ')[0]}<br />
            <span className="text-text-secondary font-normal">{personalInfo.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-body-lg">
            <span className="text-text-secondary">·</span>
            <Typewriter />
          </div>
          
          <p className="mt-8 text-body-lg text-text-secondary max-w-xl leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 font-sans text-body font-medium text-text-primary bg-accent/10 border border-accent/30 rounded-md hover:bg-accent/20 hover:border-accent/50 transition-all duration-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 font-sans text-body font-medium text-text-secondary border border-border rounded-md hover:border-text-muted hover:text-text-primary transition-all duration-normal focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="w-full mt-4 lg:mt-0">
          {/* Photo and card share one column and one max width, so their left
              and right edges line up. They can't sit side by side: this grid
              half is ~35rem, while a 28rem photo plus a 24rem card plus the
              gap needs ~55rem — and with both flex-shrink-0, the card
              overflowed the container instead of fitting. */}
          <div className="flex flex-col gap-6 w-full max-w-sm mx-auto lg:mx-0 lg:ml-auto">
            <div className="aspect-square w-full max-w-[16rem] sm:max-w-xs lg:max-w-none mx-auto lg:mx-0">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-border bg-surface-elevated">
                <Image
                  src={personalInfo.avatar}
                  alt={`${personalInfo.name} - Penetration Tester & Security Researcher`}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 16rem, (max-width: 1024px) 20rem, 24rem"
                />
              </div>
            </div>

            <div className="w-full bg-surface border border-border rounded-xl p-4 md:p-6 shadow-card-hover">
              <div className="flex items-center gap-2 text-caption font-medium text-accent tracking-widest uppercase mb-4">
                <span>SECURITY PROFILE</span>
              </div>

              <div className="space-y-3 mb-6">
                {securityProfile.map((item: SecurityProfileItem, index: number) => {
                  const Icon = securityIcons[item.icon] || Lock
                  return (
                    <div key={index} className="flex items-center gap-3 p-3 bg-surface-elevated/50 border border-border/50 rounded-lg transition-all duration-fast hover:border-accent/30">
                      <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-accent" aria-hidden="true" />
                      </div>
                      <span className="text-body font-medium text-text-primary">{item.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="border-t border-border pt-4">
                <div className="grid grid-cols-3 gap-3 items-start">
                  {securityMetrics.map((metric: SecurityMetric, index: number) => (
                    <div key={index} className="text-center">
                      <div className="font-sans text-heading-2 font-medium text-text-primary">{metric.value}</div>
                      <div className="text-caption text-text-muted tracking-wide uppercase mt-0.5 text-balance">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}