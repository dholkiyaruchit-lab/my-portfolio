import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="relative py-10 px-4 sm:px-6 lg:px-8 border-t border-border/50">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo + role */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm font-bold">
              R
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-text-primary">{siteConfig.name}</p>
              <p className="text-xs text-text-muted">{siteConfig.role}</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-1">
            {[
              { icon: Github, href: siteConfig.github, label: 'GitHub' },
              { icon: Linkedin, href: siteConfig.linkedin, label: 'LinkedIn' },
              { icon: Mail, href: `mailto:${siteConfig.email}`, label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-text-muted hover:text-accent hover:bg-accent/5 transition-all duration-200"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted flex items-center gap-1">
            Built with <Heart size={10} className="text-red-500 fill-red-500" /> & React
          </p>
        </div>
      </div>
    </footer>
  )
}
