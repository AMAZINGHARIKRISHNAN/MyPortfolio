import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, ChevronDown, Download, Copy, Check } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const ROLES = ['AI Software Developer', 'RAG Engineer', 'Full Stack Developer', 'ML Systems Builder']

export default function Sidebar() {
  const [showContacts, setShowContacts] = useState(false)
  const role = useTypewriter(ROLES)

  return (
    <aside className="w-full h-full">
      <div className="h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col">

        {/* ── Profile ── same px-5 as everything below */}
        <div className="flex-shrink-0 flex flex-col items-center text-center px-5 pt-8 pb-6">
          <div className="relative mb-5">
            <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-2xl overflow-hidden avatar-glow">
              <img src="/assets/images/my-avatar.png" alt="Harikrishnan P" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-[#080c14]" />
          </div>

          <h1 className="text-lg lg:text-xl font-semibold text-white tracking-tight mb-3">
            Harikrishnan P
          </h1>

          <div className="w-full text-xs text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 px-3 py-2 rounded-full flex items-center justify-center gap-1 min-h-[30px]">
            <span className="truncate">{role}</span>
            <span className="cursor-blink font-light flex-shrink-0">|</span>
          </div>
        </div>

        {/* Full-width separator */}
        <div className="flex-shrink-0 border-t border-white/10" />

        {/* ── Mobile toggle ── */}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="flex-shrink-0 w-full flex items-center justify-center gap-2 text-xs text-slate-400 hover:text-white transition-colors md:hidden py-3"
        >
          <span>{showContacts ? 'Hide Contacts' : 'Show Contacts'}</span>
          <motion.span animate={{ rotate: showContacts ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex">
            <ChevronDown size={13} />
          </motion.span>
        </button>

        <AnimatePresence>
          {showContacts && (
            <motion.div
              key="mobile-contacts"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22 }}
              className="overflow-hidden md:hidden flex-shrink-0"
            >
              <MobileContacts />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Desktop contacts — fills all remaining height ── */}
        <div className="hidden md:flex md:flex-col md:flex-1 min-h-0">
          <DesktopContacts />
        </div>

      </div>
    </aside>
  )
}

/* Mobile: just a static list, no height filling */
function MobileContacts() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText('harikrish18342@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="px-5 pt-5 pb-6 flex flex-col gap-5">
      <ContactItems copied={copied} onCopy={copyEmail} />
      <div className="border-t border-white/10" />
      <BottomSection />
    </div>
  )
}

/* Desktop: fills full height, spacer pushes bottom section down */
function DesktopContacts() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    await navigator.clipboard.writeText('harikrish18342@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <div className="flex-1 min-h-0 flex flex-col px-5">
      {/* Top: contact items with equal top padding */}
      <div className="pt-5 flex flex-col gap-5">
        <ContactItems copied={copied} onCopy={copyEmail} />
      </div>

      {/* Spacer — equal visual weight top/bottom */}
      <div className="flex-1" />

      {/* Bottom: separator + socials + download with equal bottom padding */}
      <div className="pb-6 flex flex-col gap-4">
        <div className="border-t border-white/10" />
        <BottomSection />
      </div>
    </div>
  )
}

function ContactItems({ copied, onCopy }) {
  return (
    <>
      {/* Email */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
          <Mail size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Email</p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-300 truncate">harikrish18342@gmail.com</span>
            <button onClick={onCopy} className="flex-shrink-0 text-slate-500 hover:text-cyan-400 transition-colors" title="Copy">
              {copied ? <Check size={11} className="text-cyan-400" /> : <Copy size={11} />}
            </button>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
          <Phone size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Phone</p>
          <a href="tel:+918072324813" className="text-xs text-slate-300 hover:text-cyan-400 transition-colors">
            +91 8072324813
          </a>
        </div>
      </div>

      {/* Location */}
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
          <MapPin size={15} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Location</p>
          <span className="text-xs text-slate-300">Japan</span>
        </div>
      </div>
    </>
  )
}

function BottomSection() {
  return (
    <>
      {/* Social links — centered, equal gap */}
      <div className="flex justify-center gap-3">
        <a href="https://www.linkedin.com/in/hari-krishnan-p-1854a51b2/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
          <Linkedin size={16} />
        </a>
        <a href="https://github.com/AMAZINGHARIKRISHNAN" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
          className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 transition-all">
          <Github size={16} />
        </a>
      </div>

      {/* Download CV — full width */}
      <a
        href="/assets/P.HARIKRISHNAN Resume.pdf"
        download
        className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-cyan-400/30 text-cyan-400 text-xs font-medium hover:bg-cyan-400/10 transition-all"
      >
        <Download size={14} />
        Download CV
      </a>
    </>
  )
}
