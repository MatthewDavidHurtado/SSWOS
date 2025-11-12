import React, { useEffect } from 'react';

interface QuickStartModalProps {
  onClose: () => void;
}

const QuickStartModal: React.FC<QuickStartModalProps> = ({ onClose }) => {
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
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 h-[90vh] max-w-7xl flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h2 id="quickstart-title" className="text-xl font-serif text-brand-gold tracking-wider">
            Quick-Start Training
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Quick Start Training"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-grow p-1 h-full">
          <iframe
            src="https://player.vimeo.com/video/1136180086?h=af8c681026&title=0&byline=0&portrait=0"
            title="Quick Start Training"
            className="w-full h-full border-0 rounded-b-md bg-gray-900"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
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