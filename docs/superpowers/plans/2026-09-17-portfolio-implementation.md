# Portfolio Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, dark-themed, single-page portfolio for Ruchit Dholkiya with React + TypeScript + Tailwind CSS + Framer Motion.

**Architecture:** Vite + React SPA with smooth scroll navigation. Sections as independent components. Data-driven projects/skills. Design tokens via CSS variables + Tailwind config.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React

**Spec:** `docs/superpowers/specs/2026-09-17-portfolio-design.md`

## Global Constraints

- TypeScript strict mode
- Tailwind CSS for all styling (no inline styles)
- Framer Motion for animations
- 8px spacing grid
- `prefers-reduced-motion` support
- Zero horizontal overflow
- No fake data, no invented information
- Email as configurable constant

---

## File Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Navbar.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ProjectModal.tsx
│   │   └── ScrollReveal.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Process.tsx
│   │   ├── AiWorkflow.tsx
│   │   ├── Education.tsx
│   │   ├── Github.tsx
│   │   └── Contact.tsx
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── site.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── vite.config.ts
└── postcss.config.js
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `index.html`

- [ ] **Step 1: Initialize Vite project**

```bash
npm create vite@latest . -- --template react-ts
```

- [ ] **Step 2: Install dependencies**

```bash
npm install framer-motion lucide-react
npm install -D tailwindcss @tailwindcss/vite
```

- [ ] **Step 3: Configure Tailwind**

Create `tailwind.config.ts`:
```typescript
import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0b',
          secondary: '#111113',
          tertiary: '#1a1a1e',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#71717a',
        },
        border: '#27272a',
        accent: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '16px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
} satisfies Config
```

- [ ] **Step 4: Configure Vite with Tailwind plugin**

Update `vite.config.ts`:
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

- [ ] **Step 5: Create base CSS**

Create `src/styles/globals.css`:
```css
@import "tailwindcss";

:root {
  --bg-primary: #0a0a0b;
  --bg-secondary: #111113;
  --bg-tertiary: #1a1a1e;
  --text-primary: #fafafa;
  --text-secondary: #a1a1aa;
  --text-muted: #71717a;
  --border: #27272a;
  --accent: #3b82f6;
  --accent-hover: #2563eb;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 16px;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, sans-serif;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

- [ ] **Step 6: Update main.tsx**

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

- [ ] **Step 7: Verify dev server runs**

```bash
npm run dev
```

Expected: Server starts without errors

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: scaffold Vite + React + Tailwind project"
```

---

### Task 2: Design Tokens & Utility Components

**Files:**
- Create: `src/lib/utils.ts`, `src/components/Button.tsx`, `src/components/Card.tsx`, `src/components/Badge.tsx`, `src/components/SectionHeading.tsx`, `src/components/ScrollReveal.tsx`

- [ ] **Step 1: Create utils.ts**

```typescript
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Install clsx and tailwind-merge:
```bash
npm install clsx tailwind-merge
```

- [ ] **Step 2: Create Button component**

```typescript
import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-accent text-white hover:bg-accent-hover': variant === 'primary',
            'bg-transparent border border-border text-text-primary hover:bg-bg-tertiary': variant === 'secondary',
            'bg-transparent text-text-secondary hover:text-text-primary': variant === 'ghost',
          },
          {
            'px-4 py-2 text-sm': size === 'sm',
            'px-6 py-3 text-base': size === 'md',
            'px-8 py-4 text-lg': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
```

- [ ] **Step 3: Create Card component**

```typescript
import { forwardRef } from 'react'
import { cn } from '../lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-bg-secondary border border-border rounded-lg p-6',
          hover && 'transition-all duration-200 hover:border-accent/50 hover:shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'
export default Card
```

- [ ] **Step 4: Create Badge component**

```typescript
import { cn } from '../lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent'
  className?: string
}

