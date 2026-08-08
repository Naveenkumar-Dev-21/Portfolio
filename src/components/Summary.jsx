import Icon from './Icons'
import { personalInfo } from '../data/content'

export default function Summary() {
  return (
    <section className="summary" id="summary">
      <div className="summary-label">
        <Icon name="terminal" />
        Profile
      </div>
      <p className="summary-text">{personalInfo.bio}</p>
    </section>
  )
}
