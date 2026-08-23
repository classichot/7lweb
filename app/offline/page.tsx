import Link from "next/link";

export const metadata = { title: "Offline" };

export default function OfflinePage() {
  return (
    <section className="section-hero">
      <div className="wrap">
        <p className="kicker kicker-accent">Offline</p>
        <h1 className="display display-md">You are offline.</h1>
        <p className="lede" style={{ marginBottom: 32 }}>
          This page is not in the cache yet. Reconnect and we will load it, or go back to a page you already opened.
        </p>
        <Link className="btn btn-accent" href="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
