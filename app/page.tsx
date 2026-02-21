"use client";
import { useEffect } from "react";
import { Container, Badge } from "@/components/ui";

export default function BookPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="py-14 md:py-20">
      <Container>
        <Badge>Book</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">Book a strategy call</h1>
        <p className="text-muted text-lg max-w-3xl mt-3">
          Add your Calendly embed here (or your scheduling tool). Keep it simple: a short promise + the scheduler.
        </p>
        <div className="rounded-2xl border border-border/60 bg-panel/40 p-6 mt-8">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/reale-digital/ai-strategy-call?hide_event_type_details=1&hide_gdpr_banner=1"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </Container>
    </main>
  );
}
