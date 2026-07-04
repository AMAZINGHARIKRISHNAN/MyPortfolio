import { motion } from 'framer-motion'
import { Globe, Smartphone, BrainCircuit } from 'lucide-react'

const services = [
  {
    icon: <BrainCircuit size={26} className="text-cyan-400" />,
    title: 'AI Development',
    desc: 'Building RAG pipelines and intelligent applications powered by large language models.',
  },
  {
    icon: <Globe size={26} className="text-cyan-400" />,
    title: 'Web Development',
    desc: 'Building fast, responsive, and scalable web applications at a professional level.',
  },
  {
    icon: <Smartphone size={26} className="text-cyan-400" />,
    title: 'Mobile Apps',
    desc: 'Developing cross-platform mobile applications with clean UI and smooth UX.',
  },
]

const clients = [
  { name: 'The Nest School', logo: '/assets/images/brand/client-nest.png', url: 'https://thenest.school/' },
  { name: 'MSEC', logo: '/assets/images/brand/client-msec.png', url: 'https://msec.edu.in/' },
]

export default function About() {
  return (
    <article className="h-full flex flex-col gap-4 lg:gap-5">

      {/* Title */}
      <header className="flex-shrink-0">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="mt-2 w-12 h-0.5 bg-cyan-400 rounded-full" />
      </header>

      {/* Two-column body — fills remaining height */}
      <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 overflow-hidden">

        {/* Left: banner + bio + clients */}
        <div className="flex flex-col gap-4 lg:gap-5 overflow-hidden">

          <div className="flex items-start gap-3 bg-cyan-400/10 border border-cyan-400/20 rounded-xl px-4 py-3 flex-shrink-0">
            <span className="text-base mt-0.5 flex-shrink-0">🇯🇵</span>
            <p className="text-sm lg:text-base text-cyan-400 font-medium leading-snug">
              Currently working as AI Software Developer at{' '}
              <span className="font-semibold">Thirdwave Corporation, Japan</span>
            </p>
          </div>

          <p className="text-slate-400 leading-relaxed text-sm lg:text-base flex-shrink-0">
            AI Software Developer based in Japan, working at Thirdwave Corporation on
            Retrieval-Augmented Generation (RAG) systems and intelligent applications. With hands-on
            experience across AI, web, and mobile domains, I specialize in building solutions that
            are both technically robust and user-friendly.
          </p>

          <div className="flex-shrink-0">
            <h3 className="text-base lg:text-lg font-medium text-white mb-3">Clients</h3>
            <div className="flex flex-wrap gap-3">
              {clients.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-center hover:border-cyan-400/30 transition-colors"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="h-10 lg:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Right: service cards */}
        <div className="flex flex-col gap-3 lg:gap-4 overflow-hidden">
          <h3 className="text-base lg:text-lg font-medium text-white flex-shrink-0">What I'm Doing</h3>
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.35 }}
              className="flex-1 min-h-0 bg-white/5 border border-white/10 rounded-2xl p-4 lg:p-5 hover:border-cyan-400/30 transition-colors flex gap-4 items-center"
            >
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                {s.icon}
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm lg:text-base mb-1">{s.title}</h4>
                <p className="text-xs lg:text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </article>
  )
}
