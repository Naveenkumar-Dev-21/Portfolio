import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { education } from '../data/content'

export default function EducationSection({ index }) {
  return (
    <section className="section" id="education">
      <SectionHeader index={index} icon={<Icon name="book" />} title="Education" />
      <ol className="edu">
        {education.map((item) => (
          <li className="edu-item" key={item.title}>
            <span className="edu-node" aria-hidden="true" />
            <div className="edu-top">
              <span className="edu-school">{item.title}</span>
              <span className="edu-date">{item.date}</span>
            </div>
            <p className="edu-degree">{item.subtitle}</p>
            <p className="edu-score">{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
