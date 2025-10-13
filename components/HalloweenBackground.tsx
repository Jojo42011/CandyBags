'use client';

import { useEffect, useRef } from 'react';

export default function HalloweenBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const emojis = ['🎃', '👻', '🍬', '🍭', '🦇', '🕷️', '🕸️'];
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      emoji: string;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 10,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.font = `${particle.size}px Arial`;
        ctx.fillText(particle.emoji, particle.x, particle.y);
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="halloween-bg opacity-20"
    />
  );
}