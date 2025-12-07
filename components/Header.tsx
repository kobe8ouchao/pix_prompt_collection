import React, { useState } from 'react';
import { Palette, Globe, Menu, X } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ lang, setLang }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#F0EEE9]/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <div className="bg-pantone-900 text-pantone-200 p-2 rounded-xl shadow-lg shadow-pantone-300 transition-transform group-hover:scale-105">
              <Palette size={20} />
            </div>
            <span className="font-serif text-2xl font-bold text-pantone-900 tracking-tight">
              PromptFlow
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Toggle */}
            <button 
              onClick={toggleLang}
              className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-white text-pantone-700 transition-all text-sm font-medium border border-transparent hover:border-pantone-200 hover:shadow-sm"
            >
              <Globe size={16} />
              <span>{lang === 'en' ? 'EN' : '中文'}</span>
            </button>
            
            <a 
               href="https://gemini.google.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-pantone-900 hover:bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-pantone-400/50 hover:shadow-xl hover:-translate-y-0.5"
            >
              {lang === 'en' ? 'Try on Gemini' : '去 Gemini 试玩'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLang}
              className="text-pantone-700 font-medium text-sm"
            >
              {lang === 'en' ? 'EN' : '中'}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-pantone-900 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F0EEE9] border-t border-pantone-300 absolute w-full px-4 py-6 shadow-2xl animate-fade-in-up">
            <a 
               href="https://gemini.google.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="block w-full text-center bg-pantone-900 text-white px-5 py-3 rounded-xl font-medium"
            >
              {lang === 'en' ? 'Try on Gemini' : '去 Gemini 试玩'}
            </a>
        </div>
      )}
    </header>
  );
};

export default Header;