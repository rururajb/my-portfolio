import React from 'react';

function MinimalNav() {
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md">
      <button className="text-gray-800 font-semibold hover:opacity-75">
        MENU
      </button>
      <button className="text-gray-800 font-semibold hover:opacity-75">
        HIRE ME
      </button>
    </nav>
  );
}

export default MinimalNav;
