"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { platforms } from "@/lib/site";
import { Arrow } from "./ui";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [lang, setLang] = useState<"EN" | "TH">("EN");
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawer ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawer]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setDrawer(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const langToggle = (
    <div className="lang">
      <button type="button" className={lang === "EN" ? "on" : ""} onClick={() => setLang("EN")}>
        EN
      </button>
      <button type="button" className={lang === "TH" ? "on" : ""} onClick={() => setLang("TH")}>
        TH
      </button>
    </div>
  );

  return (
    <header className="header">
      <div className="header-in">
        <Link href="/" className="brand" aria-label="7L Advisory home">
          <span className="brand-7l">7L</span>
          <span className="brand-name">Advisory</span>
          <span className="brand-dots" aria-hidden>
            <span className="brand-dot" />
            <span className="brand-dot brand-dot-red" />
          </span>
        </Link>
        <nav className="nav nav-desktop" aria-label="Primary">
          <div className="menu" ref={menuRef}>
            <button type="button" className="menu-btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
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
        <div className="header-tools">
          <span className="header-lang">{langToggle}</span>
          <Link href="/contact" className="btn btn-accent header-cta">
            Talk to Us
            <Arrow />
          </Link>
          <button
            type="button"
            className="burger"
            aria-expanded={drawer}
            aria-controls="mobile-nav"
            onClick={() => setDrawer((v) => !v)}
          >
            <span className="sr-only">{drawer ? "Close menu" : "Open menu"}</span>
            <span className={drawer ? "burger-bar on" : "burger-bar"} />
            <span className={drawer ? "burger-bar on" : "burger-bar"} />
          </button>
        </div>
      </div>
      {drawer ? (
        <nav id="mobile-nav" className="drawer" aria-label="Mobile">
          <Link href="/solutions" className="drawer-link">
            Solutions
          </Link>
          {platforms.map((p) => (
            <Link key={p.slug} href={`/${p.slug}`} className="drawer-sub">
              <span style={{ color: p.accent }}>{p.name}</span>
              <span className="drawer-sub-desc">{p.short}</span>
            </Link>
          ))}
          <Link href="/approach" className="drawer-link" aria-current={pathname === "/approach" ? "page" : undefined}>
            Our Approach
          </Link>
          <Link href="/about" className="drawer-link" aria-current={pathname === "/about" ? "page" : undefined}>
            About
          </Link>
          <Link href="/insights" className="drawer-link" aria-current={pathname === "/insights" ? "page" : undefined}>
            Insights
          </Link>
          <div className="drawer-foot">
            {langToggle}
            <Link href="/contact" className="btn btn-accent">
              Talk to Us
              <Arrow />
            </Link>
          </div>
        </nav>
      ) : null}
      {lang === "TH" ? (
        <div className="thai-bar">
          <span>ภาษาไทย — the Thai-language site is in preparation. English content shown.</span>
          <button
            type="button"
            onClick={() => setLang("EN")}
            style={{ background: "none", border: "1px solid var(--line)", color: "var(--snow)", cursor: "pointer", padding: "8px 10px", fontSize: 12, fontWeight: 600 }}
          >
            Back to English
          </button>
        </div>
      ) : null}
    </header>
  );
}
