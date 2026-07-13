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
    'nav.about': '소개',
    'nav.services': '서비스',
    'nav.philosophy': '철학',
    'nav.team': '팀',
    'nav.contact': 'Contact',
    'nav.legal': '약관 및 개인정보 보호',

    // Hero
    'hero.slogan': 'AI의 새로운 물결로, 더 나은 삶의 시대를 엽니다.',
    'hero.subtext': '우리는 당신과 함께 흐르는 AI를 디자인합니다 — 차분하고, 직관적이며, 인간적인.',
    'hero.cta0': 'PomoPet 시작하기',
    'hero.cta4': 'LuckyDream 시작하기',
    'hero.cta1': 'WAVE log 살펴보기',
    'hero.cta2': 'Grounded 살펴보기',
    'hero.cta3': '하루의 운세 살펴보기',
    // 'hero.cta3': 'TodayIs 살펴보기',
    
    // About
    'about.title': 'About WAVERA',
    'about.description': '웨이베라(WAVERA)는 AI의 새로운 물결로 사람들을 더 나은 삶으로 이끌고, 더 나은 시대를 엽니다.',
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

    // PomoPet
    'pomopet.slogan': '집중할 땐, 귀여운 친구와 함께.',
    'pomopet.subSlogan': 'Focus with your tiny companion.',
    'pomopet.title': 'PomoPet — 데스크탑 펫 집중 타이머',
    'pomopet.description': '귀여운 캐릭터 펫이 데스크탑 위에 상주하며 뽀모도로 타이머로 집중 시간을 함께 기록합니다. 무무, 핑구, 트리버와 함께 더 즐겁게 집중하세요. 회원가입도 인터넷도 필요 없이, 모든 데이터는 내 PC에만 저장됩니다.',
    'pomopet.feature1': '뽀모도로·타이머·스톱워치 모드',
    'pomopet.feature2': '귀여운 캐릭터 펫 — 무무, 핑구, 트리버',
    'pomopet.feature3': '통계 대시보드 & 주간 집중 기록',
    'pomopet.feature4': '100% 로컬 — 회원가입·인터넷 불필요',
    'pomopet.cta': '시작하기',
    'pomopet.badge': 'macOS 데스크탑 앱',

    // LuckyDream
    'luckydream.slogan': '꿈의 요정이 전하는 신비로운 메시지를 받아보세요',
    'luckydream.subSlogan': 'Your dream, decoded by Dream Fairy.',
    'luckydream.title': '럭키드림 — AI 꿈 해몽',
    'luckydream.description': '꿈의 요정이 당신의 꿈을 해석하고, 당신의 궁금함에 대해 자세히 설명해드려요.',
    'luckydream.feature1': 'AI 꿈 해몽',
    'luckydream.feature2': '궁금한 점 질문 — 꿈과 연결된 맞춤 답변',
    'luckydream.feature3': '꿈과 연결된 행운의 아이템',
    'luckydream.feature4': '꿈의 요정이 전하는 꿈 카드',
    'luckydream.cta': '시작하기',
    'luckydream.badge': 'AI 웹 서비스',

    'waveI.slogan': 'Ride your inner wave.',
    'waveI.subSlogan': '당신의 파도를 따라 흘러가세요.',
    'waveI.title': 'WAVE log — AI 심리 케어',
    'waveI.description': '몸의 건강만큼 마음의 건강도 중요합니다. WAVE log는 당신의 감정이 자연스럽게 흐를 수 있도록 도와주는 AI 서비스입니다. AI 캐릭터와 함께 대화하고, 일기를 쓰고, 감정을 기록하며 조금씩 나를 돌아보세요.',
    'waveI.feature1': 'Wave — 감정 정원, 감정 쓰레기통, 낙서장, 미션',
    'waveI.feature2': '채팅 — 3가지 개성을 가진 AI 캐릭터와 대화',
    'waveI.feature3': '일기 — 감정 스티커, 감정 파도, 타임캡슐, 1일1답',
    'waveI.feature4': '리포트 — 주간/월간 감정 통계와 AI 인사이트',
    'waveI.cta': '시작하기',
    
    'grounded.slogan': '근거 위에, 답을 세우다.',
    'grounded.subSlogan': 'Stand on reason.',
    'grounded.title': 'Grounded — 건축법 AI 질의응답',
    'grounded.description': 'Grounded는 건축 실무에서 마주하는 법적 질문에 대해 명확하고 신뢰할 수 있는 근거를 제시하는 AI 질의응답 서비스입니다. 우리는 방대한 법령 속에서 당신의 판단이 설 수 있는 단단한 근거를 찾아드립니다.',
    'grounded.feature1': '법적 근거 제공 — 정확한 법령, 조례, 규칙 검색',
    'grounded.feature2': '명확한 해석 — 복잡한 법률 용어를 쉬운 말로',
    'grounded.feature3': '실무 적용 — 실제 사례와 판례 기반 답변',
    'grounded.feature4': '최신 법규 — 개정 내용 자동 반영',
    'grounded.cta': '베타서비스 시작하기',

    'fortune.slogan': '고민에서 답으로, 오늘의 흐름을 읽다.',
    'fortune.subSlogan': '하루와 운세를 AI와 함께.',
    'fortune.title': '하루의 운세 — AI 운세 상담 & 맞춤 리포트',
    'fortune.description': '하루의 운세는 증명된 사주 데이터를 기반으로 대화형 상담과 개인화된 사주 리포트를 제공해주는 서비스입니다. 궁금한 점을 모두 물어보세요!',
    'fortune.feature1': '운세/사주 기반 AI 상담',
    'fortune.feature2': '개인화된 맞춤 리포트 제공',
    'fortune.feature3': '3가지 이용 방식 — 채팅, 질문 5개, 리포트 즉시 생성',
    'fortune.feature4': '실행 중심 제안 — 오늘 바로 실천할 액션 가이드',
    'fortune.cta': 'Coming Soon',
    
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
      '크리스마스 시즌, WAVERA가 준비한 가벼운 이벤트 테스트입니다.\n직장인 연말, 산타가 주는 직장인 특별 선물, 내 연말 잔업률 계산기까지 — 동료들과 링크를 공유하고 결과를 확인하세요.',
    'christmas.cta': '  테스트 시작하기  ',

    'christmas.card1.title': '회사식 크리스마스 운세',
    'christmas.feature1':
      '올해 연말, 나는 칼퇴 요정인가 야근 좀비인가? 회사에서 맞이할 엔딩을 확인하세요.',
    'christmas.card2.title': '산타 대신 받을 직장인 선물',
    'christmas.feature2':
      '올해 당신이 받을 선물은? 직장인 맞춤 선물을 확인하세요.',
    'christmas.card3.title': '내 연말 잔업률 계산기',
    'christmas.feature3':
      '연말에는 야근 없는 일상을 보낼 수 있을까요? 과학적(?)인 분석으로 예측해드립니다.',

    

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
    'contact.cta1': 'WAVERA에 연락하기',
    'contact.email': 'Email: fromwave.x@gmail.com',
    
    // Footer
    'footer.copyright': '© 2026 WAVERA — Designing AI that Flows.',

    // Legal
    'legal.title': '약관 및 개인정보 보호',
    'legal.subtitle': 'WAVERA 서비스 이용약관 및 개인정보 처리방침',
    'legal.terms.tab': '이용약관',
    'legal.privacy.tab': '개인정보 처리방침',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.philosophy': 'Philosophy',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.legal': 'Terms & Privacy',

    // Hero
    'hero.slogan': 'Opening a better era of life with a new wave of AI.',
    'hero.subtext': 'We design AI that flows with you — calm, intuitive, and human.',
    'hero.cta0': 'Get Started with PomoPet',
    'hero.cta4': 'Try LuckyDream',
    'hero.cta1': 'Explore WAVE log',
    'hero.cta2': 'Explore Grounded',
    'hero.cta3': 'Explore Daily Fortune',
    
    // About
    'about.title': 'About WAVERA',
    'about.description': 'WAVERA creates a new wave with AI, guiding everyday life toward a better era.',
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

    // PomoPet
    'pomopet.slogan': 'Focus with your tiny companion.',
    'pomopet.subSlogan': 'A cute pet lives on your desktop.',
    'pomopet.title': 'PomoPet — Desktop Pet Focus Timer',
    'pomopet.description': 'Cute character pets live on your desktop and track your focus time with a Pomodoro timer. Mumu, Pingu, and Triver are here to make your focus sessions more fun. No sign-up, no internet — all data stays on your PC.',
    'pomopet.feature1': 'Pomodoro, Timer & Stopwatch modes',
    'pomopet.feature2': 'Cute character pets — Mumu, Pingu, Triver',
    'pomopet.feature3': 'Stats dashboard & weekly focus history',
    'pomopet.feature4': '100% Local — no sign-up, no internet',
    'pomopet.cta': 'Get Started',
    'pomopet.badge': 'macOS Desktop App',

    // LuckyDream
    'luckydream.slogan': 'Receive a mysterious message from the Dream Fairy.',
    'luckydream.subSlogan': 'Your dream, decoded by Dream Fairy.',
    'luckydream.title': 'LuckyDream — AI Dream Interpretation',
    'luckydream.description': 'The Dream Fairy interprets your dream and explains the answers to your questions in detail.',
    'luckydream.feature1': 'AI Dream Interpretation',
    'luckydream.feature2': 'Ask a Question — personalized answers linked to your dream',
    'luckydream.feature3': 'Lucky items connected to your dream',
    'luckydream.feature4': 'A dream card delivered by the Dream Fairy',
    'luckydream.cta': 'Get Started',
    'luckydream.badge': 'AI Web Service',

    'waveI.slogan': 'Ride your inner wave.',
    'waveI.subSlogan': 'Flow with your feelings.',
    'waveI.title': 'WAVE log — AI Psychological Care',
    'waveI.description': 'Mental health matters as much as physical health. WAVE log is an AI psychological care service that helps your emotions flow naturally. Chat with AI characters, write in your diary, record your feelings, and gradually look inward. Follow the waves of your heart and meet yourself.',
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
    'grounded.cta': 'Coming Soon',

    'fortune.slogan': 'From concerns to clarity, read today\'s flow.',
    'fortune.subSlogan': 'Daily fortune with AI guidance.',
    'fortune.title': 'Daily Fortune — AI Consultation & Personalized Report',
    'fortune.description': 'Built from wavei-solution, Daily Fortune connects conversational consultation to personalized reporting. Start with the mode you prefer: live chat, five guided questions, or instant report-only generation.',
    'fortune.feature1': 'AI Consultation — Clarify today\'s concerns through dialogue',
    'fortune.feature2': 'Personalized Report — Analysis based on your conversation/inputs',
    'fortune.feature3': '3 Usage Modes — Chat, 5-question flow, report-only',
    'fortune.feature4': 'Actionable Guidance — Practical next steps for today',
    'fortune.cta': 'Coming Soon',
    
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
      'A light-weight event test for the Christmas season by WAVERA.\nFrom company-style Christmas event, to gifts from "Santa" for office workers, to an end-of-year overtime calculator — a shareable mini-site for colleagues to laugh over together.',
    'christmas.cta': 'Go to Christmas Event',

    'christmas.card1.title': 'Company-style Christmas Event',
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
    'contact.cta1': 'Contact WAVERA',
    'contact.email': 'Email: fromwave.x@gmail.com',
    
    // Footer
    'footer.copyright': '© 2026 WAVERA — Designing AI that Flows.',

    // Legal
    'legal.title': 'Terms & Privacy',
    'legal.subtitle': 'WAVERA Terms of Service and Privacy Policy',
    'legal.terms.tab': 'Terms of Service',
    'legal.privacy.tab': 'Privacy Policy',
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
