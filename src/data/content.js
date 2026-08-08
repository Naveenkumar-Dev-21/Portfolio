/* ══════════════════════════════════════════════
   CONTENT — single source of truth
   ──────────────────────────────────────────────
   Everything on the page is driven by this file.
   To add a project / skill / cert, add an entry
   to the matching array below. Nothing else to
   touch — the components map over these.

   Kept in sync with public/resume.pdf.
   ══════════════════════════════════════════════ */

export const personalInfo = {
  name: 'Naveenkumar V',
  role: 'Penetration Tester & Security Researcher',
  location: 'Erode, Tamil Nadu',
  phone: '+91 9003801686',
  email: 'naveenkumar2006.kongu@gmail.com',
  bio: "Information Technology student and penetration tester. I helped establish my college's IT Penetration Testing Team, where I've reported 9+ critical vulnerabilities — including findings rated up to CVSS 9.8 — and validated the fixes. I also ship production software and run a self-hosted Wazuh blue-team lab.",
  avatar: '/profile.webp',
}

/* Headline numbers for the hero. Pulled from the resume —
   update these when the underlying facts change. */
export const heroStats = [
  { value: '9+', label: 'Critical vulns reported' },
  { value: '9.8', label: 'Highest CVSS rating' },
  { value: '2', label: 'Apps live in production' },
]

/* `icon` refers to a key in src/components/Icons.jsx.
   `primary: true` pulls a link into the top contact row. */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Naveenkumar-Dev-21', icon: 'github', primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan', icon: 'linkedin', primary: true },
  { label: 'Email', href: 'mailto:naveenkumar2006.kongu@gmail.com', icon: 'mail', primary: true },
  { label: 'Resume', href: '/resume.pdf', icon: 'file', primary: true },
  { label: 'Blog', href: 'https://rangerblogs.hashnode.dev', icon: 'pen' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', icon: 'terminal' },
  { label: 'Cylab', href: 'https://learn.cylabacademy.org/users/ForestRanger', icon: 'award' },
]

/* Rendered as its own feature card, not a chip in the row. */
export const youtube = {
  name: 'ForestRanger',
  href: 'https://www.youtube.com/channel/UCffZTsvM49AFjviY3RrtjRQ',
  tagline: 'Security walkthroughs, home-lab builds & CTF breakdowns',
}

/* Grouped exactly as the resume groups them. */
export const skillGroups = [
  {
    label: 'Cybersecurity',
    accent: 'red',
    items: [
      'Penetration Testing', 'Vulnerability Assessment', 'Web Vulnerability Scanning',
      'Reconnaissance', 'Service Enumeration', 'Privilege Escalation',
      'Threat Intelligence', 'Security Monitoring', 'Blue Team Fundamentals',
    ],
  },
  {
    label: 'Security Tools',
    accent: 'amber',
    items: ['Nmap', 'Nuclei', 'Nikto', 'Wazuh Manager', 'Wazuh Indexer', 'SSH', 'Linux Security Utilities'],
  },
  {
    label: 'Programming',
    accent: 'cyan',
    items: ['Python', 'Bash', 'Java'],
  },
  {
    label: 'Web / Dev',
    accent: 'green',
    items: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    label: 'Systems',
    accent: 'cyan',
    items: ['Linux Administration', 'Git', 'GitHub', 'Docker', 'AWS (EC2, S3)', 'Self-Hosting'],
  },
]

/* `style` maps to a .capability-icon modifier class in index.css */
export const areasOfInterest = [
  { icon: '🔓', label: 'Penetration Testing & Ethical Hacking', desc: 'Offensive security', style: 'pentest' },
  { icon: '🕵️', label: 'Threat Intelligence', desc: 'Threat analysis', style: 'threat' },
  { icon: '🔍', label: 'Digital Forensics', desc: 'Evidence analysis', style: 'forensic' },
  { icon: '🛡️', label: 'Incident Response', desc: 'Threat mitigation', style: 'incident' },
]

