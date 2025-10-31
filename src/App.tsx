import { MainLayout } from './layouts/MainLayout'

import { About } from './pages/about/About'
import { Hero } from './pages/hero/Hero'

export default function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
    </MainLayout>
  )
}
