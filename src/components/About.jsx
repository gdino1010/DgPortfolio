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
            Outside of school and work, I have a wide range of interests that reflect my core values.
            I place a high priority on maintaining strong relationships with friends and family.
            I enjoy reading about the philosophy of religion and Stoicism, and I play both piano and guitar.
            Physical and mental health are also central priorities in my life.
            I maintain disciplined habits around exercise, sleep, and nutrition.
          </p>
          <p>
            These values shape how I work.
            My emphasis on relationships has made me a strong team player who uses proactive communication to resolve issues early.
            My commitment to physical and mental well-being has developed discipline and consistency,
            allowing me to remain dependable and resilient when working toward long-term goals.
            I believe these qualities translate directly into effective collaboration and sustained performance.
            If you have similar priorities, then we would work great together.
          </p>
          <p>
            I’m currently seeking an internship or entry-level opportunities where I can continue learning,
            contribute meaningfully to real-world projects, and grow as a software engineer.
          </p>

          <h3 className="subheading">Technologies I use</h3>
          <ul className="tech-list">
                <li>Frontend: HTML, CSS, React</li>
                <li>Languages: Java, JavaScript, C, Python</li>
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
