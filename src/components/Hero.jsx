import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, FileDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'
import { RESUME } from '../data'
import { useT } from '../i18n'

// Reveals the script one character at a time: commands type slowly,
// output streams fast like model tokens. Restarts when the script
// (i.e. the language) changes.
function useTerminalScript(script) {
  const [pos, setPos] = useState({ line: 0, char: 0, done: false })

  useEffect(() => {
    let cancelled = false
    let line = 0
    let char = 0
    setPos({ line: 0, char: 0, done: false })

    const tick = () => {
      if (cancelled) return
      const current = script[line]
      if (!current) {
        setPos({ line, char: 0, done: true })
        return
      }
      if (char < current.text.length) {
        char++
        setPos({ line, char, done: false })
        setTimeout(tick, current.type === 'cmd' ? 55 : 12)
      } else {
        line++
        char = 0
        setTimeout(tick, script[line]?.pause ?? 260)
      }
    }

    const start = setTimeout(tick, 700)
    return () => {
      cancelled = true
      clearTimeout(start)
    }
  }, [script])

  return pos
}

function TerminalLine({ line, text }) {
  return line.type === 'cmd' ? (
    <p className="text-zinc-100">
      <span className="text-lime-400">$ </span>
      {text}
    </p>
  ) : (
    <p className="text-zinc-400 mb-3">{text}</p>
  )
}

export default function Hero() {
  const t = useT()
  const role = useTypewriter(t.hero.roles)
  const SCRIPT = t.hero.script
  const pos = useTerminalScript(SCRIPT)

  return (
    <div className="hero-glow">
      <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-28 pb-20 md:pt-36 md:pb-28 min-h-svh">

        {/* Left: statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="font-mono text-xs md:text-sm text-lime-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            {t.hero.status}
          </p>

          <h1 className="font-mono font-extrabold text-zinc-50 tracking-tighter leading-none mt-6 text-[13vw] sm:text-6xl xl:text-7xl">
            HARI
            <br />
            KRISHNAN<span className="text-lime-400">_</span>P
          </h1>

          {t.hero.nameKana && (
            <p className="font-mono text-sm text-zinc-500 mt-3 tracking-widest">{t.hero.nameKana}</p>
          )}

          <p className="font-mono text-sm md:text-base text-zinc-500 mt-6 h-6">
            <span className="text-zinc-600">{'// '}</span>
            <span className="text-zinc-300">{role}</span>
            <span className="cursor-block ml-1" />
          </p>

          <p className="text-zinc-400 leading-relaxed max-w-md mt-6 text-sm md:text-base">
            {t.hero.pitch}
          </p>

          <div className="flex flex-wrap gap-3 mt-9 font-mono text-sm">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-lime-400 text-zinc-950 font-bold hover:bg-lime-300 transition-colors"
            >
              {t.hero.viewWork} <ArrowDown size={15} />
            </a>
            <a
              href={RESUME}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-lime-400/60 hover:text-lime-400 transition-colors"
            >
              <FileDown size={15} /> {t.hero.downloadCv}
            </a>
          </div>
        </motion.div>

        {/* Right: live terminal */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
        >
          <div className="rounded-xl border border-zinc-800 bg-[#0c0c0e] shadow-2xl shadow-black/60 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/60">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-amber-500/70" />
              <span className="w-3 h-3 rounded-full bg-lime-500/70" />
              <span className="font-mono text-xs text-zinc-500 ml-3">{t.hero.termTitle}</span>
            </div>
            <div className="scanlines p-5 md:p-6 font-mono text-[13px] md:text-sm leading-relaxed min-h-[280px]">
              {SCRIPT.slice(0, pos.line).map((l, i) => (
                <TerminalLine key={i} line={l} text={l.text} />
              ))}
              {!pos.done && SCRIPT[pos.line] && (
                <TerminalLine line={SCRIPT[pos.line]} text={SCRIPT[pos.line].text.slice(0, pos.char)} />
              )}
              {pos.done && (
                <p className="text-zinc-100">
                  <span className="text-lime-400">$ </span>
                  <span className="cursor-block" />
                </p>
              )}
            </div>
          </div>
          <p className="hidden md:block font-mono text-[11px] text-zinc-600 text-center mt-4">
            {t.hero.kbdPre && `${t.hero.kbdPre} `}
            <kbd className="px-1.5 py-0.5 rounded border border-zinc-700 text-zinc-400">ctrl</kbd>{' '}
            + <kbd className="px-1.5 py-0.5 rounded border border-zinc-700 text-zinc-400">k</kbd>{' '}
            {t.hero.kbdPost}
          </p>
        </motion.div>

      </div>
    </div>
  )
}
