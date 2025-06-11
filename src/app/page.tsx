/*
Completely Revised: Bento Box Layout Inspired by NextJS Portfolio Example
- Restored global background gradient (no background overrides here)
- Parent grid container uses fixed height of 600px to ensure uniform card sizes
- 3×3 grid: explicit grid-rows and cols for equal units
- CompanyDetails spans 2 columns & 2 rows; CTAForm spans 1 col & 2 rows; other sections each 1×1
- All cards fill their grid cell with `h-full w-full`
- Grid centered in the view, occupying roughly half the screen
- Responsive fallback: single column stacking on small viewports
*/

"use client";

import { useState, useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import CTAForm from '@/components/CTAForm';
import CompanyDetails from '@/components/CompanyDetails';
import WhyNowSection from '@/components/WhyNowSection';
import ForWhomSection from '@/components/ForWhomSection';
import PrinciplesSection from './components/PrinciplesSection';
import Footer from '@/components/Footer';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import MobileHomePage from '@/components/MobileHomePage'; // Import the new mobile page
import ScrollIndicator from '@/components/ScrollIndicator'; // Import the ScrollIndicator component
// import { Catamaran } from 'next/font/google'; // Not used in this component
// import Logo from './components/Logo'; // Not used in this component
// import { randInt } from 'three/src/math/MathUtils.js'; // Not used in this component

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Tailwind's 'md' breakpoint is 768px
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile) {
    return <MobileHomePage />;
  }

  // Define varying line weights/thicknesses
  const lineWeights = ['h-[1px]', 'h-[2px]', 'h-[1px]', 'h-[3px]', 'h-[1px]', 'h-[2px]'];
  const lineWeightsVertical = ['w-[1px]', 'w-[2px]', 'w-[1px]', 'w-[3px]', 'w-[1px]', 'w-[2px]'];

  // Define positions and spacing for main lines to calculate intersections for pings
  const numMajorHorizontalLines = 4;
  const numMajorVerticalLines = 3;
  const startOffsetPercent = 5; // Percentage offset from the edge

  // Calculate spacing based on offset and number of lines
  const horizontalLineSpacing = (100 - 2 * startOffsetPercent) / (numMajorHorizontalLines - 1);
  const verticalLineSpacing = (190 - 2 * startOffsetPercent) / (numMajorVerticalLines - 1);

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Absolute Background Layer: Color, Noise, and Gradients */}
      <div className="fixed inset-0 z-[-1] bg-dark-bg pointer-events-none"
        style={{
          backgroundImage:
            `url(\'data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'1.5\' numOctaves=\'1\' stitchTiles=\'stitch\'%2F%3E%3C%2Ffilter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'%2F%3E%3C%2Fsvg%3E\')`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }} />
      <div className="fixed inset-0 pointer-events-none z-[-1]"
           style={{
            backgroundImage: `radial-gradient(ellipse at top right, rgba(120, 71, 135, 0.1), transparent 70%),
                              radial-gradient(ellipse at bottom left, rgba(255, 116, 0, 0.08), transparent 70%)`,
            backgroundAttachment: 'fixed',
           }} />

      {/* Global Animated Grid Lines */}
      {/* Main Horizontal Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-70 z-[0]">
        {Array.from({ length: numMajorHorizontalLines }).map((_, i) => (
          <div
            key={`h-${i}`}
            className={`absolute w-full ${lineWeights[i % lineWeights.length]} bg-markit-orange animate-moveHorizontal drop-shadow-[0_0_5px_rgba(255,116,0,0.5)]`}
            style={{ top: `${startOffsetPercent + i * horizontalLineSpacing}%`, animationDelay: `-${i * 2}s` }}
          />
        ))}
      </div>

      {/* Main Vertical Lines */}
      <div className="fixed inset-0 pointer-events-none opacity-70 z-[0]">
        {Array.from({ length: numMajorVerticalLines }).map((_, i) => (
          <div
            key={`v-${i}`}
            className={`absolute h-full ${lineWeightsVertical[i % lineWeightsVertical.length]} bg-markit-orange animate-moveVertical drop-shadow-[0_0_5px_rgba(255,116,0,0.5)]`}
            style={{ left: `${startOffsetPercent + i * verticalLineSpacing}%`, animationDelay: `-${i * 2.75}s` }}
          />
        ))}
      </div>

      {/* Intersection Pings for Major Lines */}
      <div className="fixed inset-0 pointer-events-none z-[0]"> {/* Same z-index as lines */}
        {Array.from({ length: numMajorHorizontalLines }).map((_, hIndex) => (
          Array.from({ length: numMajorVerticalLines }).map((_, vIndex) => {
            const topPosition = startOffsetPercent + hIndex * horizontalLineSpacing;
            const leftPosition = startOffsetPercent + vIndex * verticalLineSpacing;
            // Stagger animation delays for a more dynamic effect
            const delay = (hIndex * numMajorVerticalLines + vIndex) * 0.25; // Adjust 0.25s factor as needed

            return (
              <div
                key={`ping-${hIndex}-${vIndex}`}
                // w-2 h-2 sets a base size (8px). The animation's `scale` will control visual size.
                // border-markit-orange sets the color. Animation's `borderWidth` controls thickness.
                className="absolute w-2 h-2 bg-transparent border-markit-orange rounded-full animate-radarPing"
                style={{
                  top: `${topPosition}%`,
                  left: `${leftPosition}%`,
                  animationDelay: `${delay}s`,
                }}
              />
            );
          })
        ))}
      </div>

      {/* Fainter Data Stream Lines (Horizontal) */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-[0]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`ds-h-${i}`}
            className="absolute w-full h-[0.5px] bg-markit-orange animate-moveHorizontal"
            style={{ top: `${i * 5}%`, animationDelay: `-${i * 1.0}s`, animationDuration: '15s' }}
          />
        ))}
      </div>

      {/* Fainter Data Stream Lines (Vertical) */}
      <div className="fixed inset-0 pointer-events-none opacity-10 z-[0]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`ds-v-${i}`}
            className="absolute h-full w-[0.5px] bg-markit-orange animate-moveVertical"
            style={{ left: `${i * 5}%`, animationDelay: `-${i * 1.0}s`, animationDuration: '15s' }}
          />
        ))}
      </div>

      {/* Full-screen hero */}
      <HeroSection />

      {/* Bento Box Section */}
      <main className="flex-grow flex items-center justify-center p-4 sm:p-4 md:p-8 mb-1 md:mb-8 relative z-10">
        <div className="w-full max-w-7xl">
          <BentoGrid className="auto-rows-auto sm:auto-rows-[208px]">
            <BentoItem rowSpan={1} colSpan={2}>
                <CompanyDetails  />
            </BentoItem>
            <BentoItem rowSpan={1} colSpan={1} className="hidden md:block">
               <div className="min-h-[1px] min-w-[1px] bg-transparent"></div>
            </BentoItem>
            <BentoItem rowSpan={1} colSpan={1}>
              <PrinciplesSection />
            </BentoItem>
            <BentoItem rowSpan={1} colSpan={1}>
              <ForWhomSection />
            </BentoItem>
            <BentoItem rowSpan={2} colSpan={1}>
              <WhyNowSection />
            </BentoItem>
            <BentoItem rowSpan={1} colSpan={1} className="hidden md:block">
               <div className="min-h-[1px] min-w-[1px] bg-transparent"></div>
            </BentoItem>
            <BentoItem rowSpan={1} colSpan={1}>
              <CTAForm />
            </BentoItem>
          </BentoGrid>
           <div className='p-3.5'/>
          </div>
        </main>

      <Footer />
      <ScrollIndicator />
    </div>
  );
}