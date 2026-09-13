import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/ui";
import { Poster } from "@/components/ui";

export const metadata: Metadata = { title: "Solutions" };

const rows = [
  {
    n: "01 · PIT24",
    href: "/pit24",
    title: "Personal income tax, simplified",
    body: "Collection, calculation, document management and filing for individual taxpayers — from a single executive to a large expatriate population. AI reads the documents; the calculation engine applies the rules.",
    points: ["Data collection & AI extraction", "Automated calculation & compliance checks", "Filing workflow & secure records"],
    label: "Explore PIT24",
  },
  {
    n: "02 · CIT24",
    href: "/cit24",
    title: "Thai corporate tax, from trial balance to defence",
    body: "Accounting records in, a reviewed tax position out — computed under sections 65, 65 bis and 65 ter, with every adjustment carrying its rule, its evidence and its approval history into next year.",
    points: ["TB / GL ingestion & mapping assistant", "Versioned tax adjustment ledger", "Provision, PND51 and PND50"],
    label: "Explore CIT24",
  },
  {
    n: "03 · RISK24",
    href: "/risk24",
    title: "One data room, reviewed through four lenses",
    body: "Ingestion, normalisation and evidence linking happen once; the lens is what changes. The same related-party payment can be a fraud signal, a withholding-tax exposure, a historical liability and an EBITDA adjustment — reported together, against the same evidence.",
    points: ["Forensic · Tax Review · Tax DD · Financial DD · Deal Room", "Cross-lens findings on shared evidence", "Exposure priced into deal terms"],
    label: "Explore RISK24",
  },
  {
    n: "04 · TP24",
    href: "/tp24",
    title: "Transfer pricing intelligence beyond documentation",
    body: "Related-party transactions mapped to actual ledger data, functional analysis captured as structured evidence, method selection and benchmarking recorded — and the local file generated from the same source.",
    points: ["Transaction mapping & functional analysis", "Method selection & benchmarking", "Local file & audit readiness"],
    label: "Explore TP24",
  },
  {
    n: "05 · GMT24",
    href: "/gmt24",
    title: "Global minimum tax intelligence for the Pillar Two era",
    body: "A Pillar Two operating system, not a calculator: financial, CbCR, entity and incentive data converted into a controlled GloBE data model, with effective-dated OECD and local rule packs driving every number.",
    points: ["GloBE data model & rule packs", "ETR, safe harbours, SBIE, top-up allocation", "GIR preparation & audit trail"],
    label: "Explore GMT24",
  },
  {
    n: "06 · LAW24",
    href: "/law24",
    title: "Legal work as a system, not a filing cabinet",
    body: "Contracts, corporate records and legal due diligence held as a controlled model — obligations and opinions attached to the documents they came from, and deal findings shared with RISK24 rather than restated in a second memo.",
    points: ["Contract extraction & obligation register", "Corporate records & legal calendar", "Legal DD in the same room as RISK24"],
    label: "Explore LAW24",
  },
  {
    n: "07 · CFO24",
    href: "/cfo24",
    title: "The close, the cash and the board pack from one model",
    body: "Controllers close, FP&A forecasts and the board reads a pack assembled from the same finance model — with the tax provision posted from CIT24 rather than emailed late, and earnings-quality findings from RISK24 attached when a review has run.",
    points: ["Controlled close & cash view", "Forecast versus actual", "Board pack from the same source"],
    label: "Explore CFO24",
  },
  {
    n: "08 · TRADE24",
    href: "/trade24",
    title: "Customs, origin and landed cost as a controlled system",
    body: "Shipments carry classification, origin evidence, duty and the broker pack in one file — so FTA preference is proved, landed cost is known before the goods move, and a customs question is answered from the record.",
    points: ["HS classification with evidence", "Origin & FTA preference", "Duty accrual shared with CFO24 and CIT24"],
    label: "Explore TRADE24",
  },
];