export default function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-mono rounded-full',
        {
          'bg-bg-tertiary text-text-secondary': variant === 'default',
          'bg-accent/10 text-accent': variant === 'accent',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
```

- [ ] **Step 5: Create SectionHeading component**

```typescript
import { cn } from '../lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 6: Create ScrollReveal component**

```typescript
import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
}

export default function ScrollReveal({ children, delay = 0, direction = 'up' }: ScrollRevealProps) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 7: Verify components render**

Update `App.tsx`:
```typescript
import Button from './components/Button'
import Card from './components/Card'
import Badge from './components/Badge'
import SectionHeading from './components/SectionHeading'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary p-8">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Card hover>
        <h3 className="text-xl font-bold">Card Title</h3>
        <p className="text-text-secondary">Card content</p>
      </Card>
      <Badge>React</Badge>
      <Badge variant="accent">Featured</Badge>
      <SectionHeading title="Section Title" subtitle="Section subtitle" />
    </div>
  )
}
```

Run `npm run dev` and verify components render correctly.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: add design tokens and utility components"
```

---

### Task 3: Data Layer

**Files:**
- Create: `src/data/site.ts`, `src/data/projects.ts`, `src/data/skills.ts`

- [ ] **Step 1: Create site.ts**

```typescript
export const siteConfig = {
  name: 'Ruchit Dholkiya',
  role: 'Full Stack Developer',
  email: 'your-email@example.com', // TODO: Replace with actual email
  github: 'https://github.com/dholkiyaruchit-lab',
  linkedin: '#', // TODO: Replace with actual LinkedIn URL
  tagline: 'Building digital products that actually work.',
  description: 'I build modern full-stack applications with a focus on clean architecture, thoughtful interfaces, and real-world usability.',
  availability: 'Open to opportunities',
  education: [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Shree Saurashtra College Management & Computer Science',
      period: '2025 – Present',
    },
    {
      degree: 'Full Stack Development',
      school: 'Red & White Multimedia Education',
      period: 'Completed',
    },
  ],
  currently: [
    'Studying BCA',
    'Learning full-stack development',
    'Building software products',
    'Exploring AI-powered development',
  ],
}
```

- [ ] **Step 2: Create projects.ts**

```typescript
export interface Project {
  id: number
  title: string
  category: string
  description: string
  features: string[]
  technologies: string[]
  github?: string
  demo?: string
  challenges?: string[]
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'ACADEMI OS',
    category: 'SaaS / Full Stack',
    description: 'A modern School Management System SaaS designed to help school management and administrators manage school operations through a centralized platform.',
    features: [
      'Multi-tenancy support',
      'Authentication & role-based access',
      'Student management & admissions',
      'Attendance tracking',
      'Fee management',
      'Exams & results',
      'Report cards',
      'Teacher management',
      'Timetable scheduling',
      'Dashboard & reports',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    github: '#', // TODO: Replace with actual repo URL
  },
]
```

- [ ] **Step 3: Create skills.ts**

```typescript
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
```

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add site, projects, and skills data"
```

---

### Task 4: Navbar Component

**Files:**
- Create: `src/components/Navbar.tsx`, `src/components/MobileMenu.tsx`

- [ ] **Step 1: Create Navbar component**

```typescript
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '../lib/utils'
import { siteConfig } from '../data/site'
import MobileMenu from './MobileMenu'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Process', href: '#process' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    navLinks.forEach(({ href }) => {
      const element = document.querySelector(href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled ? 'bg-bg-primary/80 backdrop-blur-md border-b border-border' : ''
        )}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-xl font-bold text-text-primary">
              {siteConfig.name.split(' ')[0]}.
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className={cn(
                    'text-sm transition-colors duration-200',
                    activeSection === href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {name}
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-text-secondary hover:text-text-primary"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
        activeSection={activeSection}
      />
    </>
  )
}
```

- [ ] **Step 2: Create MobileMenu component**

```typescript
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  links: { name: string; href: string }[]
  activeSection: string
}

