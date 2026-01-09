import { useState } from "react";

export default function Contact() {
    const [toast, setToast] = useState({ open: false, text: "", type: "success" });
    const [errors, setErrors] = useState({});

    const showToast = (text, type = "success") => {
        setToast({ open: true, text, type });
        window.clearTimeout(showToast._t);
        showToast._t = window.setTimeout(() => {
          setToast((t) => ({ ...t, open: false }));
        }, 3000);
      };

      const validate = (form) => {
        const next = {};
        if (!form.name.value.trim()) next.name = "Name is required.";
        if (!form.email.value.trim()) next.email = "Email is required.";
        if (!form.subject.value.trim()) next.subject = "Subject is required.";
        if (!form.message.value.trim()) next.message = "Message is required.";
        return next;
      };

    const onSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const nextErrors = validate(form);
        setErrors(nextErrors);

        if (Object.keys(nextErrors).length > 0) {
              showToast("Please fix the highlighted fields.", "error");
              return;
            }

        const formData = new FormData(form);
            formData.append("access_key", "82bf8034-108b-4a57-8439-bc7c38cfbc38");

            try {
              const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
              });

              const data = await response.json();

              if (data.success) {
                    showToast("Message sent successfully!", "success");
                    form.reset();
                    setErrors({});
                  } else {
                      showToast("Something went wrong. Please try again.", "error");
                  }
              } catch {
                  showToast("Network error. Please try again.", "error");
              }
            };

  return (
    <div className="container contact">
      <div className="card">
        <h2>Contact Me!</h2>

        <form className="form" onSubmit={onSubmit} noValidate>
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" />
            {errors.name && <small className="field-error">{errors.name}</small>}
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" autoComplete="email" />
            {errors.email && <small className="field-error">{errors.email}</small>}
          </label>

          <label className="span-2">
            <span>Subject</span>
            <input type="text" name="subject" />
            {errors.subject && <small className="field-error">{errors.subject}</small>}
          </label>

          <label className="span-2">
            <span>Message</span>
            <textarea name="message" rows="6" />
            {errors.message && <small className="field-error">{errors.message}</small>}
          </label>

          <div className="actions span-2">
            <button className="btn" type="submit">Enter</button>
          </div>
        </form>
      </div>

      {toast.open && (
              <div className={`toast ${toast.type}`} role="status" aria-live="polite">
                <div className="toast-box">
                  <p>{toast.text}</p>
                  <button
                    className="toast-close"
                    onClick={() => setToast((t) => ({ ...t, open: false }))}
                    aria-label="Close"
                    type="button"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}
    </div>
  );
}
