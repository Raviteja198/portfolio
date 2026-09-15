import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Projects(){
  const reduce = useReducedMotion();
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-2xl font-semibold">Featured Project</h3>
      <motion.div initial={{opacity:0, y:6}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.02}} className="mt-6 card p-6 rounded-lg">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <div className="inline-block px-2 py-1 bg-violet-600/20 rounded text-sm">FULL-STACK + APPLICATION SECURITY</div>
            <h4 className="text-xl font-semibold mt-3">People's Youth Management System</h4>
            <p className="mt-2 text-slate-300">A full-stack management platform for member payments, loans, charity records, and group funds with secure authentication and role-based access.</p>
            <div className="mt-3 flex gap-2">
              <a href="https://www.youthmanagment.com/login" className="px-3 py-1 bg-cyan-600 rounded text-black">Live Demo</a>
              <a href="#" className="px-3 py-1 border rounded text-slate-200">GitHub</a>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <pre className="text-sm bg-black/20 p-3 rounded">AUTHENTICATION\n  ADMIN → USER MANAGEMENT → OTP → MEMBER → OTP LOGIN → PASSWORD CHANGE</pre>
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
