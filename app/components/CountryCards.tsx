"use client";
import { useState } from "react";

const COUNTRIES = [
  {
    name: "Canada", code: "ca", count: 45,
    projects: [
      ["Rackla Metals - Critical Mineral Project", "NWT"],["Torngat Metals - Rare Earth Project", "Quebec"],["IAMGold - Cote Gold Project", "Ontario"],["Hecla Mining - Keno Hill Silver Project", "Yukon"],["LiFT Power - Lithium Project", "Quebec & NWT"],["Burgundy Diamond - Ekati Mine Project", "NWT"],["Newcrest - Red Chris Project", "BC"],["Wesdome - Kiena Project", "Quebec"],["Uniboard - Renaissance OSB Project", "Quebec"],["Faro Mine Remediation Project", "NWT"],["Giant Mine Remediation Project", "NWT"],["First Mining - Springpole Gold Project", "Ontario"],["B2Gold - Back River Project", "Nunavut"],["Teck Resources - Elk Valley Resources", "BC"],["Alamos - Island Gold Project", "Ontario"],["Conuma Coal - Hermann Project", "BC"],["Galaxy Resources - James Bay Lithium Mine", "Quebec"],["INEOS-Calabrian - SO2 Production Plant", "South Porcupine, Ontario"],["Rio Tinto - Diavik Diamond Mine", "Lac De Gras, NWT"],["Taseko Mines - Prosperity Mine", "Williams Lake, BC"],["Giant Mine Reclamation", "Yellowknife, NWT"],["Newmont - Hope Bay Mine", "Nunavut"],["Huckleberry Mines", "Houston, BC"],["Western Canadian Coal - Wolverine Mine", "BC"],["Syncrude - South West Quadrant Ore Processing Facility", "Fort McMurray, Alberta"],["Syncrude - Aurora Train 2 Mine", "Fort McMurray, Alberta"],["CNRL - Utilities and Offsites Modules Package A", "Fort McMurray, Alberta"],["Conoco Phillips - Surmont Phase 1 SAGD", "Fort McMurray, Alberta"],["Opti-Nexen - Long Lake Project", "Fort McMurray, Alberta"],["Shell Canada - HMU Unit, AOSP Scottford Complex", "Fort Saskatchewan, Alberta"],["Petro-Canada Refinery / Air Products Hydrogen Plant", "Edmonton, Alberta"],["Enbridge Pipelines - Tank Farm Expansion", "Hardisty, Alberta"],["Husky Energy - Tank Farm Installation", "Lloydminster, Saskatchewan"],["Husky Energy - Prince George Clean Fuels Project", "Prince George, BC"],["Island Co-gen Power Plant (250MW)", "Campbell River, BC"],["ABB Alstom - Bayside Power Project (250MW)", "Saint John, NB"],["Nova Chemicals - Co-gen Power Plant (450MW)", "Joffre, Alberta"],["Placer Dome - Mega Pit Project", "Timmins, Ontario"],["Temp Power Project", "Cobourg, Ontario"],["LaFarge - Texada Island Expansion", "Texada Island, BC"],["Prince George Pulp and Paper", "Prince George, BC"],["BC Ferry Corporation - Ferry Superstructures", "Delta, BC"],["Howe Sound Pulp and Paper - TMP Building", "BC"],["Dome Petroleum - Beaudrill Oil Exploration", "Tuktoyaktuk, NWT"],["Northern Construction - Mackenzie River Islands & Pipeline", "Norman Wells, NWT"],
    ],
  },
  {
    name: "USA", code: "us", count: 9,
    projects: [
      ["Kinross - Curlew Basin Restart", "Washington State"],["Centerra - Thompson Creek Restart", "Idaho"],["Comstock Mining - Mine Development", "Nevada"],["Newmont - Emigrant Mine", "Nevada"],["Newmont - Phoenix Mill Expansion", "Nevada"],["Santa Fe Pacific Gold - Twin Creeks Mine", "Golconda, Nevada"],["Santa Fe Pacific Gold - Lone Tree Sulfide Mill & Flotation", "Nevada"],["Santa Fe Pacific Gold - Sage Mill Project", "Nevada"],["Santa Fe Pacific Gold - Rosebud Mines", "Golconda, Nevada"],
    ],
  },
  {
    name: "Mexico", code: "mx", count: 2,
    projects: [
      ["Mining Koura Global - Las Cuevas Dams Project", "Mexico"],["Goldcorp - Penasquito Gold Mine", "Zacatecas"],
    ],
  },
  {
    name: "Peru", code: "pe", count: 2,
    projects: [
      ["Anglo American - Quellaveco Project", "Peru"],["Minera Yanacocha (Newmont) - Conga Mine", "Peru"],
    ],
  },
  {
    name: "Guatemala", code: "gt", count: 1,
    projects: [
      ["Bluestone - Cerro Blanco Underground Gold Mine", "Guatemala"],
    ],
  },
  {
    name: "Armenia", code: "am", count: 1,
    projects: [
      ["Lydian International - Amulsar Gold Mine", "Djermuk, Armenia"],
    ],
  },
];

