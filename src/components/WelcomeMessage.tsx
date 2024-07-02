'use client'

 
// components/WelcomeMessage.tsx
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeMessage: React.FC<{ onStart: () => void }> = ({ onStart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-blend-luminosity h-screen flex flex-col justify-center items-center bg-gradient-to-b from-yellow-200 to-yellow-50 text-[#e53935]"
    >
      <h1 className="text-6xl md:text-8xl font-bold mb-4">
        <motion.span
          className="animate-wiggle inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: 'easeOut' }}
        >
          G
        </motion.span>
        <motion.span
          className="animate-wiggle-more inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
        >
          l
        </motion.span>
        <motion.span
          className="animate-rotate-y inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5, ease: 'easeOut' }}
        >
          i
        </motion.span>
        <motion.span
          className="animate-rotate-x inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5, ease: 'easeOut' }}
        >
          m
        </motion.span>
        <motion.span
          className="animate-pulse inline-block" // Apply animate-pulse to 'p'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5, ease: 'easeOut' }}
        >
          p
        </motion.span>
       
        <motion.span
          className="animate-spin inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5, ease: 'easeOut' }}
        >
          s
        </motion.span>
        <motion.span
         className="animate-wiggle inline-block" // Apply animate-wiggle to 't'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.5, ease: 'easeOut' }}
        >
          h
        </motion.span>
        <motion.span
         className="animate-spin inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5, ease: 'easeOut' }}
        >
          o
        </motion.span>
        <motion.span
          className="animate-pulse inline-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.1, duration: 0.5, ease: 'easeOut' }}
        >
          t
        </motion.span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.5, ease: 'easeOut' }}
        className="text-sm md:text-xl text-center mb-8 text-[#374e51]"
      >
       32 shorts video will make you giggling.
      </motion.p>
      <motion.button
      whileHover={{ scale: 1.05, rotate: -3 }} // Scale and rotate on hover
      whileTap={{ scale: 0.95 }} // Scale down on tap
      onClick={onStart}
      initial={{ scale: 1 }} // Initial scale when component mounts
      animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0] }} // Animation sequence
      transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 0.5 }} // Repeat animation infinitely
      className="bg-[#a2ebc0] hover:bg-[#65b168d8] text-[#e53835da] hover:text-[#000000d8] font-bold py-3 px-6 rounded-lg shadow-lg"
    >
      Go Watch Glimps
    </motion.button>
    </motion.div>
  );
};

export default WelcomeMessage;
