import { MainLayout } from './layouts/MainLayout'

import { About } from './pages/about/About'
import { Contact } from './pages/contact/Contact'
import { Hero } from './pages/hero/Hero'
import { Projects } from './pages/projects/Projects'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </MainLayout>
  )
}
