import { projects } from "../data/projects.ts";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
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