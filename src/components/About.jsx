export default function About() {
  return (
    <div className="container about">
      <h2>About Me</h2>

      <div className="about__grid">
        <div className="about__text">
          <p>
            I’m a Computer Science student at California State University, Sacramento with a
            strong interest in frontend and full-stack development. I enjoy building clean,
            responsive, and user-focused web applications, and I’m particularly experienced
            working with React and the MERN stack.
          </p>
          <p>
            Through academic projects like AlphaAnswers, I’ve gained hands-on experience
            designing application architecture, collaborating in team environments, and
            leading development efforts from planning through deployment. As a Project
            Manager on a team of seven, I focused on clear documentation, problem-solving,
            and keeping development organized and efficient.
          </p>
          <p>
            In addition to software development, my professional experience has strengthened
            my teamwork, organization, and communication skills. I’m currently seeking internship
            or entry-level opportunities where I can continue learning, contribute meaningfully
            to real-world projects, and grow as a software engineer.
          </p>

          <h3 className="subheading">Technologies I use</h3>
          <ul className="tech-list">
              <li>Frontend: React</li>
            <li>Languages: Java, Python, C</li>
            <li>Backend & Databases: Node.js, Express.js, MongoDB, MySQL</li>
            <li>Tools: Git, GitHub, Vercel, Render</li>
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
