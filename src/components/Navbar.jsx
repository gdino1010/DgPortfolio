import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function StarLogo({ size = 36, mode = "light" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        {/* Different gradients for light vs dark */}
        <linearGradient id="gLight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(0, 255, 0)" />
          <stop offset="1" stopColor="rgb(0, 0, 255)" />
        </linearGradient>

        <linearGradient id="gDark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgb(120, 200, 255)" />
          <stop offset="1" stopColor="rgb(30, 120, 255)" />
        </linearGradient>
      </defs>

      <polygon
        points="50,5 62,28 90,30 68,48 74,75 50,62 26,75 32,48 10,30 38,28"
        fill={mode === "dark" ? "url(#gDark)" : "url(#gLight)"}
        stroke={mode === "dark" ? "rgba(255,255,255,.35)" : "#0a7a52"}
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";

  useEffect(() => {
    const t = getInitialTheme();
    setTheme(t);
    document.documentElement.dataset.theme = t;
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      localStorage.setItem("theme", next);
      return next;
    });
  }

  return (
    <header className="site-header" role="banner">
      <div className="container nav-row">
        <div className="brand">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            <StarLogo size={34} mode={theme} />
          </button>

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
