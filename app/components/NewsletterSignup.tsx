"use client";

import { useEffect, useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  // The footer lives in the root layout and never unmounts, so the
  // confirmation would otherwise follow the visitor across every page.
  useEffect(() => {
    if (status !== "sent") return;
    const timer = setTimeout(() => setStatus("idle"), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  async function submit() {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not complete signup.");
      setStatus("sent");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Could not complete signup.");
    }
  }

  if (status === "sent") {
    return (
      <div style={{ maxWidth: 360 }}>
        <p style={{ fontSize: 13.5, color: "#e3ab7c", margin: 0, lineHeight: 1.6 }}>
          Thank you. You have been added to the Insights list.
        </p>
      </div>
    );
  }

  const busy = status === "sending";

  return (
    <div style={{ maxWidth: 360 }}>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        <input
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
          disabled={busy}
          style={{
            flex: "1 1 190px",
            minHeight: 44,
            background: "rgba(255,255,255,.06)",
            border: "1px solid rgba(255,255,255,.22)",
            color: "#fff",
            padding: "0 12px",
            font: "inherit",
          }}
        />
        <button
          type="button"
          onClick={submit}
          disabled={busy}
          className="pcml-cta"
          style={{
            background: busy ? "#8f5228" : "#B06533",
            color: "#fff",
            border: 0,
            minHeight: 44,
            padding: "0 18px",
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 600,
            cursor: busy ? "default" : "pointer",
          }}
        >
          {busy ? "..." : "Subscribe"}
        </button>
      </div>

      {/* Honeypot */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && message && (
        <p style={{ fontSize: 12.5, color: "#e08a6a", margin: "8px 0 0" }}>{message}</p>
      )}
    </div>
  );
}
