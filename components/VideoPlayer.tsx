import React from 'react';
import { Video } from '../types';

interface VideoPlayerProps {
  video: Video | null;
}

function buildVimeoSrc(idWithHash: string) {
  // Accepts either "123456789" or "123456789?h=abcdef"
  const [id, rest] = idWithHash.split("?");
  const url = new URL(`https://player.vimeo.com/video/${id}`);

  // Preserve the hash if you passed one
  if (rest) {
    for (const [k, v] of new URLSearchParams(rest)) {
      url.searchParams.set(k, v);
    }
  }

  // Helpful defaults for dev/previews
  url.searchParams.set("autoplay", "1");
  url.searchParams.set("muted", "1");         // mobile autoplay policies
  url.searchParams.set("playsinline", "1");   // iOS inline playback
  url.searchParams.set("badge", "0");
  url.searchParams.set("autopause", "0");
  url.searchParams.set("player_id", "0");
  url.searchParams.set("app_id", "58479");
  url.searchParams.set("dnt", "1");           // fewer tracking/cookie headaches

  return url.toString();
}

export default function VideoPlayer({ video }: VideoPlayerProps) {
  if (!video) {
    return (
      <div className="aspect-w-16 aspect-h-9 w-full bg-gray-900 flex items-center justify-center rounded-lg">
        <p className="text-gray-400">Select a video to begin.</p>
      </div>
    );
  }

  let videoSrc = "";
  if (video.platform === "youtube") {
    videoSrc = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&mute=1&playsinline=1`;
  } else if (video.platform === "vimeo") {
    videoSrc = buildVimeoSrc(video.videoId);
  }

  return (
    <div className="bg-black rounded-lg overflow-hidden">
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSrc}
          title={video.title}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="origin"
          allowFullScreen
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold font-serif text-brand-gold">
          {video.title}
        </h3>
        <p className="mt-2 text-gray-300">{video.description}</p>
      </div>
    </div>
  );
}