const compare = [
  ["Problem", "Individual tax compliance at volume", "Corporate tax close, provision and filing", "Fraud, tax exposure and deal risk in the same data", "Related-party pricing exposure", "Pillar Two top-up tax and reporting", "Contracts, obligations and legal defence", "Close, cash and board-pack inconsistency", "Duty, origin and customs defence"],
  ["Primary users", "Tax & payroll teams, advisory firms", "Finance and tax teams, advisory firms", "Internal audit, tax, deal teams, advisers", "Group tax, TP specialists", "Group tax, finance, advisors", "General counsel, company secretarial, law firms", "CFO, controller, FP&A, PE finance", "Trade compliance, supply chain, group tax"],
  ["Core data", "Income documents, allowances, payroll", "Trial balance, GL, financial statements", "Ledger, invoices, tax filings, contracts, payroll", "Intercompany flows, financials, benchmarks", "Consolidation, CbCR, entity & tax data", "Contracts, minutes, licences, opinions", "ERP, bank, forecast, tax provision", "Invoices, BoM, BoL, origin declarations"],
  ["Rhythm", "Annual cycle, continuous collection", "Continuous close, half-year and annual filing", "Continuous, plus per-transaction engagements", "Annual file, live transaction view", "Quarterly provision, annual filing", "Continuous matter work, plus deals and renewals", "Monthly close, weekly cash, board cycle", "Per shipment, plus post-entry and audit"],
  ["Primary output", "Filing-ready returns & records", "Provision, PND51, PND50 & workpapers", "Findings, exposure and deal recommendations", "Local file & defence pack", "GloBE Information Return & top-up", "Obligation register, opinions & DD report", "Closed books, cash view & board pack", "Broker pack, duty accrual & origin file"],
  ["Deployment", "In-house or advisor-operated", "Corporate, advisory or audit-defence mode", "In-house or advisor-operated", "In-house or advisor-operated", "In-house or advisor portfolio mode", "In-house legal or advisor-operated", "In-house finance or advisor-operated", "In-house or broker-assisted"],
];

const services = [
  ["01", "Advisory and implementation", "Technical tax and risk advice, delivered alongside the system that will carry it forward."],
  ["02", "Data engineering and readiness", "Source mapping, quality rules and reconciliation so the numbers can be trusted before they are calculated."],
  ["03", "Custom platform development", "Where a process is specific to one organisation, we build it on the same architecture as our products."],
  ["04", "Managed operation", "For teams without capacity in-house, 7L operates the platform under an agreed control framework."],
];

export default function SolutionsPage() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <p className="kicker kicker-accent">Solutions</p>
          <h1 className="display display-lg">Eight platforms. One discipline.</h1>
          <p className="lede">
            Each 7L platform takes a body of professional knowledge — personal and corporate tax, forensic analysis, transfer pricing, global minimum tax, legal operations, finance leadership, trade and customs — and turns it into a working system with the same architecture: controlled data, versioned rules, deterministic engines, explainable AI and a complete audit trail.
          </p>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap" style={{ display: "grid", gap: "clamp(32px, 4vw, 56px)" }}>
          {rows.map((r, i) => (
            <div
              key={r.n}
              className="grid-auto"
              style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "clamp(20px, 3vw, 48px)",
                borderTop: "2px solid var(--ink)",
                paddingTop: 24,
                borderBottom: i === rows.length - 1 ? "2px solid var(--ink)" : undefined,
                paddingBottom: i === rows.length - 1 ? "clamp(24px, 3vw, 40px)" : undefined,
              }}
            >
              <div style={{ display: "grid", gap: 10, alignContent: "start" }}>
                <span className="num-deep">{r.n}</span>
                <h3 style={{ fontSize: "clamp(24px, 2.6vw, 34px)", letterSpacing: "-0.025em" }}>{r.title}</h3>
              </div>
              <p className="body stone">{r.body}</p>
              <div style={{ display: "grid", gap: 8, alignContent: "start" }}>
                {r.points.map((p) => (
                  <span key={p} className="body-13 muted-ink">
                    {p}
                  </span>
                ))}
                <Link className="btn btn-ghost-ink btn-sm" href={r.href} style={{ justifySelf: "start", marginTop: 8 }}>
                  {r.label}
                  <Arrow color="var(--deep)" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">Compare</p>
          <h2 className="h3" style={{ maxWidth: "22ch", marginBottom: "clamp(28px, 3vw, 44px)" }}>
            Which platform fits the problem in front of you
          </h2>
          <div className="compare">
            <table className="table">
              <thead>
                <tr>
                  <th style={{ width: 150 }} />
                  <th>PIT24</th>
                  <th>CIT24</th>
                  <th>RISK24</th>
                  <th>TP24</th>
                  <th>GMT24</th>
                  <th>LAW24</th>
                  <th>CFO24</th>
                  <th>TRADE24</th>
                </tr>
              </thead>
              <tbody>
                {compare.map((row) => (
                  <tr key={row[0]}>
                    <td style={{ fontWeight: 800 }}>{row[0]}</td>
                    {row.slice(1).map((c) => (
                      <td key={c}>{c}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker kicker-accent">Beyond the platforms</p>
          <h2 className="h3" style={{ maxWidth: "22ch", marginBottom: "clamp(32px, 4vw, 56px)" }}>
            Advisory services that make the technology work
          </h2>
          <div className="cells">
            {services.map(([n, t, b]) => (
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
        title="Not sure which platform you need? Start with the problem."
        body="Describe the process that is costing your team the most time or creating the most exposure. We will tell you honestly whether a platform, a custom build or plain advice is the right answer."
        label="Talk to Our Advisory Team"
      />
    </>
  );
}
