import { motion } from 'motion/react';

interface WaveXLogoFullProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  inverted?: boolean;
}

export function WaveXLogoFull({ size = 'medium', animated = false, inverted = false }: WaveXLogoFullProps) {
  const sizes = {
    small: { 
      circleSize: 30,
      fontSize: '16px',
      letterSpacing: '0.05em',
      gap: 6,
    },
    medium: { 
      circleSize: 50,
      fontSize: '32px',
      letterSpacing: '0.08em',
      gap: 10,
    },
    large: { 
      circleSize: 80,
      fontSize: '64px',
      letterSpacing: '0.08em',
      gap: 15,
    },
  };

  const config = sizes[size];
  const Component = animated ? motion.div : 'div';
  
  const animationProps = animated ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  } : {};

  // 색상 반전 옵션
  const gradientId = inverted ? 'waveXGradientFullInverted' : 'waveXGradientFull';
  const waveColor = inverted ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)';
  const textColor = inverted ? '#fff' : '#000';

  return (
    <Component
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: `${config.gap}px`,
      }}
      {...animationProps}
    >
      {/* Wave X Logo SVG */}
      <svg
        width={config.circleSize}
        height={config.circleSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circle with gradient */}
        <motion.circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill={`url(#${gradientId})`}
          animate={animated ? {
            scale: [1, 1.05, 1],
          } : undefined}
          transition={animated ? {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Wave X Shape - Two crossing waves forming an X */}
        <motion.path
          d="M25 50 Q35 40, 45 50 T65 50 Q72 43, 75 50"
          stroke={waveColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={animated ? {
            d: [
              "M25 50 Q35 40, 45 50 T65 50 Q72 43, 75 50",
              "M25 50 Q35 43, 45 50 T65 50 Q72 40, 75 50",
              "M25 50 Q35 40, 45 50 T65 50 Q72 43, 75 50",
            ]
          } : undefined}
          transition={animated ? {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        <motion.path
          d="M75 50 Q65 60, 55 50 T35 50 Q28 57, 25 50"
          stroke={waveColor}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          animate={animated ? {
            d: [
              "M75 50 Q65 60, 55 50 T35 50 Q28 57, 25 50",
              "M75 50 Q65 57, 55 50 T35 50 Q28 60, 25 50",
              "M75 50 Q65 60, 55 50 T35 50 Q28 57, 25 50",
            ]
          } : undefined}
          transition={animated ? {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.3,
          } : undefined}
        />
        
        {/* Gradient Definitions */}
        <defs>
          {/* Black theme (default) */}
          <linearGradient id="waveXGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#0a0a0a" />
            <stop offset="100%" stopColor="#1a1a1a" />
          </linearGradient>
          
          {/* White theme (inverted) */}
          <linearGradient id="waveXGradientFullInverted" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>
      </svg>

      {/* "WAVE X" Text */}
      <div
        style={{
          fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
          fontSize: config.fontSize,
          fontWeight: 900,
          letterSpacing: config.letterSpacing,
          color: textColor,
          lineHeight: 1,
        }}
      >
        WAVE TO X
      </div>
    </Component>
  );
}
