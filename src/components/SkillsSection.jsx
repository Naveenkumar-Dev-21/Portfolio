import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { skills } from '../data/content.js'

export default function SkillsSection() {
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
