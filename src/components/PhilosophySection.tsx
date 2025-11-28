import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useRef } from 'react';

export function PhilosophySection() {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 120;
    };

    const drawSineWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.strokeStyle = '#8DA2D7';
      ctx.lineWidth = 3;

      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x + offset) * 0.02) * 30;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Draw flowing dots
      for (let i = 0; i < 3; i++) {
        const dotX = (offset * 2 + i * 150) % canvas.width;
        const dotY = canvas.height / 2 + Math.sin((dotX + offset) * 0.02) * 30;
        
        ctx.beginPath();
        ctx.arc(dotX, dotY, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#1A2E40';
        ctx.fill();
      }

      offset += 1;
      animationFrameId = requestAnimationFrame(drawSineWave);
    };

    resize();
    window.addEventListener('resize', resize);
    drawSineWave();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#1A2E40] mb-8"
        >
          {t('philosophy.title')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <canvas ref={canvasRef} className="w-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-[#1A2E40]/80 max-w-2xl mx-auto"
        >
          {t('philosophy.description')}
        </motion.p>
      </div>
    </section>
  );
}
