
import React from 'react';
import MbeSyllabus from './MbeSyllabus';
import { MbeChapter } from '../types';

interface SidebarMbeProps {
    chapters: MbeChapter[];
    currentChapter: MbeChapter;
    onSelectChapter: (chapter: MbeChapter) => void;
}

function SidebarMbe({ chapters, currentChapter, onSelectChapter }: SidebarMbeProps) {
    return (
        <aside className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 sticky top-28 flex flex-col max-h-[calc(100vh-8rem)]">
            <div className="border-b border-gray-600 flex-shrink-0 p-4">
                <h3 className="text-center font-serif font-bold text-brand-gold text-lg" id="mbe-syllabus-heading">
                    MBE Syllabus
                </h3>
            </div>
            <div className="flex-grow p-4 overflow-y-auto" role="region" aria-labelledby="mbe-syllabus-heading">
                <MbeSyllabus
                    chapters={chapters}
                    currentChapter={currentChapter}
                    onSelectChapter={onSelectChapter}
                />
            </div>
        </aside>
    );
}

export default SidebarMbe;
