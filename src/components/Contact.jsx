import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, RotateCcw, Mail, MapPin, Clock, Copy, Check, Github, Linkedin, Phone } from 'lucide-react'
import Section from './Section'
import { EMAIL, GITHUB, LINKEDIN } from '../data'
import { useT } from '../i18n'

function useTokyoTime() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Asia/Tokyo',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
    const update = () => setTime(fmt.format(new Date()))
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return time
}

function InfoRow({ icon: Icon, label, children }) {
  return (
    <div className="flex items-center gap-3.5">
      <div className="w-9 h-9 rounded-lg bg-lime-400/10 flex items-center justify-center text-lime-400 flex-shrink-0">
        <Icon size={15} />
      </div>
      <div className="min-w-0">
        <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{label}</p>
        <div className="text-sm text-zinc-300 mt-0.5">{children}</div>
      </div>
    </div>
  )
}

export default function Contact() {
  const t = useT()
  const [form, setForm] = useState({ fullname: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [copied, setCopied] = useState(false)
  const tokyoTime = useTokyoTime()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ access_key: 'aee61b4f-758c-4c46-871a-6d75a11b0349', ...form }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ fullname: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const isValid = form.fullname.trim() && form.email.trim() && form.message.trim()
  const inputCls =
    'w-full bg-zinc-900/60 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-lime-400/60 transition-colors'

  return (
    <Section id="contact" cmd="./contact --send" title={t.contact.title}>
      <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16">

        {/* Left: channels */}
        <div className="space-y-6">
          <InfoRow icon={Mail} label={t.contact.email}>
            <span className="flex items-center gap-2">
              <span className="truncate">{EMAIL}</span>
              <button onClick={copyEmail} title="Copy" className="text-zinc-500 hover:text-lime-400 transition-colors flex-shrink-0">
                {copied ? <Check size={13} className="text-lime-400" /> : <Copy size={13} />}
              </button>
            </span>
          </InfoRow>

          <InfoRow icon={Phone} label={t.contact.phone}>
            <a href="tel:+918072324813" className="hover:text-lime-400 transition-colors">+91 8072324813</a>
          </InfoRow>

          <InfoRow icon={MapPin} label={t.contact.location}>
            {t.contact.locationValue}
          </InfoRow>

          <InfoRow icon={Clock} label={t.contact.localTime}>
            <span className="font-mono tabular-nums">{tokyoTime} JST</span>
          </InfoRow>

          <div className="flex gap-3 pt-2">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
              className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors">
              <Github size={17} />
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors">
              <Linkedin size={17} />
            </a>
          </div>
        </div>

        {/* Right: form */}
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="rounded-xl border border-lime-400/30 bg-lime-400/[0.03] p-10 flex flex-col items-center text-center gap-4"
            >
              <CheckCircle size={40} className="text-lime-400" />
              <div>
                <h3 className="font-mono font-bold text-zinc-100 text-lg">{t.contact.successTitle}</h3>
                <p className="text-zinc-400 text-sm mt-2">{t.contact.successBody}</p>
              </div>
              <button
                onClick={() => setStatus('idle')}
                className="flex items-center gap-2 font-mono text-sm px-5 py-2.5 rounded-lg border border-zinc-700 text-zinc-400 hover:text-zinc-100 hover:border-zinc-500 transition-colors"
              >
                <RotateCcw size={14} /> {t.contact.sendAnother}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-8 space-y-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" name="fullname" placeholder={t.contact.fullname} value={form.fullname} onChange={handleChange} required className={inputCls} />
                <input type="email" name="email" placeholder={t.contact.emailPh} value={form.email} onChange={handleChange} required className={inputCls} />
              </div>
              <textarea name="message" placeholder={t.contact.messagePh} value={form.message} onChange={handleChange} required rows={6} className={`${inputCls} resize-none`} />

              {status === 'error' && (
                <p className="font-mono text-sm text-red-400">{t.contact.error}</p>
              )}

              <button
                type="submit"
                disabled={!isValid || status === 'loading'}
                className="inline-flex items-center gap-2 font-mono font-bold text-sm px-6 py-3 rounded-lg bg-lime-400 text-zinc-950 hover:bg-lime-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send size={15} />
                {status === 'loading' ? t.contact.sending : t.contact.send}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

      </div>
    </Section>
  )
}
