import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import { siteConfig } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 section-glow-top">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
              About Me
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I'm a passionate Full Stack Developer interested in building responsive,
                user-friendly, and scalable web applications. I work across frontend and
                backend development and enjoy taking projects from idea to deployment.
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                I'm particularly interested in modern web applications, SaaS products,
                AI-powered applications, and developer tools. I also experiment with
                AI-assisted development workflows.
              </p>
              {/* Tech stack quick-glance */}
              <div className="flex flex-wrap gap-3 pt-2">
                {['React', 'Node.js', 'TypeScript', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-mono text-accent/70 border border-accent/20 rounded-md">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Card className="bg-bg-tertiary h-full">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Currently</h3>
              <ul className="space-y-3">
                {siteConfig.currently.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
