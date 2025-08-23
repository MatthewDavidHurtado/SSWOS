
import React from 'react';
import { BibleStudyLesson } from '../types';

interface BibleSyllabusProps {
  lessons: BibleStudyLesson[];
  currentLesson: BibleStudyLesson;
  onSelectLesson: (lesson: BibleStudyLesson) => void;
}

const ReadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 2a.75.75 0 01.75.75v.518l5.975 2.242a.75.75 0 01.275 1.341l-5.975 2.242V10.5a.75.75 0 01-1.5 0v-1.442L3 6.816a.75.75 0 01.275-1.34L9.25 3.268V2.75A.75.75 0 0110 2z" />
        <path d="M9.25 11.418v2.832a.75.75 0 01-1.275.54L3 12.548V15.25a.75.75 0 00.75.75h12.5a.75.75 0 00.75-.75v-2.702l-5.025 1.884a.75.75 0 01-.95-.001L9.25 11.418z" />
    </svg>
);


function BibleSyllabus({ lessons, currentLesson, onSelectLesson }: BibleSyllabusProps) {
  return (
    <div className="space-y-1">
      {lessons.map((lesson) => {
        const isActive = lesson.id === currentLesson.id;
        return (
          <button
            key={lesson.id}
            onClick={() => onSelectLesson(lesson)}
            className={`w-full text-left p-3 rounded-md transition-all duration-200 flex items-center gap-4 border-l-4 ${
              isActive
                ? 'bg-brand-gold/20 border-brand-gold'
                : 'border-transparent hover:bg-gray-800/60'
            }`}
            aria-current={isActive ? 'true' : 'false'}
          >
            {isActive ? <ReadIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{lesson.id}</div>}
            
            <div className="flex-1">
              <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'}`}>{lesson.title}</h4>
            </div>
            
          </button>
        );
      })}
    </div>
  );
}

export default BibleSyllabus;
