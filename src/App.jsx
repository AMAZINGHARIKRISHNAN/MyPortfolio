import { useState } from 'react'
import { LangProvider } from './i18n'
import Nav from './components/Nav'
import CommandPalette from './components/CommandPalette'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [paletteOpen, setPaletteOpen] = useState(false)

  return (
    <LangProvider>
      <div id="top">
        <Nav onOpenPalette={() => setPaletteOpen(true)} />
        <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />

        <Hero />

        <main className="max-w-6xl mx-auto px-5 md:px-8">
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Credentials />
          <Contact />
        </main>

        <Footer />
      </div>
    </LangProvider>
  )
}
