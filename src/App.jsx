/* ── Icons ── */
const icons = {
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
  mail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  file: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  ),
  pen: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.855z" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18">
      <path d="M7 17L17 7" />
      <path d="M7 7h10v10" />
    </svg>
  ),
  mapPin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  wrench: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  crosshair: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" /><line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" /><line x1="12" y1="22" x2="12" y2="18" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  ),
  book: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
}

/* ══════════════════════════════════════
   DATA
   ══════════════════════════════════════ */

const personalInfo = {
  name: 'Naveenkumar V',
  role: 'Cybersecurity Enthusiast',
  location: 'Erode, India',
  phone: '+91 9003801686',
  bio: "Motivated Information Technology student with strong knowledge in Linux, networking, and cybersecurity fundamentals, supported by hands-on project experience. Seeking an entry-level IT role to apply problem-solving skills, gain industry exposure, and contribute to organizational success.",
  avatar: '/profile.jpg',
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Naveenkumar-Dev-21', icon: 'github' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/naveenkumarv-varatharajan', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:naveenkumar2006.kongu@gmail.com', icon: 'mail' },
  { label: 'Resume', href: '/resume.pdf', icon: 'file' },
  { label: 'Blog', href: 'https://rangerblogs.hashnode.dev', icon: 'pen' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/naveenkumar03585', icon: 'terminal' },
  { label: 'Cylab', href: 'https://learn.cylabacademy.org/users/ForestRanger', icon: 'award' },
]

const skills = [
  'Linux Administration', 'Web Vulnerability Scanning', 'Git & Version Control',
  'Docker', 'AWS (EC2, S3)', 'Python', 'Documentation',
  'Penetration Testing', 'Threat Intelligence', 'Forensics', 'Incident Response',
  'Nmap', 'Aircrack-ng', 'Tor', 'Spiderfoot'
]

const areasOfInterest = [
  { icon: '🔓', label: 'Penetration Testing & Ethical Hacking', desc: 'Offensive security', style: 'pentest' },
  { icon: '🕵️', label: 'Threat Intelligence', desc: 'Threat analysis', style: 'threat' },
  { icon: '🔍', label: 'Digital Forensics', desc: 'Evidence analysis', style: 'forensic' },
  { icon: '🛡️', label: 'Incident Response', desc: 'Threat mitigation', style: 'incident' },
]

const projects = [
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

const certifications = [
  'AWS Cloud Practitioner',
  'Fortinet — Introduction to Threat Landscape',
  'SOC Member — LetsDefend (Badge)',
]

const education = [
  { title: 'Kongu Engineering College', subtitle: 'B.Tech — Computer Science', date: '2023 – 2027', desc: 'CGPA: 7.80' },
  { title: 'KGMHSS, Erode', subtitle: 'Higher Secondary — Computer Science', date: '2021 – 2023', desc: 'Percentage: 93.167%' },
  { title: 'SVMS, Erode', subtitle: 'Secondary School', date: '2016 – 2021', desc: 'Percentage: 93.167%' },
]

const experience = [
  { title: 'Computer Society of India (KEC Branch)', subtitle: 'Joint Secretary', date: '2025 – 2026', desc: 'Leadership and organizational responsibilities for technical events.' },
  { title: 'Computer Society of India (KEC Branch)', subtitle: 'Additional Secretary', date: '2024 – 2025', desc: 'Assisted in organizing events and managing student chapter operations.' },
]

const aboutMe = "Beyond cybersecurity, I have a strong passion for creative writing and mythology. I'm a mythology geek and enjoy writing fiction. In fact, I've written a hacker-based comic titled 'Twin Protocol', blending my technical interests with storytelling."

const languages = [
  { flag: '🇮🇳', name: 'Tamil' },
  { flag: '🇬🇧', name: 'English' },
  { flag: '🇮🇳', name: 'Hindi' },
]

/* ══════════════════════════════════════
   COMPONENTS
   ══════════════════════════════════════ */

function StatusBar() {
  return (
    <div className="status-bar fade-up fade-up-1" id="status-bar">
      <div className="status-bar-left">
        <div className="status-indicator">
          <span className="status-dot" />
          <span className="status-label">Open to Opportunities</span>
        </div>
      </div>
      <div className="status-bar-right">
        <span className="status-tag">B.Tech · IT</span>
        <span>2023 – 2027</span>
      </div>
    </div>
  )
}

function SectionHeader({ icon, title }) {
  return (
    <div className="section-header">
      <span className="section-icon">{icon}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero fade-up fade-up-2" id="hero">
      <div className="hero-avatar-wrapper">
        <img
          className="hero-avatar"
          src={personalInfo.avatar}
          alt={`${personalInfo.name}'s photo`}
          loading="eager"
        />
        <span className="hero-badge">🛡️</span>
      </div>
      <div className="hero-info">
        <h1 className="hero-name">{personalInfo.name}</h1>
        <p className="hero-role">
          <span className="hero-role-icon">{icons.shield}</span>
          {personalInfo.role}
        </p>
        <div className="hero-meta">
          <span className="hero-meta-item">{icons.mapPin} {personalInfo.location}</span>
        </div>
      </div>
    </section>
  )
}

function BioCard() {
  return (
    <div className="bio-card fade-up fade-up-3" id="bio">
      <div className="bio-label">
        {icons.terminal}
        Career Objective
      </div>
      <p className="bio-text">{personalInfo.bio}</p>
    </div>
  )
}

function LinksRow() {
  return (
    <div className="links-row fade-up fade-up-3" id="links">
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="link-chip"
          target={link.label !== 'Email' ? '_blank' : undefined}
          rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
        >
          {icons[link.icon]}
          {link.label}
        </a>
      ))}
    </div>
  )
}

