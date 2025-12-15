function StarLogo({ size = 36 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#19c37d"/>
          <stop offset="1" stopColor="#0aa368"/>
        </linearGradient>
      </defs>
      <polygon
        points="50,5 62,28 90,30 68,48 74,75 50,62 26,75 32,48 10,30 38,28"
        fill="url(#g)"
        stroke="#0a7a52"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <header className="site-header" role="banner">
      <div className="container nav-row">
        <div className="brand">
          <StarLogo />
          <span className="brand-name">DG</span>
        </div>

        <nav aria-label="Primary">
          <ul className="nav">
            <li><a href="#intro">Intro</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
