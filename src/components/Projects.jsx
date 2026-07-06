import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import Section from './Section'
import { projects } from '../data'
import { useT } from '../i18n'

const filters = ['all', 'web', 'mobile']

export default function Projects() {
  const t = useT()
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <Section id="projects" cmd={`${t.projects.cmd}${t.projects.filters[active]}`} title={t.projects.title}>
      <div className="flex gap-2 mb-8 font-mono text-sm">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              active === f
                ? 'bg-lime-400 text-zinc-950 font-bold'
                : 'border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600'
            }`}
          >
            {t.projects.filters[f]}
          </button>
        ))}
      </div>

      <motion.div layout className="grid sm:grid-cols-2 gap-5">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="group rounded-xl border border-zinc-800 bg-[#0c0c0e] overflow-hidden hover:border-lime-400/40 transition-colors"
            >
              {/* window bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/60">
                <span className="font-mono text-xs text-zinc-400">
                  <span className="text-zinc-600">{String(i + 1).padStart(2, '0')}</span>{' '}
                  {p.id}
                  <span className="text-zinc-600">.{p.category === 'mobile' ? 'apk' : 'app'}</span>
                </span>
                <div className="flex gap-2">
                  {p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository"
                      className="text-zinc-500 hover:text-lime-400 transition-colors">
                      <Github size={14} />
                    </a>
                  )}
                  {p.live !== '#' && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label="Live site"
                      className="text-zinc-500 hover:text-lime-400 transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="aspect-video overflow-hidden bg-black/40">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ${
                    p.fit === 'contain' ? 'object-contain p-2' : 'object-cover'
                  }`}
                />
              </div>

              <div className="p-5">
                <h3 className="font-mono font-bold text-zinc-100 text-base">{p.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-2">{t.projects.desc[p.id] ?? p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] px-2 py-1 rounded bg-lime-400/10 text-lime-400/90 border border-lime-400/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
