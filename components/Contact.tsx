import React from 'react';

export default function Contact(){
  return (
    <section id="contact" className="mt-16">
      <h3 className="text-2xl font-semibold">Let's Build Something Secure.</h3>
      <p className="text-slate-300 mt-2">Have an opportunity, project, or security-focused role? I'd love to connect.</p>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="card p-4 rounded-lg">
          <div className="font-semibold">Email</div>
          <div className="text-slate-300 mt-1">ravitejamusku198@gmail.com</div>
        </div>
        <div className="card p-4 rounded-lg">
          <div className="font-semibold">Phone</div>
          <div className="text-slate-300 mt-1">+91 9491147482</div>
        </div>
        <div className="card p-4 rounded-lg">
          <div className="font-semibold">Location</div>
          <div className="text-slate-300 mt-1">Hyderabad, Telangana, India</div>
        </div>
      </div>
    </section>
  );
}
