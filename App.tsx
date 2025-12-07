import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PromptCard from './components/PromptCard';
import Toast from './components/Toast';
import DetailModal from './components/DetailModal';
import { PROMPTS } from './constants';
import { Language, PromptItem } from './types';
import { Sparkles, ArrowUp, Search } from 'lucide-react';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [toast, setToast] = useState({ show: false, message: '' });
  const [selectedPrompt, setSelectedPrompt] = useState<PromptItem | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast({ 
        show: true, 
        message: lang === 'en' ? 'Prompt copied to clipboard!' : '提示词已复制到剪贴板！' 
      });
    });
  };

  const filteredPrompts = useMemo(() => {
    return PROMPTS.filter((item) => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            (item.titleZh && item.titleZh.includes(searchTerm));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-pantone-200 text-pantone-900 font-sans selection:bg-pantone-300 selection:text-pantone-900">
      <Header 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Content Area */}
      <main className="pt-32 pb-20">
        
        {/* Search Hero Section */}
        <div className="max-w-2xl mx-auto px-4 mb-10 animate-fade-in-up">
            <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search size={22} className="text-pantone-500 group-focus-within:text-pantone-800 transition-colors" />
                </div>
                <input
                    type="text"
                    placeholder={lang === 'en' ? "Search for inspiration..." : "搜索你的灵感..."}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 bg-white shadow-xl shadow-pantone-300/30 rounded-2xl text-lg outline-none text-pantone-900 placeholder-pantone-400 focus:ring-2 focus:ring-pantone-300/50 transition-all hover:shadow-2xl hover:shadow-pantone-300/40"
                />
            </div>
            <div className="text-center mt-4">
                 <p className="text-pantone-500 text-sm font-medium tracking-wide uppercase">
                    {lang === 'en' ? 'Curated Prompts • Cloud Dancer Edition' : '精选提示词 • 云舞者配色'}
                 </p>
            </div>
        </div>

        <FilterBar 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
          lang={lang}
        />

        {/* Masonry Grid */}
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPrompts.length > 0 ? (
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
              {filteredPrompts.map((item) => (
                <PromptCard 
                  key={item.id} 
                  item={item} 
                  lang={lang} 
                  onCopy={handleCopy}
                  onClick={setSelectedPrompt}
                />
              ))}
            </div>
          ) : (
             <div className="text-center py-20 opacity-60">
               <Sparkles className="mx-auto h-12 w-12 text-pantone-400 mb-4" />
               <p className="text-pantone-600 text-lg">
                 {lang === 'en' ? 'No prompts found.' : '未找到相关提示词。'}
               </p>
             </div>
          )}
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-pantone-300/50 py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-pantone-500 text-sm font-serif">
                © 2025 PromptFlow. PANTONE® 11-4201 Cloud Dancer.
            </p>
        </div>
      </footer>

      {/* Detail Modal */}
      {selectedPrompt && (
        <DetailModal
            item={selectedPrompt}
            isOpen={!!selectedPrompt}
            onClose={() => setSelectedPrompt(null)}
            lang={lang}
            onCopy={handleCopy}
        />
      )}

      {/* Toast Notification */}
      <Toast 
        message={toast.message} 
        isVisible={toast.show} 
        onClose={() => setToast({ ...toast, show: false })} 
      />

       {/* Floating Action Button for Scroll to Top */}
       <button 
         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
         className="fixed bottom-8 right-8 p-3 bg-pantone-900 text-white rounded-full shadow-2xl hover:bg-black transition-all z-40 opacity-0 hover:opacity-100 focus:opacity-100 group"
         style={{ opacity: 1 }}
         aria-label="Scroll to top"
       >
         <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform" />
       </button>
    </div>
  );
};

export default App;