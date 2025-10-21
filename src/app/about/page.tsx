import Logo from '@/components/Logo';
import Link from 'next/link';

export default function AboutPage() {
    return (
            <>
              <div style={{ position: 'fixed', top: '1.2rem', left: '1.5rem', zIndex: 1000 }}>
                                <Link href="/">
                                    <Logo />
                                </Link>
              </div>
              <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop: '3rem', gap: '2rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.2rem', textAlign: 'center' }}>About MarkIt&apos;s Founders</h1>
            <img src="/founders.jpg" alt="MarkIt Founders" style={{ width: '650px', borderRadius: '12px', boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }} />
            <div style={{ color: 'var(--muted)', fontSize: '1rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                Founders at MEMA AfterMarket Suppliers Convention 😊
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20rem', alignItems: 'flex-start', justifyContent: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
                    <a href="https://www.linkedin.com/in/chanhkim/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
                        <img src="/linkedin_logo.png" alt="LinkedIn" style={{ width: '2rem', height: '2rem', borderRadius: '4px' }} />
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem'}}>Chanhyung Kim (CEO)</span>
                    </a>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1.6rem', marginTop: '0.3rem' }}>
                        <img src="/michelin_logo.png" alt="Michelin" style={{ width: '6rem', objectFit: 'contain' }} />
                        <img src="/porsche_logo.png" alt="Porsche" style={{ width: '3.5rem', objectFit: 'contain' }} />
                        <img src="/tesla_logo.png" alt="Tesla" style={{ width: '5rem', objectFit: 'contain' }} />
                        <img src="/lucid_logo.png" alt="Lucid" style={{ width: '9rem', objectFit: 'contain' }} />
                    </div>
                        {/* Arrows pointing to Porsche and Tesla logos using arrow.png */}
                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10rem', marginTop: '0.5rem' }}>
                            <img src="/arrow.png" alt="Arrow to Porsche" style={{ width: '2.2rem', height: '1.7rem', objectFit: 'contain', rotate: '-70deg', marginLeft: '-5rem' }} />
                            <img src="/arrow.png" alt="Arrow to Tesla" style={{ width: '2.2rem', height: '2.2rem', objectFit: 'contain', rotate: '-70deg', marginLeft: '-6rem' }} />
                        </div>
                        {/* Eraser Dust text as image */}
                        <div style={{ marginTop: '0.3rem', textAlign: 'center' }}>
                            <img 
                                src="/eraser_text.png" 
                                alt="Eraser Text" 
                                style={{ 
                                    marginTop: '1rem',
                                    width: '35rem', 
                                    objectFit: 'contain', 
                                    transform: 'rotate(10deg)', 
                                    marginLeft: '-3.5rem', 
                                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.18))' 
                                }} 
                            />
                        </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.7rem' }}>
                    <a href="https://www.linkedin.com/in/rsaav/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', textDecoration: 'none' }}>
                        <img src="/linkedin_logo.png" alt="LinkedIn" style={{ width: '2rem', height: '2rem', borderRadius: '4px' }} />
                        <span style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem' }}>Roland Saavedra (CTO)</span>
                    </a>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1.2rem', marginTop: '0.3rem' }}>
                        <img src="/plaid_logo.png" alt="Plaid" style={{ width: '5rem', objectFit: 'contain' }} />
                        <img src="/google_logo.png" alt="Google" style={{ width: '6rem', objectFit: 'contain' }} />
                        <img src="/roblox_logo.jpg" alt="Roblox" style={{ width: '5rem', objectFit: 'contain' }} />
                    </div>
                </div>
            </div>
        </main>
            </>
    );
}