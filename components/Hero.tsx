import React from 'react';
import VisualNode from './VisualNode';
import { motion } from 'framer-motion';

export default function Hero(){
  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
        <div>
          <div className="inline-block px-3 py-1 rounded-md text-xs bg-emerald-600/20 text-emerald-300 mb-4">OPEN TO CYBERSECURITY OPPORTUNITIES</div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight">RAVITEJA MUSKU</h1>
          <h2 className="text-2xl text-cyan-200 font-semibold mt-2">Cybersecurity Analyst · Application Security Enthusiast</h2>

          <motion.p initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:0.15}} className="mt-6 text-lg leading-relaxed max-w-xl">
            <strong className="block text-xl text-cyan-100">I build applications, understand how they work, and I'm learning to break and secure them.</strong>
            <span className="block mt-3 text-slate-300">Cybersecurity-focused developer with a full-stack background and hands-on experience in authentication, RBAC, application security, Linux, networking, and web technologies.</span>
          </motion.p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md bg-cyan-500 text-black font-medium">Explore My Work</a>
            <a href="#contact" className="px-4 py-2 rounded-md border border-slate-600 text-slate-200">Download Resume</a>
          </div>

          <div className="mt-6 flex gap-4 text-slate-300">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="mailto:ravitejamusku198@gmail.com">Email</a>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-full max-w-md card p-6">
            <VisualNode />
            <div className="mt-4 text-sm text-slate-300">Understanding architecture → finding attack surfaces → securing applications</div>
          </div>
        </div>
      </div>
    </section>
  );
}
