import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Project } from '@/components/FeaturedWork/types';
import { getIcon } from '@/lib/getIcon';

const projectsDirectory = path.join(process.cwd(), 'projects');

export function getProjectsData(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory);
  const allProjectsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    const project: Project = {
      id,
      name: matterResult.data.title,
      description: matterResult.data.description,
      tags: matterResult.data.tags.map((tag: string) => ({ name: tag, icon: getIcon(tag) })),
      images: matterResult.data.images,
      href: `/projects/${id}`,
      layout: matterResult.data.layout,
      brandIcon: matterResult.data.brandIcon,
    };
    return project;
  });
  return allProjectsData;
}
