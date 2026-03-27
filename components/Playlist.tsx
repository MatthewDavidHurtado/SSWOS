import React from 'react';
import { Video } from '../types';
import { useProgress } from '../hooks/useProgress';

interface PlaylistProps {
  videos: Video[];
  currentVideo: Video;
  onSelectVideo: (video: Video) => void;
  portal: 'rawson' | 'eddy' | 'bible';
}

const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand-gold flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
);

const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
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


function Playlist({ videos, currentVideo, onSelectVideo, portal }: PlaylistProps) {
  const { isCompleted, toggleProgress, getCompletionCount } = useProgress(portal);
  const totalItems = videos.length;
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

      {/* Video list */}
      <div className="space-y-1">
        {videos.map((video) => {
          const isActive = video.id === currentVideo.id;
          const completed = isCompleted(video.id.toString());

          return (
            <div
              key={video.id}
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
                    toggleProgress(video.id.toString());
                  }}
                  className="focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full"
                  aria-label={completed ? 'Mark as incomplete' : 'Mark as complete'}
                  title={completed ? 'Mark as incomplete' : 'Mark as complete'}
                >
                  <CheckIcon completed={completed} />
                </button>

                {/* Video info - clickable */}
                <button
                  onClick={() => onSelectVideo(video)}
                  className="flex-1 flex items-center gap-3 text-left min-w-0"
                >
                  {isActive ? <PlayIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{video.id}</div>}

                  <div className="flex-1 min-w-0">
                    <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'} ${completed ? 'line-through opacity-75' : ''}`}>
                      {video.title}
                    </h4>
                  </div>
                </button>

                {/* PDF download */}
                {video.pdfUrl && (
                  <a
                    href={video.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 text-gray-400 hover:text-brand-gold transition-colors rounded-full focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    aria-label={`Download PDF for ${video.title}`}
                  >
                    <DownloadIcon />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Playlist;