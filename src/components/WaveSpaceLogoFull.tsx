import { WaveSpaceLogo } from './WaveSpaceLogo';
import { motion } from 'motion/react';

interface WaveSpaceLogoFullProps {
  size?: 'small' | 'medium' | 'large';
  animated?: boolean;
}

export function WaveSpaceLogoFull({ size = 'medium', animated = false }: WaveSpaceLogoFullProps) {
  const sizes = {
    small: { logo: 32, fontSize: 14, gap: 12 },
    medium: { logo: 48, fontSize: 22, gap: 16 },
    large: { logo: 64, fontSize: 28, gap: 20 },
  };

  const config = sizes[size];

  return (
    <div className="flex items-center" style={{ gap: `${config.gap}px` }}>
      <WaveSpaceLogo size={config.logo} animated={animated} />
      <motion.div 
        className="flex flex-col justify-center"
        initial={animated ? { opacity: 0, x: -10 } : undefined}
        animate={animated ? { opacity: 1, x: 0 } : undefined}
        transition={animated ? { duration: 0.5, delay: 0.3 } : undefined}
      >
        {/* WAVE - 굵고 강렬한 타이틀 */}
        <div 
          style={{
            fontFamily: '"SF Pro Display", "Helvetica Neue", system-ui, sans-serif',
            fontWeight: 800,
            fontSize: `${config.fontSize}px`,
            letterSpacing: '0.08em',
            color: '#0a0a0a',
            textTransform: 'uppercase',
            lineHeight: 1,
            marginBottom: '2px',
          }}
        >
          WAVE
        </div>
        
        {/* Space - 가늘고 우아한 서브타이틀 */}
        <div 
          style={{
            fontFamily: '"SF Pro Text", "Helvetica Neue", system-ui, sans-serif',
            fontWeight: 200,
            fontSize: `${config.fontSize * 0.5}px`,
            letterSpacing: '0.35em',
            color: '#3a3a3a',
            textTransform: 'uppercase',
            lineHeight: 1,
            paddingLeft: '2px',
          }}
        >
          SPACE
        </div>
      </motion.div>
    </div>
  );
}
