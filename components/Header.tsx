
import React, { useState, useEffect, useRef } from 'react';

type Portal = 'rawson' | 'eddy' | 'bible' | 'treatment' | 'advanced-treatment';

interface HeaderProps {
  activePortal: Portal;
  onPortalSwitch: (portal: Portal) => void;
  onOpenLiveTraining: () => void;
  onOpenQuickStart: () => void;
  onOpenSlaughterhouse: () => void;
  onOpenTreatmentOutline: () => void;
  onOpenShareModal: () => void;
  onOpenCipherModal: () => void;
  onOpenHealingMeditation: () => void;
  onOpenSswosProcess: () => void;
  onLogout: () => void;
}


const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const DocumentTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 1a1 1 0 000 2h6a1 1 0 100-2H6zM6 9a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h4a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
);

const KeyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 0118 8zm-6-4a4 4 0 100 8 4 4 0 000-8z" clipRule="evenodd" />
    </svg>
);

const CommunityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
    </svg>
);

const UserIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
    </svg>
);

const MusicIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.369 4.369 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
    </svg>
);

const SparklesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5 2a1 1 0 00-1 1v1.586l-1.293-1.293a1 1 0 10-1.414 1.414L2.586 6H1a1 1 0 000 2h1.586l-1.293 1.293a1 1 0 101.414 1.414L4 9.414V11a1 1 0 002 0V9.414l1.293 1.293a1 1 0 101.414-1.414L6.414 8H8a1 1 0 000-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414L5 4.586V3a1 1 0 00-1-1zm14 6a1 1 0 011 1v1.586l1.293-1.293a1 1 0 111.414 1.414L18.414 11H20a1 1 0 110 2h-1.586l1.293 1.293a1 1 0 11-1.414 1.414L17 14.414V16a1 1 0 11-2 0v-1.586l-1.293 1.293a1 1 0 11-1.414-1.414L13.586 13H12a1 1 0 110-2h1.586l-1.293-1.293a1 1 0 011.414-1.414L15 9.414V8a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
);

const ShareIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
    </svg>
);

const ChevronDownIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className || "h-5 w-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 1.944c-1.664-1.262-3.6-1.944-5.5-1.944-3.434 0-6.338 2.336-6.5 5.56C-2.338 11.233 1.162 18 10 18s12.338-6.767 12.5-12.44C22.838 2.336 19.934 0 16.5 0c-1.9 0-3.836.682-5.5 1.944zM9 11l-3-3 1.41-1.41L9 8.18l4.59-4.59L15 5l-6 6z" clipRule="evenodd" />
    </svg>
);

const ClipboardListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
    </svg>
);

