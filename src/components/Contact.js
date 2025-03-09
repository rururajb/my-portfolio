import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-pastelPurple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 text-purple-700">Contact Me</h2>
        <p className="text-lg text-purple-800 mb-4">
          Feel free to reach out for collaborations or any questions!
        </p>
        <a
          href="mailto:rajbhandarir4@gmail.com"
          className="px-8 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
        >
          Send Email
        </a>
      </div>
    </section>
  );
}

export default Contact;