export default function MobileMenu({ isOpen, onClose, links, activeSection }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-64 bg-bg-secondary border-l border-border z-50 md:hidden"
          >
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <nav className="px-4">
              {links.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  onClick={onClose}
                  className={cn(
                    'block py-3 text-lg transition-colors duration-200',
                    activeSection === href.slice(1)
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-text-primary'
                  )}
                >
                  {name}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 3: Verify navbar renders**

Update `App.tsx`:
```typescript
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main className="pt-16">
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Home Section</h1>
        </section>
        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>
      </main>
    </div>
  )
}
```

Run `npm run dev` and verify navbar renders with scroll behavior.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add navbar with mobile menu"
```

---

### Task 5: Hero Section

**Files:**
- Create: `src/sections/Hero.tsx`

- [ ] **Step 1: Create Hero component**

```typescript
import { motion } from 'framer-motion'
import { ArrowRight, Github } from 'lucide-react'
import Button from '../components/Button'
import Badge from '../components/Badge'
import { siteConfig } from '../data/site'

export default function Hero() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: prefersReducedMotion ? 0 : 0.1 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.div variants={item}>
          <Badge variant="accent" className="mb-6">
            {siteConfig.role.toUpperCase()}
          </Badge>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 leading-tight"
        >
          {siteConfig.tagline}
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="#projects">
            <Button size="lg">
              View My Work
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="secondary" size="lg">
              Let's Connect
            </Button>
          </a>
        </motion.div>

        <motion.div variants={item} className="flex items-center justify-center gap-2 text-sm text-text-muted">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          {siteConfig.availability}
        </motion.div>
      </motion.div>
    </section>
  )
}
```

- [ ] **Step 2: Add Hero to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Hero renders**

Run `npm run dev` and verify hero section renders with animations.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add hero section with animations"
```

---

### Task 6: About Section

**Files:**
- Create: `src/sections/About.tsx`

- [ ] **Step 1: Create About component**

```typescript
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import { siteConfig } from '../data/site'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a passionate Full Stack Developer interested in building responsive,
                user-friendly, and scalable web applications. I work across frontend and
                backend development and enjoy taking projects from idea to deployment.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm particularly interested in modern web applications, SaaS products,
                AI-powered applications, and developer tools. I also experiment with
                AI-assisted development workflows.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <Card className="bg-bg-tertiary">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Currently</h3>
              <ul className="space-y-3">
                {siteConfig.currently.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-text-secondary">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
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
```

- [ ] **Step 2: Add About to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify About renders**

Run `npm run dev` and verify about section renders with scroll reveal.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add about section"
```

---

### Task 7: Skills Section

**Files:**
- Create: `src/sections/Skills.tsx`

- [ ] **Step 1: Create Skills component**

```typescript
import { Monitor, Server, Database, Code, Wrench } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import Badge from '../components/Badge'
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Skills & Technologies
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = iconMap[category.icon]
            return (
              <ScrollReveal key={category.name} delay={index * 0.1}>
                <Card hover className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    {IconComponent && <IconComponent className="text-accent" size={24} />}
                    <h3 className="text-xl font-semibold text-text-primary">{category.name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill.name}>{skill.name}</Badge>
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
```

- [ ] **Step 2: Add Skills to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Skills renders**

Run `npm run dev` and verify skills section renders with cards.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add skills section"
```

---

### Task 8: Projects Section

**Files:**
- Create: `src/sections/Projects.tsx`, `src/components/ProjectModal.tsx`

- [ ] **Step 1: Create ProjectModal component**

```typescript
import { motion, AnimatePresence } from 'framer-motion'
import { X, Github, ExternalLink } from 'lucide-react'
import Badge from './Badge'
import Button from './Button'
import { Project } from '../data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-bg-secondary border border-border rounded-lg z-50 overflow-y-auto"
          >
            <div className="sticky top-0 bg-bg-secondary border-b border-border p-4 flex justify-between items-center">
              <h3 className="text-xl font-bold text-text-primary">{project.title}</h3>
              <button
                onClick={onClose}
                className="text-text-secondary hover:text-text-primary"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <Badge variant="accent">{project.category}</Badge>
              </div>

              <p className="text-text-secondary">{project.description}</p>

              {project.features.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Key Features</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-text-secondary">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-lg font-semibold text-text-primary mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </div>

              {project.challenges && project.challenges.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-text-primary mb-3">Challenges</h4>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="text-text-secondary">{challenge}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      <Github className="mr-2" size={18} />
                      GitHub
                    </Button>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <Button>
                      <ExternalLink className="mr-2" size={18} />
                      Live Demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
```

- [ ] **Step 2: Create Projects component**

```typescript
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Card from '../components/Card'
import Badge from '../components/Badge'
import ProjectModal from '../components/ProjectModal'
import { projects, Project } from '../data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            Featured Projects
          </h2>
        </ScrollReveal>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Card
                hover
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-text-muted">
                        {String(project.id).padStart(2, '0')}
                      </span>
                      <Badge variant="accent">{project.category}</Badge>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge>+{project.technologies.length - 4}</Badge>
                      )}
                    </div>
                  </div>

                  <motion.div
                    className="text-text-muted group-hover:text-accent transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ArrowUpRight size={24} />
                  </motion.div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
```

- [ ] **Step 3: Add Projects to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
    </div>
  )
}
```

- [ ] **Step 4: Verify Projects renders**

Run `npm run dev` and verify projects section renders with modal.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: add projects section with modal"
```

