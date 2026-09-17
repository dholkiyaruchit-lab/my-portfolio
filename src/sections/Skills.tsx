import { Monitor, Server, Database, Code, Wrench } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import { skillCategories } from '../data/skills'

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Code,
  Wrench,
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary section-glow-top">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              Skills & Technologies
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon]
            return (
              <ScrollReveal key={category.name} delay={index * 0.08}>
                <Card hover className="h-full group">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/30 transition-all duration-300">
                      {IconComponent && <IconComponent className="text-accent" size={20} />}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary">{category.name}</h3>
                      <p className="text-xs text-text-muted">{category.skills.length} technologies</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-2.5 py-1 text-xs font-mono text-text-secondary bg-bg-tertiary/50 border border-border/40 rounded-md hover:border-accent/30 hover:text-accent transition-colors duration-200 cursor-default"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </Card>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
