import { useState } from 'react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import Badge from '../components/Badge'
import ProjectModal from '../components/ProjectModal'
import { projects, Project } from '../data/projects'

const miniCodeLines = [
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'import' }, { c: 'text-[#abb2bf]', t: ' {' }, { c: 'text-[#e5c07b]', t: ' useState' }, { c: 'text-[#abb2bf]', t: ' } ' }, { c: 'text-[#c678dd]', t: 'from' }, { c: 'text-[#98c379]', t: " 'react'" }] },
  { indent: 0, tokens: [{ c: 'text-[#c678dd]', t: 'const' }, { c: 'text-[#e06c75]', t: ' app' }, { c: 'text-[#56b6c2]', t: ' = ' }, { c: 'text-[#c678dd]', t: '() =>' }, { c: 'text-[#abb2bf]', t: ' {' }] },
  { indent: 1, tokens: [{ c: 'text-[#c678dd]', t: 'return' }, { c: 'text-[#abb2bf]', t: ' (' }] },
  { indent: 2, tokens: [{ c: 'text-[#e06c75]', t: '<div' }, { c: 'text-[#d19a66]', t: ' className' }, { c: 'text-[#abb2bf]', t: '=' }, { c: 'text-[#98c379]', t: '"app"' }, { c: 'text-[#e06c75]', t: '>' }] },
  { indent: 3, tokens: [{ c: 'text-[#e06c75]', t: '<h1>' }, { c: 'text-[#abb2bf]', t: 'Hello World' }, { c: 'text-[#e06c75]', t: '</h1>' }] },
  { indent: 2, tokens: [{ c: 'text-[#e06c75]', t: '</div>' }] },
  { indent: 1, tokens: [{ c: 'text-[#abb2bf]', t: ')' }] },
  { indent: 0, tokens: [{ c: 'text-[#abb2bf]', t: '}' }] },
]

function MiniCodePreview() {
  return (
    <div className="hidden md:flex flex-col justify-center w-[180px] flex-shrink-0 pl-6 border-l border-border/30">
      <div className="font-mono text-[9px] leading-[1.8] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
        {miniCodeLines.map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 10}px` }}>
            {line.tokens.map((tok, j) => (
              <span key={j} className={tok.c}>{tok.t}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Featured Projects
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Card
                hover
                className="group accent-stripe overflow-hidden"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center gap-6">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-accent/60 bg-accent/5 px-2 py-0.5 rounded">
                        {String(project.id).padStart(2, '0')}
                      </span>
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 line-clamp-2 text-sm md:text-base">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                      {project.technologies.length > 5 && (
                        <Badge>+{project.technologies.length - 5}</Badge>
                      )}
                    </div>
                  </div>

                  <MiniCodePreview />

                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-text-muted group-hover:text-accent group-hover:border-accent/30 group-hover:bg-accent/5 transition-all duration-300">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </div>
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-text-muted hover:text-text-primary hover:border-border transition-all duration-200"
                        onClick={(e) => e.stopPropagation()}
                        aria-label={`${project.title} GitHub`}
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