---

### Task 9: Process Section

**Files:**
- Create: `src/sections/Process.tsx`

- [ ] **Step 1: Create Process component**

```typescript
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
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-12 text-center">
            How I Build
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Vertical line for mobile */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border md:hidden" />

          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2" />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <ScrollReveal key={step.number} delay={index * 0.1}>
                  <div className="relative flex items-start md:flex-col md:items-center md:text-center gap-4 md:gap-0">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-bg-primary border border-border rounded-full flex items-center justify-center">
                      <IconComponent className="text-accent" size={24} />
                    </div>
                    <div className="md:mt-4">
                      <span className="text-sm font-mono text-text-muted">{step.number}</span>
                      <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                      <p className="text-sm text-text-secondary mt-1">{step.description}</p>
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
```

- [ ] **Step 2: Add Process to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Process renders**

Run `npm run dev` and verify process section renders with timeline.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add process section"
```

---

### Task 10: AI Workflow Section

**Files:**
- Create: `src/sections/AiWorkflow.tsx`

- [ ] **Step 1: Create AiWorkflow component**

```typescript
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
          <Card className="bg-gradient-to-br from-bg-secondary to-bg-tertiary">
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
```

- [ ] **Step 2: Add AiWorkflow to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <AiWorkflow />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify AiWorkflow renders**

Run `npm run dev` and verify AI workflow section renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add AI workflow section"
```

---

### Task 11: Education Section

**Files:**
- Create: `src/sections/Education.tsx`

- [ ] **Step 1: Create Education component**

```typescript
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
                  <div className="pt-2">
                    <span className="text-sm font-mono text-text-muted">{entry.period}</span>
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
```

- [ ] **Step 2: Add Education to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'
import Education from './sections/Education'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <AiWorkflow />
        <Education />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Education renders**

Run `npm run dev` and verify education section renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add education section"
```

---

### Task 12: GitHub Section

**Files:**
- Create: `src/sections/Github.tsx`

- [ ] **Step 1: Create Github component**

```typescript
import { Github as GithubIcon } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { siteConfig } from '../data/site'

export default function Github() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <GithubIcon className="mx-auto mb-6 text-text-secondary" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Explore My GitHub
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Check out my open source contributions and personal projects.
          </p>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg">
              <GithubIcon className="mr-2" size={18} />
              View GitHub Profile
            </Button>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Github to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'
import Education from './sections/Education'
import Github from './sections/Github'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <AiWorkflow />
        <Education />
        <Github />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Github renders**

Run `npm run dev` and verify GitHub section renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add GitHub section"
```

---

### Task 13: Contact Section

**Files:**
- Create: `src/sections/Contact.tsx`

- [ ] **Step 1: Create Contact component**

```typescript
import { Github, Mail, ExternalLink } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Button from '../components/Button'
import { siteConfig } from '../data/site'

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Have an idea? Let's build it.
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Whether you're building a product, improving an existing application,
            or exploring a new idea, I'd love to hear about it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="lg">
                <Github className="mr-2" size={18} />
                GitHub
              </Button>
            </a>
            <a href={`mailto:${siteConfig.email}`}>
              <Button variant="secondary" size="lg">
                <Mail className="mr-2" size={18} />
                Email Me
              </Button>
            </a>
            <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
              <Button size="lg">
                <ExternalLink className="mr-2" size={18} />
                Let's Connect
              </Button>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