function SkillsSection() {
  return (
    <section className="section fade-up fade-up-4" id="skills">
      <SectionHeader icon={icons.wrench} title="Security Toolkit" />
      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  )
}

function AreasOfInterest() {
  return (
    <section className="section fade-up fade-up-5" id="interests">
      <SectionHeader icon={icons.crosshair} title="Areas of Interest" />
      <div className="capability-grid">
        {areasOfInterest.map((item) => (
          <div key={item.label} className="capability-card">
            <div className={`capability-icon ${item.style}`}>
              {item.icon}
            </div>
            <div className="capability-info">
              <span className="capability-name">{item.label}</span>
              <span className="capability-desc">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function AboutMeSection() {
  return (
    <section className="section fade-up fade-up-4" id="about">
      <SectionHeader icon={icons.book} title="Beyond the Terminal" />
      <div className="bio-card" style={{ marginBottom: 0 }}>
        <p className="bio-text">{aboutMe}</p>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section fade-up fade-up-5" id="experience">
      <SectionHeader icon={icons.terminal} title="Experience" />
      {experience.map((item) => (
        <div key={item.title + item.subtitle} className="timeline-card">
          <div className="timeline-header">
            <span className="timeline-title">{item.title}</span>
            <span className="timeline-date">{item.date}</span>
          </div>
          <p className="timeline-subtitle">{item.subtitle}</p>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section fade-up fade-up-5" id="projects">
      <SectionHeader icon={icons.code} title="Projects" />
      <div className="projects-grid">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-card-header">
              <span className="project-name">
                {project.name}
                <span className="project-id">{project.id}</span>
              </span>
              <span className="project-arrow">{icons.arrow}</span>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="section fade-up fade-up-6" id="education">
      <SectionHeader icon={icons.book} title="Education" />
      {education.map((item) => (
        <div key={item.title} className="timeline-card">
          <div className="timeline-header">
            <span className="timeline-title">{item.title}</span>
            <span className="timeline-date">{item.date}</span>
          </div>
          <p className="timeline-subtitle">{item.subtitle}</p>
          <p className="timeline-desc">{item.desc}</p>
        </div>
      ))}
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="section fade-up fade-up-7" id="certifications">
      <SectionHeader icon={icons.award} title="Certifications" />
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert} className="cert-item">
            <span className="cert-badge verified" />
            <span className="cert-name">{cert}</span>
            <span className="cert-status">Verified</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function LanguagesSection() {
  return (
    <section className="section fade-up fade-up-8" id="languages">
      <SectionHeader icon={icons.globe} title="Languages" />
      <div className="lang-row">
        {languages.map((lang) => (
          <div key={lang.name} className="lang-chip">
            <span className="lang-flag">{lang.flag}</span>
            {lang.name}
          </div>
        ))}
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer fade-up fade-up-8" id="footer">
      <p className="footer-line">
        © {new Date().getFullYear()} <span className="footer-accent">Naveenkumar V</span> · All systems secured
      </p>
      <p>Built with React & Vite</p>
    </footer>
  )
}

/* ── Main App ── */
function App() {
  return (
    <>
      <StatusBar />
      <Hero />
      <BioCard />
      <LinksRow />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
      <Footer />
    </>
  )
}

export default App
