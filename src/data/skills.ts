export interface Skill {
  name: string
  icon?: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Bootstrap' },
      { name: 'React' },
    ],
  },
  {
    name: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js' },
      { name: 'Express.js' },
    ],
  },
  {
    name: 'Database',
    icon: 'Database',
    skills: [
      { name: 'MongoDB' },
      { name: 'Mongoose' },
    ],
  },
  {
    name: 'Languages',
    icon: 'Code',
    skills: [
      { name: 'JavaScript' },
      { name: 'TypeScript' },
      { name: 'Python' },
    ],
  },
  {
    name: 'Tools & Workflow',
    icon: 'Wrench',
    skills: [
      { name: 'Git' },
      { name: 'GitHub' },
      { name: 'REST APIs' },
      { name: 'MVC Architecture' },
      { name: 'Responsive Design' },
      { name: 'AI-assisted Development' },
    ],
  },
]
