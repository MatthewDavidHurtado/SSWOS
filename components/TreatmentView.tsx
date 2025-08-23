
import React from 'react';

const TreatmentView = () => {
  const videoSrc = "https://player.vimeo.com/video/1109992670?h=07bab3a1ef&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <div className="max-w-4xl mx-auto bg-brand-dark/30 rounded-lg overflow-hidden border border-gray-800 p-6 sm:p-8 lg:p-10 space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-gold">Applying the Treatment</h1>
        <p className="mt-4 text-lg text-brand-light-gold/90 max-w-3xl mx-auto">
          "Applying is learning" - the more you do, the better your consciousness becomes, finely tuned to the infinite Mind. Every circumstance, person, or condition of matter is an out-picturing of what's happening in thought.
        </p>
      </div>

      <div className="bg-black/20 p-6 rounded-lg border border-gray-700">
        <h2 className="text-2xl font-serif font-bold text-brand-light-gold mb-4">
          How to Reverse False Conditions
        </h2>
        <ol className="list-decimal list-inside space-y-4 text-gray-300 text-base leading-relaxed">
          <li>
            <span className="font-semibold text-white">Remove illusion from thought.</span> We must remove persons, conditions of matter, and qualities of 'good and evil' from our thinking. These are but shadows of mortal belief.
          </li>
          <li>
            <span className="font-semibold text-white">Replace matter with Truth.</span> Replace material "things" for spiritual thoughts and bring everything into captivity to correct your thinking, aligning it with the one Divine Mind.
          </li>
          <li>
            <span className="font-semibold text-white">Take full responsibility.</span> We take 100% responsibility for everything that comes into our so-called human experience, recognizing it as either a false-sense of mortal-belief or an emanation of the Divine Mind. We dissolve "matter" within ourselves until we see, feel, and become only perfection.
          </li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-bold text-brand-light-gold mb-4 text-center">
          Training Module: The Method of Working
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border-2 border-brand-gold/20"> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoSrc}
            title="Treatment Training Video"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default TreatmentView;