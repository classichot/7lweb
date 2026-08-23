import Link from "next/link";
import { CONTACT_EMAIL, MAILTO, platforms } from "@/lib/site";
import { Badge } from "./ui";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-grid">
          <div style={{ display: "grid", gap: 16, alignContent: "start" }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 7, fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>
              <span style={{ color: "var(--mute)" }}>7L</span>
              <span style={{ color: "var(--snow)" }}>Advisory</span>
              <span style={{ width: 7, height: 7, background: "var(--accent)", display: "block", alignSelf: "flex-start", marginTop: 2 }} />
            </span>
            <p className="body-14 muted" style={{ maxWidth: "32ch" }}>
              Advisory, engineered for action. We don&apos;t stop at reports — we build the technology that helps businesses decide, comply, detect risk and grow.
            </p>
          </div>
          <div className="footer-col">
            <span className="footer-h">Platforms</span>
            {platforms.map((p) => (
              <Link key={p.slug} href={`/${p.slug}`}>
                {p.name} — {p.short === "Risk, tax & deal" ? "Risk, tax & deal intelligence" : p.short === "Thai corporate tax" ? "Thai corporate tax" : p.short}
              </Link>
            ))}
            <Link href="/solutions">All solutions</Link>
          </div>
          <div className="footer-col">
            <span className="footer-h">Company</span>
            <Link href="/about">About 7L Advisory</Link>
            <Link href="/approach">Our approach</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <span className="footer-h">Contact</span>
            <a href={MAILTO}>{CONTACT_EMAIL}</a>
            <span className="muted" style={{ fontSize: 14 }}>
              Bangkok, Thailand <Badge>address to be confirmed</Badge>
            </span>
            <span className="muted" style={{ fontSize: 14 }}>
              Telephone <Badge>placeholder</Badge>
            </span>
          </div>
        </div>
        <div className="footer-end">
          <span>
            © 2026 7L Advisory. <Badge>legal entity name to be confirmed</Badge>
          </span>
          <span style={{ marginLeft: "auto" }}>
            Privacy Policy <span style={{ color: "var(--edge)" }}>·</span> Cookie Notice <span style={{ color: "var(--edge)" }}>·</span> Terms of Use{" "}
            <Badge>to be drafted</Badge>
          </span>
        </div>
      </div>
    </footer>
  );
}
