"use client"

import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import type { Project } from "./types"
import type { JSX } from "react/jsx-runtime" // Import JSX to fix the undeclared variable error

interface ProjectCardProps {
  project: Project
}

const Tag: React.FC<{ name: string; icon?: JSX.Element }> = ({ name, icon }) => (
  <div className="flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100">
    {icon}
    <span>{name}</span>
  </div>
)

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const [imageLoaded, setImageLoaded] = useState<boolean[]>(project.images.map(() => false))

  const DURATION = 2000 // Increased duration for better UX

  const cycleImages = () => {
    if (project.images.length <= 1) return
    setPrevIndex(activeIndex)
    setActiveIndex((current) => (current + 1) % project.images.length)
  }

  const handleMouseEnter = () => {
    if (intervalRef.current || project.images.length <= 1) return
    cycleImages()
    intervalRef.current = setInterval(cycleImages, DURATION)
  }

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    // Reset to the first image
    setActiveIndex(0)
    setPrevIndex(null)
  }

  const handleImageLoad = (index: number) => {
    setImageLoaded((prev) => {
      const newState = [...prev]
      newState[index] = true
      return newState
    })
  }

  useEffect(() => {
    if (prevIndex === null) return
    const timer = setTimeout(() => setPrevIndex(null), 400)
    return () => clearTimeout(timer)
  }, [prevIndex])

  // Cleanup on unmount
  useEffect(
    () => () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    },
    [],
  )

  const content = (
    <div className="flex flex-1 flex-col justify-center gap-6 p-8 lg:p-12">
      <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900">{project.name}</h2>
      <p className="max-w-md text-base leading-relaxed text-gray-600">{project.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} icon={tag.icon} />
        ))}
      </div>
    </div>
  )

  const imageGallery = (
    <div className="relative flex-1 min-h-[300px] lg:min-h-[400px] bg-gray-100 rounded-2xl overflow-hidden">
      {project.images.map((src, index) => {
        let status: "active" | "previous" | "inactive" = "inactive"
        if (index === activeIndex) status = "active"
        else if (index === prevIndex) status = "previous"

        return (
          <div key={src} className="absolute inset-0 h-full w-full" data-image-status={status}>
            <div className={`absolute inset-0 bg-gray-200 animate-pulse ${imageLoaded[index] ? "hidden" : "block"}`} />
            <Image
              src={src || "/placeholder.svg"}
              alt={`${project.name} screenshot ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
              priority={index === 0}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        )
      })}

      {/* Image indicators */}
      {project.images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {project.images.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div
      className="group rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:border-gray-100 p-3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={project.href} className="flex flex-col lg:flex-row h-full">
        {project.layout === "imageLeft" ? (
          <>
            <div className="lg:flex-[3]">{imageGallery}</div>
            <div className="lg:flex-[2]">{content}</div>
          </>
        ) : (
          <>
            <div className="lg:flex-[2]">{content}</div>
            <div className="lg:flex-[3]">{imageGallery}</div>
          </>
        )}
      </Link>
    </div>
  )
}
