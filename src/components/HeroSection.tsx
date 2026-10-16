import React from 'react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { WaveBackground } from './WaveBackground';
import { WaveXLogoFull } from './WaveXLogoFull';
import '../styles/hero.css';

const products = [
  { name: 'GROUNDED', url: 'https://grounded.thewavera.com/', emoji: '⚖️' },
  { name: 'SayLong', url: 'https://saylong.thewavera.com/', image: '/images/saylong.png' },
  { name: 'PomoPet', url: 'https://pomopet.thewavera.com/', image: '/images/pomopet_icon.png' },
];

export function HeroSection() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F8FAFB] via-[#E8EEF5] to-[#D8E4F0]">
      <WaveBackground />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <div className="sm:hidden">
            <WaveXLogoFull size="medium" animated={true} />
          </div>
          <div className="hidden sm:block">
            <WaveXLogoFull size="large" animated={true} />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#1A2E40] mb-6"
        >
          {t('hero.slogan')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#1A2E40]/80 mb-12 max-w-2xl mx-auto"
        >
          {(() => {
            const [lead, rest] = t('hero.subtext').split(' — ');
            return (
              <>
                {lead}
                <br className="sm:hidden" />
                <span className="hidden sm:inline"> </span>
                — {rest}
              </>
            );
          })()}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hero-actions"
        >
          {products.map((product) => (
            <a
              key={product.url}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-pill"
            >
              <span className="hero-pill-icon">
                {product.image ? <img src={product.image} alt="" /> : product.emoji}
              </span>
              <span className="hero-pill-label">{product.name}</span>
              <ArrowUpRight className="hero-pill-arrow" size={16} strokeWidth={1.8} />
            </a>
          ))}
          <button onClick={() => navigate('/services')} className="hero-more">
            {t('hero.moreServices')}
            <ArrowRight size={16} strokeWidth={1.8} />
          </button>
          {/* <Button
            onClick={() => navigate('/services#daily-fortune')}
            variant="outline"
            className="border-2 border-[#FFD67D] text-[#C4A354] hover:bg-[#FFD67D] hover:text-[#1A2E40] px-8 py-6 rounded-full transition-all duration-300"
          >
            {t('hero.cta3')}
          </Button> */}
        </motion.div>
      </div>
    </section>
  );
}
