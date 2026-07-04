import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hash, FileDown, Copy, Github, Linkedin, CornerDownLeft } from 'lucide-react'
import { EMAIL, GITHUB, LINKEDIN, RESUME } from '../data'

const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const ACTIONS = [
  { id: 'about', label: 'go to: about', icon: Hash, run: () => goto('about') },
  { id: 'projects', label: 'go to: projects', icon: Hash, run: () => goto('projects') },
  { id: 'experience', label: 'go to: experience', icon: Hash, run: () => goto('experience') },
  { id: 'skills', label: 'go to: skills', icon: Hash, run: () => goto('skills') },
  { id: 'credentials', label: 'go to: credentials', icon: Hash, run: () => goto('credentials') },
  { id: 'contact', label: 'go to: contact', icon: Hash, run: () => goto('contact') },
  { id: 'cv', label: 'download cv', icon: FileDown, run: () => window.open(RESUME, '_blank') },
  { id: 'email', label: 'copy email address', icon: Copy, run: () => navigator.clipboard.writeText(EMAIL) },
  { id: 'github', label: 'open github', icon: Github, run: () => window.open(GITHUB, '_blank') },
  { id: 'linkedin', label: 'open linkedin', icon: Linkedin, run: () => window.open(LINKEDIN, '_blank') },
]

export default function CommandPalette({ open, setOpen }) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)

  const results = ACTIONS.filter((a) => a.label.includes(query.toLowerCase().trim()))

  // Global shortcut + reset on open
  useEffect(() => {
    const onKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((v) => !v)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [setOpen])

  useEffect(() => {
    if (open) {
      setQuery('')
      setIndex(0)
      setTimeout(() => inputRef.current?.focus(), 30)
    }
  }, [open])

  const run = (action) => {
    setOpen(false)
    action.run()
  }

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => Math.min(i + 1, results.length - 1))
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => Math.max(i - 1, 0))
    }
    if (e.key === 'Enter' && results[index]) run(results[index])
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center px-4 pt-[18vh]"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: -8 }}
            transition={{ duration: 0.15 }}
            className="w-full max-w-lg rounded-xl border border-zinc-700 bg-[#0c0c0e] shadow-2xl overflow-hidden font-mono"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 px-4 border-b border-zinc-800">
              <span className="text-lime-400 text-sm">$</span>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value)
                  setIndex(0)
                }}
                onKeyDown={onInputKey}
                placeholder="type a command…"
                className="w-full bg-transparent py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
              />
            </div>

            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-zinc-600">command not found: {query}</li>
              )}
              {results.map((a, i) => (
                <li key={a.id}>
                  <button
                    onClick={() => run(a)}
                    onMouseEnter={() => setIndex(i)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                      i === index ? 'bg-lime-400/10 text-lime-400' : 'text-zinc-400'
                    }`}
                  >
                    <a.icon size={14} className="flex-shrink-0" />
                    <span className="flex-1">{a.label}</span>
                    {i === index && <CornerDownLeft size={13} className="text-zinc-600" />}
                  </button>
                </li>
              ))}
            </ul>

            <div className="px-4 py-2 border-t border-zinc-800 text-[11px] text-zinc-600 flex gap-4">
              <span>↑↓ navigate</span>
              <span>↵ run</span>
              <span>esc close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
