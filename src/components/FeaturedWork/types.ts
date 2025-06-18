import type { JSX } from "react"

export interface Project {
  id: string
  name: string
  description: string
  tags: {
    name: string
    icon?: JSX.Element
  }[]
  images: string[]
  href: string
  layout: "imageLeft" | "imageRight"
  brandIcon?: string
  category?: "project" | "hackathon"
}
