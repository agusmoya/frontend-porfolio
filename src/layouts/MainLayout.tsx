import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

import styles from './MainLayout.module.css'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  )
}
