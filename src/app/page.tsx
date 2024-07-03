'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import VideoCard from '../components/VideoCard';
import { videos as initialVideos } from '../videoData';
import { throttle } from 'lodash';
import { useRouter } from 'next/navigation';

const getRandomIndex = (max: number) => Math.floor(Math.random() * max);

const Reels: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videos, setVideos] = useState(initialVideos); 
  const [activeIndex, setActiveIndex] = useState(getRandomIndex(initialVideos.length));
  const [activeVideo, setActiveVideo] = useState<HTMLVideoElement | null>(null);
  const [canScroll, setCanScroll] = useState(true);
  const [showWelcomePage, setShowWelcomePage] = useState(true); 
  const router = useRouter();

  const handlePlay = useCallback((videoElement: HTMLVideoElement) => {
    if (activeVideo && activeVideo !== videoElement) {
      activeVideo.pause();
    }
    setActiveVideo(videoElement);
  }, [activeVideo]);

  const handleScroll = throttle(() => {
    const container = containerRef.current;
    if (container && canScroll) {
      const scrollPosition = container.scrollTop;
      const screenHeight = window.innerHeight;
      const newActiveIndex = Math.round(scrollPosition / screenHeight);

      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 1000);
      }

      if (scrollPosition > 0 && showWelcomePage) {
        setShowWelcomePage(false);
      }

      if (container.scrollHeight - container.clientHeight <= scrollPosition) {
        handleLoadMoreVideos();
      }
    }
  }, 100);

  const handleLoadMoreVideos = () => {
    setVideos(prevVideos => [...prevVideos, ...initialVideos]);
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
  }, [canScroll, showWelcomePage]);

  useEffect(() => {
    if (containerRef.current && !showWelcomePage) {
      containerRef.current.scrollTo({ top: activeIndex * window.innerHeight, behavior: 'smooth' });

      const videosInContainer = containerRef.current.querySelectorAll('video');
      if (videosInContainer.length > 0) {
        const initialVideo = videosInContainer[activeIndex] as HTMLVideoElement;
        handlePlay(initialVideo);
      }
    }
  }, [activeIndex, showWelcomePage, handlePlay]);

  const handleWelcomeButtonClick = () => {
    setShowWelcomePage(false);
  };

  return (
    <div ref={containerRef} className="snap-y snap-mandatory overflow-scroll h-screen">
      {showWelcomePage && <WelcomeMessage onStart={handleWelcomeButtonClick} />}

      {!showWelcomePage && videos.map((video, index) => (
        <div key={index} className="snap-center h-screen flex justify-center items-center">
          <div className="w-full h-full lg:w-2/3 lg:max-w-lg lg:max-h-lg relative overflow-hidden">
            <VideoCard
              {...video}
              isActive={index === activeIndex}
              onPlay={handlePlay}
              videoId={video.id}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reels;
