import { GraduationCap } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import { siteConfig } from '../data/site'

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Education
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {siteConfig.education.map((entry, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="relative flex items-start gap-6">
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-bg-primary border border-border rounded-full flex items-center justify-center">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div className="pt-1">
                    <span className="text-sm font-mono text-accent">{entry.period}</span>
                    <h3 className="text-lg font-semibold text-text-primary">{entry.degree}</h3>
                    <p className="text-text-secondary">{entry.school}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
