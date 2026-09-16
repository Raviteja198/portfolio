"use client";

import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const PALETTE = [
  "rgba(139,92,246,0.85)", // violet
  "rgba(6,182,212,0.85)", // cyan
  "rgba(236,72,153,0.85)", // pink
];

type Splat = { x: number; y: number; r: number; life: number; color: string };

export default function HeavySplashCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const splatsRef = useRef<Splat[]>([]);
  const rafRef = useRef<number | null>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return; // respect reduced motion
    if (typeof window === "undefined") return;
    if (window.matchMedia && window.matchMedia("(pointer: coarse)").matches) return; // skip on touch

    const canvas = document.createElement("canvas");
    canvasRef.current = canvas;
    canvas.style.position = "fixed";
    canvas.style.left = "0";
    canvas.style.top = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const _ctx = ctx;

    function resize() {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      _ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener("resize", resize);

    function addSplat(x: number, y: number, force = 1) {
      const r = 24 + Math.min(80, 80 * force);
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      splatsRef.current.push({ x, y, r, life: 1.0, color });
    }

    function onPointer(e: PointerEvent) {
      // only track mouse pointers
      if ((e as any).pointerType && (e as any).pointerType !== "mouse") return;
      addSplat(e.clientX, e.clientY, e.pressure || 0.75);
    }

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("pointerdown", onPointer, { passive: true });

    function render() {
      rafRef.current = requestAnimationFrame(render);
      // fade canvas
      _ctx.clearRect(0, 0, canvas.width, canvas.height);

      const splats = splatsRef.current;
      for (let i = splats.length - 1; i >= 0; i--) {
        const s = splats[i];
        // draw radial gradient
        const grd = _ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
        const startColor = s.color.replace(/\)$/, ', 0.95)');
        const midColor = s.color.replace(/\)$/, ', 0.35)');
        grd.addColorStop(0, startColor);
        grd.addColorStop(0.2, midColor);
        grd.addColorStop(1.0, 'rgba(0,0,0,0)');

        _ctx.globalCompositeOperation = "lighter";
        _ctx.fillStyle = grd;
        _ctx.beginPath();
        _ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        _ctx.fill();

        // decay
        s.life -= 0.02;
        s.r += 0.6;
        if (s.life <= 0) splats.splice(i, 1);
      }
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      window.removeEventListener("pointerdown", onPointer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      try { canvas.remove(); } catch (e) {}
    };
  }, [reduced]);

  return null;
}
