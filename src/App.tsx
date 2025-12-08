import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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

function HomePage() {
  return <HeroSection />;
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutSection />} />
              <Route path="/services" element={<ServicesSection />} />
              <Route path="/philosophy" element={<PhilosophySection />} />
              <Route path="/contact" element={<ContactSection />} />
              <Route path="/logos" element={<LogoDownloadPage />} />
              <Route path="/legal" element={<LegalSection />} />
              <Route path="/terms" element={<LegalSection defaultTab="terms" />} />
              <Route path="/privacy" element={<LegalSection defaultTab="privacy" />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
