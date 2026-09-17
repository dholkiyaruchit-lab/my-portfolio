# Portfolio Website — Design Spec

## Overview

Premium single-page portfolio for Ruchit Dholkiya (Full Stack Developer). Dark-first, minimal, responsive, accessible. Built as a personal brand site — not a template.

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 18 + TypeScript | Strong typing, component model |
| Build | Vite | Fast dev + optimized builds |
| Styling | Tailwind CSS | Utility-first, design tokens via CSS vars |
| Animation | Framer Motion | Smooth scroll reveal, hero entrance, hover states |
| Icons | Lucide React | Lightweight, tree-shakeable |
| Fonts | Inter (body) + JetBrains Mono (code) | Modern sans + monospace |

**No heavy deps.** Framer Motion is the only non-trivial addition. Everything else is lightweight.

---

## Design System (CSS Variables)

```
--bg-primary: #0a0a0b       (near-black)
--bg-secondary: #111113     (card surfaces)
--bg-tertiary: #1a1a1e      (elevated surfaces)
--text-primary: #fafafa     (headings)
--text-secondary: #a1a1aa   (body)
--text-muted: #71717a       (metadata)
--border: #27272a           (subtle borders)
--accent: #3b82f6           (blue — professional, not neon)
--accent-hover: #2563eb
--radius-sm: 6px
--radius-md: 12px
--radius-lg: 16px
--shadow-card: 0 1px 3px rgba(0,0,0,0.3)
```

8px spacing grid. Tailwind config maps to these.

---

## Page Structure (Single Page, Smooth Scroll)

### 1. Navbar
- Sticky, glass-morphism blur on scroll
- Logo: "Ruchit." (bold, Inter)
- Links: Home, About, Skills, Projects, Process, Education, Contact
- Active section highlight via IntersectionObserver
- Mobile: hamburger menu with slide-in panel
- Framer Motion: fade-in on load

### 2. Hero
- Small badge: "FULL STACK DEVELOPER"
- Heading: "Building digital products that actually work."
- Subtext: 2-line description of focus areas
- CTA: "View My Work" (primary) + "Let's Connect" (secondary)
- Availability indicator: green dot + "Open to opportunities"
- Visual: animated code-editor mockup (CSS-drawn, no images)
  - Terminal-like box with blinking cursor, animated code lines
  - Subtle floating elements (brackets, dots)
- Framer Motion: staggered entrance (badge → heading → subtext → buttons → visual)

### 3. About
- Two-column on desktop, stacked on mobile
- Left: personal intro paragraph
- Right: "Currently" card list (BCA student, learning full-stack, building products, exploring AI dev)
- No headshot (avoid stock images)
- Framer Motion: scroll-reveal from left/right

### 4. Skills
- Category cards: Frontend, Backend, Database, Languages, Tools & Workflow
- Each card: icon + category name + technology badges
- Badges: pill-shaped with icon + name
- No percentages, no progress bars
- Framer Motion: staggered card reveal on scroll

### 5. Projects
- Featured project cards (large, full-width)
- Each card: number (01), category tag, title, description, tech stack pills, GitHub/Demo buttons
- Hover: subtle scale + border color change + arrow icon appears
- Click: modal overlay with project details (Problem → Solution → Features → Tech → Challenges)
- Data-driven from `projects.ts`
- Known project: ACADEMI OS (MERN + TypeScript)
- Framer Motion: cards reveal on scroll, modal enter/exit animation

### 6. Process ("How I Build")
- Horizontal timeline (desktop) / vertical (mobile)
- 5 steps: Understand → Design → Build → Test → Deploy
- Each: number + title + one-line description
- Connected by subtle line
- Framer Motion: steps reveal sequentially on scroll

### 7. AI + Modern Dev ("Building with AI")
- Single card/section explaining AI-assisted workflow
- Points: explore ideas, prototype faster, debug, refactor, research, improve productivity
- Key message: "AI accelerates my workflow; I own architecture, implementation, and decisions"
- Framer Motion: scroll-reveal

