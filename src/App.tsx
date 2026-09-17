import { ThemeProvider } from './context/ThemeContext'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Stats from './components/Stats'
import TechMarquee from './components/TechMarquee'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'
import Education from './sections/Education'
import Github from './sections/Github'
import Contact from './sections/Contact'

export default function App() {
  return (
    <ThemeProvider>
      <ScrollProgress />
      <div className="min-h-screen bg-bg-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Hero />
          <About />
          <Stats />
          <TechMarquee />
          <Skills />
          <Projects />
          <Process />
          <AiWorkflow />
          <Education />
          <Github />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </ThemeProvider>
  )
}
