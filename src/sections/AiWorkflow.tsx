import { Brain, Zap, Bug, RefreshCw, Search, TrendingUp } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'

const capabilities = [
  { icon: Brain, text: 'Explore ideas' },
  { icon: Zap, text: 'Prototype faster' },
  { icon: Bug, text: 'Debug' },
  { icon: RefreshCw, text: 'Refactor' },
  { icon: Search, text: 'Research technical approaches' },
  { icon: TrendingUp, text: 'Improve development productivity' },
]

export default function AiWorkflow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <Card className="bg-bg-tertiary border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Building with AI
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                I use modern AI-assisted development workflows to accelerate my development
                process while remaining responsible for architecture, implementation, debugging,
                testing, and product decisions.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => {
                const IconComponent = capability.icon
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-bg-primary/50 rounded-lg"
                  >
                    <IconComponent className="text-accent flex-shrink-0" size={20} />
                    <span className="text-text-secondary">{capability.text}</span>
                  </div>
                )
              })}
            </div>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  )
}
