import ScrollReveal from './ScrollReveal'

const stats = [
  { value: '4+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '1+', label: 'Years Learning' },
  { value: '50+', label: 'Commits' },
]

export default function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-4">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</p>
                <p className="text-sm text-text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
