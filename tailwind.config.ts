// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'off-white': '#EAEAEA',
        'markit-orange': '#FF7400',
        'markit-maroon': '#784787',
        'markit-maroon-light': '#9F7AEA',
        'markit-purple': '#5A3D73',
        'glass-bg': 'rgba(255, 255, 255, 0.001)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'anim-line-1': 'rgba(255, 116, 0, 0.25)',
        'anim-line-2': 'rgba(120, 71, 135, 0.20)',
      },
      fontFamily: {
        krona: ['var(--font-krona-one)', 'sans-serif'],
        amiko: ['var(--font-amiko)', 'sans-serif'],
      },
      borderRadius: {
        glass: '24px',
      },
      backgroundImage: {
        noise: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        'simple-flow-1': `repeating-linear-gradient(
          35deg,
          transparent,
          transparent 20px,
          theme('colors.anim-line-1') 20px,
          theme('colors.anim-line-1') 23px
        )`,
        'simple-flow-2': `repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 30px,
          theme('colors.anim-line-2') 30px,
          theme('colors.anim-line-2') 34px
        )`,
      },
      letterSpacing: { 'wide-krona': '0.1em' },
      boxShadow: {
        // ... your existing boxShadow values ...
      },
      transitionTimingFunction: {
        // ... your existing transitionTimingFunction values ...
      },
      animation: {
        pulseSignal: 'pulseSignal 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        flowingLinesA: 'flowingLinesA 20s linear infinite',
        flowingLinesB: 'flowingLinesB 25s linear infinite reverse',
        flowingLinesC: 'flowingLinesC 15s linear infinite',
        flowingLinesD: 'flowingLinesD 18s linear infinite reverse',
        flowingLinesE: 'flowingLinesE 12s linear infinite',
        moveHorizontal: 'moveHorizontal 10s ease-in-out infinite',
        moveVertical: 'moveVertical 10s ease-in-out infinite',
        // Removed old radarPing, added softRadarPing
        softRadarPing: 'softRadarPing 1.5s ease-out infinite', // Shorter, softer
      },
      keyframes: {
        pulseSignal: { /* ... */ },
        bgScroll: { /* ... */ },
        flowingLinesA: { /* ... */ },
        flowingLinesB: { /* ... */ },
        flowingLinesC: { /* ... */ },
        flowingLinesD: { /* ... */ },
        flowingLinesE: { /* ... */ },
        moveHorizontal: {
          '0%': { transform: 'translateX(-100%)', opacity: '0.1' }, // Start slightly visible
          '10%': { opacity: '0.6' }, // More opaque for main travel
          '30%': { opacity: '0.1' },
          '100%': { transform: 'translateX(100%)', opacity: '0.1' }, // End slightly visible
        },
        moveVertical: {
          '0%': { transform: 'translateY(-100%)', opacity: '0.1' },
          '10%': { opacity: '0.6' },
          '30%': { opacity: '0.1' },
          '100%': { transform: 'translateY(100%)', opacity: '0.1' },
        },
        // Removed old radarPing keyframes
        softRadarPing: { // New keyframes for the softer ping
          '0%': {
            transform: 'translate(-50%, -50%) scale(0.05)', // Start very small
            opacity: '0.8', // Start fairly opaque
            borderWidth: '1.5px',
          },
          '60%': { // Expands and starts fading border/opacity
            opacity: '0.3',
            borderWidth: '0.5px',
          },
          '100%': {
            transform: 'translate(-50%, -50%) scale(6)', // Max size, adjust as needed
            opacity: '0',
            borderWidth: '0.25px',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;