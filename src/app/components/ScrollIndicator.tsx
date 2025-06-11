"use client";

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100; // How far down to scroll before fading out

      if (currentScrollY > scrollThreshold) {
        // If scrolled down past threshold, hide indicator
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // If scrolling up, show indicator
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 text-off-white cursor-pointer
                 transition-opacity duration-500 z-50 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
      title="Scroll to bottom"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7"
        />
      </svg>
    </div>
  );
};

export default ScrollIndicator; 