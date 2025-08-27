
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { Video, MbeChapter, BibleStudyLesson } from './types';
import { COURSE_VIDEOS } from './constants';
import { MBE_CHAPTERS } from './constants_mbe';
import { BIBLE_STUDY_LESSONS } from './constants_bible';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import PdfViewer from './components/PdfViewer';
import Sidebar from './components/Sidebar';
import SidebarMbe from './components/SidebarMbe';
import SidebarBible from './components/SidebarBible';
import Footer from './components/Footer';
import LoginScreen from './components/LoginScreen';
import PasswordProtection from './components/PasswordProtection';
import TreatmentView from './components/TreatmentView';
import AdvancedTreatmentView from './components/AdvancedTreatmentView';
import SlaughterhouseModal from './components/SlaughterhouseModal';
import TreatmentOutlineModal from './components/TreatmentOutlineModal';
import CipherModal from './components/CipherModal';
import ShareModal from './components/ShareModal';
import HealingMeditationModal from './components/HealingMeditationModal';
import SswosProcessModal from './components/SswosProcessModal';
import QuickStartModal from './components/QuickStartModal';
import LiveTrainingModal from './components/LiveTrainingModal';

type Portal = 'rawson' | 'eddy' | 'bible' | 'treatment' | 'advanced-treatment';

