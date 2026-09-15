import React from 'react';

export default function Experience(){
  return (
    <section id="experience" className="mt-16">
      <h3 className="text-2xl font-semibold">Experience</h3>
      <div className="mt-6">
        <div className="card p-4 rounded-lg">
          <div className="flex items-start justify-between">
            <div>
              <div className="font-semibold">Graduate Engineer Apprentice</div>
              <div className="text-sm text-slate-300">Electronics Corporation of India Limited (ECIL) — Hyderabad</div>
              <div className="text-sm text-amber-300 mt-1">March 2025 – March 2026</div>
            </div>
          </div>
          <ul className="mt-3 text-slate-300 list-disc pl-5">
            <li>Implemented secure user authentication and RBAC</li>
            <li>Restricted data access according to user roles</li>
            <li>Configured and hardened XAMPP server environment</li>
            <li>Optimized SQL queries and backend workflows</li>
            <li>Designed responsive role-aware UI</li>
          </ul>
        </div>
      </div>

      <h4 className="text-xl font-semibold mt-8">Education</h4>
      <div className="mt-3 grid md:grid-cols-2 gap-4">
        <div className="card p-4 rounded-lg">
          <div className="font-semibold">B.Tech – Computer Science Engineering</div>
          <div className="text-sm text-slate-300">Holy Mary Institute of Technology and Science — 2020 – 2023</div>
        </div>
        <div className="card p-4 rounded-lg">
          <div className="font-semibold">Diploma – Electrical and Electronics Engineering</div>
          <div className="text-sm text-slate-300">State Board of Technical Education, Telangana — 2017 – 2020</div>
        </div>
      </div>
    </section>
  );
}
