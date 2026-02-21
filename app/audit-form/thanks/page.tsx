// app/audit-form/thanks/page.tsx
import Link from "next/link";
import { Container, Badge, Button } from "@/components/ui";

export const metadata = {
  title: "Audit Request Received | Reale Digital",
  description: "Thanks for requesting your Free AI Visibility Audit.",
};

export default function AuditThanksPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const name =
    typeof searchParams?.name === "string" ? searchParams?.name : undefined;
  const business =
    typeof searchParams?.business === "string" ? searchParams?.business : undefined;

  return (
    <main className="py-14 md:py-20">
      <Container>
        <div className="flex flex-col gap-6">
          <Badge>Submitted</Badge>

          <h1 className="text-4xl md:text-5xl font-bold">
            You’re in — we got your request.
          </h1>

          <p className="text-muted text-lg max-w-3xl">
            {name ? `Thanks, ${name}! ` : "Thanks! "}
            {business ? (
              <>
                We’ll start reviewing <span className="font-semibold text-foreground">{business}</span> and
                send the next steps by email.
              </>
            ) : (
              <>We’ll start your audit and send the next steps by email.</>
            )}
          </p>

          <div className="rounded-3xl border border-border/60 bg-panel/40 p-6 md:p-8">
            <h2 className="text-2xl font-bold">What happens next</h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>• We validate your business info (site + presence signals)</li>
              <li>• We score visibility across AI, Maps, listings, reviews, and conversion</li>
              <li>• We send a prioritized action plan (fast wins first)</li>
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button href="/book" variant="primary">
                Book a call (optional)
              </Button>
              <Button href="/" variant="secondary">
                Back to home
              </Button>
            </div>

            <p className="text-xs text-muted mt-4">
              If you don’t see our email, check Promotions/Spam and search “Reale Digital”.
            </p>
          </div>

          <p className="text-sm text-muted">
            Want to submit another audit?{" "}
            <Link className="underline" href="/audit-form">
              Go back to the form
            </Link>
            .
          </p>
        </div>
      </Container>
    </main>
  );
}
