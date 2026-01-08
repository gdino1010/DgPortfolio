import { useState } from "react";

export default function Contact() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
            formData.append("access_key", "82bf8034-108b-4a57-8439-bc7c38cfbc38");

            try {
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const data = await response.json();

              if (data.success) {
                setResult("Message sent successfully!");
                event.target.reset();
              } else {
                setResult("Something went wrong. Please try again.");
              }
            } catch (error) {
              setResult("Network error. Please try again.");
            }
          };

  return (
    <div className="container contact">
      <div className="card">
        <h2>Contact Me!</h2>

        <form className="form" onSubmit={onSubmit}>
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required/>
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" required/>
          </label>

          <label className="span-2">
            <span>Subject</span>
            <input type="text" name="subject" required/>
          </label>

          <label className="span-2">
            <span>Message</span>
            <textarea name="message" rows="6" required/>
          </label>

          <div className="actions span-2">
            <button className="btn" type="submit">Enter</button>
          </div>

            {result && <p className="form-result span-2">{result}</p>}
        </form>
      </div>
    </div>
  );
}
