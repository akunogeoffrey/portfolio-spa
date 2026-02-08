import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  return (
    <section className="project-list">
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))
      )}
    </section>
  );
}

export default ProjectList;
