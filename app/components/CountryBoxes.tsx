"use client";

type Box = {
  country: string;
  label: string;
  sub: string;
  badge?: string;
};

const BOXES: Box[] = [
  { country: "Canada", label: "Edmonton, Canada", sub: "Head Office and 45 Canadian projects", badge: "Headquarters" },
  { country: "USA", label: "United States", sub: "9 projects" },
  { country: "Mexico", label: "Mexico", sub: "2 projects" },
  { country: "Peru", label: "Peru", sub: "2 projects" },
  { country: "Guatemala", label: "Guatemala", sub: "1 project" },
  { country: "Armenia", label: "Armenia", sub: "1 project \u00b7 flagship", badge: "Flagship" },
];

export default function CountryBoxes({
  activeCountry = null,
  onHover,
}: {
  activeCountry?: string | null;
  onHover?: (country: string | null) => void;
}) {
  return (
    <div
      style={{
        marginTop: 22,
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        background: "rgba(255,255,255,.06)",
      }}
    >
      {BOXES.map((b) => {
        const on = activeCountry === b.country;
        return (
          <div
            key={b.country}
            data-country={b.country}
            onMouseEnter={() => onHover?.(b.country)}
            onMouseLeave={() => onHover?.(null)}
            style={{
              flex: 1,
              minWidth: 130,
              padding: "18px 16px",
              background: on ? "rgba(176,101,51,.18)" : "rgba(255,255,255,.04)",
              borderTop: `2px solid ${on ? "#B06533" : "transparent"}`,
              cursor: "default",
              transition: "background .2s, border-color .2s",
            }}
          >
            {b.badge && (
              <>
                <span
                  style={{
                    display: "inline-block",
                    fontFamily: "var(--font-sora), sans-serif",
                    fontWeight: 700,
                    fontSize: 9,
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#003E52",
                    background: "#e3ab7c",
                    padding: "2px 7px",
                    marginBottom: 8,
                  }}
                >
                  {b.badge}
                </span>
                <br />
              </>
            )}
            <div
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontWeight: 700,
                fontSize: 15,
                color: "#fff",
                lineHeight: 1.2,
              }}
            >
              {b.label}
            </div>
            <div style={{ fontSize: 12, color: "#9aa9ae", marginTop: 5, lineHeight: 1.3 }}>
              {b.sub}
            </div>
          </div>
        );
      })}
    </div>
  );
}