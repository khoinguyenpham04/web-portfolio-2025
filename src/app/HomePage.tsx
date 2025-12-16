"use client";

import HeroSection from "@/components/hero-section";
import FeaturedWork from "@/components/FeaturedWork";
import FeaturedHackathons from "@/components/FeaturedHackathons/FeaturedHackathons";
import { InfiniteMovingImages } from "@/components/InfiniteScrollingImage";
import { InfiniteMovingImages2 } from "@/components/InfiniteScrollingImage2";
import ClickSpark from "@/components/ui/ClickSpark";
import GradualBlur from "@/components/GradualBlur";
import type { Project } from "@/components/FeaturedWork/types";

export default function HomePage({ projects }: { projects: Project[] }) {
  const featuredProjects = projects.filter((project) => project.category === "project" || !project.category).slice(0, 2);
  const hackathonProjects = projects.filter((project) => project.category === "hackathon");
  return (
    <section style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <div style={{ height: '100%', overflowY: 'auto' }}>
        <ClickSpark
                sparkColor='#0092FF'
                sparkSize={15}
                sparkRadius={40}
                sparkCount={10}
                duration={400}
              >
          <HeroSection />
          <InfiniteMovingImages />
          <InfiniteMovingImages2 />
          <FeaturedWork projects={featuredProjects} />
          <FeaturedHackathons hackathons={hackathonProjects} />
        </ClickSpark>
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