export const experience = [
  {
    title: 'IT Penetration Testing Team — Kongu Engineering College',
    subtitle: 'Penetration Tester / Security Researcher',
    date: 'Authorized Internal Testing',
    location: 'Erode, Tamil Nadu',
    highlights: [
      'Helped establish the IT Penetration Testing Team responsible for authorized security testing of college infrastructure.',
      'Identified and reported 9+ critical vulnerabilities across in-scope systems, including findings rated up to CVSS 9.8.',
      'Conducted reconnaissance, service enumeration, vulnerability assessment, and security validation using Nmap, Nuclei, Nikto, and Linux security utilities.',
      'Communicated identified vulnerabilities to the responsible IT and development teams and documented each finding.',
      'Assisted in patching and remediating reported vulnerabilities, validating fixes through follow-up testing.',
    ],
  },
  {
    title: 'Computer Society of India — KEC Branch',
    subtitle: 'Joint Secretary',
    date: '2025 – 2026',
    highlights: ['Leadership and organizational responsibilities for technical events.'],
  },
  {
    title: 'Computer Society of India — KEC Branch',
    subtitle: 'Additional Secretary',
    date: '2024 – 2025',
    highlights: ['Assisted in organizing events and managing student chapter operations.'],
  },
]

/* `status`: live | lab | wip — drives the badge color.
   `metric` is the one number worth leading with, if any. */
export const projects = [
  {
    id: 'PRJ-001',
    name: 'Aadhiran Kids Collections',
    kind: 'E-Commerce Platform',
    status: 'live',
    metric: 'In production',
    desc: 'Full-stack MERN e-commerce application built and deployed for a retail business — live and publicly accessible. Implemented end to end across the database, server, and client layers.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    href: 'https://www.aadhirankidscollections.com',
  },
  {
    id: 'PRJ-002',
    name: 'Billing & Inventory System',
    kind: 'Desktop Application',
    status: 'live',
    metric: 'In daily use',
    desc: 'Desktop billing application supporting day-to-day store operations for the same retail business. Billing and inventory management shipped as practical, in-use business software.',
    tags: ['Desktop', 'Billing', 'Inventory'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-003',
    name: 'Wazuh Home Server',
    kind: 'Blue Team Monitoring Lab',
    status: 'lab',
    metric: 'Self-hosted',
    desc: 'Wazuh deployed on a self-hosted server for centralized security monitoring and log collection across connected hosts. Configured for blue-team training, alert triage, and hands-on monitoring practice.',
    tags: ['Wazuh Manager', 'Wazuh Indexer', 'Elasticsearch', 'SIEM'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-004',
    name: 'Home Server Architecture',
    kind: 'Infrastructure & File Sharing',
    status: 'lab',
    metric: 'Self-hosted',
    desc: 'Self-hosted home server environment built for infrastructure management and file sharing, with hosting capabilities configured and ongoing server administration.',
    tags: ['Linux', 'Self-Hosting', 'Networking'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-005',
    name: 'CTF Analysis Platform',
    kind: 'Cybersecurity Learning',
    status: 'wip',
    metric: 'In development',
    desc: 'A platform for analyzing CTF challenges and their solving techniques, built to support structured cybersecurity learning.',
    tags: ['Python', 'CTF', 'Education'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Oracle Java SE 17 Developer', issuer: 'Oracle' },
  { name: 'Introduction to the Threat Landscape', issuer: 'Fortinet' },
  { name: 'SOC Member', issuer: 'LetsDefend' },
]

export const education = [
  { title: 'Kongu Engineering College', subtitle: 'B.Tech, Information Technology', date: '2023 – 2027', desc: 'CGPA: 7.73', location: 'Erode, Tamil Nadu' },
  { title: 'KGMHSS, Erode', subtitle: 'Higher Secondary — Computer Science', date: '2021 – 2023', desc: 'Percentage: 93.167%' },
  { title: 'SVMS, Erode', subtitle: 'Secondary Education', date: '2016 – 2021', desc: 'Percentage: 93.167%' },
]

export const aboutMe = "Beyond cybersecurity, I have a strong passion for creative writing and mythology. I'm a mythology geek and enjoy writing fiction. In fact, I've written a hacker-based comic titled 'Twin Protocol', blending my technical interests with storytelling."

export const languages = [
  { flag: '🇮🇳', name: 'Tamil' },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇳', name: 'Hindi' },
]
