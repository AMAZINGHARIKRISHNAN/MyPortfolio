import { useState } from 'react'
import { Send, CheckCircle, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ fullname: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

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

  return (
    <article className="space-y-8 lg:space-y-10">
      <header>
        <h2 className="text-2xl lg:text-3xl font-semibold text-white">
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <div className="mt-2 w-12 h-0.5 bg-cyan-400 rounded-full" />
      </header>

      <div className="rounded-2xl overflow-hidden h-48 lg:h-64 border border-white/10">
        <iframe
          src="https://www.google.com/maps?q=Akihabara,+Chiyoda,+Tokyo,+Japan&output=embed"
          width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Location map"
        />
      </div>

      <AnimatePresence mode="wait">
        {status === 'success' ? (
          /* Success card */
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 border border-cyan-400/30 rounded-2xl p-10 lg:p-14 flex flex-col items-center text-center gap-5"
          >
            <div className="w-20 h-20 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <CheckCircle size={40} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold text-white mb-2">Message Sent!</h3>
              <p className="text-slate-400 text-sm lg:text-base">Thanks for reaching out. I'll get back to you as soon as possible.</p>
            </div>
            <button
              onClick={() => setStatus('idle')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all text-sm"
            >
              <RotateCcw size={15} />
              Send another message
            </button>
          </motion.div>
        ) : (
          /* Contact form */
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 lg:p-8 space-y-5"
          >
            <h3 className="font-semibold text-white text-base lg:text-lg">Send a Message</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              <input
                type="text" name="fullname" placeholder="Full name"
                value={form.fullname} onChange={handleChange} required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm lg:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
              <input
                type="email" name="email" placeholder="Email address"
                value={form.email} onChange={handleChange} required
                className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm lg:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors"
              />
            </div>

            <textarea
              name="message" placeholder="Your message"
              value={form.message} onChange={handleChange} required rows={6}
              className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-3.5 text-sm lg:text-base text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/50 transition-colors resize-none"
            />

            {status === 'error' && (
              <p className="text-red-400 text-sm lg:text-base">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={!isValid || status === 'loading'}
              className="flex items-center gap-2 px-7 py-3.5 bg-cyan-400 text-[#080c14] text-sm lg:text-base font-semibold rounded-xl hover:bg-cyan-300 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send size={17} />
              {status === 'loading' ? 'Sending…' : 'Send Message'}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </article>
  )
}
