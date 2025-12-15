export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-row">
        <small>© {new Date().getFullYear()} David Gonzalez</small>
        <nav aria-label="Footer">
          <a href="#intro">Intro</a>
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
