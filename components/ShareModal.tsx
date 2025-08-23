import React, { useEffect } from 'react';

interface ShareModalProps {
  onClose: () => void;
}

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
);

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
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

  const buttonBaseStyle = "w-full flex items-center justify-center gap-3 text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/50 font-serif font-bold text-lg tracking-wider";
  const activeButtonStyle = "bg-gradient-to-r from-brand-gold/80 to-brand-light-gold/80 text-brand-dark shadow-lg hover:shadow-brand-gold/30";

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 max-w-md flex flex-col relative animate-slide-up p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="share-modal-title" className="text-2xl font-serif text-brand-gold tracking-wider">
            Share Private Invite
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Share Modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
            <a 
                href="https://spiritual-special-forces-operator-school-759385455270.us-west1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseStyle} ${activeButtonStyle}`}
            >
                <LinkIcon />
                <span>INVITE RECRUIT TO SSWOS</span>
            </a>
            <a 
                href="https://copy-of-ebook-landing-page-generator-759385455270.us-west1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseStyle} ${activeButtonStyle}`}
            >
                <LinkIcon />
                <span>"Needleproof"</span>
            </a>
            <a 
                href="https://the-energy-leak-759385455270.us-west1.run.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseStyle} ${activeButtonStyle}`}
            >
                <LinkIcon />
                <span>"The Energy Leak"</span>
            </a>
            <a 
                href="https://the-divine-wealth-code-779946580524.us-west1.run.app"
                target="_blank"
                rel="noopener noreferrer"
                className={`${buttonBaseStyle} ${activeButtonStyle}`}
            >
                <LinkIcon />
                <span>"The Divine Wealth Code"</span>
            </a>
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

export default ShareModal;