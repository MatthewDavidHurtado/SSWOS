
import React from 'react';
import { MbeChapter } from '../types';
import { useProgress } from '../hooks/useProgress';

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

const CheckIcon = ({ completed }: { completed: boolean }) => (
  <div
    className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 transition-all duration-200 ${
      completed
        ? 'bg-green-500 border-green-500'
        : 'border-gray-500 hover:border-gray-400'
    }`}
  >
    {completed && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
    )}
  </div>
);


function MbeSyllabus({ chapters, currentChapter, onSelectChapter }: MbeSyllabusProps) {
  const { isCompleted, toggleProgress, getCompletionCount } = useProgress('eddy');
  const totalItems = chapters.length;
  const completedCount = getCompletionCount();

  return (
    <div className="space-y-3">
      {/* Progress summary */}
      <div className="bg-gray-800/60 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300 font-semibold">Progress</span>
          <span className="text-sm text-brand-gold font-bold">{completedCount} / {totalItems}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
          <div
            className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${totalItems > 0 ? (completedCount / totalItems) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Chapter list */}
      <div className="space-y-1">
        {chapters.map((chapter) => {
          const isActive = chapter.id === currentChapter.id;
          const completed = isCompleted(chapter.id.toString());

          return (
            <div
              key={chapter.id}
              className={`rounded-md border-l-4 transition-all duration-200 ${
                isActive
                  ? 'bg-brand-gold/20 border-brand-gold'
                  : 'border-transparent hover:bg-gray-800/60'
              }`}
            >
              <div className="flex items-center gap-3 p-3">
                {/* Completion checkbox */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleProgress(chapter.id.toString());
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                  aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                  title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  <CheckIcon completed={completed} />
                </button>

                {/* Chapter info - clickable */}
                <button
                  onClick={() => onSelectChapter(chapter)}
                  className="flex-1 flex items-center gap-3 text-left min-w-0"
                >
                  {isActive ? <ReadIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{chapter.id}</div>}

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'} ${completed ? 'line-through opacity-75' : ''}`}>
                      {chapter.title}
                    </h4>
                  </div>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MbeSyllabus;
