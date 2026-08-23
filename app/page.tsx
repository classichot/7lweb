import Link from "next/link";
import { platforms } from "@/lib/site";
import { Arrow, Bullet, Figure } from "@/components/ui";

const motes = [
  [8, 78, 15, 0],
  [23, 92, 18, 2.4],
  [41, 72, 14, 5],
  [62, 88, 17, 1.2],
  [77, 76, 16, 3.6],
  [90, 90, 15, 6],
] as const;

const shift = [
  ["Static reports", "Interactive platforms"],
  ["Manual spreadsheets", "Automated data processing"],
  ["Periodic reviews", "Continuous monitoring"],
  ["General recommendations", "Decision-ready intelligence"],
  ["Consultant-dependent processes", "Scalable institutional capability"],
];

const steps = [
  ["01", "Understand", "Analyse the client's business, risks, regulatory obligations and strategic objectives."],
  ["02", "Design", "Translate professional knowledge and regulatory requirements into rules, data models and intelligent workflows."],
  ["03", "Build", "Deploy AI, analytics, automation, blockchain or other appropriate technologies."],
  ["04", "Improve", "Continuously monitor results, update regulatory logic and improve decision-making."],
];

const why = [
  ["01", "Advisory and technology under one team", "Tax and risk specialists sit with engineers, so professional judgment reaches the product without translation loss."],
  ["02", "Purpose-built platforms for complex professional work", "Not generic dashboards. Each platform models a specific regulatory and operational domain."],
  ["03", "Explainable and auditable AI", "AI assists with mapping, review and explanation. Regulated calculations stay deterministic and reproducible."],
  ["04", "Secure enterprise-grade data architecture", "Role-based access, encryption in transit and at rest, and a complete record of who changed what, when."],
  ["05", "Designed around real regulations and business processes", "Rules are effective-dated and versioned, so a calculation can be reproduced exactly as it stood on filing day."],
  ["06", "Scalable from a single company to a multinational group", "The same engine serves one entity or hundreds across jurisdictions, in-house teams or advisory portfolios."],
];

const tech = [
  ["01", "Artificial intelligence", "Reading unstructured documents, mapping messy data, drafting explanations for human review."],
  ["02", "Machine learning", "Pattern and anomaly detection across large transaction populations where rules alone miss the signal."],
  ["03", "Data analytics", "Statistical testing, population coverage and reconciliation instead of sampling by hand."],
  ["04", "Workflow automation", "Preparation, review and approval chains that carry evidence with them rather than living in email."],
  ["05", "Knowledge graphs", "Entity, ownership and counterparty relationships modelled explicitly, so structure is queryable."],
  ["06", "Blockchain and trusted records", "Used only where independent, tamper-evident proof of a record's history is genuinely required."],
  ["07", "Secure cloud infrastructure", "Isolated client environments, encryption, and controlled data residency options."],
  ["08", "Enterprise system integration", "Connections to ERP, payroll, consolidation and document systems already in place."],
];

