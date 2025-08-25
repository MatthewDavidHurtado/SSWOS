import React, { useState } from 'react';

interface LoginScreenProps {
  onLoginSuccess: (stayLoggedIn: boolean) => void;
}

function LoginScreen({ onLoginSuccess }: LoginScreenProps) {
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleLogin = () => {
    // Directly log the user in without any authentication
    onLoginSuccess(stayLoggedIn);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <div className="flex flex-col md:flex-row md:min-h-screen">
        
        {/* Image Panel (Right side on desktop) */}
        <div 
          className="relative w-full h-64 md:h-auto md:w-1/2 lg:w-7/12 order-1 md:order-2"
        >
          <div
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: "url('https://i.imgur.com/ms3hPF6.png')" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-8 animate-fade-in">
             <img
              src="https://i.imgur.com/zDr7njf.png"
              alt="Gnostic Symbol Logo"
              className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 logo-glow"
            />
            <h2 className="font-serif font-bold text-2xl sm:text-4xl text-brand-gold tracking-widest uppercase">
              Spiritual Special Warfare
            </h2>
            <p className="font-serif text-md sm:text-xl text-brand-light-gold/90 tracking-[0.2em] uppercase mt-1">
              Operator School
            </p>
          </div>
        </div>
        
        {/* Form Panel (Left side on desktop) */}
        <div className="w-full md:w-1/2 lg:w-5/12 bg-black flex flex-col justify-center p-8 sm:p-12 order-2 md:order-1">
          <div className="w-full max-w-md mx-auto animate-fade-in">
            <img
              src="https://i.imgur.com/zDr7njf.png"
              alt="Gnostic Symbol Logo"
              className="mb-8 h-12 w-12 sm:h-16 sm:w-16"
            />
            <h1 className="text-3xl sm:text-4xl font-bold font-serif text-white mb-2">
              Welcome, Operator
            </h1>
            <p className="text-gray-400 mb-10">
              Your training begins now. Press the button below to proceed.
            </p>
            
            {/* Welcome Video Section */}
            <div className="mb-8">
                <h2 className="text-lg font-semibold font-serif text-brand-light-gold text-center mb-4">
                    Welcome Briefing
                </h2>
                <div className="relative w-full overflow-hidden rounded-lg border-2 border-gray-700 shadow-lg" style={{ paddingTop: '56.25%' }}> {/* 16:9 Aspect Ratio */}
                  <iframe
                    className="absolute top-1/2 left-0 w-full"
                    style={{ height: '316%', transform: 'translateY(-42%)' }} // Scale and position vertical video to cover landscape container, framing the upper portion.
                    src="https://player.vimeo.com/video/1112146904?h=400a7dba5f&badge=0&autopause=0&player_id=0&app_id=58479"
                    title="Welcome Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <button
                type="button"
                onClick={handleLogin}
                className="w-full bg-brand-gold text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-brand-light-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-gold flex items-center justify-center gap-2"
              >
                ENTER TRAINING
              </button>
              
              <div className="flex items-center">
                  <input
                      id="stay-logged-in"
                      type="checkbox"
                      checked={stayLoggedIn}
                      onChange={(e) => setStayLoggedIn(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-brand-gold focus:ring-brand-gold focus:ring-offset-black"
                  />
                  <label htmlFor="stay-logged-in" className="ml-2 block text-sm text-gray-300 select-none">
                      Stay logged in
                  </label>
              </div>
            </div>


          </div>
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
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 8px rgba(217, 164, 67, 0.4));
          }
          50% {
            filter: drop-shadow(0 0 16px rgba(217, 164, 67, 0.7));
          }
        }
        .logo-glow {
          animation: glow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default LoginScreen;