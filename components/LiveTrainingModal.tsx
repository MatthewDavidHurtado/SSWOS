import React, { useEffect } from 'react';

interface LiveTrainingModalProps {
  onClose: () => void;
}

const VideoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-gold" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
  </svg>
);

const LinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const LiveTrainingModal: React.FC<LiveTrainingModalProps> = ({ onClose }) => {
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
      aria-labelledby="live-training-title"
      onClick={onClose}
    >
      <div 
        className="bg-brand-dark border border-brand-gold/50 rounded-lg shadow-xl w-11/12 max-w-2xl flex flex-col relative animate-slide-up max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <VideoIcon />
            <div>
              <h2 id="live-training-title" className="text-2xl font-serif text-brand-gold tracking-wider font-bold">
                LIVE STREAM TRAINING
              </h2>
              <p className="text-brand-light-gold/90 text-lg font-serif">
                Every Wednesday 4 pm PST
              </p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors rounded-full p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            aria-label="Close Live Training"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 space-y-6">
          <p className="text-gray-300 text-lg text-center">
            Join the Zoom link below:
          </p>

          {/* Playback Recordings Link */}
          <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/50">
            <div className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-purple-400 font-semibold mb-1">Missed a Session?</p>
                <a 
                  href="https://discord.com/channels/1404547715836149760/1420573027472510976"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-200 underline text-sm"
                >
                  PLAYBACK RECORDINGS (Private Discord Group)
                </a>
              </div>
            </div>
          </div>

          {/* Main Zoom Link */}
          <div className="bg-black/30 rounded-lg p-6 border border-gray-700">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <LinkIcon />
                <div>
                  <p className="text-white font-semibold mb-2">Join Zoom Meeting</p>
                  <a 
                    href="https://us06web.zoom.us/j/84647140772?pwd=1bC6FAhQiyLiHmWZIt6mbjwxwbySlA.1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline break-all"
                  >
                    https://us06web.zoom.us/j/84647140772?pwd=1bC6FAhQiyLiHmWZIt6mbjwxwbySlA.1
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-gray-600">
                <div>
                  <p className="text-gray-400 text-sm">Meeting ID</p>
                  <p className="text-white font-mono text-lg">846 4714 0772</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Passcode</p>
                  <p className="text-white font-mono text-lg">097169</p>
                </div>
              </div>
            </div>
          </div>

          {/* Calendar Link */}
          <div className="bg-brand-gold/10 rounded-lg p-4 border border-brand-gold/30">
            <div className="flex items-center gap-3">
              <CalendarIcon />
              <div>
                <p className="text-brand-light-gold font-semibold mb-1">Add to Calendar</p>
                <a 
                  href="https://us06web.zoom.us/meeting/tZArc-6pqjstHdatHAKNSwpoAvVIXg2iE0vf/ics?icsToken=DCHfBrMZ59Q0-PzPEwAALAAAAEMSaRTcxHqKI1PxbSLzf9Ei5swlaf7BefMWn_FCWBQAKzLLZZDn6md9xkRV0xvAixDPGNkmS3SqdtzDozAwMDAwMQ&meetingMasterEventId=sgilMgSST7uHX_bxhCJKoQ"
                  className="text-brand-gold hover:text-brand-light-gold underline text-sm"
                >
                  Download iCalendar (.ics) file
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Options */}
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/50">
            <div className="flex items-start gap-3">
              <PhoneIcon />
              <div>
                <p className="text-green-400 font-semibold mb-2">One Tap Mobile</p>
                <div className="space-y-1 text-sm">
                  <p className="text-gray-300">
                    <a href="tel:+16469313860,,84647140772#,,,,*097169#" className="text-green-400 hover:text-green-300">
                      +1 646 931 3860
                    </a>
                    ,,84647140772#,,,,*097169# US
                  </p>
                  <p className="text-gray-300">
                    <a href="tel:+19294362866,,84647140772#,,,,*097169#" className="text-green-400 hover:text-green-300">
                      +1 929 436 2866
                    </a>
                    ,,84647140772#,,,,*097169# US (New York)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Meeting Details */}
          <div className="text-center text-gray-400 text-sm space-y-2">
            <p><strong className="text-white">Topic:</strong> SSWOS</p>
            <p><strong className="text-white">Time:</strong> Sep 3, 2025 04:00 PM Pacific Time (US and Canada)</p>
            <p><strong className="text-white">Frequency:</strong> Every week on Wed, 110 occurrence(s)</p>
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

export default LiveTrainingModal;