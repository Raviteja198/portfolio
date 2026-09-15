import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const cards = [
  {title:'Cybersecurity', items:['OWASP Top 10','Authentication','RBAC','Session Management']},
  {title:'Application Security', items:['Vulnerability Testing','OWASP ZAP','Burp Suite','Access Control']},
  {title:'Development', items:['Python','JavaScript','TypeScript','PHP']},
  {title:'Backend', items:['Django','DRF','Next.js','REST APIs']},
  {title:'Database', items:['PostgreSQL','MySQL','Prisma']}
];

export default function RecruiterSnapshot(){
  const reduce = useReducedMotion();
  return (
    <section className="mt-12">
      <h3 className="text-2xl font-semibold">What I Bring</h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {cards.map((c,i)=> (
          <motion.div key={c.title} whileHover={reduce ? {} : {scale:1.02}} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="card p-4 rounded-lg">
            <h4 className="font-semibold">{c.title}</h4>
            <ul className="mt-3 text-sm text-slate-300 space-y-1">
              {c.items.map(i=> <li key={i}>• {i}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
