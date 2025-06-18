import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

const projectsDirectory = path.join(process.cwd(), 'projects');

export async function generateStaticParams() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => ({
    id: fileName.replace(/\.md$/,''),
  }));
}

async function getProjectData(id: string) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    data,
    content,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectData = await getProjectData(id);

  return (
    <div className="prose mx-auto py-12">
      <h1>{projectData.data.title}</h1>
      <ReactMarkdown>{projectData.content}</ReactMarkdown>
    </div>
  );
}
