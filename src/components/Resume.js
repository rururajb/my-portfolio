// src/components/Resume.js
import React from 'react';

function Resume() {
  return (
    <section id="resume" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Resume</h2>

        <div className="mb-8">
          <p className="text-lg font-semibold">Ruru Rajbhandari</p>
          <p>rajbhandarir4@gmail.com | 360-528-1981</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/ruru-rajbhandari/" target="_blank" rel="noopener noreferrer" className="underline text-blue-600">Profile</a></p>
        </div>
      </div>
    </section>
  );
}

export default Resume;
