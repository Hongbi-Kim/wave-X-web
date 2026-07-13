import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Shield } from 'lucide-react';

interface LegalSectionProps {
  defaultTab?: 'terms' | 'privacy';
}

export function LegalSection({ defaultTab = 'terms' }: LegalSectionProps) {
  const { t, language } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  // URL에서 현재 활성 탭 결정
  const activeTab = location.pathname === '/privacy' ? 'privacy' : 'terms';

  console.log('Current pathname:', location.pathname);
  console.log('Active tab:', activeTab);

  // 링크 클릭 핸들러 - 페이지 리로드 방지하고 React Router로 이동
  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigate(path);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A2E40] mb-4">
            {t('legal.title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('legal.subtitle')}
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full">
          <div className="grid w-full grid-cols-2 mb-8 bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-xl p-[3px]">
            <a
              href="https://wavetox.com/terms"
              onClick={(e) => handleTabClick(e, '/terms')}
              className="flex items-center gap-2 h-[calc(100%-1px)] flex-1 justify-center rounded-xl px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50"
              style={activeTab === 'terms' ? {
                border: '3px solid rgb(34, 197, 94)',
                backgroundColor: 'rgb(220, 252, 231)',
                fontWeight: 'bold',
                color: '#1A2E40'
              } : {
                color: '#6B7280'
              }}
            >
              <FileText className="w-4 h-4" />
              {t('legal.terms.tab')}
            </a>
            <a
              href="https://wavetox.com/privacy"
              onClick={(e) => handleTabClick(e, '/privacy')}
              className="flex items-center gap-2 h-[calc(100%-1px)] flex-1 justify-center rounded-xl px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50"
              style={activeTab === 'privacy' ? {
                border: '3px solid rgb(34, 197, 94)',
                backgroundColor: 'rgb(220, 252, 231)',
                fontWeight: 'bold',
                color: '#1A2E40'
              } : {
                color: '#6B7280'
              }}
            >
              <Shield className="w-4 h-4" />
              {t('legal.privacy.tab')}
            </a>
          </div>

          {/* Terms of Service */}
          {activeTab === 'terms' && (
            <div className="mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6 text-sm">
                {language === 'ko' ? (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2">제1조 (목적)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        본 약관은 WAVERA(이하 "회사")가 제공하는 WAVE log(웨이브로그, 이하 "서비스")의
                        이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
                        규정함을 목적으로 합니다.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제2조 (용어의 정의)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. "서비스"란 회사가 제공하는 AI 캐릭터 대화, 감정 일기, 감정 리포트, 감정 정원, 타임캡슐 등 관련 모든 서비스를 말합니다.</p>
                        <p>2. "이용자"란 본 약관에 따라 서비스에 접속하여 회사가 제공하는 서비스를 이용하는 자를 말하며, 회원을 포함합니다.</p>
                        <p>3. "회원"이란 서비스에 회원 가입을 하고 계정을 부여받아 지속적으로 서비스를 이용할 수 있는 자를 말합니다.</p>
                        <p>4. "AI 캐릭터"란 서비스 내에서 이용자와 대화하는 인공지능 기반 가상 캐릭터를 말합니다.</p>
                        <p>5. "유료 서비스"란 Wave Pro 구독, 심층 보고서 등 회사가 별도의 요금을 받고 제공하는 서비스를 말합니다.</p>
                      </div>
                    </section>

                    {/* 제3조 약관의 효력 및 변경 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제3조 (약관의 효력 및 변경)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</p>
                        <p>
                          2. 회사는 관련 법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다. 약관을 개정하는 경우
                          개정 내용과 적용일자를 명시하여 서비스 내 공지사항 등을 통해 최소 7일 전에 공지합니다.
                          다만, 이용자에게 불리한 변경의 경우 최소 30일 전에 공지합니다.
                        </p>
                        <p>
                          3. 회사가 개정 약관을 공지하면서 “변경 약관 시행일까지 거부 의사를 표시하지 않으면 동의한 것으로 본다”는
                          내용을 고지하였음에도 이용자가 명시적으로 거부 의사를 표시하지 않은 경우, 이용자가 변경 약관에 동의한 것으로 봅니다.
                        </p>
                        <p>
                          4. 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용계약을 해지할 수 있으며
                          이 경우 회사는 관련 법령에 따라 필요한 조치를 합니다.
                        </p>
                      </div>
                    </section>

                    {/* 제4조 이용 연령 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제4조 (이용 연령)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 본 서비스는 원칙적으로 만 14세 이상의 이용자를 대상으로 합니다.</p>
                        <p>
                          2. 회사는 만 14세 미만 아동의 회원가입을 허용하지 않으며, 법정대리인의 동의 없이
                          만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
                        </p>
                      </div>
                    </section>

                    {/* 제5조 서비스의 제공 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제5조 (서비스의 제공)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 다음과 같은 서비스를 제공합니다.</p>
                        <p className="pl-4">- AI 캐릭터(루미, 카이, 리브 등)와의 대화 서비스</p>
                        <p className="pl-4">- 감정 일기 및 타임캡슐 작성·보관 서비스</p>
                        <p className="pl-4">- 감정 분석 및 주간·월간 리포트 제공 서비스</p>
                        <p className="pl-4">- 감정 정원, 감정 파도 등 감정 시각화 서비스</p>
                        <p className="pl-4">- 구글 캘린더 연동을 통한 일정 기반 대화 및 루틴 분석 서비스</p>
                        <p className="pl-4">- 기타 회사가 추가로 개발하거나 제휴를 통해 제공하는 서비스</p>
                        <p>
                          2. 서비스는 원칙적으로 연중무휴, 1일 24시간 제공됩니다. 다만, 시스템 점검,
                          장애 대응, 보안 이슈, 기타 운영상 상당한 이유가 있는 경우 서비스의 전부 또는 일부를 일시 중단할 수 있습니다.
                        </p>
                        <p>
                          3. 회사는 서비스의 개선 및 안정적인 제공을 위하여 서비스의 전부 또는 일부를 변경할 수 있으며,
                          그 내용과 일정을 사전에 서비스 내 공지사항 등을 통해 안내합니다.
                          다만, 예측할 수 없는 장애·보안 이슈 등 긴급한 사유가 있는 경우 사후에 안내할 수 있습니다.
                        </p>
                      </div>
                    </section>

                    {/* 제6조 회원가입 및 계정 관리 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제6조 (회원가입 및 계정 관리)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. 이용자는 회사가 정한 절차에 따라 회원가입을 신청하고, 회사가 이를 승낙함으로써 회원으로 등록됩니다.
                        </p>
                        <p>2. 회사는 다음 각 호에 해당하는 경우 회원가입을 거절하거나 사후에 회원 자격을 제한·정지 또는 상실시킬 수 있습니다.</p>
                        <p className="pl-4">- 타인의 이메일 등 정보를 도용하거나 허위 정보를 기재한 경우</p>
                        <p className="pl-4">- 회원 자격이 정지 또는 상실된 이력이 있는 자가 재가입을 신청한 경우</p>
                        <p className="pl-4">- 기타 회사가 서비스 운영 및 다른 이용자의 권익 보호를 위해 부적절하다고 판단하는 경우</p>
                        <p>
                          3. 회원은 자신의 계정 정보(이메일, 비밀번호 등)를 안전하게 관리할 책임이 있으며, 제3자에게 양도·대여하거나
                          공유할 수 없습니다.
                        </p>
                        <p>
                          4. 회원은 회원정보가 변경된 경우, 서비스 내 프로필 화면을 통해 지체 없이 수정해야 하며,
                          정보를 수정하지 않아 발생한 불이익에 대해서는 회사가 책임지지 않습니다.
                        </p>
                      </div>
                    </section>

                    {/* 제7조 이용자의 의무 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제7조 (이용자의 의무)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>이용자는 다음 각 호의 행위를 하여서는 안 됩니다.</p>
                        <p className="pl-4">- 회원가입 또는 프로필 설정 시 허위 정보 기재</p>
                        <p className="pl-4">- 타인의 계정 정보 도용, 공유, 판매, 대여 등 부정 사용</p>
                        <p className="pl-4">- 욕설, 혐오 표현, 괴롭힘, 위협 등 타인에게 피해를 주는 행위</p>
                        <p className="pl-4">- 서비스의 정상적인 운영을 방해하는 행위(자동화 스크립트, 과도한 트래픽 유발 등)</p>
                        <p className="pl-4">- 회사의 명시적 허락 없이 서비스 또는 소프트웨어를 복제·변경·리버스엔지니어링·2차적 저작물 작성하는 행위</p>
                        <p className="pl-4">- 관련 법령, 본 약관, 회사의 운영정책을 위반하는 행위</p>
                        <p>
                          위 행위가 확인되는 경우 회사는 게시물 삭제, 서비스 이용 제한, 계정 해지 등 필요한 조치를 취할 수 있습니다.
                        </p>
                      </div>
                    </section>

                    {/* 제8조 유료 서비스 및 결제 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제8조 (유료 서비스 및 결제)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 기본 무료 서비스 외에 다음과 같은 유료 서비스를 제공할 수 있습니다.</p>
                        <p className="pl-4">- Wave Pro 구독: 채팅 사용량 증가, 월별 감정 리포트, 기능 제한 완화 등</p>
                        <p className="pl-4">- 심층 보고서: 채팅·일기 기반 추가 분석 리포트 등 개별 구매형 서비스</p>
                        <p>2. 유료 서비스의 가격, 제공 내용, 결제 방식, 환불 정책 등은 서비스 내 결제 화면 또는 안내 페이지에 별도로 고지합니다.</p>
                        <p>3. 정기 구독형 서비스의 경우, 이용자가 해지하지 않으면 약정 기간 단위로 자동 갱신될 수 있으며, 자동 갱신 여부와 해지 방법을 사전에 명확히 안내합니다.</p>
                        <p>4. 이용자는 유료 서비스 이용 전에 결제 조건을 충분히 확인해야 하며, 결제 완료 후에는 해당 조건에 따른 권리와 의무가 발생합니다.</p>
                      </div>
                    </section>

                    {/* 제9조 AI 서비스 관련 고지 및 학습 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제9조 (AI 서비스 관련 고지)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 서비스는 외부 AI API(예: 대형 언어 모델 API)를 활용하여 답변과 분석 결과를 제공합니다. AI의 특성상 항상 정확하거나 완전하지 않을 수 있으며, 오류·편향이 포함될 수 있습니다.</p>
                        <p>2. AI 캐릭터가 제공하는 답변 및 리포트는 참고용 정보이며, 정신건강의학과 진단, 치료, 응급상황 대응, 법률·재무 자문 등을 대체하지 않습니다.</p>
                        <p>3. 회사는 이용자의 대화 및 일기 데이터를 WAVERA 자체 모델 학습 목적으로 사용하지 않습니다. 다만, 외부 AI API 제공자의 정책에 따라 일부 데이터가 해당 제공자의 모델 품질 개선 목적으로 활용될 수 있으며, 이 경우 각 제공자의 약관과 개인정보 처리방침이 함께 적용됩니다.</p>
                      </div>
                    </section>

                    {/* 제10조 서비스의 변경 및 중단 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제10조 (서비스의 변경 및 중단)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 서비스의 안정적인 제공을 위하여 시스템 점검, 기능 개선, 보안 강화 등의 필요에 따라 서비스의 전부 또는 일부를 변경·중단할 수 있습니다.</p>
                        <p>2. 유료 서비스를 중단하는 경우, 회사는 관련 법령에 따라 사전에 공지하고, 잔여 이용 기간 또는 미사용 금액에 대해 합리적인 범위에서 보상을 제공하기 위해 노력합니다.</p>
                        <p>3. 무료로 제공되는 서비스의 변경·중단에 대해서는 관련 법령에 특별한 규정이 없는 한 별도의 보상이 제공되지 않습니다.</p>
                      </div>
                    </section>

                    {/* 제11조 면책조항 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제11조 (면책조항)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 서비스는 전문 심리상담, 의료 서비스, 응급지원 체계를 대체하지 않습니다. 이용자가 자·타해 위험 등 긴급한 상황에 처한 경우, 즉시 해당 지역의 응급 서비스나 전문 기관에 도움을 요청해야 합니다.</p>
                        <p>2. 회사는 천재지변, 전쟁, 테러, 정전, 통신사 장애, 클라우드 인프라 제공자 장애 등 불가항력적인 사유로 인해 서비스를 제공할 수 없는 경우 책임을 지지 않습니다.</p>
                        <p>3. 회사는 이용자의 귀책사유로 인한 서비스 이용 장애 및 손해에 대하여 책임을 지지 않습니다.</p>
                        <p>4. 회사는 이용자가 서비스를 통하여 기대하는 정신적·정서적 효과, 자기 성장 효과 등을 보장하지 않습니다.</p>
                      </div>
                    </section>

                    {/* 제12조 준거법 및 관할 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">제12조 (준거법 및 관할)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 본 약관은 대한민국 법령을 준거법으로 합니다.</p>
                        <p>2. 서비스 이용과 관련하여 회사와 이용자 간에 분쟁이 발생한 경우, 회사의 본사 소재지를 관할하는 대한민국 법원을 전속 관할 법원으로 합니다.</p>
                      </div>
                    </section>

                    {/* 시행일 */}
                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        공고일자: 2025년 12월 1일<br />
                        시행일자: 2025년 12월 1일
                      </p>
                    </section>
                  </>

                ) : (
                  <>
                    {/* Article 1 Purpose */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 1 (Purpose)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms of Service (“Terms”) set forth the rights, obligations and
                        responsibilities between WAVERA (the “Company”) and users in connection
                        with the use of the WAVE log (“Service”) provided by the Company, as well as
                        other necessary matters.
                      </p>
                    </section>

                    {/* Article 2 Definitions */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 2 (Definitions)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. “Service” means all services related to emotional/well‑being support
                          provided by the Company, including but not limited to AI character chat,
                          emotion diary, emotion reports, emotion garden, time capsule and other
                          related features.
                        </p>
                        <p>
                          2. “User” means any person who accesses the Service and uses the
                          services provided by the Company in accordance with these Terms,
                          including Members.
                        </p>
                        <p>
                          3. “Member” means a User who has signed up for the Service, has been
                          granted an account, and can continuously use the Service.
                        </p>
                        <p>
                          4. “AI Character” means an AI‑powered virtual character within the
                          Service that can converse with Users.
                        </p>
                        <p>
                          5. “Paid Services” means services for which the Company charges separate
                          fees, such as the Wave Pro subscription and in‑depth reports.
                        </p>
                      </div>
                    </section>

                    {/* Article 3 Effect and Amendment of the Terms */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 3 (Effect and Amendment of the Terms)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. These Terms apply to all Users who wish to use the Service and become
                          effective when the User agrees to them.
                        </p>
                        <p>
                          2. The Company may amend these Terms to the extent that such amendment
                          does not violate applicable laws. If the Company amends these Terms, it
                          will announce the revised Terms and their effective date through in‑
                          service notices at least seven (7) days before the effective date. If
                          the amendment is unfavorable to Users, the Company will notify at least
                          thirty (30) days in advance.
                        </p>
                        <p>
                          3. If the Company informs Users that “you will be deemed to have agreed
                          to the revised Terms unless you express your objection by the effective
                          date” and the User does not explicitly express an objection by that
                          date, the User is deemed to have agreed to the revised Terms.
                        </p>
                        <p>
                          4. If a User does not agree to the amended Terms, the User may terminate
                          the service use agreement, and in such case, the Company will take
                          necessary measures in accordance with applicable laws.
                        </p>
                      </div>
                    </section>

                    {/* Article 4 Age Requirement */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 4 (Age Requirement)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Service is intended for Users who are at least fourteen (14)
                          years old.
                        </p>
                        <p>
                          2. The Company does not allow children under the age of 14 to register
                          as Members and does not knowingly collect personal information from
                          children under 14 without the consent of a legal guardian.
                        </p>
                      </div>
                    </section>

                    {/* Article 5 Provision of the Service */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 5 (Provision of the Service)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company provides the following Services:</p>
                        <p className="pl-4">
                          - Conversation services with AI characters (such as Lumi, Kai, Leo and
                          Liv)
                        </p>
                        <p className="pl-4">
                          - Emotion diary and time capsule creation and storage
                        </p>
                        <p className="pl-4">
                          - Emotion analysis and weekly/monthly emotion reports
                        </p>
                        <p className="pl-4">
                          - Emotion garden, emotion waves and other emotion visualization
                          features
                        </p>
                        <p className="pl-4">
                          - Schedule‑based conversations and routine analysis via Google Calendar
                          integration
                        </p>
                        <p className="pl-4">
                          - Any other services developed by the Company or provided through
                          partnerships
                        </p>
                        <p>
                          2. In principle, the Service is provided 24 hours a day, 365 days a
                          year. However, all or part of the Service may be temporarily suspended
                          if reasonably necessary for system maintenance, error handling, security
                          issues or other operational reasons.
                        </p>
                        <p>
                          3. The Company may change all or part of the Service in order to improve
                          the Service and provide it in a stable manner, and will announce such
                          changes and their schedule in advance via notices within the Service.
                          However, in case of urgent reasons such as unexpected failures or
                          security issues, the Company may provide notice after the fact.
                        </p>
                      </div>
                    </section>

                    {/* Article 6 Membership and Account Management */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 6 (Membership and Account Management)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. Users apply for membership by following the procedure prescribed by
                          the Company, and become Members when the Company approves such
                          application.
                        </p>
                        <p>
                          2. The Company may refuse membership registration or later restrict,
                          suspend or terminate membership in the following cases:
                        </p>
                        <p className="pl-4">
                          - When a User uses another person&apos;s email or other information, or
                          provides false information
                        </p>
                        <p className="pl-4">
                          - When a User whose membership has previously been suspended or revoked
                          applies for re‑registration
                        </p>
                        <p className="pl-4">
                          - When the Company deems the application inappropriate for the stable
                          operation of the Service or the protection of other Users&apos; rights
                        </p>
                        <p>
                          3. Members are responsible for safely managing their account
                          information (such as email and password), and may not transfer,
                          lend or share their accounts with any third party.
                        </p>
                        <p>
                          4. If any member information changes, the Member must promptly update
                          such information through the profile screen in the Service, and the
                          Company is not responsible for any disadvantages arising from the
                          Member&apos;s failure to do so.
                        </p>
                      </div>
                    </section>

                    {/* Article 7 User Obligations */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 7 (User Obligations)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>Users must not engage in any of the following acts:</p>
                        <p className="pl-4">
                          - Providing false information when signing up or setting up a profile
                        </p>
                        <p className="pl-4">
                          - Fraudulent use such as stealing, sharing, selling or lending another
                          person&apos;s account information
                        </p>
                        <p className="pl-4">
                          - Acts that harm others, such as abusive language, hate speech,
                          harassment or threats
                        </p>
                        <p className="pl-4">
                          - Interfering with the normal operation of the Service (e.g. using
                          automated scripts, generating excessive traffic)
                        </p>
                        <p className="pl-4">
                          - Copying, modifying, reverse‑engineering or creating derivative works
                          of the Service or its software without the Company&apos;s explicit
                          consent
                        </p>
                        <p className="pl-4">
                          - Violating applicable laws, these Terms or the Company&apos;s
                          operational policies
                        </p>
                        <p>
                          If any of the above acts are confirmed, the Company may take necessary
                          measures such as deleting content, restricting the use of the Service or
                          terminating the account.
                        </p>
                      </div>
                    </section>

                    {/* Article 8 Paid Services and Payment */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 8 (Paid Services and Payment)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. In addition to the basic free Service, the Company may provide the
                          following paid services:
                        </p>
                        <p className="pl-4">
                          - Wave Pro subscription: increased chat usage limits, monthly emotion
                          reports, fewer feature restrictions, etc.
                        </p>
                        <p className="pl-4">
                          - In‑depth reports: additional analysis reports based on chats/diaries,
                          purchased individually
                        </p>
                        <p>
                          2. Prices, details, payment methods and refund policies for paid
                          services will be separately presented on the payment screen or in
                          relevant information pages within the Service.
                        </p>
                        <p>
                          3. For subscription‑type services, the subscription may be automatically
                          renewed for each billing period unless the User cancels, and the Company
                          will clearly inform Users in advance of automatic renewal and how to
                          cancel.
                        </p>
                        <p>
                          4. Users must carefully review the payment conditions before using any
                          paid service, and upon payment, rights and obligations arise in
                          accordance with those conditions.
                        </p>
                      </div>
                    </section>

                    {/* Article 9 AI Service Notice and Training */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 9 (AI Service Notice)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Service uses external AI APIs (e.g. large language model APIs) to
                          generate responses and analysis results. Due to the nature of AI, such
                          results may not always be accurate or complete and may contain errors or
                          bias.
                        </p>
                        <p>
                          2. Responses and reports provided by AI characters are for reference
                          only. They do not replace professional psychiatric diagnosis,
                          treatment, emergency response, or legal/financial advice.
                        </p>
                        <p>
                          3. The Company does not use Users&apos; conversations or diary data to
                          train WAVERA&apos;s own AI models. However, depending on the policies of
                          external AI API providers, some data may be used by such providers to
                          improve their models. In such cases, the terms of use and privacy
                          policies of each provider will also apply.
                        </p>
                      </div>
                    </section>

                    {/* Article 10 Changes and Suspension of the Service */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 10 (Changes and Suspension of the Service)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. To provide the Service in a stable manner, the Company may change or
                          suspend all or part of the Service as necessary for system
                          maintenance, feature improvements or security enhancements.
                        </p>
                        <p>
                          2. If paid services are to be discontinued, the Company will notify
                          Users in advance in accordance with applicable laws and will make
                          reasonable efforts to provide compensation for remaining subscription
                          periods or unused amounts.
                        </p>
                        <p>
                          3. Unless otherwise required by law, the Company is not obligated to
                          provide compensation for changes or discontinuation of services that are
                          provided free of charge.
                        </p>
                      </div>
                    </section>

                    {/* Article 11 Disclaimer */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 11 (Disclaimer)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Service does not replace professional mental health counseling,
                          medical services or emergency support systems. If a User is in an
                          urgent situation (e.g. risk of self‑harm or harm to others), they must
                          immediately seek help from local emergency services or professional
                          institutions.
                        </p>
                        <p>
                          2. The Company is not liable for failure to provide the Service due to
                          force majeure events such as natural disasters, war, terrorism, power
                          outages, network failures or outages of cloud infrastructure providers.
                        </p>
                        <p>
                          3. The Company is not responsible for any service disruptions or damage
                          caused by reasons attributable to the User.
                        </p>
                        <p>
                          4. The Company does not guarantee any specific mental, emotional or
                          personal growth effects that Users may expect from using the Service.
                        </p>
                      </div>
                    </section>

                    {/* Article 12 Governing Law and Jurisdiction */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        Article 12 (Governing Law and Jurisdiction)
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. These Terms are governed by the laws of the Republic of Korea.</p>
                        <p>
                          2. If any dispute arises between the Company and a User in connection
                          with the use of the Service, the competent court having jurisdiction
                          over the location of the Company&apos;s head office shall be the
                          exclusive court of jurisdiction.
                        </p>
                      </div>
                    </section>

                    {/* Effective date */}
                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        Date of announcement: December 1, 2025
                        <br />
                        Effective date: December 1, 2025
                      </p>
                    </section>
                  </>

                )}
              </div>
            </div>
        </div>
      )}

      {/* Privacy Policy */}
      {activeTab === 'privacy' && (
        <div className="mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6 text-sm">
                {language === 'ko' ? (
                  <>
                    {/* 1. 개인정보 처리방침의 목적 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">1. 개인정보 처리방침의 목적</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          WAVERA(이하 "회사")는 WAVE log(웨이브로그, 이하 "서비스")를 제공함에 있어
                          이용자의 개인정보를 소중하게 보호합니다. 본 개인정보 처리방침은 회사가
                          어떤 정보를 수집하고, 어떻게 이용·보관·파기하는지, 그리고 이용자가
                          자신의 개인정보에 대하여 어떤 권리를 행사할 수 있는지를 설명합니다.
                        </p>
                        <p>
                          회사는 대한민국 개인정보보호법 등 관련 법령을 준수하며, 서비스는 전
                          세계 이용자를 대상으로 제공되지만 개인정보 처리에 대해서는 본 방침을
                          공통 기준으로 적용합니다.
                        </p>
                      </div>
                    </section>

                    {/* 2. 수집하는 개인정보 항목 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">2. 수집하는 개인정보 항목</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p className="font-medium">가. 회원가입 및 프로필 설정 시</p>
                        <p className="pl-4">- 이메일 주소 (로그인 및 계정 식별용)</p>
                        <p className="pl-4">- 닉네임</p>
                        <p className="pl-4">- 생년월일</p>

                        <p className="pt-2 font-medium">나. 서비스 이용 과정에서 자동으로 수집되는 정보</p>
                        <p className="pl-4">- 서비스 이용 기록(가입 일시, 접속 일시 등 사용 이력)</p>
                        <p className="pl-4">- 접속 로그, IP 주소</p>

                        <p className="pt-2 font-medium">다. AI 대화 및 감정 일기 사용 시</p>
                        <p className="pl-4">- AI 캐릭터와 나눈 대화 내용</p>
                        <p className="pl-4">- 감정 일기 내용, 감정 스티커 선택 정보</p>
                        <p className="pl-4">
                          - 감정 분석 리포트 생성을 위한 분석 데이터
                          (예: 감정 분포, 사용 시간대, 자주 등장하는 키워드 등)
                        </p>

                        <p className="pt-2 font-medium">라. 구글 캘린더 연동 시</p>
                        <p className="pl-4">
                          - 구글 캘린더 연동 여부 및 상태  
                          - 캘린더 일정 메타데이터(제목, 시작·종료 일시 등)  
                          - 캘린더 API 접근을 위한 토큰 정보(암호화하여 별도 저장)
                        </p>
                        <p className="pl-4 text-xs text-gray-500">
                          * 회사는 구글 계정 비밀번호를 수집하지 않으며, OAuth 인증을 통해서만 캘린더 접근 권한을 위임받습니다.
                        </p>

                        <p className="pt-2 font-medium">마. 유료 서비스 이용 시</p>
                        <p className="pl-4">
                          - 결제 금액, 결제 일시, 결제 수단 종류 등 결제 관련 기본 정보  
                          - 실제 카드번호 등 민감한 결제 정보는 토스페이먼츠 등 결제 대행사를 통해 처리되며,
                            회사는 해당 정보를 직접 보관하지 않습니다.
                        </p>

                        <p className="pt-2 text-gray-700">
                          * 회사는 만 14세 미만 아동을 대상으로 서비스를 제공하지 않으며, 법정대리인의 동의 없이
                          만 14세 미만 아동의 개인정보를 의도적으로 수집하지 않습니다.
                        </p>
                      </div>
                    </section>

                    {/* 3. 개인정보의 이용 목적 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">3. 개인정보의 이용 목적</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>회사는 수집한 개인정보를 다음의 목적 범위 내에서만 이용합니다.</p>
                        <p className="pl-4">- 회원 식별, 로그인, 계정 관리, 부정 이용 방지 등 회원 관리</p>
                        <p className="pl-4">- AI 대화, 감정 일기, 감정 리포트, 감정 정원, 타임캡슐 등 서비스 제공</p>
                        <p className="pl-4">- 서비스 이용 패턴 분석, 기능 개선, 신규 기능 개발 등 서비스 품질 향상</p>
                        <p className="pl-4">- 비식별·가명 처리된 데이터를 활용한 통계 작성 및 연구·분석</p>
                        <p className="pl-4">- 유료 서비스(구독, 심층 보고서 등) 결제 및 정산, 구독 상태 관리</p>
                        <p className="pl-4">- 계정 도용·이상 행위 탐지, 스팸·악용 방지 등 보안 및 이용자 보호</p>

                        <p className="pt-2 pl-4">
                          회사는 수집한 데이터를 WAVERA 자체 모델 학습(사내 AI 모델 훈련) 목적으로 사용하지 않습니다.
                          다만, AI 응답 생성을 위해 연동된 외부 AI API 제공자의 정책에 따라 일부 데이터가 해당 제공자의
                          모델 품질 개선 목적으로 활용될 수 있으며, 이 경우 각 제공자의 약관 및 개인정보 처리방침이 함께
                          적용됩니다.
                        </p>
                      </div>
                    </section>

                    {/* 4. 개인정보의 보유 및 파기 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">4. 개인정보의 보유 및 파기</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 개인정보 보유 기간이 경과하거나 처리 목적이 달성된 경우, 지체 없이 해당 정보를 파기합니다.</p>
                        <p>2. 주요 개인정보의 보유 기간은 다음과 같습니다.</p>
                        <p className="pl-4">- 회원 가입 정보(이메일, 닉네임, 기본 프로필): 회원 탈퇴 시까지</p>
                        <p className="pl-4">- 대화 및 일기 내용: 회원 탈퇴 시 즉시 삭제 (법령상 보존 의무가 있는 경우 예외)</p>
                        <p className="pl-4">- 결제 및 거래 기록: 전자상거래법 등 관련 법령에 따라 최대 5년 보관</p>
                        <p className="pl-4">- 접속 로그(IP 포함): 통신비밀보호법에 따라 3개월 이상 보관</p>
                        <p className="pl-4">- 구글 캘린더 연동 정보 및 토큰: 이용자가 연동을 해제하거나 회원 탈퇴 시 즉시 삭제</p>
                        <p>3. 전자적 파일 형태의 개인정보는 복구 및 재생이 불가능한 방법으로 안전하게 삭제하며, 종이 문서는 파쇄 또는 소각 방식으로 파기합니다.</p>
                      </div>
                    </section>

                    {/* 5. 개인정보의 제3자 제공 및 국외 이전 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">5. 개인정보의 제3자 제공 및 국외 이전</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
                        <p className="pl-4">- 이용자가 사전에 명시적으로 동의한 경우</p>
                        <p className="pl-4">- 법령에 근거하여 수사기관, 법원 등 공공기관이 적법한 절차에 따라 요청한 경우</p>

                        <p className="pt-2">2. 서비스 제공을 위해 다음과 같이 일부 개인정보가 국외 클라우드 환경으로 이전될 수 있습니다.</p>

                        <p className="pl-4 font-medium">- AI 처리(응답 생성 및 분석)</p>
                        <p className="pl-4">
                          이용 목적: AI 답변 생성, 감정 분석, 리포트 생성  
                          이전되는 항목: 대화 내용, 일부 프로필 정보 등 프롬프트에 포함되는 정보(필요 최소한)  
                          보유·이용 기간: 서비스 제공 및 모델 개선 목적 달성 시까지, 각 제공자의 정책에 따름
                        </p>

                        <p className="pl-4 font-medium">- 인프라 및 데이터베이스 운영</p>
                        <p className="pl-4">
                          이용 목적: 서비스 호스팅, 데이터 저장·백업, 로그 관리  
                          이전되는 항목: 서비스 운영에 필요한 데이터 및 로그 정보  
                          이전 국가: 인프라 제공자의 서버 위치에 따라 상이  
                          보유·이용 기간: 서비스 이용 기간 및 관련 법령상 보존 기간
                        </p>

                        <p className="pl-4 font-medium">- 구글 캘린더 연동</p>
                        <p className="pl-4">
                          이용 목적: 이용자가 동의한 범위 내에서 일정 조회·추가, 루틴 분석 제공  
                          이전되는 항목: 일정 메타데이터 및 API 요청 정보  
                          보유·이용 기간: 연동 유지 기간 동안, 연동 해제 시 삭제
                        </p>
                      </div>
                    </section>

                    {/* 6. 쿠키 및 로그 정보 처리 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">6. 쿠키 및 로그 정보 처리</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 서비스 이용 분석, 오류 추적, 보안 강화, 사용자 경험 개선을 위해 쿠키 및 로그 정보를 수집·이용할 수 있습니다.</p>
                        <p>2. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우 일부 기능 이용에 제한이 있을 수 있습니다.</p>
                      </div>
                    </section>

                    {/* 7. 이용자의 권리와 행사 방법 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">7. 이용자의 권리와 행사 방법</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 이용자는 언제든지 서비스 내 프로필 화면 등에서 자신의 개인정보를 조회·수정할 수 있습니다.</p>
                        <p>2. 이용자는 회원 탈퇴를 통해 개인정보 수집·이용에 대한 동의를 철회할 수 있으며, 탈퇴 시 대부분의 개인정보는 즉시 삭제됩니다.</p>
                        <p>3. 이용자는 이메일(fromwave.x@gmail.com)을 통해 개인정보 열람, 정정, 삭제, 처리 정지를 요청할 수 있습니다. 회사는 관련 법령에 따른 범위 내에서 지체 없이 조치합니다.</p>
                      </div>
                    </section>

                    {/* 8. 개인정보의 안전성 확보 조치 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">8. 개인정보의 안전성 확보 조치</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>회사는 개인정보를 안전하게 처리하기 위하여 다음과 같은 보호 조치를 수행합니다.</p>
                        <p className="pl-4">- 중요한 정보(비밀번호, 대화 내용 등)에 대한 암호화 저장</p>
                        <p className="pl-4">- 개인정보에 접근 가능한 인원을 최소화하고, 접근 권한을 엄격하게 관리</p>
                        <p className="pl-4">- 외부 침입 차단 및 이상 행위 모니터링</p>
                        <p className="pl-4">- 정기적인 로그 점검 및 데이터 백업</p>
                      </div>
                    </section>

                    {/* 9. 문의 및 고객지원 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">9. 문의 및 고객지원</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 개인정보 보호 및 서비스 이용 관련 문의를 처리하기 위하여 다음과 같이 개인정보 보호 책임자(겸 담당 부서)를 지정합니다.</p>
                        <p className="pl-4">- 담당: WAVERA</p>
                        <p className="pl-4">- 연락처: fromwave.x@gmail.com</p>
                        <p>2. 서비스 이용, 결제, 개인정보 관련 문의는 이메일을 통해 접수하며, 평일 09:00~17:00(한국 시간 기준) 내에서 순차적으로 답변드립니다.</p>
                      </div>
                    </section>

                    {/* 10. 개인정보 처리방침의 변경 */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">10. 개인정보 처리방침의 변경</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 법령, 서비스 내용, 기술 환경의 변경에 따라 개인정보 처리방침이 수정될 수 있습니다.</p>
                        <p>2. 중요한 변경 사항이 있을 경우, 변경 최소 7일 전(이용자에게 중대한 영향이 있는 경우 최소 30일 전)에 서비스 내 공지사항 등을 통해 사전 공지합니다.</p>
                      </div>
                    </section>

                    {/* 시행일 */}
                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        공고일자: 2025년 12월 1일
                        <br />
                        시행일자: 2025년 12월 1일
                      </p>
                    </section>
                  </>

                ) : (
                  <>
                    {/* 1. Purpose of this Privacy Policy */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        1. Purpose of this Privacy Policy
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          WAVERA (hereinafter the "Company") values the protection of your
                          personal information when providing the WAVE log service (hereinafter the
                          "Service"). This Privacy Policy explains what information the Company
                          collects, how it is used, stored, and destroyed, and what rights you
                          have regarding your personal information.
                        </p>
                        <p>
                          The Company complies with the Personal Information Protection Act of
                          the Republic of Korea and other applicable laws. Although the Service
                          is provided globally, this Policy applies as a common standard to our
                          handling of personal information.
                        </p>
                      </div>
                    </section>

                    {/* 2. Personal Information We Collect */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        2. Personal Information We Collect
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p className="font-medium">A. When signing up and setting up your profile</p>
                        <p className="pl-4">
                          - Email address (for login and account identification)
                        </p>
                        <p className="pl-4">- Nickname</p>
                        <p className="pl-4">- Date of birth</p>

                        <p className="pt-2 font-medium">
                          B. Information automatically collected while using the Service
                        </p>
                        <p className="pl-4">
                          - Service usage records (e.g. time of sign-up, login time and other
                          usage history)
                        </p>
                        <p className="pl-4">- Access logs and IP address</p>

                        <p className="pt-2 font-medium">
                          C. When using AI chat and emotion diary features
                        </p>
                        <p className="pl-4">- Conversation content with AI characters</p>
                        <p className="pl-4">
                          - Emotion diary entries and selected emotion stickers
                        </p>
                        <p className="pl-4">
                          - Analytics data for generating emotion analysis reports
                          (e.g. emotion distribution, active time ranges, frequently used
                          keywords, etc.)
                        </p>

                        <p className="pt-2 font-medium">
                          D. When connecting Google Calendar
                        </p>
                        <p className="pl-4">
                          - Whether Google Calendar is connected and the connection status  
                          - Calendar event metadata (title, start/end date and time, etc.)  
                          - Token information used to access the Google Calendar API (stored
                          separately in encrypted form)
                        </p>
                        <p className="pl-4 text-xs text-gray-500">
                          * The Company does not collect your Google account password, and
                          calendar access is granted only via OAuth authorization.
                        </p>

                        <p className="pt-2 font-medium">
                          E. When using paid services
                        </p>
                        <p className="pl-4">
                          - Basic payment information such as amount, payment date and payment
                          method type  
                          - Sensitive payment information (e.g. card numbers) is processed by
                          payment gateways such as Toss Payments, and is not stored directly by
                          the Company.
                        </p>

                        <p className="pt-2 text-gray-700">
                          * The Company does not provide the Service to children under the age of
                          14 and does not knowingly collect personal information from children
                          under 14 without the consent of a legal guardian.
                        </p>
                      </div>
                    </section>

                    {/* 3. Purposes of Using Personal Information */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        3. Purposes of Using Personal Information
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          The Company uses the collected personal information only for the
                          following purposes.
                        </p>
                        <p className="pl-4">
                          - Member management, such as user identification, login, account
                          management and prevention of fraudulent use
                        </p>
                        <p className="pl-4">
                          - Providing Service features such as AI chat, emotion diary, emotion
                          reports, emotion garden and time capsules
                        </p>
                        <p className="pl-4">
                          - Analyzing usage patterns, improving existing features and developing
                          new features to enhance the quality of the Service
                        </p>
                        <p className="pl-4">
                          - Creating statistics and conducting research/analysis using
                          de-identified or pseudonymized data
                        </p>
                        <p className="pl-4">
                          - Processing payments and settlements for paid services (subscriptions,
                          in-depth reports, etc.) and managing subscription status
                        </p>
                        <p className="pl-4">
                          - Ensuring security and protecting users, including detecting account
                          theft, abnormal activity, spam and abuse
                        </p>

                        <p className="pt-2 pl-4">
                          The Company does not use collected data to train WAVERA&apos;s own AI
                          models (in-house model training). However, depending on the policies of
                          external AI API providers integrated for AI response generation, a
                          subset of data may be used by such providers to improve their model
                          quality. In that case, the terms of use and privacy policies of each
                          provider will also apply.
                        </p>
                      </div>
                    </section>

                    {/* 4. Retention and Destruction of Personal Information */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        4. Retention and Destruction of Personal Information
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Company promptly destroys personal information when the retention
                          period has expired or the purpose of processing has been achieved.
                        </p>
                        <p>2. Main retention periods are as follows.</p>
                        <p className="pl-4">
                          - Membership information (email, nickname, basic profile): until
                          membership withdrawal
                        </p>
                        <p className="pl-4">
                          - Conversation and diary content: deleted immediately upon membership
                          withdrawal (except where retention is required by law)
                        </p>
                        <p className="pl-4">
                          - Payment and transaction records: retained for up to 5 years in
                          accordance with applicable e-commerce laws
                        </p>
                        <p className="pl-4">
                          - Access logs (including IP address): retained for at least 3 months in
                          accordance with the Protection of Communications Secrets Act (Korea)
                        </p>
                        <p className="pl-4">
                          - Google Calendar connection information and tokens: deleted immediately
                          when the user disconnects the calendar or withdraws from membership
                        </p>
                        <p>
                          3. Personal information in electronic form is destroyed using technical
                          methods that make recovery impossible, and documents on paper are
                          shredded or incinerated.
                        </p>
                      </div>
                    </section>

                    {/* 5. Provision to Third Parties and Overseas Transfer */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        5. Provision to Third Parties and Overseas Transfer
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Company does not provide personal information to third parties
                          without the user&apos;s consent, except in the following cases.
                        </p>
                        <p className="pl-4">
                          - When the user has given explicit prior consent
                        </p>
                        <p className="pl-4">
                          - When required by law or when public institutions such as courts or
                          investigative agencies request information through lawful procedures
                        </p>

                        <p className="pt-2">
                          2. For the provision of the Service, some personal information may be
                          transferred to overseas cloud environments as described below.
                        </p>

                        <p className="pl-4 font-medium">
                          - AI processing (response generation and analysis)
                        </p>
                        <p className="pl-4">
                          Purpose: Generating AI responses, emotion analysis and report generation  
                          Items transferred: conversation content and a limited subset of profile
                          information included in prompts (minimum necessary)  
                          Retention/use period: until the purposes of service provision and model
                          improvement are achieved, subject to each provider&apos;s own policy
                        </p>

                        <p className="pl-4 font-medium">
                          - Infrastructure and database operation
                        </p>
                        <p className="pl-4">
                          Purpose: Service hosting, data storage/backup and log management  
                          Items transferred: data and logs required to operate the Service  
                          Countries: depending on the server locations of infrastructure providers  
                          Retention/use period: for the duration of service use and statutory
                          retention periods
                        </p>

                        <p className="pl-4 font-medium">- Google Calendar integration</p>
                        <p className="pl-4">
                          Purpose: Retrieving and adding events and providing routine analysis,
                          within the scope explicitly authorized by the user  
                          Items transferred: event metadata and API request information  
                          Retention/use period: for as long as the connection is maintained;
                          deleted upon disconnection
                        </p>
                      </div>
                    </section>

                    {/* 6. Cookies and Log Information */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        6. Cookies and Log Information
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Company may use cookies and log information for service usage
                          analysis, error tracking, security enhancement and improving user
                          experience.
                        </p>
                        <p>
                          2. Users can refuse the storage of cookies through browser settings, but
                          some features of the Service may be limited in that case.
                        </p>
                      </div>
                    </section>

                    {/* 7. User Rights and How to Exercise Them */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        7. User Rights and How to Exercise Them
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. Users may view and edit their personal information at any time via
                          the profile screen or similar pages within the Service.
                        </p>
                        <p>
                          2. Users may withdraw their consent to the collection and use of
                          personal information by deleting their account. In principle, most
                          personal information is deleted immediately upon withdrawal.
                        </p>
                        <p>
                          3. Users may request access, correction, deletion or suspension of
                          processing of their personal information by contacting
                          fromwave.x@gmail.com. The Company will take appropriate measures
                          without undue delay within the scope permitted by applicable law.
                        </p>
                      </div>
                    </section>

                    {/* 8. Measures to Ensure the Security of Personal Information */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        8. Measures to Ensure the Security of Personal Information
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          The Company takes the following measures to securely process personal
                          information.
                        </p>
                        <p className="pl-4">
                          - Encrypting important information (such as passwords and conversation
                          content) for storage
                        </p>
                        <p className="pl-4">
                          - Minimizing the number of personnel with access to personal
                          information and strictly managing access rights
                        </p>
                        <p className="pl-4">
                          - Blocking unauthorized external access and monitoring for abnormal
                          activities
                        </p>
                        <p className="pl-4">
                          - Regularly reviewing logs and backing up data to prevent data loss
                        </p>
                      </div>
                    </section>

                    {/* 9. Inquiries and Customer Support */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        9. Inquiries and Customer Support
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. The Company designates the following contact point as the person in
                          charge of personal information protection and customer support.
                        </p>
                        <p className="pl-4">- Responsible entity: WAVERA</p>
                        <p className="pl-4">- Contact: fromwave.x@gmail.com</p>
                        <p>
                          2. Inquiries regarding service use, payments and personal information
                          are accepted by email. The Company responds on business days between
                          09:00 and 17:00 (KST), on a best-effort basis.
                        </p>
                      </div>
                    </section>

                    {/* 10. Changes to this Privacy Policy */}
                    <section>
                      <h3 className="font-semibold text-base mb-2">
                        10. Changes to this Privacy Policy
                      </h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>
                          1. This Privacy Policy may be updated due to changes in laws, the
                          Service or technical environment.
                        </p>
                        <p>
                          2. In the event of important changes, the Company will notify users in
                          advance via in‑service notices at least 7 days before the effective
                          date (or at least 30 days in advance if the changes are material to
                          users).
                        </p>
                      </div>
                    </section>

                    {/* Effective date */}
                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        Date of announcement: December 1, 2025
                        <br />
                        Effective date: December 1, 2025
                      </p>
                    </section>
                  </>

                )}
              </div>
            </div>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
