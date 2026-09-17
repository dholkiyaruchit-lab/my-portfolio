import { Github as GithubIcon, ArrowRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { siteConfig } from '../data/site'

export default function Github() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="relative p-10 md:p-14 rounded-2xl bg-bg-secondary border border-border/50 overflow-hidden group">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.04] via-transparent to-accent/[0.02] pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-bg-tertiary border border-border/50 flex items-center justify-center group-hover:border-accent/30 transition-colors duration-300">
                <GithubIcon className="text-text-secondary group-hover:text-accent transition-colors duration-300" size={26} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">
                Open Source & Projects
              </h2>
              <p className="text-text-secondary mb-8 max-w-md mx-auto">
                Explore my contributions, side projects, and experiments on GitHub.
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button size="lg">
                  View GitHub
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
