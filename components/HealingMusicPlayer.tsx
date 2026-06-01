import React, { useState, useRef, useCallback } from 'react';

interface HealingMusicPlayerProps {
  onClose: () => void;
}

const HealingMusicPlayer: React.FC<HealingMusicPlayerProps> = ({ onClose }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 16, y: 16 });
  const playerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const clamp = useCallback((x: number, y: number) => {
    const el = playerRef.current;
    if (!el) return { x, y };
    const maxX = window.innerWidth - el.offsetWidth;
    const maxY = window.innerHeight - el.offsetHeight;
    return {
      x: Math.max(0, Math.min(maxX, x)),
      y: Math.max(0, Math.min(maxY, y)),
    };
  }, []);

  const startDrag = useCallback((clientX: number, clientY: number) => {
    dragging.current = true;
    const el = playerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    dragOffset.current = {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  }, []);

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('iframe')) return;
    startDrag(e.clientX, e.clientY);

    const onMove = (ev: MouseEvent) => {
      if (!dragging.current) return;
      setPosition(clamp(ev.clientX - dragOffset.current.x, ev.clientY - dragOffset.current.y));
    };
    const onUp = () => {
      dragging.current = false;
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    e.preventDefault();
  }, [startDrag, clamp]);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if ((e.target as HTMLElement).closest('button') || (e.target as HTMLElement).closest('iframe')) return;
    const touch = e.touches[0];
    startDrag(touch.clientX, touch.clientY);

    const onMove = (ev: TouchEvent) => {
      if (!dragging.current) return;
      const t = ev.touches[0];
      setPosition(clamp(t.clientX - dragOffset.current.x, t.clientY - dragOffset.current.y));
    };
    const onEnd = () => {
      dragging.current = false;
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onEnd);
    };
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);
  }, [startDrag, clamp]);

  return (
    <div
      ref={playerRef}
      style={{ position: 'fixed', right: position.x, bottom: position.y, zIndex: 9999 }}
      className="w-[320px] sm:w-[360px] rounded-xl overflow-hidden shadow-2xl border border-brand-gold/40 bg-gray-900 select-none"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Title bar */}
      <div className="flex items-center justify-between px-3 py-2 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b border-brand-gold/30 cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-gold animate-pulse" viewBox="0 0 20 20" fill="currentColor">
            <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
          </svg>
          <span className="text-xs font-bold font-serif text-brand-gold tracking-wide">Healing Music</span>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(v => !v)}
            className="text-gray-400 hover:text-brand-gold transition-colors p-1 rounded"
            title={isMinimized ? 'Expand' : 'Minimize'}
          >
            {isMinimized ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          <button
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

      {!isMinimized && (
        <div className="relative w-full bg-black" style={{ paddingBottom: '56.25%' }}>
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
        <div className="px-3 py-2 text-xs text-gray-400 font-serif italic">
          Playing in background — click + to expand
        </div>
      )}
    </div>
  );
};

export default HealingMusicPlayer;
