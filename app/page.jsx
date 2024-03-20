import HeroSection from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import UniquenessSection from "@/components/sections/Uniqueness";
import StagesSection from "@/components/sections/Stages";
import PricingSection from "@/components/sections/Pricing";
import ReviewsSection from "@/components/sections/Reviews";
import FaqSection from "@/components/sections/Faq";
import DiscussionSection from "@/components/sections/Discussion";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <UniquenessSection />
      <StagesSection />
      <PricingSection />
      <ReviewsSection />
      <FaqSection />
      <DiscussionSection />
    </>
  );
}
