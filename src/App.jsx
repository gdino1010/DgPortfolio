import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Project from './components/Project.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#intro">Skip to content</a>
      <Navbar />

      <main id="content">
        <section id="intro" className="section">
          <Hero />
        </section>

        <section id="work" className="section">
          <Project />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}
