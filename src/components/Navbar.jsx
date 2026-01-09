import { useEffect, useState } from "react";

function getInitialTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function ThemeIcon({ size = 28, mode = "light" }) {
  const isDark = mode === "dark";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* SUN (light mode) */}
      {!isDark && (
        <>
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </>
      )}

      {/* MOON (dark mode) */}
      {isDark && (
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      )}
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
            <ThemeIcon size={26} mode={theme} />
          </button>
        </div>

        {/*
        <div className="img-logo">
                                          <img
                                              src="/DG_Logo2.png"
                                              alt="DG Logo"
                                              onError={(e) => (e.currentTarget.style.display = 'none')}
                                              />
                                      </div>
                                      */}

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
