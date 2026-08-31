import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";
const TO = process.env.CONTACT_TO || "info@praetoriancm.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email = "", website = "" } = body ?? {};

    // Honeypot tripped: pretend success, send nothing.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json({ error: "Subscriptions are not configured." }, { status: 500 });
    }

    const safe = email.replace(/[<>&"']/g, "");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `PCML Website <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: "New Insights subscription",
      html: `
        <div style="font-family:Arial,Helvetica,sans-serif;color:#1c2226;max-width:640px">
          <div style="background:#003E52;color:#fff;padding:18px 22px">
            <div style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#e3ab7c">
              Newsletter signup
            </div>
            <div style="font-size:20px;font-weight:bold;margin-top:4px">
              Praetorian Construction Management
            </div>
          </div>
          <p style="font-size:15px;margin-top:20px">
            A new subscriber has signed up for Insights:
          </p>
          <p style="font-size:16px;font-weight:bold;border-left:3px solid #B06533;padding-left:14px">
            ${safe}
          </p>
          <p style="margin-top:26px;font-size:12px;color:#8b9095">
            Sent from the footer signup at praetoriancm.com
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not complete signup." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Subscribe route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
