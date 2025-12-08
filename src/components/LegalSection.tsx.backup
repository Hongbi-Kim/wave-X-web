import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Shield } from 'lucide-react';

export function LegalSection() {
  const { t, language } = useLanguage();

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
        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="terms" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t('legal.terms.tab')}
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              {t('legal.privacy.tab')}
            </TabsTrigger>
          </TabsList>

          {/* Terms of Service */}
          <TabsContent value="terms" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6 text-sm">
                {language === 'ko' ? (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2">제1조 (목적)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        본 약관은 Wave I (이하 "회사")가 제공하는 심리 케어 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제2조 (용어의 정의)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. "서비스"란 Wave I가 제공하는 AI 캐릭터 대화, 일기 작성, 감정 분석 등 심리 케어 관련 서비스를 의미합니다.</p>
                        <p>2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</p>
                        <p>3. "회원"이란 서비스에 가입하여 지속적으로 서비스를 이용할 수 있는 자를 말합니다.</p>
                        <p>4. "AI 캐릭터"란 서비스 내에서 이용자와 대화할 수 있는 인공지능 기반 대화 파트너를 의미합니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제3조 (서비스의 제공)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 다음과 같은 서비스를 제공합니다:</p>
                        <p className="pl-4">- AI 캐릭터와의 대화 서비스</p>
                        <p className="pl-4">- 한 줄 일기 작성 및 관리 서비스</p>
                        <p className="pl-4">- 감정 분석 및 리포트 제공 서비스</p>
                        <p className="pl-4">- 감정 정원, 감정 파도 등 시각화 서비스</p>
                        <p className="pl-4">- 기타 회사가 추가 개발하거나 제휴 계약을 통해 제공하는 서비스</p>
                        <p>2. 서비스는 연중무휴 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템 점검 등 운영상 필요한 경우 일시적으로 서비스 제공이 중단될 수 있습니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제4조 (회원가입 및 관리)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 이용자는 회사가 정한 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
                        <p>2. 회사는 제1항과 같이 회원가입을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:</p>
                        <p className="pl-4">- 등록 내용에 허위, 기재누락, 오기가 있는 경우</p>
                        <p className="pl-4">- 이전에 회원자격을 상실한 적이 있는 경우</p>
                        <p className="pl-4">- 기타 회원으로 등록하는 것이 서비스 운영에 현저히 지장이 있다고 판단되는 경우</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제5조 (개인정보 보호)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 이용자의 개인정보를 보호하기 위하여 개인정보보호법 등 관련 법령을 준수합니다.</p>
                        <p>2. 개인정보의 보호 및 이용에 대해서는 관련 법령 및 회사의 개인정보 처리방침이 적용됩니다.</p>
                        <p>3. 회사는 이용자의 대화 내용, 일기 등 민감한 정보를 암호화하여 안전하게 보관합니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제6조 (유료 서비스)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 기본 무료 서비스 외에 Wave Pro 등 유료 서비스를 제공할 수 있습니다.</p>
                        <p>2. 유료 서비스 이용을 위해서는 회사가 정한 요금을 지불해야 하며, 결제 방법은 회사가 제공하는 수단을 이용합니다.</p>
                        <p>3. 유료 서비스는 구독 기간 동안 이용 가능하며, 자동 갱신될 수 있습니다.</p>
                        <p>4. 이용자는 언제든지 유료 서비스 구독을 해지할 수 있습니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제7조 (서비스 이용 제한)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 다음 각 호에 해당하는 경우 서비스 이용을 제한할 수 있습니다:</p>
                        <p className="pl-4">- 타인의 명의를 도용한 경우</p>
                        <p className="pl-4">- 서비스 운영을 고의로 방해한 경우</p>
                        <p className="pl-4">- 공공질서 및 미풍양속에 저해되는 내용을 고의로 유포한 경우</p>
                        <p className="pl-4">- 타인의 명예를 손상시키거나 불이익을 주는 행위를 한 경우</p>
                        <p className="pl-4">- 기타 관련 법령이나 회사가 정한 이용조건에 위배되는 경우</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제8조 (책임의 제한)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 본 서비스는 심리 상담이나 의료 서비스를 대체하지 않으며, AI 캐릭터의 응답은 참고용으로만 사용되어야 합니다.</p>
                        <p>2. 회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임이 면제됩니다.</p>
                        <p>3. 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</p>
                        <p>4. 회사는 이용자가 서비스를 이용하여 기대하는 정신적, 심리적 효과를 보장하지 않습니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">제9조 (분쟁의 해결)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        본 약관과 관련하여 발생한 분쟁에 대해서는 대한민국 법을 적용하며, 소송이 필요한 경우 회사의 본사 소재지를 관할하는 법원을 전속 관할 법원으로 합니다.
                      </p>
                    </section>

                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        본 약관은 2025년 1월 1일부터 시행됩니다.
                      </p>
                    </section>
                  </>
                ) : (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 1 (Purpose)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        These Terms and Conditions aim to define the rights, obligations, and responsibilities of Wave I (hereinafter "Company") and users regarding the use of psychological care services provided by the Company, as well as other necessary matters.
                      </p>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 2 (Definition of Terms)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. "Service" refers to psychological care services provided by Wave I, including AI character conversations, diary writing, and emotion analysis.</p>
                        <p>2. "User" refers to members and non-members who use services provided by the Company in accordance with these terms.</p>
                        <p>3. "Member" refers to individuals who have registered for the service and can continuously use it.</p>
                        <p>4. "AI Character" refers to an artificial intelligence-based conversation partner that can interact with users within the service.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 3 (Service Provision)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company provides the following services:</p>
                        <p className="pl-4">- Conversation service with AI characters</p>
                        <p className="pl-4">- One-line diary writing and management service</p>
                        <p className="pl-4">- Emotion analysis and report provision service</p>
                        <p className="pl-4">- Visualization services such as emotion garden and emotion waves</p>
                        <p className="pl-4">- Other services developed by the Company or provided through partnership agreements</p>
                        <p>2. The service is provided 24 hours a day, 365 days a year in principle. However, service provision may be temporarily suspended when necessary for system maintenance or operational purposes.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 4 (Membership Registration and Management)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. Users apply for membership by filling in member information according to the format set by the Company and indicating consent to these terms.</p>
                        <p>2. The Company registers users who apply for membership as described in Paragraph 1 as members, unless any of the following applies:</p>
                        <p className="pl-4">- When registration information contains false information, omissions, or errors</p>
                        <p className="pl-4">- When the user has previously lost membership status</p>
                        <p className="pl-4">- When registration as a member is deemed to significantly hinder service operation</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 5 (Privacy Protection)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company complies with relevant laws and regulations, including the Personal Information Protection Act, to protect users' personal information.</p>
                        <p>2. The protection and use of personal information are governed by relevant laws and the Company's Privacy Policy.</p>
                        <p>3. The Company encrypts and securely stores sensitive information such as users' conversation content and diaries.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 6 (Paid Services)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company may provide paid services such as Wave Pro in addition to basic free services.</p>
                        <p>2. To use paid services, users must pay the fees determined by the Company, using payment methods provided by the Company.</p>
                        <p>3. Paid services are available during the subscription period and may be automatically renewed.</p>
                        <p>4. Users can cancel paid service subscriptions at any time.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 7 (Service Use Restrictions)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company may restrict service use in the following cases:</p>
                        <p className="pl-4">- Impersonating another person's identity</p>
                        <p className="pl-4">- Intentionally interfering with service operation</p>
                        <p className="pl-4">- Intentionally distributing content that harms public order and morals</p>
                        <p className="pl-4">- Damaging others' reputation or causing disadvantage</p>
                        <p className="pl-4">- Violating relevant laws or terms of use set by the Company</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 8 (Limitation of Liability)</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. This service does not replace psychological counseling or medical services, and responses from AI characters should be used for reference only.</p>
                        <p>2. The Company is exempt from liability when unable to provide services due to force majeure such as natural disasters, war, or service suspension by telecommunications carriers.</p>
                        <p>3. The Company is not liable for service use disruptions caused by users' fault.</p>
                        <p>4. The Company does not guarantee the mental or psychological effects that users expect from using the service.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">Article 9 (Dispute Resolution)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Korean law applies to disputes arising from these terms, and if litigation is necessary, the court with jurisdiction over the Company's head office location shall be the exclusive jurisdiction court.
                      </p>
                    </section>

                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        These terms are effective from January 1, 2025.
                      </p>
                    </section>
                  </>
                )}
              </div>
            </div>
          </TabsContent>

          {/* Privacy Policy */}
          <TabsContent value="privacy" className="mt-0">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
              <div className="space-y-6 text-sm">
                {language === 'ko' ? (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2">1. 개인정보의 수집 및 이용 목적</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>Wave I(이하 "회사")는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
                        <p className="pt-2 font-medium">가. 회원 가입 및 관리</p>
                        <p className="pl-4">회원제 서비스 이용에 따른 본인 식별, 회원자격 유지·관리, 서비스 부정이용 방지, 각종 고지·통지 목적으로 개인정보를 처리합니다.</p>
                        <p className="pt-2 font-medium">나. 서비스 제공</p>
                        <p className="pl-4">AI 대화 서비스, 일기 작성, 감정 분석 리포트 제공, 맞춤형 서비스 제공을 목적으로 개인정보를 처리합니다.</p>
                        <p className="pt-2 font-medium">다. 유료 서비스 제공</p>
                        <p className="pl-4">요금 결제·정산, 구매 및 요금 결제, 본인인증 등을 목적으로 개인정보를 처리합니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">2. 수집하는 개인정보 항목</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p className="font-medium">가. 필수 항목</p>
                        <p className="pl-4">- 이메일 주소 (회원가입 시)</p>
                        <p className="pl-4">- 닉네임</p>
                        <p className="pl-4">- 생년월일</p>
                        <p className="pl-4">- 국적 정보</p>
                        <p className="pt-2 font-medium">나. 선택 항목</p>
                        <p className="pl-4">- 프로필 정보 (취미, 관심사 등)</p>
                        <p className="pl-4">- AI가 알면 좋은 정보</p>
                        <p className="pt-2 font-medium">다. 자동 수집 항목</p>
                        <p className="pl-4">- 서비스 이용 기록</p>
                        <p className="pl-4">- 접속 로그, IP 주소</p>
                        <p className="pl-4">- 대화 내용 및 일기 내용</p>
                        <p className="pl-4">- 감정 분석 데이터</p>
                        <p className="pt-2 font-medium">라. 유료 서비스 이용 시</p>
                        <p className="pl-4">- 결제 정보 (카드번호, 결제 내역 등은 결제 대행사를 통해 처리됩니다)</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">3. 개인정보의 처리 및 보유 기간</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 법령에 따른 개인정보 보유·이용기간 또는 이용자로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.</p>
                        <p>2. 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:</p>
                        <p className="pl-4">- 회원 가입 정보: 회원 탈퇴 시까지</p>
                        <p className="pl-4">- 대화 및 일기 내용: 회원 탈퇴 후 즉시 삭제 (단, 관련 법령에 따라 보존이 필요한 경우 예외)</p>
                        <p className="pl-4">- 결제 정보: 전자상거래법에 따라 5년간 보관</p>
                        <p>3. 회원 탈퇴 시 모든 개인정보는 즉시 삭제되며, 복구할 수 없습니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">4. 개인정보의 제3자 제공</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>회사는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다:</p>
                        <p className="pl-4">- 이용자가 사전에 동의한 경우</p>
                        <p className="pl-4">- 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                        <p className="pt-2">현재 회사는 다음의 업체와 개인정보를 공유합니다:</p>
                        <p className="pl-4">- 결제 대행사: 토스페이먼츠 (결제 처리 목적)</p>
                        <p className="pl-4">- AI 서비스 제공: OpenAI, Anthropic (대화 서비스 제공 목적)</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">5. 개인정보의 파기 절차 및 방법</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.</p>
                        <p>2. 파기 절차:</p>
                        <p className="pl-4">- 이용자가 입력한 정보는 목적 달성 후 별도의 DB로 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 파기됩니다.</p>
                        <p>3. 파기 방법:</p>
                        <p className="pl-4">- 전자적 파일 형태: 복구 및 재생이 불가능한 기술적 방법을 사용하여 완전히 삭제</p>
                        <p className="pl-4">- 종이 문서: 분쇄기로 분쇄하거나 소각</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">6. 이용자의 권리와 행사 방법</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 이용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:</p>
                        <p className="pl-4">- 개인정보 열람 요구</p>
                        <p className="pl-4">- 개인정보 정정·삭제 요구</p>
                        <p className="pl-4">- 개인정보 처리 정지 요구</p>
                        <p className="pl-4">- 회원 탈퇴 (동의 철회)</p>
                        <p>2. 권리 행사는 프로필 탭에서 직접 수정하거나, 고객센터를 통해 요청할 수 있습니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">7. 개인정보 보호책임자</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
                        <p className="pt-2 pl-4">▶ 개인정보 보호책임자</p>
                        <p className="pl-4">- 담당부서: Wave I 운영팀</p>
                        <p className="pl-4">- 문의: 프로필 탭 &gt; 의견 보내기</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">8. 개인정보의 안전성 확보 조치</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다:</p>
                        <p className="pl-4">- 개인정보 암호화: 비밀번호, 대화 내용 등 중요 정보는 암호화되어 저장 및 관리됩니다.</p>
                        <p className="pl-4">- 해킹 등에 대비한 기술적 대책: 방화벽, 백신 프로그램 등을 이용하여 외부로부터의 무단 접근을 통제합니다.</p>
                        <p className="pl-4">- 접근 권한 관리: 개인정보에 대한 접근 권한을 최소한의 인원으로 제한합니다.</p>
                        <p className="pl-4">- 정기적인 자체 감사: 개인정보 취급 관련 안정성 확보를 위해 정기적으로 자체 감사를 실시합니다.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">9. 개인정보 처리방침의 변경</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. 이 개인정보 처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.</p>
                        <p>2. 중요한 변경사항이 있을 경우 이메일 등을 통해 개별 통지합니다.</p>
                      </div>
                    </section>

                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        본 개인정보 처리방침은 2025년 1월 1일부터 시행됩니다.
                      </p>
                    </section>
                  </>
                ) : (
                  <>
                    <section>
                      <h3 className="font-semibold text-base mb-2">1. Purpose of Collection and Use of Personal Information</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>Wave I (hereinafter "Company") processes personal information for the following purposes. Personal information being processed will not be used for purposes other than those stated below, and if the purpose of use changes, necessary measures will be taken, such as obtaining separate consent in accordance with the Personal Information Protection Act.</p>
                        <p className="pt-2 font-medium">A. Member Registration and Management</p>
                        <p className="pl-4">Personal information is processed for the purpose of user identification for membership services, maintaining and managing membership status, preventing fraudulent use of services, and various notices and notifications.</p>
                        <p className="pt-2 font-medium">B. Service Provision</p>
                        <p className="pl-4">Personal information is processed for the purpose of providing AI conversation services, diary writing, emotion analysis reports, and personalized services.</p>
                        <p className="pt-2 font-medium">C. Paid Service Provision</p>
                        <p className="pl-4">Personal information is processed for the purpose of fee payment and settlement, purchase and fee payment, and user authentication.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">2. Personal Information Items Collected</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p className="font-medium">A. Required Items</p>
                        <p className="pl-4">- Email address (when registering as a member)</p>
                        <p className="pl-4">- Nickname</p>
                        <p className="pl-4">- Date of birth</p>
                        <p className="pl-4">- Nationality information</p>
                        <p className="pt-2 font-medium">B. Optional Items</p>
                        <p className="pl-4">- Profile information (hobbies, interests, etc.)</p>
                        <p className="pl-4">- Information useful for AI to know</p>
                        <p className="pt-2 font-medium">C. Automatically Collected Items</p>
                        <p className="pl-4">- Service usage records</p>
                        <p className="pl-4">- Connection logs, IP address</p>
                        <p className="pl-4">- Conversation content and diary content</p>
                        <p className="pl-4">- Emotion analysis data</p>
                        <p className="pt-2 font-medium">D. When Using Paid Services</p>
                        <p className="pl-4">- Payment information (card numbers, payment history, etc. are processed through payment service providers)</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">3. Processing and Retention Period of Personal Information</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company processes and retains personal information within the retention and use period according to law or the period agreed upon when collecting personal information from users.</p>
                        <p>2. The processing and retention period for each type of personal information is as follows:</p>
                        <p className="pl-4">- Member registration information: Until membership withdrawal</p>
                        <p className="pl-4">- Conversation and diary content: Immediately deleted after membership withdrawal (except when preservation is required by relevant laws)</p>
                        <p className="pl-4">- Payment information: Retained for 5 years in accordance with e-commerce laws</p>
                        <p>3. Upon membership withdrawal, all personal information is immediately deleted and cannot be recovered.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">4. Provision of Personal Information to Third Parties</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>In principle, the Company does not provide users' personal information to third parties. However, exceptions are made in the following cases:</p>
                        <p className="pl-4">- When users have given prior consent</p>
                        <p className="pl-4">- When required by law or when requested by investigative agencies according to procedures and methods prescribed by law for investigative purposes</p>
                        <p className="pt-2">Currently, the Company shares personal information with the following companies:</p>
                        <p className="pl-4">- Payment service provider: Toss Payments (for payment processing)</p>
                        <p className="pl-4">- AI service providers: OpenAI, Anthropic (for conversation service provision)</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">5. Procedures and Methods for Destroying Personal Information</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. The Company destroys personal information without delay when it becomes unnecessary, such as when the retention period has elapsed or the processing purpose has been achieved.</p>
                        <p>2. Destruction procedures:</p>
                        <p className="pl-4">- Information entered by users is transferred to a separate database after achieving its purpose and stored for a certain period according to internal policies and other relevant laws before being destroyed.</p>
                        <p>3. Destruction methods:</p>
                        <p className="pl-4">- Electronic files: Complete deletion using technical methods that make recovery and reproduction impossible</p>
                        <p className="pl-4">- Paper documents: Shredded or incinerated</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">6. User Rights and Exercise Methods</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. Users can exercise the following rights at any time:</p>
                        <p className="pl-4">- Request to view personal information</p>
                        <p className="pl-4">- Request to correct or delete personal information</p>
                        <p className="pl-4">- Request to stop processing personal information</p>
                        <p className="pl-4">- Membership withdrawal (consent withdrawal)</p>
                        <p>2. Rights can be exercised by directly modifying in the profile tab or requesting through customer service.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">7. Personal Information Protection Officer</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>The Company has designated a Personal Information Protection Officer as follows to take overall responsibility for personal information processing and to handle user complaints and remedies related to personal information processing.</p>
                        <p className="pt-2 pl-4">▶ Personal Information Protection Officer</p>
                        <p className="pl-4">- Department: Wave I Operations Team</p>
                        <p className="pl-4">- Contact: Profile tab &gt; Send feedback</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">8. Measures to Ensure Safety of Personal Information</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>The Company takes the following measures to ensure the safety of personal information:</p>
                        <p className="pl-4">- Personal information encryption: Important information such as passwords and conversation content is encrypted for storage and management.</p>
                        <p className="pl-4">- Technical measures against hacking: Firewalls, antivirus programs, etc. are used to control unauthorized access from outside.</p>
                        <p className="pl-4">- Access control: Access to personal information is restricted to a minimum number of personnel.</p>
                        <p className="pl-4">- Regular self-audits: Self-audits are regularly conducted to ensure the stability of personal information handling.</p>
                      </div>
                    </section>

                    <section>
                      <h3 className="font-semibold text-base mb-2">9. Changes to Privacy Policy</h3>
                      <div className="text-gray-700 leading-relaxed space-y-1">
                        <p>1. This Privacy Policy is applied from the effective date, and if there are additions, deletions, or corrections to changes according to laws and policies, they will be announced through the notice section at least 7 days before the implementation of changes.</p>
                        <p>2. In case of significant changes, individual notification will be provided via email, etc.</p>
                      </div>
                    </section>

                    <section className="pt-4 border-t">
                      <p className="text-gray-600 text-xs">
                        This Privacy Policy is effective from January 1, 2025.
                      </p>
                    </section>
                  </>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
