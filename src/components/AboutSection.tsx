import Image from "next/image";
import React from "react";
import { getIcon } from "@/lib/getIcon";

const Tag: React.FC<{ name: string; icon?: React.ReactNode }> = ({
  name,
  icon,
}) => (
  <div className="flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800">
    {icon}
    <span>{name}</span>
  </div>
);

type Skill = {
  name: string;
  iconName?: string;
};

const skills: { [key: string]: Skill[] } = {
  "Languages": [
    { name: "Python", iconName: "Python" },
    { name: "TypeScript", iconName: "TypeScript" },
    { name: "JavaScript", iconName: "JavaScript" },
    { name: "Java", iconName: "Java" },
    { name: "C++" },
    { name: "SQL" },
    { name: "HTML/CSS", iconName: "HTML/CSS" },
    { name: "C" },
  ],
  "Frameworks & Libraries": [
    { name: "Next.js", iconName: "Next.js" },
    { name: "React.js", iconName: "React" },
    { name: "Node.js" },
    { name: "Tailwind CSS", iconName: "Tailwind CSS" },
    { name: "Framer Motion" },
    { name: "Qt" },
    { name: "PartyKit", iconName: "PartyKit" },
    { name: "OpenAI Whisper", iconName: "OpenAI" },
  ],
  "Developer Tools & Platforms": [
    { name: "Docker", iconName: "Docker" },
    { name: "Git", iconName: "Git" },
    { name: "GitHub", iconName: "GitHub" },
    { name: "GitLab", iconName: "GitLab" },
    { name: "Vercel" },
    { name: "Linux", iconName: "Linux" },
    { name: "Windows", iconName: "Windows" },
    { name: "LaTeX" },
    { name: "AWS", iconName: "Amazon EC2" },
    { name: "Google Analytics", iconName: "Google Analytics" },
    { name: "Mapbox", iconName: "Mapbox GL" },
    { name: "Clerk", iconName: "Clerk" },
  ],
  "Database & BaaS": [
    { name: "PostgreSQL", iconName: "PostgreSQL" },
    { name: "Supabase", iconName: "Supabase" },
    { name: "MongoDB", iconName: "MongoDB" },
    { name: "MySQL" },
    { name: "SQLite" },
    { name: "Firebase" },
  ],
};

export default function AboutSection() {
  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto max-w-6xl px-8 pb-8">
        <hr className="mx-auto my-16 w-full border-t border-gray-200" />
        {/* Education Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-gray-400">
            Education
          </h2>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Education Details */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
                  University of Manchester
                </h3>
                <p className="mb-4 text-xl text-gray-500 md:text-2xl">
                  BSc. (Hons) Computer Science — Manchester, United Kingdom
                </p>
                <p className="mb-6 text-lg text-gray-400">
                  Sep 2023 – August 2027
                </p>
                <div className="space-y-4 text-gray-500">
                  <p>
                    Coursework: Data Science, Operating Systems, Computer
                    Engineering & Architecture, Discrete Mathematics.
                  </p>
                  <p>
                    Activities: Student Representative, Google Developer Student Club, Hyperloop Manchester, Manchester Robotics Society, Hackchester - Cyber Security, Manchester Trading Society, MUDSS.
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Image */}
            <div className="relative">
              <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/about/Lanyard/uom.jpg"
                  alt="Manchester Campus in Summer"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-sm italic text-gray-500">
                Manchester Campus in Summer
              </p>
            </div>
          </div>
        </div>

        <hr className="mx-auto my-16 w-full border-t border-gray-200" />

        {/* Technologies & Skills Section */}
        <div className="mb-16">
          <h2 className="mb-12 text-sm font-medium uppercase tracking-wider text-gray-400">
            Technologies & Skills
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {Object.entries(skills).map(([category, tech]) => (
              <div key={category} className="rounded-xl bg-gray-50 p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-900">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.map((item) => (
                    <Tag
                      key={item.name}
                      name={item.name}
                      icon={item.iconName ? getIcon(item.iconName) : undefined}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
