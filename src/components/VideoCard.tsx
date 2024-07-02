'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaPause } from 'react-icons/fa';
import Image from 'next/image';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  username: string;
  avatarUrl: string;
  isActive: boolean;
  onPlay: (videoElement: HTMLVideoElement) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, username, avatarUrl, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPaused(false);
          if (videoRef.current) {
            onPlay(videoRef.current);
          }
        })
        .catch(error => {
          setIsPaused(true);
        });
      }
    }
  }, [onPlay]);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;
      playVideo();
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive, playVideo]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        playVideo();
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <button className="bg-white rounded-full p-2">
            <FaPause />
          </button>
        </div>
      )}
      <div className="absolute bottom-0 left-0 p-4 text-white w-full bg-gradient-to-t from-black to-transparent">
        <div className="flex items-center mb-2">
          <Image src={avatarUrl} width={24} height={24} alt="Avatar" className="rounded-full mr-2" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <p className="text-sm">@{username}</p>
      </div>
    </div>
  );
};

export default VideoCard;
