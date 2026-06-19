import { useState } from 'react'
import {
  personalInfo,
  socialLinks,
  stats,
  skillCategories,
  skills,
  areasOfInterest,
  projects,
  certifications,
  education,
  experience,
  aboutMe,
  languages,
  navSections,
} from './data/content'
import { icons } from './components/icons'
import MatrixRain from './components/MatrixRain'
import CyberCursor from './components/CyberCursor'
import BootLoader from './components/BootLoader'
import GlitchText from './components/GlitchText'
import Typewriter from './components/Typewriter'
import ScrollReveal from './components/ScrollReveal'
import TiltCard from './components/TiltCard'
import CountUp from './components/CountUp'
import CyberNav from './components/CyberNav'
import useScrollSpy from './hooks/useScrollSpy'
import useLiveClock from './hooks/useLiveClock'

function SectionHeader({ icon, title, index }) {
  return (
    <div className="section-header">
      <span className="section-index">{index}</span>
      <span className="section-icon">{icon}</span>
      <h2 className="section-title">{title}</h2>
      <span className="section-line" />
    </div>
  )
}

function StatusBar() {
  const time = useLiveClock()

  return (
    <ScrollReveal className="status-bar" delay={100}>
      <div className="status-bar-left">
        <div className="status-indicator">
          <span className="status-dot" />
          <span className="status-label">Open to Opportunities</span>
        </div>
        <span className="status-divider">|</span>
        <span className="status-clock">{time} IST</span>
      </div>
      <div className="status-bar-right">
        <span className="status-tag">B.Tech · IT</span>
        <span className="status-tag status-tag--green">SECURE</span>
        <span>2023 – 2027</span>
      </div>
    </ScrollReveal>
  )
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <ScrollReveal direction="left" delay={0}>
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-ring" aria-hidden="true" />
          <div className="hero-avatar-scan" aria-hidden="true" />
          <img
            className="hero-avatar"
            src={personalInfo.avatar}
            alt={`${personalInfo.name}'s photo`}
            loading="eager"
          />
          <span className="hero-badge">{icons.shield}</span>
        </div>
      </ScrollReveal>

      <div className="hero-info">
        <ScrollReveal delay={100}>
          <p className="hero-greeting">
            <span className="hero-greeting-bracket">[</span>
            OPERATOR ONLINE
            <span className="hero-greeting-bracket">]</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <h1 className="hero-name">
            <GlitchText text={personalInfo.name} as="span" />
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <p className="hero-role">
            <span className="hero-role-icon">{icons.terminal}</span>
            <Typewriter words={personalInfo.roles} />
          </p>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="hero-meta">
            <span className="hero-meta-item">{icons.mapPin} {personalInfo.location}</span>
            <span className="hero-meta-item">{icons.lock} Clearance: Entry Level</span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <div className="hero-cta">
            <a href="#projects" className="btn btn--primary">
              View Projects
              <span className="btn-glow" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="btn btn--ghost">
              {icons.mail} Contact
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function StatsGrid() {
  return (
    <ScrollReveal>
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={stat.label} className="stat-card" style={{ animationDelay: `${i * 0.1}s` }}>
            <span className="stat-value">
              <CountUp end={stat.value} decimals={stat.decimals ?? 0} suffix={stat.suffix ?? ''} />
            </span>
            <span className="stat-label">{stat.label}</span>
            <span className="stat-corner stat-corner--tl" aria-hidden="true" />
            <span className="stat-corner stat-corner--br" aria-hidden="true" />
          </div>
        ))}
      </div>
    </ScrollReveal>
  )
}

function BioCard() {
  return (
    <ScrollReveal delay={100}>
      <div className="bio-card" id="bio">
        <div className="bio-label">
          {icons.terminal}
          Career Objective
        </div>
        <p className="bio-text">{personalInfo.bio}</p>
        <div className="bio-scanline" aria-hidden="true" />
      </div>
    </ScrollReveal>
  )
}

function LinksRow() {
  return (
    <ScrollReveal delay={150}>
      <div className="links-row" id="links">
        {socialLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            className="link-chip"
            style={{ animationDelay: `${i * 0.05}s` }}
            target={link.label !== 'Email' ? '_blank' : undefined}
            rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
          >
            {icons[link.icon]}
            {link.label}
            <span className="link-chip-glow" aria-hidden="true" />
          </a>
        ))}
      </div>
    </ScrollReveal>
  )
}

