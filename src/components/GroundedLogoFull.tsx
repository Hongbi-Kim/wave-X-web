import { motion } from 'motion/react';
import { WaveSpaceLogo } from './WaveSpaceLogo';

interface GroundedLogoFullProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
  showTagline?: boolean;
}

export function GroundedLogoFull({ 
  size = 'medium', 
  animated = false,
  showTagline = false 
}: GroundedLogoFullProps) {
  const sizes = {
    small: { 
      logoSize: 32,
      titleSize: '18px',
      taglineSize: '10px',
      gap: 8,
      taglineGap: 4,
    },
    medium: { 
      logoSize: 48,
      titleSize: '28px',
      taglineSize: '13px',
      gap: 12,
      taglineGap: 6,
    },
    large: { 
      logoSize: 72,
      titleSize: '48px',
      taglineSize: '16px',
      gap: 16,
      taglineGap: 8,
    },
  };

  const config = sizes[size];
  const Component = animated ? motion.div : 'div';
  
  const animationProps = animated ? {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  } : {};

  return (
    <Component
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${config.taglineGap}px`,
      }}
      {...animationProps}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: `${config.gap}px`,
        }}
      >
        <WaveSpaceLogo size={config.logoSize} animated={animated} />
        
        {/* "GROUNDED" Text */}
        <div
          style={{
            fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
            fontSize: config.titleSize,
            fontWeight: 900,
            letterSpacing: '0.06em',
            color: '#1e40af',
            lineHeight: 1,
          }}
        >
          GROUNDED
        </div>
      </div>
      
      {/* Tagline */}
      {showTagline && (
        <div
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: config.taglineSize,
            fontWeight: 500,
            letterSpacing: '0.08em',
            color: '#475569',
            lineHeight: 1.4,
            textAlign: 'center',
          }}
        >
          Stand on reason.
        </div>
      )}
    </Component>
  );
}
