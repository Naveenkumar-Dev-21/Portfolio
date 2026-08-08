import Sidebar from './components/Sidebar'
import Summary from './components/Summary'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import StatsSection from './components/StatsSection'
import AreasOfInterest from './components/AreasOfInterest'
import CertificationsSection from './components/CertificationsSection'
import EducationSection from './components/EducationSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

/* Section order lives here. Each gets its report number from its
   position, so reordering renumbers automatically — to add a section,
   build it in components/, put its data in data/, and drop it in. */
const SECTIONS = [
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
  StatsSection,
  AreasOfInterest,
  CertificationsSection,
  EducationSection,
  AboutSection,
]

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <Summary />
        {SECTIONS.map((Section, i) => (
          <Section key={i} index={i + 1} />
        ))}
        <Footer />
      </main>
    </div>
  )
}
