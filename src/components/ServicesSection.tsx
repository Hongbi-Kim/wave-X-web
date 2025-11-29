import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
// import { Waves, MessageCircle, BookOpen, BarChart3, FileQuestion, Scale, BookOpenCheck, RefreshCw, Clock, Sparkles, Bot, Heart } from 'lucide-react';
import { WaveLogoFull } from './WaveLogoFull';
import { GroundedLogoFull } from './GroundedLogoFull';
import { TodayIsLogoFull } from './TodayIsLogoFull';
import {
  Waves, MessageCircle, BookOpen, BarChart3,
  FileQuestion, Scale, BookOpenCheck, RefreshCw,
  Clock, Sparkles, Bot, Heart,
  TreePine, Gift, PartyPopper, Snowflake,  // 추가
} from 'lucide-react';

export function ServicesSection() {
  const { t } = useLanguage();

  const waveIFeatures = [
    { icon: Waves, text: t('waveI.feature1') },
    { icon: MessageCircle, text: t('waveI.feature2') },
    { icon: BookOpen, text: t('waveI.feature3') },
    { icon: BarChart3, text: t('waveI.feature4') },
  ];

  const groundedFeatures = [
    { icon: FileQuestion, text: t('grounded.feature1') },
    { icon: Scale, text: t('grounded.feature2') },
    { icon: BookOpenCheck, text: t('grounded.feature3') },
    { icon: RefreshCw, text: t('grounded.feature4') },
  ];

  const todayIsFeatures = [
    { icon: Clock, text: t('todayis.feature1') },
    { icon: Sparkles, text: t('todayis.feature2') },
    { icon: Bot, text: t('todayis.feature3') },
    { icon: Heart, text: t('todayis.feature4') },
  ];

  const christmasFeatures = [
    { icon: TreePine,    text: t('christmas.feature1'), image: '/images/poster1.png' },
    { icon: Gift,        text: t('christmas.feature2'), image: '/images/poster2.png' },
    { icon: PartyPopper, text: t('christmas.feature3'), image: '/images/poster3.png' },
    // { icon: Snowflake,   text: t('christmas.feature4'), image: '/images/poster4.png' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-[#F8FAFB] to-[#E8EEF5]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-[#1A2E40]">{t('services.title')}</h2>
        </motion.div>

        {/* Wave I */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 bg-gradient-to-br from-white to-[#E3F2FD] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <WaveLogoFull size="medium" animated={true} />
          </div>
          
          <div className="mb-6">
            <div className="text-[#8DA2D7] mb-2">{t('waveI.slogan')}</div>
            <div className="text-[#8DA2D7]/80">{t('waveI.subSlogan')}</div>
          </div>
          
          <h3 className="text-[#1A2E40] mb-4">{t('waveI.title')}</h3>
          
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('waveI.description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // 추후 Wave I 서비스 링크로 연결
                console.log('Wave I 시작하기 클릭');
              }}
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t('waveI.cta')}
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {waveIFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#7FB3D5] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grounded */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 bg-gradient-to-br from-white to-[#E8EBF0] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <GroundedLogoFull size="medium" animated={true} showTagline={false} />
          </div>
          
          <div className="mb-6">
            <div className="text-[#5A7A9E] mb-2">{t('grounded.slogan')}</div>
            <div className="text-[#5A7A9E]/80">{t('grounded.subSlogan')}</div>
          </div>
          
          <h3 className="text-[#1A2E40] mb-4">{t('grounded.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('grounded.description')}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {groundedFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#5A7A9E] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Christmas Event */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-24 bg-gradient-to-br from-white to-[#FFF5F6] rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
        >
          {/* 상단 로고/아이콘 영역
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center text-2xl shadow-md">
                🎄
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-1">
                  {t('christmas.badge')}
                </div>
                <div className="text-xs text-red-500/80">
                  {t('christmas.slogan')}
                </div>
              </div>
            </div>
            <div className="hidden md:block text-xs text-gray-400">
              Seasonal Web Experience
            </div>
          </div> */}

          {/* 타이틀 + 설명 */}
          
          <div className="mb-8 space-y-3">
            
            <h3 className="text-3xl md:text-3xl font-semibold text-[#1A2E40] leading-snug">
              {t('christmas.title')}
            </h3>
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-semibold mb-1">
            🎄  {t('christmas.badge')}
                </div>
            <div className="text-[15px] md:text-base text-[#1A2E40]/80 leading-relaxed max-w-xl">
              {t('christmas.description').split('\n').map((line: string, i: number) => (
                <React.Fragment key={i}>
                  {line}
                  {i < t('christmas.description').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <motion.a
              href="https://christmas.wavetoai.com/"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 py-4 bg-red-500 text-white rounded-full shadow-md hover:bg-red-600 transition-colors text-sm md:text-base font-semibold"
              style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
            >
              <span>🎁 {t('christmas.cta')}</span>
            </motion.a>
          </motion.div>

          {/* 1x3 하위 카드 */}
          <div className="grid grid-cols-3 gap-3">
          {christmasFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="flex flex-col items-center text-center bg-white/90 rounded-2xl shadow-md hover:shadow-lg transition-shadow p-5"
            >
              {/* 아이콘/이미지 영역 */}
              {feature.image ? (
                <img
                  src={feature.image}
                  alt={feature.title ?? feature.text}
                  className="w-full sm:w-32 h-auto rounded-lg object-cover mb-4"
                />
              ) : feature.icon ? (
                <feature.icon className="w-12 h-12 text-red-400 mb-4" />
              ) : null}

              {/* 텍스트 영역 */}
              <div className="text-[#1A2E40] text-[20px] leading-relaxed font-medium">
                {feature.text}
              </div>
            </motion.div>
          ))}
        </div>



          {/* </div> */}
        </motion.div>

        {/* TodayIs */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-white to-[#FFF9ED] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <TodayIsLogoFull size="medium" animated={true} />
          </div>
          
          <div className="mb-6">
            <div className="text-[#C4A354] mb-2">{t('todayis.slogan')}</div>
            <div className="text-[#C4A354]/80">{t('todayis.subSlogan')}</div>
          </div>
          
          <h3 className="text-[#1A2E40] mb-4">{t('todayis.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('todayis.description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                console.log('TodayIs 시작하기 클릭');
              }}
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t('todayis.cta')}
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {todayIsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#FFD67D] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div> */}
        {/* </motion.div> */}
      </div>
    </section>
  );
}
