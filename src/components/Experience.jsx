import { motion } from 'framer-motion'
import Section from './Section'
import { experience, education } from '../data'
import { useT } from '../i18n'

export default function Experience() {
  const t = useT()

  return (
    <Section id="experience" cmd={t.experience.cmd} title={t.experience.title}>
      <div className="space-y-4">
        {experience.map((job, i) => {
          const tr = t.experience.items[job.company] ?? job
          return (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className={`rounded-xl border p-5 md:p-6 transition-colors ${
                job.current
                  ? 'border-lime-400/30 bg-lime-400/[0.03]'
                  : 'border-zinc-800 bg-zinc-900/30 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-mono font-bold text-zinc-100 text-base md:text-lg flex items-center gap-2.5">
                    {tr.company ?? job.company}
                    {job.current && (
                      <span className="flex items-center gap-1.5 font-normal text-[11px] text-lime-400 border border-lime-400/30 rounded-full px-2 py-0.5">
                        <span className="w-1 h-1 rounded-full bg-lime-400 animate-pulse" />
                        {t.experience.current}
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-1">
                    {tr.role} · {tr.place}
                  </p>
                </div>
                <span className="font-mono text-xs text-zinc-500 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-lg">
                  [{job.period}]
                </span>
              </div>
              <ul className="mt-4 space-y-1.5">
                {tr.points.map((pt, j) => (
                  <li key={j} className="text-sm text-zinc-400 flex gap-2.5 leading-relaxed">
                    <span className="text-lime-400 flex-shrink-0 font-mono">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>

      <p className="font-mono text-xs text-zinc-500 mt-12 mb-4">
        <span className="text-lime-400">$</span> {t.experience.eduCmd}
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {education.map((e) => (
          <div key={e.school} className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
            <span className="font-mono text-xs text-zinc-500">[{e.period}]</span>
            <h4 className="font-mono font-bold text-zinc-100 text-sm mt-2 leading-snug">{e.school}</h4>
            <p className="text-xs text-zinc-400 mt-1.5">{t.experience.edu[e.school] ?? e.detail}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
