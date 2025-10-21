import Logo from '../components/Logo';
import Image from 'next/image';

export default function InvestorPage() {
  return (
    <>
      <div style={{ position: 'fixed', top: '1.2rem', left: '1.5rem', zIndex: 1000 }}>
        <span>
          <Logo />
        </span>
      </div>

      <main
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          color: 'white',
          marginTop: '8rem',
          padding: '2rem 4rem',
          gap: '4rem',
          flexWrap: 'wrap',
          overflowX: 'hidden',
        }}
      >
        {/* Left Side: Text + Links */}
        <div
          style={{
            flex: '1 1 45%',
            maxWidth: '700px',
            minWidth: '320px',
          }}
        >
          <h1 style={{ fontSize: '2.3rem', marginBottom: '1.5rem' }}>Join Our Journey</h1>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Welcome, investors! Here you&apos;ll find key information about our vision, progress, and how you can get
            involved. Ready to connect? Book a meeting using the calendar. Per Y-Combinator&apos;s request, we ask that
            you book time after November 17th.
          </p>

          <a
            href="https://sulky-scowl-d16.notion.site/MarkIt-Investor-Memo-2883852a5b2a80ce8545fb62a269ee18"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              marginTop: '1.2rem',
              padding: '0.6rem 1.4rem',
              borderRadius: '6px',
              border: 'none',
              backgroundColor: 'var(--accent)',
              color: 'white',
              cursor: 'pointer',
              fontWeight: 600,
              textDecoration: 'none',
              fontSize: '1rem',
            }}
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
              alt="Notion"
              width={18}
              height={18}
              style={{ verticalAlign: 'middle' }}
            />
            Investor Memo
          </a>

          <div
            style={{
              marginTop: '2rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '0.7rem',
            }}
          >
            <span style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '1rem' }}>Backed by:</span>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.7rem',
                alignItems: 'flex-start',
              }}
            >
              <a
                href="https://www.ycombinator.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  gap: '0.7rem',
                }}
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg"
                  alt="Y Combinator"
                  width={24}
                  height={24}
                  style={{ borderRadius: '6px' }}
                />
                <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Y Combinator</span>
              </a>

              <a
                href="https://fusen.world/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  gap: '0.4rem',
                }}
              >
                <Image
                  src="/fusen_logo.png"
                  alt="Fusen"
                  width={28}
                  height={28}
                  style={{ borderRadius: '4px', padding: '2px', marginRight: '0.1rem' }}
                />
                <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Fusen</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Side: Calendly */}
        <div
          style={{
            flex: '0 1 45%',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            maxWidth: '600px',
            minWidth: '350px',
            height: '34rem',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <iframe
            src="https://calendly.com/chan-markittrade/30min?month=2025-10"
            title="Calendar Scheduling"
            width="100%"
            height="100%"
            style={{
              border: 'none',
              transform: 'scale(1.05)', // slightly enlarge it
              transformOrigin: 'center',
            }}
          ></iframe>
        </div>
      </main>
    </>
  );
}

