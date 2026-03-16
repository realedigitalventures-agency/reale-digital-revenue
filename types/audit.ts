export type AuditInput = {
  businessName: string
  website: string
  city: string
  industry: string
  email: string
  phone?: string
}

export type AuditCategoryScores = {
  technical: number
  content: number
  localSeo: number
  conversions: number
  competitorGap: number
}

export type AuditIssue = {
  title: string
  detail: string
  severity: "high" | "medium" | "low"
}

export type AuditCompetitor = {
  name: string
  reason: string
}

export type AuditResponse = {
  success: boolean
  totalScore: number
  scores: AuditCategoryScores
  issues: AuditIssue[]
  competitors: AuditCompetitor[]
  summary: string
  opportunity: string
  nextStep: string
}
