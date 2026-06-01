import React from 'react';

const HealingMusicPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-start min-h-[60vh] py-10 px-4">
      <div className="w-full max-w-3xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-gold tracking-wide">Every Song Is a Treatment</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base font-serif italic">
            Listen and Heal With Soul, Truth, and Love!
          </p>
        </div>

        <div className="w-full rounded-xl overflow-hidden shadow-2xl border border-brand-gold/30 bg-gray-900">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.youtube.com/embed/HFIYbzWhgo8?si=_CPy7ZFemsplVvvA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealingMusicPage;
