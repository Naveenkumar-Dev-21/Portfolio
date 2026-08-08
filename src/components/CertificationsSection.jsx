import SectionHeader from './SectionHeader'
import Icon from './Icons'
import { certifications } from '../data/content'

export default function CertificationsSection({ index }) {
  return (
    <section className="section" id="certifications">
      <SectionHeader index={index} icon={<Icon name="award" />} title="Certifications" />
      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert" key={cert.name}>
            <span className="cert-mark" aria-hidden="true">
              <Icon name="award" />
            </span>
            <span className="cert-body">
              <span className="cert-name">{cert.name}</span>
              <span className="cert-issuer">{cert.issuer}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
