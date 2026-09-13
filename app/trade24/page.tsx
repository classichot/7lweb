import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, Badge, Capability, Figure, Flow, Glance, Outcome, Poster, Step, Who } from "@/components/ui";

export const metadata: Metadata = { title: "TRADE24" };

const accent = "#fffde6";

export default function Trade24Page() {
  return (
    <>
      <section className="section-hero">
        <div className="wrap">
          <div className="crumb">
            <Link href="/solutions">Solutions</Link>
            <span style={{ color: "var(--edge)" }}>/</span>
            <span style={{ color: accent }}>TRADE24</span>
          </div>
          <div className="grid-2" style={{ alignItems: "end", gap: "clamp(32px, 5vw, 72px)" }}>
            <div>
              <h1 className="display" style={{ fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.94, letterSpacing: "-0.04em", marginBottom: 20 }}>
                TRADE24
              </h1>
              <p className="tagline" style={{ color: accent }}>
                Customs, origin and landed cost as a controlled system.
              </p>
              <p className="body-16" style={{ color: "var(--mute-2)", maxWidth: "52ch", margin: "0 0 32px" }}>
                A trade-compliance platform for classification, origin, duty and the broker pack — so an FTA claim, a tariff code and a landed-cost figure are evidenced, not guessed, and a customs question is answered from the file.
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
              <Figure caption="A bill of lading, origin certificate and cargo seal on a desk" src="/platforms/trade24.jpg" ratio="3 / 2" />
              <div style={{ height: 20 }} />
              <span style={{ fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--mute)", fontWeight: 800 }}>At a glance</span>
              <Glance
                rows={[
                  { k: "Domain", v: "Customs, origin, landed cost" },
                  { k: "Anchor", v: "HS, FTA and duty rules" },
                  { k: "Scope", v: "Shipment to filing to audit" },
                  { k: "AI role", v: "Classification, document read" },
                  { k: "Duty schedules", v: <Badge>coverage to be confirmed</Badge> },
                ]}
              />
            </div>
          </div>
          <Flow items={["Shipment", "Classify", "Origin", "Duty", "File", "Audit"]} color={accent} />
        </div>
      </section>

      <section className="section-light">
        <div className="wrap grid-2">
          <div>
            <p className="kicker kicker-deep">The problem</p>
            <h2 className="h3" style={{ maxWidth: "18ch", marginBottom: 20 }}>
              Duty is a surprise. Origin is a PDF. The code was someone&apos;s best guess.
            </h2>
            <p className="body stone" style={{ marginBottom: 14, maxWidth: "52ch" }}>
              Brokers file what they are sent. Classification lives in a spreadsheet that drifted from the product. FTA certificates are collected after the shipment, or not at all. When customs asks why a rate was used, the answer is reconstructed from email.
            </p>
            <p className="body stone" style={{ maxWidth: "52ch" }}>
              TRADE24 makes the shipment the unit of record: classification, origin evidence, duty calculation and the broker pack sit on the same file, so landed cost is known before the goods move.
            </p>
          </div>
          <div>
            <p className="kicker kicker-deep">Who it is for</p>
            <div className="rule-list">
              <Who title="Trade and customs teams" body="Owning classification, origin and duty across lanes without a broker-by-broker memory." />
              <Who title="Supply-chain and procurement" body="Needing landed cost and preference eligibility before they place the order." />
              <Who title="Group tax" body="Duty, import VAT and intercompany goods that must agree with CIT24 and TP24." />
              <Who title="Advisory firms" body="Running a portfolio of importers on one classification and origin methodology." />
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
            <Capability n="01" title="Tariff classification with evidence">
              HS codes proposed from product data and documents, with the ruling, the note and the rejected alternatives kept beside the choice.
            </Capability>
            <Capability n="02" title="Origin and FTA preference">
              Origin criteria tested against the bill of materials and supplier declarations, so a preference claim has a file, not a hope.
            </Capability>
            <Capability n="03" title="Landed cost and duty accrual">
              Duty, fees and recoverable tax computed per shipment and posted toward the close — visible to CFO24 when both platforms are in use.
            </Capability>
            <Capability n="04" title="Broker pack and filing trail">
              The pack the broker files is generated from the same record; the return and the assessment stay attached.
            </Capability>
            <Capability n="05" title="Licence and restricted-goods checks">
              Controlled goods and licence conditions tested before dispatch, with the permit held against the shipment.
            </Capability>
            <Capability n="06" title="Intercompany goods handshake">
              Related-party shipments share classification and value with TP24 rather than being priced twice.
            </Capability>
            <Capability n="07" title="Post-entry and audit defence">
              Amendments, queries and voluntary disclosures managed against the original file, with every change dated.
            </Capability>
            <Capability n="08" title="Lane and supplier intelligence">
              Repeat lanes remember the last approved classification and origin path, so the next shipment starts from a decision, not a blank form.
            </Capability>
          </div>
          <div style={{ marginTop: "clamp(40px, 5vw, 64px)", borderLeft: `2px solid ${accent}`, paddingLeft: 24, maxWidth: "60ch" }}>
            <p style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: 1.3, letterSpacing: "-0.02em", fontWeight: 800, margin: "0 0 10px", color: "var(--snow)" }}>
              AI reads the documents and proposes a code. A deterministic tariff engine computes the duty. A person signs the classification.
            </p>
            <p className="body-14 muted">A language model never files a declaration. Every rate is rule-versioned and traceable to the schedule and the shipment documents.</p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="wrap">
          <p className="kicker kicker-deep">How the platform works</p>
          <h3 className="h4" style={{ marginBottom: 28, maxWidth: "30ch" }}>
            Five layers, one line from the shipment to the assessment
          </h3>
          <div className="cells-ink" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", marginBottom: "clamp(48px, 6vw, 80px)" }}>
            {[
              ["01", "Data engine", "Ingest invoices, BoM, bills of lading and supplier declarations."],
              ["02", "Rules engine", "Effective-dated HS, FTA and duty schedules, versioned."],
              ["03", "Calculation engine", "Duty, fees and landed cost; reproducible arithmetic."],
              ["04", "Filing engine", "Broker pack, declarations, licences and deadline control."],
              ["05", "AI intelligence layer", "Document read, classification assist and gap detection."],
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
                A first FTA-preferential shipment on a new lane
              </h3>
              <p className="body-14 muted-ink" style={{ maxWidth: "44ch" }}>
                Illustrative sequence, not a client engagement.
              </p>
            </div>
            <div>
              <Step n="01">Commercial invoice, packing list and bill of lading are loaded; AI extracts parties, goods and values for review.</Step>
              <Step n="02">A classification is proposed against the product description; the specialist accepts or corrects it, with the rejected codes kept.</Step>
              <Step n="03">Origin criteria are tested against the bill of materials and supplier declarations; the FTA preference is granted or refused with the evidence recorded.</Step>
              <Step n="04">Duty and landed cost are calculated under the chosen schedule; the accrual is available to the close.</Step>
              <Step n="05">The broker pack is generated from the same record and filed; the return is attached when it comes back.</Step>
              <Step n="06">A later customs query opens the shipment: code, origin test, rule version and the person who signed each step.</Step>
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
            <Outcome accent={accent} title="Duty known before the vessel sails" body="Landed cost is a calculation from the file, not a surprise on the assessment." />
            <Outcome accent={accent} title="Preference you can prove" body="An FTA claim opens to the origin test and the supplier declaration." />
            <Outcome accent={accent} title="Classification that survives turnover" body="The reasoning lives on the product, not with the person who last guessed the code." />
            <Outcome accent={accent} title="A query is a lookup" body="Customs questions are answered from the shipment record rather than from email." />
          </div>
          <p className="body-13 muted" style={{ marginBottom: "clamp(48px, 6vw, 72px)" }}>
            Duty and cycle-time comparisons <Badge>to be added once measured with client data</Badge>
          </p>
          <div className="grid-2s" style={{ borderTop: "1px solid var(--line-soft)", paddingTop: "clamp(32px, 4vw, 48px)" }}>
            <div>
              <h3 className="h4" style={{ marginBottom: 16, color: "var(--snow)" }}>
                Data security and auditability
              </h3>
              <div style={{ display: "grid", gap: 10 }}>
                <p className="body-13 muted">Lane- and entity-level access for groups that separate operating companies.</p>
                <p className="body-13 muted">Immutable shipment file: later analysis never overwrites what was filed.</p>
                <p className="body-13 muted">Every classification change logged with author, date and the codes discarded.</p>
                <p className="body-13 muted">Retention aligned to customs assessment windows.</p>
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
                <p className="body-13 muted">ERP and procurement for product, BoM and purchase orders.</p>
                <p className="body-13 muted">Broker and customs-filing channels for the pack and the return.</p>
                <p className="body-13 muted">Intercompany value shared with TP24; duty accrual visible to CFO24 and CIT24.</p>
                <p className="body-13 muted">Import licences and permits held with LAW24 when that platform is in use.</p>
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
        title="Put the tariff code in a system that can defend it."
        body="We will run one lane and one FTA claim through TRADE24 and show the classification, the origin test and the duty calculation that come out."
        stroke={accent}
      />
    </>
  );
}
