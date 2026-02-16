import { Container } from "@/components/ui";

export const metadata = {
  title: "Book a strategy call",
  description: "Book a strategy call to review your audit and next steps."
};

export default function Book() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/your-link-here";

  return (
    <main className="py-14">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-panel/25 p-8 md:p-10">
          <h1 className="text-3xl font-semibold">Book a Strategy Call</h1>
          <p className="mt-3 text-muted">
            We’ll review your audit, pinpoint the highest-ROI fixes, and map a simple plan to increase leads and revenue.
          </p>

          <div className="mt-6 rounded-2xl border border-border/60 bg-bg/30 p-5">
            <div className="text-sm text-muted">Booking link:</div>
            <a className="mt-2 block break-all text-brand-blue hover:underline" href={bookingUrl} target="_blank" rel="noreferrer">
              {bookingUrl}
            </a>
            <div className="mt-3 text-sm text-muted">
              Set NEXT_PUBLIC_BOOKING_URL in Vercel to your real Calendly link.
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
