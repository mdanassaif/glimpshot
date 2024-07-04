// VideoCard.tsx

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FaPlayCircle, FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface VideoCardProps {
  videoUrl: string;
  title: string;
  username: string;
  avatarUrl: string;
  isActive: boolean;
  onPlay: (videoElement: HTMLVideoElement) => void;
  videoId: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  videoUrl,
  title,
  username,
  avatarUrl,
  isActive,
  onPlay,
  videoId,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPaused, setIsPaused] = useState(true);
  const [progress, setProgress] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const router = useRouter();

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

  const handleLike = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent div
    try {
      if (!liked && !disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setLiked(true);

        // Example: Store like in MongoDB
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId, action: 'like' }), // Use videoId prop
        });

        if (!response.ok) {
          throw new Error('Failed to store like');
        }
      } else if (liked) {
        setLikes((prevLikes) => prevLikes - 1);
        setLiked(false);
      } else if (disliked) {
        setLikes((prevLikes) => prevLikes + 1);
        setDislikes((prevDislikes) => prevDislikes - 1);
        setLiked(true);
        setDisliked(false);

        // Example: Update like in MongoDB
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId, action: 'like' }), // Use videoId prop
        });

        if (!response.ok) {
          throw new Error('Failed to update like');
        }
      }
    } catch (error) {
      console.error('Error handling like:', error);
      // Handle error scenario
    }
  };

  const handleDislike = async (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the parent div
    try {
      if (!liked && !disliked) {
        setDislikes((prevDislikes) => prevDislikes + 1);
        setDisliked(true);

        // Example: Store dislike in MongoDB
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId, action: 'dislike' }), // Use videoId prop
        });

        if (!response.ok) {
          throw new Error('Failed to store dislike');
        }
      } else if (disliked) {
        setDislikes((prevDislikes) => prevDislikes - 1);
        setDisliked(false);
      } else if (liked) {
        setDislikes((prevDislikes) => prevDislikes + 1);
        setLikes((prevLikes) => prevLikes - 1);
        setDisliked(true);
        setLiked(false);

        // Example: Update dislike in MongoDB
        const response = await fetch('/api/likes', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ videoId, action: 'dislike' }), // Use videoId prop
        });

        if (!response.ok) {
          throw new Error('Failed to update dislike');
        }
      }
    } catch (error) {
      console.error('Error handling dislike:', error);
      // Handle error scenario
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      playVideo();
    }
  };

  useEffect(() => {
    // Fetch initial likes and dislikes from MongoDB or API
    const fetchLikesAndDislikes = async () => {
      try {
        const response = await fetch(`/api/likes?videoId=${videoId}`);
        if (response.ok) {
          const { likes: initialLikes, dislikes: initialDislikes } = await response.json();
          setLikes(initialLikes);
          setDislikes(initialDislikes);
        } else {
          throw new Error('Failed to fetch likes and dislikes');
        }
      } catch (error) {
        console.error('Error fetching likes and dislikes:', error);
        // Handle error scenario
      }
    };

    fetchLikesAndDislikes();
  }, [videoId]);

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
      if (videoRef.current && videoRef.current.duration) {
        const currentTime = videoRef.current.currentTime;
        const duration = videoRef.current.duration;
        const calculatedProgress = (currentTime / duration) * 100;

        if (!isNaN(calculatedProgress)) {
          setProgress(calculatedProgress);
        }
      }
    };

    const interval = setInterval(updateProgress, 200);

    return () => clearInterval(interval);
  }, [videoRef.current?.currentTime, videoRef.current?.duration]);

  return (
    <div className="relative w-full h-full flex justify-center items-center bg-black cursor-pointer" onClick={handlePlayPause}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src={videoUrl}
        controls={false}
        loop={false}
        playsInline
        onEnded={handleVideoEnded} // Handle video ended event
      />

      {isPaused && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <button onClick={handlePlayPause} className="rounded-full shadow-xl">
            <FaPlayCircle className="text-5xl text-[#dce775]" />
          </button>
        </motion.div>
      )}

      <div className="absolute top-1/2 right-0 mr-3 transform -translate-y-1/2 flex flex-col items-center space-y-2">
        <button
          onClick={handleLike}
          className={`rounded-full p-2 ${liked ? 'bg-[#dce775]' : 'bg-gray-800 bg-opacity-70'} hover:bg-gray-200 transition duration-300 ease-in-out`}
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          <FaThumbsUp
            className={`text-2xl ${liked ? 'text-black' : 'text-white'} `}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.7)',
            }}
          />
        </button>
        <span className="text-[#d2d2d2] w-6 h-6 text-center rounded-xl" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.497)' }}>{likes}</span>
        <button
          onClick={handleDislike}
          className={`rounded-full p-2 ${disliked ? 'bg-[#dce775]' : 'bg-gray-800 bg-opacity-70'} hover:bg-gray-200 transition duration-300 ease-in-out`}
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
        >
          <FaThumbsDown
            className={`text-2xl ${disliked ? 'text-black' : 'text-white'} `}
            style={{
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5), -1px -1px 2px rgba(255, 255, 255, 0.7)',
            }}
          />
        </button>
        <span className="text-[#d2d2d2] w-6 h-6 text-center rounded-xl" style={{ boxShadow: '0 4px 6px rgba(255, 255, 255, 0.497)' }}>{dislikes}</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-[#000000] to-transparent">
        <div className="flex items-center space-x-2">
          <Image
            src={avatarUrl}
            alt="User Avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-white font-bold">{username}</p>
            <p className="text-white text-sm">{title}</p>
          </div>
        </div>
        <div className="h-1 bg-gray-800 mt-2 relative w-full">
          <div
            className="h-1 bg-[#dce775]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
