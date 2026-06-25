import type { Project } from "@/data/projects.ts";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects: projects }: ProjectsProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t('projects')}</h1>
      <p>Here are some of my projects.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.tags.join(", ")}</p>
            <a 
              href={project.github}
              target="_blank"
              rel="noreferrer noopener">GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
