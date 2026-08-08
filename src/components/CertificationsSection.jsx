import SectionHeader from './SectionHeader.jsx'
import { icons } from './Icons.jsx'
import { certifications } from '../data/content.js'

export default function CertificationsSection() {
  return (
    <section className="section fade-up fade-up-7" id="certifications">
      <SectionHeader icon={icons.award} title="Certifications" />
      <div className="cert-list">
        {certifications.map((cert) => (
          <div key={cert} className="cert-item">
            <span className="cert-badge verified" />
            <span className="cert-name">{cert}</span>
            <span className="cert-status">Verified</span>
          </div>
        ))}
      </div>
    </section>
  )
}
