// app/audit-form/page.tsx
import Link from "next/link";
import { Container, Badge, Button } from "@/components/ui";

export const metadata = {
  title: "Start Your Free AI Visibility Audit | Reale Digital",
  description:
    "Submit your business details to receive a Free AI Visibility Audit with prioritized fixes for AI search, Maps, reviews, and conversion.",
};

function Input({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <input
        className="mt-2 w-full rounded-xl border border-border/60 bg-panel/40 px-4 py-3 outline-none focus:border-border"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    </label>
  );
}

function Select({
  label,
  name,
  required = false,
  options,
}: {
  label: string;
  name: string;
  required?: boolean;
  options: { label: string; value: string }[];
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <select
        className="mt-2 w-full rounded-xl border border-border/60 bg-panel/40 px-4 py-3 outline-none focus:border-border"
        name={name}
        required={required}
        defaultValue=""
      >
        <option value="" disabled>
          Select one…
        </option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({
  label,
  name,
  placeholder,
  rows = 4,
}: {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium">{label}</span>
      <textarea
        className="mt-2 w-full rounded-xl border border-border/60 bg-panel/40 px-4 py-3 outline-none focus:border-border"
        name={name}
        placeholder={placeholder}
        rows={rows}
      />
    </label>
  );
}

export default function AuditFormPage() {
  // OPTION A: Use Tally (recommended) — paste your embed URL below
  const TALLY_EMBED_URL = ""; // e.g. "https://tally.so/r/xxxxxx"

  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Free Audit Intake</Badge>

          <h1 className="text-4xl md:text-5xl font-bold">
            Start your Free AI Visibility Audit
          </h1>

          <p className="text-muted text-lg max-w-3xl">
            Fill this out and we’ll score your visibility across AI assistants,
            Maps, listings, reviews, and your site’s conversion flow — then send
            you a prioritized action plan.
          </p>

          <div className="grid md:grid-cols-3 gap-4 pt-2">
            {[
              { t: "Takes 2–4 minutes", d: "The more complete, the better the audit." },
              { t: "No pressure", d: "You’ll get clear next steps either way." },
              { t: "Built for bookings", d: "We focus on lead flow and conversion." },
            ].map((x) => (
              <div key={x.t} className="rounded-2xl border border-border/60 bg-panel/40 p-6">
                <h3 className="font-semibold text-lg">{x.t}</h3>
                <p className="text-muted mt-2">{x.d}</p>
              </div>
            ))}
          </div>

          {/* ============================
              OPTION A: TALLY EMBED
             ============================ */}
          {TALLY_EMBED_URL ? (
            <section className="mt-6 rounded-3xl border border-border/60 bg-panel/40 p-4 md:p-6">
              <h2 className="text-2xl font-bold">Audit request form</h2>
              <p className="text-muted mt-2">
                If the form doesn’t load,{" "}
                <a className="underline" href={TALLY_EMBED_URL} target="_blank" rel="noreferrer">
                  open it in a new tab
                </a>
                .
              </p>

              <div className="mt-4 overflow-hidden rounded-2xl border border-border/60 bg-black/20">
                <iframe
                  title="Audit form"
                  src={TALLY_EMBED_URL}
                  className="h-[1200px] w-full"
                  loading="lazy"
                />
              </div>
            </section>
          ) : (
            /* ============================
               OPTION B: SIMPLE NATIVE FORM (NO BACKEND)
               - This form routes to /audit-form/thanks
               - Later, you can connect it to an API route.
              ============================ */
            <section className="mt-6 rounded-3xl border border-border/60 bg-panel/40 p-6 md:p-8">
              <div className="flex items-start justify-between gap-4 flex-col md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold">Audit request form</h2>
                  <p className="text-muted mt-2 max-w-2xl">
                    This submission is set up as a “front-end only” intake page.
                    If you want, I can also add an API route that saves to Airtable
                    and triggers your email/SMS automation.
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button href="/free-ai-visibility-audit" variant="secondary">
                    Back
                  </Button>
                  <Button href="/book" variant="secondary">
                    Book a Call Instead
                  </Button>
                </div>
              </div>

              {/* Front-end only: sends to thanks page using GET */}
              <form action="/audit-form/thanks" method="GET" className="mt-6 space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Full name"
                    name="name"
                    placeholder="Jane Smith"
                    required
                  />
                  <Input
                    label="Business name"
                    name="business"
                    placeholder="Sunrise Med Spa"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@business.com"
                    required
                  />
                  <Input
                    label="Phone (optional)"
                    name="phone"
                    placeholder="(602) 555-1234"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    label="Website URL"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    required
                  />
                  <Input
                    label="Google Business Profile link (optional)"
                    name="gbp"
                    placeholder="Paste the share link if you have it"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <Select
                    label="Business type"
                    name="industry"
                    required
                    options={[
                      { label: "Chiropractor", value: "chiropractor" },
                      { label: "Med Spa", value: "med-spa" },
                      { label: "Salon", value: "salon" },
                      { label: "Other service business", value: "other" },
                    ]}
                  />
                  <Select
                    label="Primary goal"
                    name="goal"
                    required
                    options={[
                      { label: "More booked calls/appointments", value: "bookings" },
                      { label: "More traffic that converts", value: "traffic" },
                      { label: "Automation / follow-up system", value: "automation" },
                      { label: "Rank higher in Maps/AI results", value: "rank" },
                    ]}
                  />
                </div>

                <Textarea
                  label="Anything we should know? (optional)"
                  name="notes"
                  placeholder="Example: We’re in Phoenix, we want to beat X competitor, we need better follow-up, etc."
                  rows={5}
                />

                <div className="rounded-2xl border border-border/60 bg-black/10 p-4">
                  <p className="text-sm text-muted">
                    By submitting, you agree we may contact you about your audit.
                    You can opt out anytime.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-[#001b18] shadow-glow hover:opacity-95"
                  >
                    Submit & Get My Audit
                  </button>

                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-xl border border-border/70 bg-transparent px-5 py-3 font-semibold text-foreground/90 hover:bg-white/5"
                  >
                    Prefer to talk? Book a call
                  </Link>
                </div>

                <p className="text-xs text-muted">
                  Next: You’ll see a confirmation screen. We’ll follow up with next steps and timing.
                </p>
              </form>
            </section>
          )}

          <div className="mt-10 text-sm text-muted">
            <p>
              Looking for the main audit page instead?{" "}
              <Link className="underline" href="/free-ai-visibility-audit">
                Go here
              </Link>
              .
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
