import { NextResponse } from "next/server";
import { Resend } from "resend";
import { AuditRequestSchema, normalizeWebsite, safeUrl } from "@/lib/audit";
import { createAirtableLead } from "@/lib/airtable";
import { site } from "@/lib/site";
import { internalLeadEmail, leadConfirmationEmail } from "@/lib/email";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const parsed = AuditRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues?.[0]?.message || "Invalid request" },
        { status: 400 }
      );
    }

    const { businessName, website, email, phone } = parsed.data;

    const normalized = normalizeWebsite(website);
    const validUrl = safeUrl(normalized);
    if (!validUrl) {
      return NextResponse.json({ error: "Please enter a valid website URL." }, { status: 400 });
    }

    const from = process.env.AUDIT_FROM_EMAIL;
    const notifyTo = process.env.AUDIT_NOTIFY_EMAIL;
    const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || `${site.url}/book`;

    if (!from || !notifyTo || !process.env.RESEND_API_KEY) {
      return NextResponse.json({ error: "Server email is not configured." }, { status: 500 });
    }

    // Save to Airtable (optional)
    try {
      await createAirtableLead({
        "Business Name": businessName,
        "Website": validUrl,
        "Email": email,
        "Phone": phone || "",
        "Source": "Free AI Visibility Audit",
        "Status": "New",
        "Created At": new Date().toISOString()
      });
    } catch (e) {
      console.error("Airtable lead save failed:", e);
    }

    // Email the lead
    const leadMsg = leadConfirmationEmail({ businessName, website: validUrl, bookingUrl });
    await resend.emails.send({
      from,
      to: email,
      subject: leadMsg.subject,
      text: leadMsg.text,
      html: leadMsg.html
    });

    // Notify you
    const internalMsg = internalLeadEmail({
      businessName,
      website: validUrl,
      email,
      phone,
      siteUrl: site.url
    });

    await resend.emails.send({
      from,
      to: notifyTo,
      subject: internalMsg.subject,
      text: internalMsg.text
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Failed to submit audit. Please try again." }, { status: 500 });
  }
}
