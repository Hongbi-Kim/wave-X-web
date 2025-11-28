import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { TabType } from '../App';
import { WaveXLogoFull } from './WaveXLogoFull';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleTabClick('home')} className="flex items-center">
          <WaveXLogoFull size="small" animated={false} />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => handleTabClick('home')} 
            className={`transition-colors ${activeTab === 'home' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.home')}
          </button>
          <button 
            onClick={() => handleTabClick('about')} 
            className={`transition-colors ${activeTab === 'about' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.about')}
          </button>
          <button 
            onClick={() => handleTabClick('services')} 
            className={`transition-colors ${activeTab === 'services' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.services')}
          </button>
          <button 
            onClick={() => handleTabClick('philosophy')} 
            className={`transition-colors ${activeTab === 'philosophy' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.philosophy')}
          </button>
          <button 
            onClick={() => handleTabClick('contact')} 
            className={`transition-colors ${activeTab === 'contact' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.contact')}
          </button>
          {/* <button 
            onClick={() => handleTabClick('logos')} 
            className={`transition-colors ${activeTab === 'logos' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            Logos
          </button> */}
        </nav>

        {/* Language Toggle */}
        <div className="hidden md:flex items-center space-x-2">
          <button
            onClick={() => setLanguage('ko')}
            className={`px-3 py-1 rounded-full transition-all ${
              language === 'ko'
                ? 'bg-[#1A2E40] text-white'
                : 'text-[#1A2E40] hover:bg-gray-100'
            }`}
          >
            한국어
          </button>
          <button
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded-full transition-all ${
              language === 'en'
                ? 'bg-[#1A2E40] text-white'
                : 'text-[#1A2E40] hover:bg-gray-100'
            }`}
          >
            English
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#1A2E40]"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <button 
              onClick={() => handleTabClick('home')} 
              className={`transition-colors text-left ${activeTab === 'home' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.home')}
            </button>
            <button 
              onClick={() => handleTabClick('about')} 
              className={`transition-colors text-left ${activeTab === 'about' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => handleTabClick('services')} 
              className={`transition-colors text-left ${activeTab === 'services' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => handleTabClick('philosophy')} 
              className={`transition-colors text-left ${activeTab === 'philosophy' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.philosophy')}
            </button>
            <button 
              onClick={() => handleTabClick('contact')} 
              className={`transition-colors text-left ${activeTab === 'contact' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={() => handleTabClick('logos')} 
              className={`transition-colors text-left ${activeTab === 'logos' ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              Logos
            </button>
            <div className="flex items-center space-x-2 pt-4 border-t border-gray-200">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === 'ko'
                    ? 'bg-[#1A2E40] text-white'
                    : 'text-[#1A2E40] hover:bg-gray-100'
                }`}
              >
                한국어
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#1A2E40] text-white'
                    : 'text-[#1A2E40] hover:bg-gray-100'
                }`}
              >
                English
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
