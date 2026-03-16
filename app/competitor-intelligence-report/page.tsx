import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "Competitor Intelligence Report | Reale Digital",
  description:
    "Understand how competitors are winning visibility, leads, and conversions — and what to do about it.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="competitor-intelligence-report"
      title="Competitor Intelligence Report"
      tag="Report"
      image="/lead-magnets/competitor-intelligence-report-card.png"
      description="Understand how competitors are winning visibility, leads, and conversions — and what to do about it."
      bullets={[
        "Where competitors are winning attention",
        "What signals they may be using better",
        "How to identify the gaps fast",
        "What to prioritize to close the gap",
      ]}
      cta="See The Report"
    />
  );
}
