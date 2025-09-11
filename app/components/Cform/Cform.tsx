import React, { useState } from "react";
import "./Cform.scss";

type CformProps = {
  actionUrl?: string;
  onSuccess?: () => void;
  onError?: (message: string) => void;
  title?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Cform: React.FC<CformProps> = ({
  actionUrl = "/api/contact",
  onSuccess,
  onError,
  title,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    if (!name.trim()) return "Please enter your name.";
    if (!emailRegex.test(email)) return "Please enter a valid email.";
    if (!subject.trim()) return "Please enter a subject.";
    if (message.trim().length < 10)
      return "Message must be at least 10 characters.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSubmitting(true);

    try {
      const res = await fetch(actionUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) throw new Error("Failed to send. Please try again.");
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      onSuccess?.();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setError(msg);
      onError?.(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="cform" onSubmit={handleSubmit} noValidate>
      {title && (
        <div className="cform__header">
          <h3 className="cform__title">{title}</h3>
        </div>
      )}
      <div className="cform__row">
        <div className="cform__field">
          <label className="cform__label" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="cform__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
            disabled={submitting}
            required
          />
        </div>
        <div className="cform__field">
          <label className="cform__label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="cform__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
            disabled={submitting}
            required
          />
        </div>
      </div>

      <div className="cform__field">
        <label className="cform__label" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          className="cform__input"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="How can we help?"
          disabled={submitting}
          required
        />
      </div>

      <div className="cform__field">
        <label className="cform__label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="cform__textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message..."
          rows={6}
          disabled={submitting}
          required
        />
      </div>

      {error && (
        <div className="cform__error" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="cform__success">
          Thanks! We will get back to you soon.
        </div>
      )}

      <button className="cform__submit" type="submit" disabled={submitting}>
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Cform;
