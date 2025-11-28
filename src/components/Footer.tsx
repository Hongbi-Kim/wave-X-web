import { useLanguage } from '../contexts/LanguageContext';
import { WaveXLogoFull } from './WaveXLogoFull';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1A2E40] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <WaveXLogoFull size="small" animated={false} inverted={true} />

          {/* Copyright */}
          <div className="text-white/70 text-center">
            {t('footer.copyright')}
          </div>

          {/* Social Links (Optional) */}
          <div className="flex gap-4">
            {/* <a 
            href="https://www.linkedin.com/in/hongbikim-wavetoai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors"
            >
            LinkedIn
            </a> */}
            <a 
              href="https://www.instagram.com/thewave.x_?igsh=ejNia3IwanVxaHpw&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors"
              >
              Instagram
            </a>
            {/* <a href="#" className="text-white/70 hover:text-white transition-colors">
              GitHub
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
