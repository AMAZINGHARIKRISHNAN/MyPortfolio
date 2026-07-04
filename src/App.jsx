import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Credentials from './components/Credentials'
import Contact from './components/Contact'

const pages = {
  about: About,
  resume: Resume,
  portfolio: Portfolio,
  credentials: Credentials,
  contact: Contact,
}

const pageTitles = {
  about: 'Harikrishnan P — Portfolio',
  resume: 'Resume | Harikrishnan P',
  portfolio: 'Portfolio | Harikrishnan P',
  credentials: 'Credentials | Harikrishnan P',
  contact: 'Contact | Harikrishnan P',
}

const fitsInView = ['about', 'credentials']

const pageFromHash = () => {
  const hash = window.location.hash.replace('#', '')
  return pages[hash] ? hash : 'about'
}

export default function App() {
  const [activePage, setActivePage] = useState(pageFromHash)
  const scrollRef = useRef(null)
  const PageComponent = pages[activePage]
  const fits = fitsInView.includes(activePage)

  useEffect(() => {
    document.title = pageTitles[activePage] || 'Harikrishnan P — Portfolio'
  }, [activePage])

  // Sync tab state with the URL hash so pages are deep-linkable
  // and the browser back button works
  useEffect(() => {
    const onHashChange = () => setActivePage(pageFromHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = (page) => {
    window.location.hash = page === 'about' ? '' : page
    setActivePage(page)
  }

  // Reset scroll position when switching tabs
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0
  }, [activePage])

  return (
    <div className="h-screen app-bg flex flex-col md:flex-row overflow-hidden">

      {/* Sidebar — static */}
      <div className="flex-shrink-0 w-full md:w-64 lg:w-72 xl:w-80 md:h-full md:overflow-y-auto scrollbar-hide p-3 md:p-4 lg:p-5">
        <Sidebar />
      </div>

      {/* Right panel */}
      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">

        {/* Navbar */}
        <div className="flex-shrink-0 px-3 md:px-4 lg:px-5 xl:px-6 pt-3 md:pt-4 lg:pt-5 xl:pt-6">
          <Navbar activePage={activePage} setActivePage={navigate} />
        </div>

        {/* Content — scrollbar always hidden, fits-in-view pages are overflow-hidden */}
        <div
          ref={scrollRef}
          className={[
            'flex-1 min-h-0 scrollbar-hide',
            'px-3 md:px-4 lg:px-5 xl:px-6',
            'pb-3 md:pb-4 lg:pb-5 xl:pb-6',
            fits ? 'overflow-hidden' : 'overflow-y-auto',
          ].join(' ')}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              className={fits ? 'h-full' : ''}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <PageComponent />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
