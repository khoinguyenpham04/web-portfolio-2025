import { Inter } from "next/font/google"
import { ProjectCard } from "@/components/FeaturedWork/ProjectCard"
import { SparkleIcon } from "@/components/icons/SparkleIcon"
import { getProjectsData } from "@/lib/projects";
import type { Project } from "@/components/FeaturedWork/types"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function ProjectsPage() {
  const allProjects = getProjectsData();
  
  // Separate projects by category
  const regularProjects = allProjects.filter((project: Project) => project.category === "project" || !project.category);
  const hackathonProjects = allProjects.filter((project: Project) => project.category === "hackathon");
  
  return (
    <div className={`${inter.className} bg-white py-12 sm:py-16 md:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Regular Projects Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
            <SparkleIcon className="size-4 sm:size-5"/>
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Crafted with Precision
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 max-w-[50ch] mx-auto">
            Discover our latest web applications built with modern technologies, delivering exceptional user experiences.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
          {regularProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Hackathon Projects Section */}
        {hackathonProjects.length > 0 && (
          <div className="mt-24 sm:mt-32">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
                <SparkleIcon className="size-4 sm:size-5"/>
                <span>Winning Hackathons</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
                Featured Hackathons
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 max-w-[50ch] mx-auto">
                I wouldn't be where I am today without the support of these amazing hackathons.
              </p>
            </div>

            <div className="mt-12 sm:mt-16 max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
              {hackathonProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
