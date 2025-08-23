import React from 'react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video | null;
}

function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video) {
    return (
      <div className="aspect-w-16 aspect-h-9 w-full bg-gray-900 flex items-center justify-center rounded-lg">
        <p className="text-gray-400">Select a video to begin.</p>
      </div>
    );
  }

  let videoSrc = '';
  if (video.platform === 'youtube') {
    videoSrc = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`;
  } else if (video.platform === 'vimeo') {
    videoSrc = `https://player.vimeo.com/video/${video.videoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`;
  }


  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="relative w-full h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSrc}
          title={video.title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-gold">{video.title}</h3>
        <p className="mt-2 text-gray-300">{video.description}</p>
      </div>
    </div>
  );
}

export default VideoPlayer;