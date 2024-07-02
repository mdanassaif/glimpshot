// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        // Animations
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-more': 'wiggle-more 1s ease-in-out infinite',
        'rotate-y': 'rotate-y 1s ease-in-out infinite',
        'rotate-x': 'rotate-x 1s ease-in-out infinite',
        jump: 'jump 1s ease-in-out infinite',
        'jump-in': 'jump-in 1s ease-in-out infinite',
        'jump-out': 'jump-out 1s ease-in-out infinite',
        spin: 'spin 1s linear infinite',
        ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounce: 'bounce 1s infinite',
        shake: 'shake 1s cubic-bezier(.36,.07,.19,.97) infinite',

        // Transitions
        fade: 'fade 0.5s ease',
        'fade-down': 'fade-down 0.5s ease',
        'fade-up': 'fade-up 0.5s ease',
        'fade-left': 'fade-left 0.5s ease',
        'fade-right': 'fade-right 0.5s ease',
        'flip-up': 'flip-up 0.5s ease',
        'flip-down': 'flip-down 0.5s ease',
      },
      keyframes: {
        // Keyframes for custom animations
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'wiggle-more': {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        'rotate-y': {
          '0%, 100%': { transform: 'rotateY(-180deg)' },
          '50%': { transform: 'rotateY(0)' },
        },
        'rotate-x': {
          '0%, 100%': { transform: 'rotateX(-180deg)' },
          '50%': { transform: 'rotateX(0)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'jump-in': {
          '0%, 50%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '75%': { transform: 'scale(0.9)' },
        },
        'jump-out': {
          '0%, 50%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.9)' },
          '75%': { transform: 'scale(1.1)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        pulse: {
          '50%': { opacity: "0.5" },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-10px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(10px)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'flip-up': {
          '0%': { transform: 'perspective(400px) rotateX(90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateX(0)', opacity: '1' },
        },
        'flip-down': {
          '0%': { transform: 'perspective(400px) rotateX(-90deg)', opacity: '0' },
          '100%': { transform: 'perspective(400px) rotateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
