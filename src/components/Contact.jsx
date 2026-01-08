export default function Contact() {
  return (
    <div className="container contact">
      <div className="card">
        <h2>Contact Me!</h2>

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" />
          </label>

          <label className="span-2">
            <span>Subject</span>
            <input type="text" name="subject" />
          </label>

          <label className="span-2">
            <span>Message</span>
            <textarea name="message" rows="6" />
          </label>

          <div className="actions span-2">
            <button className="btn" type="submit">Enter</button>
          </div>
        </form>
      </div>
    </div>
  );
}
