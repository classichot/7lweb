import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";
import { CONTACT_EMAIL, MAILTO } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <section className="section-hero" style={{ paddingBottom: "clamp(40px, 5vw, 72px)" }}>
        <div className="wrap">
          <p className="kicker kicker-accent">Contact</p>
          <h1 className="display display-lg">Tell us about the process.</h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            A short description of what your team does today is enough to start. We will come back with an honest view of whether technology helps — and what it would take.
          </p>
        </div>
      </section>

      <section className="section-light" style={{ padding: "clamp(48px, 6vw, 96px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap grid-2">
          <div>
            <h2 className="h4" style={{ marginBottom: 24 }}>
              Request a demonstration or consultation
            </h2>
            <ContactForm />
          </div>
          <div>
            <h2 className="h4" style={{ marginBottom: 24 }}>
              Direct
            </h2>
            <div className="rule-list">
              <div className="rule-row">
                <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 800 }}>Email</span>
                <p style={{ margin: "6px 0 0" }}>
                  <a href={MAILTO} style={{ fontSize: 17, color: "var(--deep)", fontWeight: 600, textDecoration: "none" }}>
                    {CONTACT_EMAIL}
                  </a>
                </p>
              </div>
              <div className="rule-row">
                <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 800 }}>Office</span>
                <p style={{ margin: "6px 0 0", fontSize: 15 }}>
                  Bangkok, Thailand <Badge ink>full address to be confirmed</Badge>
                </p>
              </div>
              <div className="rule-row">
                <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 800 }}>Telephone</span>
                <p style={{ margin: "6px 0 0", fontSize: 15 }}>
                  <Badge ink>placeholder</Badge>
                </p>
              </div>
              <div className="rule-row">
                <span style={{ fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 800 }}>Languages</span>
                <p style={{ margin: "6px 0 0", fontSize: 15 }}>English · ไทย</p>
              </div>
            </div>
            <h3 style={{ fontSize: 18, margin: "clamp(32px, 4vw, 48px) 0 16px", letterSpacing: "-0.02em" }}>What happens next</h3>
            <div>
              {[
                ["01", "We reply with two or three questions about the process and its data."],
                ["02", "A 45-minute call with the people who would actually do the work."],
                ["03", "A short written view: what to automate, what to leave alone, what it would take."],
              ].map(([n, t], i, arr) => (
                <div key={n} className="step" style={i === arr.length - 1 ? { borderBottom: "1px solid var(--ink-soft)" } : undefined}>
                  <span className="step-n">{n}</span>
                  <p className="body-13 stone">{t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
