export const personalInfo = {
  name: 'Naveenkumar Varatharajan',
  role: 'Penetration Tester & Security Researcher',
  location: 'Erode, Tamil Nadu',
  phone: '+91 9003801686',
  email: 'naveenkumar2006.kongu@gmail.com',
  bio: 'Information Technology student focused on offensive security, vulnerability research, security engineering, and building practical software.',
  availability: 'AVAILABLE FOR INTERNSHIPS',
  // Versioned filename: replacing an image in-place keeps the same
  // /_next/image URL, so browsers and the Vercel optimizer keep serving the
  // stale cached copy. A new name guarantees a fresh fetch everywhere.
  avatar: '/profile-portrait.webp',
}

export const heroStats = [
  { value: '9+', label: 'Critical vulnerabilities reported' },
  { value: '9.8', label: 'Highest CVSS rating' },
  { value: '2', label: 'Production applications' },
  { value: '100%', label: 'Reported findings retested' },
]

export const securityProfile = [
  { label: 'Penetration Testing', icon: 'lock' },
  { label: 'Vulnerability Research', icon: 'search' },
  { label: 'Threat Intelligence', icon: 'radar' },
  { label: 'Security Monitoring', icon: 'activity' },
]

export const securityMetrics = [
  { value: '9+', label: 'Critical Findings' },
  { value: '9.8', label: 'Highest CVSS' },
  { value: '100%', label: 'Retested & Remediated' },
]

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Naveenkumar-Dev-21', icon: 'github', primary: true },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan', icon: 'linkedin', primary: true },
  { label: 'Email', href: 'mailto:naveenkumar2006.kongu@gmail.com', icon: 'mail', primary: true },
  { label: 'Blog', href: 'https://rangerblogs.hashnode.dev', icon: 'pen' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', icon: 'terminal' },
  { label: 'Cylab', href: 'https://learn.cylabacademy.org/users/ForestRanger', icon: 'award' },
]

export const youtube = {
  name: 'ForestRanger',
  href: 'https://www.youtube.com/channel/UCffZTsvM49AFjviY3RrtjRQ',
  tagline: 'Security walkthroughs, home-lab builds & CTF breakdowns',
}

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
]

export const skillGroups = [
  {
    label: 'Cybersecurity',
    items: [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Web Vulnerability Scanning',
      'Reconnaissance',
      'Service Enumeration',
      'Privilege Escalation',
      'Threat Intelligence',
      'Security Monitoring',
      'Blue Team Fundamentals',
    ],
  },
  {
    label: 'Security Tools',
    items: [
      'Nmap',
      'Nuclei',
      'Nikto',
      'Wazuh',
      'SSH',
      'Linux Security Utilities',
    ],
  },
  {
    label: 'Programming',
    items: [
      'Python',
      'Bash',
      'Java',
    ],
  },
  {
    label: 'Web Development',
    items: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
    ],
  },
  {
    label: 'Infrastructure',
    items: [
      'Linux Administration',
      'Docker',
      'Git',
      'GitHub',
      'AWS EC2',
      'AWS S3',
      'Self-Hosting',
    ],
  },
]

export const experience = [
  {
    id: 'exp-1',
    title: 'Penetration Tester / Security Researcher',
    organization: 'IT Penetration Testing Team',
    location: 'Kongu Engineering College, Erode',
    period: 'Authorized Internal Testing',
    authorization: 'All testing performed under written authorization from the institution.',
    highlights: [
      'Helped establish the IT Penetration Testing Team responsible for authorized security testing of college infrastructure.',
      'Identified and reported 9+ critical vulnerabilities across in-scope systems, including findings rated up to CVSS 9.8.',
      'Conducted reconnaissance, service enumeration, vulnerability assessment, and security validation using Nmap, Nuclei, Nikto, and Linux security utilities.',
      'Communicated identified vulnerabilities to the responsible IT and development teams and documented each finding.',
      'Assisted in patching and remediating reported vulnerabilities, validating fixes through follow-up testing.',
    ],
    metrics: [
      { label: 'Peak CVSS', value: '9.8' },
      { label: 'Vulnerabilities', value: '9+' },
      { label: 'Status', value: 'Remediated' },
      { label: 'Validation', value: '100%' },
    ],
  },
]

export const leadership = [
  {
    role: 'Joint Secretary',
    organization: 'Computer Society of India — KEC Branch',
    period: '2025 – 2026',
  },
  {
    role: 'Additional Secretary',
    organization: 'Computer Society of India — KEC Branch',
    period: '2024 – 2025',
  },
]

