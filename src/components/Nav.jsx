import { Command } from 'lucide-react'

const links = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  { href: '#experience', label: 'experience' },
  { href: '#credentials', label: 'credentials' },
  { href: '#contact', label: 'contact' },
]

export default function Nav({ onOpenPalette }) {
  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-zinc-100 font-bold">
          <span className="text-lime-400">~</span>/hari
        </a>

        <nav className="hidden md:flex items-center gap-6 font-mono text-[13px] text-zinc-400">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-lime-400 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={onOpenPalette}
          className="flex items-center gap-2 font-mono text-xs text-zinc-400 border border-zinc-700 rounded-lg px-3 py-1.5 hover:border-lime-400/60 hover:text-lime-400 transition-colors"
          aria-label="Open command palette"
        >
          <Command size={12} />
          <span className="hidden sm:inline">ctrl k</span>
          <span className="sm:hidden">menu</span>
        </button>
      </div>
    </header>
  )
}
