import React from 'react';
import { motion } from 'framer-motion';

export default function About(){
  const steps = ['BUILD','UNDERSTAND','TEST','FIND','FIX','SECURE'];
  return (
    <section id="about" className="mt-16 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h3 className="text-2xl font-semibold">A Developer Who Thinks About Security</h3>
        <p className="mt-4 text-slate-300">I’m an aspiring Cybersecurity Analyst with a full-stack development background and a strong interest in Application Security.
        I have hands-on experience building applications with authentication, role-based access control, databases, APIs, and deployment workflows.
        That development background gives me a practical understanding of how applications are designed and where security weaknesses can appear.
        I’m now applying that knowledge to cybersecurity through OWASP-based security auditing, vulnerability testing, Linux, networking fundamentals, and tools such as OWASP ZAP and Burp Suite.
        My goal is to begin my career in cybersecurity and grow through hands-on security work.</p>
      </div>
      <div>
        <div className="card p-6 rounded-lg">
          <div className="flex flex-col gap-4">
            {steps.map((s,i)=> (
              <motion.div key={s} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center font-mono">{i+1}</div>
                <div>
                  <div className="font-semibold">{s}</div>
                  <div className="text-sm text-slate-300">{s === 'BUILD' ? 'Create functional applications' : s === 'UNDERSTAND' ? 'Map architecture & flows' : s === 'TEST' ? 'Security testing and recon' : s === 'FIND' ? 'Identify weaknesses' : s === 'FIX' ? 'Remediate code and config' : 'Validate secure state'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
