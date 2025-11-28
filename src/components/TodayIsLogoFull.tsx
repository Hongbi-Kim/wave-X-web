import { motion } from 'motion/react';

interface TodayIsLogoFullProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

export function TodayIsLogoFull({ size = 'medium', animated = false }: TodayIsLogoFullProps) {
  const sizes = {
    small: 120,
    medium: 180,
    large: 240,
  };

  const height = sizes[size];
  const width = height * 2.5;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Logo Icon */}
      <g transform="translate(0, 50)">
        {/* Outer Glow Ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#outerGlowFull)"
          strokeWidth="0.5"
          opacity="0.3"
          animate={animated ? {
            r: [45, 47, 45],
            opacity: [0.3, 0.5, 0.3],
          } : undefined}
          transition={animated ? {
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Main Circle */}
        <circle cx="50" cy="50" r="42" fill="url(#mainGradientFull)" />
        
        {/* Inner Ring */}
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#CDE5F7"
          strokeWidth="1"
          opacity="0.4"
        />
        
        {/* Time Flow Arc */}
        <motion.path
          d="M 50 12 A 38 38 0 0 1 88 50"
          stroke="url(#arcGradientFull)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
          animate={animated ? {
            pathLength: [0, 1],
            opacity: [0.6, 1, 0.6],
          } : undefined}
          transition={animated ? {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Hour Dots */}
        <circle cx="50" cy="15" r="1.5" fill="#FFD67D" opacity="0.6" />
        <circle cx="50" cy="85" r="1.5" fill="#FFD67D" opacity="0.6" />
        
        {/* Center */}
        <g>
          <motion.circle
            cx="50"
            cy="50"
            r="16"
            fill="url(#centerGlowFull)"
            opacity="0.15"
            animate={animated ? {
              r: [16, 20, 16],
              opacity: [0.15, 0.25, 0.15],
            } : undefined}
            transition={animated ? {
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            } : undefined}
          />
          
          <circle cx="50" cy="50" r="6" fill="url(#dotGradientFull)" />
          
          <motion.circle
            cx="50"
            cy="50"
            r="3"
            fill="#FFFBF0"
            opacity="0.9"
            animate={animated ? {
              r: [3, 4, 3],
              opacity: [0.9, 0.5, 0.9],
            } : undefined}
            transition={animated ? {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            } : undefined}
          />
        </g>
        
        {/* Decorative */}
        <g opacity="0.5">
          <circle cx="85" cy="50" r="1" fill="#CDE5F7" />
          <circle cx="15" cy="50" r="1" fill="#CDE5F7" />
        </g>
      </g>
      
      {/* Text */}
      <g transform="translate(130, 50)">
        {/* "Today" */}
        <text
          x="0"
          y="55"
          style={{
            fontFamily: 'Inter, Pretendard, -apple-system, sans-serif',
            fontSize: '52px',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            fill: '#1A2E40',
          }}
        >
          Today
        </text>
        
        {/* "Is" */}
        <text
          x="175"
          y="55"
          style={{
            fontFamily: 'Inter, Pretendard, -apple-system, sans-serif',
            fontSize: '52px',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            fill: '#1A2E40',
          }}
        >
          Is
        </text>
        
        {/* Decorative Underline Element */}
        <motion.line
          x1="175"
          y1="62"
          x2="245"
          y2="62"
          stroke="url(#underlineGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
          animate={animated ? {
            opacity: [0.5, 0.9, 0.5],
            x2: [240, 250, 240],
          } : undefined}
          transition={animated ? {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Accent Dot */}
        <motion.circle
          cx="255"
          cy="40"
          r="5"
          fill="url(#accentDotGradient)"
          animate={animated ? {
            scale: [1, 1.2, 1],
            opacity: [0.9, 1, 0.9],
          } : undefined}
          transition={animated ? {
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Dot Glow */}
        <motion.circle
          cx="255"
          cy="40"
          r="7"
          fill="none"
          stroke="#FFD67D"
          strokeWidth="1"
          opacity="0.4"
          animate={animated ? {
            r: [7, 10, 7],
            opacity: [0.4, 0.1, 0.4],
          } : undefined}
          transition={animated ? {
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          } : undefined}
        />
        
        {/* Tagline */}
        <text
          x="0"
          y="88"
          style={{
            fontFamily: 'Inter, Pretendard, -apple-system, sans-serif',
            fontSize: '15px',
            fontWeight: '400',
            letterSpacing: '0.08em',
            fill: '#8DA2D7',
            opacity: 0.85,
          }}
        >
          Remember Your Day
        </text>
      </g>
      
      {/* Gradients */}
      <defs>
        <linearGradient id="mainGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEFDFB" />
          <stop offset="50%" stopColor="#F5F1E9" />
          <stop offset="100%" stopColor="#F9F6EF" />
        </linearGradient>
        
        <linearGradient id="arcGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD67D" />
          <stop offset="100%" stopColor="#FFC04D" />
        </linearGradient>
        
        <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD67D" opacity="0.3" />
          <stop offset="50%" stopColor="#FFD67D" />
          <stop offset="100%" stopColor="#FFC04D" opacity="0.3" />
        </linearGradient>
        
        <radialGradient id="dotGradientFull" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFDE94" />
          <stop offset="100%" stopColor="#FFD67D" />
        </radialGradient>
        
        <radialGradient id="accentDotGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFDE94" />
          <stop offset="100%" stopColor="#FFD67D" />
        </radialGradient>
        
        <radialGradient id="centerGlowFull" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFD67D" />
          <stop offset="100%" stopColor="#FFD67D" opacity="0" />
        </radialGradient>
        
        <radialGradient id="outerGlowFull" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#CDE5F7" opacity="0" />
          <stop offset="100%" stopColor="#CDE5F7" />
        </radialGradient>
      </defs>
    </svg>
  );
}
