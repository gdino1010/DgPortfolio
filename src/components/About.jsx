export default function About() {
  return (
    <div className="container about">
      <h2>About Me</h2>

      <div className="about__grid">
        <div className="about__text">
          <p>
            I&apos;m a passionate Frontend Developer with over 5 years of experience
            creating scalable and dynamic web applications. My most recent work experience
            is with Kiyo, building a web app that provides an alternative to the traditional
            real estate market.
          </p>
          <p>
            In addition to my development work, I taught at CodeWizardHQ, where I instructed
            a variety of courses ranging from beginner web development to advanced programming
            topics like game development and Object‑Oriented Programming.
          </p>
          <p>
            I&apos;m currently seeking new opportunities to work on exciting projects with a team
            that values collaboration, innovation, and continuous learning. If you&apos;re
            interested in working together, feel free to reach out via email or any of my social media profiles.
          </p>

          <h3 className="subheading">Technologies I use</h3>
          <ul className="tech-list">
            <li>JavaScript (ES6+)</li>
            <li>TypeScript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>Tailwind</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>

        <div className="about__photo img-frame tall ">
          <img
            src="/profile.jpg"
            alt="David holding a guitar outdoors"
            onError={(e) => { (e.currentTarget.style.display = 'none') }}
          />
        </div>
      </div>
    </div>
  );
}
