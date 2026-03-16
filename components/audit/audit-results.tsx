"use client"

import type { AuditInput, AuditResponse } from "@/types/audit"

type AuditResultsProps = {
  result: AuditResponse
  input: AuditInput
  onReset: () => void
}

function getScoreLabel(score: number) {
  if (score >= 75) return "Strong Foundation"
  if (score >= 50) return "Needs Optimization"
  return "High Opportunity"
}

function severityClasses(severity: "high" | "medium" | "low") {
  switch (severity) {
    case "high":
      return "border-red-500/30 bg-red-500/10 text-red-200"
    case "medium":
      return "border-yellow-500/30 bg-yellow-500/10 text-yellow-200"
    default:
      return "border-cyan-500/30 bg-cyan-500/10 text-cyan-200"
  }
}

export default function AuditResults({
  result,
  input,
  onReset,
}: AuditResultsProps) {
  return (
    <section className="w-full max-w-5xl space-y-8">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-orange-400">
              AI Visibility Audit Complete
            </p>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              {input.businessName}
            </h2>
            <p className="mt-2 max-w-2xl text-white/70">{result.summary}</p>
          </div>

          <div className="flex min-w-[220px] flex-col items-center justify-center rounded-3xl border border-orange-500/30 bg-black/40 px-8 py-6 text-center">
            <div className="text-6xl font-black tracking-tight text-orange-400">
              {result.totalScore}
            </div>
            <div className="mt-1 text-lg font-medium text-white">/ 100</div>
            <div className="mt-2 text-sm text-white/60">
              {getScoreLabel(result.totalScore)}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-5">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Technical</p>
          <p className="mt-2 text-3xl font-bold text-white">{result.scores.technical}/20</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Content</p>
          <p className="mt-2 text-3xl font-bold text-white">{result.scores.content}/20</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Local SEO</p>
          <p className="mt-2 text-3xl font-bold text-white">{result.scores.localSeo}/20</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Conversions</p>
          <p className="mt-2 text-3xl font-bold text-white">{result.scores.conversions}/20</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-sm text-white/50">Competitor Gap</p>
          <p className="mt-2 text-3xl font-bold text-white">{result.scores.competitorGap}/20</p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-2xl font-bold text-white">Major Issues Found</h3>
          <div className="mt-5 space-y-4">
            {result.issues.map((issue) => (
              <div
                key={issue.title}
                className={`rounded-2xl border p-4 ${severityClasses(issue.severity)}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold">{issue.title}</p>
                  <span className="rounded-full border border-current/20 px-3 py-1 text-xs uppercase tracking-wide">
                    {issue.severity}
                  </span>
                </div>
                <p className="mt-2 text-sm opacity-90">{issue.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-2xl font-bold text-white">Top Competitors</h3>
            <div className="mt-5 space-y-4">
              {result.competitors.map((competitor) => (
                <div
                  key={competitor.name}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="font-semibold text-white">{competitor.name}</p>
                  <p className="mt-1 text-sm text-white/65">{competitor.reason}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-orange-500/30 bg-orange-500/10 p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-orange-300">
              Revenue Opportunity
            </p>
            <p className="mt-3 text-white/90">{result.opportunity}</p>
            <p className="mt-3 text-white/70">
              Businesses in {input.city} that improve visibility and conversion systems often create a major lift in inbound leads.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-orange-400">
              Next Best Step
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              Get the full strategy breakdown
            </h3>
            <p className="mt-3 max-w-2xl text-white/70">{result.nextStep}</p>
            <p className="mt-3 text-sm text-white/50">
              We only take a limited number of new implementation clients each month.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://calendly.com/reale-digital/ai-strategy-call"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
            >
              Book Free Strategy Call
            </a>
            <button
              onClick={onReset}
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-black/30 px-6 py-3 font-semibold text-white transition hover:bg-black/50"
            >
              Run Another Audit
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
