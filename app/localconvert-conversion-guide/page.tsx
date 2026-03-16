import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "LocalConvert Conversion Guide | Reale Digital",
  description:
    "A conversion-focused guide showing how better page structure, copy, and offers turn traffic into customers.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="localconvert-conversion-guide"
      title="LocalConvert Conversion Guide"
      tag="Guide"
      image="/lead-magnets/localconvert-conversion-guide-card.png"
      description="A conversion-focused guide showing how better page structure, copy, and offers turn traffic into customers."
      bullets={[
        "What makes service pages convert",
        "How to tighten message-to-market fit",
        "Where most websites lose trust",
        "What to improve for more booked calls",
      ]}
      cta="Get Conversion Guide"
    />
  );
}
