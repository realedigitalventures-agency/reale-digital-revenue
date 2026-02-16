import { Container, Button } from "@/components/ui";

export const metadata = { title: "Audit submitted" };

export default function Submitted() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/your-link-here";

  return (
    <main className="py-14">
      <Container>
        <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-panel/25 p-10 text-center">
          <h1 className="text-3xl font-semibold">Audit request received ✅</h1>
          <p className="mt-3 text-muted">
            Check your inbox for confirmation. Want the fastest path to fixes?
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/resources" variant="secondary">Browse Resources</Button>
            <a
              href={bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-teal px-5 py-3 font-semibold text-[#001b18] shadow-glow hover:opacity-95"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </Container>
    </main>
  );
}
