
import React, { useEffect } from 'react';

interface SswosProcessModalProps {
  onClose: () => void;
}

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

interface PhaseCardProps {
  phase: string;
  title: string;
  description?: string;
  tasks?: string[];
  transferText?: string;
  transferTarget?: string;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, tasks, transferText, transferTarget }) => {
  return (
    <div className="bg-brand-dark/30 border border-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
        <div className="w-full lg:w-1/4 flex-shrink-0">
          <h3 className="text-5xl lg:text-6xl font-serif text-gray-600 font-light tracking-wider">
            Phase <span className="text-brand-gold">{phase}</span>
          </h3>
        </div>
        <div className="flex-grow border-t-2 lg:border-t-0 lg:border-l-2 border-dashed border-gray-700 pt-6 lg:pt-0 lg:pl-8 w-full">
          <p className="text-2xl font-semibold text-brand-light-gold font-serif tracking-wide">{title}</p>
          {description && <p className="mt-2 text-gray-300 max-w-xl">{description}</p>}
          {tasks && (
            <ul className="mt-4 space-y-2 text-gray-300 list-inside">
              {tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-brand-gold mr-3 mt-1">&#8211;</span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        {transferText && (
          <div className="w-full lg:w-auto text-left lg:text-right flex-shrink-0 self-start lg:self-center mt-4 lg:mt-0">
            <div className="inline-flex items-center gap-3 bg-black/30 px-4 py-2 rounded-full border border-gray-700">
              <span className="text-sm text-gray-400 font-semibold whitespace-nowrap">{transferText}</span>
              <ArrowRightIcon />
              <span className="text-sm text-brand-light-gold font-bold whitespace-nowrap">{transferTarget}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SswosProcessModal: React.FC<SswosProcessModalProps> = ({ onClose }) => {
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
      aria-labelledby="sswos-process-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 h-[90vh] max-w-7xl flex flex-col relative animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700 flex-shrink-0">
          <h2 id="sswos-process-title" className="text-xl font-serif text-brand-gold tracking-wider">
            The SSWOS Process
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close SSWOS Process"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-grow p-6 sm:p-8 lg:p-10 overflow-y-auto">
          <div className="text-center mb-10">
            <blockquote className="max-w-2xl mx-auto text-lg text-gray-300">
              <p className="italic">"And if Christ be in you, the body is dead because of sin; but the Spirit is life because of righteousness."</p>
              <cite className="block not-italic text-sm text-gray-500 mt-2">— Romans 8:10 (KJV)</cite>
            </blockquote>
          </div>
          <div className="space-y-10">
            <PhaseCard
              phase="I"
              title="MK ULTRØN 3 Weeks +"
              description={`(Do at least 1 - 3 Retroactive Treatment, Go Quantum, Absolute Treatment prompts/daily)`}
              transferText={`From "Physical"`}
              transferTarget={`To "Mental"`}
            />
            <PhaseCard
              phase="II"
              title="Daily Spiritual Regimen"
              tasks={[
                "1 chapter of F. L. Rawson / Day",
                "10 pages of M.B.E. / Day",
                "1 Bible Study / Day",
                "15-Minutes Meditation / Day",
                "3+ Treatments / Day",
              ]}
              transferText={`Transfer to`}
              transferTarget={`"Spirit."`}
            />
            <PhaseCard
              phase="III"
              title="Demonstrate + Graduate / Serve"
              description="Apply the learned principles in daily life to achieve tangible results, graduate from the program, and serve others with your newfound understanding and capabilities."
            />
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

export default SswosProcessModal;
