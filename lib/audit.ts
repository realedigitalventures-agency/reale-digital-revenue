import type {
  AuditCategoryScores,
  AuditCompetitor,
  AuditIssue,
  AuditInput,
  AuditResponse,
} from "@/types/audit"

function normalizeWebsite(url: string): string {
  let value = url.trim()
  if (!value.startsWith("http://") && !value.startsWith("https://")) {
    value = `https://${value}`
  }
  return value
}

function seededNumber(seed: string, min: number, max: number) {
  let hash = 0
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }
  const normalized = Math.abs(hash % 1000) / 1000
  return Math.floor(normalized * (max - min + 1)) + min
}

function buildScores(input: AuditInput): AuditCategoryScores {
  const seed = `${input.businessName}|${input.website}|${input.city}|${input.industry}`

  return {
    technical: seededNumber(`${seed}-technical`, 7, 17),
    content: seededNumber(`${seed}-content`, 6, 18),
    localSeo: seededNumber(`${seed}-local`, 4, 16),
    conversions: seededNumber(`${seed}-conv`, 5, 17),
    competitorGap: seededNumber(`${seed}-gap`, 4, 16),
  }
}

function buildIssues(input: AuditInput, scores: AuditCategoryScores): AuditIssue[] {
  const issues: AuditIssue[] = []

  if (scores.localSeo <= 10) {
    issues.push({
      title: "Weak local SEO signals",
      detail: `Your site appears under-optimized for ${input.city}-based search visibility, which can reduce map and local organic exposure.`,
      severity: "high",
    })
  }

  if (scores.conversions <= 10) {
    issues.push({
      title: "Low conversion structure",
      detail: "Key conversion elements like stronger CTAs, trust signals, and clearer lead paths may be missing or under-emphasized.",
      severity: "high",
    })
  }

  if (scores.content <= 11) {
    issues.push({
      title: "Thin or under-targeted content",
      detail: "Your service content likely needs stronger keyword coverage, more depth, and clearer relevance to buyer intent.",
      severity: "medium",
    })
  }

  if (scores.technical <= 10) {
    issues.push({
      title: "Technical performance concerns",
      detail: "Technical SEO factors such as metadata structure, page hierarchy, or mobile readiness may be limiting visibility.",
      severity: "medium",
    })
  }

  issues.push({
    title: "Competitors are positioned ahead",
    detail: `Businesses in ${input.city} with stronger SEO and conversion systems are likely capturing more search traffic and calls.`,
    severity: "high",
  })

  return issues.slice(0, 4)
}

function buildCompetitors(input: AuditInput): AuditCompetitor[] {
  const industry = input.industry || "Business"
  const city = input.city || "Your City"

  return [
    {
      name: `${city} ${industry} Pros`,
      reason: "Stronger local keyword targeting and more visible service positioning.",
    },
    {
      name: `Elite ${industry} ${city}`,
      reason: "Likely better review leverage, stronger page structure, and clearer conversion paths.",
    },
    {
      name: `${city} Premier ${industry}`,
      reason: "Appears positioned to capture more intent-driven local search traffic.",
    },
  ]
}

export function runAudit(input: AuditInput): AuditResponse {
  const normalizedWebsite = normalizeWebsite(input.website)
  const normalizedInput = { ...input, website: normalizedWebsite }

  const scores = buildScores(normalizedInput)
  const totalScore =
    scores.technical +
    scores.content +
    scores.localSeo +
    scores.conversions +
    scores.competitorGap

  const issues = buildIssues(normalizedInput, scores)
  const competitors = buildCompetitors(normalizedInput)

  let summary = "Your website shows clear opportunities to improve local visibility and turn more visitors into booked calls."
  let opportunity = "With better SEO structure, stronger trust elements, and a clearer conversion path, your business could capture significantly more leads."
  let nextStep = "Book a strategy call to review the highest-impact fixes and see what to implement first."

  if (totalScore >= 75) {
    summary = "Your website has a decent foundation, but a few missed opportunities may still be limiting growth."
    opportunity = "A focused optimization pass could help you outperform weaker competitors and improve conversion rates."
  } else if (totalScore <= 45) {
    summary = "Your site is likely losing traffic and leads due to foundational visibility and conversion gaps."
    opportunity = "Fixing these gaps could create a major lift in qualified calls, form submissions, and local search visibility."
  }

  return {
    success: true,
    totalScore,
    scores,
    issues,
    competitors,
    summary,
    opportunity,
    nextStep,
  }
}
