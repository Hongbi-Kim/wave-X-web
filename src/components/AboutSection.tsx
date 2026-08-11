import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Waves, Scale, Lightbulb, Heart } from 'lucide-react';

export function AboutSection() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Waves,
      title: t('about.value1.title'),
      description: t('about.value1.desc'),
      mobileKeyword: '흐름',
    },
    {
      icon: Scale,
      title: t('about.value2.title'),
      description: t('about.value2.desc'),
      mobileKeyword: '조화',
    },
    {
      icon: Lightbulb,
      title: t('about.value3.title'),
      description: t('about.value3.desc'),
      mobileKeyword: '명료함',
    },
    {
      icon: Heart,
      title: t('about.value4.title'),
      description: t('about.value4.desc'),
      mobileKeyword: '공감',
    },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#1A2E40] mb-6">{t('about.title')}</h2>
          <p className="text-[#1A2E40]/80 max-w-3xl mx-auto" style={{ wordBreak: 'keep-all' }}>
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-8">
          {values.map((value, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8DA2D7]/20 to-[#1A2E40]/20 flex items-center justify-center"
                  style={{ width: 'clamp(2.5rem, 14vw, 4rem)', height: 'clamp(2.5rem, 14vw, 4rem)' }}
                >
                  <value.icon className="text-[#1A2E40]" style={{ width: 'clamp(1.1rem, 6vw, 2rem)', height: 'clamp(1.1rem, 6vw, 2rem)' }} />
                </div>
                <h3 className="text-[#1A2E40] mb-3" style={{ fontSize: 'clamp(0.8rem, 3.5vw, 1.125rem)' }}>{value.title}</h3>
                <p className="sm:hidden text-[#1A2E40]/70" style={{ fontSize: 'clamp(0.65rem, 2.8vw, 1rem)' }}>{value.mobileKeyword}</p>
                <p className="hidden sm:block text-[#1A2E40]/70" style={{ fontSize: 'clamp(0.65rem, 2.8vw, 1rem)' }}>{value.description}</p>
              </motion.div>

              {index < values.length - 1 && (
                <div className="hidden lg:block mt-8">
                  <svg className="w-full h-8" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path
                      d="M0 10 Q 25 5, 50 10 T 100 10"
                      stroke="#8DA2D7"
                      strokeWidth="2"
                      fill="none"
                      opacity="0.3"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
