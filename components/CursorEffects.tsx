import React, { useEffect } from 'react';

export default function CursorEffects() {
  useEffect(() => {
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let targetX2 = targetX;
    let targetY2 = targetY;
    let currentX2 = targetX;
    let currentY2 = targetY;
    let raf = 0;

    function onPointerMove(e: PointerEvent) {
      targetX = e.clientX;
      targetY = e.clientY;
      // second blob lags slightly
      targetX2 = e.clientX + 40;
      targetY2 = e.clientY + 40;
    }

    function loop() {
      // lerp towards target
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;
      currentX2 += (targetX2 - currentX2) * 0.12;
      currentY2 += (targetY2 - currentY2) * 0.12;

      const doc = document.documentElement;
      doc.style.setProperty('--cursor-x', `${currentX}px`);
      doc.style.setProperty('--cursor-y', `${currentY}px`);
      doc.style.setProperty('--cursor-x2', `${currentX2}px`);
      doc.style.setProperty('--cursor-y2', `${currentY2}px`);

      raf = requestAnimationFrame(loop);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden className="cursor-layer">
      <div className="cursor-blob blob-1" />
      <div className="cursor-blob blob-2" />
    </div>
  );
}
