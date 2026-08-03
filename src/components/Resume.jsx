import { useScrollReveal } from '../hooks/useScrollReveal'

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: 'fa-code',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Vite'],
  },
  {
    title: 'Backend',
    icon: 'fa-server',
    skills: ['Java', 'Spring Boot', 'Spring Security', 'REST API Design', 'Node.js', 'Swagger', 'JWT'],
  },
  {
    title: 'Databases',
    icon: 'fa-database',
    skills: ['SQL', 'PostgreSQL', 'Supabase'],
  },
  {
    title: 'Integrations',
    icon: 'fa-plug',
    skills: ['Paystack', 'Gemini AI'],
  },
  {
    title: 'Mobile & Desktop',
    icon: 'fa-desktop',
    skills: ['Java Swing', 'JavaFX'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'fa-cloud',
    skills: ['Vercel', 'Docker'],
  },
  {
    title: 'Tools & Version Control',
    icon: 'fa-toolbox',
    skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman', 'Figma'],
  },
]

export default function Resume() {
  useScrollReveal()

  return (
    <div className="resume">
      <div className="sec-header reveal">
        <div className="sec-eyebrow">// my background</div>
        <div className="sec-title">My <span>Resume</span></div>
      </div>
      <div className="resume-grid">
        <div className="r-block reveal reveal-delay-1">
          <h3>Education</h3>
          <div className="edu-item">
            <strong>Java Programming</strong>
            <em>NIIT Surulere</em>
            <span>2024 – Present</span>
          </div>
          <div className="edu-item">
            <strong>Computer Science</strong>
            <em>Ladoke Akintola University of Technology</em>
            <span>2025 – Present</span>
          </div>
        </div>
        <div className="r-block reveal reveal-delay-2">
          <h3>Growth</h3>
          <p className="growth-p">Constantly exploring new technologies, improving efficiency, and contributing to innovative projects. My journey in software development is always evolving.</p>
        </div>
        <div className="r-block full reveal reveal-delay-3">
          <h3>Skills</h3>
          <div className="skills-cards">
            {SKILL_CATEGORIES.map((c) => (
              <div className="skill-card" key={c.title}>
                <div className="skill-card-head">
                  <div className="skill-icon"><i className={`fas ${c.icon}`} /></div>
                  <h4>{c.title}</h4>
                </div>
                <div className="skill-tags">
                  {c.skills.map((s) => <span className="skill-tag" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="r-block full reveal reveal-delay-4">
          <h3>Contact</h3>
          <div className="contact-grid">
            <div className="ci"><i className="fas fa-envelope" /><span>olayiwolauthman310@gmail.com</span></div>
            <div className="ci"><i className="fas fa-phone" /><span>09167704027</span></div>
            <div className="ci"><i className="fas fa-map-marker-alt" /><span>16, Boyejo, Olodi Apapa</span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
