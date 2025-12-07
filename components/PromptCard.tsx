import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PromptItem, Language } from '../types';

interface PromptCardProps {
  item: PromptItem;
  lang: Language;
  onCopy: (text: string) => void;
  onClick: (item: PromptItem) => void;
}

const PromptCard: React.FC<PromptCardProps> = ({ item, lang, onCopy, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening modal
    onCopy(item.prompt);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const title = lang === 'en' ? item.title : item.titleZh || item.title;

  return (
    <div 
      className="group relative mb-6 break-inside-avoid rounded-2xl overflow-hidden bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-xl hover:shadow-pantone-300/40 transition-all duration-500 ease-out transform hover:-translate-y-1 border border-white/50 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(item)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={item.imageUrl} 
          alt={title}
          className={`w-full h-auto object-cover transition-transform duration-1000 ease-out ${isHovered ? 'scale-105' : 'scale-100'}`}
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4`}>
           <button 
            onClick={handleCopy}
            className={`absolute top-3 right-3 p-2.5 rounded-full backdrop-blur-xl transition-all duration-300 shadow-lg border border-white/20 z-10 ${
              isCopied 
                ? 'bg-green-500/90 text-white rotate-0 scale-110' 
                : 'bg-white/30 text-white hover:bg-pantone-900 hover:text-white'
            }`}
            title="Copy Prompt"
          >
            {isCopied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
            <h3 className="font-serif font-bold text-lg text-pantone-900 leading-tight">
            {title}
            </h3>
        </div>
        
        {/* Prompt Text with Blur Effect */}
        <div className="relative group/prompt">
            <p className="text-pantone-600 text-xs mb-4 line-clamp-3 font-mono leading-relaxed bg-pantone-200/40 backdrop-blur-md p-3 rounded-lg border border-white/60 group-hover/prompt:bg-pantone-200/60 transition-colors">
            {item.prompt}
            </p>
        </div>

        <div className="flex items-center justify-between mt-1 pt-2">
            <div className="flex flex-wrap gap-2">
                 <span className="text-[10px] font-medium text-pantone-600 uppercase tracking-widest px-2 py-1 rounded-md bg-white/50 backdrop-blur-sm border border-pantone-200/50">
                    {item.category}
                </span>
                {item.model && (
                    <span className="text-[10px] font-medium text-pantone-500 px-2 py-1 rounded-md bg-white/50 backdrop-blur-sm border border-pantone-200/50">
                        {item.model}
                    </span>
                )}
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default PromptCard;