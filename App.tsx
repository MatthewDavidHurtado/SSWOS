
import React, { useState, useCallback, useEffect } from 'react';
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
      
      <Footer />
      {isSlaughterhouseOpen && <SlaughterhouseModal onClose={() => setIsSlaughterhouseOpen(false)} />}
      {isTreatmentOutlineOpen && <TreatmentOutlineModal onClose={() => setIsTreatmentOutlineOpen(false)} />}
      {isCipherModalOpen && <CipherModal onClose={() => setIsCipherModalOpen(false)} />}
      {isShareModalOpen && <ShareModal onClose={() => setIsShareModalOpen(false)} />}
      {isHealingMeditationOpen && <HealingMeditationModal onClose={() => setIsHealingMeditationOpen(false)} />}
      {isSswosProcessOpen && <SswosProcessModal onClose={() => setIsSswosProcessOpen(false)} />}
    </div>
  );
}

export default App;