export default function Project() {
  return (
    <div className="container project">
      <h2>AlphaAnswers</h2>

      <p className="muted">
        A full-stack quiz web application built using the MERN stack and deployed on Vercel and Render.
        I served as Project Manager, leading a team of seven developers and overseeing the project from planning
        through deployment. I designed the overall architecture, documented clear technical requirements,
        and ensured the team could execute confidently without ambiguity or overlooked edge cases.
        Throughout development, I acted as the primary problem-solver, addressing technical challenges,
        answering questions, and keeping the team aligned to maintain steady progress and high productivity.
      </p>

      <p className="tools">
        <strong>Tools:</strong> MongoDB, Express.js, React, Node.js, GitHub, Vercel, & Render
      </p>

      <div className="img-frame wide placeholder">
        {/* Put /public/alphaanswers.jpeg to replace the placeholder */}
        <img
          src="public/alphaanswers.jpeg"
          alt="AlphaAnswers quiz screen"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
    </div>
  );
}
