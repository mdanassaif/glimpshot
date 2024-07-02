'use client'

import React, { useRef, useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';

const videos = [
  { videoUrl: 'video1.mp4', title: 'When dragons are never caged', username: 'HouseOFDragon' },
  { videoUrl: 'video2.mp4', title: 'Aage kya Karna hai ?', username: ' KotaFactory' },
  { videoUrl: 'video3.mp4', title: 'Cheezo ke peeche kyo bhagte ho?', username: 'KhushRahaKar' },
  { videoUrl: 'video4.mp4', title: 'I found My bestie childhood video', username: 'childhoodmemory' },
  { videoUrl: 'video5.mp4', title: 'Mah Mah Mah ', username: 'aajkalkebache' },
  { videoUrl: 'video6.mp4', title: 'Mote hai to kya, artist hai', username: 'bodyartist' },
];

const Reels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<HTMLVideoElement | null>(null);
  const [canScroll, setCanScroll] = useState(true); // State to control scrolling

  const handlePlay = (videoElement: HTMLVideoElement) => {
    if (activeVideo && activeVideo !== videoElement) {
      activeVideo.pause();
    }
    setActiveVideo(videoElement);
  };

  const handleScroll = () => {
    const container = containerRef.current;
    if (container && canScroll) {
      const scrollPosition = container.scrollTop;
      const screenHeight = window.innerHeight;
      const newActiveIndex = Math.round(scrollPosition / screenHeight);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        setCanScroll(false); // Disable scrolling until video is fully scrolled out
        setTimeout(() => setCanScroll(true)); // Re-enable scrolling after 1 second
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

        if (touchDiff > 50 && canScroll) {
          // Scroll up
          container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          setCanScroll(false);
          setTimeout(() => setCanScroll(true), 1000); // Re-enable scrolling after 1 second
        } else if (touchDiff < -50 && canScroll) {
          // Scroll down
          container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
          setCanScroll(false);
          setTimeout(() => setCanScroll(true), 1000); // Re-enable scrolling after 1 second
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
  }, [activeIndex, canScroll]);

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

export default Reels;
