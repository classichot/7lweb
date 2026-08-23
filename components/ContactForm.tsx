"use client";

import { FormEvent, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { Arrow } from "./ui";
import { Badge } from "./ui";

const topics = [
  "General enquiry",
  "PIT24 — personal income tax",
  "CIT24 — Thai corporate income tax",
  "RISK24 — forensic, tax review or due diligence",
  "TP24 — transfer pricing",
  "GMT24 — global minimum tax",
  "Custom platform or advisory engagement",
];

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const val = (n: string) => (form.elements.namedItem(n) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value || "";
    const subject = encodeURIComponent(`[Website enquiry] ${val("topic") || "General"} — ${val("company") || "New enquiry"}`);
    const body = encodeURIComponent(
      `Name: ${val("name")}\nCompany: ${val("company")}\nRole: ${val("role")}\nEmail: ${val("email")}\nInterest: ${val("topic")}\n\n${val("message")}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "grid", gap: 16, maxWidth: 520 }}>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="c-name">Name</label>
          <input className="input" id="c-name" name="name" type="text" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="c-email">Work email</label>
          <input className="input" id="c-email" name="email" type="email" required autoComplete="email" />
        </div>
      </div>
      <div className="form-pair">
        <div className="field">
          <label htmlFor="c-company">Organisation</label>
          <input className="input" id="c-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="c-role">Role</label>
          <input className="input" id="c-role" name="role" type="text" autoComplete="organization-title" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="c-topic">What is this about?</label>
        <select className="input" id="c-topic" name="topic" defaultValue="General enquiry">
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="c-message">The process you want to improve</label>
        <textarea className="input" id="c-message" name="message" rows={5} placeholder="What the team does today, roughly how often, and where it hurts." />
      </div>
      <button type="submit" className="btn btn-deep" style={{ justifySelf: "start" }}>
        Send enquiry
        <Arrow color="#f3f2f2" />
      </button>
      <p className="body-13 muted-ink" style={{ maxWidth: "46ch" }}>
        Sending opens your email client with the details filled in — nothing is stored by this site. A hosted form and privacy notice <Badge ink>to be added at launch</Badge>
      </p>
      {sent ? (
        <p className="body-13" style={{ borderLeft: "2px solid var(--deep)", paddingLeft: 14, maxWidth: "46ch" }}>
          Your email client should now be open with the enquiry drafted. If nothing happened, write to us directly at the address on the right.
        </p>
      ) : null}
    </form>
  );
}
