import { Hero } from '@/components/hero'
import { Metrics } from '@/components/metrics'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Skills } from '@/components/skills'
import { Training } from '@/components/training'
import { Interests } from '@/components/interests'
import { Certifications } from '@/components/certifications'
import { Education } from '@/components/education'
import { Beyond } from '@/components/beyond'

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Training />
      <Interests />
      <Certifications />
      <Education />
      <Beyond />
    </>
  )
}