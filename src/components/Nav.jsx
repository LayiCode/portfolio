const NAV_ITEMS = [
  { id: 'home',     label: 'Home',     icon: 'fa-house' },
  { id: 'about',    label: 'About',    icon: 'fa-user' },
  { id: 'projects', label: 'Projects', icon: 'fa-briefcase' },
  { id: 'resume',   label: 'Resume',   icon: 'fa-file-alt' },
  { id: 'contact',  label: 'Contact',  icon: 'fa-envelope' },
]

export default function Nav({ active, setActive }) {
  return (
    <nav className="nav">
      <div className="nav-logo">OU</div>
      <div className="nav-links">
        {NAV_ITEMS.map((n) => (
          <button
            key={n.id}
            className={`nb${active === n.id ? ' active' : ''}`}
            onClick={() => setActive(n.id)}
            aria-label={n.label}
            aria-current={active === n.id ? 'page' : undefined}
          >
            <i className={`fas ${n.icon}`} />
            <span>{n.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}