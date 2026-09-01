import type { Metadata } from "next";
import { Badge } from "@/components/ui";
import { Arrow } from "@/components/ui";
import { MAILTO } from "@/lib/site";

export const metadata: Metadata = { title: "Insights" };

const articles = [
  ["Pillar Two", "What the transitional CbCR safe harbour actually asks of your data", "Why groups that pass on paper still fail on evidence — and the three data points that decide it."],
  ["Forensics", "Benford's Law is a starting point, not a finding", "How digit analysis earns its place in a forensic programme, and where it misleads."],
  ["AI governance", "Why a language model should never compute a tax number", "The line between assistance and calculation, and how to draw it in a system a regulator will examine."],
  ["Transfer pricing", "Documentation you generate versus documentation you assemble", "What changes when the local file is an output of the system that priced the transaction."],
  ["Tax technology", "Effective dating: the unglamorous feature that decides whether you can defend a number", "Rule versioning as an audit requirement rather than an engineering preference."],
  ["Practice", "When not to build: three processes better left manual", "A short, honest test for whether a compliance process deserves a platform."],
  ["Legal", "A contract that is not in the system is not in force — operationally", "Why obligation tracking is the legal equivalent of a tax adjustment ledger."],
];

export default function InsightsPage() {
  return (
    <>
      <section className="section-hero" style={{ paddingBottom: "clamp(40px, 5vw, 72px)" }}>
        <div className="wrap">
          <p className="kicker kicker-accent">Insights</p>
          <h1 className="display display-lg">Notes from the work</h1>
          <p className="lede" style={{ maxWidth: "56ch" }}>
            Regulatory analysis, technical explanation and what we learn building systems for tax, risk, legal and compliance. No thought-leadership filler.
          </p>
        </div>
      </section>

      <section className="section-light" style={{ padding: "clamp(48px, 6vw, 96px) clamp(20px, 4vw, 56px)" }}>
        <div className="wrap">
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", marginBottom: "clamp(32px, 4vw, 52px)" }}>
            <Badge ink>Placeholder articles — titles drafted by 7L, no content published yet</Badge>
          </div>
          <div className="cells-ink" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {articles.map(([cat, title, body]) => (
              <article key={title} className="cell-ink" style={{ padding: "clamp(20px, 2.4vw, 32px)", gap: 12 }}>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--deep)", fontWeight: 800 }}>{cat}</span>
                  <span style={{ fontSize: 11, color: "var(--dust)" }}>Draft</span>
                </div>
                <h3 style={{ fontSize: "clamp(19px, 2vw, 24px)", lineHeight: 1.15, letterSpacing: "-0.02em" }}>{title}</h3>
                <p className="body-13 muted-ink">{body}</p>
                <Badge ink>to be written</Badge>
              </article>
            ))}
          </div>
          <div className="grid-2s" style={{ marginTop: "clamp(40px, 5vw, 64px)", borderTop: "2px solid var(--ink)", paddingTop: 24, alignItems: "center" }}>
            <p className="body stone" style={{ maxWidth: "44ch" }}>
              Each article uses the same layout: a category, a title, a short standfirst and the body. New pieces drop into this grid without design work.
            </p>
            <a className="btn btn-deep" href={MAILTO} style={{ justifySelf: "start" }}>
              Ask to be notified
              <Arrow color="#f3f2f2" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
