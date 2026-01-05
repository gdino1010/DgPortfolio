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
          <a className="chip" href="https://docs.google.com/document/d/1P9hlZ689ctmrc5BxC2kwvn4enr8B_xzSk5R0oaVLDDY/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
          <a className="chip" href="https://github.com/gdino1010" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="chip" href="https://www.linkedin.com/in/david-gonzalez-163803346/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="chip" href="mailto:gonzalez.david0117@gmail.com">G‑mail</a>
        </div>
      </div>
    </div>
  );
}
