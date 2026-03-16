import LeadMagnetLandingTemplate from "@/components/LeadMagnetLandingTemplate";

export const metadata = {
  title: "Local SEO 2.0 Toolkit | Reale Digital",
  description:
    "Modern local SEO playbooks built for AI-era search, map pack visibility, and stronger local authority.",
};

export default function Page() {
  return (
    <LeadMagnetLandingTemplate
      slug="local-seo-2-toolkit"
      title="Local SEO 2.0 Toolkit"
      tag="Toolkit"
      image="/lead-magnets/local-seo-2-toolkit-card.png"
      description="Modern local SEO playbooks built for AI-era search, map pack visibility, and stronger local authority."
      bullets={[
        "What local SEO looks like now",
        "How AI search changes visibility strategy",
        "Authority signals that matter most",
        "A better roadmap for local ranking growth",
      ]}
      cta="Get Toolkit"
    />
  );
}
