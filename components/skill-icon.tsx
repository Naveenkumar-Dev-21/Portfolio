import {
  siPython, siGnubash, siOpenjdk, siMongodb, siExpress, siReact,
  siNodedotjs, siLinux, siDocker, siGit, siGithub,
} from 'simple-icons'
import type { SimpleIcon } from 'simple-icons'
import {
  Radar, Zap, Bug, Shield, ShieldCheck, ShieldAlert, ScanSearch, Search,
  Network, ChevronsUp, Activity, Server, Database, HardDrive, Wrench,
  SquareTerminal, Crosshair, type LucideIcon,
} from 'lucide-react'

// Real brand logos (bundled locally via simple-icons — no network calls).
const BRAND: Record<string, SimpleIcon> = {
  'Python': siPython,
  'Bash': siGnubash,
  'Java': siOpenjdk,
  'MongoDB': siMongodb,
  'Express.js': siExpress,
  'React': siReact,
  'Node.js': siNodedotjs,
  'Linux': siLinux,
  'Docker': siDocker,
  'Git': siGit,
  'GitHub': siGithub,
}

// Everything without a real brand mark — security tools and concepts —
// gets a fitting category glyph so every row reads consistently.
const GLYPH: Record<string, LucideIcon> = {
  // Security tools
  'Nmap': Radar,
  'Nuclei': Zap,
  'Nikto': Bug,
  'Wazuh': ShieldCheck,
  'SSH': SquareTerminal,
  'Linux Security Utilities': Wrench,
  // Cybersecurity concepts
  'Penetration Testing': Bug,
  'Vulnerability Assessment': ShieldAlert,
  'Web Vulnerability Scanning': ScanSearch,
  'Reconnaissance': Search,
  'Service Enumeration': Network,
  'Privilege Escalation': ChevronsUp,
  'Threat Intelligence': Crosshair,
  'Security Monitoring': Activity,
  'Blue Team Fundamentals': Shield,
  // Infrastructure / cloud (AWS marks aren't in simple-icons)
  'AWS EC2': Server,
  'AWS S3': Database,
  'Self-Hosting': HardDrive,
}

// Relative luminance (sRGB). Near-black brand colors (GitHub #181717,
// OpenJDK #000000, Express #0A0A0A) vanish on a dark background, so those
// fall back to currentColor and adapt to the active theme.
function isTooDark(hex: string): boolean {
  const n = parseInt(hex, 16)
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255
  const lum = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return lum < 0.25
}

export function SkillIcon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const brand = BRAND[name]
  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        className={className}
        fill={isTooDark(brand.hex) ? 'currentColor' : `#${brand.hex}`}
        aria-hidden="true"
      >
        <path d={brand.path} />
      </svg>
    )
  }

  const Glyph = GLYPH[name] ?? Wrench
  return <Glyph className={`${className} text-accent`} aria-hidden="true" />
}
