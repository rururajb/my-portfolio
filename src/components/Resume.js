import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-700">Resume</h2>
        
        <div className="max-w-3xl mx-auto">
          {/* Contact Info */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-purple-800">Ruru Rajbhandari</h3>
            <p>
              <a
                href="mailto:rajbhandarir4@gmail.com"
                className="text-purple-600 hover:underline"
              >
                rajbhandarir4@gmail.com
              </a>{' '}
              | 360-528-1981 |{' '}
              <a
                href="https://www.linkedin.com/in/ruru-rajbhandari/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:underline"
              >
                LinkedIn
              </a>
            </p>
          </div>

          {/* Education */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-2 text-purple-700">Education</h4>
            <p className="font-semibold">Whitman College | Walla Walla, WA (Graduation: 05/25)</p>
            <p>B.A. - Computer Science, Minor in Data Science</p>
            <p className="text-sm text-gray-600">
              Coursework: Data Structures, Algorithms, Linear Algebra, Data Science, etc.
            </p>
          </div>

          {/* Experience */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-2 text-purple-700">Experience</h4>
            <div className="mb-4">
              <p className="font-semibold">
                Data Analyst Intern | Amazon Investor Coalition (05/24 - 08/24)
              </p>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                <li>Python-based data automation scripts in Excel for $50M in conservation funding.</li>
                <li>Analyzed 100+ sustainable projects using Excel’s Power Query, Pivot Tables.</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">
                Coastal Data Analyst Intern | WA State Dept. of Ecology (05/23 - 08/23)
              </p>
              <ul className="list-disc list-inside ml-4 text-sm text-gray-700">
                <li>Optimized user interfaces with HTML, CSS, JavaScript.</li>
                <li>Automated data classification using MATLAB.</li>
              </ul>
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="mb-8">
            <h4 className="text-xl font-bold mb-2 text-purple-700">Skills & Interests</h4>
            <p className="text-sm text-gray-700">
              Programming: Python, R, SQL, JavaScript, HTML, CSS, C++, Matlab...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
