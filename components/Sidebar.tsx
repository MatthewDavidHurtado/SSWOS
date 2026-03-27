
import React from 'react';
import Playlist from './Playlist';
import { Video } from '../types';

interface SidebarProps {
    videos: Video[];
    currentVideo: Video;
    onSelectVideo: (video: Video) => void;
}

function Sidebar({ videos, currentVideo, onSelectVideo }: SidebarProps) {
    return (
        <aside className="bg-brand-dark/50 backdrop-blur-sm rounded-lg border border-gray-800 sticky top-28 flex flex-col max-h-[calc(100vh-8rem)]">
            <div className="border-b border-gray-600 flex-shrink-0 p-4">
                <h3 className="text-center font-serif font-bold text-brand-gold text-lg" id="course-syllabus-heading">
                    Course Syllabus
                </h3>
            </div>
            <div className="flex-grow p-4 overflow-y-auto" role="region" aria-labelledby="course-syllabus-heading">
                <Playlist
                    videos={videos}
                    currentVideo={currentVideo}
                    onSelectVideo={onSelectVideo}
                />
            </div>
        </aside>
    );
}

export default Sidebar;