const Header: React.FC<HeaderProps> = ({
  activePortal,
  onPortalSwitch,
  onOpenLiveTraining,
  onOpenQuickStart,
  onOpenSlaughterhouse,
  onOpenTreatmentOutline,
  onOpenShareModal,
  onOpenCipherModal,
  onOpenHealingMeditation,
  onOpenSswosProcess,
  onLogout
}) => {
  const portalButtonBaseStyle = "px-4 sm:px-6 py-2 text-sm font-bold font-serif transition-colors duration-300 rounded-t-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-brand-gold whitespace-nowrap";
  const activePortalStyle = "bg-black text-brand-gold shadow-inner";
  const inactivePortalStyle = "bg-gray-800/60 text-gray-400 hover:bg-gray-700/80 hover:text-white";

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        if (isDropdownOpen && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  const dropdownItemStyle = "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-200 hover:bg-brand-gold/10 hover:text-brand-light-gold transition-colors duration-200";

  return (
    <>
      <header className="bg-brand-dark shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between min-h-[4rem] sm:h-16 gap-3 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              <img
                src="https://i.imgur.com/zDr7njf.png"
                alt="Gnostic Symbol Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 logo-glow"
              />
              <div>
                <h1 className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wider" style={{ textShadow: '0 0 8px rgba(255, 255, 255, 0.3)' }}>
                  KINGLEY FOUNDATION
                </h1>
                <p className="text-xs sm:text-sm text-white/80 tracking-wide">
                  508(c)(1)(a) Private Church
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={onOpenQuickStart}
                className="bg-brand-gold text-black px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 sm:gap-2 font-bold hover:bg-brand-light-gold transition-colors duration-300 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-brand-gold border border-brand-gold whitespace-nowrap"
                aria-label="Open Quick Start Training"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Quick-Start Training</span>
              </button>
              <button
                onClick={onOpenLiveTraining}
                className="bg-gray-700 text-white px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 sm:gap-2 font-bold hover:bg-gray-600 transition-colors duration-300 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-gray-500 border border-gray-600 whitespace-nowrap"
                aria-label="Open Live Training"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span className="hidden sm:inline">Live Training</span>
              </button>
              
              <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="bg-brand-gold text-black px-3 sm:px-4 py-2 rounded-full flex items-center gap-1 sm:gap-2 font-bold hover:bg-brand-light-gold transition-colors duration-300 text-xs sm:text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-brand-dark focus-visible:ring-brand-gold whitespace-nowrap"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
              >
                <span className="hidden xs:inline sm:inline">Operator Tools</span>
                <span className="xs:hidden sm:hidden">Tools</span>
                <ChevronDownIcon className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 sm:right-0 left-0 sm:left-auto mt-2 w-full sm:w-64 max-w-xs sm:max-w-none bg-brand-dark/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-xl z-50 overflow-hidden animate-fade-in-down">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="https://divine-law-healing-diagnostic-759385455270.us-west1.run.app" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                        <CheckCircleIcon /> Diagnostic Checkup
                    </a>
                    <button onClick={() => { onOpenTreatmentOutline(); setIsDropdownOpen(false); }} className={dropdownItemStyle} role="menuitem">
                        <DocumentTextIcon /> Treatment Outline
                    </button>
                    <button onClick={() => { onOpenSswosProcess(); setIsDropdownOpen(false); }} className={dropdownItemStyle} role="menuitem">
                        <ClipboardListIcon /> The SSWOS Process
                    </button>
                    <button onClick={() => { onOpenHealingMeditation(); setIsDropdownOpen(false); }} className={dropdownItemStyle} role="menuitem">
                        <ShieldCheckIcon /> Daily Healing Meditation
                    </button>
                    <button onClick={() => { onOpenCipherModal(); setIsDropdownOpen(false); }} className={dropdownItemStyle} role="menuitem">
                        <KeyIcon /> 777 CIPHER
                    </button>
                    <a href="https://v4-of-master-copy-of-with-scan-biological-code-ti-759385455270.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                    </a>
                    <a href="https://copy-of-v4-testnet-malcolm-kingley-super-mentor-a-779946580524.us-west1.run.app" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                        <SparklesIcon /> Bio-Code/Mentor
                    </a>
                    <a href="https://discord.gg/7KBRn63nx7" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                        <CommunityIcon /> Community
                    </a>
                    <a href="https://www.malcolmkingley.com" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)} title="Password: GIVE_777!">
                        <UserIcon /> Malcolm Kingley <span style={{ fontSize: '0.75rem', opacity: 0.7, marginLeft: '0.5rem' }}>Password: GIVE_777!</span>
                    </a>
                     <a href="https://allow-ministries-tithing-app-779946580524.us-west1.run.app/" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                        <HeartIcon /> Tithe
                    </a>
                    <button onClick={() => { onOpenShareModal(); setIsDropdownOpen(false); }} className={dropdownItemStyle} role="menuitem">
                        <ShareIcon /> Share Private Invite
                    </button>
                    <div className="border-t border-gray-700 my-1"></div>
                    <a href="https://www.divineauthoring.com" target="_blank" rel="noopener noreferrer" className={dropdownItemStyle} role="menuitem" onClick={() => setIsDropdownOpen(false)}>
                        <UserIcon /> Private Session
                    </a>
                    <button onClick={() => { onLogout(); setIsDropdownOpen(false); }} className={`${dropdownItemStyle} text-red-400 hover:text-red-300 hover:bg-red-900/20`} role="menuitem">
                        <LogoutIcon /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Portal Switcher */}
      <div className="bg-brand-dark/90 backdrop-blur-sm sticky top-16 z-40 border-b border-black shadow-md">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-start lg:justify-center overflow-x-auto gap-1 pt-1 hide-scrollbar" role="tablist">
                <button
                onClick={() => onPortalSwitch('rawson')}
                className={`${portalButtonBaseStyle} ${activePortal === 'rawson' ? activePortalStyle : inactivePortalStyle}`}
                aria-selected={activePortal === 'rawson'}
                role="tab"
                >
                F.L. Rawson Teachings
                </button>
                <button
                onClick={() => onPortalSwitch('eddy')}
                className={`${portalButtonBaseStyle} ${activePortal === 'eddy' ? activePortalStyle : inactivePortalStyle}`}
                aria-selected={activePortal === 'eddy'}
                role="tab"
                >
                M.B. Eddy Archives
                </button>
                <button
                onClick={() => onPortalSwitch('bible')}
                className={`${portalButtonBaseStyle} ${activePortal === 'bible' ? activePortalStyle : inactivePortalStyle}`}
                aria-selected={activePortal === 'bible'}
                role="tab"
                >
                Bible Study
                </button>
                <button
                onClick={() => onPortalSwitch('treatment')}
                className={`${portalButtonBaseStyle} ${activePortal === 'treatment' ? activePortalStyle : inactivePortalStyle}`}
                aria-selected={activePortal === 'treatment'}
                role="tab"
                >
                Treatment
                </button>
                <button
                onClick={() => onPortalSwitch('advanced-treatment')}
                className={`${portalButtonBaseStyle} ${activePortal === 'advanced-treatment' ? activePortalStyle : inactivePortalStyle}`}
                aria-selected={activePortal === 'advanced-treatment'}
                role="tab"
                >
                Advanced Treatment
                </button>
                <a
                href="https://www.gethealing.org"
                target="_blank"
                rel="noopener noreferrer"
                className={`${portalButtonBaseStyle} ${inactivePortalStyle}`}
                role="tab"
                >
                Quantum Shift Journal
                </a>
                <button
                onClick={onOpenSlaughterhouse}
                className={`${portalButtonBaseStyle} ${inactivePortalStyle}`}
                role="tab"
                >
                Slaughterhouse
                </button>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 6px rgba(217, 164, 67, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 14px rgba(217, 164, 67, 0.8));
          }
        }
        .logo-glow {
          animation: glow 5s ease-in-out infinite;
        }
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.2s ease-out forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
}

export default Header;