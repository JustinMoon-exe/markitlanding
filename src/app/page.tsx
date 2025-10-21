"use client";

import { useState, useEffect, useRef } from 'react';
import './globals.css';
import WaitlistForm from './components/WaitlistForm';
import Link from 'next/dist/client/link';
import Image from 'next/image';

export default function HomePage() {
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [showInvestors, setShowInvestors] = useState(false);

  const waitRef = useRef<HTMLElement | null>(null);
  const investRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      const target = e.target as Node;
      if (showWaitlist && waitRef.current && !waitRef.current.contains(target)) {
        setShowWaitlist(false);
      }
      if (showInvestors && investRef.current && !investRef.current.contains(target)) {
        setShowInvestors(false);
      }
    }

    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        if (showWaitlist) setShowWaitlist(false);
        if (showInvestors) setShowInvestors(false);
      }
    }

    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, [showWaitlist, showInvestors]);

  return (
    <div className="minimal-root centered-root" style={{ position: 'relative', minHeight: '100vh' }}>
      <main
        className={`hero centered-hero${showWaitlist ? ' slide-up' : ''}`}
        style={{
          transition: 'transform 0.6s cubic-bezier(.77,0,.18,1)',
          transform: showWaitlist ? 'translateY(-350px)' : 'translateY(0)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '6rem'}}>
          <Image src="/logo.png" alt="MarkIt logo" width={120} height={80} className="brand-logo" />
          <h1 className="hero-title" style={{ margin: 0 }}>MarkIt</h1>
        </div>
        <p className="tagline">silver bullet for trade compliance</p>
        <div className="ctas">
          <Link href="/about">
            <button className="btn ghost">Founders</button>
          </Link>
          <button className="btn primary" onClick={() => setShowWaitlist(true)}>Join Waitlist</button>
          <Link href="/investors">
            <button className="btn ghost">Investors</button>
          </Link>
        </div>
      </main>

      {showWaitlist && (
        <div
          className="waitlist-form-container fade-in"
          style={{
            position: 'absolute',
            top: 'calc(50% - 120px)',
            left: 0,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            zIndex: 10,
            animation: 'fadeIn 1.5s ease',
          }}
        >
          <WaitlistForm onClose={() => setShowWaitlist(false)} />
        </div>
      )}

      <footer className="footer muted-dark" style={{ position: 'fixed', left: 0, bottom: 0, width: '100%' }}>© MarkIt</footer>
    </div>
  );
}

// Click-outside and ESC handling placed at module-level so component remains focused on rendering
// (Handled inside the component via useEffect above)