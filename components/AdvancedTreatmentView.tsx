
import React from 'react';

const AdvancedTreatmentView = () => {
  const videoSrc = "https://player.vimeo.com/video/1110001871?h=c349fcd91f&badge=0&autopause=0&player_id=0&app_id=58479";

  return (
    <div className="max-w-4xl mx-auto bg-brand-dark/30 rounded-lg overflow-hidden border border-gray-800 p-6 sm:p-8 lg:p-10 space-y-8 animate-fade-in">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold font-serif text-brand-gold">Advanced Treatment</h1>
        <p className="mt-4 text-lg text-brand-light-gold/90 max-w-3xl mx-auto">
          The solution is always found in the following steps:
        </p>
      </div>

      <div className="bg-black/20 p-6 rounded-lg border border-gray-700">
        <ol className="list-decimal list-inside space-y-5 text-gray-300 text-base leading-relaxed">
          <li>
            <span className="font-semibold text-white">Deny the lie and error(s).</span> One quick denial for each error is sufficient. This is to stop the action of evil in thought.
          </li>
          <li>
            <span className="font-semibold text-white">Witness God's allness.</span> To the best of your ability, witness perfection between God, His manifestation (man), and the harmonious relationship between them. Man is the image and likeness of God. Have only one God and one man. This tunes you into the Divine Mind.
          </li>
          <li>
            <span className="font-semibold text-white">Be still and listen.</span> Get silent. Be absent from the body. This receptivity is the 'waiting on The Lord' to receive. Wait patiently. Infinite patience produces immediate results. Patience is not a human quality; it is an admittance of a Divine Truth: that Principle (Love) is governing the situation entirely, not "you," nor anyone else.
          </li>
          <li>
            <span className="font-semibold text-white">Rejoice and give praise in advance.</span> Praise God. Do not withhold that which is due to Him who is worthy of all praise. Always remember:
            <blockquote className="mt-3 pl-4 border-l-2 border-brand-gold/50 text-brand-light-gold/90 italic">
              "Because he hath set his love upon me, therefore will I deliver him: I will set him on high, because he hath known my name."
              <cite className="block text-right not-italic text-sm text-gray-400 mt-1">— Psalm 91:14 (KJV)</cite>
            </blockquote>
          </li>
        </ol>
      </div>

      <div>
        <h2 className="text-2xl font-serif font-bold text-brand-light-gold mb-4 text-center">
          Advanced Training Module
        </h2>
        <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border-2 border-brand-gold/20"> {/* 16:9 Aspect Ratio */}
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={videoSrc}
            title="Advanced Treatment Training Video"
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

export default AdvancedTreatmentView;