import React, { useEffect } from 'react';

interface ShareModalProps {
  onClose: () => void;
}

const LinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
    </svg>
);

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

interface ShareItemProps {
  title: string;
  url: string;
  copyUrl: string;
}

const ShareItem: React.FC<ShareItemProps> = ({ title, url, copyUrl }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="space-y-2">
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-3 text-left p-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus-visible:ring-4 focus-visible:ring-brand-gold/50 font-serif font-bold text-lg tracking-wider bg-gradient-to-r from-brand-gold/80 to-brand-light-gold/80 text-brand-dark shadow-lg hover:shadow-brand-gold/30"
      >
        <LinkIcon />
        <span>{title}</span>
      </a>
      <div className="flex items-center gap-2 px-2">
        <span className="text-xs text-gray-400 font-mono flex-grow">{copyUrl}</span>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors duration-200 ${
            copied 
              ? 'bg-green-600/20 text-green-400' 
              : 'bg-gray-700/50 text-gray-400 hover:bg-gray-600/50 hover:text-gray-300'
          }`}
          title="Copy URL"
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>
    </div>
  );
};

const ShareModal: React.FC<ShareModalProps> = ({ onClose }) => {
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

  const shareItems = [
    {
      title: "INVITE RECRUIT TO SSWOS",
      url: "https://the-secret-source-code-759385455270.us-west1.run.app/",
      copyUrl: "https://www.swos.com"
    },
    {
      title: '"Needleproof"',
      url: "https://copy-of-ebook-landing-page-generator-759385455270.us-west1.run.app/",
      copyUrl: "https://www.needleproof.org"
    },
    {
      title: '"The Energy Leak"',
      url: "https://the-energy-leak-759385455270.us-west1.run.app/",
      copyUrl: "https://www.theenergyleak.org"
    },
    {
      title: '"The Divine Wealth Code"',
      url: "https://the-divine-wealth-code-779946580524.us-west1.run.app",
      copyUrl: "https://www.divinewealthcode.org"
    },
    {
      title: "I AM OK! No More Chronic Fatigue.",
      url: "https://www.IAMOK.Life",
      copyUrl: "https://www.IAMOK.Life"
    }
  ];

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-modal-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 max-w-lg flex flex-col relative animate-slide-up p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 id="share-modal-title" className="text-2xl font-serif text-brand-gold tracking-wider">
            Share Private Invite
          </h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 -mr-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Share Modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          {shareItems.map((item, index) => (
            <ShareItem
              key={index}
              title={item.title}
              url={item.url}
              copyUrl={item.copyUrl}
            />
          ))}
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

export default ShareModal;