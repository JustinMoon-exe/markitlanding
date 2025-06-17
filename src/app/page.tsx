"use client";

import { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection'; // Assuming this exists
import PrinciplesSection from './components/PrinciplesSection'; // Assuming this exists
import CTAForm from './components/CTAForm'; // Assuming this exists
import WhyNowSection from './components/WhyNowSection'; // Assuming this exists
import CompanyDetails from './components/CompanyDetails'; // Assuming this exists
import ForWhomSection from './components/ForWhomSection'; // Assuming this exists
import Footer from './components/Footer'; // Assuming this exists
import ScrollIndicator from './components/ScrollIndicator'; // Assuming this exists
import MobileHomePage from './components/MobileHomePage'; // Assuming this exists

interface CardData {
  id: string;
  title: string;
  content: React.ReactNode;
  colorClass: string;
  textColorClass: string;
}

export default function HomePage() {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const infoCardRef = useRef<HTMLDivElement>(null);
  const titlesContainerRef = useRef<HTMLDivElement>(null);

  const [displayedCardContentData, setDisplayedCardContentData] = useState<CardData | null>(null);
  const [contentAnimationClass, setContentAnimationClass] = useState<string>('');

  const cardData: CardData[] = [
    {
      id: 'company-details',
      title: "Product",
      content: <CompanyDetails />,
      colorClass: "bg-markit-maroon-light",
      textColorClass: "text-off-white",
    },
    {
      id: 'principles-section',
      title: "Principles",
      content: <PrinciplesSection />,
      colorClass: "bg-markit-orange",
      textColorClass: "text-dark-bg",
    },
    {
      id: 'for-whom-section',
      title: "Who",
      content: <ForWhomSection />,
      colorClass: "bg-markit-maroon-light",
      textColorClass: "text-off-white",
    },
    {
      id: 'why-now-section',
      title: "Why",
      content: <WhyNowSection />,
      colorClass: "bg-markit-orange",
      textColorClass: "text-off-white",
    },
    {
      id: 'cta-form',
      title: "Contact",
      content: <CTAForm />,
      colorClass: "bg-markit-orange",
      textColorClass: "text-dark-bg",
    },
  ];

  const activeCardFromSelection = cardData.find(card => card.id === selectedCardId);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectedCardId &&
        infoCardRef.current && !infoCardRef.current.contains(event.target as Node) &&
        titlesContainerRef.current && !titlesContainerRef.current.contains(event.target as Node)
      ) {
        setSelectedCardId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [selectedCardId]);

  // Main animation logic effect
  useEffect(() => {
    if (activeCardFromSelection) {
      if (displayedCardContentData && displayedCardContentData.id !== activeCardFromSelection.id) {
        setContentAnimationClass('animate-contentFadeOut');
        setTimeout(() => {
          setDisplayedCardContentData(activeCardFromSelection);
          setContentAnimationClass('animate-contentFadeIn');
        }, 300);
      } else if (!displayedCardContentData) {
        setDisplayedCardContentData(activeCardFromSelection);
        setContentAnimationClass('animate-contentFadeIn');
      } else if (displayedCardContentData.id === activeCardFromSelection.id && contentAnimationClass !== 'animate-contentFadeIn') {
         if (contentAnimationClass === 'animate-contentFadeOut') {
            setContentAnimationClass('animate-contentFadeIn');
         } else if (contentAnimationClass === '') {
            // Content is static and matches selection, do nothing to prevent re-animation
         }
      }
    } else {
      if (displayedCardContentData) {
        setContentAnimationClass('animate-contentFadeOut');
        setTimeout(() => {
          setDisplayedCardContentData(null);
        }, 300);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCardId, activeCardFromSelection, displayedCardContentData, contentAnimationClass]);


  // Effect to clear animation class after fadeIn completes
  useEffect(() => {
    if (contentAnimationClass === 'animate-contentFadeIn') {
      const timer = setTimeout(() => {
        setContentAnimationClass('');
      }, 400); // Match contentFadeIn duration
      return () => clearTimeout(timer);
    }
  }, [contentAnimationClass]);

  if (isMobile) {
    return <MobileHomePage />;
  }

  const getTitleStyling = (card: CardData, isSelected: boolean, isHovered: boolean) => {
    let textColorClass = 'text-off-white';
    const glowClass = ''; // Was never reassigned

    let sizeClass = 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl';
    if (isSelected) {
      sizeClass = 'text-5xl sm:text-7xl md:text-8xl lg:text-9xl';
      if (card.colorClass === 'bg-markit-purple') {
        textColorClass = 'text-markit-purple';
      } else if (card.colorClass === 'bg-markit-maroon-light') {
        textColorClass = 'text-markit-maroon-light';
      } else {
        textColorClass = 'text-markit-orange';
      }
    } else if (isHovered) {
        textColorClass = 'text-off-white';
    }

    const transformClass = isHovered && !isSelected ? 'scale-110' : ''; // Was never reassigned
    const dimmingClass = selectedCardId && selectedCardId !== card.id && hoveredCardId !== card.id ? 'opacity-50' : ''; // Was never reassigned

    return `${textColorClass} ${glowClass} ${sizeClass} ${transformClass} ${dimmingClass}`;
  };

  const lineWeights = ['h-[1px]', 'h-[2px]', 'h-[1px]', 'h-[3px]', 'h-[1px]', 'h-[2px]'];
  const lineWeightsVertical = ['w-[1px]', 'w-[2px]', 'w-[1px]', 'w-[3px]', 'w-[1px]', 'w-[2px]'];
  const numMajorHorizontalLines = 4;
  const numMajorVerticalLines = 3;
  const startOffsetPercent = 5;
  const horizontalLineSpacing = (100 - 2 * startOffsetPercent) / (numMajorHorizontalLines - 1);
  const verticalLineSpacing = (190 - 2 * startOffsetPercent) / (numMajorVerticalLines - 1);

  const cardForShellStyling = activeCardFromSelection || displayedCardContentData;

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      <div className="fixed inset-0 z-[-1] bg-dark-bg pointer-events-none"
        style={{
          backgroundImage:
            `url('data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='1' stitchTiles='stitch'%2F%3E%3C%2Ffilter%3E%3Crect width='100%25\' height='100%25\' filter='url(%23noiseFilter)' opacity='0.05'%2F%3E%3C%2Fsvg%3E\')`,
          backgroundSize: 'auto',
          backgroundRepeat: 'repeat',
        }} />
      <div className="fixed inset-0 pointer-events-none z-[-1]"
           style={{
            backgroundImage: `radial-gradient(ellipse at top right, rgba(120, 71, 135, 0.1), transparent 70%),
                              radial-gradient(ellipse at bottom left, rgba(255, 116, 0, 0.08), transparent 70%)`,
            backgroundAttachment: 'fixed',
           }} />

      {/* <div className="fixed inset-0 pointer-events-none opacity-70 z-[0]">
        {Array.from({ length: numMajorHorizontalLines }).map((_, i) => (
          <div
            key={`h-${i}`}
            className={`absolute w-full ${lineWeights[i % lineWeights.length]} bg-markit-orange animate-moveHorizontal drop-shadow-[0_0_5px_rgba(255,116,0,0.5)]`}
            style={{ top: `${startOffsetPercent + i * horizontalLineSpacing}%`, animationDelay: `-${i * 2}s` }}
          />
        ))}
      </div> */}
      {/* <div className="fixed inset-0 pointer-events-none opacity-70 z-[0]">
        {Array.from({ length: numMajorVerticalLines }).map((_, i) => (
          <div
            key={`v-${i}`}
            className={`absolute h-full ${lineWeightsVertical[i % lineWeightsVertical.length]} bg-markit-orange animate-moveVertical drop-shadow-[0_0_5px_rgba(255,116,0,0.5)]`}
            style={{ left: `${startOffsetPercent + i * verticalLineSpacing}%`, animationDelay: `-${i * 2.75}s` }}
          />
        ))}
      </div> */}
      <div className="fixed inset-0 pointer-events-none z-[0]">
        {Array.from({ length: numMajorHorizontalLines }).map((_, hIndex) => (
          Array.from({ length: numMajorVerticalLines }).map((_, vIndex) => {
            const topPosition = startOffsetPercent + hIndex * horizontalLineSpacing;
            const leftPosition = startOffsetPercent + vIndex * verticalLineSpacing;
            const delay = (hIndex * numMajorVerticalLines + vIndex) * 0.25;
            return (
              <div
                key={`ping-${hIndex}-${vIndex}`}
                className="absolute w-2 h-2 bg-transparent border-markit-orange rounded-full animate-radarPing"
                style={{ top: `${topPosition}%`, left: `${leftPosition}%`, animationDelay: `${delay}s` }}
              />
            );
          })
        ))}
      </div>
      <div className="fixed inset-0 pointer-events-none opacity-10 z-[0]">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`ds-h-${i}`} className="absolute w-full h-[0.5px] bg-markit-orange animate-moveHorizontal" style={{ top: `${i * 5}%`, animationDelay: `-${i * 1.0}s`, animationDuration: '15s' }} />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={`ds-v-${i}`} className="absolute h-full w-[0.5px] bg-markit-orange animate-moveVertical" style={{ left: `${i * 5}%`, animationDelay: `-${i * 1.0}s`, animationDuration: '15s' }} />
        ))}
      </div>

      <HeroSection />

      <main className="flex-grow flex justify-between px-16 md:px-40 lg:px-55 py-4 sm:py-8 md:py-12 lg:py-16 relative z-10">
        <div className="w-full flex justify-between gap-x-16 items-start">
          <div ref={titlesContainerRef} className="flex flex-col w-1/3 space-y-4">
            {cardData.map((card) => (
              <h3
                key={card.id}
                onClick={() => setSelectedCardId(card.id)}
                onMouseEnter={() => setHoveredCardId(card.id)}
                onMouseLeave={() => setHoveredCardId(null)}
                className={`font-amiko font-bold cursor-pointer transition-all duration-300 ease-in-out origin-left whitespace-nowrap
                  ${getTitleStyling(card, selectedCardId === card.id, hoveredCardId === card.id)}
                `}
              >
                {card.title}
              </h3>
            ))}
          </div>

          <div className={`relative w-1/2
            transition-all duration-500 ease-in-out transform
            ${selectedCardId || (displayedCardContentData && !activeCardFromSelection)
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-full pointer-events-none'}
          `}>
            {cardForShellStyling && (
              <div
                ref={infoCardRef}
                className={`glass-card rounded-lg shadow-xl p-8 w-full h-auto
                  transition-colors duration-300 ease-in-out
                  ${cardForShellStyling.colorClass === 'bg-markit-purple' ? 'purple-glow' :
                    cardForShellStyling.colorClass === 'bg-markit-maroon-light' ? 'maroon-glow' : ''}
                  ${cardForShellStyling.colorClass} ${cardForShellStyling.textColorClass}
                `}
              >
                <button
                  onClick={() => setSelectedCardId(null)}
                  className="absolute top-4 right-4 text-off-white hover:text-markit-orange transition-colors duration-200 z-20"
                  aria-label="Close info card"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <div className="relative w-full h-full">
                  {displayedCardContentData && (
                     <div
                        key={displayedCardContentData.id}
                        className={`prose prose-invert max-w-none 
                                    ${contentAnimationClass}
                                    ${!contentAnimationClass && displayedCardContentData ? 'opacity-100' : ''} 
                                    ${!contentAnimationClass && !displayedCardContentData && contentAnimationClass !== 'animate-contentFadeOut' ? 'opacity-0' : ''}
                                  `}
                      >
                       {displayedCardContentData.content}
                     </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
      <ScrollIndicator />
    </div>
  );
}