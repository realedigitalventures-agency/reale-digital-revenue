"use client";

import { useMemo, useState } from "react";

type OnboardingPayload = {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  lookupKey: string;
  goals: string;
};

export default function OnboardingPage() {
  const params = useMemo(
    () =>
      new URLSearchParams(
        typeof window !== "undefined" ? window.location.search : ""
      ),
    []
  );

  const [form, setForm] = useState<OnboardingPayload>({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    website: "",
    lookupKey: params.get("product") || params.get("lookup_key") || "",
    goals: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/onboarding/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to submit onboarding.");
      }

      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen bg-[#030b1f] px-4 py-12 text-white">
      <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-4xl font-bold">Reale Digital Onboarding</h1>
        <p className="mt-4 text-slate-300">
          Fill this out so we can start your project faster.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
          <Field
            label="Full Name"
            value={form.fullName}
            onChange={(value) => setForm((prev) => ({ ...prev, fullName: value }))}
          />
          <Field
            label="Email"
            type="email"
            value={form.email}
            onChange={(value) => setForm((prev) => ({ ...prev, email: value }))}
          />
          <Field
            label="Phone"
            value={form.phone}
            onChange={(value) => setForm((prev) => ({ ...prev, phone: value }))}
          />
          <Field
            label="Company Name"
            value={form.companyName}
            onChange={(value) => setForm((prev) => ({ ...prev, companyName: value }))}
          />
          <Field
            label="Website"
            value={form.website}
            onChange={(value) => setForm((prev) => ({ ...prev, website: value }))}
          />
          <Field
            label="Product Lookup Key"
            value={form.lookupKey}
            onChange={(value) => setForm((prev) => ({ ...prev, lookupKey: value }))}
          />
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-200">Goals / Notes</span>
            <textarea
              rows={5}
              value={form.goals}
              onChange={(e) => setForm((prev) => ({ ...prev, goals: e.target.value }))}
              className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
              placeholder="Tell us what you want to achieve, any logins needed, timing, or special notes."
            />
          </label>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-60"
          >
            {status === "submitting" ? "Submitting..." : "Submit Onboarding"}
          </button>

          {status === "success" && (
            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Onboarding submitted successfully.
            </div>
          )}

          {status === "error" && (
            <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
              Something went wrong. Please try again.
            </div>
          )}
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-2xl border border-white/10 bg-[#07142f] px-4 py-3 text-white outline-none placeholder:text-slate-500"
      />
    </label>
  );
}
