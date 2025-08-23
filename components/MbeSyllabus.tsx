
import React from 'react';
import { MbeChapter } from '../types';

interface MbeSyllabusProps {
  chapters: MbeChapter[];
  currentChapter: MbeChapter;
  onSelectChapter: (chapter: MbeChapter) => void;
}

const ReadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    </svg>
);


function MbeSyllabus({ chapters, currentChapter, onSelectChapter }: MbeSyllabusProps) {
  return (
    <div className="space-y-1">
      {chapters.map((chapter) => {
        const isActive = chapter.id === currentChapter.id;
        return (
          <button
            key={chapter.id}
            onClick={() => onSelectChapter(chapter)}
            className={`w-full text-left p-3 rounded-md transition-all duration-200 flex items-center gap-4 border-l-4 ${
              isActive
                ? 'bg-brand-gold/20 border-brand-gold'
                : 'border-transparent hover:bg-gray-800/60'
            }`}
          >
            {isActive ? <ReadIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{chapter.id}</div>}
            
            <div className="flex-1">
              <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'}`}>{chapter.title}</h4>
            </div>
            
          </button>
        );
      })}
    </div>
  );
}

export default MbeSyllabus;
