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
      className="h-full flex flex-col bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Image — fills all remaining height */}
      <div className="flex-1 min-h-0 relative overflow-hidden rounded-xl bg-black/30">
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
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Auto-play indicator */}
        {!paused && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs text-slate-400">Auto</span>
          </div>
        )}
      </div>

      {/* Controls */}
      <div className="flex-shrink-0 flex items-center justify-between mt-4 lg:mt-5">
        <button
          onClick={() => go(-1)}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex items-center gap-3">
          <span className="text-sm lg:text-base text-slate-500 tabular-nums">
            {current + 1} / {items.length}
          </span>
          <div className="flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goto(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-6 bg-cyan-400' : 'w-1.5 bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => go(1)}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
