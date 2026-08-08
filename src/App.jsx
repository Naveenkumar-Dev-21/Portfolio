import StatusBar from './components/StatusBar.jsx'
import Hero from './components/Hero.jsx'
import BioCard from './components/BioCard.jsx'
import LinksRow from './components/LinksRow.jsx'
import AboutMeSection from './components/AboutMeSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import AreasOfInterest from './components/AreasOfInterest.jsx'
import StatsSection from './components/StatsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import EducationSection from './components/EducationSection.jsx'
import CertificationsSection from './components/CertificationsSection.jsx'
import LanguagesSection from './components/LanguagesSection.jsx'
import Footer from './components/Footer.jsx'

/* Page order lives here. To add a section: build it in
   src/components/, drop its data in src/data/, then add
   the tag below wherever you want it to appear. */
function App() {
  return (
    <>
      <StatusBar />
      <Hero />
      <BioCard />
      <LinksRow />
      <AboutMeSection />
      <SkillsSection />
      <AreasOfInterest />
      <StatsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <CertificationsSection />
      <LanguagesSection />
      <Footer />
    </>
  )
}

export default App
