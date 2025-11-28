import { motion } from 'motion/react';

interface WaveXLogoProps {
  size?: number;
  animated?: boolean;
  inverted?: boolean;
}

export function WaveXLogo({ size = 48, animated = false, inverted = false }: WaveXLogoProps) {
  const Component = animated ? motion.svg : 'svg';
  
  const animationProps = animated ? {
    animate: {
      y: [0, -8, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  } : {};

  // 색상 반전 옵션
  const bgGradientId = inverted ? 'waveXGradientInverted' : 'waveXGradient';
  const waveColor = inverted ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.8)';

  return (
    <Component
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...animationProps}
    >
      {/* Background Circle with gradient */}
      <circle cx="50" cy="50" r="48" fill={`url(#${bgGradientId})`} />
      
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
        <linearGradient id="waveXGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="50%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        
        {/* White theme (inverted) */}
        <linearGradient id="waveXGradientInverted" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>
    </Component>
  );
}
