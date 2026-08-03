import { useScrollReveal } from '../hooks/useScrollReveal'

const ABOUT_INFO = [
  { icon: 'fa-user', label: 'Name', value: 'Olayiwola Uthman' },
  { icon: 'fa-map-marker-alt', label: 'Location', value: 'Lagos, Nigeria' },
  { icon: 'fa-envelope', label: 'Email', value: 'olayiwolauthman310@gmail.com' },
  { icon: 'fa-phone', label: 'Phone', value: '09167704027' },
  { icon: 'fa-graduation-cap', label: 'Education', value: 'Computer Science · LAUTECH' },
]

const FOCUS = [
  { icon: 'fa-server', title: 'Backend', desc: 'Building secure REST APIs with Java and Spring Boot — auth, payments, and clean architecture.' },
  { icon: 'fa-code', title: 'Frontend', desc: 'Crafting responsive, polished interfaces with React, HTML, CSS, and JavaScript.' },
  { icon: 'fa-database', title: 'Data', desc: 'Designing schemas and queries with SQL, PostgreSQL, and Supabase.' },
]

export default function About() {
  useScrollReveal()

  return (
    <div className="about">
      <div className="sec-header reveal">
        <div className="sec-eyebrow">// about me</div>
        <div className="sec-title">About <span>Me</span></div>
      </div>
      <div className="about-grid">
        <div className="about-bio reveal reveal-delay-1">
          <div className="about-avatar">OU</div>
          <p>
            Hi, I'm Olayiwola Uthman — a software developer from Lagos, Nigeria, passionate about building clean,
            functional software from Java backends to polished frontends. I'm currently studying Computer Science at
            LAUTECH while sharpening my Java skills at NIIT Surulere.
          </p>
          <p>
            I love solving real problems, exploring new technologies, and turning ideas into products people enjoy
            using. Every project is a chance to learn something new, and I embrace each challenge with enthusiasm and
            a drive to keep improving.
          </p>
        </div>
        <div className="about-side reveal reveal-delay-2">
          <div className="about-info">
            {ABOUT_INFO.map((it) => (
              <div className="about-info-item" key={it.label}>
                <i className={`fas ${it.icon}`} />
                <div>
                  <span>{it.label}</span>
                  <p>{it.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="focus-label reveal">// what I do</div>
      <div className="focus-grid">
        {FOCUS.map((f, i) => (
          <div className={`focus-card reveal reveal-delay-${i + 1}`} key={f.title}>
            <div className="focus-icon"><i className={`fas ${f.icon}`} /></div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
