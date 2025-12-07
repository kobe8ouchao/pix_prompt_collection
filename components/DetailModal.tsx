import React, { useEffect } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { PromptItem, Language } from '../types';

interface DetailModalProps {
  item: PromptItem;
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onCopy: (text: string) => void;
}

const DetailModal: React.FC<DetailModalProps> = ({ item, isOpen, onClose, lang, onCopy }) => {
  const [isCopied, setIsCopied] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCopy = () => {
    onCopy(item.prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const title = lang === 'en' ? item.title : item.titleZh || item.title;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-pantone-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-[#F0EEE9] rounded-3xl w-full max-w-5xl max-h-[90vh] min-h-[60vh] shadow-2xl overflow-hidden flex flex-col md:flex-row animate-bounce-slight ring-1 ring-white/50">
        
        {/* Close Button (Mobile) */}
        <button 
          onClick={onClose}
          className="md:hidden absolute top-4 right-4 z-20 p-2 bg-black/20 backdrop-blur-md rounded-full text-white shadow-sm hover:bg-black/40 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Image Section - Full Bleed */}
        <div className="w-full h-80 md:h-auto md:w-3/5 bg-pantone-200 relative group flex-shrink-0">
           {/* Pattern/Texture Overlay */}
           <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cream-pixels.png')] pointer-events-none z-10"></div>
           
           <img 
            src={item.imageUrl} 
            alt={title} 
            className="w-full h-full object-cover"
           />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/5 flex flex-col h-full bg-[#F0EEE9] overflow-hidden">
          <div className="p-8 flex flex-col h-full overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-pantone-900 mb-2">{title}</h2>
                    <div className="flex gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-pantone-300/50 text-pantone-700">
                            {item.category}
                        </span>
                        {item.model && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-pantone-200 border border-pantone-300 text-pantone-600">
                                {item.model}
                            </span>
                        )}
                    </div>
                </div>
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 hover:bg-pantone-300/50 rounded-full transition-colors text-pantone-500 hover:text-pantone-900 flex-shrink-0"
                >
                  <X size={24} />
                </button>
            </div>

            {/* Prompt Display */}
            <div className="flex-grow">
                <label className="block text-xs font-semibold text-pantone-500 uppercase tracking-wider mb-3">
                    {lang === 'en' ? 'Prompt' : '提示词'}
                </label>
                <div className="bg-white/60 p-5 rounded-2xl border border-white shadow-sm text-pantone-800 font-mono text-sm leading-relaxed whitespace-pre-wrap mb-6">
                    {item.prompt}
                </div>
            </div>

            {/* Actions */}
            <div className="mt-auto pt-4 border-t border-pantone-300/50 flex gap-3">
                <button 
                    onClick={handleCopy}
                    className="flex-1 flex items-center justify-center gap-2 bg-pantone-900 text-white py-3.5 rounded-xl font-medium hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                    {isCopied ? <Check size={18} /> : <Copy size={18} />}
                    {isCopied ? (lang === 'en' ? 'Copied' : '已复制') : (lang === 'en' ? 'Copy Prompt' : '复制提示词')}
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailModal;