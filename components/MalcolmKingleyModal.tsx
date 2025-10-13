import React, { useState } from 'react';

interface MalcolmKingleyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MalcolmKingleyModal: React.FC<MalcolmKingleyModalProps> = ({ isOpen, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const correctPassword = 'GIVE_777!';

    if (password === correctPassword) {
      window.open('https://www.malcolmkingley.com', '_blank', 'noopener,noreferrer');
      setPassword('');
      setError('');
      onClose();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }

    setIsLoading(false);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
      setPassword('');
      setError('');
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-brand-dark border-2 border-brand-gold rounded-lg w-full max-w-md shadow-2xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-serif font-bold text-brand-gold">
              Malcolm Kingley Access
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <p className="text-gray-300 mb-6 text-center">
            Password: GIVE_777!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="mk-password" className="block text-sm font-medium text-gray-300 mb-2">
                Enter Password
              </label>
              <input
                type="password"
                id="mk-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent"
                placeholder="Enter password"
                required
                disabled={isLoading}
                autoFocus
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
              className="w-full bg-brand-gold text-black px-6 py-3 rounded-md font-bold text-lg hover:bg-brand-light-gold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-gold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Verifying...' : 'Access Website'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MalcolmKingleyModal;
