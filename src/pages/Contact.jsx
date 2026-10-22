import { useRef, useState } from "react";
import { MapPin, Mail, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { business as b } from "../data/business";
export default function Contact() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const form = useRef(null);
  function submit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next = {};
    if (!data.get("name").trim()) next.name = "Please enter your full name.";
    if (!data.get("email").trim())
      next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.get("email")))
      next.email = "Please enter a valid email address.";
    if (!data.get("message").trim()) next.message = "Please write a message.";
    setErrors(next);
    setSent(false);
    if (Object.keys(next).length) {
      form.current.elements[Object.keys(next)[0]].focus();
      return;
    }
    e.currentTarget.reset();
    setSent(true);
  }
  return (
    <section className="wrap page section">
      <div className="page-intro">
        <p className="eyebrow">THERE'S A SEAT FOR YOU HERE</p>
        <h1>
          Come say <em>hello.</em>
        </h1>
        <p>
          We'd love to hear from you, whether you have a question
          <br className="desktop-break" /> or just want to stop by for a coffee.
        </p>
      </div>
      <div className="contact-grid">
        <div className="contact-info">
          <h2>Find our little corner.</h2>
          <p>Good company. A warm cup. A little time for yourself.</p>
          <div className="contact-detail">
            <MapPin />
            <div>
              <h3>NORD & BEAN</h3>
              <p>
                {b.address}
                <br />
                {b.location}
              </p>
              <small>
                Fictional business and placeholder address.
                <br />
                This is not a verified café location.
              </small>
            </div>
          </div>
          <div className="contact-detail">
            <Mail />
            <div>
              <h3>Drop us a line</h3>
              <a href={`mailto:${b.email}`}>{b.email}</a>
              <small>Example email address for this portfolio concept.</small>
            </div>
          </div>
          <div className="contact-detail">
            <Clock />
            <div>
              <h3>Opening hours</h3>
              <dl>
                <div>
                  <dt>Monday–Friday</dt>
                  <dd>{b.weekdays}</dd>
                </div>
                <div>
                  <dt>Saturday–Sunday</dt>
                  <dd>{b.weekends}</dd>
                </div>
              </dl>
            </div>
          </div>
          <img
            src="/images/cafe-seating.jpg"
            alt="Sunlit café seating beside a window"
            loading="lazy"
            width="800"
            height="500"
          />
        </div>
        <div className="form-panel">
          <p className="eyebrow">A NOTE TO OUR LITTLE CAFÉ</p>
          <h2>What's on your mind?</h2>
          <p id="demo-note" className="demo-note">
            Demonstration form. No message will be sent, and your information
            won't be stored.
          </p>
          <form
            ref={form}
            onSubmit={submit}
            noValidate
            aria-describedby="demo-note"
          >
            {[
              ["name", "Full Name", "text"],
              ["email", "Email Address", "email"],
              ["message", "Message", "textarea"],
            ].map(([id, label, type]) => (
              <div className="field" key={id}>
                <label htmlFor={id}>
                  {label} <span>(required)</span>
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={id}
                    name={id}
                    required
                    rows="5"
                    aria-invalid={!!errors[id]}
                    aria-describedby={errors[id] ? `${id}-error` : undefined}
                  />
                ) : (
                  <input
                    id={id}
                    name={id}
                    type={type}
                    autoComplete={id === "name" ? "name" : "email"}
                    required
                    aria-invalid={!!errors[id]}
                    aria-describedby={errors[id] ? `${id}-error` : undefined}
                  />
                )}
                {errors[id] && (
                  <span className="error" id={`${id}-error`}>
                    {errors[id]}
                  </span>
                )}
              </div>
            ))}
            <button className="button" type="submit">
              Send Message <ArrowRight size={16} />
            </button>
            <div role="status" className={sent ? "success" : ""}>
              {sent && (
                <>
                  <CheckCircle size={20} />
                  <span>
                    Thanks! This is a demo form, so no message was actually
                    sent.
                  </span>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
