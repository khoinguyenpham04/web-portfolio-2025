import type { Project } from '@/components/FeaturedWork/types';
import { getIcon } from '@/lib/getIcon';
import { getAllProjectContent } from '@/lib/projects-content';

function compareProjects(a: Project, b: Project) {
  // Sort by priority first (lower = higher rank), then by date (newest first)
  const priorityA = a.priority ?? Infinity;
  const priorityB = b.priority ?? Infinity;

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  const dateA = a.date ? new Date(a.date).getTime() : 0;
  const dateB = b.date ? new Date(b.date).getTime() : 0;
  return dateB - dateA;
}

export function getProjectsData(): Project[] {
  const allProjectsData = getAllProjectContent().map((record) => {
    const project: Project = {
      id: record.id,
      name: record.title,
      description: record.description,
      tags: (record.tags ?? []).map((tag) => ({ name: tag, icon: getIcon(tag) ?? undefined })),
      images: record.images ?? [],
      href: `/projects/${record.id}`,
      layout: record.layout ?? 'imageRight',
      brandIcon: record.brandIcon ?? undefined,
      category: record.category || "project",
      date: record.date || null,
      // Hackathon-specific fields
      awards: record.awards as Project['awards'],
      hackathonName: record.hackathonName || undefined,
      displayDate: record.displayDate || undefined,
      priority: record.priority ?? undefined,
    };
    return project;
  });

  allProjectsData.sort(compareProjects);

  return allProjectsData;
}
