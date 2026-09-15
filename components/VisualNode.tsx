import React from 'react';
import { motion } from 'framer-motion';

const nodes = [
  'AUTHENTICATION',
  'AUTHORIZATION',
  'DATABASE',
  'API',
  'USER',
  'SERVER'
];

export default function VisualNode(){
  return (
    <div className="w-full flex justify-center items-center overflow-hidden">
      <svg viewBox="0 0 400 300" className="w-full max-w-full h-auto" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
        <g>
          <circle cx="200" cy="150" r="44" fill="url(#g1)" opacity="0.12" />
          <text x="200" y="155" textAnchor="middle" fontSize="10" fill="#cfefff" fontWeight={700}>APPLICATION</text>

          {nodes.map((n,i)=>{
            const angle = (i/ nodes.length) * Math.PI * 2;
            const x = 200 + Math.cos(angle) * 110;
            const y = 150 + Math.sin(angle) * 80;
            return (
              <g key={n}>
                <line x1="200" y1="150" x2={x} y2={y} stroke="rgba(0,229,255,0.18)" strokeWidth={1} />
                <circle cx={x} cy={y} r={18} fill="#071023" stroke="url(#g1)" strokeWidth={1} />
                <text x={x} y={y+4} textAnchor="middle" fontSize="8" fill="#cfefff">{n}</text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
