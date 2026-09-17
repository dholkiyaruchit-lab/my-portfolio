import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Download, Palette } from 'lucide-react'
import { cn } from '../lib/utils'
import { siteConfig } from '../data/site'
import { useTheme, themes } from '../context/ThemeContext'
import MobileMenu from './MobileMenu'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#process' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const themeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isThemeOpen) return
    const handleClickOutside = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setIsThemeOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isThemeOpen])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-bg-primary/90 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold group-hover:bg-accent/20 transition-colors">
                R
              </div>
              <span className="text-lg font-bold text-text-primary hidden sm:block">
                {siteConfig.name.split(' ')[0]}
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    activeSection === href.slice(1)
                      ? 'text-accent bg-accent/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                  )}
                >
                  {name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-2">
              {/* Theme toggle */}
              <div className="relative flex items-center" ref={themeRef}>
                <button
                  onClick={() => setIsThemeOpen(!isThemeOpen)}
                  className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-200"
                  aria-label="Change accent color"
                >
                  <Palette size={16} />
                </button>
                <AnimatePresence>
                  {isThemeOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 p-2.5 bg-bg-secondary border border-border/50 rounded-xl shadow-xl z-50 min-w-[180px]"
                    >
                      <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2 px-1">Accent</p>
                      <div className="flex flex-wrap gap-2">
                        {themes.map((t) => (
                          <button
                            key={t.id}
                            onClick={() => { setTheme(t.id); setIsThemeOpen(false) }}
                            className={cn(
                              'w-8 h-8 rounded-full border-2 transition-all duration-200 flex-shrink-0',
                              theme === t.id ? 'scale-110 border-white/80 ring-2 ring-white/20' : 'border-transparent hover:scale-110 hover:border-white/30'
                            )}
                            style={{ backgroundColor: t.color }}
                            aria-label={t.label}
                            title={t.label}
                          />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-primary bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200"
              >
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden text-text-secondary hover:text-text-primary p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        activeSection={activeSection}
      />
    </>
  )
}
