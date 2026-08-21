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
    'hero.cta2': 'GROUNDED 시작하기',
    'hero.cta3': '하루의 운세 살펴보기',
    'hero.ctaSayLong': 'SayLong 시작하기',
    'hero.moreServices': '서비스 더 보기',
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
    'pomopet.slogan': '작지만 든든한 집중 파트너',
    'pomopet.subSlogan': 'A small but mighty focus partner',
    'pomopet.title': '뽀모펫 — 데스크탑 시간을 기록하는 작고 따뜻한 앱',
    'pomopet.description': '귀여운 캐릭터 펫이 데스크탑 위에 상주하며 뽀모도로 타이머로 집중 시간을 함께 기록합니다. 무무, 핑구, 트리버와 함께 더 즐겁게 집중하세요. 회원가입도 인터넷도 필요 없이, 모든 데이터는 내 PC에만 저장됩니다.',
    'pomopet.feature1': '뽀모도로·타이머·스톱워치 모드',
    'pomopet.feature2': '귀여운 펫 캐릭터 (캐릭터 커스텀 가능)',
    'pomopet.feature3': '대시보드 제공',
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

    // Mallimi
    'mallimi.slogan': '결제 직전, 황당한 이유로 소비를 말려주는 앱',
    'mallimi.subSlogan': 'Don\'t Buy It, says the dried squid.',
    'mallimi.title': '말리미 — 결제 말리미',
    'mallimi.description': '사고 싶은 물건과 가격을 입력하면, 말린 오징어 캐릭터 \'말리미\'가 가격과 카테고리를 분석하는 척하며 어떻게든 안 사야 할 이유를 찾아줘요. 설득되지 않으면 다른 이유를 요구하고, 그래도 사고 싶다면 말리미의 체념을 받을 수 있어요.',
    'mallimi.feature1': '가격대별 황당한 만류 문구',
    'mallimi.feature2': '카테고리·이유 맞춤 반응',
    'mallimi.feature3': '약해, 다른 이유로 말려줘 (최대 3회)',
    'mallimi.feature4': '결과를 이미지로 저장·공유',
    'mallimi.cta': '말려달라고 하기 (토스 미니앱)',
    'mallimi.badge': '앱인토스 미니앱',

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
    'grounded.subSlogan': 'Build answers on evidence.',
    'grounded.title': 'Grounded — 건축법령 AI 에이전트',
    'grounded.description': 'Grounded는 건축 관련 질문을 분석하고, 관련 법령을 검색해 근거와 함께 안내하는 AI 서비스입니다. 복잡하게 연결된 법령과 참조 조문을 확인하여 사용자가 필요한 기준을 더 쉽고 명확하게 찾을 수 있도록 돕습니다. 모든 데이터는 법제처에서 제공됩니다.',
    'grounded.feature1': '건축법령 상담 — 질문에 관련된 법령과 조례를 근거로 답변',
    'grounded.feature2': '법령 검색 — 질문의 핵심 쟁점을 분석해 관련 조문 검색',
    'grounded.feature3': '참조 조문 확장 — 연결된 법령·시행령·시행규칙까지 확인',
    'grounded.feature4': '근거 확인 — 답변에 실제 사용된 법령과 조문 원문 제공',
    'grounded.cta': '베타서비스 시작하기',

    // SayLong
    'saylong.slogan': '한국어로 시작해 영어로 말하다.',
    'saylong.subSlogan': 'Build it. Say it. Own it.',
    'saylong.title': 'SayLong — AI 영어 말하기 코치',
    'saylong.description': '한국어로 하고 싶은 말을 입력하면, AI가 단계별 영어 문장으로 분해해 말하기 연습을 도와줍니다. 매일 새로운 오늘의 미션으로 일상 영어 표현을 쌓고, 복습 플래시카드로 내 표현을 완성하세요.',
    'saylong.feature1': 'AI 문장 분해 — 한국어를 단계별 영어 말하기로',
    'saylong.feature2': '3가지 모드 — 한국어로 시작 / 영어로 먼저 / 오늘의 미션',
    'saylong.feature3': 'AI 피드백 & 코칭 — 문법, 표현, 점수 제공',
    'saylong.feature4': '복습 플래시카드 — 완성된 문장 반복 학습',
    'saylong.cta': '시작하기',

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
    'footer.copyright': '© 2026 WAVERA. All rights reserved.',
    'footer.info': '대표 김홍비 · 사업자등록번호 184-17-02717',

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
    'hero.cta4': 'Get Started with LuckyDream',
    'hero.cta1': 'Explore WAVE log',
    'hero.cta2': 'Get Started with GROUNDED',
    'hero.cta3': 'Explore Daily Fortune',
    'hero.ctaSayLong': 'Get Started with SayLong',
    'hero.moreServices': 'View More Services',
    
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
    'pomopet.slogan': 'Your Cozy Desktop Focus Companion',
    'pomopet.subSlogan': 'A small but mighty focus partner',
    'pomopet.title': 'Pomopet — A Cozy Desktop App That Tracks Your Focus Time',
    'pomopet.description': 'Cute pet companions stay on your desktop and keep track of your focus sessions with a Pomodoro timer. Stay motivated with Mumu, Pingu, and Triver. No sign-up or internet required—everything is stored locally on your computer.',
    'pomopet.feature1': 'Pomodoro Timer, Timer & Stopwatch',
    'pomopet.feature2': 'Cute Pet Characters (Customizable)',
    'pomopet.feature3': 'Focus Dashboard',
    'pomopet.feature4': '100% Local — No Sign-up or Internet Required',
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

    // Mallimi
    'mallimi.slogan': 'Right before checkout, it talks you out of buying — for absurd reasons.',
    'mallimi.subSlogan': 'Don\'t Buy It, says the dried squid.',
    'mallimi.title': 'Mallimi — Don\'t Buy It',
    'mallimi.description': 'Enter what you want to buy and its price, and Mallimi — a dried squid character — pretends to analyze the price and category to find some reason, any reason, not to buy it. Not convinced? Ask for another reason. Still want it anyway? Mallimi will accept your decision, reluctantly.',
    'mallimi.feature1': 'Absurd reasons tailored to the price range',
    'mallimi.feature2': 'Responses matched to category and reason',
    'mallimi.feature3': '"Try again" for another reason (up to 3 times)',
    'mallimi.feature4': 'Save and share the result as an image',
    'mallimi.cta': 'Talk Me Out of It (in Toss Mini App)',
    'mallimi.badge': 'Apps in Toss Mini App',

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

    // SayLong
    'saylong.slogan': 'Start in Korean. Speak in English.',
    'saylong.subSlogan': 'Build it. Say it. Own it.',
    'saylong.title': 'SayLong — AI English Speaking Coach',
    'saylong.description': 'Type what you want to say in Korean, and SayLong\'s AI breaks it down into step-by-step English speaking practice. Build your expressions with daily missions and reinforce them with review flashcards.',
    'saylong.feature1': 'AI Sentence Breakdown — From Korean to step-by-step English',
    'saylong.feature2': '3 Modes — Korean First / English First / Daily Mission',
    'saylong.feature3': 'AI Feedback & Coaching — Grammar, expressions, scores',
    'saylong.feature4': 'Review Flashcards — Spaced repetition for your expressions',
    'saylong.cta': 'Get Started',

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
    'footer.copyright': '© 2026 WAVERA. All rights reserved.',
    'footer.info': 'CEO Hongbi Kim · Business Registration No. 184-17-02717',

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
