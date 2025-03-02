import React from 'react';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-slate-800"
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl text-center max-w-2xl">
        I’m excited to share my projects, experience, and resume with you. Feel free to explore!
      </p>
    </section>
  );
}

export default Home;
