import { Inter } from "next/font/google"
import { ProjectCard } from "@/components/FeaturedWork/ProjectCard"
import { SparkleIcon } from "@/components/icons/SparkleIcon"
import { getProjectsData } from "@/lib/projects";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function ProjectsPage() {
  const projectsData = getProjectsData();
  return (
    <section className={`${inter.className} bg-white py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
            <SparkleIcon className="size-5"/>
            <span>All Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-neutral-900 mb-4">
            Crafted with Precision
          </h2>
          <p className="text-lg text-neutral-700 max-w-[50ch] mx-auto">
            Discover our latest web applications built with modern technologies, delivering exceptional user experiences.
          </p>
        </div>

        <div className="mt-16 max-w-6xl mx-auto flex flex-col gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div> 
      </div>
    </section>
  )
}
