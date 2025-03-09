import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
