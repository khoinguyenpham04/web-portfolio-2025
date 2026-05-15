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
  const featuredProjects = projects.filter((project) => project.category === "project" || !project.category).slice(0, 4);
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
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mt-2 sm:mt-4 -mb-2 sm:-mb-4 text-right pr-12 sm:pr-24 md:pr-48 lg:pr-64">
            <span className="inline-flex items-end gap-1 -rotate-2 text-gray-500">
              <span className="font-[family-name:var(--font-caveat)] text-xl sm:text-2xl">
                <span className="sm:hidden">psst, swipe</span>
                <span className="hidden sm:inline">
                  pssst, you can drag this
                </span>
              </span>
              <svg
                viewBox="0 0 60 70"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 sm:w-10 h-10 sm:h-12 mb-1 sm:mb-1.5"
                aria-hidden="true"
              >
                <path d="M 5 60 C 40 60, 55 30, 50 10" />
                <path d="M 44 17 L 50 10 L 56 17" />
              </svg>
            </span>
          </div>
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
