"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const businessTypes = [
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

const websiteLeadOptions = [
  "No website leads",
  "Gets some leads but inconsistent",
  "Gets traffic but poor conversion",
  "Already gets leads consistently"
];

const competitorOptions = [
  "Knows top competitors",
  "Somewhat knows competitors",
  "Does not know competitors"
];

const automationOptions = [
  "No automation",
  "Partial automation",
  "Full automation"
];

export default function AIVisibilityAuditPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setError("");

    const payload = {
      fullName: String(formData.get("fullName") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      companyName: String(formData.get("companyName") || ""),
      website: String(formData.get("website") || ""),
      businessType: String(formData.get("businessType") || ""),
      city: String(formData.get("city") || ""),
      state: String(formData.get("state") || ""),
      websiteLeadsStatus: String(formData.get("websiteLeadsStatus") || ""),
      competitorAwareness: String(formData.get("competitorAwareness") || ""),
      followUpAutomationStatus: String(formData.get("followUpAutomationStatus") || ""),
      biggestProblem: String(formData.get("biggestProblem") || ""),
      sourcePage: "/ai-visibility-audit"
    };

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Failed to submit audit.");
      }

      router.push(data.redirectUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative overflow-hidden bg-[#030b22] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,224,208,0.14),_transparent_35%),radial-gradient(circle_at_80%_20%,_rgba(98,92,255,0.16),_transparent_28%),linear-gradient(to_bottom,_#07112e,_#030b22_45%,_#020817)]" />

      <section className="relative mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200 backdrop-blur">
            FREE AI VISIBILITY AUDIT
          </div>

          <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find Out Why Your Website
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
              {" "}
              Isn’t Turning Traffic Into Customers
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl">
            Answer a few quick questions and we’ll identify where your
            visibility, website flow, and follow-up process may be costing you
            booked calls.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              2 minutes
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Personalized result
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              Free strategy path
            </span>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-5xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-white/10 bg-[#07122f]/80 p-6 shadow-[0_12px_50px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
          <form
            action={handleSubmit}
            className="grid gap-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full Name *">
                <input
                  name="fullName"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-400"
                  placeholder="Your full name"
                />
              </Field>

              <Field label="Email *">
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="you@company.com"
                />
              </Field>

              <Field label="Phone">
                <input
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="(555) 555-5555"
                />
              </Field>

              <Field label="Company Name *">
                <input
                  name="companyName"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="Your company"
                />
              </Field>

              <Field label="Website">
                <input
                  name="website"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="https://yourwebsite.com"
                />
              </Field>

              <Field label="Business Type *">
                <select
                  name="businessType"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1736] px-4 py-3 text-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select your business type
                  </option>
                  {businessTypes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="City">
                <input
                  name="city"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="Phoenix"
                />
              </Field>

              <Field label="State">
                <input
                  name="state"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                  placeholder="AZ"
                />
              </Field>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Field label="How are your website leads right now?">
                <select
                  name="websiteLeadsStatus"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1736] px-4 py-3 text-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {websiteLeadOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Do you know your main competitors?">
                <select
                  name="competitorAwareness"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1736] px-4 py-3 text-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {competitorOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="What’s your follow-up system like?">
                <select
                  name="followUpAutomationStatus"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#0b1736] px-4 py-3 text-white outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Choose one
                  </option>
                  {automationOptions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </Field>
            </div>

            <Field label="What’s the biggest problem you want to solve right now?">
              <textarea
                name="biggestProblem"
                required
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-slate-400"
                placeholder="Example: We get some traffic, but not enough booked calls. We also don’t have any follow-up automation."
              />
            </Field>

            {error ? (
              <div className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </div>
            ) : null}

            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[54px] items-center justify-center rounded-2xl bg-[#38d6cf] px-7 py-3 text-base font-bold text-[#04111f] shadow-[0_0_40px_rgba(56,214,207,0.22)] transition hover:scale-[1.01] hover:bg-[#4ae2db] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Analyzing..." : "See My Audit Result"}
              </button>

              <p className="text-sm text-slate-400">
                No obligation. This helps us tailor the most useful next step.
              </p>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  label,
  children
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium text-slate-200">{label}</span>
      {children}
    </label>
  );
}
