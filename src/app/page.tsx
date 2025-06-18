import HeroSection from "@/components/hero-section";
import FeaturedWork from "@/components/FeaturedWork";
import FeaturedHackathons from "@/components/FeaturedHackathons/FeaturedHackathons";
import { Header } from "@/components/header";
export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <FeaturedWork />
      <FeaturedHackathons />
    </main>
  );
}
