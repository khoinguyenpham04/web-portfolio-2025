"use client";

import HeroSection from "@/components/hero-section";
import FeaturedWork from "@/components/FeaturedWork";
import FeaturedHackathons from "@/components/FeaturedHackathons/FeaturedHackathons";
import { InfiniteMovingImages } from "@/components/InfiniteScrollingImage";
import ClickSpark from "@/components/ui/ClickSpark";
import type { Project } from "@/components/FeaturedWork/types";

export default function HomePage({ projects }: { projects: Project[] }) {
  const featuredProjects = projects.filter((project) => project.category === "project" || !project.category).slice(0, 2);
  return (
    <>
      <ClickSpark
              sparkColor='#0092FF'
              sparkSize={15}
              sparkRadius={40}
              sparkCount={10}
              duration={400}
            >
        <HeroSection />
        <InfiniteMovingImages />
        <FeaturedWork projects={featuredProjects} />
        <FeaturedHackathons />
      </ClickSpark>
    </>
  );
}
