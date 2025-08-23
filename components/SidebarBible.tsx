
import React from 'react';
import BibleSyllabus from './BibleSyllabus';
import { BibleStudyLesson } from '../types';

interface SidebarBibleProps {
    lessons: BibleStudyLesson[];
    currentLesson: BibleStudyLesson;
    onSelectLesson: (lesson: BibleStudyLesson) => void;
}

function SidebarBible({ lessons, currentLesson, onSelectLesson }: SidebarBibleProps) {
    return (
        <aside className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 sticky top-28 flex flex-col max-h-[calc(100vh-8rem)]">
            <div className="border-b border-gray-600 flex-shrink-0 p-4">
                <h3 className="text-center font-serif font-bold text-brand-gold text-lg" id="bible-syllabus-heading">
                    Bible Study Syllabus
                </h3>
            </div>
            <div className="flex-grow p-4 overflow-y-auto" role="region" aria-labelledby="bible-syllabus-heading">
                <BibleSyllabus 
                    lessons={lessons} 
                    currentLesson={currentLesson} 
                    onSelectLesson={onSelectLesson} 
                />
            </div>
        </aside>
    );
}

export default SidebarBible;
