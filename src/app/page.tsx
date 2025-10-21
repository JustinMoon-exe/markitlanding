"use client";

import { useState, useEffect, useRef } from 'react';
import './globals.css';

// Use the Formspree URL found in CTAForm.tsx
const FORM_URL = 'https://formspree.io/f/mwpbolyl';
const CALENDLY_URL = 'https://calendly.com/chan-markittrade/30min';
const NOTION_URL = 'https://www.notion.so/your-investor-page';

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

  function openWaitlist() {
    if (FORM_URL) {
      window.open(FORM_URL, '_blank', 'noopener,noreferrer');
      return;
    }
    setShowWaitlist(true);
  }

  return (
    <div className="minimal-root centered-root">
      <main className="hero centered-hero">
        <img src="/logo.png" alt="MarkIt logo" className="brand-logo" />
        <h1 className="hero-title">MarkIt</h1>
        <p className="tagline">silver bullet for trade compliance</p>
        <div className="ctas">
          <button className="btn primary" onClick={openWaitlist}>Join Waitlist</button>
          <button className="btn ghost" onClick={() => setShowInvestors(true)}>Investors</button>
        </div>

        {showWaitlist && (
          <section className="panel" ref={(el) => { waitRef.current = el || null; }}>
            <h2>Waitlist</h2>
            <p className="muted">You'll be taken to our external form.</p>
            <div className="panel-actions">
              <a className="btn primary" href={FORM_URL} target="_blank" rel="noopener noreferrer">Open Form</a>
            </div>
          </section>
        )}

        {showInvestors && (
          <section className="panel" ref={(el) => { investRef.current = el || null; }}>
            <h2>Investors</h2>
            <ul className="investor-links">
              <li><a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">Schedule on Calendly</a></li>
              <li><a href={NOTION_URL} target="_blank" rel="noopener noreferrer">Investor Notion Page</a></li>
            </ul>
          </section>
        )}
      </main>

      <footer className="footer muted-dark">© MarkIt</footer>
    </div>
  );
}

// Click-outside and ESC handling placed at module-level so component remains focused on rendering
// (Handled inside the component via useEffect above)