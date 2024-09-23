const plugin = require('tailwindcss/plugin')
import { transform } from 'next/dist/build/swc';
import type { PluginAPI } from 'tailwindcss/types/config';

// Rotate X utilities
const rotateY = plugin(function ({ addUtilities }: PluginAPI) {
  addUtilities({
    '.perspective': {
      perspective: '500px'
    },
    '.rotate-x-20': {
      transform: 'rotateX(20deg)',
    },
    '.rotate-x-30': {
      transform: 'rotateX(30deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg)',
    },
  })
})

const glitchPlugin = plugin(function ({ addUtilities, e }: PluginAPI) {
  addUtilities({
    [`.${e('glitchEffect')}`]: {
      position: 'relative',
      display: 'inline-block',
      '&::before, &::after': {
        content: 'attr(title)',
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        background: 'inherit',
        overflow: 'hidden',
        pointerEvents: 'none',
      },
      '&::before': {
        animation: 'glitchTop 1s linear infinite',
        clipPath: 'polygon(0 0, 100% 0, 100% 33%, 0 33%)',
      },
      '&::after': {
        animation: 'glitchBottom 1.5s linear infinite',
        clipPath: 'polygon(0 67%, 100% 67%, 100% 100%, 0 100%)',
      },
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        glitch: 'glitch 1s linear infinite',
        glitchTop: 'glitchTop 1s linear infinite',
        glitchBottom: 'glitchBottom 1.5s linear infinite',
      },
      fontFamily: {
        modesto: ['modesto-condensed'],
        'modestoExpanded': ['modesto-expanded'],
        indivisible: ['indivisible', 'sans-serif'],
        vinyl: ['var(--font-vinyl)'],
        cascadia: ['var(--font-cascadia)'],
        sandana: ['var(--font-sandana)'],
      },
      colors: {
        black: '#000000',
        yellow: '#F9EA38',
        grey: '#2F2F2F',
        cardGrey: '#9c9c9c',
        whiteText: '#E3E3E3',
      },
      backgroundImage: {
        group: "url('/images/group.jpg')",
        groupMobile: "url('/images/group-mobile.jpg')",
      },
      height: {
        thirdWidth: '30vw',
      },
    },
    screens: {
      desktop: { min: '1050px' },
      handheld: { max: '1050px'},
      mobile: { max: '750px' },
      thin: { max: '340px' },
    },
  },
  plugins: [rotateY, glitchPlugin],
};
