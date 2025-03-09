import React from 'react';

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center bg-pastelPurple" 
      // or use bg-[var(--pastel-purple)] if you prefer
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center">
        
        {/* Text content */}
        <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-4">
            Hi, my name is <span className="text-purple-900">Ruru</span>.
          </h1>
          <p className="text-lg md:text-xl text-purple-800 mb-6">
            I’m an independent creative developer from [Location].
          </p>
          <p className="text-sm md:text-base text-purple-700 mb-8">
            [Add a short, punchy tagline or mission statement here...]
          </p>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            Hire Me
          </button>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          {/* If avatar.svg is in public/ folder */}
          <img
            src="/avatar.svg"
            alt="Avatar"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
