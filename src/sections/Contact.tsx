import { Github, Mail } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary section-glow-top">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="relative p-8 md:p-12 rounded-2xl bg-bg-primary border border-border overflow-hidden">
            {/* Ambient glow behind CTA */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
                Have an idea? Let's build it.
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Whether you're building a product, improving an existing application,
                or exploring a new idea, I'd love to hear about it.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex"
                >
                  <Button size="lg">
                    <Mail className="mr-2" size={18} />
                    Email Me
                  </Button>
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex"
                >
                  <Button variant="secondary" size="lg">
                    <Github className="mr-2" size={18} />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
