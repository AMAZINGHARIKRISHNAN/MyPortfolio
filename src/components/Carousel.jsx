import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const variants = {
  enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
}

export default function Carousel({ items, altPrefix = 'Slide' }) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)

  const go = (dir) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + items.length) % items.length)
  }

  const goto = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  // Auto-play every 4 seconds, pause on hover
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => go(1), 4000)
    return () => clearInterval(id)
  }, [paused, current])

  // Keyboard navigation — ignore keys typed into form fields
  useEffect(() => {
    const handleKey = (e) => {
      if (/^(input|textarea|select)$/i.test(e.target.tagName)) return
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  // Preload the next slide so autoplay never shows a blank frame
  useEffect(() => {
    const img = new Image()
    img.src = items[(current + 1) % items.length]
  }, [current, items])

  return (
    <div
      className="h-full flex flex-col rounded-xl border border-zinc-800 bg-[#0c0c0e] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* window bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800 bg-zinc-900/60 flex-shrink-0">
        <span className="font-mono text-xs text-zinc-500">
          {altPrefix.toLowerCase()}-{current + 1}.png — preview
        </span>
        {!paused && (
          <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
            <span className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
            auto
          </span>
        )}
      </div>

      {/* image */}
      <div className="flex-1 min-h-0 relative overflow-hidden bg-black/40">
        <AnimatePresence custom={direction} mode="wait">
          <motion.img
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            src={items[current]}
            alt={`${altPrefix} ${current + 1}`}
            decoding="async"
            className="absolute inset-0 w-full h-full object-contain p-3"
          />
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="flex-shrink-0 flex items-center justify-between px-4 py-3 border-t border-zinc-800">
        <button
          onClick={() => go(-1)}
          className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
          aria-label="Previous"
        >
          <ChevronLeft size={17} />
        </button>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-zinc-500 tabular-nums">
            {current + 1}/{items.length}
          </span>
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goto(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1 rounded-full transition-all duration-300 ${
                  i === current ? 'w-5 bg-lime-400' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => go(1)}
          className="w-9 h-9 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
          aria-label="Next"
        >
          <ChevronRight size={17} />
        </button>
      </div>
    </div>
  )
}
