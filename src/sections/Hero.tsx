import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import Button from '../components/Button'
import DevWorkspace from '../components/DevWorkspace'
import { siteConfig } from '../data/site'

export default function Hero() {
  const prefersReducedMotion = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left — Text content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p variants={item} className="text-lg sm:text-xl text-text-secondary mb-2">
              {siteConfig.hero.greeting}
            </motion.p>

            <motion.h1
              variants={item}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
            >
              <span className="text-gradient">{siteConfig.hero.name}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-xl sm:text-2xl font-semibold text-text-primary mb-4"
            >
              {siteConfig.hero.roleLabel}
            </motion.p>

            <motion.p
              variants={item}
              className="text-base sm:text-lg text-text-secondary max-w-lg mb-8 leading-relaxed"
            >
              {siteConfig.hero.headline}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-4 mb-8">
              <a href="#projects">
                <Button size="lg">
                  View Projects
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href={siteConfig.resume} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  <Download className="mr-2" size={18} />
                  Download Resume
                </Button>
              </a>
            </motion.div>

            <motion.div variants={item} className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-10 h-10 rounded-lg bg-bg-secondary border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 transition-all duration-200"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Developer workspace illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="hidden lg:flex justify-center items-center"
          >
            <DevWorkspace />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
