import React from 'react';

function Header() {
  return (
    <header className="bg-slate-800 text-white p-4 fixed w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="font-bold text-xl">My Portfolio</div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#resume" className="hover:underline">Resume</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
