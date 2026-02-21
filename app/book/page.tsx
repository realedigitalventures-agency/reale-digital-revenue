// app/book/page.tsx
import Script from "next/script";
import { Container, Badge } from "@/components/ui";

export const metadata = {
  title: "Book a Call | Reale Digital",
  description:
    "Book a quick AI Search + Automation strategy call with Reale Digital.",
};

export default function BookPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Book</Badge>

        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Book a strategy call
        </h1>

        <p className="text-muted text-lg max-w-3xl mt-3">
          Pick a time that works for you. We’ll review your visibility, your
          conversion flow, and what to fix first for more booked appointments.
        </p>

        <section className="rounded-2xl border border-border/60 bg-panel/40 p-4 md:p-6 mt-8">
          {/* Calendly widget container */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/reale-digital/ai-strategy-call?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: 320, height: 750 }}
          />

          {/* Load Calendly script safely in Next.js */}
          <Script
            src="https://assets.calendly.com/assets/external/widget.js"
            strategy="afterInteractive"
          />
        </section>
      </Container>
    </main>
  );
}
