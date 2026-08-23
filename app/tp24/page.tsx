import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "TP24" };

const accent = "#ffcc00";

export default function Tp24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>TP24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                TP24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                Transfer pricing intelligence beyond documentation.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                A technology-enabled transfer pricing platform for managing related-party transactions, arm&apos;s-length analysis, compliance documentation and audit readiness — from the same data all year, not a file assembled once a year.
              </p>
              <div className="row">
                <Link className="btn btn-md" href="/contact" style={{ background: accent, color: "var(--void)" }}>
                  Request a Demonstration
                  <Arrow color="var(--void)" />
                </Link>
                <Link className="btn btn-ghost btn-md" href="/solutions">
                  Compare Platforms
                </Link>
              </div>
            </div>
            <div style={{ borderTop: `2px solid ${accent}`, paddingTop: 20 }}>
              <Figure caption="Container port gantry — intercompany goods" src="/platforms/tp24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Transfer pricing" },
                  { k: "Anchor", v: "OECD Guidelines & local rules" },
                  { k: "Scope", v: "Transaction to local file" },
                  { k: "AI role", v: "Mapping, drafting, review" },
                  { k: "Benchmark sources", v: <Badge>to be confirmed</Badge> },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              The documentation is annual. The exposure is continuous.
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Intercompany flows change through the year while the local file describes the year that ended. Functional analysis lives in interview notes, benchmarks in a consultant&apos;s spreadsheet, and the connection between the policy and what the ledger actually did is rebuilt from memory each cycle.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              TP24 keeps the transaction map, the analysis and the evidence in one place, so documentation is a report from the system rather than a project.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="Group tax functions" body="Managing policy, pricing and documentation across multiple jurisdictions." />
              <Who title="Transfer pricing specialists" body="In-house or in practice, running analysis and defending it under audit." />
              <Who title="Local finance teams" body="Meeting country filing duties without rebuilding group analysis locally." />
              <Who title="Advisory firms" body="Serving a portfolio of clients on one consistent methodology." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker" style={{ color: accent }}>
            Core capabilities
          </p>
          <div className="cells cells-wide">
            <Capability n="01" title="Related-party transaction mapping">
              Every intercompany flow identified from the ledger and matched to a policy, an agreement and a counterparty.
            </Capability>
            <Capability n="02" title="Functional and risk analysis">
              Functions, assets and risks captured as structured data per entity — comparable across years and reusable.
            </Capability>
            <Capability n="03" title="Method selection">
              Method choice recorded with its reasoning and the rejected alternatives, ready for a tax authority to read.
            </Capability>
            <Capability n="04" title="Benchmarking workflow">
              Search strategy, screening decisions and the resulting range preserved as evidence, not just the final number.
            </Capability>
            <Capability n="05" title="Local file generation">
              Documentation assembled from the live data model, with local content requirements handled per jurisdiction.
            </Capability>
            <Capability n="06" title="Audit trail and compliance management">
              Deadlines, filings and every analytical decision tracked with the version of the data behind them.
            </Capability>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <div className="cells-ink" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Map", "Entities, agreements and intercompany flows loaded and linked."],
              ["02", "Characterise", "Functional and risk profile captured per entity and transaction."],
              ["03", "Price", "Method applied, benchmarks run, arm's-length range set."],
              ["04", "Monitor", "Actual results tracked against the range through the year."],
              ["05", "Document", "Local file and defence pack generated from the same source."],
            ].map(([n, t, b]) => (
              <div className="cell-ink" key={n}>
                <span className="num-deep">{n}</span>
                <h4 style={{ fontSize: 16 }}>{t}</h4>
                <p className="body-13 muted-ink">{b}</p>
              </div>
            ))}
          </div>
          <div className="grid-2s">
            <div>
              <p className="kicker kicker-deep">Example workflow</p>
              <h3 className="h4" style={{ marginBottom: 8 }}>
                A new intra-group service arrangement
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">A new management-service charge appears in the ledger and is flagged as unmapped.</Step>
              <Step n="02">The agreement is attached; AI drafts the transaction description for the specialist to correct.</Step>
              <Step n="03">Functional analysis identifies the service provider as routine; TNMM is selected and the reasoning recorded.</Step>
              <Step n="04">A benchmarking set is screened and the arm&apos;s-length range fixed, with every rejection logged.</Step>
              <Step n="05">Quarterly monitoring shows the tested margin drifting below the range; an adjustment is proposed early.</Step>
              <Step n="06">At year end the local file is generated with the analysis, the range and the monitoring history attached.</Step>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker" style={{ color: accent }}>
            Outcomes
          </p>
          <div className="grid-4" style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <Outcome accent={accent} title="Documentation as output" body="The local file is generated, not assembled from scratch each year." />
            <Outcome accent={accent} title="No year-end surprises" body="Margins monitored against the range while adjustment is still cheap." />
            <Outcome accent={accent} title="Consistent methodology" body="One approach across entities and years, whoever does the work." />
            <Outcome accent={accent} title="Audit readiness" body="Questions answered from the record rather than from recollection." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Cycle-time and cost comparisons <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Entity-level access control for groups where local teams must not see the whole picture.</p>
                <p className="body-13 muted">Versioned analysis: the file as filed can always be reproduced.</p>
                <p className="body-13 muted">Agreements, benchmarks and workings stored with the conclusion they support.</p>
                <p className="body-13 muted">Change history on every judgment, with author and date.</p>
                <p className="body-13 muted">
                  Certifications and independent assurance <Badge>to be confirmed</Badge>
                </p>
              </div>
            </div>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Integration
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">ERP and consolidation systems for intercompany balances and segment results.</p>
                <p className="body-13 muted">Contract and document repositories for agreements and evidence.</p>
                <p className="body-13 muted">Commercial benchmarking databases through the search workflow.</p>
                <p className="body-13 muted">Shared entity and financial data with GMT24 where both platforms are in use.</p>
                <p className="body-13 muted">
                  Named system connectors <Badge>to be confirmed</Badge>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Poster
        accent={accent}
        title="Bring your transfer pricing file into the system that produced it."
        body="We will map one intercompany transaction end to end with your own data and show the documentation that comes out."
        stroke={accent}
      />
    </>
  );
}
