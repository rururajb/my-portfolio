import React from 'react';
import MinimalNav from './components/MinimalNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="text-gray-800">
      <MinimalNav />

      <Hero />

      <About />
      <Projects />
      <Resume />
      <Contact />

    </div>
  );
}

export default App;
