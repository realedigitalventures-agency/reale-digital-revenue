"use client";

import { useState } from "react";

export default function LeadCaptureForm({
  magnetTitle,
  magnetSlug,
  buttonLabel,
}: {
  magnetTitle: string;
  magnetSlug: string;
  buttonLabel: string;
}) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    businessName: "",
    website: "",
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");

    try {
      const endpoint =
        process.env.NEXT_PUBLIC_LEAD_CAPTURE_ENDPOINT || "/api/onboarding/submit";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          companyName: form.businessName,
          website: form.website,
          lookupKey: magnetSlug,
          goals: `Lead magnet request: ${magnetTitle}`,
        }),
      });

      if (!response.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-[2rem] border border-cyan-300/20 bg-[linear-gradient(180deg,rgba(8,26,63,0.98),rgba(3,10,31,0.98))] p-6 md:p-8">
      <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Free Resource Access
      </div>
      <h3 className="mt-4 text-2xl font-bold text-white">Get instant access</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">
        Enter your details below and we’ll send you the next step for this resource.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
        <input
          value={form.fullName}
          onChange={(e) => setForm((prev) => ({ ...prev, fullName: e.target.value }))}
          placeholder="Full name"
          className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
          required
        />
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
          placeholder="Email address"
          className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
          required
        />
        <input
          value={form.businessName}
          onChange={(e) => setForm((prev) => ({ ...prev, businessName: e.target.value }))}
          placeholder="Business name"
          className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
          required
        />
        <input
          value={form.website}
          onChange={(e) => setForm((prev) => ({ ...prev, website: e.target.value }))}
          placeholder="Website (optional)"
          className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
        />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="rounded-xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-60"
        >
          {status === "submitting" ? "Submitting..." : buttonLabel}
        </button>

        {status === "success" && (
          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
            Success — your request was submitted.
          </div>
        )}

        {status === "error" && (
          <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
            Something went wrong. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
