import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Projects(){
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [reveal, setReveal] = useState(false);

  function handlePointerMove(e: React.PointerEvent) {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--mx', `${x}%`);
    el.style.setProperty('--my', `${y}%`);
    el.classList.add('is-active');
  }

  function handlePointerLeave() {
    const el = cardRef.current;
    if (!el) return;
    el.classList.remove('is-active');
  }

  function handlePointerDown(e: React.PointerEvent) {
    const tgt = e.target as HTMLElement | null;
    if (tgt && tgt.closest && tgt.closest('a, button, [role="button"], input, textarea')) return;
    setReveal(true);
  }
  function handlePointerUp() { /* keep reveal until user closes */ }
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-2xl font-semibold">Featured Project</h3>
      <motion.div
        ref={cardRef}
        initial={{opacity:0, y:6}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
        transition={{delay:0.02}}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="mt-6 card card--orange p-6 rounded-lg project-card cursor-glow"
      >
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <div className="inline-block px-2 py-1 bg-violet-600/20 rounded text-sm">FULL-STACK + APPLICATION SECURITY</div>
            <h4 className="text-xl font-semibold mt-3">People's Youth Management System</h4>
            <p className="mt-2 text-slate-300">A full-stack management platform for member payments, loans, charity records, and group funds with secure authentication and role-based access.</p>
            <div className="mt-3 flex gap-2">
              <a href="https://www.youthmanagment.com/login" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transform transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400">Live Demo</a>
              <a href="#" onClick={(e) => e.stopPropagation()} className="px-3 py-1 border rounded text-slate-200">GitHub</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <pre className="text-sm bg-black/20 p-3 rounded">AUTHENTICATION
  ADMIN → USER MANAGEMENT → OTP → MEMBER → OTP LOGIN → PASSWORD CHANGE</pre>
          </div>
          <div className={`project-reveal ${reveal ? 'visible' : ''}`}>
            <div className="meta">Project details</div>
            <p className="mt-2">Solo-developed and delivered a youth organization management app: admin/member dashboards, payments, PDF receipts, and reporting. Role-based access and secure auth.</p>
            <div className="mt-3 flex gap-2">
              <a href="#" onClick={(e) => e.stopPropagation()} className="px-3 py-1 rounded-md bg-gradient-to-r from-indigo-500 to-teal-400 text-white font-medium shadow hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-300">Live demo</a>
              <a href="#" onClick={(e) => e.stopPropagation()} className="px-3 py-1 border rounded text-slate-200">Repo</a>
            </div>
          </div>
        </div>
      </motion.div>

      <h4 className="text-xl font-semibold mt-8">Student Information Management System</h4>
      <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.04}} className="mt-3 card p-4 rounded-lg">
        <p className="text-slate-300">Python desktop app with secure login, session-based access and face recognition attendance (OpenCV).</p>
      </motion.div>
    </section>
  );
}
