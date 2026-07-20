"use client";

import { FormEvent, useState } from "react";
import Icon from "./Icon";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const phone = String(form.get("phone") || "");
    const project = String(form.get("project") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject: ${project}\n\nMessage:\n${message}`);
    setSent(true);
    window.location.href = `mailto:info@puresurface.co.uk?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label><span>Your name</span><input name="name" required placeholder="Full name" /></label>
        <label><span>Email address</span><input name="email" type="email" required placeholder="you@example.com" /></label>
        <label><span>Phone number</span><input name="phone" type="tel" placeholder="Your contact number" /></label>
        <label><span>Project type</span>
          <select name="project" defaultValue="Patio">
            <option>Patio</option><option>Garden</option><option>Pathway</option><option>Terrace</option><option>Driveway</option><option>Commercial project</option>
          </select>
        </label>
      </div>
      <label><span>How can we help?</span><textarea name="message" rows={6} required placeholder="Tell us the area, preferred style and approximate square metres." /></label>
      <button className="button button-primary button-large" type="submit">Send Enquiry <Icon name="arrow" size={19}/></button>
      {sent && <p className="form-note">Your email app is opening with the enquiry details.</p>}
    </form>
  );
}
