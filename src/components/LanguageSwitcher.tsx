"use client";
import { useLanguage } from '@/context/LanguageContext';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => handleLanguageChange('en')} 
        className={`${language === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </button>
      <button 
        onClick={() => handleLanguageChange('fr')} 
        className={`${language === 'fr' ? 'font-bold' : ''}`}
      >
        FR
      </button>
    </div>
  );
}; 