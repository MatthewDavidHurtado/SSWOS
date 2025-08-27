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
  
  const embedUrl = "https://service-3-part-training-quick-start-779946580524.us-west1.run.app";

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-start-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 h-[90vh] max-w-7xl flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h2 id="quick-start-title" className="text-xl font-serif text-brand-gold tracking-wider">
            Quick Start Video Series
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Quick Start Video Series"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-grow p-1 h-full">
          <iframe
            src={embedUrl}
            title="Quick Start Video Series"
            className="w-full h-full border-0 rounded-b-md bg-gray-900"
            allow="fullscreen"
          />
        </div>
        
        {/* Video Navigation Buttons */}
        <div className="p-4 border-t border-gray-700 bg-brand-dark/30">
          <div className="flex justify-center gap-4">
            <button className="bg-brand-gold text-black px-6 py-2 rounded-lg font-bold hover:bg-brand-light-gold transition-colors">
              Video #1
            </button>
            <button className="bg-brand-gold text-black px-6 py-2 rounded-lg font-bold hover:bg-brand-light-gold transition-colors">
              Video #2
            </button>
            <button className="bg-brand-gold text-black px-6 py-2 rounded-lg font-bold hover:bg-brand-light-gold transition-colors">
              Video #3
            </button>
          </div>
        </div>
        
        {/* Schedule with Malcolm Section */}
        <div className="p-6 border-t border-gray-700 bg-brand-dark/50">
          <div className="text-center space-y-4">
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mx-auto">
              Every SSWOS Operator Gets A 1.5-Hour Custom "Life Blueprint" Session to Import Their Trauma-Tracks Into The Bio-Code/Mentor Platform.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              This builds your custom mentor to assist you in getting micro-shifts and identifying all your biological patterns.
            </p>
            <a
              href="https://calendly.com/sealintelligence/spiritual-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-brand-gold text-black px-8 py-3 rounded-lg font-bold text-lg hover:bg-brand-light-gold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold shadow-lg"
            >
              SCHEDULE WITH MALCOLM
            </a>
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