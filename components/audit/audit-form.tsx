"use client"

import { useState } from "react"
import type { AuditInput, AuditResponse } from "@/types/audit"

type AuditFormProps = {
  onComplete: (result: AuditResponse, input: AuditInput) => void
}

const defaultForm: AuditInput = {
  businessName: "",
  website: "",
  city: "",
  industry: "",
  email: "",
  phone: "",
}

export default function AuditForm({ onComplete }: AuditFormProps) {
  const [form, setForm] = useState<AuditInput>(defaultForm)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function updateField<K extends keyof AuditInput>(key: K, value: AuditInput[K]) {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Unable to generate audit.")
      }

      onComplete(data, form)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur md:p-8">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            required
            value={form.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            placeholder="Business Name"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
          <input
            type="text"
            required
            value={form.website}
            onChange={(e) => updateField("website", e.target.value)}
            placeholder="Website URL"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="text"
            required
            value={form.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="City"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
          <input
            type="text"
            required
            value={form.industry}
            onChange={(e) => updateField("industry", e.target.value)}
            placeholder="Industry (Roofing, Med Spa, Fence, etc.)"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="Email Address"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder="Phone Number (optional)"
            className="h-12 rounded-xl border border-white/10 bg-black/40 px-4 text-white outline-none placeholder:text-white/40"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="mt-2 inline-flex h-12 items-center justify-center rounded-xl bg-orange-500 px-6 font-semibold text-black transition hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Running AI Audit..." : "Check My AI Visibility Score"}
        </button>

        {error ? (
          <p className="text-sm text-red-400">{error}</p>
        ) : (
          <p className="text-sm text-white/50">
            Free score + competitor snapshot. Perfect for business owners who want more calls from Google.
          </p>
        )}
      </form>
    </section>
  )
}
