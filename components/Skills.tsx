import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const sections = [
  {title:'Application Security', items:['OWASP Top 10','Authentication & Session Management','Access Control','RBAC','Least Privilege','Security Misconfiguration','Application Security Testing']},
  {title:'Security Testing', items:['OWASP ZAP','Burp Suite','Vulnerability Testing','Manual Testing','Security Auditing']},
  {title:'Networking', items:['TCP/IP','DNS','Networking Fundamentals']},
  {title:'Linux & Environment', items:['Linux Fundamentals','Kali Linux (Learning)','VirtualBox (Learning)']}
];

export default function Skills(){
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="mt-16">
      <h3 className="text-2xl font-semibold">Cybersecurity Arsenal</h3>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {sections.map((s,i)=> (
          <motion.div key={s.title} className="card p-4 rounded-lg" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}} whileHover={reduce?{}:{scale:1.01}}>
            <h4 className="font-semibold">{s.title}</h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {s.items.map(i=> (
                <span key={i} className="px-3 py-1 rounded-full bg-white/3 text-sm">{i}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-10">Full-Stack Development</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div className="card p-4 rounded-lg" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.02}}>
          <h4 className="font-semibold">Languages</h4>
          <div className="mt-2 flex flex-wrap gap-2">{['Python','JavaScript','TypeScript','PHP','SQL'].map(t=> <span key={t} className="px-3 py-1 rounded-full bg-white/3 text-sm">{t}</span>)}</div>
        </motion.div>
        <motion.div className="card p-4 rounded-lg" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.04}}>
          <h4 className="font-semibold">Frameworks & Libraries</h4>
          <div className="mt-2 flex flex-wrap gap-2">{['Django','DRF','Next.js','React','Tailwind CSS','Tkinter','OpenCV'].map(t=> <span key={t} className="px-3 py-1 rounded-full bg-white/3 text-sm">{t}</span>)}</div>
        </motion.div>
        <motion.div className="card p-4 rounded-lg" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} transition={{delay:0.06}}>
          <h4 className="font-semibold">Tools & Databases</h4>
          <div className="mt-2 flex flex-wrap gap-2">{['PostgreSQL','MySQL','Prisma','Git','GitHub','Vercel','VS Code'].map(t=> <span key={t} className="px-3 py-1 rounded-full bg-white/3 text-sm">{t}</span>)}</div>
        </motion.div>
      </div>
    </section>
  );
}
