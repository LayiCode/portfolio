import { useState, useEffect, useRef } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { repoUrl } from '../data/profile'

const PROJECTS = [
  {
    title: 'GoalForge',
    desc: 'A full-stack goal-tracking application with a React frontend and Spring Boot backend. Create, track, and manage your goals with a clean, responsive interface.',
    tags: ['JavaScript', 'React', 'Spring Boot'],
    icon: 'fa-bullseye',
    color: '#f0c060',
    url: repoUrl('GoalForge'),
    live: 'https://goal-forge-frontend.vercel.app',
    img: '',
  },
  {
    title: 'Car Website',
    desc: 'A multi-page car dealership website with category pages for cars, parts, oils, and accessories — plus individual detail pages for vehicles and motor oils, image galleries, and a contact form. Built with semantic HTML, modern CSS layouts, and vanilla JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'fa-car',
    color: '#e05c3a',
    url: repoUrl('Car-Website'),
    live: 'https://car-website-theta-blond.vercel.app',
    img: '',
  },
  {
    title: 'Ecommerce Platform',
    desc: 'A full-featured e-commerce clothing site with product listings, shopping cart, checkout flow, and responsive design optimised for both mobile and desktop.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'fa-cart-shopping',
    color: '#7c6af7',
    url: repoUrl('Ecommerce'),
    live: '',
    img: '',
  },
  {
    title: 'Ecommerce Backend',
    desc: 'A Spring Boot REST API for an e-commerce platform — product catalog, JWT auth with role-based access control, persistent server-side cart, race-condition-safe order processing with stock control, saved addresses, and Paystack payments with verified webhooks.',
    tags: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL', 'Paystack'],
    icon: 'fa-server',
    color: '#3de0a0',
    url: repoUrl('ecommerce-backend'),
    live: '',
    img: '',
  },
  {
    title: 'Java Calculator',
    desc: 'A desktop calculator application built in Java with a clean Swing UI. Supports all basic arithmetic operations, keyboard input, and a history display.',
    tags: ['Java', 'Swing'],
    icon: 'fa-calculator',
    color: '#f0c060',
    url: repoUrl('Java-Calculator'),
    live: '',
    img: '',
  },
  {
    title: 'UniSwap API',
    desc: 'A peer-to-peer campus marketplace REST API built with Spring Boot. Students register with their campus email, list items for sale, browse and search listings, and manage their own inventory — secured with JWT-based authentication.',
    tags: ['Java', 'Spring Boot', 'JWT', 'MySQL'],
    icon: 'fa-code-branch',
    color: '#7c6af7',
    url: repoUrl('UniSwap-Api'),
    live: '',
    img: '',
  },
  {
    title: 'Real Estate Site',
    desc: 'A property listing website showcasing homes and apartments with search filters, property detail pages, and a fully responsive UI layout.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    icon: 'fa-house',
    color: '#3de0a0',
    url: repoUrl('realestate-site'),
    live: 'https://realestate-site-six.vercel.app',
    img: '',
  },
  {
    title: 'Portfolio Site',
    desc: 'An earlier portfolio design exploring layout, typography, and animation using pure CSS.',
    tags: ['HTML', 'CSS'],
    icon: 'fa-code',
    color: '#e05c3a',
    url: repoUrl('portfolio-site'),
    live: '',
    img: '',
  },
]

function ProjectModal({ proj, onClose }) {
  const closeRef = useRef(null)

  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', fn)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={proj.title}
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal">
        <div className="modal-header">
          <h2>{proj.title}</h2>
          <button className="modal-close" onClick={onClose} ref={closeRef} aria-label="Close project details"><i className="fas fa-times" /></button>
        </div>
        <div className="modal-img-placeholder">
          {proj.img ? (
            <img src={proj.img} alt={`${proj.title} screenshot`} />
          ) : (
            <i className={`fas ${proj.icon}`} style={{ fontSize: 48, color: proj.color, opacity: .6 }} />
          )}
        </div>
        <div className="modal-body">
          <p className="modal-desc">{proj.desc}</p>
          <div className="modal-tags">
            {proj.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}
          </div>
          <div className="modal-actions">
            <a className="modal-btn primary" href={proj.url} target="_blank" rel="noreferrer">
              <i className="fab fa-github" /> View on GitHub
            </a>
            {proj.live && (
              <a className="modal-btn" href={proj.live} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt" /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [modal, setModal] = useState(null)
  useScrollReveal()

  return (
    <div className="projects">
      <div className="sec-header reveal">
        <div className="sec-eyebrow">// my work</div>
        <div className="sec-title">Featured <span>Projects</span></div>
      </div>
      <div className="projects-grid">
        {PROJECTS.map((p, i) => (
          <div className={`proj reveal reveal-delay-${(i % 4) + 1}`} key={p.title} onClick={() => setModal(p)}>
            <div className="proj-img-wrap">
              {p.img ? (
                <img src={p.img} alt={`${p.title} screenshot`} />
              ) : (
                <div className="proj-img-placeholder">
                  <i className={`fas ${p.icon}`} style={{ color: p.color }} />
                </div>
              )}
              <div className="proj-overlay">
                <button className="proj-overlay-btn">View Details</button>
              </div>
            </div>
            <div className="proj-body">
              <h3>{p.title}</h3>
              <p>{p.desc.substring(0, 80)}...</p>
              <div>{p.tags.map((t) => <span className="proj-tag" key={t}>{t}</span>)}</div>
              <div className="proj-footer">
                <a className="proj-link" href={p.url} target="_blank" rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}>
                  <i className="fab fa-github" /> View on GitHub →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {modal && <ProjectModal proj={modal} onClose={() => setModal(null)} />}
    </div>
  )
}
