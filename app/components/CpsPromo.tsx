"use client";

// Temporary CPS 2026 promotion. Settings: lib/cpsPromo.ts
//  - Announcement bar under the main menu on every page.
//  - Centred pop-up on the homepage, once per browser session.
//  - Corner card on the homepage after the pop-up is closed.
// Each piece can be closed by the visitor and stays closed for that session.
// Nothing renders after the event end date.

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CPS_PROMO as P, cpsPromoActive } from "@/lib/cpsPromo";

const KEYS = {
  bar: "pcml_cps26_bar_closed",
  modal: "pcml_cps26_modal_seen",
  card: "pcml_cps26_card_closed",
};

function readFlag(key: string): boolean {
  try {
    return window.sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function setFlag(key: string) {
  try {
    window.sessionStorage.setItem(key, "1");
  } catch {
    /* storage unavailable: the piece simply reappears next page load */
  }
}

function track(placement: string, action: string) {
  try {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.("event", "cps_promo", { placement, action });
  } catch {
    /* analytics is optional */
  }
}

const SORA = "var(--font-sora), sans-serif";

function CloseIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const closeBtn: React.CSSProperties = {
  position: "absolute",
  width: 44,
  height: 44,
  border: "none",
  background: "transparent",
  cursor: "pointer",
  display: "grid",
  placeItems: "center",
  padding: 0,
};

export default function CpsPromo() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [ready, setReady] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  // Decide what to show only in the browser, so the end date is checked
  // against the visitor's clock rather than a cached page.
  useEffect(() => {
    if (!cpsPromoActive()) return;
    setReady(true);
    setBarOpen(!readFlag(KEYS.bar));
  }, []);

  useEffect(() => {
    if (!ready || !isHome) {
      setModalOpen(false);
      setCardOpen(false);
      return;
    }
    if (!readFlag(KEYS.modal)) {
      const t = window.setTimeout(() => setModalOpen(true), 900);
      return () => window.clearTimeout(t);
    }
    setCardOpen(!readFlag(KEYS.card));
  }, [ready, isHome]);

  function closeModal() {
    setFlag(KEYS.modal);
    setModalOpen(false);
    if (!readFlag(KEYS.card)) setCardOpen(true);
  }

  useEffect(() => {
    if (!modalOpen) return;
    modalCloseRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalOpen]);

  if (!ready) return null;

  return (
    <>
      {barOpen && (
        <aside aria-label={`${P.shortName} announcement`} className="pcml-cps-bar">
          <span className="pcml-cps-bar-kicker">{P.kicker}</span>
          <span className="pcml-cps-bar-msg">
            <strong style={{ fontFamily: SORA, fontWeight: 600 }}>{P.eventName}</strong>
            {` · ${P.datesShort} · ${P.venueShort}`}
          </span>
          <Link
            href={P.bookHref}
            onClick={() => track("bar", "book")}
            className="pcml-cps-bar-btn"
          >
            Book a Meeting
          </Link>
          <button
            type="button"
            aria-label="Close announcement"
            onClick={() => {
              setFlag(KEYS.bar);
              setBarOpen(false);
            }}
            style={{ ...closeBtn, right: 12, top: "50%", transform: "translateY(-50%)", color: "#ffffff" }}
          >
            <CloseIcon />
          </button>
        </aside>
      )}

      {modalOpen && (
        <div
          className="pcml-cps-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div role="dialog" aria-modal="true" aria-labelledby="pcml-cps-title" className="pcml-cps-modal">
            <div className="pcml-cps-modal-head">
              <button
                ref={modalCloseRef}
                type="button"
                aria-label="Close"
                onClick={closeModal}
                style={{ ...closeBtn, top: 10, right: 10, color: "#ffffff" }}
              >
                <CloseIcon size={20} />
              </button>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, fontFamily: SORA, fontWeight: 600, fontSize: 12, letterSpacing: ".16em", textTransform: "uppercase", color: "#e3ab7c", paddingRight: 36 }}>
                <span style={{ width: 6, height: 6, background: "#B06533", flexShrink: 0 }} />
                {P.kicker}
              </div>
              <h2 id="pcml-cps-title" className="pcml-cps-modal-title">{P.eventName}</h2>
            </div>
            <div className="pcml-cps-modal-body">
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" /><path d="M3.5 10h17M8 3v4M16 3v4" /></svg>
                  <span>{P.dates}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#B06533" strokeWidth="1.6" aria-hidden="true"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
                  <span>{P.venue}</span>
                </div>
              </div>
              <p style={{ margin: 0, lineHeight: 1.6, color: "#3a454b" }}>
                Planning, financing or delivering a major mining project? Book time with our team at {P.shortName} to talk about how Praetorian integrates into your owners&apos; team, from scoping through commissioning.
              </p>
              <div style={{ borderTop: "1px solid #e3e7e9", paddingTop: 16 }}>
                <div style={{ fontFamily: SORA, fontWeight: 600, fontSize: 16, color: "#003E52" }}>{P.attendeeName}</div>
                <div style={{ fontSize: 14, color: "#5d6a70", marginTop: 2 }}>{P.attendeeTitle}</div>
              </div>
              <div className="pcml-cps-actions">
                <Link
                  href={P.bookHref}
                  onClick={() => {
                    track("popup", "book");
                    setFlag(KEYS.modal);
                    setModalOpen(false);
                  }}
                  className="pcml-cps-btn pcml-cps-btn-copper"
                >
                  Book a Meeting
                </Link>
                <a
                  href={P.eventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("popup", "event_site")}
                  className="pcml-cps-btn pcml-cps-btn-outline"
                >
                  About {P.shortName}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {cardOpen && !modalOpen && (
        <aside aria-labelledby="pcml-cps-card-title" className="pcml-cps-card">
          <button
            type="button"
            aria-label="Close"
            onClick={() => {
              setFlag(KEYS.card);
              setCardOpen(false);
            }}
            style={{ ...closeBtn, top: 4, right: 4, color: "#003E52" }}
          >
            <CloseIcon />
          </button>
          <div style={{ padding: "22px 26px 24px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontFamily: SORA, fontWeight: 600, fontSize: 11.5, letterSpacing: ".16em", textTransform: "uppercase", color: "#9a5528", paddingRight: 32 }}>{P.kicker}</div>
            <h2 id="pcml-cps-card-title" style={{ margin: 0, fontFamily: SORA, fontWeight: 300, fontSize: 21, lineHeight: 1.2, letterSpacing: ".02em", textTransform: "uppercase", color: "#003E52" }}>{P.eventName}</h2>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#3a454b" }}>
              {P.dates}
              <br />
              {P.venue}
            </p>
            <p className="pcml-cps-card-extra" style={{ margin: 0, fontSize: 14.5, lineHeight: 1.55, color: "#3a454b" }}>
              {P.attendeeName}, VP Technical Services, will be at {P.shortName}. Book time to talk about your next mining capital project.
            </p>
            <div className="pcml-cps-actions">
              <Link
                href={P.bookHref}
                onClick={() => track("card", "book")}
                className="pcml-cps-btn pcml-cps-btn-copper"
                style={{ minHeight: 44, fontSize: 14 }}
              >
                Book a Meeting
              </Link>
              <a
                href={P.eventUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("card", "event_site")}
                className="pcml-cps-btn"
                style={{ minHeight: 44, fontSize: 14, color: "#003E52", padding: "0 10px" }}
              >
                About {P.shortName}
              </a>
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
