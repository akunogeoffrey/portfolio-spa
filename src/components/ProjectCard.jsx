function ProjectCard({ title, description, tech }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{tech}</span>
    </div>
  );
}

export default ProjectCard;
