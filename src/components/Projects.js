import React from 'react';

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 text-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project Card */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">AML Monitoring Framework</h3>
            <p className="text-gray-700 mb-2">
              Developed a Python-based framework to analyze financial transaction data, integrated with SQLite.
            </p>
          </div>

          {/* Another Project Card */}
          <div className="bg-white rounded shadow p-6">
            <h3 className="text-2xl font-semibold mb-2">Research Study Manager</h3>
            <p className="text-gray-700 mb-2">
              Created a full-stack web application for campus research management with CAS & Google OAuth for SSO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
