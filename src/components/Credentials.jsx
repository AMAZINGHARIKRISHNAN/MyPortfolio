import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Carousel from './Carousel'

const achievements = [
  '/assets/images/achievements/achievement-1.png',
  '/assets/images/achievements/achievement-2.png',
  '/assets/images/achievements/achievement-3.png',
  '/assets/images/achievements/achievement-4.png',
  '/assets/images/achievements/achievement-5.png',
  '/assets/images/achievements/achievement-6.jpg',
  '/assets/images/achievements/achievement-7.jpg',
  '/assets/images/achievements/achievement-8.jpg',
]

const certifications = [
  '/assets/images/certifications/certification-1.jpeg',
  '/assets/images/certifications/certification-2.jpeg',
  '/assets/images/certifications/certification-3.png',
  '/assets/images/certifications/certification-4.png',
  '/assets/images/certifications/certification-5.png',
  '/assets/images/certifications/certification-6.jpg',
  '/assets/images/certifications/certification-7.png',
]

export default function Credentials() {
  const [tab, setTab] = useState('achievements')

  return (
    <article className="h-full flex flex-col gap-5 lg:gap-6">
      <header className="flex-shrink-0">
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          My <span className="text-cyan-400">Credentials</span>
        </h2>
        <div className="mt-2 w-12 h-0.5 bg-cyan-400 rounded-full" />
      </header>

      {/* Toggle */}
      <div className="flex-shrink-0 flex gap-2">
        {['achievements', 'certifications'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-5 py-2 lg:px-6 lg:py-2.5 rounded-xl text-sm lg:text-base font-medium capitalize transition-all ${
              tab === t
                ? 'bg-cyan-400 text-[#080c14]'
                : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Carousel fills remaining space */}
      <div className="flex-1 min-h-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Carousel
              items={tab === 'achievements' ? achievements : certifications}
              altPrefix={tab === 'achievements' ? 'Achievement' : 'Certification'}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </article>
  )
}
