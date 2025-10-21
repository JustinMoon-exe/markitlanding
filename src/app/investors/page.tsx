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
            style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', color: 'white', gap: '250px', marginTop: '8rem'}}
        >
            <div style={{ maxWidth: '800px', marginTop: '-1.5rem', marginLeft: '-22rem' }}>
                <h1 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Join Our Journey</h1>
                <p style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                    Welcome, investors! Here you&apos;ll find key information about our vision, progress, and how you can get involved. 
                    Ready to connect? Book a meeting using the calendar. Per Y-Combinator&apos;s request, we ask that you book time after the November 17th.
                </p>
                                <a
                                        href="https://sulky-scowl-d16.notion.site/MarkIt-Investor-Memo-2883852a5b2a80ce8545fb62a269ee18"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '0.6rem',
                                                marginTop: '1rem',
                                                padding: '0.5rem 1.2rem',
                                                borderRadius: '5px',
                                                border: 'none',
                                                backgroundColor: 'var(--accent)',
                                                color: 'white',
                                                cursor: 'pointer',
                                                fontWeight: 600,
                                                textDecoration: 'none',
                                                fontSize: '1rem'
                                        }}
                                >
                                        <Image src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" width={16} height={16} style={{ verticalAlign: 'middle' }} />
                                        Investor Memo
                                </a>

                                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.7rem' }}>
                                    <span style={{ color: 'var(--muted)', fontWeight: 600, fontSize: '1rem' }}>Backed by:</span>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', alignItems: 'flex-start' }}>
                                        <a href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.7rem' }}>
                                            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" alt="Y Combinator" width={22} height={22} style={{ borderRadius: '6px' }} />
                                            <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Y Combinator</span>
                                        </a>
                                        <a href="https://fusen.world/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '0.3rem', justifyContent: 'flex-start' }}>
                                            <Image src="/fusen_logo.png" alt="Fusen" width={26} height={26} style={{ borderRadius: '4px', padding: '2px', marginRight: '0.1rem' }} />
                                            <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem', marginLeft: 0 }}>Fusen</span>
                                        </a>
                                    </div>
                                </div>
            </div>
            <div style={{ width: '20rem', height: '26.5rem', borderRadius: '10px' }}>
                <iframe
                    src="https://calendly.com/chan-markittrade/30min?month=2025-10"
                    title="Calendar Scheduling"
                    width="200%"
                    height="200%"
                ></iframe>
            </div>
        </main>
        </>
    );
}