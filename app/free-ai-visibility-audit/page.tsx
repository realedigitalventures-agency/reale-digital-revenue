import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "AI Visibility & Traffic Audit | Reale Digital",
  description:
    "See how your business shows up across AI search, Google, and local visibility channels with actionable next steps.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="free-ai-visibility-audit"
      title="AI Visibility & Traffic Audit"
      tag="Audit"
      image="/lead-magnets/ai-visibility-traffic-audit-card.png"
      description="See how your business shows up across AI search, Google, and local visibility channels with actionable next steps."
      bullets={[
        "Current AI and search visibility snapshot",
        "Quick wins you can act on immediately",
        "Where competitors may be outranking you",
        "The best next step for more qualified leads",
      ]}
      cta="Request Free Audit"
    />
  );
}
