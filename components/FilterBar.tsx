import React from 'react';
import { CATEGORIES } from '../constants';
import { Language } from '../types';

interface FilterBarProps {
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  lang: Language;
}

const FilterBar: React.FC<FilterBarProps> = ({ activeCategory, onSelectCategory, lang }) => {
  return (
    <div className="relative z-30 py-6 mb-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-out backdrop-blur-md border
                ${activeCategory === cat.id 
                  ? 'bg-pantone-900 text-white border-pantone-900 shadow-lg shadow-pantone-400/30 transform scale-105' 
                  : 'bg-white/40 border-white/60 text-pantone-600 hover:bg-white/80 hover:text-pantone-900 hover:border-pantone-300 hover:shadow-md'
                }
              `}
            >
              {lang === 'en' ? cat.labelEn : cat.labelZh}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;