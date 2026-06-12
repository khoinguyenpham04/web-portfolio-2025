import projectsContent from "@/generated/projects-content.json";

export interface ProjectAward {
  label: string;
  variant: string;
}

// Shape of one record in src/generated/projects-content.json.
// Generated from projects/*.md (frontmatter + body) by
// scripts/generate-projects-content.mjs. This is the single source of truth
// for project data at runtime — no filesystem reads anywhere.
export interface ProjectContentRecord {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  images?: string[];
  layout?: "imageLeft" | "imageRight";
  brandIcon?: string | null;
  category?: "project" | "hackathon";
  date?: string | null;
  liveUrl?: string;
  githubUrl?: string;
  hackathonName?: string;
  displayDate?: string;
  priority?: number;
  awards?: ProjectAward[];
  content: string;
}

const records = projectsContent as unknown as ProjectContentRecord[];

export function getAllProjectContent(): ProjectContentRecord[] {
  return records;
}

export function getProjectContent(id: string): ProjectContentRecord | undefined {
  return records.find((record) => record.id === id);
}
