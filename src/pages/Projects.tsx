import type { Project } from "@/data/projects.ts";
import { useTranslation } from "react-i18next";
import Page from "@/components/layout/Page";
import Panel from "@/components/ui/Panel";
import Tag from "@/components/ui/Tag";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <Page
      eyebrow="Work"
      title={t("projects")}
      intro="A few things I've built recently, mostly personal projects."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <Panel className="flex h-full flex-col">
              <h3 className="font-display text-lg font-semibold">
                {project.name}
              </h3>
              <p className="mt-2 flex-1 text-sm text-text-muted">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <a
                className="mt-5 inline-flex w-fit items-center gap-1 font-mono text-xs tracking-widest text-accent uppercase hover:underline"
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                View on GitHub →
              </a>
            </Panel>
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default Projects;
