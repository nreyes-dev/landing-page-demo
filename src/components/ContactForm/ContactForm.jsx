import React, { useState } from "react";
import "./ContactForm.scss";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required.";
    if (!email.trim()) errs.email = "Email is required.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Simulate success (no actual POST)
      setSubmitted(true);
      alert("Form submitted successfully!");
      setName("");
      setEmail("");

      // Clear the success message after a few seconds (optional)
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="contact__title">Contact Us</h2>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
              placeholder=""
            />
            {errors.name && (
              <small id="contact-name-error" className="form-error">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-row">
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "contact-email-error" : undefined}
              placeholder=""
            />
            {errors.email && (
              <small id="contact-email-error" className="form-error">
                {errors.email}
              </small>
            )}
          </div>

          <button type="submit" className="contact__submit">
            Submit
          </button>

          {submitted && (
            <p role="status" className="form-success">
              Thanks! We’ll be in touch soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
