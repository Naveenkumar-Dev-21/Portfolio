export interface SectionHeadingProps {
  number?: string
  title: string
  subtitle?: string
}

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
  primary?: boolean
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface ExperienceItem {
  id: string
  title: string
  organization: string
  location: string
  period: string
  authorization?: string
  highlights: string[]
  metrics: { label: string; value: string }[]
}

export interface LeadershipItem {
  role: string
  organization: string
  period: string
}

export interface Project {
  id: string
  name: string
  kind: string
  status: 'live' | 'lab' | 'wip'
  metric: string
  description: string
  tags: string[]
  href: string
}

export interface CTFPlatform {
  name: string
  href: string
  handle: string
}

export interface Interest {
  number: string
  title: string
  description: string
}

export interface Certification {
  name: string
  issuer: string
}

export interface EducationItem {
  institution: string
  degree: string
  period: string
  detail: string
  location: string
}

export interface HeroStat {
  value: string
  label: string
}

export interface SecurityProfileItem {
  label: string
  icon: string
}

export interface SecurityMetric {
  value: string
  label: string
}

export interface YouTubeChannel {
  name: string
  href: string
  tagline: string
}

export interface PersonalInfo {
  name: string
  role: string
  location: string
  phone: string
  email: string
  bio: string
  availability: string
}