export default function HomePage() {
  return (
    <>
      <section className="hero-bg">
        <svg aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="g7l" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="rgba(238,240,244,.055)" strokeWidth="1" />
            </pattern>
            <radialGradient id="glow7l" cx="72%" cy="18%" r="62%">
              <stop offset="0%" stopColor="#4fa8ff" stopOpacity=".20" />
              <stop offset="100%" stopColor="#4fa8ff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#g7l)" />
          <rect width="100%" height="100%" fill="url(#glow7l)" />
        </svg>
        <div className="motes" aria-hidden>
          {motes.map((s, i) => (
            <span
              key={i}
              className="mote"
              style={{
                left: `${s[0]}%`,
                top: `${s[1]}%`,
                background: i % 3 === 0 ? "#bfe2ff" : "#4fa8ff",
                animationDuration: `${s[2]}s`,
                animationDelay: `${s[3]}s`,
              }}
            />
          ))}
        </div>
        <div className="hero-inner">
          <p className="kicker kicker-accent">Technology-powered advisory</p>
          <h1 className="display display-xl" style={{ marginBottom: "clamp(24px, 3vw, 36px)" }}>
            Advisory, engineered for action.
          </h1>
          <p className="lede" style={{ fontSize: "clamp(17px, 1.7vw, 23px)", lineHeight: 1.45, marginBottom: 20 }}>
            7L Advisory combines professional expertise, AI, data and purpose-built technology to help organisations solve complex tax, risk and business challenges.
          </p>
          <p className="body muted" style={{ maxWidth: "56ch", margin: "0 0 clamp(32px, 4vw, 48px)" }}>
            Traditional advisory often ends with a report. We go further — turning advice into intelligent platforms, automated workflows and decision-ready insights.
          </p>
          <div className="row">
            <Link className="btn btn-accent" href="/solutions">
              Explore Our Platforms
              <Arrow color="#0d0f14" />
            </Link>
            <Link className="btn btn-ghost" href="/contact">
              Talk to Our Advisory Team
            </Link>
          </div>
        </div>
        <div className="hero-strip">
          {platforms.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="strip" style={{ borderTopColor: p.accent }}>
              <span className="strip-name">{p.name}</span>
              <span className="strip-desc">{p.short}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-light" style={{ padding: "clamp(64px, 8vw, 132px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <div className="grid-2" style={{ marginBottom: "clamp(48px, 6vw, 80px)", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <p className="kicker kicker-deep">The shift</p>
              <h2 className="h2" style={{ maxWidth: "18ch" }}>
                Business challenges have changed. Advisory must change with them.
              </h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", gap: 16 }}>
              <p className="body-16 stone" style={{ maxWidth: "52ch" }}>
                Companies operate with more data, greater regulatory complexity and faster-moving risks than ever before. Static reports and spreadsheet-based processes are no longer enough.
              </p>
              <p className="body-16 stone" style={{ maxWidth: "52ch" }}>
                7L Advisory integrates advisory knowledge directly into technology, helping clients move from manual analysis to continuous, intelligent and auditable decision-making.
              </p>
            </div>
          </div>
          <div style={{ borderTop: "2px solid var(--ink-line)" }}>
            <div className="compare-head">
              <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--dust)", fontWeight: 600 }}>Traditional advisory</span>
              <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--deep)", fontWeight: 600 }}>7L technology-powered advisory</span>
            </div>
            {shift.map(([a, b], i) => (
              <div className="compare-row" key={a} style={i === shift.length - 1 ? { borderBottom: "2px solid var(--ink-line)" } : undefined}>
                <span className="muted-ink">{a}</span>
                <span style={{ fontWeight: 600 }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: "clamp(64px, 8vw, 132px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <p className="kicker kicker-accent">Platforms</p>
          <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
            Our advisory technology platforms
          </h2>
          <div className="cells cells-card">
            {platforms.map((p) => (
              <div key={p.slug} className="plat-card" style={{ borderTop: `2px solid ${p.accent}` }}>
                <Figure caption={p.figure} />
                <div className="plat-head">
                  <span className="plat-name">{p.name}</span>
                  <span className="plat-idx">{p.index}</span>
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.35, color: p.accent, fontWeight: 600 }}>{p.tagline}</p>
                <p className="body-14 muted">{p.blurb}</p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column" }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ listStyle: "none" }}>
                      <Bullet color={p.accent}>{b}</Bullet>
                    </li>
                  ))}
                </ul>
                <Link className="btn btn-ghost btn-sm" href={`/${p.slug}`} style={{ marginTop: "auto", width: "100%" }}>
                  Explore {p.name}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2.5" style={{ marginLeft: "auto" }}>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light" style={{ padding: "clamp(64px, 8vw, 132px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <p className="kicker kicker-deep">Our approach</p>
          <h2 className="h2" style={{ maxWidth: "20ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
            From advisory knowledge to operational technology
          </h2>
          <div className="cells-ink">
            {steps.map(([n, t, b]) => (
              <div className="cell-ink" key={n} style={{ padding: "clamp(24px, 2.4vw, 32px) clamp(20px, 2vw, 28px) clamp(28px, 3vw, 40px)" }}>
                <span className="num-deep">{n}</span>
                <h3 style={{ fontSize: "clamp(22px, 2.2vw, 28px)", letterSpacing: "-0.02em" }}>{t}</h3>
                <p className="body-14 muted-ink">{b}</p>
              </div>
            ))}
          </div>
          <p className="quote" style={{ margin: "clamp(40px, 5vw, 64px) 0 0" }}>
            We use technology where it creates measurable value — not simply because it is fashionable.
          </p>
        </div>
      </section>

      <section className="section-light" style={{ padding: "clamp(64px, 8vw, 132px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <p className="kicker kicker-deep">Why 7L</p>
          <h2 className="h2" style={{ maxWidth: "18ch", marginBottom: "clamp(40px, 5vw, 72px)" }}>
            Professional judgment. Built into technology.
          </h2>
          <div className="grid-2s" style={{ gap: "clamp(24px, 3vw, 40px) clamp(24px, 4vw, 56px)" }}>
            {why.map(([n, t, b]) => (
              <div className="why" key={n}>
                <span className="num-deep">{n}</span>
                <h4 style={{ fontSize: 19, letterSpacing: "-0.015em" }}>{t}</h4>
                <p className="body-14 muted-ink">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark" style={{ padding: "clamp(64px, 8vw, 132px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <div className="grid-2" style={{ marginBottom: "clamp(40px, 5vw, 64px)", gap: "clamp(24px, 4vw, 64px)" }}>
            <div>
              <p className="kicker kicker-accent">Technology</p>
              <h2 className="h2" style={{ maxWidth: "16ch" }}>
                The technology behind better advice
              </h2>
            </div>
            <p className="body muted" style={{ maxWidth: "50ch", alignSelf: "end" }}>
              Each technology below is used only where it fits the business problem. We do not apply blockchain, or any other technology, to problems that do not need it.
            </p>
          </div>
          <div className="cells">
            {tech.map(([n, t, b]) => (
              <div className="cell" key={n} style={{ padding: "clamp(20px, 2.2vw, 28px) clamp(16px, 2vw, 24px) clamp(24px, 2.6vw, 32px)" }}>
                <span className="num">{n}</span>
                <h4 style={{ fontSize: 17, color: "var(--snow)" }}>{t}</h4>
                <p className="body-13 muted">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-poster" style={{ background: "var(--accent)" }}>
        <div className="wrap">
          <h2 className="display" style={{ fontSize: "clamp(34px, 5.4vw, 76px)", maxWidth: "18ch", marginBottom: 24 }}>
            Move beyond reports. Build a smarter way to operate.
          </h2>
          <p className="body-16" style={{ maxWidth: "56ch", margin: "0 0 clamp(32px, 4vw, 44px)", color: "#201e1d" }}>
            Talk to 7L Advisory about transforming a complex tax, risk or compliance process into an intelligent, scalable business capability.
          </p>
          <div className="row">
            <Link className="btn btn-ink" href="/contact">
              Schedule a Consultation
              <Arrow color="#4fa8ff" />
            </Link>
            <Link className="btn btn-outline-void" href="/solutions">
              Explore Our Platforms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
