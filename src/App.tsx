import { MainLayout } from './layouts/MainLayout'

import { useSectionTracking } from './hooks/useSectionTracking'

import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Hero } from './pages/hero/Hero'
import { Projects } from './pages/projects/Projects'

const SECTIONS_TO_TRACK = ['hero', 'about', 'projects', 'contact']

export default function App() {
  useSectionTracking(SECTIONS_TO_TRACK)

  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  )
}
