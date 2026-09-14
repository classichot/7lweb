import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Flow, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "CFO24" };

const accent = "#ff6b1a";

export default function Cfo24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>CFO24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                CFO24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                The close, the cash and the board pack from one model.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                A finance operating system for the monthly close, cash and working capital, forecast versus actual, and the pack the board reads — so the number the CFO signs, the tax provision and the cash view are the same number, not three reconciliations.
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
              <Figure caption="A cash-flow worksheet and board-pack printout on a desk" src="/platforms/cfo24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "CFO, close and cash" },
                  { k: "Anchor", v: "One controlled finance model" },
                  { k: "Scope", v: "Close to board pack" },
                  { k: "AI role", v: "Mapping, commentary, exception" },
                  { k: "ERP connectors", v: <Badge>to be confirmed</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Sources", "Close", "Cash", "Forecast", "Board", "Audit"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              The board pack is assembled. The close is a negotiation. Cash is a separate file.
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Controllers close the books in one workbook. FP&amp;A forecasts in another. Treasury watches cash in a third. The tax provision arrives late from a fourth. By the time the board pack is compiled, nobody can open a figure and show the journal, the assumption and the person who approved it.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              CFO24 makes the close the source. Cash, forecast and the board pack are views of that source — and CIT24 writes the tax provision into the same model rather than emailing a number.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="CFOs and finance directors" body="Owning the close, the cash position and the story the board is told." />
              <Who title="Controllers and close teams" body="Running a calendar of tasks, reconciliations and sign-offs instead of a status spreadsheet." />
              <Who title="FP&A" body="Forecast versus actual against the same chart of accounts the close uses." />
              <Who title="PE portfolio finance" body="A consistent pack across companies, with earnings-quality findings from RISK24 attached when they exist." />
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
            <Capability n="01" title="Controlled monthly close">
              A close calendar with preparer, reviewer and approver on every reconciliation, so status is a query rather than a meeting.
            </Capability>
            <Capability n="02" title="Cash and working capital">
              Cash, receivables, payables and inventory as a live view of the same ledger the close uses — not a treasury sidecar.
            </Capability>
            <Capability n="03" title="Forecast versus actual">
              Driver-based forecasts compared to the closed period, with variances explained against the journals that caused them.
            </Capability>
            <Capability n="04" title="Board pack generation">
              The pack assembled from the model: P&amp;L, cash, covenants and commentary, versioned as issued.
            </Capability>
            <Capability n="05" title="Tax provision handshake">
              CIT24 writes the current-tax and deferred-tax figures into the close rather than arriving as a late spreadsheet.
            </Capability>
            <Capability n="06" title="Covenant and threshold alerts">
              Bank, shareholder and internal limits tested against the live numbers, with the breach evidence attached.
            </Capability>
            <Capability n="07" title="Management commentary">
              AI drafts variance narrative for a controller to correct; the signed commentary stays with the figure it explains.
            </Capability>
            <Capability n="08" title="Audit trail for the number the CFO signed">
              Any board figure opens to its source: journal, assumption, rule version and approver.
            </Capability>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: `2px solid ${accent}`, paddingLeft: 24, maxWidth: "60ch" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px", color: "var(--snow)" }}>
              AI maps messy sources and drafts commentary. The close arithmetic stays deterministic.
            </p>
            <p className="body-14 muted">A language model never produces the number the CFO signs. Every figure is reproducible, approval-stamped and traceable to its source.</p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <h3 className="h4" style={{ marginBottom: 28, maxWidth: "30ch" }}>
            Five layers, one line from the ledger to the board
          </h3>
          <div className="cells-ink" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Data engine", "ERP, bank, payroll and tax feeds mapped to one finance model."],
              ["02", "Close engine", "Reconciliations, journals and sign-off on an effective-dated calendar."],
              ["03", "Cash engine", "Working-capital and liquidity views of the same closed numbers."],
              ["04", "Pack engine", "Forecast, board pack and covenant tests generated from the model."],
              ["05", "AI intelligence layer", "Mapping, exception detection and commentary for review."],
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
                Month-end close into a board pack
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">ERP and bank extracts land; AI proposes the mapping and flags accounts that did not reconcile last period.</Step>
              <Step n="02">Controllers clear the close calendar; each reconciliation carries its evidence and a named approver.</Step>
              <Step n="03">CIT24 posts the tax provision into the same period rather than a side workbook.</Step>
              <Step n="04">Cash and working-capital views refresh from the closed ledger; a covenant test runs automatically.</Step>
              <Step n="05">FP&amp;A compares forecast to actual; AI drafts variance commentary for the controller to correct.</Step>
              <Step n="06">The board pack is generated and frozen. Any figure in it opens to the journal and the person who signed it.</Step>
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
            <Outcome accent={accent} title="One number, three uses" body="Close, cash and board pack stop being three files that almost agree." />
            <Outcome accent={accent} title="Provision on time" body="The tax number arrives as a posting, not as a late email." />
            <Outcome accent={accent} title="A pack you can defend" body="A director question is answered from the trail, not from recollection." />
            <Outcome accent={accent} title="Forecast that stays honest" body="Variances point at journals, so the next forecast is corrected rather than padded." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Close-day reductions <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Entity-level access so portfolio or group teams see only their companies.</p>
                <p className="body-13 muted">Immutable version of the pack as issued to the board.</p>
                <p className="body-13 muted">Segregation of preparation, review and CFO sign-off.</p>
                <p className="body-13 muted">One-click trail from any signed amount to its inputs.</p>
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
                <p className="body-13 muted">ERP and consolidation systems for the ledger and trial balance.</p>
                <p className="body-13 muted">Bank, payroll and expense feeds for cash and close completeness.</p>
                <p className="body-13 muted">Tax provision from CIT24; Pillar Two impact from GMT24 where in use.</p>
                <p className="body-13 muted">Earnings-quality findings from RISK24 attached to the pack when a review has run.</p>
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
        title="Put the number the CFO signs in a system that can show its work."
        body="We will run one closed month through CFO24 and show the cash view, the provision posting and the board pack that come out of the same model."
        stroke={accent}
      />
    </>
  );
}
