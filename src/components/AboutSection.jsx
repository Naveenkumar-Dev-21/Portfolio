import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { aboutMe, languages } from '../data/content'

export default function AboutSection({ index }) {
  return (
    <section className="section" id="about">
      <SectionHeader index={index} icon={<Icon name="book" />} title="Beyond the Terminal" />
      <div className="about">
        <p className="about-text">{aboutMe}</p>
        <div className="about-langs">
          <span className="about-langs-label">Languages</span>
          <div className="lang-row">
            {languages.map((lang) => (
              <span className="lang-chip" key={lang.name}>
                <span aria-hidden="true">{lang.flag}</span>
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
