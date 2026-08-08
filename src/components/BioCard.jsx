import { icons } from './Icons.jsx'
import { personalInfo } from '../data/content.js'

export default function BioCard() {
  return (
    <div className="bio-card fade-up fade-up-3" id="bio">
      <div className="bio-label">
        {icons.terminal}
        Career Objective
      </div>
      <p className="bio-text">{personalInfo.bio}</p>
    </div>
  )
}
