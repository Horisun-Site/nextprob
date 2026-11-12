"use client";

import { useEffect, useRef } from "react";

const GLYPHS =
  "01{}[]()<>/=;:$#constletfunctionreturnasyncawait=>npmrunbuild0101";

export default function CodeRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let fontSize = 16;
    let columns = 0;
    let drops = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const palette = [
      "rgba(34, 211, 238, 0.92)",
      "rgba(74, 222, 128, 0.82)",
      "rgba(167, 139, 250, 0.88)",
      "rgba(125, 211, 252, 0.72)",
    ];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      fontSize = width < 640 ? 13 : 18;
      columns = Math.max(1, Math.floor(width / fontSize));
      drops = Array.from(
        { length: columns },
        () => (Math.random() * height) / fontSize
      );

      ctx.fillStyle = "rgba(5, 7, 13, 0.92)";
      ctx.fillRect(0, 0, width, height);
    };

    const draw = () => {
      ctx.fillStyle = "rgba(5, 7, 13, 0.055)";
      ctx.fillRect(0, 0, width, height);
      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, monospace`;

      for (let i = 0; i < columns; i += 1) {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        if (y > height && Math.random() > 0.982) {
          drops[i] = 0;
        }

        const isHead = Math.random() > 0.94;
        ctx.fillStyle = isHead
          ? "rgba(236, 254, 255, 1)"
          : palette[i % palette.length];
        ctx.shadowBlur = isHead ? 9 : 0;
        ctx.shadowColor = "rgba(34, 211, 238, 0.9)";
        ctx.fillText(glyph, x, y);

        drops[i] += 0.7 + (i % 5) * 0.085;
      }

      ctx.shadowBlur = 0;
    };

    resize();

    if (reduceMotion) {
      draw();
      return;
    }

    const interval = window.setInterval(draw, 60);
    window.addEventListener("resize", resize);

    return () => {
      window.clearInterval(interval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.34]"
    />
  );
}
