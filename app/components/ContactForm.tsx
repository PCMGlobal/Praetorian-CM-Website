"use client";

import { useState } from "react";

const labelStyle = {
  display: "block",
  fontFamily: "var(--font-sora), sans-serif",
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: ".08em",
  textTransform: "uppercase",
  color: "#003E52",
  marginBottom: 6,
} as const;

const fieldStyle = {
  width: "100%",
  padding: "10px 12px",
  border: "1px solid #d4d6d8",
  fontSize: 14,
  color: "#333",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "inherit",
} as const;

const STAGES = [
  "Scoping or Conceptual",
  "Pre-feasibility",
  "Feasibility",
  "Execution or Construction",
  "Commissioning",
  "Other",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    stage: "",
    message: "",
    website: "", // honeypot, must stay empty
  });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  function reset() {
    setForm({
      firstName: "", lastName: "", company: "",
      email: "", stage: "", message: "", website: "",
    });
    setError("");
    setStatus("idle");
  }

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit() {
    setError("");

    if (!form.firstName.trim() || !form.lastName.trim()) {
      setError("Please enter your first and last name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.message.trim().length < 10) {
      setError("Please tell us a little about your project.");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "sent") {
    return (
      <div
        style={{
          border: "1px solid #B06533",
          background: "#fdf6f1",
          padding: "28px 26px",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 700,
            fontSize: 20,
            color: "#003E52",
            marginBottom: 10,
          }}
        >
          Thank you, your enquiry has been sent.
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.6, color: "#555c60", margin: 0 }}>
          A member of the Praetorian team will be in touch shortly. If your enquiry is urgent,
          please call{" "}
          <a href="tel:7809890289" style={{ color: "#B06533", fontWeight: 600 }}>
            780.989.0289
          </a>
          .
        </p>
        <button
          type="button"
          onClick={reset}
          style={{
            marginTop: 18,
            background: "none",
            border: 0,
            padding: 0,
            color: "#B06533",
            fontFamily: "var(--font-sora), sans-serif",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  const busy = status === "sending";

  return (
    <div style={{ display: "grid", gap: 16 }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <div>
          <label htmlFor="firstName" style={labelStyle}>First name</label>
          <input id="firstName" type="text" placeholder="James" value={form.firstName} onChange={set("firstName")} disabled={busy} style={fieldStyle} />
        </div>
        <div>
          <label htmlFor="lastName" style={labelStyle}>Last name</label>
          <input id="lastName" type="text" placeholder="Hartley" value={form.lastName} onChange={set("lastName")} disabled={busy} style={fieldStyle} />
        </div>
      </div>

      <div>
        <label htmlFor="company" style={labelStyle}>Company</label>
        <input id="company" type="text" placeholder="Your organisation" value={form.company} onChange={set("company")} disabled={busy} style={fieldStyle} />
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email</label>
        <input id="email" type="email" placeholder="james@company.com" value={form.email} onChange={set("email")} disabled={busy} style={fieldStyle} />
      </div>

      <div>
        <label htmlFor="stage" style={labelStyle}>Project stage</label>
        <select id="stage" value={form.stage} onChange={set("stage")} disabled={busy} style={{ ...fieldStyle, background: "#fff" }}>
          <option value="">Select stage</option>
          {STAGES.map((s) => ( <option key={s} value={s}>{s}</option> ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Tell us about your project</label>
        <textarea id="message" rows={5} placeholder="Project type, location, key challenges..." value={form.message} onChange={set("message")} disabled={busy} style={{ ...fieldStyle, resize: "vertical" }} />
      </div>

      {/* Honeypot: hidden from people, tempting to bots */}
      <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} />
      </div>

      {error && (
        <p style={{ fontSize: 13.5, color: "#a3341f", margin: 0, fontWeight: 500 }}>{error}</p>
      )}

      <button
        type="button"
        onClick={submit}
        disabled={busy}
        style={{
          background: busy ? "#c9a58a" : "#B06533",
          color: "#fff",
          border: 0,
          padding: "0 28px",
          minHeight: 48,
          fontFamily: "var(--font-sora), sans-serif",
          fontWeight: 600,
          fontSize: 15,
          cursor: busy ? "default" : "pointer",
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          alignSelf: "start",
        }}
      >
        {busy ? "Sending..." : "Submit Enquiry"}
        {!busy && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        )}
      </button>

      <p style={{ fontSize: 12, color: "#8b9095", margin: 0 }}>
        Your enquiry goes directly to the Praetorian team. We do not share your details.
      </p>
    </div>
  );
}
