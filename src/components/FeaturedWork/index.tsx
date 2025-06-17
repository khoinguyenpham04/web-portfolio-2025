import { Inter } from "next/font/google"
import type { Project } from "./types"
import { ProjectCard } from "./ProjectCard"
import { ExploreProjectsCallToAction } from "./ExploreProjectsCallToAction";
import { SparkleIcon } from "../icons/SparkleIcon"
import { NextJsIcon } from "../icons/NextJsIcon"
import { PostgreSQLIcon } from "../icons/PostgreSQLIcon"
import { SupabaseIcon } from "../icons/SupabaseIcon"
import { ReactIcon } from "../icons/ReactIcon"
import TypeScriptIcon from "../icons/TypeScriptIcon"
import TailwindCSSIcon from "../icons/TailwindCSSIcon"
import OpenAIIcon from "../icons/OpenAIIcon";
import MongoIcon from "../icons/MongoIcon";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const projectsData: Project[] = [
  {
    id: "speakwisely",
    name: "SpeakWisely",
    description: "AI-powered instant personalized feedback, and structured practice for IELTS Speaking.",
    tags: [
      { name: "Next.js", icon: <NextJsIcon /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "Supabase", icon: <SupabaseIcon /> },
      { name: "PostgreSQL", icon: <PostgreSQLIcon /> },
      { name: "Tailwind CSS", icon: <TailwindCSSIcon /> },
      { name: "OpenAI", icon: <OpenAIIcon/> },
      { name: "Whisper", icon: <OpenAIIcon/> },
      
    ],
    images: [
      "/blue-gradient-placeholder.jpg",
      "/blue-bg.jpg",
      "/blue-gradient-placeholder.jpg",
    ],
    href: "#speakwisely",
    layout: "imageRight",
    brandIcon: "/speakwiselylogo.svg"
  },
  {
    id: "studymapper",
    name: "StudyMapper",
    description:
      "Designed and coded 2 web apps. Working together for some time now and planning to do more big projects.",
    tags: [
      { name: "Next.js", icon: <NextJsIcon /> },
      { name: "React", icon: <ReactIcon /> },
      { name: "TypeScript", icon: <TypeScriptIcon /> },
      { name: "MongoDB", icon: <MongoIcon /> },
      { name: "Tailwind CSS", icon: <TailwindCSSIcon /> },
    ],
    images: [
      "/blue-gradient-placeholder.jpg",
      "/blue-bg.jpg",
      "/blue-gradient-placeholder.jpg",
    ],
    href: "#studymapper",
    layout: "imageLeft",
    brandIcon: "/studdymapperlogo.svg"
  },
]

export default function FeaturedWork() {
  return (
    <section className={`${inter.className} bg-white py-16 sm:py-24`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-full mb-4">
            <SparkleIcon className="size-5"/>
            <span>Featured Projects</span>
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
          <ExploreProjectsCallToAction />
        </div> 
      </div>
    </section>
  )
}
