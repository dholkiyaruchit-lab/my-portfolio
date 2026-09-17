import { skillCategories } from '../data/skills'

const allSkills = skillCategories.flatMap((c) => c.skills.map((s) => s.name))
const doubled = [...allSkills, ...allSkills]

export default function TechMarquee() {
  return (
    <section className="py-10 overflow-hidden border-y border-border/30">
      <div className="flex w-fit" style={{ animation: 'marquee 30s linear infinite' }}>
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="px-4 py-1.5 mx-1 text-xs font-mono text-text-muted/60 border border-border/20 rounded-full whitespace-nowrap hover:text-accent hover:border-accent/30 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
