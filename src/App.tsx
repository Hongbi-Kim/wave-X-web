import { useState } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PhilosophySection } from './components/PhilosophySection';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LogoDownloadPage } from './components/LogoDownloadPage';
import { LegalSection } from './components/LegalSection';

export type TabType = 'home' | 'about' | 'services' | 'philosophy' | 'team' | 'contact' | 'logos' | 'legal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('home');

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white flex flex-col">
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1">
          {activeTab === 'home' && <HeroSection setActiveTab={setActiveTab} />}
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'services' && <ServicesSection />}
          {activeTab === 'philosophy' && <PhilosophySection />}
          {activeTab === 'contact' && <ContactSection />}
          {activeTab === 'logos' && <LogoDownloadPage />}
          {activeTab === 'legal' && <LegalSection />}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
