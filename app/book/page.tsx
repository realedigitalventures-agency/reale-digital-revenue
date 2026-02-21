// app/book/page.tsx
import { Container, Badge } from "@/components/ui";

export default function BookPage() {
  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Book</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Book a strategy call</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          Add your Calendly embed here (or your scheduling tool). Keep it simple: a short promise + the scheduler.
        </p>

        <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-8">
          <p className="text-muted">
<!-- Calendly inline widget begin -->
<div class="calendly-inline-widget" data-url="https://calendly.com/reale-digital/ai-strategy-call?hide_event_type_details=1&hide_gdpr_banner=1" style="min-width:320px;height:700px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
<!-- Calendly inline widget end -->

          </p>
        </div>
      </Container>
    </main>
  );
}
