import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { languages } from '../data/content.js'

export default function LanguagesSection() {
  return (
    <section className="section fade-up fade-up-8" id="languages">
      <SectionHeader icon={icons.globe} title="Languages" />
      <div className="lang-row">
        {languages.map((lang) => (
          <div key={lang.name} className="lang-chip">
            <span className="lang-flag">{lang.flag}</span>
            {lang.name}
          </div>
        ))}
      </div>
    </section>
  )
}
