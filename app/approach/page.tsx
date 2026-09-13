import type { Metadata } from "next";
import { Poster } from "@/components/ui";

export const metadata: Metadata = { title: "Our Approach" };

const steps = [
  {
    n: "01",
    t: "Understand",
    body: "Analyse the client's business, risks, regulatory obligations and strategic objectives. We start with the process as it actually runs — who touches it, where the data comes from, what breaks under deadline — rather than with a target-state diagram.",
    points: ["Process and data walkthroughs", "Regulatory obligation mapping", "Risk and control assessment", "Feasibility and value case"],
  },
  {
    n: "02",
    t: "Design",
    body: "Translate professional knowledge and regulatory requirements into rules, data models and intelligent workflows. This is the step most technology projects skip: the tax, legal, finance, trade or forensic logic is written down precisely enough to be executed and tested.",
    points: ["Rule specification and effective dating", "Data model and source mapping", "Workflow, roles and approval design", "Test cases drawn from real positions"],
  },
  {
    n: "03",
    t: "Build",
    body: "Deploy AI, analytics, automation, blockchain or other appropriate technologies. Each is chosen against the problem, and the regulated calculation always stays deterministic and inspectable.",
    points: ["Platform configuration or custom build", "Integration with existing systems", "Validation against known-good outcomes", "User training and handover"],
  },
  {
    n: "04",
    t: "Improve",
    body: "Continuously monitor results, update regulatory logic and improve decision-making. Rules change; a system that is not maintained becomes a liability, so maintenance is part of the design, not an afterthought.",
    points: ["Rule pack updates as law changes", "Model and detection tuning", "Performance and exception review", "Periodic control assurance"],
  },
];

const tech = [
  ["01", "Artificial intelligence", "Used for: unstructured documents, mapping, drafting explanations. Never for: the regulated calculation itself."],
  ["02", "Machine learning", "Used for: anomaly detection where patterns are unknown. Never for: decisions that must be explained by rule."],
  ["03", "Data analytics", "Used for: full-population testing, reconciliation, trend and threshold analysis."],
  ["04", "Workflow automation", "Used for: preparation and approval chains that must carry their own evidence."],
  ["05", "Knowledge graphs", "Used for: ownership chains, counterparty networks, relationship testing."],
  ["06", "Blockchain and trusted records", "Used for: independent, tamper-evident proof where parties do not share a system of record. Rarely the answer — and we will tell you when it is not."],
  ["07", "Secure cloud infrastructure", "Used for: isolated client environments, encryption, controlled data residency."],
  ["08", "Enterprise integration", "Used for: connecting to the ERP, payroll and reporting systems already in place."],
];

export default function ApproachPage() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <p className="kicker kicker-accent">Our approach</p>
          <h1 className="display display-lg" style={{ maxWidth: "15ch" }}>
            From advisory knowledge to operational technology
          </h1>
          <p className="lede" style={{ maxWidth: "58ch" }}>
            Advice that lives in a document depends on the person who wrote it. Advice encoded in a system keeps working after the engagement ends. Our method is how we make that transfer safely — without pretending judgment can be automated away.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap" style={{ display: "grid", gap: "clamp(40px, 5vw, 72px)" }}>
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="grid-2s"
              style={{
                borderTop: "2px solid var(--ink)",
                paddingTop: 24,
                borderBottom: i === steps.length - 1 ? "2px solid var(--ink)" : undefined,
                paddingBottom: i === steps.length - 1 ? "clamp(24px, 3vw, 40px)" : undefined,
              }}
            >
              <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
                <span className="num-deep">{s.n}</span>
                <h2 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", letterSpacing: "-0.03em" }}>{s.t}</h2>
              </div>
              <p className="body stone">{s.body}</p>
              <div style={{ display: "grid", gap: 8, alignContent: "start", fontSize: 13, color: "var(--dust)" }}>
                {s.points.map((p) => (
                  <span key={p}>{p}</span>
                ))}
              </div>
            </div>
          ))}
          <p className="quote" style={{ fontSize: "clamp(22px, 2.8vw, 36px)", lineHeight: 1.22, maxWidth: "24ch" }}>
            We use technology where it creates measurable value — not simply because it is fashionable.
          </p>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <div className="grid-2" style={{ marginBottom: "clamp(40px, 5vw, 64px)", gap: "clamp(24px, 4vw, 64px)" }}>
            <div>
              <p className="kicker kicker-accent">Technology</p>
              <h2 className="h3" style={{ fontSize: "clamp(28px, 3.6vw, 50px)", maxWidth: "16ch" }}>
                The technology behind better advice
              </h2>
            </div>
            <p className="body muted" style={{ maxWidth: "50ch", alignSelf: "end" }}>
              Each technology below has a job. Where a simpler answer works, we use the simpler answer — and we will say so before a project starts rather than after it.
            </p>
          </div>
          <div className="cells">
            {tech.map(([n, t, b]) => (
              <div className="cell" key={n}>
                <span className="num">{n}</span>
                <h4 style={{ fontSize: 17, color: "var(--snow)" }}>{t}</h4>
                <p className="body-13 muted">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Poster
        accent="#e10600"
        title="Start with one process. Prove it. Then scale."
        body="Most engagements begin with a single painful process and a fixed scope. If the value is not there, we say so before anyone commits to a platform."
        label="Schedule a Consultation"
      />
    </>
  );
}
