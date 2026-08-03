import { useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { PROFILE } from '../data/profile'

const TYPED_TEXT =
  "Hello! I'm thrilled you're here. I'm passionate about building clean, functional software — from Java backends to polished frontends. I embrace every new challenge with enthusiasm and a drive to keep improving."

const TRAITS = [
  { icon: '⚡', title: 'Hardworking',     desc: 'I give my best effort and complete tasks with dedication and consistency.' },
  { icon: '🎯', title: 'Time-Conscious',  desc: "Meeting deadlines and respecting others' time is a core priority." },
  { icon: '🔥', title: 'Motivated',       desc: 'I stay motivated to learn and explore new technologies every day.' },
  { icon: '📚', title: 'Always Learning', desc: 'Constantly improving skills and eager to embrace new challenges.' },
]

function useTyped(text, speed = 22) {
  const [displayed, setDisplayed] = useState('')
  useEffect(() => {
    let i = 0
    setDisplayed('')
    const timer = setInterval(() => {
      if (i < text.length) setDisplayed(text.slice(0, ++i))
      else clearInterval(timer)
    }, speed)
    return () => clearInterval(timer)
  }, [text, speed])
  return displayed
}

export default function Home({ setActive }) {
  const typed = useTyped(TYPED_TEXT)
  useScrollReveal()

  return (
    <div className="home">
      <div className="hero-eyebrow">👋 Welcome to my portfolio</div>
      <h1 className="hero-name">
        Olayiwola<br />
        <span className="line2">Uthman.</span>
      </h1>
      <div className="typed-line">{typed}<span className="cursor" /></div>

      <div className="availability">
        <span className="status-dot" />
        Open to Internships & Job Opportunities
      </div>

      <div className="hero-actions">
        <button className="btn-primary" onClick={() => window.open(PROFILE.github, '_blank')}>
          View GitHub ↗
        </button>
        <button className="btn-outline" onClick={() => setActive('contact')}>
          Contact Me
        </button>
        {/* Drop your CV as public/cv.pdf to activate this */}
        <a className="btn-cv" href="cv.pdf" download>
          <i className="fas fa-download" /> Download CV
        </a>
      </div>

      <div className="socials">
        <a className="soc-link" href={PROFILE.github} target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
        <a className="soc-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin-in" /></a>
        <a className="soc-link" href={PROFILE.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
        <a className="soc-link" href={PROFILE.gmailCompose} target="_blank" rel="noreferrer"><i className="fas fa-envelope" /></a>
        <a className="soc-link" href={PROFILE.whatsapp} target="_blank" rel="noreferrer"><i className="fab fa-whatsapp" /></a>
      </div>

      <div className="traits-label">// what defines me</div>
      <div className="traits">
        {TRAITS.map((t, i) => (
          <div className={`trait reveal reveal-delay-${i + 1}`} key={t.title}>
            <div className="trait-icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}