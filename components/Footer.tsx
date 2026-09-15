import React from 'react';

export default function Footer(){
  return (
    <footer className="mt-20 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold">Raviteja Musku</div>
          <div className="text-sm text-slate-400">Cybersecurity Analyst | Application Security Enthusiast</div>
        </div>
        <div className="text-sm text-slate-400">© 2026 Raviteja Musku · Built with Next.js & TypeScript</div>
      </div>
    </footer>
  );
}
