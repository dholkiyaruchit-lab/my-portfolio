import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink, CheckCircle2, Cpu } from 'lucide-react'
import { useEffect, useRef } from 'react'
import Badge from './Badge'
import { Project } from '../data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

const codeSnippet = [
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'import' }, { c: 'text-[#abb2bf]', t: ' { ' }, { c: 'text-[#e5c07b]', t: 'Router' }, { c: 'text-[#abb2bf]', t: ', ' }, { c: 'text-[#e5c07b]', t: 'Request' }, { c: 'text-[#abb2bf]', t: ', ' }, { c: 'text-[#e5c07b]', t: 'Response' }, { c: 'text-[#abb2bf]', t: ' } ' }, { c: 'text-[#c678dd]', t: 'from' }, { c: 'text-[#98c379]', t: " 'express'" }] },
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'import' }, { c: 'text-[#abb2bf]', t: ' { ' }, { c: 'text-[#e5c07b]', t: 'connectDB' }, { c: 'text-[#abb2bf]', t: ' } ' }, { c: 'text-[#c678dd]', t: 'from' }, { c: 'text-[#98c379]', t: " './config/db'" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: 'text-[#5c6370]', t: '// Initialize Express app' }] },
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'const' }, { c: 'text-[#e06c75]', t: ' app' }, { c: 'text-[#56b6c2]', t: ' = ' }, { c: 'text-[#c678dd]', t: 'express' }, { c: 'text-[#abb2bf]', t: '()' }] },
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'const' }, { c: 'text-[#abb2bf]', t: ' PORT = ' }, { c: 'text-[#d19a66]', t: '5000' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: 'text-[#5c6370]', t: '// Connect to MongoDB' }] },
  { indent: 0, tokens: [{ c: 'text-[#e06c75]', t: 'connectDB' }, { c: 'text-[#abb2bf]', t: '()' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: 'text-[#5c6370]', t: '// Middleware' }] },
  { indent: 0, tokens: [{ c: 'text-[#e06c75]', t: 'app' }, { c: 'text-[#abb2bf]', t: '.use(express.json())' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: 'text-[#5c6370]', t: '// Routes' }] },
  { indent: 0, tokens: [{ c: 'text-[#e06c75]', t: 'app' }, { c: 'text-[#abb2bf]', t: '.use(' }, { c: 'text-[#98c379]', t: "'/api/students'" }, { c: 'text-[#abb2bf]', t: ', studentRoutes)' }] },
  { indent: 0, tokens: [{ c: 'text-[#e06c75]', t: 'app' }, { c: 'text-[#abb2bf]', t: '.use(' }, { c: 'text-[#98c379]', t: "'/api/fees'" }, { c: 'text-[#abb2bf]', t: ', feeRoutes)' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'app' }, { c: 'text-[#abb2bf]', t: '.listen(PORT, () => ' }, { c: 'text-[#c678dd]', t: 'console' }, { c: 'text-[#abb2bf]', t: '.log(' }, { c: 'text-[#98c379]', t: '`Server running on port ${PORT}`' }, { c: 'text-[#abb2bf]', t: '))' }] },
]

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [project])

  useEffect(() => {
    if (!project) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-x-8 md:inset-y-12 lg:inset-x-16 lg:inset-y-12 max-w-5xl mx-auto left-0 right-0 h-fit max-h-[calc(100vh-3rem)] bg-bg-secondary border border-border/50 rounded-2xl z-50 overflow-hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label={`Project: ${project.title}`}
          >
            {/* Header */}
            <div className="relative flex items-center justify-between px-6 py-4 border-b border-border/50 bg-bg-secondary/80 backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-sm font-mono text-text-muted">{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-bg-tertiary transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8 space-y-8">
                {/* Code preview */}
                <div className="bg-bg-primary rounded-xl border border-border/30 overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 border-b border-border/30 bg-bg-tertiary/30">
                    <span className="text-[10px] font-mono text-text-muted">index.ts</span>
                  </div>
                  <pre className="p-4 text-[11px] leading-relaxed font-mono overflow-x-auto">
                    {codeSnippet.map((line, i) => (
                      <div key={i} style={{ paddingLeft: `${line.indent * 12}px` }}>
                        {line.tokens.map((tok, j) => (
                          <span key={j} className={tok.c}>{tok.t}</span>
                        ))}
                      </div>
                    ))}
                  </pre>
                </div>

                {/* Description */}
                <div>
                  <Badge variant="accent">{project.category}</Badge>
                  <p className="text-text-secondary mt-3 leading-relaxed">{project.description}</p>
                </div>

                {/* Features grid */}
                {project.features.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 size={16} className="text-accent" />
                      <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Features</h4>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-bg-primary/50 border border-border/20">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech stack */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Cpu size={16} className="text-accent" />
                    <h4 className="text-sm font-semibold text-text-primary uppercase tracking-wider">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 text-xs font-mono text-accent bg-accent/10 border border-accent/20 rounded-lg">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2 pb-2">
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-text-primary bg-bg-tertiary border border-border/50 hover:border-accent/30 hover:text-accent rounded-xl transition-all duration-200"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-accent hover:bg-accent-hover rounded-xl transition-all duration-200"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
