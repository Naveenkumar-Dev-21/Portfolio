import SectionHeader from './SectionHeader.jsx'
import TimelineCard from './TimelineCard.jsx'
import { icons } from './Icons.jsx'
import { education } from '../data/content.js'

export default function EducationSection() {
  return (
    <section className="section fade-up fade-up-6" id="education">
      <SectionHeader icon={icons.book} title="Education" />
      {education.map((item) => (
        <TimelineCard key={item.title} {...item} />
      ))}
    </section>
  )
}
