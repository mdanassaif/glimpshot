'use client'
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { FaPause } from 'react-icons/fa';



interface VideoCardProps {
  videoUrl: string;
  title: string;
  username: string;
  isActive: boolean;
  onPlay: (videoElement: HTMLVideoElement) => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, title, username, isActive, onPlay }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);

  const playVideo = useCallback(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          setIsPaused(false); // Update state when video starts playing
          if (videoRef.current) {
            onPlay(videoRef.current); // Notify parent component that video is playing
          }
        })
        .catch(error => {
          console.log('Error playing video:', error); // Log any errors that occur during playback
          setIsPaused(true); // Ensure state reflects paused state on error
        });
      }
    }
  }, [onPlay]);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.currentTime = 0;  // Reset to the beginning
      playVideo(); // Attempt to play on mount
    } else if (videoRef.current) {
      videoRef.current.pause(); // Pause video if isActive is false
    }
  }, [isActive, playVideo]);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        playVideo(); // Play video if paused
      } else {
        videoRef.current.pause(); // Pause video if playing
        setIsPaused(true); // Update state to indicate video is paused
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
          <FaPause/>
          </button>
        </div>
      )}
      <div className="absolute bottom-0 left-0 p-4 text-white w-full bg-gradient-to-t from-black to-transparent">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-md">@{username}</p>
      </div>
    </div>
  );
};

export default VideoCard;
