export function leadConfirmationEmail(params: {
  businessName: string;
  website: string;
  bookingUrl: string;
}) {
  const { businessName, website, bookingUrl } = params;

  const subject = "Your AI Visibility Audit is in progress";

  const text = `Hi ${businessName},

We received your audit request for:
${website}

Next step (optional, fastest path):
Book a quick strategy call so we can walk you through fixes and prioritize ROI:
${bookingUrl}

— Reale Digital`;

  const html = `
  <div style="font-family:Arial,sans-serif;line-height:1.5;color:#0b1020;background:#f6f8ff;padding:24px">
    <div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e6e8f2;border-radius:12px;padding:20px">
      <h2 style="margin:0 0 8px;color:#0b1020">Your AI Visibility Audit is in progress</h2>
      <p style="margin:0 0 12px;color:#223">${businessName}, we received your request for:</p>
      <p style="margin:0 0 16px"><a href="${website}" style="color:#4f7cff">${website}</a></p>
      <div style="background:#f3fffd;border:1px solid #c7f6f0;border-radius:10px;padding:14px;margin:16px 0">
        <strong>Fastest path:</strong> book a quick strategy call to review results and next steps.
      </div>
      <a href="${bookingUrl}" style="display:inline-block;background:#2ed3c6;color:#001b18;padding:12px 16px;border-radius:10px;font-weight:bold;text-decoration:none">
        Book Strategy Call
      </a>
      <p style="margin:16px 0 0;color:#667">— Reale Digital</p>
    </div>
  </div>
  `;

  return { subject, text, html };
}

export function internalLeadEmail(params: {
  businessName: string;
  website: string;
  email: string;
  phone?: string;
  siteUrl: string;
}) {
  const { businessName, website, email, phone, siteUrl } = params;

  const subject = `New Audit Lead: ${businessName}`;

  const text = `New audit request:

Business: ${businessName}
Website: ${website}
Email: ${email}
Phone: ${phone || "(not provided)"}

Site:
${siteUrl}`;

  return { subject, text };
}
