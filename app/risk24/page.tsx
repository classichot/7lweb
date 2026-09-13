import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Bullet, Figure, Flow, Glance, Poster } from "@/components/ui";

export const metadata: Metadata = { title: "RISK24" };

const accent = "#ff6b1a";

export default function Risk24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>RISK24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                RISK24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                AI risk, tax and deal intelligence.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 20px" }}>
                Upload the company&apos;s financial and tax data once, then review it through a forensic, tax or transaction lens — on one shared foundation, with one evidence trail.
              </p>
              <p className="body muted" style={{ maxWidth: "52ch", margin: "0 0 32px" }}>
                Five modules, not five products. The same ledger that reveals a fraud pattern also carries a withholding-tax exposure, a historical liability and an EBITDA adjustment — RISK24 is built to see all four in one transaction.
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
              <Figure caption="Invoice stack and warehouse racking under inspection" src="/platforms/risk24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Forensic · tax · transactions" },
                  { k: "Modules", v: "Forensic · Tax Review · Tax DD · FDD · Deal Room" },
                  { k: "Coverage", v: "Full population, not samples" },
                  { k: "Methods", v: "Rules, statistics, ML, graph" },
                  { k: "Output", v: "Scored findings with evidence" },
                  { k: "Positioning", v: <Badge>AI workbench — a qualified professional signs the opinion</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Data room", "Foundation", "Forensic", "Tax", "Deals", "Unified report"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              The same data is extracted four times, by four teams, who never compare notes
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Internal audit pulls the ledger for fraud testing. The tax team pulls it again for a health check. A buyer&apos;s adviser pulls it a third time for tax due diligence, and a fourth for quality of earnings. Each builds its own extraction, its own mapping, its own spreadsheet — and each sees one facet of the same transaction.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              RISK24 does the ingestion, normalisation and evidence linking once. The lenses are what change.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">One transaction, four findings</p>
            <p className="body-14 muted-ink" style={{ marginBottom: 18, maxWidth: "44ch" }}>
              An unusually high management-service payment to a related party:
            </p>
            <div className="rule-list">
              {[
                ["Forensic lens", "Possible related-party conflict, or a service never rendered."],
                ["Tax lens", "Deductibility challenge and withholding-tax exposure."],
                ["Tax DD lens", "Historical liability across open years, plus penalty and surcharge."],
                ["Financial DD lens", "A normalisation adjustment that moves EBITDA — and the price."],
              ].map(([t, b]) => (
                <div className="rule-row" key={t} style={{ padding: "14px 0" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--deep)", fontWeight: 800 }}>{t}</span>
                  <p className="body-14" style={{ marginTop: 5 }}>
                    {b}
                  </p>
                </div>
              ))}
            </div>
            <p className="body-13 muted-ink" style={{ marginTop: 18, maxWidth: "44ch" }}>
              Four teams would each find one. The platform reports all four against the same transaction, with the same evidence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker" style={{ color: accent }}>
            The modules
          </p>
          <h2 className="h3" style={{ fontSize: "clamp(28px, 3.6vw, 50px)", maxWidth: "22ch", marginBottom: "clamp(32px, 4vw, 56px)" }}>
            Five workspaces on one data foundation
          </h2>
          <div className="cells">
            {[
              ["01", "RISK24 Forensic", "Fraud, leakage and irregularity detection across the full population.", "For internal audit, compliance, the CFO"],
              ["02", "RISK24 Tax Review", "A continuous tax health check — exposure found while it can still be corrected.", "For the tax director, CFO, accounting firm"],
              ["03", "RISK24 Tax DD", "Historical tax liabilities identified and priced before a transaction closes.", "For buyers, investors, legal and financial advisers"],
              ["04", "RISK24 Financial DD", "Earnings quality, working capital and net debt, tested against the ledger.", "For PE funds, corporate buyers, advisers"],
              ["05", "RISK24 Deal Room", "Requests, evidence, findings and reports managed in one place.", "For the deal team and the target company"],
            ].map(([n, t, b, who]) => (
              <div className="cell" key={n}>
                <span className="num">{n}</span>
                <h4 style={{ fontSize: 18, color: "var(--snow)" }}>{t}</h4>
                <p className="body-13 muted">
                  {b}
                  <br />
                  <br />
                  <span style={{ fontSize: 12 }}>{who}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">One data room, multiple reviews</p>
          <h2 className="h3" style={{ fontSize: "clamp(28px, 3.6vw, 50px)", maxWidth: "20ch", marginBottom: "clamp(32px, 4vw, 52px)" }}>
            The foundation is the product
          </h2>
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "clamp(16px, 2vw, 28px)",
              borderTop: "2px solid var(--ink)",
              paddingTop: 20,
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            {[
              ["Input", "Company data room", false],
              ["Shared", "Data foundation", true],
              ["Lens", "Forensic review", false],
              ["Lens", "Tax review & TDD", false],
              ["Lens", "Financial DD", false],
              ["Output", "Unified risk & deal report", true],
            ].map(([k, v, accented]) => (
              <div key={`${k}-${v}`}>
                <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: accented ? "var(--deep)" : "var(--dust)", fontWeight: 800 }}>{k}</span>
                <p style={{ fontSize: 15, fontWeight: 800, margin: "6px 0 0", letterSpacing: "-0.01em" }}>{v}</p>
              </div>
            ))}
          </div>
          <div className="grid-2s">
            <div>
              <h3 className="h4" style={{ marginBottom: 6 }}>
                What the foundation does once
              </h3>
              <p className="body-14 muted-ink" style={{ marginBottom: 12, maxWidth: "44ch" }}>
                So no module rebuilds the same ingestion and analysis.
              </p>
              {[
                "OCR and document extraction",
                "Chart-of-accounts mapping",
                "Ledger normalisation",
                "Entity and counterparty resolution",
                "Contract-to-transaction matching",
                "Reconciliation and data-quality testing",
                "Evidence linking",
                "Risk scoring",
                "Audit trail and reviewer approval",
              ].map((b) => (
                <Bullet key={b} color="var(--deep)" ink>
                  {b}
                </Bullet>
              ))}
            </div>
            <div>
              <h3 className="h4" style={{ marginBottom: 6 }}>
                What it reads
              </h3>
              <p className="body-14 muted-ink" style={{ marginBottom: 12, maxWidth: "44ch" }}>
                All four reviews draw on the same material.
              </p>
              <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "0 clamp(20px, 3vw, 40px)" }}>
                <div>
                  {["Trial balance and general ledger", "Financial statements", "Tax returns and reconciliations", "Sales and purchase invoices", "Accounts receivable and payable", "Payroll and employee data"].map((b) => (
                    <Bullet key={b} color="#605d5d" ink>
                      {b}
                    </Bullet>
                  ))}
                </div>
                <div>
                  {["Fixed assets", "Contracts and related-party transactions", "Bank statements", "Corporate structure", "Management accounts and forecasts"].map((b) => (
                    <Bullet key={b} color="#605d5d" ink>
                      {b}
                    </Bullet>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker" style={{ color: accent }}>
            Inside the modules
          </p>
          <div className="grid-2s" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "clamp(28px, 4vw, 56px)" }}>
            {[
              {
                t: "Tax Review",
                d: "A continuous health check, not a transaction-only exercise.",
                items: [
                  "Corporate income tax reconciliation",
                  "VAT output and input matching",
                  "Withholding-tax testing",
                  "Payroll and personal income tax testing",
                  "Fixed-asset depreciation review",
                  "Deductible and non-deductible classification",
                  "Tax-loss and incentive validation",
                  "Related-party transaction review",
                  "BOI condition monitoring",
                  "Stamp duty and specific business tax",
                  "Filing-to-ledger reconciliation",
                  "Late filing, penalty and surcharge calculation",
                ],
                note: "Reports exposure by tax type and year, with principal, penalty and surcharge, the supporting transactions, the legal basis, and an amended-filing plan.",
              },
              {
                t: "Tax Due Diligence",
                d: "Turns tax findings into transaction consequences.",
                items: [
                  "Multi-year historical exposure analysis",
                  "Statute-of-limitation tracking",
                  "Change-of-control tax analysis",
                  "Tax-loss usability assessment",
                  "Tax incentive continuity",
                  "Related-party and transfer-pricing exposure",
                  "Permanent-establishment risk",
                  "Uncertain tax-position register",
                  "Probability-weighted exposure estimation",
                  "Warranty and indemnity recommendations",
                  "SPA tax-clause assistant",
                  "Post-acquisition remediation plan",
                ],
                note: "The output is a deal decision, not just a list of problems: exposure range, recommended retention, and the matters needing a specific indemnity.",
              },
              {
                t: "Financial Due Diligence",
                d: "Earnings quality tested against the ledger, not the deck.",
                items: [
                  "Quality of earnings",
                  "Reported-to-adjusted EBITDA bridge",
                  "Non-recurring item detection",
                  "Revenue recognition and cut-off testing",
                  "Customer and supplier concentration",
                  "Gross-margin analysis",
                  "Working-capital normalisation",
                  "Net debt and debt-like items",
                  "Cash conversion analysis",
                  "Monthly trend and seasonality",
                  "Budget-versus-actual reliability",
                  "Forecast stress testing",
                ],
                note: "Delivers adjusted EBITDA, the working-capital target, a net debt schedule, a deal issue register, price-adjustment scenarios and questions for management.",
              },
            ].map((col) => (
              <div key={col.t}>
                <h3 className="h4" style={{ marginBottom: 6, color: "var(--snow)" }}>
                  {col.t}
                </h3>
                <p className="body-13 muted" style={{ marginBottom: 12 }}>
                  {col.d}
                </p>
                {col.items.map((b) => (
                  <Bullet key={b} color={accent}>
                    {b}
                  </Bullet>
                ))}
                <p className="body-13 muted" style={{ marginTop: 16, fontSize: 12 }}>
                  {col.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">Signature capabilities</p>
          <h2 className="h3" style={{ fontSize: "clamp(28px, 3.6vw, 50px)", maxWidth: "22ch", marginBottom: "clamp(32px, 4vw, 56px)" }}>
            What only a shared foundation can do
          </h2>
          <div className="grid-3">
            {[
              ["01", "Cross-Lens Finding Engine", "One issue analysed for fraud implication, tax consequence, EBITDA and working-capital impact, valuation effect and the SPA protection it warrants."],
              ["02", "AI Deal Investigator", "Ask why EBITDA rose while operating cash fell, or which expenses are both non-deductible and non-recurring. Every answer links to the ledger entries, invoices, contracts and calculations behind it."],
              ["03", "EBITDA–Tax–Cash Bridge", "Reported EBITDA to adjusted EBITDA to taxable profit to tax paid to operating cash flow. Differences that cannot be explained become investigation targets."],
              ["04", "Dynamic Exposure Calculator", "Principal, penalty, surcharge, likelihood, maximum and probability-weighted exposure — then the EBITDA effect, the valuation effect and the retention it implies."],
              ["05", "Automated DD Request List", "The platform reads the initial data room, works out what evidence is missing, and issues a prioritised request list that updates itself as documents arrive."],
              ["06", "Evidence-Backed Report Generator", "Every paragraph in the report ties to its source documents, transactions, calculations, applicable rules and the reviewer's conclusion. Review and defence both get easier."],
            ].map(([n, t, b]) => (
              <div key={n} style={{ borderTop: "2px solid var(--ink)", paddingTop: 16 }}>
                <span className="num-deep">{n}</span>
                <h4 style={{ fontSize: 18, margin: "8px 0 6px" }}>{t}</h4>
                <p className="body-13 muted-ink">{b}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: "2px solid var(--deep)", paddingLeft: 24, maxWidth: "60ch" }}>
            <p style={{ fontSize: "clamp(17px, 1.9vw, 22px)", lineHeight: 1.35, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px" }}>
              Illustrative output: potential exposure THB 18–27 million; recommended purchase-price retention THB 22 million; specific indemnity required for VAT and withholding-tax matters.
            </p>
            <p className="body-13 muted-ink">
              An example of the form an output takes, not a client result. <Badge ink>figures illustrative</Badge>
            </p>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker" style={{ color: accent }}>
            How we position it
          </p>
          <div className="grid-2" style={{ gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h2 className="h3" style={{ maxWidth: "20ch", marginBottom: 20 }}>
                An AI workbench for professionals — not a replacement for them
              </h2>
              <p className="body" style={{ color: "var(--mute-2)", marginBottom: 14, maxWidth: "52ch" }}>
                Tax advice, audit and financial due diligence carry professional judgment, legal interpretation and real liability. RISK24 does the ingestion, reconciliation, testing, calculation, drafting and evidence organisation. A qualified professional approves the opinion.
              </p>
              <p className="body muted" style={{ maxWidth: "52ch" }}>
                That boundary is deliberate, and it is the same rule the rest of our platforms follow: AI assists, a deterministic engine calculates, a person signs. Standardised SME reviews may become more autonomous later — we will say so when they do, not before.
              </p>
            </div>
            <div>
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>Build sequence</span>
              <div style={{ display: "grid", gap: 0, marginTop: 14 }}>
                {[
                  ["01", "Tax Review", "Rule-driven, recurring, and closest to the transaction testing already built."],
                  ["02", "Tax DD", "Historical exposure, deal materiality, indemnities and report templates."],
                  ["03", "Focused FDD", "Quality of earnings, adjusted EBITDA, net debt and working capital first."],
                  ["04", "Unified deal intelligence", "Forensic, tax and financial findings combined into price and SPA recommendations."],
                ].map(([n, t, b]) => (
                  <div key={n} style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 16, padding: "14px 0", borderTop: "1px solid var(--line-soft)" }}>
                    <span style={{ fontSize: 12, fontWeight: 800, color: accent }}>{n}</span>
                    <div>
                      <h4 style={{ fontSize: 16, margin: "0 0 4px", color: "var(--snow)" }}>{t}</h4>
                      <p className="body-13 muted">{b}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="body-13 muted" style={{ marginTop: 18, maxWidth: "46ch", fontSize: 12 }}>
                Module availability by date <Badge>to be confirmed — we do not list a module as live before it is</Badge>
              </p>
            </div>
          </div>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)", marginTop: "clamp(40px, 5vw, 64px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Read-only ingestion — RISK24 never writes back to source systems.</p>
                <p className="body-13 muted">Per-engagement isolation, so a deal team and the target see only what they should.</p>
                <p className="body-13 muted">Every test version-stamped, so a historic finding can be reproduced exactly.</p>
                <p className="body-13 muted">Full activity log, suitable for supporting disciplinary, legal or SPA process.</p>
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
                <p className="body-13 muted">ERP and general ledger extracts, scheduled or event-driven.</p>
                <p className="body-13 muted">Procurement, payment, payroll and expense systems for end-to-end coverage.</p>
                <p className="body-13 muted">Virtual data rooms and document repositories for deal material.</p>
                <p className="body-13 muted">Shared tax positions with CIT24, entity data with TP24 and GMT24, legal due-diligence evidence with LAW24, and earnings-quality findings attached to the CFO24 board pack.</p>
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
        title="Give us one data room. Take back four reviews."
        body="A scoped diagnostic on one year of real data shows what the forensic, tax and transaction lenses each find — and where they find the same thing."
        stroke={accent}
      />
    </>
  );
}
