import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { skillGroups } from '../data/content'

/* Matrix layout: category label in a left column, chips to the right.
   Mirrors how the resume groups these. */
export default function SkillsSection({ index }) {
  return (
    <section className="section" id="skills">
      <SectionHeader index={index} icon={<Icon name="wrench" />} title="Technical Skills" />

      <div className="matrix">
        {skillGroups.map((group) => (
          <div className={`matrix-row matrix-row--${group.accent}`} key={group.label}>
            <div className="matrix-label">
              <span className="matrix-bar" aria-hidden="true" />
              {group.label}
            </div>
            <div className="matrix-items">
              {group.items.map((item) => (
                <span className="matrix-item" key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
