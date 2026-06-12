// Build-time codegen: turn projects/*.md into one JSON file that gets bundled
// into the app, so NOTHING reads the filesystem at request time.
//
// Why this exists: Cloudflare Workers (and most non-Vercel runtimes) have no
// project filesystem at request time. Reading projects/*.md with fs.readFileSync
// works in `next dev` (Node, your repo is right there) but returns "Not found"
// on the deployed Worker. Importing this JSON makes the content part of the
// code bundle instead, which works everywhere: dev, build, preview, production.
//
// Runs automatically via the "predev" / "prebuild" npm scripts. Output is
// gitignored and regenerated on every build.
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const projectsDir = join(repoRoot, "projects");
const outFile = join(repoRoot, "src", "generated", "projects-content.json");

const records = readdirSync(projectsDir)
  .filter((file) => file.endsWith(".md"))
  .map((file) => {
    const id = file.replace(/\.md$/, "");
    const { data, content } = matter(readFileSync(join(projectsDir, file), "utf8"));
    // Spread all frontmatter, then add id + raw body. Consumers pick what they need.
    return { id, ...data, content };
  })
  .sort((a, b) => a.id.localeCompare(b.id));

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, JSON.stringify(records, null, 2) + "\n");

console.log(
  `Generated ${records.length} project records -> src/generated/projects-content.json`,
);
