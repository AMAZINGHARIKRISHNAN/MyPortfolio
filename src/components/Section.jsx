import { motion } from 'framer-motion'

export default function Section({ id, cmd, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-zinc-800/60 py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="font-mono text-xs md:text-sm text-zinc-500">
          ~/portfolio <span className="text-lime-400">$</span> {cmd}
        </p>
        <h2 className="font-mono font-bold text-2xl md:text-4xl text-zinc-50 tracking-tight mt-3">
          {title}
        </h2>
        <div className="mt-8 md:mt-12">{children}</div>
      </motion.div>
    </section>
  )
}
