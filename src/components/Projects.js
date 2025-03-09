import React from 'react';

function Projects() {
  const projects = [
    {
      title: "Project One",
      description: "Brief description of project one. Maybe a link or image."
    },
    {
      title: "Project Two",
      description: "Brief description of project two. Another link or image."
    },
  ];

  return (
    <section id="projects" className="py-20 bg-pastelBlue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-2 text-blue-800">
                {project.title}
              </h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
