import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Ruru Rajbhandari. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
