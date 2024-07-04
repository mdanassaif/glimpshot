// Reels.tsx

'use client';

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
  const [isLoading, setIsLoading] = useState(true); // State to manage loading visibility
  const router = useRouter();

  const handlePlay = useCallback((videoElement: HTMLVideoElement) => {
    if (activeVideo && activeVideo !== videoElement) {
      activeVideo.pause(); // Pause the currently active video
    }
    setActiveVideo(videoElement);

    // Check if videoElement is paused or not before attempting to play
    if (videoElement.paused) {
      const playPromise = videoElement.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
          })
          .catch((error) => {
            // Handle error scenario
          });
      }
    }
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

  const smoothScroll = (deltaY: number) => {
    const container = containerRef.current;
    if (container) {
      let start = container.scrollTop;
      let end = start + deltaY;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const scrollPosition = start + (end - start) * Math.min(progress / 300, 1);
        container.scrollTop = scrollPosition;
        if (progress < 300) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
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
          smoothScroll(window.innerHeight);
          setCanScroll(false);
          setTimeout(() => setCanScroll(true), 1000);
        } else if (touchDiff < -50 && canScroll) {
          smoothScroll(-window.innerHeight);
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
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false); // Set loading state to false after 4 seconds (adjust as needed)
    }, 4500);
  }, []);

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
    <div className="relative h-screen bg-[#233d40]">
      {isLoading && (
        <div className="loader-container absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center  z-50">
          <div className="animation">
            <span  ></span>
            <span  ></span>
            <span  ></span>
            <span  ></span>
            <span  ></span>
          </div>
        </div>
      )}

      {!isLoading && (
        <div ref={containerRef} className="snap-y snap-mandatory overflow-scroll h-screen">
          {showWelcomePage && <WelcomeMessage onStart={handleWelcomeButtonClick} />}

          {!showWelcomePage &&
            videos.map((video, index) => (
              <div key={index} className="snap-center h-screen flex justify-center items-center">
                <div className="w-full h-full lg:w-2/3 lg:max-w-lg lg:max-h-lg relative overflow-hidden">
                  <VideoCard {...video} isActive={index === activeIndex} onPlay={handlePlay} videoId={video.id} />
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Reels;
