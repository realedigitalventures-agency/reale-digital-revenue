import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import ServicesSection from "../components/ServicesSection";
import CTAButton from "../components/CTAButton";
import FAQSection from "../components/FAQSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <FAQSection />
      <section className="py-20 text-center bg-neutral">
        <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Practice?</h2>
        <CTAButton text="Claim Your Free Audit" link="/audit" />
      </section>
    </div>
  );
}