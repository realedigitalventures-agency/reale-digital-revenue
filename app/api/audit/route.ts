import { NextRequest, NextResponse } from "next/server"
import { runAudit } from "@/lib/audit"
import type { AuditInput } from "@/types/audit"

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as AuditInput

    if (!body.businessName || !body.website || !body.city || !body.industry || !body.email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      )
    }

    const result = runAudit(body)

    // Optional: Airtable / webhook / n8n handoff
    // Example:
    // await fetch(process.env.N8N_WEBHOOK_URL!, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     lead: body,
    //     audit: result,
    //     source: "free-ai-visibility-audit",
    //     createdAt: new Date().toISOString(),
    //   }),
    // })

    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    console.error("AUDIT_API_ERROR", error)
    return NextResponse.json(
      { success: false, message: "Something went wrong while generating the audit." },
      { status: 500 }
    )
  }
}
