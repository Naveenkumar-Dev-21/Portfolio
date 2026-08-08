import SectionHeader from './SectionHeader.jsx'
import TimelineCard from './TimelineCard.jsx'
import { icons } from './Icons.jsx'
import { experience } from '../data/content.js'

export default function ExperienceSection() {
  return (
    <section className="section fade-up fade-up-5" id="experience">
      <SectionHeader icon={icons.terminal} title="Experience" />
      {experience.map((item) => (
        <TimelineCard key={item.title + item.subtitle} {...item} />
      ))}
    </section>
  )
}
