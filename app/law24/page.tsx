import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Flow, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "LAW24" };

const accent = "#fff3a0";

export default function Law24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>LAW24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                LAW24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                Legal work as a system, not a filing cabinet.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                A legal intelligence platform for contracts, corporate records and due diligence — obligations, deadlines and opinions kept with the documents they came from, so legal work is queryable rather than reconstructed from a shared drive.
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
              <Figure caption="A statute volume, signed contract and minute books on a desk" src="/platforms/law24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Corporate and commercial law" },
                  { k: "Anchor", v: "Contracts, records, obligations" },
                  { k: "Scope", v: "Matter to opinion to archive" },
                  { k: "AI role", v: "Extraction, comparison, drafting" },
                  { k: "Law packs", v: <Badge>coverage to be confirmed</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Intake", "Extract", "Classify", "Obligations", "Review", "Opinion", "Archive"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              The advice is in a PDF. The obligation is in someone&apos;s calendar.
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Contracts are signed and then forgotten until a renewal, a dispute or a buyer&apos;s questionnaire. Corporate records live in a cupboard. Legal due diligence is a fresh data room every deal. The connection between a clause, the advice given on it and the deadline it created is rebuilt from memory.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              LAW24 keeps that connection as the unit of record, so a lawyer can open any obligation and see the clause, the opinion and the person who signed it.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="General counsel and in-house legal" body="Running the contract estate, the legal calendar and the advice record without a parallel spreadsheet." />
              <Who title="Company secretarial teams" body="Minutes, filings, licences and board calendars kept against the same entity master." />
              <Who title="Law firms and legal practices" body="Serving a portfolio of clients on one matter methodology, with privilege-aware access." />
              <Who title="Deal teams" body="Legal due diligence in the same room as RISK24 tax and financial review, against shared evidence." />
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
            <Capability n="01" title="Contract ingestion and clause extraction">
              Agreements read into a structured model — parties, governing law, term, notice, liability, change-of-control — with the source page beside every extracted clause.
            </Capability>
            <Capability n="02" title="Obligation and deadline register">
              Every date, condition and notice period lifted into a live register, so renewals and breaches are visible before they arrive as a crisis.
            </Capability>
            <Capability n="03" title="Corporate records and legal calendar">
              Constitutive documents, minutes, licences and statutory filings held against the entity, with the calendar that those records imply.
            </Capability>
            <Capability n="04" title="Playbooks and clause libraries">
              Preferred positions, fallbacks and jurisdiction packs versioned, so negotiation starts from the last approved answer rather than a blank page.
            </Capability>
            <Capability n="05" title="Legal due diligence">
              A deal room for legal issues: requests, findings and reports that share evidence with RISK24 when tax, financial and legal review run together.
            </Capability>
            <Capability n="06" title="Versioned opinions and advice records">
              Advice issued as a record with its facts, its authorities and its author — retrievable when the same question returns two years later.
            </Capability>
            <Capability n="07" title="Matter workflow">
              Intake, assignment, review and sign-off with privilege-aware access and a complete log of who saw what, when.
            </Capability>
            <Capability n="08" title="Comparison and change detection">
              Incoming drafts compared to the last signed version and to the playbook, with the deltas routed to a lawyer rather than buried in markup.
            </Capability>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: `2px solid ${accent}`, paddingLeft: 24, maxWidth: "60ch" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px", color: "var(--snow)" }}>
              AI reads, compares and drafts. A lawyer decides. Nothing that looks like advice leaves the system unsigned.
            </p>
            <p className="body-14 muted">A language model never issues an opinion. Extraction and comparison are assistive; the obligation register and the sign-off trail are deterministic and inspectable.</p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <h3 className="h4" style={{ marginBottom: 28, maxWidth: "30ch" }}>
            Five layers, one line from the document to the deadline
          </h3>
          <div className="cells-ink" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Data engine", "Ingest contracts, minutes, licences and correspondence into a controlled store."],
              ["02", "Playbook engine", "Versioned clause libraries and jurisdiction packs, effective-dated."],
              ["03", "Obligation engine", "Dates, conditions and notice periods computed from the signed text."],
              ["04", "Matter engine", "Workflow, privilege, review and the opinion record."],
              ["05", "AI intelligence layer", "Extraction, comparison, gap detection and drafting for review."],
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
                Legal due diligence on a share purchase
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">The target&apos;s contracts, minutes and licences are loaded into the deal room; AI proposes a classification and flags what is missing.</Step>
              <Step n="02">Change-of-control, assignment and termination clauses are extracted with the source page beside each hit.</Step>
              <Step n="03">The obligation register lists upcoming renewals, consents required for closing, and licences that lapse on a change of ownership.</Step>
              <Step n="04">Findings that also carry tax or earnings impact are linked to the same evidence in RISK24 rather than restated in a second memo.</Step>
              <Step n="05">The lawyer reviews low-confidence extractions, corrects the record, and issues the legal DD report from the same model.</Step>
              <Step n="06">After close, the signed SPA and the findings become the opening corporate record — not a ZIP file on a leavers&apos; laptop.</Step>
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
            <Outcome accent={accent} title="Obligations that surface themselves" body="Renewals and consents appear from the signed text, not from a reminder someone remembered to set." />
            <Outcome accent={accent} title="Advice you can find again" body="The opinion sits on the facts and the clause, so the next lawyer does not start from zero." />
            <Outcome accent={accent} title="One room for the deal" body="Legal, tax and financial findings report against the same evidence when RISK24 is in use." />
            <Outcome accent={accent} title="Privilege by design" body="Access follows the matter, not a folder tree that everyone can open." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Cycle-time comparisons <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Privilege-aware access: matter teams see their files; the rest of the organisation does not.</p>
                <p className="body-13 muted">Every extraction, correction and sign-off logged with author and time.</p>
                <p className="body-13 muted">The signed version of a contract is immutable; later analysis never overwrites it.</p>
                <p className="body-13 muted">Retention and legal-hold rules configurable per matter and jurisdiction.</p>
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
                <p className="body-13 muted">Contract repositories and e-signature tools for intake of executed documents.</p>
                <p className="body-13 muted">Entity master shared with CIT24, TP24 and GMT24 so corporate records are not re-keyed.</p>
                <p className="body-13 muted">Deal room shared with RISK24 for combined legal, tax and financial due diligence.</p>
                <p className="body-13 muted">Import licences and permits shared with TRADE24 when that platform is in use.</p>
                <p className="body-13 muted">Calendar and ticketing systems for obligation alerts already in use.</p>
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
        title="Put the legal file in the system that will have to defend it."
        body="We will run one contract family and one legal due-diligence pack through LAW24 and show the obligation register, the evidence chain and the opinion record that come out."
        stroke={accent}
      />
    </>
  );
}
