"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { platforms } from "@/lib/site";
import { Arrow } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "TH">("EN");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="header">
      <div className="header-in">
        <Link href="/" className="brand" aria-label="7L Advisory home">
          <span className="brand-7l">7L</span>
          <span className="brand-name">Advisory</span>
          <span className="brand-dot" />
        </Link>
        <nav className="nav">
          <div className="menu" ref={menuRef}>
            <button className="menu-btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
              Solutions
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8d93a1" strokeWidth="2.5">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {open ? (
              <div className="menu-panel">
                <Link href="/solutions" className="menu-item menu-all">
                  All solutions
                </Link>
                {platforms.map((p) => (
                  <Link key={p.slug} href={`/${p.slug}`} className="menu-item">
                    <span className="menu-name" style={{ color: p.accent }}>
                      {p.name}
                    </span>
                    <span className="menu-desc">{p.menu}</span>
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
          <Link href="/approach" className="nav-link" aria-current={pathname === "/approach" ? "page" : undefined}>
            Our Approach
          </Link>
          <Link href="/about" className="nav-link" aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
          <Link href="/insights" className="nav-link" aria-current={pathname === "/insights" ? "page" : undefined}>
            Insights
          </Link>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div className="lang">
            <button className={lang === "EN" ? "on" : ""} onClick={() => setLang("EN")}>
              EN
            </button>
            <button className={lang === "TH" ? "on" : ""} onClick={() => setLang("TH")}>
              TH
            </button>
          </div>
          <Link href="/contact" className="btn btn-accent" style={{ padding: "11px 18px", fontSize: 14 }}>
            Talk to Us
            <Arrow color="#0d0f14" />
          </Link>
        </div>
      </div>
      {lang === "TH" ? (
        <div className="thai-bar">
          <span>ภาษาไทย — the Thai-language site is in preparation. English content shown.</span>
          <button
            onClick={() => setLang("EN")}
            style={{ background: "none", border: "1px solid var(--line)", color: "var(--snow)", cursor: "pointer", padding: "4px 10px", fontSize: 12, fontWeight: 600 }}
          >
            Back to English
          </button>
        </div>
      ) : null}
    </header>
  );
}
