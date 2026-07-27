import { Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { WaveXLogoFull } from './WaveXLogoFull';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A2E40] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <WaveXLogoFull size="small" animated={false} inverted={true} text="웨이베라" />

          {/* Copyright */}
          <div className="text-white/70 text-center">
            <p>{t('footer.copyright')}</p>
            <p className="text-sm mt-1">{t('footer.info')}</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/wavera.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
