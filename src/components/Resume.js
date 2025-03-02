import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-16 bg-white text-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">Resume</h2>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow mb-8">
          <h3 className="text-2xl font-semibold">Ruru Rajbhandari</h3>
          <p className="mt-2">
            <a href="mailto:rajbhandarir4@gmail.com" className="underline text-blue-600">
              rajbhandarir4@gmail.com
            </a>{' '}
            | 360-528-1981
          </p>
          <p className="mt-1">
            <a
              href="https://www.linkedin.com/in/ruru-rajbhandari/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-blue-600"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>

        {/* Education */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow mb-8">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="font-bold">Whitman College | Walla Walla, WA</p>
          <p className="italic">Graduation Date: 05/25</p>
          <p className="mt-2">B.A. - Computer Science, Minor in Data Science</p>
          <p className="mt-1 text-sm text-gray-600">
            Coursework: Data Structures, Algorithms, Linear Algebra, Data Science, etc.
          </p>
        </div>

        {/* Experience */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow mb-8">
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          {/* Amazon Investor Coalition */}
          <div className="mb-4">
            <p className="font-bold">
              Data Analyst Intern | Amazon Investor Coalition <span className="text-sm">(05/24 - 08/24)</span>
            </p>
            <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
              <li>Developed Python-based data automation scripts in Excel (Pandas, OpenPyXL) for $50M in conservation funding.</li>
              <li>Analyzed 100+ sustainable projects with Excel (Power Query, Pivot Tables).</li>
              <li>Created data visualizations with Excel & Power BI for investment distributions.</li>
            </ul>
          </div>
          {/* WA State Dept. of Ecology */}
          <div>
            <p className="font-bold">
              Coastal Data Analyst Intern | WA State Dept. of Ecology <span className="text-sm">(05/23 - 08/23)</span>
            </p>
            <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
              <li>Optimized UIs with HTML, CSS, JS to enhance user interaction & performance.</li>
              <li>Utilized statistical analysis for environmental database accuracy.</li>
              <li>Encoded GPS elevation & beach data for coastal erosion policy development.</li>
              <li>Automated coastal data classification with MATLAB.</li>
            </ul>
          </div>
        </div>

        {/* Projects */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow mb-8">
          <h3 className="text-xl font-semibold mb-2">Projects</h3>
          <div className="mb-4">
            <p className="font-bold">AML Monitoring Framework</p>
            <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
              <li>Developed a Python-based financial transaction data analysis framework to identify suspicious activity.</li>
              <li>Integrated an SQLite database for efficient transaction management, improving processing time.</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Research Study Manager</p>
            <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
              <li>Full-stack React/Node.js app for campus research management (CAS & Google OAuth for SSO).</li>
              <li>Scalable, modular architecture to handle participant recruitment & scheduling.</li>
            </ul>
          </div>
        </div>

        {/* Skills & Interests */}
        <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-2">Skills & Interests</h3>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-700 space-y-1">
            <li><strong>Programming:</strong> Python, R, SQL, JavaScript, HTML, CSS, C++, Matlab</li>
            <li><strong>Tools:</strong> Excel, SAP, Figma, PowerPoint, Adobe Creative Suite</li>
            <li><strong>Interests:</strong> Competitive D3 Swimming, Kathak Dancing, Digital Art</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
