
import React, { useState } from 'react';
import MbeSyllabus from './MbeSyllabus';
import ChatBoxMbe from './ChatBoxMbe';
import { MbeChapter } from '../types';

interface SidebarMbeProps {
    chapters: MbeChapter[];
    currentChapter: MbeChapter;
    onSelectChapter: (chapter: MbeChapter) => void;
}

function SidebarMbe({ chapters, currentChapter, onSelectChapter }: SidebarMbeProps) {
    const [activeTab, setActiveTab] = useState<'syllabus' | 'chat'>('syllabus');

    const tabBaseStyle = "w-1/2 py-3 text-center font-serif font-bold cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold";
    const activeTabStyle = "text-brand-gold border-b-2 border-brand-gold";
    const inactiveTabStyle = "text-gray-400 hover:text-white border-b-2 border-gray-700";

    return (
        <aside className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 sticky top-28 flex flex-col max-h-[calc(100vh-8rem)]">
            {/* Tab Buttons */}
            <div className="flex border-b border-gray-600 flex-shrink-0" role="tablist">
                <button 
                    onClick={() => setActiveTab('syllabus')} 
                    className={`${tabBaseStyle} ${activeTab === 'syllabus' ? activeTabStyle : inactiveTabStyle}`}
                    aria-selected={activeTab === 'syllabus'}
                    role="tab"
                >
                    MBE Syllabus
                </button>
                <button 
                    onClick={() => setActiveTab('chat')} 
                    className={`${tabBaseStyle} ${activeTab === 'chat' ? activeTabStyle : inactiveTabStyle}`}
                    aria-selected={activeTab === 'chat'}
                    role="tab"
                >
                    MBE A.I. Assistant
                </button>
            </div>

            {/* Tab Content */}
            <div className="flex-grow p-4 overflow-y-auto" role="tabpanel">
                 {activeTab === 'syllabus' && (
                    <MbeSyllabus
                        chapters={chapters} 
                        currentChapter={currentChapter} 
                        onSelectChapter={onSelectChapter} 
                    />
                 )}
                 {activeTab === 'chat' && <ChatBoxMbe />}
            </div>
        </aside>
    );
}

export default SidebarMbe;
