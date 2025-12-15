export default function Project() {
  return (
    <div className="container project">
      <h2>AlphaAnswers</h2>

      <p className="muted">
        Led a team to make education more interactive. The platform allows teachers to
        create and grade quizzes, while students can take quizzes and view their results.
      </p>

      <p className="tools">
        <strong>Tools:</strong> MongoDB, Express.js, React, Node.js, GitHub, Vercel, & Render
      </p>

      <div className="img-frame wide placeholder">
        {/* Put /public/alphaanswers.jpeg to replace the placeholder */}
        <img
          src="/alphaanswers.jpeg"
          alt="AlphaAnswers quiz screen"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
      </div>
    </div>
  );
}
