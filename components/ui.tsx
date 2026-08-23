import Link from "next/link";
import type { ReactNode } from "react";

export function Arrow({ color = "currentColor" }: { color?: string }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

export function Figure({
  caption,
  accent,
  ratio = "16 / 9",
}: {
  caption: string;
  accent?: string;
  ratio?: string;
}) {
  return (
    <div className="figure grayscale" style={{ aspectRatio: ratio, boxShadow: accent ? `inset 0 2px 0 ${accent}` : undefined }}>
      <div className="figure-grid" />
      <span className="figure-cap">{caption}</span>
    </div>
  );
}

export function Badge({ children, ink }: { children: ReactNode; ink?: boolean }) {
  return <span className={ink ? "tbc tbc-ink" : "tbc"}>{children}</span>;
}

export function Poster({
  accent,
  title,
  body,
  href = "/contact",
  label = "Request a Demonstration",
  stroke,
}: {
  accent: string;
  title: string;
  body: string;
  href?: string;
  label?: string;
  stroke?: string;
}) {
  return (
    <section className="section-poster" style={{ background: accent }}>
      <div className="wrap">
        <h2 className="display" style={{ fontSize: "clamp(30px, 4.6vw, 64px)", maxWidth: "20ch", marginBottom: 24 }}>
          {title}
        </h2>
        <p className="body-16" style={{ maxWidth: "54ch", margin: "0 0 36px", color: "#201e1d" }}>
          {body}
        </p>
        <Link className="btn btn-ink" href={href}>
          {label}
          <Arrow color={stroke || accent} />
        </Link>
      </div>
    </section>
  );
}

export function Capability({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <div className="cell">
      <span className="num">{n}</span>
      <h4 style={{ fontSize: 18, color: "var(--snow)" }}>{title}</h4>
      <p className="body-13 muted">{children}</p>
    </div>
  );
}

export function Who({ title, body }: { title: string; body: string }) {
  return (
    <div className="rule-row">
      <h4 style={{ fontSize: 17, marginBottom: 4 }}>{title}</h4>
      <p className="body-13 muted-ink">{body}</p>
    </div>
  );
}

export function Step({ n, children }: { n: string; children: ReactNode }) {
  return (
    <div className="step">
      <span className="step-n">{n}</span>
      <p className="body-14" style={{ margin: 0 }}>
        {children}
      </p>
    </div>
  );
}

export function Glance({ rows }: { rows: { k: string; v: ReactNode }[] }) {
  return (
    <div className="glance">
      {rows.map((r) => (
        <div className="glance-row" key={r.k}>
          <span className="muted">{r.k}</span>
          <span style={{ color: "var(--snow)", textAlign: "right" }}>{r.v}</span>
        </div>
      ))}
    </div>
  );
}

export function Flow({ items, color }: { items: string[]; color: string }) {
  return (
    <div className="flow" style={{ marginTop: "clamp(40px, 5vw, 64px)", borderTop: "1px solid var(--line-soft)", paddingTop: 24 }}>
      {items.map((item, i) => (
        <span key={item} style={{ display: "contents" }}>
          {i > 0 ? <span className="flow-sep">→</span> : null}
          <span style={{ fontSize: i === 0 ? 11 : 13, letterSpacing: i === 0 ? "0.1em" : undefined, textTransform: i === 0 ? "uppercase" : undefined, color: i === 0 ? "var(--mute)" : color, fontWeight: i === 0 ? 800 : 400 }}>
            {item}
          </span>
        </span>
      ))}
    </div>
  );
}

export function Bullet({ color, children, ink }: { color: string; children: ReactNode; ink?: boolean }) {
  return (
    <div className={ink ? "bullet bullet-ink" : "bullet"}>
      <span className="dot" style={{ background: color }} />
      {children}
    </div>
  );
}

export function Outcome({ accent, title, body }: { accent: string; title: string; body: string }) {
  return (
    <div style={{ borderTop: `2px solid ${accent}`, paddingTop: 16 }}>
      <h4 style={{ fontSize: 17, margin: "0 0 6px", color: "var(--snow)" }}>{title}</h4>
      <p className="body-13 muted">{body}</p>
    </div>
  );
}
