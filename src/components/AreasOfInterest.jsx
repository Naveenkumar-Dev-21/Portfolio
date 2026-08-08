import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { areasOfInterest } from '../data/content.js'

export default function AreasOfInterest() {
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
