// CPS 2026 event promotion (temporary).
//
// Everything about the CIM Capital Projects Symposium promotion lives here.
// To switch the whole promotion off early, set ENABLED to false.
// It also switches itself off automatically once END_UTC has passed.
// After the event, this file, CpsPromo.tsx and the "cps2026" branches in
// ContactForm.tsx and api/contact/route.ts can be removed.

export const CPS_PROMO = {
  ENABLED: true,

  // Midnight at the end of Tuesday 10 November 2026 in Toronto (EST, UTC-5).
  END_UTC: "2026-11-11T05:00:00Z",

  topic: "cps2026",
  kicker: "Meet with Praetorian Team in Toronto",
  eventName: "CIM Capital Projects Symposium 2026",
  shortName: "CPS 2026",
  dates: "Sunday 8 to Tuesday 10 November 2026",
  datesShort: "8 to 10 November",
  venue: "Chelsea Hotel, Toronto, Ontario",
  venueShort: "Chelsea Hotel, Toronto",
  attendeeName: "Femi R. Farinu",
  attendeeTitle: "VP Technical Services, Praetorian",
  eventUrl: "https://capitalprojects.cim.org/",
  bookHref: "/contact?topic=cps2026#enquiry",

  // Pre-filled into the contact form when a visitor arrives from the promotion.
  formMessage:
    "I would like to meet with the Praetorian team at the CIM Capital Projects Symposium 2026 in Toronto (8 to 10 November).",
};

export function cpsPromoActive(now: Date = new Date()): boolean {
  return CPS_PROMO.ENABLED && now.getTime() < Date.parse(CPS_PROMO.END_UTC);
}
