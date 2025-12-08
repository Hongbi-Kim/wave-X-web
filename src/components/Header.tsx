import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { WaveXLogoFull } from './WaveXLogoFull';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <WaveXLogoFull size="small" animated={false} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className={`transition-colors ${isActive('/') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.home')}
          </Link>
          <Link
            to="/about"
            className={`transition-colors ${isActive('/about') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.about')}
          </Link>
          <Link
            to="/services"
            className={`transition-colors ${isActive('/services') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.services')}
          </Link>
          <Link
            to="/philosophy"
            className={`transition-colors ${isActive('/philosophy') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.philosophy')}
          </Link>
          <Link
            to="/contact"
            className={`transition-colors ${isActive('/contact') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.contact')}
          </Link>
          <Link
            to="/legal"
            className={`transition-colors ${isActive('/legal') || isActive('/terms') || isActive('/privacy') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
          >
            {t('nav.legal')}
          </Link>
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
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.home')}
            </Link>
            <Link
              to="/about"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/about') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.about')}
            </Link>
            <Link
              to="/services"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/services') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.services')}
            </Link>
            <Link
              to="/philosophy"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/philosophy') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.philosophy')}
            </Link>
            <Link
              to="/contact"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/contact') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.contact')}
            </Link>
            <Link
              to="/legal"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/legal') || isActive('/terms') || isActive('/privacy') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              {t('nav.legal')}
            </Link>
            <Link
              to="/logos"
              onClick={handleLinkClick}
              className={`transition-colors text-left ${isActive('/logos') ? 'text-[#8DA2D7]' : 'text-[#1A2E40] hover:text-[#8DA2D7]'}`}
            >
              Logos
            </Link>
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
