'use client'

import React, { useRef, useEffect, useState } from 'react';
import VideoCard from '../components/VideoCard';
import { videos } from '../videoData';
import { debounce } from 'lodash';

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

const Reels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(getRandomIndex(videos.length));
  const [activeVideo, setActiveVideo] = useState<HTMLVideoElement | null>(null);
  const [canScroll, setCanScroll] = useState(true);

  const handlePlay = (videoElement: HTMLVideoElement) => {
    if (activeVideo && activeVideo !== videoElement) {
      activeVideo.pause();
    }
    setActiveVideo(videoElement);
  };

  const handleScroll = debounce(() => {
    const container = containerRef.current;
    if (container && canScroll) {
      const scrollPosition = container.scrollTop;
      const screenHeight = window.innerHeight;
      const newActiveIndex = Math.round(scrollPosition / screenHeight);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), );
      }
    }
  }, 100);

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
          container.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
          setCanScroll(false);
          setTimeout(() => setCanScroll(true), 1000);
        } else if (touchDiff < -50 && canScroll) {
          container.scrollBy({ top: -window.innerHeight, behavior: 'smooth' });
          setCanScroll(false);
          setTimeout(() => setCanScroll(true), 1000);
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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: activeIndex * window.innerHeight, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <div ref={containerRef} className="snap-y snap-mandatory overflow-scroll h-screen">
      {videos.map((video, index) => (
        <div key={index} className="snap-center h-screen flex justify-center items-center">
          <div className="w-full h-full lg:w-2/3 lg:max-w-lg lg:max-h-lg relative overflow-hidden">
            <VideoCard {...video} isActive={index === activeIndex} onPlay={handlePlay} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
