import { useState } from 'react'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  const [active, setActive] = useState('home')

  const screens = {
    home: <Home setActive={setActive} />,
    about: <About />,
    projects: <Projects />,
    resume: <Resume />,
    contact: <Contact />,
  }

  return (
    <div className="app">
      <div className="bg-canvas">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
      </div>
      <div className="grid-bg" />
      <Nav active={active} setActive={setActive} />
      <div className="content">{screens[active]}</div>
      <BackToTop />
      <footer className="footer">
        Built with <span>React</span> · Olayiwola Uthman © 2026
      </footer>
    </div>
  )
}

export default App