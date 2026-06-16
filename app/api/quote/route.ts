import { NextResponse } from "next/server";
import { Resend } from "resend";

type QuotePayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  city: string;
  timeline: string;
  details: string;
  pageUrl: string;
  company: string;
};

const clean = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Partial<QuotePayload> | null;

  if (!body) {
    return NextResponse.json({ message: "Invalid form submission." }, { status: 400 });
  }

  const payload: QuotePayload = {
    name: clean(body.name),
    phone: clean(body.phone),
    email: clean(body.email),
    service: clean(body.service),
    city: clean(body.city),
    timeline: clean(body.timeline),
    details: clean(body.details),
    pageUrl: clean(body.pageUrl),
    company: clean(body.company)
  };

  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  if (!payload.name || !payload.phone || !payload.email || !payload.service || !payload.details) {
    return NextResponse.json(
      { message: "Please complete the required fields." },
      { status: 400 }
    );
  }

  if (!/^\S+@\S+\.\S+$/.test(payload.email)) {
    return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM;

  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { message: "Email is not configured yet." },
      { status: 500 }
    );
  }

  const rows = [
    ["Name", payload.name],
    ["Phone", payload.phone],
    ["Email", payload.email],
    ["Service", payload.service],
    ["City", payload.city || "Not provided"],
    ["Timeline", payload.timeline || "Not provided"],
    ["Page", payload.pageUrl || "Not provided"],
    ["Details", payload.details]
  ];

  const htmlRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5ded2;font-weight:700;background:#f8f3eb;">${escapeHtml(
            label
          )}</td>
          <td style="padding:10px 12px;border:1px solid #e5ded2;">${escapeHtml(value)}</td>
        </tr>
      `
    )
    .join("");

  const html = `
    <div style="font-family:Arial,sans-serif;color:#1d2f22;">
      <h1 style="margin:0 0 12px;">New HR Greenroots quote request</h1>
      <p style="margin:0 0 18px;">A visitor submitted the service landing page form.</p>
      <table style="border-collapse:collapse;width:100%;max-width:720px;">${htmlRows}</table>
    </div>
  `;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `New ${payload.service} quote request from ${payload.name}`,
      html,
      text
    });

    if (result.error) {
      return NextResponse.json(
        { message: result.error.message || "Email could not be sent." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Email could not be sent." },
      { status: 500 }
    );
  }
}
