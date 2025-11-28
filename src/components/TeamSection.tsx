import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Briefcase, Users } from 'lucide-react';

export function TeamSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-[#F8FAFB] to-[#E8EEF5]">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#1A2E40] mb-6"
        >
          {t('team.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1A2E40]/80 mb-12 max-w-2xl mx-auto"
        >
          {t('team.description')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button className="bg-[#1A2E40] hover:bg-[#8DA2D7] text-white px-8 py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            {t('team.cta1')}
          </Button>
          <Button
            variant="outline"
            className="border-2 border-[#1A2E40] text-[#1A2E40] hover:bg-[#1A2E40] hover:text-white px-8 py-6 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            <Users className="w-5 h-5" />
            {t('team.cta2')}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
