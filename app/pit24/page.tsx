import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "PIT24" };

const accent = "#4fa8ff";

export default function Pit24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>PIT24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                PIT24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                Personal income tax, simplified.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                An intelligent personal income tax platform that streamlines data collection, tax calculations, document management and filing workflows — for one taxpayer or thousands.
              </p>
              <div className="row">
                <Link className="btn btn-accent btn-md" href="/contact">
                  Request a Demonstration
                  <Arrow color="#0d0f14" />
                </Link>
                <Link className="btn btn-ghost btn-md" href="/solutions">
                  Compare Platforms
                </Link>
              </div>
            </div>
            <div style={{ borderTop: `2px solid ${accent}`, paddingTop: 20 }}>
              <Figure caption="Income documents and a payslip on a desk" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Personal income tax" },
                  { k: "Scale", v: "Single taxpayer to large populations" },
                  { k: "AI role", v: "Document extraction & review" },
                  { k: "Calculation", v: "Deterministic, rule-versioned" },
                  { k: "Jurisdictions", v: <Badge>coverage to be confirmed</Badge> },
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
              Personal tax is high-volume, high-sensitivity and still run on spreadsheets
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Income documents arrive in a dozen formats and languages. Allowances change. Deadlines do not move. Every rekeyed figure is a chance to be wrong about someone&apos;s personal money — and the evidence for how a number was reached usually sits in a mailbox.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              PIT24 replaces the collection-by-email, calculate-in-Excel, file-and-hope cycle with a single controlled workflow where every figure is traceable to the document it came from.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="Tax and payroll teams" body="Employers managing employee and expatriate tax obligations at scale." />
              <Who title="Advisory and accounting firms" body="Practices filing on behalf of many individual clients from one workspace." />
              <Who title="Global mobility functions" body="Teams handling assignees, split-year positions and cross-border income." />
              <Who title="Family offices and executives" body="Complex individual positions that need discretion and a clean record." />
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker kicker-accent">Core capabilities</p>
          <div className="cells cells-wide">
            <Capability n="01" title="AI-assisted document extraction">
              Withholding certificates, receipts and statements read automatically, with the source page kept beside every extracted value for review.
            </Capability>
            <Capability n="02" title="Automated tax calculations">
              Income categories, deductions, allowances and credits applied by a deterministic engine against effective-dated rules.
            </Capability>
            <Capability n="03" title="Filing workflow management">
              Preparer, reviewer and approver stages with status across the whole population, not a spreadsheet tracker.
            </Capability>
            <Capability n="04" title="Compliance checks">
              Completeness, consistency and threshold tests run before filing, flagging what needs a human decision.
            </Capability>
            <Capability n="05" title="Secure taxpayer records">
              Encrypted document vault per taxpayer, with retention rules and access limited to the people who need it.
            </Capability>
            <Capability n="06" title="Year-on-year continuity">
              Prior-year positions carried forward and compared, so changes are explained rather than rediscovered.
            </Capability>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <div className="cells-ink" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Collect", "Taxpayers or HR upload documents through a secure portal."],
              ["02", "Extract", "AI reads each document and proposes structured values."],
              ["03", "Confirm", "A preparer accepts or corrects; every change is recorded."],
              ["04", "Calculate", "The rules engine computes the position and runs checks."],
              ["05", "File", "Approved returns are produced and archived with evidence."],
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
                An expatriate assignee, first filing year
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">HR adds the assignee; the platform opens a case and requests the documents the position requires.</Step>
              <Step n="02">Withholding certificates and foreign income statements are uploaded; AI extracts amounts and dates.</Step>
              <Step n="03">The preparer reviews low-confidence extractions side by side with the source page and confirms them.</Step>
              <Step n="04">Residence and treaty questions are answered in a structured questionnaire that drives the calculation.</Step>
              <Step n="05">Compliance checks flag a missing allowance document; the portal requests it automatically.</Step>
              <Step n="06">The reviewer approves; the return, the working and the evidence are archived as one record.</Step>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark">
        <div className="wrap">
          <p className="kicker kicker-accent">Outcomes</p>
          <div className="grid-4" style={{ marginBottom: "clamp(40px, 5vw, 64px)" }}>
            <Outcome accent={accent} title="Less rekeying" body="Collection and extraction absorb the manual work that dominates the season." />
            <Outcome accent={accent} title="Fewer corrections" body="Checks run before filing rather than after a query arrives." />
            <Outcome accent={accent} title="Visible status" body="One view of where every taxpayer stands against the deadline." />
            <Outcome accent={accent} title="Defensible records" body="Every figure traceable to its document, years later." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Quantified benchmarks <Badge>to be added once measured with client data — no unverified figures published</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Encryption in transit and at rest; personal data segregated by taxpayer.</p>
                <p className="body-13 muted">Role-based access with preparer, reviewer and approver separation.</p>
                <p className="body-13 muted">Immutable activity log: who saw, changed or approved each value, and when.</p>
                <p className="body-13 muted">Configurable retention and deletion aligned to local data-protection duties.</p>
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
                <p className="body-13 muted">Payroll and HRIS feeds for population, remuneration and movement data.</p>
                <p className="body-13 muted">Document management and secure file transfer for bulk intake.</p>
                <p className="body-13 muted">Export formats for e-filing channels and internal reporting.</p>
                <p className="body-13 muted">API access for organisations that prefer to push data from their own systems.</p>
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
        title="See PIT24 run against your own filing season."
        body="We will walk through the workflow with a sample of your document types and show exactly where the manual effort disappears."
      />
    </>
  );
}
