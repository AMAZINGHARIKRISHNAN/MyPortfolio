import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hash, FileDown, Copy, Github, Linkedin, CornerDownLeft } from 'lucide-react'
import { EMAIL, GITHUB, LINKEDIN } from '../data'
import { useT } from '../i18n'

const goto = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const SECTIONS = ['about', 'projects', 'experience', 'skills', 'credentials', 'contact']

export default function CommandPalette({ open, setOpen }) {
  const t = useT()
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const inputRef = useRef(null)

  const actions = [
    ...SECTIONS.map((id) => ({ id, label: t.palette.goto[id], icon: Hash, run: () => goto(id) })),
    { id: 'cv', label: t.palette.cv, icon: FileDown, run: () => window.open(t.resume, '_blank') },
    { id: 'email', label: t.palette.email, icon: Copy, run: () => navigator.clipboard.writeText(EMAIL) },
    { id: 'github', label: t.palette.github, icon: Github, run: () => window.open(GITHUB, '_blank') },
    { id: 'linkedin', label: t.palette.linkedin, icon: Linkedin, run: () => window.open(LINKEDIN, '_blank') },
  ]

  const q = query.toLowerCase().trim()
  const results = actions.filter((a) => a.label.toLowerCase().includes(q) || a.id.includes(q))

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
                placeholder={t.palette.placeholder}
                className="w-full bg-transparent py-3.5 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none"
              />
            </div>

            <ul className="max-h-72 overflow-y-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-zinc-600">{t.palette.notFound} {query}</li>
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
              <span>{t.palette.hintNav}</span>
              <span>{t.palette.hintRun}</span>
              <span>{t.palette.hintClose}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
