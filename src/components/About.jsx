import { BrainCircuit, Globe, Smartphone } from 'lucide-react'
import Section from './Section'
import { useT } from '../i18n'

const modules = [
  { icon: BrainCircuit, name: 'ai.development' },
  { icon: Globe, name: 'web.development' },
  { icon: Smartphone, name: 'mobile.apps' },
]

const clients = [
  { name: 'The Nest School', logo: '/assets/images/brand/client-nest.webp', url: 'https://thenest.school/' },
  { name: 'MSEC', logo: '/assets/images/brand/client-msec.webp', url: 'https://msec.edu.in/' },
]

export default function About() {
  const t = useT()

  return (
    <Section id="about" cmd={t.about.cmd} title={t.about.title}>
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

        <div>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
            {t.about.p1[0]}
            <span className="text-lime-400 font-medium">{t.about.p1[1]}</span>
            {t.about.p1[2]}
          </p>
          <p className="text-zinc-400 leading-relaxed text-sm md:text-base mt-4">
            {t.about.p2}
          </p>

          <div className="mt-8">
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-4">
              {t.about.trustedBy}
            </p>
            <div className="flex gap-4">
              {clients.map((c) => (
                <a
                  key={c.name}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={c.name}
                  className="bg-zinc-900/60 border border-zinc-800 rounded-xl px-6 py-4 hover:border-lime-400/40 transition-colors"
                >
                  <img
                    src={c.logo}
                    alt={c.name}
                    loading="lazy"
                    className="h-9 md:h-11 object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="font-mono text-xs text-zinc-500">
            <span className="text-lime-400">$</span> {t.about.modulesCmd}
          </p>
          {modules.map((m) => (
            <div
              key={m.name}
              className="flex gap-4 items-start bg-zinc-900/40 border border-zinc-800 rounded-xl p-5 hover:border-lime-400/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-lime-400/10 flex items-center justify-center flex-shrink-0">
                <m.icon size={19} className="text-lime-400" />
              </div>
              <div>
                <h3 className="font-mono font-bold text-zinc-100 text-sm">{t.about.moduleNames[m.name]}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mt-1">{t.about.modules[m.name]}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </Section>
  )
}
