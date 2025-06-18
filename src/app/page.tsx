import HeroSection from "@/components/hero-section";
import FeaturedWork from "@/components/FeaturedWork";
import FeaturedHackathons from "@/components/FeaturedHackathons/FeaturedHackathons";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedWork />
      <FeaturedHackathons />
    </>
  );
}