### 8. Education
- Clean vertical timeline
- BCA at Shree Saurashtra College (2025–Present)
- Full Stack Development at Red & White Multimedia Education
- Framer Motion: timeline items reveal on scroll

### 9. GitHub CTA
- Section with GitHub link + "Explore My GitHub" button
- No API fetch (curated links preferred for simplicity)
- Framer Motion: scroll-reveal

### 10. Contact
- Heading: "Have an idea? Let's build it."
- Subtext: invitation to collaborate
- Buttons: GitHub, Email (configurable constant), Let's Connect
- Framer Motion: scroll-reveal

### 11. Footer
- Name + role
- Social links: GitHub, LinkedIn (placeholder), Email (placeholder)
- Copyright: © 2026 Ruchit Dholkiya
- No fake links

---

## Animations (Framer Motion)

| Element | Animation | Timing |
|---------|-----------|--------|
| Hero entrance | Staggered fade+slide up | 0.6s total, 0.1s stagger |
| Scroll sections | Fade in + slide up 20px | 0.5s ease-out |
| Cards hover | Scale 1.02 + border glow | 0.2s |
| Buttons | Scale 0.98 on press, bg shift on hover | 0.15s |
| Navbar blur | backdrop-filter on scroll | CSS transition |
| Project modal | Overlay fade + content scale up | 0.3s |
| `prefers-reduced-motion` | All animations disabled | — |

---

## Responsive Breakpoints

| Width | Layout |
|-------|--------|
| 320–425px | Mobile: stacked, hamburger nav, full-width cards |
| 768px | Tablet: 2-column where applicable |
| 1024px+ | Desktop: full layout, horizontal timeline |
| 1440px+ | Max-width container (1200px centered) |

Zero horizontal overflow enforced. Touch targets ≥ 44px.

---

## SEO

- Title: "Ruchit Dholkiya — Full Stack Developer"
- Meta description: accurate, concise
- Open Graph + Twitter card metadata
- Canonical URL placeholder
- Favicon (simple "R" lettermark)
- Structured data (Person schema)
- Semantic HTML (proper headings, landmarks)

---

## Accessibility

- Semantic HTML5 elements
- Heading hierarchy (h1 → h2 → h3, no skips)
- Alt text on all images
- Keyboard-navigable (focus visible states)
- ARIA labels on interactive elements
- Color contrast ≥ 4.5:1
- `prefers-reduced-motion` support

---

## Performance Targets

- No images in initial load (CSS-drawn visuals only)
- Lazy load below-fold sections
- Framer Motion: `lazy` motion values, no layout animations
- Tailwind: purge unused CSS
- Bundle: < 200KB gzipped target

---

## File Structure

```
src/
├── components/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Navbar.tsx
│   ├── MobileMenu.tsx
│   ├── SectionHeading.tsx
│   ├── ProjectModal.tsx
│   └── ScrollReveal.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Process.tsx
│   ├── AiWorkflow.tsx
│   ├── Education.tsx
│   ├── Github.tsx
│   └── Contact.tsx
├── data/
│   ├── projects.ts
│   ├── skills.ts
│   └── site.ts
├── lib/
│   └── utils.ts
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

---

## Data Structures

```typescript
// projects.ts
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  github?: string;
  demo?: string;
  challenges?: string[];
}

// skills.ts
interface SkillCategory {
  name: string;
  icon: string; // Lucide icon name
  skills: { name: string; icon?: string }[];
}

// site.ts
interface SiteConfig {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  education: EducationEntry[];
}
```

---

## Truthfulness Rules

- No invented experience, clients, awards, certifications
- No fake statistics or testimonials
- ACADEMI OS listed as known project, features described honestly
- Placeholder values clearly marked for email, LinkedIn
- "Open to opportunities" as availability status
