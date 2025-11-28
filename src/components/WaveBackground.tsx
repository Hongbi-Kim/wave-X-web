import { useEffect, useRef } from 'react';

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawWave = (yOffset: number, amplitude: number, frequency: number, phase: number, alpha: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2 + yOffset);

      for (let x = 0; x < canvas.width; x++) {
        const y = Math.sin((x * frequency + phase) * Math.PI / 180) * amplitude + canvas.height / 2 + yOffset;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(canvas.width, canvas.height);
      ctx.lineTo(0, canvas.height);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, `rgba(141, 162, 215, ${alpha})`);
      gradient.addColorStop(1, `rgba(26, 46, 64, ${alpha})`);
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw multiple waves with different parameters
      drawWave(-100, 50, 0.02, offset * 0.5, 0.1);
      drawWave(-50, 40, 0.03, offset * 0.7, 0.15);
      drawWave(0, 60, 0.025, offset, 0.2);

      offset += 0.5;
      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
}
