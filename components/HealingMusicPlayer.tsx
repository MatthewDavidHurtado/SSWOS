import React, { useState, useRef, useEffect } from 'react';

interface HealingMusicPlayerProps {
  onClose: () => void;
}

const HealingMusicPlayer: React.FC<HealingMusicPlayerProps> = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hasInitPos, setHasInitPos] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const playerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasInitPos && playerRef.current) {
      const rect = playerRef.current.getBoundingClientRect();
      setPosition({
        x: window.innerWidth - rect.width - 16,
        y: window.innerHeight - rect.height - 16,
      });
      setHasInitPos(true);
    }
  }, [hasInitPos]);

  const onMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('iframe')) return;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    e.preventDefault();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('iframe')) return;
    const touch = e.touches[0];
    setIsDragging(true);
    dragOffset.current = {
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    };
  };

  useEffect(() => {
    if (!isDragging) return;

    const onMouseMove = (e: MouseEvent) => {
      const newX = Math.max(0, Math.min(window.innerWidth - (playerRef.current?.offsetWidth ?? 320), e.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - (playerRef.current?.offsetHeight ?? 200), e.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      const newX = Math.max(0, Math.min(window.innerWidth - (playerRef.current?.offsetWidth ?? 320), touch.clientX - dragOffset.current.x));
      const newY = Math.max(0, Math.min(window.innerHeight - (playerRef.current?.offsetHeight ?? 200), touch.clientY - dragOffset.current.y));
      setPosition({ x: newX, y: newY });
    };

    const stopDrag = () => setIsDragging(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', stopDrag);
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', stopDrag);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', stopDrag);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', stopDrag);
    };
  }, [isDragging]);

  return (
    <div
      ref={playerRef}
      style={{
        position: 'fixed',
        left: hasInitPos ? position.x : undefined,
        top: hasInitPos ? position.y : undefined,
        right: hasInitPos ? undefined : 16,
        bottom: hasInitPos ? undefined : 16,
        zIndex: 9999,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      className="w-[320px] sm:w-[360px] rounded-xl overflow-hidden shadow-2xl border border-brand-gold/40 bg-gray-900"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-brand-gold/30">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-gold animate-pulse" viewBox="0 0 20 20" fill="currentColor">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
          <span className="text-xs font-bold font-serif text-brand-gold tracking-wide">Healing Music</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={() => setIsMinimized(v => !v)}
            className="text-gray-400 hover:text-brand-gold transition-colors p-1 rounded"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button
            onMouseDown={e => e.stopPropagation()}
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors p-1 rounded"
            title="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Player */}
      {!isMinimized && (
        <div
          className="relative w-full bg-black"
          style={{ paddingBottom: '56.25%' }}
          onMouseDown={e => e.stopPropagation()}
        >
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
      )}

      {isMinimized && (
        <div
          className="px-3 py-2 text-xs text-gray-400 font-serif italic"
          onMouseDown={e => e.stopPropagation()}
        >
          Playing in background — click expand to view
        </div>
      )}
    </div>
  );
};

export default HealingMusicPlayer;
