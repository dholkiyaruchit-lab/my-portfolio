import { Lightbulb, PenTool, Code, TestTube, Rocket } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'

const steps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Understand the problem and requirements.',
    icon: Lightbulb,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Plan the experience and architecture.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Build',
    description: 'Develop frontend, backend and database.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Test',
    description: 'Fix bugs and improve usability.',
    icon: TestTube,
  },
  {
    number: '05',
    title: 'Deploy',
    description: 'Deploy and continuously improve.',
    icon: Rocket,
  },
]

export default function Process() {
  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              How I Build
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent md:hidden" />
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <ScrollReveal key={step.number} delay={index * 0.08}>
                  <div className="relative flex items-start gap-4 md:flex-col md:items-center md:text-center md:gap-0">
                    <div className="relative z-10 flex-shrink-0 w-14 h-14 bg-bg-primary border border-accent/20 rounded-full flex items-center justify-center shadow-[0_0_16px_-4px_rgba(59,130,246,0.15)]">
                      <IconComponent className="text-accent" size={20} />
                    </div>
                    <div className="pt-1 md:pt-0 md:mt-4">
                      <span className="text-[10px] font-mono text-accent/60 uppercase tracking-widest">{step.number}</span>
                      <h3 className="text-base font-semibold text-text-primary mt-0.5">{step.title}</h3>
                      <p className="text-xs text-text-muted mt-1 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
