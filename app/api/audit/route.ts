import { NextResponse } from "next/server";
import {
  createAuditSubmission,
  createLead,
  createPipelineRecord,
  findLeadByEmail,
  updateLead
} from "@/lib/airtable";

type AuditPayload = {
  fullName: string;
  email: string;
  phone?: string;
  companyName: string;
  website?: string;
  businessType: string;
  city?: string;
  state?: string;
  websiteLeadsStatus: string;
  competitorAwareness: string;
  followUpAutomationStatus: string;
  biggestProblem: string;
  sourcePage?: string;
};

function scoreBusinessType(value: string) {
  const hot = [
    "Roofing",
    "Fence Company",
    "HVAC",
    "Pest Control",
    "Landscaping",
    "Auto Detailing",
    "Chiropractor",
    "Med Spa",
    "Hair Salon",
    "Nail Salon",
    "Dental",
    "Legal",
    "Other Local Service"
  ];
  return hot.includes(value) ? 20 : 5;
}

function scoreWebsiteLeadsStatus(value: string) {
  switch (value) {
    case "Gets traffic but poor conversion":
      return 25;
    case "Gets some leads but inconsistent":
      return 20;
    case "No website leads":
      return 10;
    case "Already gets leads consistently":
      return 5;
    default:
      return 5;
  }
}

function scoreCompetitorAwareness(value: string) {
  switch (value) {
    case "Knows top competitors":
      return 10;
    case "Somewhat knows competitors":
      return 7;
    case "Does not know competitors":
      return 5;
    default:
      return 5;
  }
}

function scoreAutomation(value: string) {
  switch (value) {
    case "No automation":
      return 20;
    case "Partial automation":
      return 10;
    case "Full automation":
      return 5;
    default:
      return 5;
  }
}

function scoreProblem(value: string) {
  const v = value.toLowerCase();

  if (
    v.includes("more calls") ||
    v.includes("booked") ||
    v.includes("appointments") ||
    v.includes("leads now") ||
    v.includes("customers now")
  ) {
    return 25;
  }

  if (
    v.includes("seo") ||
    v.includes("visibility") ||
    v.includes("traffic") ||
    v.includes("website")
  ) {
    return 20;
  }

  return 10;
}

function getScoreBand(score: number) {
  if (score >= 75) return "Hot";
  if (score >= 50) return "Warm";
  return "Cold";
}

function getRecommendedOffer(scoreBand: string) {
  if (scoreBand === "Hot") return "Book Strategy Call";
  if (scoreBand === "Warm") return "Book Strategy Call";
  return "Send Lead Magnet";
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as AuditPayload;

    if (!body.fullName || !body.email || !body.companyName || !body.businessType) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const totalScore =
      scoreBusinessType(body.businessType) +
      scoreWebsiteLeadsStatus(body.websiteLeadsStatus) +
      scoreCompetitorAwareness(body.competitorAwareness) +
      scoreAutomation(body.followUpAutomationStatus) +
      scoreProblem(body.biggestProblem);

    const scoreBand = getScoreBand(totalScore);
    const recommendedOffer = getRecommendedOffer(scoreBand);

    let leadRecord = await findLeadByEmail(body.email);

    const leadFields: Record<string, unknown> = {
      "Full Name": body.fullName,
      Email: body.email,
      Phone: body.phone || "",
      "Company Name": body.companyName,
      Website: body.website || "",
      Industry: body.businessType,
      City: body.city || "",
      State: body.state || "",
      "Lead Source": "AI Visibility Audit",
      Status: scoreBand === "Hot" ? "Qualified" : "Audit Submitted",
      "Lead Score": totalScore,
      "Score Band": scoreBand,
      "Biggest Problem": body.biggestProblem,
      "Audit Submitted?": true,
      "Audit Submission Date": new Date().toISOString()
    };

    let leadId: string;

    if (leadRecord) {
      await updateLead(leadRecord.id, leadFields);
      leadId = leadRecord.id;
    } else {
      const created = await createLead(leadFields);
      leadId = created.records[0].id;
      leadRecord = created.records[0];
    }

    await createAuditSubmission({
      Lead: [leadId],
      "Business Type": body.businessType,
      "Website Leads Status": body.websiteLeadsStatus,
      "Competitor Awareness": body.competitorAwareness,
      "Follow-Up Automation Status": body.followUpAutomationStatus,
      "Biggest Problem": body.biggestProblem,
      "Raw Answers JSON": JSON.stringify(body, null, 2),
      "Calculated Score": totalScore,
      "Recommended Offer": recommendedOffer,
      "Source Page": body.sourcePage || "/ai-visibility-audit"
    });

    if (scoreBand === "Hot") {
      await createPipelineRecord({
        Lead: [leadId],
        Stage: "Qualified",
        Priority: "High",
        "Close Probability": 70,
        Outcome: "Open",
        Notes: "Hot audit submission auto-created from AI Visibility Audit funnel."
      });
    }

    const params = new URLSearchParams({
      score: String(totalScore),
      band: scoreBand,
      name: body.fullName,
      company: body.companyName,
      problem: body.biggestProblem
    });

    return NextResponse.json({
      success: true,
      score: totalScore,
      scoreBand,
      recommendedOffer,
      redirectUrl: `/ai-visibility-audit/results?${params.toString()}`
    });
  } catch (error) {
    console.error("Audit submit error:", error);
    return NextResponse.json(
      { error: "Something went wrong while submitting the audit." },
      { status: 500 }
    );
  }
}
