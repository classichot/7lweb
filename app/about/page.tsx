import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge } from "@/components/ui";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <p className="kicker kicker-accent">About 7L Advisory</p>
          <h1 className="display display-md">
            7L Advisory was created around a simple belief: professional advice becomes more valuable when it can be operationalised through technology.
          </h1>
          <p className="lede" style={{ color: "var(--mute)", maxWidth: "58ch" }}>
            We combine advisory knowledge, regulatory understanding, data and product development to create practical systems clients can use continuously — not recommendations they read once.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">Our vision</p>
            <h2 className="h3" style={{ fontSize: "clamp(26px, 3.2vw, 42px)", maxWidth: "18ch", marginBottom: 18 }}>
              A new model of advisory
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              The value of professional work has always been concentrated in a few experienced people and released in short bursts — a review, a memo, an opinion. That model does not scale to the volume of data and the pace of regulatory change organisations now face.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              Our vision is advisory whose output is a working capability: rules that run, data that reconciles, evidence that accumulates. The expertise stays; what changes is how often it can be applied.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Our multidisciplinary approach</p>
            <div className="rule-list">
              {[
                ["One team, four disciplines", "Tax and risk professionals, data engineers, software developers and product designers work on the same problem at the same time."],
                ["Specification is professional work", "The rules a platform executes are written by the people qualified to interpret them — not translated second-hand into a backlog."],
                ["Built to be handed over", "Clients should be able to run the system themselves. Dependence on us is a design failure, not a business model."],
              ].map(([t, b]) => (
                <div className="rule-row" key={t}>
                  <h4 style={{ fontSize: 17, marginBottom: 4 }}>{t}</h4>
                  <p className="body-13 muted-ink">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-accent">Advisory expertise</p>
            <h2 className="h4" style={{ maxWidth: "20ch", marginBottom: 20, color: "var(--snow)" }}>
              Regulated domains, handled by people who practise in them
            </h2>
            <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line-soft)" }}>
              {["Corporate and personal taxation", "Transfer pricing and international tax", "OECD Pillar Two and global minimum tax", "Forensic accounting and fraud investigation", "Risk, internal audit and compliance"].map((t) => (
                <div key={t} style={{ padding: "14px 0", borderBottom: "1px solid var(--line-soft)", fontSize: 14, color: "var(--mute-3)" }}>
                  {t}
                </div>
              ))}
              <div style={{ padding: "14px 0", fontSize: 13, color: "var(--mute)" }}>
                Professional qualifications and memberships <Badge>to be confirmed</Badge>
              </div>
            </div>
          </div>
          <div>
            <p className="kicker kicker-accent">Technology capability</p>
            <h2 className="h4" style={{ maxWidth: "20ch", marginBottom: 20, color: "var(--snow)" }}>
              Product engineering, not project outsourcing
            </h2>
            <div style={{ display: "grid", gap: 0, borderTop: "1px solid var(--line-soft)" }}>
              {["Deterministic calculation engines and rule packs", "Data pipelines, reconciliation and quality control", "Applied AI for extraction, mapping and review", "Analytics, graph modelling and detection", "Secure cloud architecture and enterprise integration"].map((t) => (
                <div key={t} style={{ padding: "14px 0", borderBottom: "1px solid var(--line-soft)", fontSize: 14, color: "var(--mute-3)" }}>
                  {t}
                </div>
              ))}
              <div style={{ padding: "14px 0", fontSize: 13, color: "var(--mute)" }}>Platform architecture detail available under NDA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">Responsible and explainable AI</p>
          <h2 className="h3" style={{ fontSize: "clamp(28px, 3.6vw, 50px)", maxWidth: "20ch", marginBottom: "clamp(32px, 4vw, 56px)" }}>
            AI you can put in front of a regulator
          </h2>
          <div className="grid-3">
            {[
              ["01", "The engine calculates, the model assists", "Regulated outcomes are produced by deterministic logic. AI proposes, extracts and explains — a person or a rule always decides."],
              ["02", "Every output traceable", "Extractions link to the source page; calculations link to inputs and rule version. Nothing arrives without provenance."],
              ["03", "Human review by design", "Low-confidence results are routed to a qualified reviewer rather than passed through silently."],
              ["04", "Client data stays client data", "Confidential information is not used to train general models. Data handling terms are agreed in writing before any engagement."],
            ].map(([n, t, b]) => (
              <div key={n} style={{ borderTop: "2px solid var(--ink)", paddingTop: 16 }}>
                <span className="num-deep">{n}</span>
                <h4 style={{ fontSize: 18, margin: "8px 0 6px" }}>{t}</h4>
                <p className="body-13 muted-ink">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">The people behind the platforms</p>
          <h2 className="h2" style={{ fontSize: "clamp(28px, 3.8vw, 54px)", maxWidth: "20ch", marginBottom: "clamp(28px, 3vw, 44px)" }}>
            You can read our CVs. They won&apos;t tell you whether the software works.
          </h2>
          <div className="grid-2s" style={{ borderTop: "2px solid var(--ink)", paddingTop: "clamp(24px, 3vw, 36px)" }}>
            <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
              <p className="body-16" style={{ maxWidth: "52ch", fontWeight: 600 }}>
                Our profession has quietly arranged itself so that the credential is the product. A logo on the cover page. A partner signature. Three months, a great many billed hours, and at the end a rubber stamp confirming roughly what you already suspected.
              </p>
              <p className="body stone" style={{ maxWidth: "52ch" }}>
                We are not going to pretend qualifications do not matter — ours are real, and regulated work is signed by people entitled to sign it. But a credential is an input, not an outcome. It tells you someone passed an exam. It does not tell you whether your filing season got shorter, whether the anomaly surfaced in March instead of November, or whether the number can still be reproduced two years from now.
              </p>
              <p className="body stone" style={{ maxWidth: "52ch" }}>
                So evaluate us the way you would evaluate anything else you buy: put the platform in front of the people who would actually use it, with your own data, and see whether the work gets easier. If it does not, no amount of letters after our names should persuade you.
              </p>
            </div>
            <div>
              <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 800 }}>What we would rather you judge</span>
              <div style={{ display: "grid", gap: 0, marginTop: 14 }}>
                {[
                  ["01", "Does it survive your data — the messy year, not the clean sample?"],
                  ["02", "Can your team run it in a week without us in the room?"],
                  ["03", "Can any number in it be traced to its source and rule version, years later?"],
                  ["04", "At renewal, would the people who use it fight to keep it?"],
                ].map(([n, t]) => (
                  <div key={n} className="step">
                    <span className="step-n">{n}</span>
                    <p className="body-14">{t}</p>
                  </div>
                ))}
              </div>
              <p className="body-13 muted-ink" style={{ marginTop: 20, maxWidth: "44ch" }}>
                If procurement needs a credentials pack, we will send one. It is a PDF. It will not run your close. <Badge ink>team profiles available on request</Badge>
              </p>
              <Link className="btn btn-deep" href="/contact" style={{ marginTop: 20 }}>
                Put it in front of your team
                <Arrow color="#f3f2f2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(30px, 4.6vw, 64px)", maxWidth: "20ch", marginBottom: 24 }}>
            Work with a team that builds what it recommends.
          </h2>
          <Link className="btn btn-accent" href="/contact">
            Talk to Us
            <Arrow color="#0d0f14" />
          </Link>
        </div>
      </section>
    </>
  );
}
