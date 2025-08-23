import React, { useState } from 'react';

const ChevronIcon = ({ isExpanded }: { isExpanded: boolean }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 text-gray-500 transition-transform duration-300 ease-in-out group-hover:text-gray-400 ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const HealingMeditation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const videoSrc = "https://player.vimeo.com/video/1112399951?h=55398e4336&autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <section className="py-16 sm:py-20 animate-fade-in-up">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clickable Header */}
        <div 
          className="text-center mb-8 sm:mb-10 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
          role="button"
          aria-expanded={isExpanded}
          aria-controls="healing-meditation-content"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsExpanded(!isExpanded); }}
        >
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-4xl sm:text-5xl font-bold font-serif text-brand-gold tracking-wider group-hover:text-brand-light-gold transition-colors">
              Daily Healing Meditation
            </h2>
            <ChevronIcon isExpanded={isExpanded} />
          </div>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300 italic">
            "Put on the whole armour of God, that ye may be able to stand against the wiles of the devil."
            <cite className="block not-italic text-sm text-gray-500 mt-2">— Ephesians 6:11 (KJV)</cite>
          </p>
        </div>

        {/* Collapsible Content */}
        <div
          id="healing-meditation-content"
          className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
          <div className="overflow-hidden">
            <div className="pt-4">
                {isExpanded && (
                    <div className="relative w-full h-0 pb-[66.67%] rounded-lg overflow-hidden shadow-2xl border-2 border-brand-gold/20">
                        <iframe
                            className="absolute top-0 left-0 w-full h-full"
                            src={videoSrc}
                            title="Put On The Whole Armor of God"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HealingMeditation;
