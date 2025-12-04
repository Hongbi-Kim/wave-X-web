import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직 (추후 구현)
    console.log('Form submitted:', formData);
    alert(language === 'ko' ? '메시지가 전송되었습니다!' : 'Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-24 px-6 bg-gradient-to-br from-[#F8FAFB] to-[#E8EEF5]">
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#1A2E40] mb-4 text-center"
        >
          {t('contact.title')}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#1A2E40]/80 mb-12 text-center"
        >
          {t('contact.subtext')}
        </motion.p>

        {/* <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="name" className="text-[#1A2E40]">
              {language === 'ko' ? '이름' : 'Name'}
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="border-[#8DA2D7]/30 focus:border-[#8DA2D7] rounded-xl"
              placeholder={language === 'ko' ? '홍길동' : 'Your name'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#1A2E40]">
              {language === 'ko' ? '이메일' : 'Email'}
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="border-[#8DA2D7]/30 focus:border-[#8DA2D7] rounded-xl"
              placeholder={language === 'ko' ? 'hello@example.com' : 'your@email.com'}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className="text-[#1A2E40]">
              {language === 'ko' ? '메시지' : 'Message'}
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              className="border-[#8DA2D7]/30 focus:border-[#8DA2D7] rounded-xl min-h-[150px]"
              placeholder={language === 'ko' ? '메시지를 입력해주세요...' : 'Your message...'}
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#1A2E40] hover:bg-[#8DA2D7] text-white py-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            {language === 'ko' ? '보내기' : 'Send Message'}
          </Button>
        </motion.form> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-[#1A2E40]/70 mt-8"
        >
          <Mail className="w-5 h-5" />
          <a 
            href="mailto:fromwave.x@gmail.com"
            className="hover:text-[#8DA2D7] transition-colors"
          >
            fromwave.x@gmail.com
          </a>
          <br></br>
          {/* <instagram className="w-5 h-5" /> */}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg> */}
          {/* <a 
            href="mailto:fromwave.x@gmail.com"
            className="hover:text-[#8DA2D7] transition-colors"
          >
            fromwave.x@gmail.com
          </a> */}
          {/* <a 
              href="https://www.instagram.com/thewave.x_?igsh=ejNia3IwanVxaHpw&utm_source=qr" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8DA2D7] transition-colors"
              >
              Instagram
            </a> */}
        </motion.div>
      </div>
    </section>
  );
}
