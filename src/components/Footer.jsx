import { Github, Linkedin } from 'lucide-react'
import { GITHUB, LINKEDIN } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 mt-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-zinc-500">
          <span className="text-lime-400">$</span> exit <span className="text-zinc-700">·</span> © 2026 Harikrishnan P
        </p>
        <div className="flex items-center gap-4">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-zinc-500 hover:text-lime-400 transition-colors">
            <Github size={16} />
          </a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-zinc-500 hover:text-lime-400 transition-colors">
            <Linkedin size={16} />
          </a>
          <span className="font-mono text-xs text-zinc-600">react · vite · tailwind</span>
        </div>
      </div>
    </footer>
  )
}
