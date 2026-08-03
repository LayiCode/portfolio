import { useScrollReveal } from '../hooks/useScrollReveal'
import { PROFILE } from '../data/profile'

export default function Contact() {
  useScrollReveal()

  return (
    <div className="contact">
      <div className="sec-header reveal">
        <div className="sec-eyebrow">// get in touch</div>
        <div className="sec-title">Contact <span>Me</span></div>
      </div>
      <div className="contact-info reveal reveal-delay-1">
        <p>I'm currently open to internship and entry-level job opportunities. I'm always happy to collaborate, learn, or just chat about tech — feel free to reach out!</p>
        <div className="contact-info-links">
          <div className="ci2">
            <i className="fas fa-envelope" />
            <a href={PROFILE.gmailCompose} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
              {PROFILE.email}
            </a>
          </div>
          <div className="ci2">
            <i className="fas fa-phone" />
            <span>{PROFILE.phone}</span>
          </div>
          <div className="ci2">
            <i className="fas fa-map-marker-alt" />
            <span>{PROFILE.location}</span>
          </div>
          <div className="ci2">
            <i className="fab fa-github" />
            <a href={PROFILE.github} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
              github.com/{PROFILE.username}
            </a>
          </div>
          <div className="ci2">
            <i className="fab fa-linkedin-in" />
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
              linkedin.com/in/olayiwola-uthman
            </a>
          </div>
          <div className="ci2">
            <i className="fab fa-twitter" />
            <a href={PROFILE.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
              x.com/{PROFILE.username}
            </a>
          </div>
          <div className="ci2">
            <i className="fab fa-whatsapp" />
            <a href={PROFILE.whatsapp} target="_blank" rel="noreferrer" style={{ color: 'var(--accent2)', textDecoration: 'none' }}>
              {PROFILE.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
