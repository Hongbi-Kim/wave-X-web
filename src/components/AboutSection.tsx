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
    },
    {
      icon: Scale,
      title: t('about.value2.title'),
      description: t('about.value2.desc'),
    },
    {
      icon: Lightbulb,
      title: t('about.value3.title'),
      description: t('about.value3.desc'),
    },
    {
      icon: Heart,
      title: t('about.value4.title'),
      description: t('about.value4.desc'),
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
          <p className="text-[#1A2E40]/80 max-w-3xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#8DA2D7]/20 to-[#1A2E40]/20 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#1A2E40]" />
                </div>
                <h3 className="text-[#1A2E40] mb-3">{value.title}</h3>
                <p className="text-[#1A2E40]/70">{value.description}</p>
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