export default function CountryCards() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "clamp(12px,1.8vw,20px)" }}>
      {COUNTRIES.map((c) => {
        const isOpen = open === c.name;
        return (
          <div
            key={c.name}
            style={{
              background: "#fff",
              border: "1px solid #e4e6e7",
              borderTop: `3px solid ${isOpen ? "#003E52" : "#B06533"}`,
              overflow: "hidden",
              transition: "border-color .2s, box-shadow .2s",
              cursor: "pointer",
              boxShadow: isOpen ? "0 4px 20px rgba(0,20,30,.10)" : "0 2px 8px rgba(0,20,30,.04)",
            }}
            onClick={() => setOpen(isOpen ? null : c.name)}
          >
            {/* Flag image section */}
            <div style={{ position: "relative", height: "140px", overflow: "hidden", background: "#003E52" }}>
              <img
                src={`https://flagcdn.com/w320/${c.code}.png`}
                alt={`${c.name} flag`}
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,20,30,.6) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "12px", left: "16px", right: "16px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
                <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "800", fontSize: "22px", color: "#fff", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>{c.name}</span>
                <span style={{ fontFamily: "var(--font-sora), sans-serif", fontWeight: "600", fontSize: "12px", color: "#e3ab7c", letterSpacing: ".08em", textTransform: "uppercase" }}>{c.count} {c.count === 1 ? "project" : "projects"}</span>
              </div>
            </div>
            {/* Card footer */}
            <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", background: isOpen ? "#f7f9fa" : "#fff" }}>
              <span style={{ fontSize: "13px", color: "#555c60", fontFamily: "var(--font-sora), sans-serif" }}>
                {isOpen ? "Hide projects" : "View projects"}
              </span>
              <div style={{
                width: "26px", height: "26px", border: "1px solid #e4e6e7", display: "flex", alignItems: "center", justifyContent: "center",
                color: isOpen ? "#003E52" : "#9aa3a8", transition: "transform .2s",
                transform: isOpen ? "rotate(45deg)" : "none",
              }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
              </div>
            </div>
            {/* Expandable project list */}
            {isOpen && (
              <div style={{ borderTop: "1px solid #eef0f1", maxHeight: "300px", overflowY: "auto" }}>
                {c.projects.map(([name, loc], i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", gap: "12px", padding: "8px 16px", borderBottom: "1px solid #eef0f1", background: i % 2 === 0 ? "#fff" : "#fafafa" }}>
                    <span style={{ fontSize: "12.5px", color: "#1c2226", lineHeight: "1.4" }}>{name}</span>
                    <span style={{ fontSize: "11.5px", color: "#7d8288", whiteSpace: "nowrap", flexShrink: 0 }}>{loc}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
