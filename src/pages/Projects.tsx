import type { Project } from "@/data/projects.ts";
import { useTranslation } from "react-i18next";

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects: projects }: ProjectsProps) {
  const { t } = useTranslation()

  return (
    <div>
      <h1 className="text-6xl font-bold text-center">{t('projects')}</h1>
      <p className="text-2xl text-center">Here are some of my projects.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="text-1xl text-center mt-8">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>{project.tags.join(", ")}</p>
            <a className="text-blue-500 hover:underline"
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