function App() {
  const [hasAccess, setHasAccess] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePortal, setActivePortal] = useState<Portal>('rawson');
  const [isSlaughterhouseOpen, setIsSlaughterhouseOpen] = useState(false);
  const [isTreatmentOutlineOpen, setIsTreatmentOutlineOpen] = useState(false);
  const [isCipherModalOpen, setIsCipherModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isHealingMeditationOpen, setIsHealingMeditationOpen] = useState(false);
  const [isSswosProcessOpen, setIsSswosProcessOpen] = useState(false);
  const [isLiveTrainingOpen, setIsLiveTrainingOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // State for Rawson portal
  const [currentVideo, setCurrentVideo] = useState<Video>(COURSE_VIDEOS[0]);
  
  // State for Eddy portal
  const [currentChapter, setCurrentChapter] = useState<MbeChapter>(MBE_CHAPTERS[0]);

  // State for Bible portal
  const [currentLesson, setCurrentLesson] = useState<BibleStudyLesson>(BIBLE_STUDY_LESSONS[0]);

  const handleLogout = useCallback(() => {
    // Clear all stored authentication data
    localStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('siteAccess');
    
    // Reset authentication states
    setIsAuthenticated(false);
    setHasAccess(false);
  }, []);

  useEffect(() => {
    // Check for site access first
    const siteAccess = sessionStorage.getItem('siteAccess');
    if (siteAccess === 'granted') {
      setHasAccess(true);
    }

    // Check for a saved session when the app loads
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSelectVideo = useCallback((video: Video) => {
    setCurrentVideo(video);
  }, []);
  
  const handleSelectChapter = useCallback((chapter: MbeChapter) => {
    setCurrentChapter(chapter);
  }, []);

  const handleSelectLesson = useCallback((lesson: BibleStudyLesson) => {
    setCurrentLesson(lesson);
  }, []);

  const handlePasswordCorrect = useCallback(() => {
    setHasAccess(true);
  }, []);
  const handleLoginSuccess = useCallback((stayLoggedIn: boolean) => {
    setIsAuthenticated(true);
    if (stayLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true');
    }
  }, []);
  
  const handlePortalSwitch = useCallback((portal: Portal) => {
    setActivePortal(portal);
  }, []);

  if (!hasAccess) {
    return <PasswordProtection onPasswordCorrect={handlePasswordCorrect} />;
  }
  if (!isAuthenticated) {
    return <LoginScreen onLoginSuccess={handleLoginSuccess} />;
  }
  
  const isFullWidthView = activePortal === 'treatment' || activePortal === 'advanced-treatment';

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <Header 
        activePortal={activePortal} 
        onPortalSwitch={handlePortalSwitch} 
        onOpenLiveTraining={() => setIsLiveTrainingOpen(true)}
        onOpenSlaughterhouse={() => setIsSlaughterhouseOpen(true)}
        onOpenTreatmentOutline={() => setIsTreatmentOutlineOpen(true)}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        onOpenCipherModal={() => setIsCipherModalOpen(true)}
        onOpenHealingMeditation={() => setIsHealingMeditationOpen(true)}
        onOpenSswosProcess={() => setIsSswosProcessOpen(true)}
        onLogout={handleLogout}
      />
      <main className="flex-grow p-4 sm:p-6 lg:p-8 max-w-screen-2xl mx-auto w-full">
        {isFullWidthView ? (
          <>
            {activePortal === 'treatment' && <TreatmentView />}
            {activePortal === 'advanced-treatment' && <AdvancedTreatmentView />}
          </>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Main Content Area */}
            <div className="lg:col-span-2 xl:col-span-3">
              {activePortal === 'rawson' && <VideoPlayer video={currentVideo} />}
              {activePortal === 'eddy' && (
                <PdfViewer 
                  item={currentChapter}
                  headerDescription={
                    <>
                      <span className="font-bold text-brand-light-gold">Daily Task:</span> Read 10 pages from the text. Use the dedicated "MBE A.I. Assistant" to deepen your understanding and overcome any obstacles in your study.
                    </>
                  }
                />
              )}
              {activePortal === 'bible' && (
                <PdfViewer
                  item={currentLesson}
                  headerDescription="Select a lesson from the syllabus to begin your study."
                />
              )}
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-1 xl:col-span-1">
               {activePortal === 'rawson' && (
                  <Sidebar
                    videos={COURSE_VIDEOS}
                    currentVideo={currentVideo}
                    onSelectVideo={handleSelectVideo}
                  />
               )}
               {activePortal === 'eddy' && (
                  <SidebarMbe
                    chapters={MBE_CHAPTERS}
                    currentChapter={currentChapter}
                    onSelectChapter={handleSelectChapter}
                  />
               )}
               {activePortal === 'bible' && (
                  <SidebarBible
                    lessons={BIBLE_STUDY_LESSONS}
                    currentLesson={currentLesson}
                    onSelectLesson={handleSelectLesson}
                  />
               )}
            </div>
          </div>
        )}
      </main>
      
      {/* Test Me In This Section */}
      <section className="py-8 sm:py-10 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-6 tracking-wider">
            "TEST ME IN THIS..."
          </h2>
          
          <blockquote className="mb-8 max-w-3xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 italic leading-relaxed mb-4">
              "Bring the whole tithe into the storehouse, that there may be food in My house. Test Me in this," says the Lord of hosts, "and see if I will not throw open the floodgates of heaven and pour out so much blessing that there will not be room enough to store it."
            </p>
            <cite className="block not-italic text-sm sm:text-base text-gray-500">
              — Malachi 3:10
            </cite>
          </blockquote>
          
          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-2xl border-2 border-brand-gold/20">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full object-cover"
                controls
                preload="metadata"
                poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3C/svg%3E"
                onPlay={() => setIsVideoPlaying(true)}
                onPause={() => setIsVideoPlaying(false)}
                onEnded={() => setIsVideoPlaying(false)}
              >
                <source src="https://healvideos.s3.us-east-2.amazonaws.com/permanent_overflow_is_yours_already_-_claim_it.+(720p).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay text that appears before video plays */}
              {!isVideoPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center space-y-2 opacity-70">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/80" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-white/90 font-serif text-lg sm:text-xl font-medium tracking-wide">
                    Press Play: Tithing Masterclass
                  </p>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      {isSlaughterhouseOpen && <SlaughterhouseModal onClose={() => setIsSlaughterhouseOpen(false)} />}
      {isTreatmentOutlineOpen && <TreatmentOutlineModal onClose={() => setIsTreatmentOutlineOpen(false)} />}
      {isCipherModalOpen && <CipherModal onClose={() => setIsCipherModalOpen(false)} />}
      {isShareModalOpen && <ShareModal onClose={() => setIsShareModalOpen(false)} />}
      {isHealingMeditationOpen && <HealingMeditationModal onClose={() => setIsHealingMeditationOpen(false)} />}
      {isSswosProcessOpen && <SswosProcessModal onClose={() => setIsSswosProcessOpen(false)} />}
      {isLiveTrainingOpen && <LiveTrainingModal onClose={() => setIsLiveTrainingOpen(false)} />}
    </div>
  );
}

export default App;