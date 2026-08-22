"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as d3 from "d3";
import * as topojson from "topojson-client";

const ATLAS = "https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json";
const T = { field: "#04141c", land: "#0f3548", landLine: "#1c5570" };

export type Pin = {
  name: string;
  place: string;
  detail?: string;
  lat: number;
  lon: number;
  hq?: boolean;
  flagship?: boolean;
};

type Props = {
  projects: Pin[];
  tourMs?: number;
  logo?: string;
};

export default function WorldMap({ projects, tourMs = 4200, logo = "/pcml-logo-nav.svg" }: Props) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const calloutRef = useRef<HTMLDivElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);
  const arcRef = useRef<SVGGElement | null>(null);
  const landRef = useRef<d3.ExtendedFeatureCollection | null>(null);
  const projRef = useRef<d3.GeoProjection | null>(null);
  const pinsRef = useRef<
    { g: d3.Selection<SVGGElement, undefined, null, undefined>; ring: d3.Selection<SVGCircleElement, undefined, null, undefined>; x: number; y: number; r: number; p: Pin }[]
  >([]);
  const pausedRef = useRef(false);
  const activeRef = useRef(0);

  const flagshipIndex = Math.max(0, projects.findIndex((p) => p.flagship));
  const [active, setActive] = useState(flagshipIndex);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const select = useCallback((i: number) => {
    setActive(i);
  }, []);

  /* ---------- load geometry ---------- */
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(ATLAS);
        const topo = await res.json();
        if (cancelled) return;
        landRef.current = topojson.feature(
          topo,
          topo.objects.countries
        ) as unknown as d3.ExtendedFeatureCollection;
      } catch {
        landRef.current = null;
      }
      if (!cancelled) setReady(true);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  /* ---------- draw ---------- */
  const draw = useCallback(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const w = stage.clientWidth || 900;
    const h = Math.max(300, Math.min(560, Math.round(w * 0.48)));
    stage.style.height = h + "px";

    if (svgRef.current) svgRef.current.remove();

    const svg = d3
      .create("svg")
      .attr("viewBox", `0 0 ${w} ${h}`)
      .attr("width", w)
      .attr("height", h)
      .style("display", "block");

    svgRef.current = svg.node();
    if (svgRef.current && calloutRef.current) {
      stage.insertBefore(svgRef.current, calloutRef.current);
    }

    const proj = d3
      .geoNaturalEarth1()
      .fitExtent(
        [
          [16, 14],
          [w - 16, h - 14],
        ],
        { type: "Sphere" } as d3.GeoGeometryObjects
      );
    const path = d3.geoPath(proj);
    projRef.current = proj;

    svg
      .append("path")
      .attr("d", path(d3.geoGraticule10()) || "")
      .attr("fill", "none")
      .attr("stroke", "#123244")
      .attr("stroke-width", 0.5);

    if (landRef.current) {
      svg
        .append("g")
        .selectAll("path")
        .data(landRef.current.features)
        .join("path")
        .attr("d", (d) => path(d as d3.GeoPermissibleObjects) || "")
        .attr("fill", T.land)
        .attr("stroke", T.landLine)
        .attr("stroke-width", 0.55);
    }

    svg
      .append("path")
      .attr("d", path({ type: "Sphere" } as d3.GeoGeometryObjects) || "")
      .attr("fill", "none")
      .attr("stroke", "#1c5570")
      .attr("stroke-width", 0.8);

    arcRef.current = svg.append("g").node();
    const pinG = svg.append("g");

    pinsRef.current = projects.map((p, i) => {
      const xy = proj([p.lon, p.lat]);
      const [x, y] = xy || [0, 0];
      const g = pinG
        .append("g")
        .attr("transform", `translate(${x},${y})`)
        .attr("tabindex", 0)
        .attr("role", "img")
        .attr("aria-label", `${p.name}, ${p.place}`)
        .style("cursor", "pointer");

      const r = p.flagship ? 15 : 12;

      g.append("circle")
        .attr("r", r)
        .attr("fill", "#04141c")
        .attr("stroke", "#B06533")
        .attr("stroke-width", 1.4);

      ([[-1, -1], [1, -1], [-1, 1], [1, 1]] as const).forEach(([sx, sy]) => {
        g.append("path")
          .attr(
            "d",
            `M${sx * (r + 3)} ${sy * (r + 3)}h${sx * 4}M${sx * (r + 3)} ${sy * (r + 3)}v${sy * 4}`
          )
          .attr("stroke", "#B06533")
          .attr("stroke-width", 1)
          .attr("fill", "none")
          .attr("opacity", 0.8);
      });

      g.append("circle").attr("r", p.flagship ? 5 : 3.6).attr("fill", "#d99a68");

      if (p.flagship) {
        g.append("circle")
          .attr("r", 8)
          .attr("fill", "none")
          .attr("stroke", "#d99a68")
          .attr("stroke-width", 1);
      }

      const ring = g
        .append("circle")
        .attr("r", r)
        .attr("fill", "none")
        .attr("stroke", "#d99a68")
        .attr("stroke-width", 1.2)
        .attr("opacity", 0);

      const on = () => {
        pausedRef.current = true;
        select(i);
      };
      g.on("mouseenter", on).on("focus", on);

      return { g, ring, x, y, r, p };
    });
  }, [projects, select]);

  /* ---------- apply active state ---------- */
  const apply = useCallback(() => {
    const pins = pinsRef.current;
    if (!pins.length) return;

    const hq = projects.find((p) => p.hq) || projects[0];
    const idx = activeRef.current;

    pins.forEach((pin, i) => {
      const on = i === idx;
      pin.g
        .select("circle")
        .attr("fill", on ? "#B06533" : "#04141c")
        .attr("stroke", on ? "#f0c9a8" : "#B06533")
        .attr("stroke-width", on ? 2 : 1.2);

      pin.g
        .selectAll("circle")
        .filter((_d, j) => j === 1)
        .attr("fill", on ? "#fff" : "#d99a68");

      pin.ring.interrupt().attr("r", pin.r).attr("opacity", on ? 0.9 : 0);

      if (on) {
        const pulse = () => {
          pin.ring
            .attr("r", pin.r)
            .attr("opacity", 0.85)
            .transition()
            .duration(1900)
            .ease(d3.easeCubicOut)
            .attr("r", pin.r + 16)
            .attr("opacity", 0)
            .on("end", () => {
              if (i === activeRef.current) pulse();
            });
        };
        pulse();
      }
    });

    /* great-circle arc from head office to the active project */
    if (arcRef.current) {
      arcRef.current.innerHTML = "";
      const act = projects[idx];
      if (act && !act.hq && hq && projRef.current) {
        const line = {
          type: "LineString",
          coordinates: [
            [hq.lon, hq.lat],
            [act.lon, act.lat],
          ],
        } as d3.GeoGeometryObjects;
        const d = d3.geoPath(projRef.current)(line);
        if (d) {
          const p = d3
            .select(arcRef.current)
            .append("path")
            .attr("d", d)
            .attr("fill", "none")
            .attr("stroke", "#d99a68")
            .attr("stroke-width", 1.1)
            .attr("opacity", 0.8);
          const node = p.node();
          if (node) {
            const L = node.getTotalLength();
            p.attr("stroke-dasharray", `${L} ${L}`)
              .attr("stroke-dashoffset", L)
              .transition()
              .duration(900)
              .ease(d3.easeCubicInOut)
              .attr("stroke-dashoffset", 0)
              .on("end", () => p.attr("stroke-dasharray", "3 3").attr("stroke-dashoffset", 0));
          }
        }
      }
    }

    /* callout */
    const pin = pins[idx];
    const callout = calloutRef.current;
    const stage = stageRef.current;
    if (pin && callout && stage) {
      callout.innerHTML =
        `<span style="display:block;font-family:var(--font-sora),sans-serif;font-weight:600;font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#d99a68">${pin.p.place}</span>` +
        `<span style="display:block;font-family:var(--font-sora),sans-serif;font-weight:600;font-size:16px;color:#fff;line-height:1.2;margin-top:2px">${pin.p.name}</span>` +
        `<span style="display:block;font-size:11.5px;color:#b7c0c5;margin-top:3px">${pin.p.detail || ""}</span>`;
      const sw = stage.clientWidth;
      callout.style.left = Math.max(100, Math.min(sw - 100, pin.x)) + "px";
      callout.style.top = pin.y - pin.r - 10 + "px";
      callout.style.opacity = "1";
    }
  }, [projects]);

  /* ---------- mount: draw + resize observer ---------- */
  useEffect(() => {
    if (!ready) return;
    draw();
    apply();
    const stage = stageRef.current;
    if (!stage) return;
    const ro = new ResizeObserver(() => {
      draw();
      apply();
    });
    ro.observe(stage);
    return () => ro.disconnect();
  }, [ready, draw, apply]);

  /* ---------- re-apply when active changes ---------- */
  useEffect(() => {
    if (ready) apply();
  }, [active, ready, apply]);

  /* ---------- auto tour ---------- */
  useEffect(() => {
    if (!ready || tourMs < 400) return;
    const t = setInterval(() => {
      if (pausedRef.current) return;
      setActive((a) => (a + 1) % projects.length);
    }, tourMs);
    return () => clearInterval(t);
  }, [ready, tourMs, projects.length]);

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "1fr", gap: 0 }}
      onMouseEnter={() => {
        pausedRef.current = true;
      }}
    >
      <div
        ref={stageRef}
        style={{
          position: "relative",
          background: T.field,
          border: "1px solid rgba(176,101,51,.28)",
          overflow: "hidden",
          minHeight: 320,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 16,
            top: 16,
            zIndex: 2,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "9px 14px",
            border: "1px solid rgba(176,101,51,.4)",
            background: "rgba(4,20,28,.78)",
            fontFamily: 'var(--font-work-sans), system-ui, sans-serif',
          }}
        >
          <img src={logo} alt="Praetorian Construction Management" style={{ height: 26, width: "auto", display: "block" }} />
          <span
            style={{
              fontFamily: "var(--font-sora), sans-serif",
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: ".18em",
              textTransform: "uppercase",
              color: "#d99a68",
            }}
          >
            Global deployment map
          </span>
        </div>

        <div
          ref={calloutRef}
          style={{
            position: "absolute",
            pointerEvents: "none",
            transform: "translate(-50%,-100%)",
            padding: "8px 11px 9px",
            background: "#04141c",
            border: "1px solid #B06533",
            minWidth: 170,
            opacity: 0,
            transition: "opacity .22s ease",
            fontFamily: 'var(--font-work-sans), system-ui, sans-serif',
            zIndex: 3,
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(184px,1fr))",
          border: "1px solid rgba(176,101,51,.28)",
          borderTop: 0,
          background: "#062633",
        }}
      >
        {projects.map((p, i) => {
          const on = i === active;
          return (
            <button
              key={`${p.name}-${i}`}
              type="button"
              onClick={() => {
                pausedRef.current = true;
                select(i);
              }}
              style={{
                appearance: "none",
                textAlign: "left",
                cursor: "pointer",
                background: on ? "rgba(176,101,51,.22)" : "transparent",
                border: 0,
                borderRight: "1px solid rgba(176,101,51,.22)",
                borderTop: `2px solid ${on ? "#B06533" : "transparent"}`,
                padding: "12px 14px 13px",
                fontFamily: 'var(--font-work-sans), system-ui, sans-serif',
                color: "#cfd6da",
                display: "block",
                width: "100%",
                transition: "background .2s",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 600,
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: on ? "#d99a68" : "#7d8890",
                }}
              >
                {String(i + 1).padStart(2, "0")}
                {p.flagship ? " \u00b7 Flagship" : ""}
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-sora), sans-serif",
                  fontWeight: 600,
                  fontSize: 17,
                  lineHeight: 1.15,
                  marginTop: 3,
                  color: on ? "#fff" : "#c3ccd0",
                }}
              >
                {p.name}
              </span>
              <span style={{ display: "block", fontSize: 11.5, color: "#8a9298", marginTop: 2 }}>
                {p.place}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
