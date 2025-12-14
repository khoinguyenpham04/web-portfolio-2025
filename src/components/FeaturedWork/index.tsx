import { Inter } from "next/font/google";
import type { Project } from "./types"
import { ProjectCard } from "./ProjectCard"
import { ExploreProjectsCallToAction } from "./ExploreProjectsCallToAction";
import { SparkleIcon } from "../icons/SparkleIcon"
import { IconPackage } from "@tabler/icons-react";

const inter = Inter({ subsets: ["latin"] });

export default function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section className={`${inter.className} bg-white py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
            <IconPackage className="size-5"/>
            <span>Built & Shipped</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Selected Work
          </h2>
          <p className="text-lg text-gray-400 max-w-[40ch] mx-auto">
            Discover my projects built with modern technologies, delivering exceptional user experiences.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto flex flex-col gap-8">
          {projects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          <ExploreProjectsCallToAction />
        </div> 
      </div>
    </section>
  )
}
