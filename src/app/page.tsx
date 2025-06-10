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

import HeroSection from '@/components/HeroSection';
import CTAForm from '@/components/CTAForm';
import CompanyDetails from '@/components/CompanyDetails';
import WhyNowSection from '@/components/WhyNowSection';
import ForWhomSection from '@/components/ForWhomSection';
import PrinciplesSection from './components/PrinciplesSection';
import TopoMap from '@/components/TopoMap';
import Footer from '@/components/Footer';
import { BentoGrid, BentoItem } from '@/components/BentoGrid';
import { Catamaran } from 'next/font/google';
import Logo from './components/Logo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Full-screen hero */}
      <HeroSection />

      {/* Bento Box Section */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 mb-32">
        <div className="w-full max-w-5xl">
          <BentoGrid className="auto-rows-[160px] grid-cols-3">
            {/* Row 1: aab */}
  
            <BentoItem rowSpan={1} colSpan={2}>
                <CompanyDetails  />
            </BentoItem>
            <BentoItem rowSpan={2} colSpan={1}>
              <WhyNowSection />
            </BentoItem>

            <BentoItem rowSpan={1} colSpan={1}>
              <PrinciplesSection />
            </BentoItem>

            <BentoItem rowSpan={1} colSpan={1}>
              <ForWhomSection />
            </BentoItem>

            {/* <BentoItem rowSpan={2} colSpan={1}>
              <div >
              <h1 className="font-krona uppercase tracking-wide-krona text-markit-orange leading-none flex items-baseline -mb-1 sm:-mb-2 md:-mb-3">
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[5rem]">M</span>
            <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[3.5rem]">ARK</span>
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[5rem]">I</span>
            <span className="text-[3.5rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[3.5rem]">T</span>
          </h1>
          <span
            className="absolute bottom-[-8px] left-0 block h-[3px] sm:h-[4px] w-0 bg-markit-orange
                       transition-all duration-1000 ease-in-out group-hover:w-full"
          ></span>
              </div>
            
            </BentoItem> */}

            <BentoItem rowSpan={1} colSpan={2}>
              <TopoMap />
            </BentoItem>

            <BentoItem rowSpan={1} colSpan={1}>
              <CTAForm />
            </BentoItem>

          </BentoGrid>
        </div>
      </main>

      <Footer />
    </div>
  );
}
