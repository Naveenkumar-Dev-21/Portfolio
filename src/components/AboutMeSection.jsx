import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { aboutMe } from '../data/content.js'

export default function AboutMeSection() {
  return (
    <section className="section fade-up fade-up-4" id="about">
      <SectionHeader icon={icons.book} title="Beyond the Terminal" />
      <div className="bio-card bio-card-flush">
        <p className="bio-text">{aboutMe}</p>
      </div>
    </section>
  )
}
