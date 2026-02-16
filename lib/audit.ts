import { z } from "zod";

export const AuditRequestSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  website: z.string().min(3, "Website is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().optional().default("")
});

export type AuditRequest = z.infer<typeof AuditRequestSchema>;

export function normalizeWebsite(input: string) {
  const trimmed = input.trim();
  if (!trimmed) return "";
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) return trimmed;
  return `https://${trimmed}`;
}

export function safeUrl(url: string) {
  try {
    const u = new URL(url);
    if (!["http:", "https:"].includes(u.protocol)) return null;
    return u.toString();
  } catch {
    return null;
  }
}
