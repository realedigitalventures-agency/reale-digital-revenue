"use client"

import { useState } from "react"
import AuditForm from "@/components/audit/audit-form"
import AuditResults from "@/components/audit/audit-results"
import type { AuditInput, AuditResponse } from "@/types/audit"

export default function FreeAiVisibilityAuditPage() {
  const [result, setResult] = useState<AuditResponse | null>(null)
  const [input, setInput] = useState<AuditInput | null>(null)

  function handleComplete(auditResult: AuditResponse, auditInput: AuditInput) {
    setResult(auditResult)
    setInput(auditInput)
  }

  function handleReset() {
    setResult(null)
    setInput(null)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_30%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-20 pt-20 md:px-10 md:pt-28">
          {!result && (
            <>
              <div className="mb-6 rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-orange-300">
                Reale Digital • Free Tool
              </div>

              <h1 className="max-w-5xl text-center text-4xl font-black tracking-tight text-white md:text-6xl">
                Check Your AI Visibility Score
              </h1>

              <p className="mt-6 max-w-3xl text-center text-lg text-white/70 md:text-xl">
                Discover why competitors may be outranking you, where your website is losing customers,
                and what to fix first to generate more calls from Google.
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/55">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Local SEO Snapshot
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Competitor Gap Score
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                  Conversion Opportunity
                </span>
              </div>

              <div className="mt-12 w-full">
                <AuditForm onComplete={handleComplete} />
              </div>

              <div className="mt-10 grid w-full max-w-5xl gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-orange-400">1. Enter your business info</p>
                  <p className="mt-2 text-white/70">
                    Add your business name, website, city, and industry to run the audit.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-orange-400">2. Get your score instantly</p>
                  <p className="mt-2 text-white/70">
                    See your AI Visibility Score, issue breakdown, and competitor pressure points.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-orange-400">3. Book your strategy call</p>
                  <p className="mt-2 text-white/70">
                    Review the fastest fixes with Reale Digital and turn traffic into customers.
                  </p>
                </div>
              </div>
            </>
          )}

          {result && input && (
            <AuditResults result={result} input={input} onReset={handleReset} />
          )}
        </div>
      </section>
    </main>
  )
}
