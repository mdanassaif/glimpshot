'use client'
// VideoCard.tsx
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
  const [progress, setProgress] = useState(0);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPaused(false);
            if (videoRef.current) {
              onPlay(videoRef.current);
            }
          })
          .catch(() => {
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

  useEffect(() => {
    const updateProgress = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    const interval = setInterval(updateProgress, 200);

    return () => clearInterval(interval);
  }, []);

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
        <motion.div
        className="absolute inset-0 flex items-center justify-center"

          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button className="  rounded-full shadow-xl">
            <FaPlayCircle className="text-5xl text-[#dce775]" />
          </button>
        </motion.div>
      )}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src={avatarUrl} width={40} height={40} alt="Avatar" className="rounded-full mr-2 border-4 border-[#dce775]" />
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <p className="text-sm text-gray-300">@{username}</p>
            </div>
          </div>
        </div>
        <div className="h-2 mt-2 relative bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 h-full bg-[#dce775]"
            style={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

