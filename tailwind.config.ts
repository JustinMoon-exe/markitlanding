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
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        // More visible line colors for initial topo animation debugging
        'anim-line-1': 'rgba(255, 116, 0, 0.25)', // Brighter Orange
        'anim-line-2': 'rgba(120, 71, 135, 0.20)', // Brighter Maroon
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
        // Simpler, more reliable repeating linear gradients for flowing lines
        'simple-flow-1': `repeating-linear-gradient(
          35deg,
          transparent,
          transparent 20px,
          theme('colors.anim-line-1') 20px,
          theme('colors.anim-line-1') 23px 
        )`, // Thinner lines, adjust as needed
        'simple-flow-2': `repeating-linear-gradient(
          -55deg,
          transparent,
          transparent 30px,
          theme('colors.anim-line-2') 30px,
          theme('colors.anim-line-2') 34px
        )`,
      },
      letterSpacing: { 'wide-krona': '0.1em' },
      boxShadow: { /* ... (keep existing) ... */ },
      transitionTimingFunction: { /* ... (keep existing) ... */ },
      animation: {
        pulseSignal: 'pulseSignal 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        // Renamed and simplified animations for CTASupport
        flowingLinesA: 'flowingLinesA 20s linear infinite',
        flowingLinesB: 'flowingLinesB 25s linear infinite reverse',
        flowingLinesC: 'flowingLinesC 15s linear infinite',
        flowingLinesD: 'flowingLinesD 18s linear infinite reverse',
        flowingLinesE: 'flowingLinesE 12s linear infinite',
      },
      keyframes: {
        pulseSignal: {
          '0%, 100%': { opacity: '0.4', width: '30%' },
          '50%': { opacity: '0.8', width: '70%' },
        },
        // Single, reliable keyframe for background position scrolling
        bgScroll: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '400px 400px' }, // Adjust distance for speed and tiling effect
        },
        flowingLinesA: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(100px, 100px) rotate(360deg)' },
        },
        flowingLinesB: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-100px, -100px) rotate(-360deg)' },
        },
        flowingLinesC: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(50px, -50px) rotate(180deg)' },
        },
        flowingLinesD: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(-50px, 50px) rotate(-180deg)' },
        },
        flowingLinesE: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
          '100%': { transform: 'translate(25px, 25px) rotate(90deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;