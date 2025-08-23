import React from 'react';
import { Video } from '../types';

interface PlaylistProps {
  videos: Video[];
  currentVideo: Video;
  onSelectVideo: (video: Video) => void;
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


function Playlist({ videos, currentVideo, onSelectVideo }: PlaylistProps) {
  return (
    <div className="space-y-1">
      {videos.map((video) => {
        const isActive = video.id === currentVideo.id;
        return (
          <button
            key={video.id}
            onClick={() => onSelectVideo(video)}
            className={`w-full text-left p-3 rounded-md transition-all duration-200 flex items-center gap-4 border-l-4 ${
              isActive
                ? 'bg-brand-gold/20 border-brand-gold'
                : 'border-transparent hover:bg-gray-800/60'
            }`}
          >
            {isActive ? <PlayIcon /> : <div className="text-center w-6 flex-shrink-0 text-gray-500 font-bold">{video.id}</div>}
            
            <div className="flex-1">
              <h4 className={`font-semibold ${isActive ? 'text-brand-light-gold' : 'text-gray-200'}`}>{video.title}</h4>
            </div>
            
            {video.pdfUrl && (
              <a
                href={video.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 -mr-2 text-gray-400 hover:text-brand-gold transition-colors rounded-full"
                aria-label={`Download PDF for ${video.title}`}
              >
                <DownloadIcon />
              </a>
            )}
          </button>
        );
      })}
    </div>
  );
}

export default Playlist;