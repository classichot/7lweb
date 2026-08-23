import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Flow, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "CIT24" };

const accent = "#78beff";

export default function Cit24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>CIT24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                CIT24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                A corporate tax operating system, not a form generator.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                CIT24 converts trial balance, general ledger, financial statements and supporting documents into an explainable, reviewable Thai corporate tax position under sections 65, 65 bis and 65 ter of the Revenue Code — and remembers every position for next year.
              </p>
              <div className="row">
                <Link className="btn btn-md" href="/contact" style={{ background: accent, color: "var(--void)" }}>
                  Request a Demonstration
                  <Arrow color="#0d0f14" />
                </Link>
                <Link className="btn btn-ghost btn-md" href="/solutions">
                  Compare Platforms
                </Link>
              </div>
            </div>
            <div style={{ borderTop: `2px solid ${accent}`, paddingTop: 20 }}>
              <Figure caption="A bound ledger and trial-balance printout" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Thai corporate income tax" },
                  { k: "Anchor", v: "Revenue Code s.65, 65 bis, 65 ter" },
                  { k: "Outputs", v: "Provision, PND51, PND50" },
                  { k: "Engines", v: "AI evidence + deterministic CIT24-CALC" },
                  { k: "Modes", v: "Corporate · Advisory · Audit defence" },
                  { k: "Current scope", v: <Badge>non-BOI companies, standard s.67 bis (1) estimation</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Upload", "Map", "Rule engine", "Tax adjustment ledger", "Provision / PND51 / PND50", "Review", "Audit defence"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              The computation is rebuilt every year from a file nobody wants to inherit
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Corporate tax closes on a spreadsheet: adjustments typed from memory, a non-deductible bucket that explains nothing, and the reasoning for last year&apos;s position living with whoever prepared it. When the Revenue Department asks why an amount was added back, the answer has to be reconstructed.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              CIT24 makes the adjustment the unit of record. Each one carries its rule, its evidence, its author and its approval — and comes back next year as a position with a history rather than a number to re-derive.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="Thai corporates" body="Finance and tax teams running a single-entity close, provision and filing cycle." />
              <Who title="Advisory and accounting firms" body="Multi-client workspaces on one methodology, with per-client evidence kept separate." />
              <Who title="Teams facing an RD enquiry" body="Audit-defence mode: a request tracker and an evidence room built from the working papers." />
              <Who title="Groups preparing for more" body="Positions and entity data that feed TP24 and GMT24 rather than being re-entered." />
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
            <Capability n="01" title="Records ingestion and mapping">
              Trial balance, general ledger, statements and supporting documents loaded once, with an assistant proposing the mapping and flagging what is missing.
            </Capability>
            <Capability n="02" title="Section 65 ter rule library">
              Named, cited rules for the adjustments Thai companies actually make — not a single non-deductible bucket that hides the reasoning.
            </Capability>
            <Capability n="03" title="Tax adjustment ledger">
              Every adjustment versioned. Approved records are never overwritten, so a prior-year position stays exactly as it was approved.
            </Capability>
            <Capability n="04" title="Reversal Guardian">
              Differences that must reverse are tracked to the period they reverse in, so a timing adjustment cannot quietly become permanent.
            </Capability>
            <Capability n="05" title="Corporate tax memory">
              Last year’s positions, notes and evidence carried forward and compared, so the close continues instead of restarting.
            </Capability>
            <Capability n="06" title="Current-tax provision">
              The provision computed from the same adjustments that drive the return, available to finance during the close rather than after it.
            </Capability>
            <Capability n="07" title="PND51 penalty-risk simulator">
              The half-year estimate tested against the shortfall thresholds before filing, so the exposure is priced while it can still be changed.
            </Capability>
            <Capability n="08" title="PND50 mapping and review">
              Return fields mapped from the computation, with preparer, reviewer and approver stages, period lock and evidence-linked workpapers.
            </Capability>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: `2px solid ${accent}`, paddingLeft: 24, maxWidth: "64ch" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px", color: "var(--snow)" }}>
              Two engines, never mixed. AI extracts, classifies, detects and explains. A deterministic engine applies the approved formulas and versioned rules.
            </p>
            <p className="body-14 muted" style={{ marginBottom: 18 }}>
              A language model never calculates a tax position or changes one silently. Click any amount and the chain is there:
            </p>
            <div className="flow">
              {["Return field", "Computation line", "Adjustment note", "GL transactions", "Source document", "Legal rule", "Approval history"].map((item, i) => (
                <span key={item} style={{ display: "contents" }}>
                  {i > 0 ? <span className="flow-sep">→</span> : null}
                  <span style={{ fontSize: 13, color: accent }}>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <div className="cells-ink" style={{ marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Upload", "Accounting records and supporting documents in, once."],
              ["02", "Map", "Accounts and documents matched to the tax data model."],
              ["03", "Adjust", "Rules applied; each adjustment recorded with its authority."],
              ["04", "Review", "Preparer, reviewer and approver stages, then period lock."],
              ["05", "Defend", "Evidence room and request tracker for any later enquiry."],
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
                A half-year estimate for a non-BOI manufacturer
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">The interim trial balance and GL are uploaded; the mapping assistant proposes accounts and flags three it cannot place.</Step>
              <Step n="02">Recurring adjustments return from last year with their notes and evidence attached, ready to confirm or revise.</Step>
              <Step n="03">A new entertainment expense is classified against the s.65 ter rule that applies, with the limit computed rather than estimated.</Step>
              <Step n="04">The Reversal Guardian flags a provision released this period that reversed a prior-year timing adjustment.</Step>
              <Step n="05">The estimate is simulated against the shortfall thresholds; the penalty exposure of two forecast scenarios is compared.</Step>
              <Step n="06">The reviewer approves and the period locks; the PND51 fields, the workpapers and the evidence are one record.</Step>
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
            <Outcome accent={accent} title="The close continues" body="Positions carry forward, so each year starts from the last one rather than from a blank sheet." />
            <Outcome accent={accent} title="Estimation risk priced" body="Shortfall exposure on the half-year estimate is known before filing, not after assessment." />
            <Outcome accent={accent} title="Positions survive turnover" body="The reasoning lives in the record, not with the person who prepared it." />
            <Outcome accent={accent} title="Defence is a query" body="An RD question is answered from the chain behind the number." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Close-time and adjustment-accuracy comparisons <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Append-only audit trail: approved records are never overwritten, only superseded.</p>
                <p className="body-13 muted">Period lock after approval, with a controlled reopening path that is itself recorded.</p>
                <p className="body-13 muted">Preparer, reviewer and approver separation, and per-client isolation in advisory mode.</p>
                <p className="body-13 muted">Thai and English interface, so the record reads the same to a local reviewer and a group office.</p>
                <p className="body-13 muted">
                  Certifications and independent assurance <Badge>to be confirmed</Badge>
                </p>
              </div>
            </div>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Integration and roadmap
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Available now: trial balance, GL and document upload with the mapping assistant.</p>
                <p className="body-13 muted">Deferred tax is included as an enterprise preview alongside the current-tax provision.</p>
                <p className="body-13 muted">Next: BOI allocation, multi-entity groups and direct ERP connectors.</p>
                <p className="body-13 muted">Later: direct e-filing — only after the Revenue Department interface is validated. We will not claim it before then.</p>
                <p className="body-13 muted">
                  Named ERP connectors <Badge>to be confirmed</Badge>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Poster
        accent={accent}
        title="Run one year of your own accounts through CIT24."
        body="Bring a trial balance and last year's adjustments. We will show the computation, the evidence chain behind each figure, and what the estimate would have cost."
        stroke={accent}
      />
    </>
  );
}
