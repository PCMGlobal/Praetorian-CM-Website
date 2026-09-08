'use client';
import { useState } from "react";

export function AccordionItem({ title, body }: { title: string; body: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid #e4e6e7" }}>
      <button onClick={() => setOpen(!open)} style={{ width: "100%", background: "none", border: "0", padding: "13px 0", fontSize: "14px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", color: "#1c2226", cursor: "pointer", textAlign: "left", fontFamily: "var(--font-work-sans), sans-serif" }}>
        {title}
        <span style={{ color: "#B06533", fontSize: "20px", lineHeight: "1", flexShrink: 0, transform: open ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
      </button>
      {open && <div style={{ fontSize: "14px", lineHeight: "1.7", color: "#5b6266", paddingBottom: "14px" }}>{body}</div>}
    </div>
  );
}
