import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Flow, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "GMT24" };

const accent = "#ffd84a";

export default function Gmt24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>GMT24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                GMT24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                Global minimum tax intelligence for the Pillar Two era.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                An enterprise platform for OECD Pillar Two: financial, CbCR, entity, transfer pricing and incentive data converted into a controlled GloBE data model, with versioned rules driving every calculation.
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
              <Figure caption="Financial-district skyline at dusk" src="/platforms/gmt24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "OECD Pillar Two / GloBE" },
                  { k: "Engine", v: "Deterministic, integer arithmetic" },
                  { k: "Rules", v: "Effective-dated OECD + local packs" },
                  { k: "Modes", v: "In-house group / advisor portfolio" },
                  { k: "Jurisdiction packs", v: <Badge>coverage to be confirmed</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Source data", "AI mapping", "Rules", "Calculation", "Explanation", "GIR", "Audit"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              Pillar Two is a data problem before it is a tax problem
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              GloBE calculations need entity-level data that most groups have never assembled in one place: consolidation figures, local tax numbers, deferred tax, incentives, ownership and CbCR — reconciled, at the right level, for every jurisdiction.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              A spreadsheet can compute an ETR. It cannot prove, two years later and to an auditor, which rule version and which source figure produced it. GMT24 is built for that second problem.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="Group tax directors" body="Owning the Pillar Two position, the provision impact and the filing." />
              <Who title="Local tax and finance teams" body="Supplying and validating jurisdictional data without owning group logic." />
              <Who title="Advisory firms" body="Running multiple client groups in portfolio mode on one engine." />
              <Who title="CFOs and audit committees" body="Needing a defensible number and a clear view of exposure by jurisdiction." />
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
            <Capability n="01" title="GloBE scope assessment">
              Group and entity scoping, revenue thresholds, excluded entities and ownership structure resolved from source data.
            </Capability>
            <Capability n="02" title="GloBE income and covered taxes">
              Financial accounting starting points adjusted through the prescribed items, with deferred tax handled explicitly.
            </Capability>
            <Capability n="03" title="Jurisdictional ETR">
              Effective tax rate per jurisdiction, per year, traceable from the rate back to the individual ledger figures.
            </Capability>
            <Capability n="04" title="Safe harbour testing">
              Transitional CbCR and other safe harbours tested first, so effort goes only where a full calculation is required.
            </Capability>
            <Capability n="05" title="Substance-based income exclusion">
              Payroll and tangible asset carve-outs computed per entity with the transitional rates applied by year.
            </Capability>
            <Capability n="06" title="QDMTT, IIR and UTPR allocation">
              Top-up tax determined and allocated through the charging order, with the ownership chain modelled explicitly.
            </Capability>
            <Capability n="07" title="GloBE Information Return support">
              GIR data points assembled from the same model that produced the numbers, with notification tracking.
            </Capability>
            <Capability n="08" title="Scenario modelling and audit trails">
              Restructuring, incentive and rate scenarios run side by side; every version retained and comparable.
            </Capability>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: `2px solid ${accent}`, paddingLeft: 24, maxWidth: "60ch" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px", color: "var(--snow)" }}>
              AI handles messy data, mapping, interpretation and explanation. A deterministic engine performs the calculation.
            </p>
            <p className="body-14 muted">A language model never computes a Pillar Two number. Every figure is reproducible, rule-versioned and traceable to its source.</p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <h3 className="h4" style={{ marginBottom: 28, maxWidth: "30ch" }}>
            Five layers, one traceable line from source data to filing
          </h3>
          <div className="cells-ink" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Data engine", "Ingest, classify and map source data to the GloBE model."],
              ["02", "Rules engine", "Effective-dated OECD and local rule packs, versioned."],
              ["03", "Calculation engine", "Deterministic dependency graph; reproducible arithmetic."],
              ["04", "Compliance engine", "GIR, filings, notifications and deadline control."],
              ["05", "AI intelligence layer", "Mapping, gap detection, explanation and review support."],
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
                A first Pillar Two year for a multinational group
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">Consolidation, CbCR and entity data are loaded; AI proposes the mapping and flags what is missing.</Step>
              <Step n="02">Scope is resolved: in-scope entities, excluded entities and the ownership chain.</Step>
              <Step n="03">Transitional CbCR safe harbour is tested; jurisdictions that pass are set aside with the evidence recorded.</Step>
              <Step n="04">For the rest, GloBE income, covered taxes, SBIE and jurisdictional ETR are calculated.</Step>
              <Step n="05">Top-up tax is determined and allocated through QDMTT, IIR and UTPR in the correct order.</Step>
              <Step n="06">Any figure can be opened to its source: rule version, input value, and the document it came from.</Step>
              <Step n="07">The GIR data set is assembled and the provision impact reported to finance.</Step>
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
            <Outcome accent={accent} title="One controlled data model" body="The provision, the filing and the board number come from the same place." />
            <Outcome accent={accent} title="Effort where it matters" body="Safe harbours tested first, so full calculations run only where required." />
            <Outcome accent={accent} title="Reproducible numbers" body="Rule-versioned calculations that can be restated exactly, years later." />
            <Outcome accent={accent} title="Decisions before deadlines" body="Scenario modelling turns compliance data into planning information." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Implementation timelines and effort comparisons <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Entity-level access control; local teams see only their jurisdiction.</p>
                <p className="body-13 muted">One-click audit trail from any calculated amount to its inputs and rule version.</p>
                <p className="body-13 muted">Immutable version history for every submission and restatement.</p>
                <p className="body-13 muted">Segregation of preparation, review and approval across group and local roles.</p>
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
                <p className="body-13 muted">Consolidation and ERP systems for financial and deferred tax data.</p>
                <p className="body-13 muted">CbCR and tax reporting packs, plus entity master data.</p>
                <p className="body-13 muted">Provision tooling, with results returned for the accounting close.</p>
                <p className="body-13 muted">Shared entity and financial data with TP24, corporate records with LAW24, and provision impact returned to CFO24, where those platforms are in use.</p>
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
        title="Take your Pillar Two position out of the spreadsheet."
        body="We will run a scoped assessment on your group structure and show the calculation, the safe harbour tests and the audit trail behind every number."
        stroke={accent}
      />
    </>
  );
}
