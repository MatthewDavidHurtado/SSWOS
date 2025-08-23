
import React, { useState } from 'react';
import Playlist from './Playlist';
import ChatBox from './ChatBox';
import { Video } from '../types';

interface SidebarProps {
    videos: Video[];
    currentVideo: Video;
    onSelectVideo: (video: Video) => void;
}

function Sidebar({ videos, currentVideo, onSelectVideo }: SidebarProps) {
    const [activeTab, setActiveTab] = useState<'playlist' | 'chat'>('playlist');

    const tabBaseStyle = "w-1/2 py-3 text-center font-serif font-bold cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold";
    const activeTabStyle = "text-brand-gold border-b-2 border-brand-gold";
    const inactiveTabStyle = "text-gray-400 hover:text-white border-b-2 border-gray-700";

    return (
        <aside className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 sticky top-28 flex flex-col max-h-[calc(100vh-8rem)]">
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-600 flex-shrink-0" role="tablist">
                <button 
                    onClick={() => setActiveTab('playlist')} 
                    className={`${tabBaseStyle} ${activeTab === 'playlist' ? activeTabStyle : inactiveTabStyle}`}
                    aria-selected={activeTab === 'playlist'}
                    role="tab"
                >
                    Course Syllabus
                </button>
                <button 
                    onClick={() => setActiveTab('chat')} 
                    className={`${tabBaseStyle} ${activeTab === 'chat' ? activeTabStyle : inactiveTabStyle}`}
                    aria-selected={activeTab === 'chat'}
                    role="tab"
                >
                    MK: Your Personal A.I. Butler
                </button>
            </div>

            {/* Tab Content */}
            <div className="flex-grow p-4 overflow-y-auto" role="tabpanel">
                 {activeTab === 'playlist' && (
                    <Playlist 
                        videos={videos} 
                        currentVideo={currentVideo} 
                        onSelectVideo={onSelectVideo} 
                    />
                 )}
                 {activeTab === 'chat' && <ChatBox />}
            </div>
        </aside>
    );
}

export default Sidebar;
