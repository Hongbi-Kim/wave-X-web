import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
// import { Waves, MessageCircle, BookOpen, BarChart3, FileQuestion, Scale, BookOpenCheck, RefreshCw, Clock, Sparkles, Bot, Heart } from 'lucide-react';
import { WaveLogoFull } from './WaveLogoFull';
import { GroundedLogoFull } from './GroundedLogoFull';
import {
  Waves, MessageCircle, BookOpen, BarChart3,
  FileQuestion, Scale, BookOpenCheck, RefreshCw,
  MessageSquareText, Search, Network,
  Sparkles, Heart,
  TreePine, Gift, PartyPopper,
  Clock, Smile, Shield, Moon, Star,
} from 'lucide-react';

export function ServicesSection() {
  const { t, language } = useLanguage();

  const pomopetFeatures = [
    { icon: Clock, text: t('pomopet.feature1') },
    { icon: Smile, text: t('pomopet.feature2') },
    { icon: BarChart3, text: t('pomopet.feature3') },
    { icon: Shield, text: t('pomopet.feature4') },
  ];

  const luckydreamFeatures = [
    { icon: Moon, text: t('luckydream.feature1') },
    { icon: Star, text: t('luckydream.feature2') },
    { icon: Sparkles, text: t('luckydream.feature3') },
    { icon: MessageCircle, text: t('luckydream.feature4') },
  ];

  const waveIFeatures = [
    { icon: Waves, text: t('waveI.feature1') },
    { icon: MessageCircle, text: t('waveI.feature2') },
    { icon: BookOpen, text: t('waveI.feature3') },
    { icon: BarChart3, text: t('waveI.feature4') },
  ];

  const groundedFeatures = [
    { icon: MessageSquareText, text: t('grounded.feature1') }, // 건축법령 상담
    { icon: Search, text: t('grounded.feature2') },            // 법령 검색
    { icon: Network, text: t('grounded.feature3') },           // 참조 조문 확장
    { icon: BookOpenCheck, text: t('grounded.feature4') },     // 근거 확인
  ];

  const fortuneFeatures = [
    { icon: MessageCircle, text: t('fortune.feature1') },
    { icon: BarChart3, text: t('fortune.feature2') },
    // { icon: Sparkles, text: t('fortune.feature3') },
    // { icon: Heart, text: t('fortune.feature4') },
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

        {/* PomoPet */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 bg-gradient-to-br from-white to-[#FFF0ED] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-3 flex items-center gap-4">
            <img
              src="/images/pomopet_icon.png"
              alt="PomoPet icon"
              style={{ width: 50, height: 50, flexShrink: 0, objectFit: 'cover', borderRadius: 12 }}
            />
            <span style={{ fontFamily: '"Fredoka", system-ui, sans-serif', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em' }}>
              {language === 'ko' ? '뽀모펫' : 'PomoPet'}
            </span>
          </div>

          <div className="mb-6">
            <div className="text-[#E8563A] mb-2">{t('pomopet.slogan')}</div>
            <div className="text-[#E8563A]/80">{t('pomopet.subSlogan')}</div>
          </div>

          <h3 className="text-[#1A2E40] mb-4">{t('pomopet.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('pomopet.description')}
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
              onClick={() => window.open('https://pomopet.wavetox.com/', '_blank')}
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              🐾 {t('pomopet.cta')}
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {pomopetFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#E8563A] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* LuckyDream */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-24 bg-gradient-to-br from-white to-[#F0EBF8] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-3 flex items-center gap-4">
            <img
              src="/images/luckydream.png"
              alt="LuckyDream icon"
              style={{ width: 50, height: 50, flexShrink: 0, objectFit: 'cover', borderRadius: 12 }}
            />
            <span style={{
              fontFamily: '"Noto Serif KR", serif',
              fontWeight: 700,
              fontSize: '1.25rem',
              background: 'linear-gradient(90deg, #c9a84c 0%, #f5e0a0 40%, #c9a84c 60%, #e8c96a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {language === 'ko' ? '럭키드림' : 'LuckyDream'}
            </span>
          </div>

          <div className="mb-6">
            <div className="text-[#7B5EA7] mb-2">{t('luckydream.slogan')}</div>
            <div className="text-[#7B5EA7]/80">{t('luckydream.subSlogan')}</div>
          </div>

          <h3 className="text-[#1A2E40] mb-4">{t('luckydream.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('luckydream.description')}
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
              onClick={() => window.open('https://luckydream.wavetox.com/', '_blank')}
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              ✨ {t('luckydream.cta')}
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {luckydreamFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#7B5EA7] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Wave I */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 bg-gradient-to-br from-white to-[#E3F2FD] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <WaveLogoFull size="small" animated={true} />
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
                window.open('https://wavelog.wavetox.com/', '_blank');
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
        </motion.div> */}

        {/* Grounded */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-24 bg-gradient-to-br from-white to-[#E8EBF0] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <GroundedLogoFull size="small" animated={true} showTagline={false} />
          </div>
          
          <div className="mb-6">
            <div className="text-[#5A7A9E] mb-2">{t('grounded.slogan')}</div>
            <div className="text-[#5A7A9E]/80">{t('grounded.subSlogan')}</div>
          </div>
          
          <h3 className="text-[#1A2E40] mb-4">{t('grounded.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('grounded.description')}
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
                window.open('https://grounded.wavetox.com/', '_blank');
              }}
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              {t('grounded.cta')}
            </motion.button>
          </motion.div>
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

        {/* Daily Fortune */}
        {/* <motion.div
          id="daily-fortune"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-24 bg-gradient-to-br from-white to-[#FFF9ED] rounded-3xl p-8 md:p-12 shadow-xl"
        >
          <div className="mb-6">
            <img
              src="/images/haru_fortune_wordmark.svg"
              alt="하루의 운세 로고"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </div>

          <div className="mb-6">
            <div className="text-[#C4A354] mb-2">{t('fortune.slogan')}</div>
            <div className="text-[#C4A354]/80">{t('fortune.subSlogan')}</div>
          </div>

          <h3 className="text-[#1A2E40] mb-4">{t('fortune.title')}</h3>
          <p className="text-[#1A2E40]/80 mb-8 max-w-3xl leading-relaxed">
            {t('fortune.description')}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <motion.button
              className="px-12 py-3.5 bg-black text-white border-2 border-black transition-all duration-200 opacity-85 cursor-not-allowed"
              style={{
                fontFamily: '"Arial Black", "Helvetica Bold", sans-serif',
                fontWeight: 900,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
              disabled
            >
              {t('fortune.cta')}
            </motion.button>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {fortuneFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start space-x-3 bg-white/60 rounded-xl p-4"
              >
                <feature.icon className="w-5 h-5 text-[#D7B468] flex-shrink-0 mt-1" />
                <span className="text-[#1A2E40]/90">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div> */}

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
              href="https://christmas.wavetox.com/"
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
