"use client";

import { useState, useCallback } from "react";
import WorldMap, { type Pin } from "@/app/components/WorldMap";
import CountryBoxes from "@/app/components/CountryBoxes";

function getCountry(place: string): string | null {
  if (/canada|alberta|ontario|quebec|\bbc\b|yukon|nunavut|\bnwt\b|saskatchewan|new brunswick/i.test(place)) return "Canada";
  if (/\busa\b|nevada|idaho|washington state/i.test(place)) return "USA";
  if (/mexico|zacatecas/i.test(place)) return "Mexico";
  if (/peru/i.test(place)) return "Peru";
  if (/guatemala/i.test(place)) return "Guatemala";
  if (/armenia/i.test(place)) return "Armenia";
  return null;
}

export default function MapSection({ projects }: { projects: Pin[] }) {
  const [activeCountry, setActiveCountry] = useState<string | null>("Canada");
  const [boxHover, setBoxHover] = useState<string | null>(null);
  const [pinOverride, setPinOverride] = useState<number | null>(null);

  const handleActiveChange = useCallback((index: number) => {
    const pin = projects[index];
    setActiveCountry(pin ? getCountry(pin.place) : null);
  }, [projects]);

  const handleBoxHover = useCallback((country: string | null) => {
    setBoxHover(country);
    if (country === null) {
      setPinOverride(null);
    } else {
      const idx = projects.findIndex((p) => getCountry(p.place) === country);
      setPinOverride(idx >= 0 ? idx : null);
    }
  }, [projects]);

  const displayed = boxHover ?? activeCountry;

  return (
    <>
      <div data-reveal="" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: 20,
          left: 20,
          zIndex: 10,
          padding: '14px 20px',
          background: 'rgba(4,20,28,.78)',
          border: '1px solid rgba(176,101,51,.4)',
          pointerEvents: 'none',
        }}>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '11px', letterSpacing: '.2em', textTransform: 'uppercase', color: '#e3ab7c', marginBottom: '6px' }}>Global Presence</div>
          <div style={{ fontFamily: 'var(--font-sora), sans-serif', fontWeight: '700', fontSize: '22px', color: '#ffffff', lineHeight: '1.1' }}>Praetorian Footprint</div>
        </div>
        <WorldMap
          projects={projects}
          tourMs={4200}
          logo="/pcml-logo-nav.svg"
          onActiveChange={handleActiveChange}
          requestActive={pinOverride}
        />
      </div>
      <CountryBoxes
        activeCountry={displayed}
        onHover={handleBoxHover}
      />
    </>
  );
}