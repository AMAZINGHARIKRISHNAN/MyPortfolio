import { motion } from 'framer-motion'
import { GraduationCap, Briefcase, Download } from 'lucide-react'
import {
  SiJavascript, SiPython, SiReact, SiHtml5, SiCss,
  SiTailwindcss, SiNodedotjs, SiFirebase, SiMysql,
  SiFlutter, SiGit, SiGithub, SiFigma, SiCanva,
  SiLangchain, SiOpenai, SiC,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { BrainCircuit, Database, Wand2 } from 'lucide-react'

const education = [
  { title: 'Jawahar Vidyalaya', period: '2018 — 2019', detail: 'AISSE (All India Secondary School Examination) — 66%' },
  { title: 'Lalchand Milapchand Dadha Sr. Sec. School', period: '2019 — 2021', detail: 'AISSCE — Computer Science — 74.6%' },
  { title: 'Meenakshi Sundararajan Engineering College', period: '2021 — 2025', detail: 'B.Tech in Information Technology — CGPA 7.85' },
]

const experience = [
  {
    title: 'Thirdwave Corporation', period: '2025 — Present', role: 'AI Software Developer · Japan 🇯🇵',
    points: [
      'Building Retrieval-Augmented Generation (RAG) pipelines for intelligent document and knowledge retrieval.',
      'Designing and integrating LLM-based workflows into production applications.',
      'Collaborating with cross-functional teams in Japan on cutting-edge AI projects.',
    ],
  },
  {
    title: 'The Nest School', period: 'June 2023', role: 'Software Development Intern',
    points: [
      'Analyzed and solved operational problems through custom web application development.',
      'Designed and developed websites to facilitate school operations and communication.',
      'Collaborated with educators and administrative staff to gather requirements and deliver solutions.',
    ],
  },
  {
    title: 'Eagle-Tech IT Solutions', period: 'Feb 2023', role: 'Computer Networking Intern',
    points: [
      'Assisted in setup and configuration of network hardware and software.',
      'Monitored network performance using Wireshark and Nagios.',
      'Documented network configurations, changes, and created network diagrams.',
    ],
  },
]

const skillGroups = [
  {
    category: 'AI & ML',
    skills: [
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'OpenAI', icon: SiOpenai, color: '#fff' },
      { name: 'RAG', icon: BrainCircuit, color: '#22d3ee' },
      { name: 'Vector DBs', icon: Database, color: '#22d3ee' },
      { name: 'Prompt Eng.', icon: Wand2, color: '#22d3ee' },
    ],
  },
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'C', icon: SiC, color: '#A8B9CC' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    category: 'Mobile & Tools',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#fff' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Canva', icon: SiCanva, color: '#00C4CC' },
    ],
  },
]

export default function Resume() {
  return (
    <article className="space-y-10 lg:space-y-12">
      <header>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          My <span className="text-cyan-400">Resume</span>
        </h2>
        <div className="mt-2 w-12 h-0.5 bg-cyan-400 rounded-full" />
      </header>

      {/* Education */}
      <section>
        <SectionHeader icon={<GraduationCap size={20} />} title="Education" />
        <div className="mt-5 relative pl-7 lg:pl-9 border-l-2 border-white/10 space-y-5">
          {education.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.35 }} className="relative">
              <div className="absolute -left-[32px] lg:-left-[40px] top-5 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-[#080c14]" />
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 hover:border-cyan-400/20 transition-colors">
                <h4 className="font-semibold text-white text-base lg:text-lg">{item.title}</h4>
                <span className="text-sm text-cyan-400 mt-1 block">{item.period}</span>
                <p className="text-sm lg:text-base text-slate-400 mt-2">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionHeader icon={<Briefcase size={20} />} title="Experience" />
        <div className="mt-5 relative pl-7 lg:pl-9 border-l-2 border-white/10 space-y-5">
          {experience.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1, duration: 0.35 }} className="relative">
              <div className="absolute -left-[32px] lg:-left-[40px] top-6 w-3.5 h-3.5 rounded-full bg-cyan-400 ring-4 ring-[#080c14]" />
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 hover:border-cyan-400/20 transition-colors">
                <div className="flex items-start justify-between flex-wrap gap-3">
                  <div>
                    <h4 className="font-semibold text-white text-base lg:text-lg">{item.title}</h4>
                    <p className="text-sm lg:text-base text-cyan-400 mt-0.5">{item.role}</p>
                  </div>
                  <span className="text-xs lg:text-sm text-slate-500 bg-white/5 px-3 py-1 rounded-lg whitespace-nowrap">{item.period}</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {item.points.map((p, j) => (
                    <li key={j} className="text-sm lg:text-base text-slate-400 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1 flex-shrink-0">▸</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills with icons */}
      <section>
        <SectionHeader icon={<span className="text-base">⚡</span>} title="Skills" />
        <div className="mt-5 space-y-6">
          {skillGroups.map(({ category, skills }) => (
            <div key={category}>
              <p className="text-xs lg:text-sm text-slate-500 uppercase tracking-widest mb-3">{category}</p>
              <div className="flex flex-wrap gap-2 lg:gap-3">
                {skills.map(({ name, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 hover:border-cyan-400/25 transition-colors"
                  >
                    <Icon size={18} style={{ color }} />
                    <span className="text-sm lg:text-base text-slate-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <a
        href="/assets/P.HARIKRISHNAN Resume.pdf"
        download
        className="inline-flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-[#080c14] text-sm lg:text-base font-semibold rounded-xl hover:bg-cyan-300 transition-colors"
      >
        <Download size={18} />
        Download Resume
      </a>
    </article>
  )
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 lg:w-11 lg:h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
        {icon}
      </div>
      <h3 className="text-lg lg:text-xl font-semibold text-white">{title}</h3>
    </div>
  )
}
