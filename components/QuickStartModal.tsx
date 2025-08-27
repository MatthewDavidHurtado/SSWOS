import React, { useEffect, useState } from 'react';

interface QuickStartModalProps {
  onClose: () => void;
}

const quickStartVideos = [
  {
    id: 1,
    title: 'Video #1',
    vimeoId: '1112146904?h=400a7dba5f'
  },
  {
    id: 2,
    title: 'Video #2', 
    vimeoId: '1112147890?h=9c8b5e2a1d'
  },
  {
    id: 3,
    title: 'Video #3',
    vimeoId: '1112148765?h=7f3a9b4c8e'
  }
];

const QuickStartModal: React.FC<QuickStartModalProps> = ({ onClose }) => {
  const [currentVideo, setCurrentVideo] = useState(quickStartVideos[0]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickstart-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 h-[90vh] max-w-6xl flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700 flex-shrink-0">
          <h2 id="quickstart-title" className="text-2xl font-serif text-brand-gold tracking-wider">
            Quick Start Video Series
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Quick Start"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow p-8 flex flex-col items-center justify-center space-y-8">
          {/* Title */}
          <h3 className="text-3xl sm:text-4xl font-serif text-brand-gold text-center">
            3-Part Training "Quick-Start"
          </h3>

          {/* Video Player */}
          <div className="w-full max-w-4xl">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border-2 border-gray-600">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://player.vimeo.com/video/${currentVideo.vimeoId}&badge=0&autopause=0&player_id=0&app_id=58479`}
                title={currentVideo.title}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Selection Buttons */}
          <div className="flex gap-4">
            {quickStartVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideo(video)}
                className={`px-8 py-3 rounded-lg font-bold text-lg transition-all duration-300 ${
                  currentVideo.id === video.id
                    ? 'bg-brand-gold text-black shadow-lg'
                    : 'bg-brand-gold/20 text-brand-gold border border-brand-gold/50 hover:bg-brand-gold/30'
                }`}
              >
                {video.title}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default QuickStartModal;