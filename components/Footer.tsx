
import React from 'react';

interface FooterProps {
  onOpenQuickStart: () => void;
}

const PlayCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
  </svg>
);

function Footer({ onOpenQuickStart }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-500 text-xs border-t border-gray-800 mt-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <hr className="border-t border-gray-800/50 mt-16" />
      </div>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-lg mx-auto space-y-12 text-center">

          {/* Logo and Title Section */}
          <div className="flex flex-col items-center gap-4">
            <img
              src="https://i.imgur.com/zDr7njf.png"
              alt="Spiritual Special Warfare Logo"
              className="h-24 w-24 sm:h-28 sm:w-28 logo-glow-footer"
            />
            <div>
              <h3 className="font-serif font-bold text-2xl sm:text-3xl text-brand-gold tracking-widest uppercase">
                Spiritual Special Warfare
              </h3>
              <p className="font-serif text-lg sm:text-xl text-brand-light-gold/90 tracking-[0.2em] uppercase mt-1">
                Operator School
              </p>
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="space-y-4">
            {/* Quick Start Video Series Link */}
            <div className="mb-8">
              <button
                onClick={onOpenQuickStart}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-brand-gold/10 to-brand-light-gold/10 border border-brand-gold/30 rounded-full text-brand-light-gold hover:from-brand-gold/20 hover:to-brand-light-gold/20 hover:border-brand-gold/50 transition-all duration-300 font-serif font-semibold tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
              >
                <PlayCircleIcon />
                <span>Quick Start Video Series</span>
              </button>
            </div>
            
            <p className="font-bold text-gray-400 font-serif tracking-widest">DISCLAIMER</p>
            <p>
              The content provided on this website, including all video lessons, written materials, and AI-powered chat interactions, is for informational, educational, and entertainment purposes only. The teachings and perspectives shared are based on gnostic and esoteric traditions and represent the views of the author. They are not intended to be a substitute for professional medical, psychological, legal, or financial advice.
            </p>
            <p>
              Viewers and participants are encouraged to approach all spiritual practices and information with personal discernment and to take full responsibility for their own well-being. The creators and affiliates of this platform assume no liability for any actions taken based on the content provided herein.
            </p>
            <p className="pt-4 text-gray-400">
              © {currentYear} Malcolm Kingley. All Rights Reserved. Unauthorized reproduction, distribution, or broadcasting of this material is strictly prohibited.
            </p>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes glow-footer {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(217, 164, 67, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 18px rgba(217, 164, 67, 0.8));
          }
        }
        .logo-glow-footer {
          animation: glow-footer 5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
