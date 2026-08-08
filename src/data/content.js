/* ══════════════════════════════════════════════
   CONTENT — single source of truth
   ──────────────────────────────────────────────
   Everything on the page is driven by this file.
   To add a project / skill / cert, add an entry
   to the matching array below. Nothing else to
   touch — the components map over these.
   ══════════════════════════════════════════════ */

export const personalInfo = {
  name: 'Naveenkumar V',
  role: 'Cybersecurity Enthusiast',
  location: 'Erode, India',
  phone: '+91 9003801686',
  email: 'naveenkumar2006.kongu@gmail.com',
  bio: "Motivated Information Technology student with strong knowledge in Linux, networking, and cybersecurity fundamentals, supported by hands-on project experience. Seeking an entry-level IT role to apply problem-solving skills, gain industry exposure, and contribute to organizational success.",
  avatar: '/profile.webp',
}

/* `icon` refers to a key in src/components/Icons.jsx */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Naveenkumar-Dev-21', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:naveenkumar2006.kongu@gmail.com', icon: 'mail' },
  { label: 'Resume', href: '/resume.pdf', icon: 'file' },
  { label: 'Blog', href: 'https://rangerblogs.hashnode.dev', icon: 'pen' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCffZTsvM49AFjviY3RrtjRQ', icon: 'youtube' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', icon: 'terminal' },
  { label: 'Cylab', href: 'https://learn.cylabacademy.org/users/ForestRanger', icon: 'award' },
]

export const skills = [
  'Linux Administration', 'Web Vulnerability Scanning', 'Git & Version Control',
  'Docker', 'AWS (EC2, S3)', 'Python', 'Documentation',
  'Penetration Testing', 'Threat Intelligence', 'Forensics', 'Incident Response',
  'Nmap', 'Aircrack-ng', 'Tor', 'Spiderfoot',
]

/* `style` maps to a .capability-icon modifier class in index.css */
export const areasOfInterest = [
  { icon: '🔓', label: 'Penetration Testing & Ethical Hacking', desc: 'Offensive security', style: 'pentest' },
  { icon: '🕵️', label: 'Threat Intelligence', desc: 'Threat analysis', style: 'threat' },
  { icon: '🔍', label: 'Digital Forensics', desc: 'Evidence analysis', style: 'forensic' },
  { icon: '🛡️', label: 'Incident Response', desc: 'Threat mitigation', style: 'incident' },
]

export const projects = [
  {
    id: 'PRJ-001',
    name: 'Cipher-Hide',
    desc: 'A GUI tool that uses Fernet encryption for encrypting messages and steganography methods to hide information inside media files.',
    tags: ['Python', 'Tkinter', 'Pydub', 'Pillow'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-002',
    name: 'Space Shooter',
    desc: 'A desktop space shooter game built with Pygame, featuring engaging gameplay mechanics and sprite-based graphics.',
    tags: ['Python', 'Pygame'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-003',
    name: 'Bandit Writeups',
    desc: 'Comprehensive write-ups documenting solutions to OverTheWire Bandit challenges, covering Linux command-line fundamentals.',
    tags: ['Linux', 'Security', 'Documentation'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-004',
    name: 'Wazuh Simulation',
    desc: 'Video documentation of installing Wazuh Manager on a server and Wazuh Indexer on a host machine for system monitoring.',
    tags: ['Wazuh', 'Elasticsearch', 'SIEM'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-005',
    name: 'Escalation on Kongu Server',
    desc: 'Documentation of a privilege escalation vulnerability discovered on a KEC server, detailing the exploit methodology.',
    tags: ['SSH', 'Python', 'Privilege Escalation'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
]

export const certifications = [
  'AWS Cloud Practitioner',
  'Fortinet — Introduction to Threat Landscape',
  'SOC Member — LetsDefend (Badge)',
]

export const education = [
  { title: 'Kongu Engineering College', subtitle: 'B.Tech — Computer Science', date: '2023 – 2027', desc: 'CGPA: 7.80' },
  { title: 'KGMHSS, Erode', subtitle: 'Higher Secondary — Computer Science', date: '2021 – 2023', desc: 'Percentage: 93.167%' },
  { title: 'SVMS, Erode', subtitle: 'Secondary School', date: '2016 – 2021', desc: 'Percentage: 93.167%' },
]

export const experience = [
  { title: 'Computer Society of India (KEC Branch)', subtitle: 'Joint Secretary', date: '2025 – 2026', desc: 'Leadership and organizational responsibilities for technical events.' },
  { title: 'Computer Society of India (KEC Branch)', subtitle: 'Additional Secretary', date: '2024 – 2025', desc: 'Assisted in organizing events and managing student chapter operations.' },
]

export const aboutMe = "Beyond cybersecurity, I have a strong passion for creative writing and mythology. I'm a mythology geek and enjoy writing fiction. In fact, I've written a hacker-based comic titled 'Twin Protocol', blending my technical interests with storytelling."

export const languages = [
  { flag: '🇮🇳', name: 'Tamil' },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇳', name: 'Hindi' },
]
