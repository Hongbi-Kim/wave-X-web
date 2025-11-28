import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { WaveBackground } from './WaveBackground';
import { WaveXLogoFull } from './WaveXLogoFull';
import { TabType } from '../App';

interface HeroSectionProps {
  setActiveTab: (tab: TabType) => void;
}

export function HeroSection({ setActiveTab }: HeroSectionProps) {
  const { t } = useLanguage();

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
          <WaveXLogoFull size="large" animated={true} />
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
          {t('hero.subtext')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            onClick={() => setActiveTab('services')}
            className="bg-[#1A2E40] hover:bg-[#8DA2D7] text-white px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {t('hero.cta1')}
          </Button>
          <Button
            onClick={() => setActiveTab('services')}
            variant="outline"
            className="border-2 border-[#1A2E40] text-[#1A2E40] hover:bg-[#1A2E40] hover:text-white px-8 py-6 rounded-full transition-all duration-300"
          >
            {t('hero.cta2')}
          </Button>
          <Button
            onClick={() => setActiveTab('services')}
            variant="outline"
            className="border-2 border-[#FFD67D] text-[#C4A354] hover:bg-[#FFD67D] hover:text-[#1A2E40] px-8 py-6 rounded-full transition-all duration-300"
          >
            {t('hero.cta3')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
