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
    github: 'https://github.com/Shivam24S/school-management-system',
    demo: 'https://academios-io.netlify.app/',
  },
  {
    id: 2,
    title: 'Resource Hub',
    category: 'Full Stack',
    description: 'A centralized platform for managing and sharing educational resources, enabling easy access and organization of learning materials.',
    features: [
      'Resource categorization & search',
      'Upload & share materials',
      'User authentication',
      'Responsive design',
      'Resource bookmarking',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/dholkiyaruchit-lab/resource-hub',
    demo: 'https://resorax.vercel.app/',
  },
  {
    id: 3,
    title: 'ReformFit',
    category: 'Full Stack',
    description: 'A fitness tracking and workout management platform designed to help users track their fitness journey, log workouts, and monitor progress.',
    features: [
      'Workout logging & tracking',
      'Progress monitoring',
      'User authentication',
      'Responsive design',
      'Exercise library',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/dholkiyaruchit-lab/reformfit-demo',
    demo: 'https://reformfit-demo.vercel.app/',
  },
  {
    id: 4,
    title: 'E-Commerce Forma',
    category: 'Full Stack',
    description: 'A modern e-commerce platform with a clean UI, product management, cart functionality, and secure checkout process.',
    features: [
      'Product catalog & search',
      'Shopping cart',
      'User authentication',
      'Order management',
      'Responsive design',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/dholkiyaruchit-lab/e-commerce-forma',
    demo: 'https://e-commerce-forma-six.vercel.app/',
  },
]
