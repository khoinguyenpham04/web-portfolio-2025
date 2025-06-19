import HeroSection from "@/components/hero-section";
import FeaturedWork from "@/components/FeaturedWork";
import FeaturedHackathons from "@/components/FeaturedHackathons/FeaturedHackathons";
import { InfiniteMovingImages } from "@/components/InfiniteScrollingImage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfiniteMovingImages />
      <FeaturedWork />
      <FeaturedHackathons />
    </>
  );
}
