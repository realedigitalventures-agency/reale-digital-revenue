import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "AI Search Shift Guide | Reale Digital",
  description:
    "Learn how local businesses can stay visible as AI search changes the way people discover services online.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="free-ai-search-shift-guide"
      title="AI Search Shift Guide"
      tag="Guide"
      image="/lead-magnets/ai-search-shift-guide-card.png"
      description="Learn how local businesses can stay visible as AI search changes the way people discover services online."
      bullets={[
        "What AI search is changing right now",
        "How local businesses can stay visible",
        "The biggest mistakes most sites are making",
        "What to fix first for faster visibility wins",
      ]}
      cta="Download The Guide"
    />
  );
}
