// lib/audit-schema.ts
import { z } from "zod";

export const AuditRequestSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  website: z.string().url("Website must be a valid URL"),
  gbp: z.string().optional(),
  industry: z.string().min(2, "Industry is required"),
  goal: z.string().min(2, "Goal is required"),
  notes: z.string().optional(),
});

export type AuditRequest = z.infer<typeof AuditRequestSchema>;
