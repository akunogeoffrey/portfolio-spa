import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !tech) return;

    addProject({
      id: Date.now(),
      title,
      description,
      tech,
    });

    setTitle("");
    setDescription("");
    setTech("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Add New Project</h2>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Technologies Used"
        value={tech}
        onChange={(e) => setTech(e.target.value)}
      />

      <textarea
        placeholder="Project Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;
