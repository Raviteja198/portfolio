import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const node = menuRef.current;
    if (!node) return;
    const elems = Array.from(node.querySelectorAll<HTMLElement>('a, button, [tabindex]:not([tabindex="-1"])')).filter(Boolean);
    const first = elems[0];
    const last = elems[elems.length - 1];
    first?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (e.key === 'Tab') {
        if (!elems.length) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(()=>{
    if(open){
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return ()=>{ document.body.style.overflow = prev; };
    }
  }, [open]);

  return (
    <header className="sticky top-0 z-40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold">RAVITEJA.M</div>
        <nav className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <a className="inline-block px-4 py-2 border rounded-md text-sm hover:shadow-[0_8px_30px_rgba(0,240,255,0.08)]" href="/resume.pdf" download>Download Resume</a>
        </div>
        <button aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(v=>!v)} className="md:hidden p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <motion.nav initial={{y:-10, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.25}} className="md:hidden">
        {open && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-50">
            <div onClick={()=>setOpen(false)} className="fixed inset-0 bg-black/80 z-40" aria-hidden="true" />
            <motion.div ref={menuRef} role="dialog" aria-modal="true" initial={{x:'100%'}} animate={{x:0}} exit={{x:'100%'}} transition={{type: reduce ? 'tween' : 'spring', stiffness: 300}} className="fixed right-0 top-0 bottom-0 h-full w-full sm:w-80 bg-[#071018] shadow-2xl p-6 z-50 overflow-y-auto">
              <div className="flex flex-col h-full">
                <div className="mb-4 flex items-center justify-between">
                  <div className="font-semibold">RAVITEJA.M</div>
                  <button aria-label="Close menu" onClick={()=>setOpen(false)} className="p-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-200"><path d="M18 6L6 18M6 6l12 12"/></svg>
                  </button>
                </div>
                <nav className="flex-1 flex flex-col gap-4 text-lg">
                  <a href="#home" onClick={()=>setOpen(false)}>Home</a>
                  <a href="#about" onClick={()=>setOpen(false)}>About</a>
                  <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
                  <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
                  <a href="#experience" onClick={()=>setOpen(false)}>Experience</a>
                  <a href="#security" onClick={()=>setOpen(false)}>Security</a>
                  <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
                </nav>
                <div className="mt-4">
                  <a href="/resume.pdf" download className="block w-full text-center px-3 py-2 bg-cyan-600 text-black rounded">Download Resume</a>
                  <div className="mt-3 border-t pt-3 text-sm text-slate-300">Social<br/><a href="#" className="block mt-2">GitHub (coming soon)</a><a href="#" className="block mt-1">LinkedIn (coming soon)</a></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </motion.nav>
    </header>
  );
}
