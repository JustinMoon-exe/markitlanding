import type { Metadata } from 'next';
import { Krona_One, Amiko } from 'next/font/google';
import { Analytics }  from '@vercel/analytics/next';
import './globals.css';

const kronaOne = Krona_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-krona-one',
  display: 'swap',
});

const amiko = Amiko({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-amiko',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MarkIt - The Future of Trade Data',
  description: 'Built for signal, not noise. Stay informed about the future of financial data.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${kronaOne.variable} ${amiko.variable} antialiased`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}