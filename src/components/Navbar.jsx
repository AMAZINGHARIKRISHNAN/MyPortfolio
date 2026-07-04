import { motion } from 'framer-motion'

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'resume', label: 'Resume' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ activePage, setActivePage }) {
  return (
    <div className="relative mb-6 lg:mb-8">
      <nav className="bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm overflow-x-auto scrollbar-hide">
        <ul className="flex gap-1 min-w-max">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => setActivePage(tab.id)}
                className={`relative px-4 py-2.5 lg:px-6 lg:py-3 text-sm lg:text-base font-medium rounded-xl transition-colors whitespace-nowrap ${
                  activePage === tab.id ? 'text-[#080c14]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {activePage === tab.id && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-cyan-400 rounded-xl"
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.4 }}
                  />
                )}
                <span className="relative">{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 rounded-r-2xl bg-gradient-to-l from-[#080c14] to-transparent md:hidden" />
    </div>
  )
}
