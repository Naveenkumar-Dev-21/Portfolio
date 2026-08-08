import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { areasOfInterest } from '../data/content'

export default function AreasOfInterest({ index }) {
  return (
    <section className="section" id="interests">
      <SectionHeader index={index} icon={<Icon name="crosshair" />} title="Areas of Interest" />
      <div className="capability-grid">
        {areasOfInterest.map((item) => (
          <div className="capability-card" key={item.label}>
            <div className={`capability-icon ${item.style}`} aria-hidden="true">{item.icon}</div>
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
