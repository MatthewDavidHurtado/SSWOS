import React, { useState } from 'react';

interface PasswordProtectionProps {
  onPasswordCorrect: () => void;
}

const PasswordProtection: React.FC<PasswordProtectionProps> = ({ onPasswordCorrect }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Password check - you'll set this when you deploy
    const correctPassword = 'MK_Gnostic_Keeper777!';
    
    console.log('Entered password:', password);
    console.log('Expected password:', correctPassword);
    console.log('Match:', password === correctPassword);
    
    if (password === correctPassword) {
      // Store in sessionStorage so they don't need to re-enter during session
      sessionStorage.setItem('siteAccess', 'granted');
      onPasswordCorrect();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-white flex items-center justify-center">
      <div className="w-full max-w-md mx-auto p-8">
        <div className="text-center mb-8">
          <img
            src="https://i.imgur.com/zDr7njf.png"
            alt="Spiritual Special Warfare Logo"
            className="mx-auto mb-6 w-24 h-24 sm:w-32 sm:h-32 logo-glow"
          />
          <h1 className="font-serif font-bold text-3xl sm:text-4xl text-brand-gold tracking-widest uppercase mb-2">
            Spiritual Special Warfare
          </h1>
          <p className="font-serif text-lg sm:text-xl text-brand-light-gold/90 tracking-[0.2em] uppercase">
            Operator School
          </p>
        </div>

        <div className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 p-6 sm:p-8">
          <h2 className="text-2xl font-serif font-bold text-white mb-2 text-center">
            Access Required
          </h2>
          <p className="text-gray-400 mb-6 text-center">
            Enter the access code<br />
            to proceed to SSWOS training.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Access Code
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="Enter access code"
                required
                disabled={isLoading}
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-900/20 border border-red-800 rounded-md p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-gold text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-brand-light-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-brand-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Enter Training'}
            </button>

            <a
              href="https://www.sswos.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-700 text-white px-6 py-3 rounded-md font-bold text-lg hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-gray-500 text-center block"
            >
              What Is This Training?
            </a>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center">
              Contact your instructor if you need access credentials.
            </p>
          </div>
        </div>
      </div>

      <style>{`
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
};

export default PasswordProtection;