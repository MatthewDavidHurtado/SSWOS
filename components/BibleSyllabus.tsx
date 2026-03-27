
import React from 'react';
import { BibleStudyLesson } from '../types';
import { useProgress } from '../hooks/useProgress';

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


function BibleSyllabus({ lessons, currentLesson, onSelectLesson }: BibleSyllabusProps) {
  const { isCompleted, toggleProgress, getCompletionCount } = useProgress('bible');
  const totalItems = lessons.length;
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

      {/* Lesson list */}
      <div className="space-y-1">
        {lessons.map((lesson) => {
          const isActive = lesson.id === currentLesson.id;
          const completed = isCompleted(lesson.id.toString());

          return (
            <div
              key={lesson.id}
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
                    toggleProgress(lesson.id.toString());
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                  aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                  title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  <CheckIcon completed={completed} />
                </button>

                {/* Lesson info - clickable */}
                <button
                  onClick={() => onSelectLesson(lesson)}
                  className="flex-1 flex items-center gap-3 text-left min-w-0"
                  aria-current={isActive ? 'true' : 'false'}
                >
                  {isActive ? <ReadIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{lesson.id}</div>}

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'} ${completed ? 'line-through opacity-75' : ''}`}>
                      {lesson.title}
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

export default BibleSyllabus;
