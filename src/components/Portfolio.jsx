import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: "The Nest's AdminXpert",
    category: 'web',
    image: '/assets/images/projects/adminxpert.png',
    desc: 'Administrative management platform with custom workflows for school operations.',
    tech: ['React', 'Firebase', 'CSS3'],
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'MSEC ExamCell',
    category: 'web',
    image: '/assets/images/projects/examcell.png',
    desc: 'Examination cell management system for Meenakshi Sundararajan Engineering College.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'EmpoweringVoters',
    category: 'web',
    image: '/assets/images/projects/empoweringvoters.png',
    desc: 'Voter education and awareness platform with interactive features.',
    tech: ['React', 'Node.js', 'MySQL'],
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'TheNestSecurity',
    category: 'mobile',
    image: '/assets/images/projects/nestsecurity.gif',
    desc: 'Mobile security and monitoring application for The Nest School campus.',
    tech: ['Flutter', 'Firebase'],
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Service Register',
    category: 'web',
    image: '/assets/images/projects/serviceregister.png',
    desc: 'Digital service registration and tracking system for operational management.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'MedScan Master',
    category: 'web',
    image: '/assets/images/projects/medscan.png',
    desc: 'Medical document scanning and intelligent management application.',
    tech: ['Python', 'React', 'Firebase'],
    github: '#',
    live: '#',
  },
]

const filters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
]

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter((p) => p.category === active)

  return (
    <article className="space-y-8 lg:space-y-10">
      <header>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          My <span className="text-cyan-400">Portfolio</span>
        </h2>
        <div className="mt-2 w-12 h-0.5 bg-cyan-400 rounded-full" />
      </header>

      <div className="flex gap-3 flex-wrap">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActive(f.id)}
            className={`px-5 py-2 lg:px-6 lg:py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all ${
              active === f.id
                ? 'bg-cyan-400 text-[#080c14]'
                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
        <AnimatePresence>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.22 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.07)] flex flex-col"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-black/20 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 lg:p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-white text-base lg:text-lg leading-snug">{project.title}</h3>
                  <div className="flex gap-1.5 flex-shrink-0">
                    {project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                        <Github size={13} />
                      </a>
                    )}
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-colors">
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs lg:text-sm text-slate-400 leading-relaxed">{project.desc}</p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-cyan-400/10 text-cyan-400 border border-cyan-400/15">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </article>
  )
}