export const projects = [
  {
    id: 'PRJ-001',
    name: 'Aadhiran Kids Collections',
    kind: 'E-Commerce Platform',
    status: 'live',
    metric: 'In production',
    description: 'Full-stack MERN e-commerce application built and deployed for a retail business — live and publicly accessible. Implemented end to end across the database, server, and client layers.',
    tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    href: 'https://www.aadhirankidscollections.com',
  },
  {
    id: 'PRJ-002',
    name: 'Billing & Inventory System',
    kind: 'Desktop Application',
    status: 'live',
    metric: 'In daily use',
    description: 'Desktop billing application supporting day-to-day store operations for the same retail business. Billing and inventory management shipped as practical, in-use business software.',
    tags: ['Desktop', 'Billing', 'Inventory'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-003',
    name: 'Wazuh Home Server',
    kind: 'Blue Team Monitoring Lab',
    status: 'lab',
    metric: 'Self-hosted',
    description: 'Wazuh deployed on a self-hosted server for centralized security monitoring and log collection across connected hosts. Configured for blue-team training, alert triage, and hands-on monitoring practice.',
    tags: ['Wazuh Manager', 'Wazuh Indexer', 'Elasticsearch', 'SIEM'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-004',
    name: 'Home Server Architecture',
    kind: 'Infrastructure & File Sharing',
    status: 'lab',
    metric: 'Self-hosted',
    description: 'Self-hosted home server environment built for infrastructure management and file sharing, with hosting capabilities configured and ongoing server administration.',
    tags: ['Linux', 'Self-Hosting', 'Networking'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
  {
    id: 'PRJ-005',
    name: 'CTF Analysis Platform',
    kind: 'Cybersecurity Learning',
    status: 'wip',
    metric: 'In development',
    description: 'A platform for analyzing CTF challenges and their solving techniques, built to support structured cybersecurity learning.',
    tags: ['Python', 'CTF', 'Education'],
    href: 'https://github.com/Naveenkumar-Dev-21',
  },
]

export const ctfPlatforms = [
  { name: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', handle: 'naveenkumar03585' },
  { name: 'Cylab Academy', href: 'https://learn.cylabacademy.org/users/ForestRanger', handle: 'ForestRanger' },
  { name: 'OverTheWire', href: 'https://overthewire.org/wargames/bandit/', handle: 'Bandit — Completed' },
]

export const interests = [
  { number: '01', title: 'Penetration Testing', description: 'Offensive security' },
  { number: '02', title: 'Threat Intelligence', description: 'Threat analysis' },
  { number: '03', title: 'Digital Forensics', description: 'Evidence analysis' },
  { number: '04', title: 'Incident Response', description: 'Threat mitigation' },
]

export const certifications = [
  { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Oracle Java SE 17 Developer', issuer: 'Oracle' },
  { name: 'Introduction to the Threat Landscape', issuer: 'Fortinet' },
  { name: 'SOC Member', issuer: 'LetsDefend' },
]

export const education = [
  {
    institution: 'Kongu Engineering College',
    degree: 'B.Tech, Information Technology',
    period: '2023 – 2027',
    detail: 'CGPA: 7.73',
    location: 'Erode, Tamil Nadu',
  },
  {
    institution: 'KGMHSS, Erode',
    degree: 'Higher Secondary — Computer Science',
    period: '2021 – 2023',
    detail: 'Percentage: 93.167%',
    location: 'Erode, Tamil Nadu',
  },
  {
    institution: 'SVMS, Erode',
    degree: 'Secondary Education',
    period: '2016 – 2021',
    detail: 'Percentage: 93.167%',
    location: 'Erode, Tamil Nadu',
  },
]

export const aboutMe = 'Beyond cybersecurity, I have a strong interest in creative writing and mythology. I enjoy exploring stories, building fictional worlds, and combining technical ideas with storytelling. I\'ve also written a hacker-themed comic titled "Twin Protocol", blending cybersecurity concepts with fiction.'

export const siteConfig = {
  title: 'Naveenkumar V — Penetration Tester & Security Researcher',
  description: 'Portfolio of Naveenkumar V — penetration tester, security researcher, and Information Technology student focused on offensive security, vulnerability research, and security engineering.',
  url: 'https://naveenkumarv.dev',
  ogImage: '/og-image.svg',
}