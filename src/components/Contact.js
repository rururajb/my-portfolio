import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50 text-slate-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg">
          Email:{' '}
          <a href="mailto:rajbhandarir4@gmail.com" className="underline text-blue-600">
            rajbhandarir4@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
