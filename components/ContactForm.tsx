"use client";

import { useState, type FormEvent } from "react";
import { site } from "../site";

export function ContactForm() {
  const [feedback, setFeedback] = useState("");

  function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Website enquiry: ${data.get("project-type")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "Not provided"}`,
      `Project type: ${data.get("project-type")}`,
      "",
      "Project details:",
      `${data.get("message")}`,
    ].join("\n");
    setFeedback("Opening your email app with the enquiry details. Send the message there to reach our team.");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-form" onSubmit={submitEnquiry}>
    <div className="contact-form-heading"><span className="eyebrow">PROJECT ENQUIRY</span><h2>Tell us what you’re planning.</h2><p>Share a few details and we’ll continue the conversation by email.</p></div>
    <div className="contact-form-grid">
      <label>Name<input name="name" type="text" autoComplete="name" placeholder="Your name" required /></label>
      <label>Email address<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label>
      <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" placeholder="+254" /></label>
      <label>Project type<select name="project-type" defaultValue="Residential" required><option>Residential</option><option>Office</option><option>Hotel / hospitality</option><option>Product enquiry</option><option>Other</option></select></label>
      <label className="contact-message-field">Project details<textarea name="message" rows={5} placeholder="Tell us about the location, scope and timing…" required /></label>
    </div>
    <button className="contact-submit" type="submit">SEND ENQUIRY <span aria-hidden="true">↗</span></button>
    {feedback && <p className="form-feedback" role="status">{feedback}</p>}
    <p className="form-note">This form prepares an email to {site.email} using your default email app.</p>
  </form>;
}
