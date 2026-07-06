import {
  SiJavascript, SiPython, SiReact, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiFirebase, SiMysql,
  SiFlutter, SiGit, SiGithub, SiFigma, SiCanva,
  SiLangchain, SiOpenai, SiC,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { BrainCircuit, Database, Wand2 } from 'lucide-react'
import Section from './Section'
import { useT } from '../i18n'

const groups = [
  {
    label: 'ai & ml',
    skills: [
      { name: 'langchain', icon: SiLangchain, color: '#5bd6a9' },
      { name: 'openai', icon: SiOpenai, color: '#fff' },
      { name: 'rag', icon: BrainCircuit, color: '#a3e635' },
      { name: 'vector-dbs', icon: Database, color: '#a3e635' },
      { name: 'prompt-eng', icon: Wand2, color: '#a3e635' },
    ],
  },
  {
    label: 'languages',
    skills: [
      { name: 'javascript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'python', icon: SiPython, color: '#3776AB' },
      { name: 'java', icon: FaJava, color: '#ED8B00' },
      { name: 'c', icon: SiC, color: '#A8B9CC' },
      { name: 'sql', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    label: 'frontend',
    skills: [
      { name: 'react', icon: SiReact, color: '#61DAFB' },
      { name: 'html5', icon: SiHtml5, color: '#E34F26' },
      { name: 'css3', icon: SiCss, color: '#1572B6' },
      { name: 'tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'backend & db',
    skills: [
      { name: 'node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'mysql', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    label: 'mobile & tools',
    skills: [
      { name: 'flutter', icon: SiFlutter, color: '#54C5F8' },
      { name: 'git', icon: SiGit, color: '#F05032' },
      { name: 'github', icon: SiGithub, color: '#fff' },
      { name: 'figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'canva', icon: SiCanva, color: '#00C4CC' },
    ],
  },
]

export default function Skills() {
  const t = useT()
  return (
    <Section id="skills" cmd={t.skills.cmd} title={t.skills.title}>
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3">
              # {t.skills.groups[g.label] ?? g.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {g.skills.map(({ name, icon: Icon, color }) => (
                <div
                  key={name}
                  className="group flex items-center gap-2 font-mono text-sm text-zinc-300 bg-zinc-900/40 border border-zinc-800 rounded-lg px-3.5 py-2 hover:border-lime-400/30 transition-colors"
                >
                  <Icon size={16} className="text-zinc-500 group-hover:text-[--c] transition-colors" style={{ '--c': color }} />
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
