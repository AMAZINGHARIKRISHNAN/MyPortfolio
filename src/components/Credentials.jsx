import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import Carousel from './Carousel'
import { achievements, certifications } from '../data'

export default function Credentials() {
  const [tab, setTab] = useState('achievements')
  const items = tab === 'achievements' ? achievements : certifications

  return (
    <Section id="credentials" cmd={`open ./${tab}`} title="Credentials">
      <div className="flex gap-2 mb-8 font-mono text-sm">
        {['achievements', 'certifications'].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              tab === t
                ? 'bg-lime-400 text-zinc-950 font-bold'
                : 'border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600'
            }`}
          >
            {t} <span className="opacity-60">({t === 'achievements' ? achievements.length : certifications.length})</span>
          </button>
        ))}
      </div>

      <div className="h-[380px] md:h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Carousel items={items} altPrefix={tab === 'achievements' ? 'achievement' : 'certification'} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