```

- [ ] **Step 2: Add Contact to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'
import Education from './sections/Education'
import Github from './sections/Github'
import Contact from './sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <AiWorkflow />
        <Education />
        <Github />
        <Contact />
      </main>
    </div>
  )
}
```

- [ ] **Step 3: Verify Contact renders**

Run `npm run dev` and verify contact section renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add contact section"
```

---

### Task 14: Footer

**Files:**
- Create: `src/components/Footer.tsx`

- [ ] **Step 1: Create Footer component**

```typescript
import { Github, Linkedin, Mail } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-text-primary font-semibold">{siteConfig.name}</p>
            <p className="text-sm text-text-muted">{siteConfig.role}</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-text-muted hover:text-text-primary transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Add Footer to App.tsx**

```typescript
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Process from './sections/Process'
import AiWorkflow from './sections/AiWorkflow'
import Education from './sections/Education'
import Github from './sections/Github'
import Contact from './sections/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Process />
        <AiWorkflow />
        <Education />
        <Github />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Step 3: Verify Footer renders**

Run `npm run dev` and verify footer renders.

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add footer component"
```

---

### Task 15: SEO & Accessibility

**Files:**
- Modify: `index.html`, `public/favicon.svg`

- [ ] **Step 1: Update index.html with SEO metadata**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ruchit Dholkiya — Full Stack Developer building modern web applications, SaaS products, and AI-powered experiences." />
    <meta name="keywords" content="Full Stack Developer, React, Node.js, TypeScript, MERN Stack, Web Developer" />
    <meta name="author" content="Ruchit Dholkiya" />

    <!-- Open Graph -->
    <meta property="og:title" content="Ruchit Dholkiya — Full Stack Developer" />
    <meta property="og:description" content="Full Stack Developer building modern web applications, SaaS products, and AI-powered experiences." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://your-domain.com" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ruchit Dholkiya — Full Stack Developer" />
    <meta name="twitter:description" content="Full Stack Developer building modern web applications, SaaS products, and AI-powered experiences." />

    <title>Ruchit Dholkiya — Full Stack Developer</title>

    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ruchit Dholkiya",
      "jobTitle": "Full Stack Developer",
      "url": "https://your-domain.com",
      "sameAs": [
        "https://github.com/dholkiyaruchit-lab"
      ]
    }
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 2: Create favicon.svg**

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="16" fill="#0a0a0b"/>
  <text x="50" y="65" font-family="Inter, system-ui, sans-serif" font-size="50" font-weight="bold" fill="#3b82f6" text-anchor="middle">R</text>
</svg>
```

- [ ] **Step 3: Add proper heading hierarchy check**

Verify all sections use proper heading hierarchy (h1 → h2 → h3, no skips).

- [ ] **Step 4: Commit**

```bash
git add -A
git commit -m "feat: add SEO metadata and accessibility"
```

---

### Task 16: Build & Test

**Files:**
- Modify: `src/App.tsx` (final assembly)

- [ ] **Step 1: Run TypeScript check**

```bash
npm run build
```

Expected: No TypeScript errors

- [ ] **Step 2: Run lint**

```bash
npm run lint
```

Expected: No lint errors

- [ ] **Step 3: Test responsive design**

Open browser and test at:
- 320px
- 375px
- 768px
- 1024px
- 1440px

Verify:
- No horizontal overflow
- Mobile menu works
- All sections render correctly
- Animations work

- [ ] **Step 4: Test accessibility**

- Tab through all interactive elements
- Verify focus states are visible
- Check color contrast

- [ ] **Step 5: Test prefers-reduced-motion**

Enable reduced motion in browser settings and verify animations are disabled.

- [ ] **Step 6: Final commit**

```bash
git add -A
git commit -m "feat: complete portfolio website"
```
