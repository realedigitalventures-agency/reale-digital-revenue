
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  const { businessName, website, email, phone } = body;

  await resend.emails.send({
    from: process.env.AUDIT_FROM_EMAIL,
    to: email,
    subject: "Your AI Visibility Audit is in progress",
    text: `Hi ${businessName},

We received your request for ${website}.

We’ll review your AI visibility and conversion leaks and send insights shortly.

— Reale Digital`
  });

  await resend.emails.send({
    from: process.env.AUDIT_FROM_EMAIL,
    to: process.env.AUDIT_NOTIFY_EMAIL,
    subject: `New Audit Lead: ${businessName}`,
    text: `Business: ${businessName}
Website: ${website}
Email: ${email}
Phone: ${phone}`
  });

  return NextResponse.json({ success: true });
}
