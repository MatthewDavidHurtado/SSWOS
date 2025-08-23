
import React, { useEffect } from 'react';

interface HealingMeditationModalProps {
  onClose: () => void;
}

const HealingMeditationModal: React.FC<HealingMeditationModalProps> = ({ onClose }) => {
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

  const videoSrc = "https://player.vimeo.com/video/1112399951?h=55398e4336&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="healing-meditation-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 max-w-4xl flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h2 id="healing-meditation-title" className="text-xl font-serif text-brand-gold tracking-wider">
            Daily Healing Meditation
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Healing Meditation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 sm:p-8 space-y-6 text-center">
            <p className="max-w-3xl mx-auto text-lg text-gray-300 italic">
                "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil."
                <cite className="block not-italic text-sm text-gray-500 mt-2">— Ephesians 6:11 (KJV)</cite>
            </p>
            <div className="relative w-full h-0 pb-[66.67%] rounded-lg overflow-hidden shadow-lg border border-brand-gold/20">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={videoSrc}
                    title="Put On The Whole Armor of God"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                ></iframe>
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

export default HealingMeditationModal;