function SkillsSection() {
  return (
    <section className="section" id="skills">
      <ScrollReveal>
        <SectionHeader icon={icons.wrench} title="Security Toolkit" index="03" />
      </ScrollReveal>

      <div className="skill-categories">
        {skillCategories.map((cat, ci) => (
          <ScrollReveal key={cat.title} delay={ci * 100}>
            <div className="skill-category">
              <h3 className="skill-category-title">{cat.title}</h3>
              {cat.skills.map((skill) => (
                <div key={skill.name} className="skill-bar-row">
                  <div className="skill-bar-header">
                    <span>{skill.name}</span>
                    <span className="skill-bar-pct">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ '--level': `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="skills-grid">
          {skills.map((skill, i) => (
            <span key={skill} className="skill-tag" style={{ animationDelay: `${i * 0.03}s` }}>
              {skill}
            </span>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}

function AreasOfInterest() {
  return (
    <section className="section" id="interests">
      <ScrollReveal>
        <SectionHeader icon={icons.crosshair} title="Areas of Interest" index="04" />
      </ScrollReveal>
      <div className="capability-grid">
        {areasOfInterest.map((item, i) => (
          <ScrollReveal key={item.label} delay={i * 80}>
            <div className="capability-card">
              <div className={`capability-icon ${item.style}`}>{item.icon}</div>
              <div className="capability-info">
                <span className="capability-name">{item.label}</span>
                <span className="capability-desc">{item.desc}</span>
              </div>
              <span className="capability-pulse" aria-hidden="true" />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function AboutMeSection() {
  return (
    <section className="section" id="about">
      <ScrollReveal>
        <SectionHeader icon={icons.book} title="Beyond the Terminal" index="02" />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="bio-card bio-card--about">
          <p className="bio-text">{aboutMe}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <ScrollReveal>
        <SectionHeader icon={icons.terminal} title="Experience" index="06" />
      </ScrollReveal>
      <div className="timeline">
        {experience.map((item, i) => (
          <ScrollReveal key={item.title + item.subtitle} delay={i * 100}>
            <div className="timeline-card">
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-header">
                <span className="timeline-title">{item.title}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <ScrollReveal>
        <SectionHeader icon={icons.code} title="Mission Log" index="05" />
      </ScrollReveal>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 80}>
            <TiltCard>
              <a
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
                  <span className={`project-status project-status--${project.status.toLowerCase()}`}>
                    {project.status}
                  </span>
                </div>
                <p className="project-desc">{project.desc}</p>
                <div className="project-footer">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                  <span className="project-arrow">{icons.arrow}</span>
                </div>
              </a>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function EducationSection() {
  return (
    <section className="section" id="education">
      <ScrollReveal>
        <SectionHeader icon={icons.book} title="Education" index="07" />
      </ScrollReveal>
      <div className="timeline">
        {education.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 100}>
            <div className="timeline-card">
              <span className="timeline-node" aria-hidden="true" />
              <div className="timeline-header">
                <span className="timeline-title">{item.title}</span>
                <span className="timeline-date">{item.date}</span>
              </div>
              <p className="timeline-subtitle">{item.subtitle}</p>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function CertificationsSection() {
  return (
    <section className="section" id="certifications">
      <ScrollReveal>
        <SectionHeader icon={icons.award} title="Clearance & Certifications" index="08" />
      </ScrollReveal>
      <div className="cert-list">
        {certifications.map((cert, i) => (
          <ScrollReveal key={cert.name} delay={i * 80}>
            <div className="cert-item">
              <span className="cert-badge verified" />
              <div className="cert-info">
                <span className="cert-name">{cert.name}</span>
                <span className="cert-meta">{cert.issuer} · {cert.year}</span>
              </div>
              <span className="cert-status">Verified</span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function LanguagesSection() {
  return (
    <section className="section" id="languages">
      <ScrollReveal>
        <SectionHeader icon={icons.globe} title="Comm Protocols" index="09" />
      </ScrollReveal>
      <div className="lang-row">
        {languages.map((lang, i) => (
          <ScrollReveal key={lang.name} delay={i * 80}>
            <div className="lang-chip">
              <span className="lang-flag">{lang.flag}</span>
              <div className="lang-info">
                <span>{lang.name}</span>
                <span className="lang-level">{lang.level}</span>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <ScrollReveal>
        <SectionHeader icon={icons.mail} title="Establish Connection" index="10" />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <div className="contact-card">
          <div className="contact-card-bg" aria-hidden="true" />
          <p className="contact-text">
            Ready to collaborate on security research, internships, or open-source projects.
          </p>
          <div className="contact-actions">
            <a href={`mailto:${personalInfo.email}`} className="btn btn--primary btn--lg">
              {icons.mail} Send Encrypted Message
            </a>
            <a href="/resume.pdf" className="btn btn--ghost btn--lg">
              {icons.file} Download Dossier
            </a>
          </div>
          <p className="contact-phone">{personalInfo.phone}</p>
        </div>
      </ScrollReveal>
    </section>
  )
}

function Footer() {
  return (
    <ScrollReveal>
      <footer className="footer" id="footer">
        <div className="footer-hud" aria-hidden="true">
          <span /><span /><span /><span />
        </div>
        <p className="footer-line">
          © {new Date().getFullYear()} <span className="footer-accent">Naveenkumar V</span> · All systems secured
        </p>
        <p className="footer-sub">Built with React & Vite · Encrypted with passion</p>
      </footer>
    </ScrollReveal>
  )
}

function App() {
  const [booted, setBooted] = useState(() => {
    try {
      return sessionStorage.getItem('booted') === '1'
    } catch {
      return false
    }
  })

  const activeSection = useScrollSpy(navSections.map((s) => s.id))

  const handleBootComplete = () => {
    setBooted(true)
    try {
      sessionStorage.setItem('booted', '1')
    } catch {
      /* ignore */
    }
  }

  return (
    <>
      {!booted && <BootLoader onComplete={handleBootComplete} />}

      <MatrixRain />
      <CyberCursor />
      <div className="scan-overlay" aria-hidden="true" />
      <div className="hud-frame" aria-hidden="true">
        <span className="hud-corner hud-corner--tl" />
        <span className="hud-corner hud-corner--tr" />
        <span className="hud-corner hud-corner--bl" />
        <span className="hud-corner hud-corner--br" />
      </div>

      <CyberNav activeSection={activeSection} />

      <main className={`app-main${booted ? ' app-main--visible' : ''}`}>
        <StatusBar />
        <Hero />
        <StatsGrid />
        <BioCard />
        <LinksRow />
        <AboutMeSection />
        <SkillsSection />
        <AreasOfInterest />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <LanguagesSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

export default App
