import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ko: {
    // Navigation
    'nav.home': '홈',
    'nav.about': '회사 소개',
    'nav.services': '서비스',
    'nav.philosophy': '철학',
    'nav.team': '팀',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'Where Human Waves Meet AI.',
    'hero.subtext': '우리는 당신과 함께 흐르는 AI를 디자인합니다 — 차분하고, 직관적이며, 인간적인.',
    'hero.cta1': 'Wave I 살펴보기',
    'hero.cta2': 'Grounded 살펴보기',
    'hero.cta3': '시즌 한정 테스트 살펴보기',
    // 'hero.cta3': 'TodayIs 살펴보기',
    
    // About
    'about.title': 'About Wave X',
    'about.description': 'Wave X는 감정을 대체하는 것이 아니라, 이해하고 확장하는 AI를 만듭니다. 우리는 인간의 감정 리듬을 읽고 흐름으로 전환하는 기술을 설계합니다.',
    'about.value1.title': 'Flow',
    'about.value1.desc': '감정과 생각은 유동적입니다.',
    'about.value2.title': 'Balance',
    'about.value2.desc': '인간과 기술의 조화.',
    'about.value3.title': 'Clarity',
    'about.value3.desc': '감정의 복잡함을 단순화합니다.',
    'about.value4.title': 'Empathy',
    'about.value4.desc': '모든 AI는 이해에서 시작됩니다.',
    
    // Services
    'services.title': '우리의 서비스',
    'waveI.slogan': 'Ride your inner wave.',
    'waveI.subSlogan': '당신의 파도를 따라 흘러가세요.',
    'waveI.title': 'Wave I — AI 심리 케어',
    'waveI.description': '요즘 시대엔 몸의 건강만큼 마음의 건강도 중요합니다. Wave I는 당신의 감정이 자연스럽게 흐를 수 있도록 도와주는 AI 심리 케어 서비스입니다. AI 캐릭터와 함께 대화하고, 일기를 쓰고, 감정을 기록하며 조금씩 나를 돌아보세요. 마음의 파도를 따라, 당신 자신을 만나보세요.',
    'waveI.feature1': 'Wave — 감정의 시각화와 인터랙션 (감정 정원, 감정 쓰레기통, 낙서장 등)',
    'waveI.feature2': '채팅 — 3가지 개성을 가진 AI 캐릭터와 대화',
    'waveI.feature3': '일기 — 감정 스티커, 타임캡슐, 파도 배경',
    'waveI.feature4': '리포트 — 주간/월간 감정 통계와 AI 분석',
    'waveI.cta': '시작하기',
    
    'grounded.slogan': '근거 위에, 답을 세우다.',
    'grounded.subSlogan': 'Stand on reason.',
    'grounded.title': 'Grounded — 건축법 AI 질의응답',
    'grounded.description': 'Grounded는 건축 실무에서 마주하는 법적 질문에 대해 명확하고 신뢰할 수 있는 근거를 제시하는 AI 질의응답 서비스입니다. 우리는 방대한 법령 속에서 당신의 판단이 설 수 있는 단단한 근거를 찾아드립니다.',
    'grounded.feature1': '법적 근거 제공 — 정확한 법령, 조례, 규칙 검색',
    'grounded.feature2': '명확한 해석 — 복잡한 법률 용어를 쉬운 말로',
    'grounded.feature3': '실무 적용 — 실제 사례와 판례 기반 답변',
    'grounded.feature4': '최신 법규 — 개정 내용 자동 반영',
    
    'todayis.slogan': '기록하지 않으면 하루는 사라진다.',
    'todayis.subSlogan': '오늘을 잊지 않기 위해, Today Is.',
    'todayis.title': 'TodayIs — 감정 기반 라이프 트래커',
    'todayis.description': '매일 반복되는 일상 속에서 무의식적으로 흘러가는 하루를 의식적으로 바라보게 하는 서비스입니다. 타임라인으로 시간을 기록하고, AI와 함께 감정을 되돌아보며, 하루의 의미를 발견하세요. 기록은 시간을 의미로 바꾸는 행위입니다.',
    'todayis.feature1': '타임라인 뷰 — 00:00~24:00 하루 흐름 시각화',
    'todayis.feature2': 'AI 피드백 — 하루 요약과 내일을 위한 제안',
    'todayis.feature3': 'AI 코치 챗봇 — 기록 기반 맞춤 대화',
    'todayis.feature4': '감정 회고 — 기분 기록과 패턴 분석',
    'todayis.cta': '시작하기',

    // Christmas
    'christmas.badge': '크리스마스 시즌 한정 테스트',
    'christmas.title': '직장인을 위한 연말 3종 테스트',
    'christmas.description':
      '크리스마스 시즌, Wave X가 준비한 가벼운 이벤트성 테스트입니다. 회사식 크리스마스 운세, 산타 대신 받을 직장인 선물, 연말 잔업률 계산기까지 — 동료들과 링크를 공유하고 가볍게 웃을 수 있는 직장인용 연말 뽑기 서비스입니다.',
    'christmas.cta': '  크리스마스 테스트 시작하기  ',

    'christmas.card1.title': '회사식 크리스마스 운세',
    'christmas.feature1':
      '올해 연말, 당신의 회사 생활은 어떨까요? 상사님의 기분부터 야근 운까지 모두 알려드립니다.',
    'christmas.card2.title': '산타 대신 받을 직장인 선물',
    'christmas.feature2':
      '올해 당신이 받을 선물은? 상여금부터 조기퇴근권까지, 직장인 맞춤 선물을 확인하세요.',
    'christmas.card3.title': '내 연말 잔업률 계산기',
    'christmas.feature3':
      '연말에는 과연 몇 번이나 야근을 하게 될까요? 과학적(?)인 분석으로 예측해드립니다.',

    

    // Philosophy
    'philosophy.title': '우리는 명령하지 않고, 흐르는 AI를 디자인합니다.',
    'philosophy.description': '우리의 기술은 지시하기 위해 만들어진 것이 아니라, 조화를 이루기 위해 만들어졌습니다. 인간의 감정과 함께 흐르고 당신의 리듬에 적응하는 AI입니다.',
    
    // Team
    'team.title': 'Join the Flow.',
    'team.description': '우리는 데이터가 아닌 감정을 이해하는 AI를 만들고 있습니다. 창의성, 공감, 그리고 인간적 연결을 소중히 여기는 팀에 합류하세요.',
    'team.cta1': '채용 공고 보기',
    'team.cta2': '협업하기',
    
    // Contact
    'contact.title': "Let's Connect.",
    'contact.subtext': '협업하거나, 파트너십을 맺거나, 그냥 인사하세요.',
    'contact.cta1': 'Wave X에 연락하기',
    'contact.email': 'Email: hello@wavex.ai',
    
    // Footer
    'footer.copyright': '© 2025 Wave X — Designing AI that Flows.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.philosophy': 'Philosophy',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.slogan': 'Where Human Waves Meet AI.',
    'hero.subtext': 'We design AI that flows with you — calm, intuitive, and human.',
    'hero.cta1': 'Explore Wave I',
    'hero.cta2': 'Explore Grounded',
    'hero.cta3': 'Explore TodayIs',
    
    // About
    'about.title': 'About Wave X',
    'about.description': 'Wave X uses AI not to replace emotion, but to understand and extend it. We design technology that reads the rhythm of human feelings and turns it into flow.',
    'about.value1.title': 'Flow',
    'about.value1.desc': 'Emotions and thoughts are fluid.',
    'about.value2.title': 'Balance',
    'about.value2.desc': 'Harmony between human and technology.',
    'about.value3.title': 'Clarity',
    'about.value3.desc': 'Simplify emotional complexity.',
    'about.value4.title': 'Empathy',
    'about.value4.desc': 'Every AI starts from understanding.',
    
    // Services
    'services.title': 'Our Services',
    'waveI.slogan': 'Ride your inner wave.',
    'waveI.subSlogan': 'Flow with your feelings.',
    'waveI.title': 'Wave I — AI Psychological Care',
    'waveI.description': 'Mental health matters as much as physical health. Wave I is an AI psychological care service that helps your emotions flow naturally. Chat with AI characters, write in your diary, record your feelings, and gradually look inward. Follow the waves of your heart and meet yourself.',
    'waveI.feature1': 'Wave — Emotion visualization & interaction (emotion garden, emotion bin, doodle, etc.)',
    'waveI.feature2': 'Chat — Conversations with 3 AI characters with unique personalities',
    'waveI.feature3': 'Diary — Emotion stickers, time capsule, wave backgrounds',
    'waveI.feature4': 'Report — Weekly/monthly emotion statistics and AI analysis',
    'waveI.cta': 'Get Started',
    
    'grounded.slogan': 'Stand on reason.',
    'grounded.subSlogan': 'Clarity begins where reason stands.',
    'grounded.title': 'Grounded — Building Law AI Platform',
    'grounded.description': 'Grounded is an AI platform that bridges architectural practice and legal reasoning. It retrieves the most relevant grounds within complex regulations and builds clear, well-founded answers that professionals can trust.',
    'grounded.feature1': 'Legal Grounds — Precise retrieval of laws, ordinances, and rules',
    'grounded.feature2': 'Clear Interpretation — Complex legal terms in plain language',
    'grounded.feature3': 'Practical Application — Case-based answers with precedents',
    'grounded.feature4': 'Latest Regulations — Auto-updates with amendments',
    
    'todayis.slogan': 'Remember Your Day.',
    'todayis.subSlogan': 'Today is yours to keep.',
    'todayis.title': 'TodayIs — Emotion-based Life Tracker',
    'todayis.description': 'A service that helps you consciously observe the days that unconsciously pass by. Record your time with a timeline, reflect on emotions with AI, and discover the meaning of each day. Recording is the act of turning time into meaning.',
    'todayis.feature1': 'Timeline View — Visualize your day from 00:00 to 24:00',
    'todayis.feature2': 'AI Feedback — Daily summary and suggestions for tomorrow',
    'todayis.feature3': 'AI Coach Chatbot — Personalized conversation based on records',
    'todayis.feature4': 'Emotion Reflection — Mood tracking and pattern analysis',
    'todayis.cta': 'Get Started',
    
    'christmas.badge': 'Christmas Season Special Test',
    'christmas.title': 'Year-end Triple Test for Office Workers',
    'christmas.description':
      'A light-weight event test for the Christmas season by Wave X. From company-style Christmas fortune, to gifts from “Santa” for office workers, to an end-of-year overtime calculator — a shareable mini-site for colleagues to laugh over together.',
    'christmas.cta': 'Go to Christmas Event',

    'christmas.card1.title': 'Company-style Christmas Fortune',
    'christmas.feature1':
      'What will your office life look like this year-end? From your boss’s mood to your overtime luck.',
    'christmas.card2.title': 'Gift from Santa for Office Workers',
    'christmas..feature2':
      'What kind of gift will you receive this year? From bonuses to early-leave passes, see your tailored gift.',
    'christmas.card3.title': 'Year-end Overtime Calculator',
    'christmas..feature3':
      'How many nights of overtime await you this holiday? A “scientific” estimate of your year-end workload.',


    // Philosophy
    'philosophy.title': 'We design AI that flows — not commands.',
    'philosophy.description': 'Our technology isn\'t built to instruct, but to harmonize. AI that flows with human emotion and adapts to your rhythm.',
    
    // Team
    'team.title': 'Join the Flow.',
    'team.description': 'We\'re building AI that understands emotion, not just data. Join a team that values creativity, empathy, and human connection.',
    'team.cta1': 'View Open Roles',
    'team.cta2': 'Collaborate with Us',
    
    // Contact
    'contact.title': "Let's Connect.",
    'contact.subtext': 'Collaborate, partner, or just say hello.',
    'contact.cta1': 'Contact Wave X',
    'contact.email': 'Email: hello@wavex.ai',
    
    // Footer
    'footer.copyright': '© 2025 Wave X — Designing AI that Flows.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ko');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ko']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
