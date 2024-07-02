'use client'

import React, { useRef, useEffect, useState } from 'react';
import { FaHeart, FaCommentDots, FaPause } from 'react-icons/fa';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  username: string;
  isActive: boolean;
  onPlay: (videoElement: HTMLVideoElement) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, username, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;  // Reset to the beginning
      videoRef.current.play();
      setIsPaused(false);
      onPlay(videoRef.current);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive, onPlay]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPaused(false);
        onPlay(videoRef.current);
      } else {
        videoRef.current.pause();
        setIsPaused(true);
      }
    }
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black cursor-pointer" onClick={handlePlayPause}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl}
        loop
        playsInline
        
        controls={false}
      />
      {isPaused && (
        <FaPause className="absolute text-white text-4xl" />
      )}
      <div className="absolute bottom-0 left-0 p-4 text-white w-full bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md">@{username}</p>
      </div>
      <div className="absolute right-4 bottom-1/4 flex flex-col items-center space-y-4 text-white">
        <button className="flex flex-col items-center">
          <FaHeart className="text-2xl" />
          <span className="text-sm">123</span>
        </button>
        <button className="flex flex-col items-center">
          <FaCommentDots className="text-2xl" />
          <span className="text-sm">45</span>
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
