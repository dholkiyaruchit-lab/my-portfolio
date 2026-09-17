import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Palette } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { cn } from '../lib/utils'
import { useTheme, themes } from '../context/ThemeContext'
import { siteConfig } from '../data/site'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { name: string; href: string }[]
  activeSection: string
}

export default function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    if (isOpen) {
      closeButtonRef.current?.focus()
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }

      if (e.key === 'Tab' && menuRef.current) {
        const focusable = menuRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        )
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            ref={menuRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-bg-secondary border-l border-border z-50 md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex justify-end p-4">
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="px-4">
              {links.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={onClose}
                  className={cn(
                    'block py-3 text-lg transition-colors duration-200 min-h-[44px] flex items-center',
                    activeSection === href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {name}
                </a>
              ))}
            </nav>
            <div className="px-4 mt-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2 mb-3">
                <Palette size={14} className="text-text-muted" />
                <span className="text-xs text-text-muted uppercase tracking-wider">Accent</span>
              </div>
              <div className="flex items-center gap-2 mb-4">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 transition-all duration-200 flex-shrink-0',
                      theme === t.id ? 'scale-110 border-white/80 ring-2 ring-white/20' : 'border-transparent hover:scale-110 hover:border-white/30'
                    )}
                    style={{ backgroundColor: t.color }}
                    aria-label={t.label}
                  />
                ))}
              </div>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-lg transition-colors"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
