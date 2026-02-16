"use client";

import { useState } from "react";

export default function FreeAuditPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = {
      businessName: String(form.get("businessName") || ""),
      website: String(form.get("website") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || "")
    };

    const res = await fetch("/api/audit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    setLoading(false);

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong. Please try again.");
      return;
    }

    window.location.href = "/audit-submitted";
  }

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "48px 20px" }}>
      <h1>Get Your Free AI Visibility Audit</h1>
      <p>Submit your info and we’ll email confirmation instantly.</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 12, marginTop: 18 }}>
        <input name="businessName" placeholder="Business name" required />
        <input name="website" placeholder="Website (example.com)" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="phone" placeholder="Phone (optional)" />
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Run My Free Audit"}
        </button>
        {error && <div style={{ color: "tomato" }}>{error}</div>}
      </form>
    </main>
  );
}
