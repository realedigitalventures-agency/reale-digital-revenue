export const BRAND = {
  name: "Reale Digital",
  domain: "reale-digital.com",
};

export const LINKS = {
  audit: "/audit",
  book: "/book",
  guides: "/guides",
  emailGuide: "/guides/email",
  automationGuide: "/guides/automation",
  conversionGuide: "/guides/conversion",
  botTrafficGuide: "/guides/bot-traffic",
  smsGuide: "/guides/sms",
  chatbotGuide: "/guides/chatbot",
  privacy: "/privacy",
  terms: "/terms",
};

// Optional (wire these when you’re ready)
export const EXTERNAL = {
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
  tallyAuditFormUrl: process.env.NEXT_PUBLIC_TALLY_AUDIT_FORM_URL || "",
};
