import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from './Section'
import Carousel from './Carousel'
import { achievements, certifications } from '../data'
import { useT } from '../i18n'

export default function Credentials() {
  const t = useT()
  const [tab, setTab] = useState('achievements')
  const items = tab === 'achievements' ? achievements : certifications

  return (
    <Section id="credentials" cmd={t.credentials.cmds[tab]} title={t.credentials.title}>
      <div className="flex gap-2 mb-8 font-mono text-sm">
        {['achievements', 'certifications'].map((tabId) => (
          <button
            key={tabId}
            onClick={() => setTab(tabId)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              tab === tabId
                ? 'bg-lime-400 text-zinc-950 font-bold'
                : 'border border-zinc-800 text-zinc-400 hover:text-zinc-100 hover:border-zinc-600'
            }`}
          >
            {t.credentials[tabId]}{' '}
            <span className="opacity-60">({tabId === 'achievements' ? achievements.length : certifications.length})</span>
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
            <Carousel items={items} altPrefix={t.credentials.filePrefix[tab]} />
          </motion.div>
        </AnimatePresence>
      </div>
    </Section>
  )
}
