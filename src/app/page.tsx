'use client'

// pages/reels.tsx

import React, { useRef, useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

const videos = [
  { videoUrl: 'video1.mp4', title: 'Amazing Nature', username: 'user1' },
  { videoUrl: 'video2.mp4', title: 'City Life', username: 'user2' },
  { videoUrl: 'video3.mp4', title: 'Amazing Nature', username: 'user1' },
  { videoUrl: 'video4.mp4', title: 'City Life', username: 'user2' },
  { videoUrl: 'video5.mp4', title: 'Amazing Nature', username: 'user1' },
  { videoUrl: 'video6.mp4', title: 'City Life', username: 'user2' },
  // Add more video objects here
];

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<HTMLVideoElement | null>(null);

  const handlePlay = (videoElement: HTMLVideoElement) => {
    if (activeVideo && activeVideo !== videoElement) {
      activeVideo.pause();
    }
    setActiveVideo(videoElement);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = container.scrollTop;
      const screenHeight = window.innerHeight;
      const newActiveIndex = Math.round(scrollPosition / screenHeight);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);

      let touchStartY = 0;

      const handleTouchStart = (e: TouchEvent) => {
        touchStartY = e.touches[0].clientY;
      };

      const handleTouchMove = (e: TouchEvent) => {
        if (!touchStartY) return;

        const touchEndY = e.touches[0].clientY;
        const touchDiff = touchStartY - touchEndY;

        if (touchDiff > 50) {
          // Scroll up
          container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        } else if (touchDiff < -50) {
          // Scroll down
          container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
        }

        touchStartY = 0;
      };

      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchmove', handleTouchMove);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="snap-y snap-mandatory overflow-scroll h-screen">
      {videos.map((video, index) => (
        <div key={index} className="snap-center h-screen flex justify-center items-center">
          <div className="w-full h-full lg:w-2/3 lg:h-2/3 lg:max-w-lg lg:max-h-lg flex justify-center items-center">
            <VideoCard {...video} isActive={index === activeIndex} onPlay={handlePlay} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
