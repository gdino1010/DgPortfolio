export default function Hero() {
  return (
    <div className="container hero">
      <div className="hero__text">
        <h1 className="hero__title">
          Hi! My name is <span className="accent">David Gonzalez</span>.<br/>
          I&apos;m a Software Engineer from Sacramento, CA.
        </h1>

        <p className="lead">
          I specialize in delivering high‑quality, performant, and accessible interfaces
          using React, TypeScript, and Next.js.
        </p>

        <div className="chip-row" role="group" aria-label="Profile links">
          <a className="chip" href="#" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="chip" href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="chip" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="chip" href="mailto:you@example.com">G‑mail</a>
        </div>
      </div>
    </div>
  );
}
