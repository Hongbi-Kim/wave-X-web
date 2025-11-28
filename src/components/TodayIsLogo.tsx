import { motion } from 'motion/react';

interface TodayIsLogoProps {
  size?: number;
  animated?: boolean;
}

export function TodayIsLogo({ size = 48, animated = false }: TodayIsLogoProps) {
  const Component = animated ? motion.svg : 'svg';

  return (
    <Component
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Glow Ring */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="url(#outerGlow)"
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
      
      {/* Main Circle - Soft Background */}
      <circle cx="50" cy="50" r="42" fill="url(#mainGradient)" />
      
      {/* Subtle Inner Ring */}
      <circle
        cx="50"
        cy="50"
        r="38"
        fill="none"
        stroke="#CDE5F7"
        strokeWidth="1"
        opacity="0.4"
      />
      
      {/* Time Flow Arc - represents progress through the day */}
      <motion.path
        d="M 50 12 A 38 38 0 0 1 88 50"
        stroke="url(#arcGradient)"
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
      
      {/* Hour Dots - minimalist 12 & 6 markers */}
      <circle cx="50" cy="15" r="1.5" fill="#FFD67D" opacity="0.6" />
      <circle cx="50" cy="85" r="1.5" fill="#FFD67D" opacity="0.6" />
      
      {/* Center Composition - "The Moment" */}
      <g>
        {/* Ambient Glow */}
        <motion.circle
          cx="50"
          cy="50"
          r="16"
          fill="url(#centerGlow)"
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
        
        {/* Inner Dot */}
        <circle cx="50" cy="50" r="6" fill="url(#dotGradient)" />
        
        {/* Pulsing Highlight */}
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
      
      {/* Decorative Elements - subtle markers */}
      <g opacity="0.5">
        <circle cx="85" cy="50" r="1" fill="#CDE5F7" />
        <circle cx="15" cy="50" r="1" fill="#CDE5F7" />
      </g>
      
      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="mainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FEFDFB" />
          <stop offset="50%" stopColor="#F5F1E9" />
          <stop offset="100%" stopColor="#F9F6EF" />
        </linearGradient>
        
        <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD67D" />
          <stop offset="100%" stopColor="#FFC04D" />
        </linearGradient>
        
        <radialGradient id="dotGradient" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFDE94" />
          <stop offset="100%" stopColor="#FFD67D" />
        </radialGradient>
        
        <radialGradient id="centerGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#FFD67D" />
          <stop offset="100%" stopColor="#FFD67D" opacity="0" />
        </radialGradient>
        
        <radialGradient id="outerGlow" cx="50%" cy="50%">
          <stop offset="0%" stopColor="#CDE5F7" opacity="0" />
          <stop offset="100%" stopColor="#CDE5F7" />
        </radialGradient>
      </defs>
    </Component>
  );
}
