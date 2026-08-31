import { NextResponse } from "next/server";
import { Resend } from "resend";

const FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";
const TO = process.env.CONTACT_TO || "info@praetoriancm.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      firstName = "",
      lastName = "",
      company = "",
      email = "",
      stage = "",
      message = "",
      website = "",
    } = body ?? {};

    // Honeypot tripped: pretend success, send nothing.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!firstName.trim() || !lastName.trim()) {
      return NextResponse.json({ error: "Name is required." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "A valid email is required." }, { status: 400 });
    }
    if (message.trim().length < 10) {
      return NextResponse.json({ error: "Please include a project description." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is not configured.");
      return NextResponse.json(
        { error: "Email is not configured. Please call 780.989.0289." },
        { status: 500 }
      );
    }

    const name = `${firstName} ${lastName}`.trim();
    const rows: [string, string][] = [
      ["Name", name],
      ["Company", company || "Not provided"],
      ["Email", email],
      ["Project stage", stage || "Not specified"],
    ];

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;color:#1c2226;max-width:640px">
        <div style="background:#003E52;color:#fff;padding:18px 22px">
          <div style="font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#e3ab7c">
            Website enquiry
          </div>
          <div style="font-size:20px;font-weight:bold;margin-top:4px">
            Praetorian Construction Management
          </div>
        </div>
        <table style="width:100%;border-collapse:collapse;margin-top:18px">
          ${rows
            .map(
              ([k, v]) => `
            <tr>
              <td style="padding:8px 0;border-bottom:1px solid #eef0f1;width:150px;color:#7d8288;font-size:13px">${k}</td>
              <td style="padding:8px 0;border-bottom:1px solid #eef0f1;font-size:14px">${escapeHtml(v)}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top:22px">
          <div style="color:#7d8288;font-size:13px;margin-bottom:6px">Project description</div>
          <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;border-left:3px solid #B06533;padding-left:14px">${escapeHtml(
            message
          )}</div>
        </div>
        <p style="margin-top:26px;font-size:12px;color:#8b9095">
          Sent from the enquiry form at praetoriancm.com
        </p>
      </div>
    `;

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `PCML Website <${FROM}>`,
      to: [TO],
      replyTo: email,
      subject: `Website enquiry from ${name}${company ? ` at ${company}` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Could not send your enquiry." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
